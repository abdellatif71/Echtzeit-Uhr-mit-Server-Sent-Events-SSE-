const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

// Stelle den public-Ordner als statische Ressource zur Verfügung
app.use(express.static(path.join(__dirname, "public")));

// SSE-Route
app.get("/time", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    setInterval(() => {
        const time = new Date().toLocaleTimeString();
        res.write(`data: ${time}\n\n`);
    }, 1000);
});

// Setze eine Route für den Root-Pfad, die die index.html zurückgibt
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => console.log("SSE-Server läuft auf http://localhost:3000"));
