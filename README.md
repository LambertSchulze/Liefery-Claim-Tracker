<img src="https://raw.githubusercontent.com/LambertSchulze/Liefery-Claim-Tracker/master/README_assets/Liefery_Logo.png" align="right" width="150" />

# Liefery-Claim-Tracker
Ein einfaches Ticket System für die Team-übergreifende Bearbeitung von Claims.

> Dieses Projekt ist leider nicht abgeschlossen, da sich der sehr spezielle Anwendungsbereich für diese App während der Erstellung aufgelöst hat.
> Es wird nicht mehr aktiv weiterentwickelt und ist archiviert.

### Motivation
Dieses einfache Ticket System sollte ein gemeinsamer Ort verschiedener Teams zum bearbeiten von Claims sein.
Ziel sollte eine gemeinsame Übersicht für die Anzahl der offenen Claims und deren Stand sein.

<img src="https://github.com/LambertSchulze/Liefery-Claim-Tracker/blob/master/README_assets/Ticket%20System%20Dashboard.png" align="center" />

### Umfang des Projekts
[x] Client im Material Design (einheitlich mit anderem Liefery-Frontent)
[x] Node.js Server mit REST API (separates Repo)
[] Sicherung der Daten mit MongoDB
[] Authentifizierung mittels token von anderem Liefery-Backend (um doppelte Anmeldung zu vermeiden)

### Eigene Einschätzung
Ich hatte große Ambitionen mein erstes komplett eigenes Fullstack Projekt anzugehen welches praktische Anwendung hätte haben können.

Eine erste Version baute stark auf eine Architektur, die über eine firmeneigene API Informationen zu einer Sendung zu der es einen Claim gibt abfragt. Dies stellte sich allerdings für mich der nicht offiziell Teil des IT Teams war als zu problematisch heraus und das Projekt erhielt ein größeres Refactoring.

Nicht zum Einsatz in diesem Projekt kamen **Redux** als State Management (war meiner Einschätzung nach nicht zwingend nötig) und **Jest** als JS Testing Library (:disappointed)