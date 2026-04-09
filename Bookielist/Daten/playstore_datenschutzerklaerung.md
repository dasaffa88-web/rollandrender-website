# Datenschutzerklärung – Bookielist

**Stand: April 2026**

---

## 1. Verantwortlicher

Diese Datenschutzerklärung gilt für die Android-App **Bookielist** (nachfolgend „die App").

Verantwortlicher im Sinne der DSGVO:

[DEIN NAME / DEIN UNTERNEHMEN]
[STRASSE, PLZ ORT]
[E-MAIL-ADRESSE]

---

## 2. Grundsatz: Lokale Datenspeicherung

Bookielist ist eine vollständig offline-fähige App.
**Alle von dir eingegebenen persönlichen Daten werden ausschließlich lokal auf deinem Gerät gespeichert.**

Deine Bibliothek (Besitzstatus, Lesestatus, Notizen) verlässt dein Gerät niemals automatisch.

---

## 3. Welche Daten werden gespeichert?

Die App speichert ausschließlich Daten, die du selbst aktiv eingibst oder über Funktionen der App erzeugst:

- **Buchdaten:** Titel, Autor, ISBN/EAN, Cover-URL, Verlag (sofern vorhanden)
- **Statusdaten:** Besitzstatus (Besitz / Merkliste), Lesestatus (Ungelesen / Angefangen / Gelesen / Abgebrochen)
- **Metadaten:** Zeitstempel des Hinzufügens und der letzten Änderung
- **App-Einstellungen:** Gewählter Stimmungsmodus (Theme-Präferenz)

Diese Daten verbleiben in der lokalen Datenbank (Room/SQLite) auf deinem Gerät.

---

## 4. Online-Suche und Cover-Abfragen

Wenn du die Funktion „Buch online suchen" oder die automatische Metadaten-Suche verwendest,
wird eine Anfrage an externe APIs gestellt (Google Books API, Open Library API).

Dabei werden **keine personenbezogenen Daten** übertragen – lediglich der Suchbegriff (z. B. Buchtitel oder ISBN).

Diese Dienste unterliegen den Datenschutzbestimmungen ihrer jeweiligen Anbieter:
- Google Books API: https://policies.google.com/privacy
- Open Library (Internet Archive): https://archive.org/about/terms.php

Cover-Bilder werden von externen URLs geladen (z. B. Google Books). Dabei kann deine IP-Adresse an den jeweiligen Bildserver übertragen werden.

---

## 5. Bookielist Cloud-Cache (anonymer Metadaten-Cache)

Bookielist verfügt über einen optionalen **anonymen Community-Metadaten-Cache** (gehostet auf Cloudflare Workers / KV).

### Was wird übermittelt?

Wenn du ein Buch scannst oder über die App hinzufügst und Metadaten gefunden werden,
können folgende **nicht-personenbezogene** Buchmetadaten in den Cloud-Cache übertragen werden:

- ISBN/EAN (13-stellig)
- Buchtitel
- Autor
- Cover-URL (extern, z. B. Google Books)
- Datenquelle (z. B. Google Books, Open Library, Manuell)

### Was wird NICHT übermittelt?

- Dein Name, Nutzername oder Account
- Dein Besitz- oder Lesestatus
- Zeitstempel deiner persönlichen Aktivitäten
- IP-Adresse (keine Speicherung durch unsere Anwendung)
- Gerätekennungen

### Zweck

Der Cloud-Cache ermöglicht schnellere Metadaten-Erkennung für alle Nutzer:
Bücher, die bereits von anderen gescannt wurden, werden sofort gefunden – ohne erneute API-Abfrage.

### Hosting

Die Daten werden bei **Cloudflare, Inc. (USA)** gespeichert.
Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert.
Datenschutzerklärung Cloudflare: https://www.cloudflare.com/privacypolicy/

### Rechtsgrundlage

Berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO –
Verbesserung der App-Funktionalität durch anonyme Metadaten-Weitergabe.

Da keine personenbezogenen Daten übermittelt werden, besteht kein Risiko für die Rechte der Nutzer.

---

## 6. Backup und Export (Import/Export-Funktion)

Die App bietet eine manuelle Backup-Funktion (Export als JSON-Datei).

- Der Export erfolgt **ausschließlich auf Initiative des Nutzers**
- Die Datei wird an einem vom Nutzer gewählten Ort gespeichert (z. B. Downloads)
- Es findet keine automatische oder stille Übertragung statt
- Beim Import werden Daten aus einer lokal gespeicherten Datei gelesen

**Die App überträgt keine persönlichen Backup-Daten in die Cloud.**

---

## 7. Keine Benutzerkonten

Bookielist erfordert **kein Benutzerkonto**, keine Registrierung und keine E-Mail-Adresse.
Es werden keine Authentifizierungsdaten gespeichert oder übermittelt.

---

## 8. Kein Tracking, keine Werbung

Die App enthält:
- kein Analyse-Tracking (kein Firebase Analytics, kein Google Analytics)
- keine Werbeanzeigen
- keine In-App-Käufe nach dem initialen Kauf
- keine Drittanbieter-SDKs für Marketing oder Nutzerprofilierung

---

## 9. Kamera-Berechtigung (Barcode-Scanner)

Für den ISBN-Scanner benötigt die App Zugriff auf die Kamera deines Geräts.

- Die Kamera wird **nur aktiv genutzt, wenn du den Scanner explizit öffnest**
- Es werden keine Bilder oder Videos gespeichert
- Der Kamerazugriff dient ausschließlich der Erkennung von EAN/ISBN-Barcodes

---

## 10. Datenlöschung

Du kannst sämtliche App-Daten jederzeit löschen durch:

- Löschen einzelner Bücher in der App
- Deinstallation der App (löscht alle lokalen Daten unwiderruflich)
- Löschen des App-Speichers in den Android-Systemeinstellungen

**Hinweis zum Cloud-Cache:** Da keine personenbezogenen Daten im Cloud-Cache gespeichert sind,
gibt es keine nutzerspezifischen Daten, die dort gelöscht werden könnten.
Die anonymen Buchmetadaten dienen der gesamten Community und werden nicht einzelnen Nutzern zugeordnet.

---

## 11. Deine Rechte (DSGVO)

Da alle persönlichen Daten ausschließlich lokal auf deinem eigenen Gerät gespeichert werden,
hast du jederzeit vollständige Kontrolle über deine Daten.

Du hast das Recht auf:
- **Auskunft** über gespeicherte Daten (direkt in der App einsehbar)
- **Berichtigung** (über die Bearbeitungsfunktion in der App)
- **Löschung** (über die App oder Deinstallation)
- **Datenübertragbarkeit** (über die Export-Funktion als JSON)

Bei Fragen wende dich an: contact@rollandrender.studio

---

## 12. Änderungen dieser Datenschutzerklärung

Diese Datenschutzerklärung kann bei neuen App-Versionen aktualisiert werden.
Die jeweils aktuelle Version ist unter dieser URL abrufbar.

**Letzte Änderung:** April 2026 – Abschnitt 5 (Bookielist Cloud-Cache) neu hinzugefügt.

---

*Bookielist – dein digitales Bücherregal*
