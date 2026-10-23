import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

function escapeHtml(text: string = ''): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramMessage(htmlContent: string): Promise<{ success: boolean; delivered: boolean; error?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("[Telegram Bot] Warning: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in environment variables.");
    console.log("[Telegram Bot Simulation Payload]:\n" + htmlContent.replace(/<[^>]*>/g, ''));
    return {
      success: true,
      delivered: false,
      error: "Telegram credentials not configured in environment (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID)"
    };
  }

  try {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlContent,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const data = await response.json() as { ok: boolean; description?: string };
    if (!response.ok || !data.ok) {
      console.error("[Telegram Bot API Error]:", data.description || response.statusText);
      return {
        success: false,
        delivered: false,
        error: data.description || `Telegram API responded with HTTP ${response.status}`,
      };
    }

    console.log("[Telegram Bot] Notification successfully delivered to Chat ID:", chatId);
    return { success: true, delivered: true };
  } catch (err: any) {
    console.error("[Telegram Bot Fetch Exception]:", err.message || err);
    return {
      success: false,
      delivered: false,
      error: err.message || "Failed to reach Telegram API",
    };
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Body parsing
  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      telegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID)
    });
  });

  // API: Status of Telegram Bot integration
  app.get("/api/telegram-status", (req, res) => {
    res.json({
      configured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
      hasToken: Boolean(process.env.TELEGRAM_BOT_TOKEN),
      hasChatId: Boolean(process.env.TELEGRAM_CHAT_ID),
    });
  });

  // API: Contact Form Submission -> Forward to Telegram Bot
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message, language = 'en', source = 'Contact Form' } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Name, email, and message are required."
        });
      }

      const timestamp = new Date().toLocaleString("en-GB", {
        timeZone: "Africa/Cairo",
        dateStyle: "full",
        timeStyle: "medium",
      });

      const telegramMessage = [
        `📩 <b>NEW WEBSITE INQUIRY — AQUAWAY TOURS</b>`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`,
        `👤 <b>Name:</b> ${escapeHtml(name)}`,
        `📧 <b>Email:</b> <code>${escapeHtml(email)}</code>`,
        `📞 <b>Phone / WhatsApp:</b> <code>${phone ? escapeHtml(phone) : 'Not provided'}</code>`,
        `🌐 <b>Preferred Language:</b> ${escapeHtml(language.toUpperCase())}`,
        `📍 <b>Source:</b> ${escapeHtml(source)}`,
        `🕒 <b>Time (Hurghada):</b> ${escapeHtml(timestamp)}`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`,
        `💬 <b>Client Message:</b>`,
        `<i>"${escapeHtml(message)}"</i>`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`,
        `⚡️ <i>Action: Reply directly via Email (${escapeHtml(email)}) or WhatsApp (${phone ? escapeHtml(phone) : 'N/A'})</i>`
      ].join("\n");

      const result = await sendTelegramMessage(telegramMessage);

      return res.json({
        success: true,
        delivered: result.delivered,
        note: result.error ? result.error : undefined,
        message: "Your message has been received! Our team will contact you shortly."
      });
    } catch (error: any) {
      console.error("[Contact API Handler Error]:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error processing contact submission."
      });
    }
  });

  // API: Custom Planner / Direct Booking Inquiry -> Forward to Telegram Bot
  app.post("/api/booking-inquiry", async (req, res) => {
    try {
      const { 
        name, 
        email, 
        phone, 
        tripType, 
        date, 
        hotel, 
        guests, 
        catering, 
        celebration, 
        notes, 
        language = 'en',
        currency = 'EUR'
      } = req.body;

      const timestamp = new Date().toLocaleString("en-GB", {
        timeZone: "Africa/Cairo",
        dateStyle: "full",
        timeStyle: "medium",
      });

      const cateringText = Array.isArray(catering) && catering.length > 0 
        ? catering.join(", ") 
        : "None specified";

      const telegramMessage = [
        `🛥 <b>NEW VIP TRIP / CUSTOM PLANNER REQUEST</b>`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`,
        `👤 <b>Client Name:</b> ${escapeHtml(name || 'Anonymous Guest')}`,
        `📧 <b>Email:</b> <code>${escapeHtml(email || 'Not provided')}</code>`,
        `📞 <b>Phone / WhatsApp:</b> <code>${phone ? escapeHtml(phone) : 'Not provided'}</code>`,
        `🎯 <b>Trip Experience:</b> <b>${escapeHtml(tripType || 'Custom Private Charter')}</b>`,
        `📅 <b>Preferred Date:</b> ${escapeHtml(date || 'Flexible')}`,
        `👥 <b>Party / Group:</b> ${escapeHtml(guests || 'Not specified')}`,
        `🏨 <b>Hotel / Resort:</b> ${escapeHtml(hotel || 'Not specified')}`,
        `🥂 <b>Occasion / Celebration:</b> ${escapeHtml(celebration || 'None')}`,
        `🍽 <b>Catering Preferences:</b> ${escapeHtml(cateringText)}`,
        `💰 <b>Preferred Currency:</b> ${escapeHtml(currency)}`,
        `🌐 <b>Language:</b> ${escapeHtml(language.toUpperCase())}`,
        `🕒 <b>Time (Hurghada):</b> ${escapeHtml(timestamp)}`,
        `━━━━━━━━━━━━━━━━━━━━━━━━`,
        notes ? `📝 <b>Special Requests:</b>\n<i>"${escapeHtml(notes)}"</i>\n━━━━━━━━━━━━━━━━━━━━━━━━` : '',
        `⚡️ <i>Action: Send quotation and confirmation to client</i>`
      ].filter(Boolean).join("\n");

      const result = await sendTelegramMessage(telegramMessage);

      return res.json({
        success: true,
        delivered: result.delivered,
        note: result.error ? result.error : undefined,
        message: "Custom inquiry forwarded to our operations dispatch team."
      });
    } catch (error: any) {
      console.error("[Booking Inquiry API Handler Error]:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error processing booking inquiry."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[AquaWay Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
