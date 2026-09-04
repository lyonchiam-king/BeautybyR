import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory + persistent storage file for bookings spreadsheet
const BOOKINGS_FILE = path.join(process.cwd(), "bookings_spreadsheet.json");
const CSV_FILE = path.join(process.cwd(), "bookings_spreadsheet.csv");

// Initialize CSV header if not present
if (!fs.existsSync(CSV_FILE)) {
  const csvHeader = "Timestamp,Booking ID,Customer Name,Phone Number,Email,Treatment Selected,Preferred Date,Preferred Time,Notes,Source\n";
  fs.writeFileSync(CSV_FILE, csvHeader, "utf-8");
}

function loadBookings() {
  if (fs.existsSync(BOOKINGS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(BOOKINGS_FILE, "utf-8"));
    } catch {
      return [];
    }
  }
  return [];
}

function saveBooking(bookingData: any) {
  const bookings = loadBookings();
  bookings.push(bookingData);
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf-8");

  // Also append to CSV spreadsheet format for Google Sheets compatibility
  const csvRow = `"${bookingData.timestamp}","${bookingData.id}","${(bookingData.name || "").replace(/"/g, '""')}","${(bookingData.phone || "").replace(/"/g, '""')}","${(bookingData.email || "").replace(/"/g, '""')}","${(bookingData.service || "").replace(/"/g, '""')}","${(bookingData.date || "").replace(/"/g, '""')}","${(bookingData.time || "").replace(/"/g, '""')}","${(bookingData.notes || "").replace(/"/g, '""')}","Website Direct"\n`;
  fs.appendFileSync(CSV_FILE, csvRow, "utf-8");
}

// API Routes
app.post("/api/bookings", (req, res) => {
  const { name, phone, email, service, date, time, notes } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone number are required." });
  }

  const now = new Date();
  const timestamp = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
  const bookingId = "BR-" + Math.floor(100000 + Math.random() * 900000);

  const newBooking = {
    id: bookingId,
    timestamp,
    isoDate: now.toISOString(),
    name: name.trim(),
    phone: phone.trim(),
    email: email ? email.trim() : "N/A",
    service: service || "General Facial or Massage Enquiry",
    date: date || "Flexible / Next Available",
    time: time || "Flexible",
    notes: notes || "",
    status: "Confirmed & Logged to Spreadsheet"
  };

  saveBooking(newBooking);

  return res.json({
    success: true,
    bookingId,
    timestamp,
    message: "Thank you! Your appointment request has been logged to Beauty By Roxanne's spreadsheet. Roxanne will confirm shortly."
  });
});

app.get("/api/bookings", (req, res) => {
  res.json(loadBookings());
});

app.get("/api/bookings/export.csv", (req, res) => {
  if (fs.existsSync(CSV_FILE)) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="beauty_by_roxanne_bookings.csv"');
    return res.sendFile(CSV_FILE);
  }
  res.status(404).send("No spreadsheet entries found yet.");
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
