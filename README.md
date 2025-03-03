Projektbeschreibung

Dieses Projekt demonstriert die Verwendung von Server-Sent Events (SSE), um eine Echtzeit-Uhr im Browser anzuzeigen. Der Server sendet jede Sekunde die aktuelle Uhrzeit an den Client, sodass die Uhrzeit ohne manuelles Aktualisieren der Seite live aktualisiert wird.

Verzeichnisstruktur

Echtzeit-Uhr-mit-SSE/
├── node_modules/       # Abhängigkeiten (automatisch generiert nach `npm install`)
├── public/             # Statische Dateien (HTML, CSS, JS)
│   ├── index.html      # Frontend der Anwendung
├── package.json        # Projektkonfiguration und Abhängigkeiten
├── package-lock.json   # Sperrdatei für Abhängigkeiten
├── server.js           # Backend-Server mit SSE

Installation und Ausführung

1. Voraussetzungen

Node.js muss installiert sein

2. Projekt einrichten

Führe die folgenden Befehle aus:

npm init -y  # Initialisiert ein neues Node.js-Projekt
npm install express cors  # Installiert die benötigten Pakete

3. Server starten

node server.js

Der Server läuft dann unter http://localhost:3000.

Erklärung der Struktur

1. server.js (Backend-Server mit Express und SSE)

Der Server sendet jede Sekunde die aktuelle Uhrzeit an den Client.

express.static("public") stellt sicher, dass die index.html-Datei und andere statische Dateien aus dem public-Ordner bereitgestellt werden.

Die Route /time wird für SSE-Updates verwendet.

2. index.html (Client-Seite)

Baut eine SSE-Verbindung mit dem Server auf (new EventSource("/time")).

Empfängt jede Sekunde die neue Uhrzeit und aktualisiert die Anzeige.

Warum liegen server.js und index.html in verschiedenen Verzeichnissen?

Trennung von Backend und Frontend → Bessere Code-Organisation.

Einfache Bereitstellung statischer Dateien → express.static("public") macht das möglich.

Erweiterbarkeit → Falls CSS oder JavaScript benötigt werden, können diese einfach in public/ hinzugefügt werden.

Fehlerbehebung

1. Fehler: Cannot GET /

Lösung: Stelle sicher, dass die index.html im public/-Ordner liegt und server.js den richtigen statischen Pfad angibt:

app.use(express.static("public"));

2. Fehler: 404 Not Found für /time

Lösung: Überprüfe, ob der Server läuft (node server.js) und dass die SSE-Route korrekt definiert ist.

Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

