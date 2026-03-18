# Changelog

## 2026-03-18 (Feature-Seite Umlaute im Ausblick korrigiert)

### Bereich
Dice-&-Screen-Feature-Seite (Copy/Sprachbild)

### Dateien
- dice-and-screen/features/index.html
- CHANGELOG.md

### Aenderung
- Im Abschnitt `Was noch kommt` auf [dice-and-screen/features/index.html](dice-and-screen/features/index.html) ASCII-Umschreibungen auf echte deutsche Zeichen korrigiert.
- Betroffene Begriffe auf korrektes Sprachbild umgestellt, unter anderem:
  - `fuer` -> `für`
  - `waehrend` -> `während`
  - `Stabilitaets` -> `Stabilitäts`
  - `Charakterboegen` -> `Charakterbögen`
  - `Zauberbuecher` -> `Zauberbücher`
  - `ueber` -> `über`

### Grund
Sichtbare UI-Copy soll dem definierten deutschen Sprachbild folgen und keine ASCII-Umschreibungen enthalten.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Textkorrektur ohne Struktur- oder Logikänderungen.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-18 (Feature-Seite Ausblick um Begleitapp erweitert)

### Bereich
Dice-&-Screen-Feature-Seite (Content/Roadmap-Ausblick)

### Dateien
- dice-and-screen/features/index.html
- CHANGELOG.md

### Aenderung
- In [dice-and-screen/features/index.html](dice-and-screen/features/index.html) den Abschnitt `Was noch kommt` um einen weiteren Punkt ergaenzt.
- Neuer Ausblickspunkt: geplante Begleitapp fuer Smartphone/Tablet mit mobilem Zugriff auf Charakterboegen, Zauberbuecher und Inventar-Management.
- Die Begleitapp wird als ueber einen in Dice & Screen integrierten LAN-Server verbunden beschrieben.

### Grund
Der geplante Mobile-Pfad sollte auf der Feature-Seite sichtbar sein, damit Interessierte den kuenftigen Nutzungsumfang und die lokale Verbindungsstrategie frueh einordnen koennen.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Content-Erweiterung im bestehenden Ausblicksbereich ohne strukturelle oder logische Aenderungen.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-18 (Feature-Seite Abschnitt "Was noch kommt")

### Bereich
Dice-&-Screen-Feature-Seite (Content/Erwartungsmanagement)

### Dateien
- dice-and-screen/features/index.html
- styles/features.css

### Aenderung
- Auf [dice-and-screen/features/index.html](dice-and-screen/features/index.html) einen neuen Abschnitt `Was noch kommt` direkt vor dem CTA-Block eingefuegt.
- Inhaltlich drei naechste Fokusfelder ergaenzt:
  - Trigger-/Recharge-Bedienung im UI
  - Stabilitaets-Hardening mit Regression-Smoketests
  - Beta-Content-Pack fuer den Einstieg
- In [styles/features.css](styles/features.css) neue Styles fuer `upcoming-section` und `upcoming-list` hinzugefuegt, damit der Ausblick visuell in den bestehenden Seitenstil passt.
- CSS-Cache-Buster in [dice-and-screen/features/index.html](dice-and-screen/features/index.html) auf `v=20260318-features-v2` aktualisiert.

### Grund
Am unteren Seitenende sollte ein klarer Ausblick auf naechste Entwicklungsschritte sichtbar werden, damit Interessierte den Projektpfad besser einordnen koennen.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Frontend-Content-/Style-Erweiterung ohne Logikaenderungen.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html), [styles/features.css](styles/features.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-18 (Feature-Seite Copy an Bildmaterial angepasst)

### Bereich
Dice-&-Screen-Feature-Seite (Copy/Visual-Matching)

### Dateien
- dice-and-screen/features/index.html

### Aenderung
- Texte in den drei Saeulen auf die aktuell verwendeten Screenshots konkretisiert:
  - Theatre of Mind: Bezug auf Dashboard-Ansicht
  - Grid & Taktik: Bezug auf Movement und Danger Zones
  - Modularitaet: Bezug auf Creator-Auswahl
- Nutzenmatrix-Eintraege in allen drei Spalten inhaltlich auf die gezeigten Bilder abgestimmt.
- Showcase-Claim von `So spielt eure Runde im Flow.` auf `Am Tisch zaehlt der Moment, nicht die Verwaltung.` angepasst.

### Grund
Die Feature-Seite sollte in Text und Bild konsistent sein, damit jede Sektion unmittelbar zur gezeigten Szene passt.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Copy-Anpassung ohne Struktur- oder Logikaenderungen.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-18 (Feature-Seite Showcase Rueckstellung)

### Bereich
Dice-&-Screen-Feature-Seite (Showcase)

### Dateien
- dice-and-screen/features/index.html

### Aenderung
- Showcase-Bild von der technischen Blockaden/AoE-Ansicht zur spielenden Runde zurueckgestellt.
- Bildquelle auf `assets/images/DNS_Vision.png` geaendert.
- Showcase-Claim kurz auf Bildwirkung angepasst: `So spielt eure Runde im Flow.`

### Grund
Der Showcase soll wieder den gemeinsamen Spielmoment der Runde transportieren statt ein reines Technikmotiv.

### Risiko/Hinweise
- Sehr geringes Risiko: nur Bildreferenz und kurzer Text im Showcase angepasst.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-18 (Nachtrag Feature-Seite Bildquellen)

### Bereich
Dice-&-Screen-Feature-Seite (Visuals)

### Dateien
- dice-and-screen/features/index.html

### Aenderung
- Bildquellen der neuen Vision-v1-Sektionen auf die neu hinzugefuegten cleanen Screenshots umgestellt.
- Neue Zuordnung:
  - Theatre of Mind: `assets/images/dashboard_screenshot.png`
  - Grid & Taktik: `assets/images/movement_und_dangezones.png`
  - Modularitaet: `assets/images/Creator_auswahl.png`
  - Showcase: `assets/images/blockades_und_aoeformen+block.png`
- Alt-Texte entsprechend auf die neuen Inhalte angepasst.

### Grund
Die Feature-Seite sollte visuell konsistenter mit klaren, cleanen In-App-Screenshots arbeiten statt mit gemischtem Bildmaterial.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Asset-Referenz-Anpassung.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-18 (Nachtrag Feature-Seite Vision v1)

### Bereich
Dice-&-Screen-Feature-Seite (Struktur, Copy, Material, Motion)

### Dateien
- dice-and-screen/features/index.html
- styles/features.css

### Aenderung
- Feature-Seite in [dice-and-screen/features/index.html](dice-and-screen/features/index.html) auf die neue Vision-v1-Struktur mit acht Sektionen umgestellt:
  - Hero-Claim mit CTA-Set
  - Saeule 1: Theatre of Mind
  - Saeule 2: Grid & Taktik
  - Saeule 3: Modularitaet
  - Nutzenmatrix (3 Spalten)
  - Showcase-Moment
  - CTA-Block (Primary/Secondary/Tertiary)
  - Footer
- CTA-System nach Whitelist konsolidiert (`Jetzt entdecken`, `Hauptseite ansehen`, `Timeline ansehen`, `Mehr erfahren`).
- Footer-Markup auf der Feature-Seite an die Hauptseite angeglichen (Branding, Navigation, Kontakt, GitHub, Impressum, Datenschutz).
- Styling in [styles/features.css](styles/features.css) neu aufgebaut:
  - Arcane-Bronze-Material-Look,
  - gestaffelte Entry-Motion,
  - Micro-Hover-Interaktionen,
  - reduzierte Parallax-/Showcase-Bewegung,
  - focus-visible und prefers-reduced-motion.
- CSS-Cache-Buster in [dice-and-screen/features/index.html](dice-and-screen/features/index.html) auf `v=20260318-features-v1` aktualisiert.

### Grund
Die Feature-Seite sollte von einer allgemeinen Feature-Liste zu einem klaren, taktischen Briefing mit konsistenter Markensprache und besserer Entscheidungsfuehrung weiterentwickelt werden.

### Risiko/Hinweise
- Gering bis mittel: Frontend-Only mit groesserem strukturellem und visuellem Umbau.
- Hinweis: Die verwendeten Pilar-Bilder sind bestehende Projekt-Screenshots als Platzhalter und koennen spaeter gegen finale Visuals/Icons ersetzt werden.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html), [styles/features.css](styles/features.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-18 (Nachtrag DNS-Basisregeln Ausrichtung & Sprachbild)

### Bereich
Dice-&-Screen-Dokumentation (Brand-System)

### Dateien
- dice-and-screen/DNS_BRAND_SYSTEM_BASE.md

### Aenderung
- In [dice-and-screen/DNS_BRAND_SYSTEM_BASE.md](dice-and-screen/DNS_BRAND_SYSTEM_BASE.md) neue verbindliche Regeln ergaenzt:
  - Layout-Ausrichtung (zentrierte Sektionstypografie vs linksbuendige Card-Leseflaechen)
  - Sprachbild-Regel fuer sichtbare UI-Copy (echte deutsche Zeichen statt ASCII-Umschreibungen)
- DoD-Checkliste um zwei Compliance-Punkte erweitert:
  - Ausrichtungsregeln eingehalten
  - sichtbare UI-Texte ohne ASCII-Umschreibungen (mit technischen Ausnahmen)

### Grund
Die zuletzt umgesetzten Entscheidungen zu Typografie-Ausichtung und deutschem Sprachbild sollten als Systemregel dokumentiert werden, damit kuenftige Seiten konsistent bleiben.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Dokumentations-Erweiterung.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/DNS_BRAND_SYSTEM_BASE.md](dice-and-screen/DNS_BRAND_SYSTEM_BASE.md) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-18 (Nachtrag DNS-Hauptseite Typografie & Sprachbild)

### Bereich
Dice-&-Screen-Hauptseite (Typografie/Copy)

### Dateien
- dice-and-screen/index.html
- styles/dice-screen-home.css

### Aenderung
- Abschnitts-Ueberschriften der DNS-Hauptseite auf mittige Ausrichtung umgestellt, um den Hero-/Sektionenfluss eleganter und konsistenter zu gestalten.
- Sichtbare Textinhalte auf der DNS-Hauptseite sprachlich normalisiert: ASCII-Umschreibungen (`ue/ae/oe`) durch echte Umlaute ersetzt.
- Section-Textausrichtung auf Blockebene zentriert; Core-Feature-Card-Texte bewusst linksbuendig belassen, damit die Karten weiterhin gut scanbar bleiben.
- CSS-Cache-Buster in [dice-and-screen/index.html](dice-and-screen/index.html) auf `v=20260318-main-3` aktualisiert.

### Grund
Die Seite sollte sprachlich hochwertiger wirken und die visuelle Typo-Hierarchie auf der Hauptseite ruhiger/eleganter ausfallen.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Text-/Typografie-Anpassungen ohne funktionale Aenderungen.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/index.html](dice-and-screen/index.html), [styles/dice-screen-home.css](styles/dice-screen-home.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-17 (Nachtrag Hero-Headline Entduplizierung)

### Bereich
Dice-&-Screen-Hauptseite (Hero)

### Dateien
- dice-and-screen/index.html
- styles/dice-screen-home.css

### Aenderung
- Doppelte Markenzeile im Hero entfernt: Unter dem Logo wird nicht mehr zusaetzlich "Dice & Screen" als Titelzeile angezeigt.
- Hero-H1 auf die eigentliche Message reduziert: "Beherrsche das Schlachtfeld.".
- Hero-Typografie in [styles/dice-screen-home.css](styles/dice-screen-home.css) auf die einzeilige Ueberschrift angepasst.

### Grund
Im Hero war die Markenbezeichnung visuell doppelt vorhanden (im Logo und nochmals als Text), was die Inszenierung unnoetig aufblaehte.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Text-/Styling-Anpassung im Hero-Bereich.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/index.html](dice-and-screen/index.html), [styles/dice-screen-home.css](styles/dice-screen-home.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-17 (Nachtrag DNS-Hauptseite Vision-Implementierung)

### Bereich
Dice-&-Screen-Hauptseite (Struktur, Copy, Material, Motion)

### Dateien
- dice-and-screen/index.html
- styles/dice-screen-home.css

### Aenderung
- DNS-Hauptseite in [dice-and-screen/index.html](dice-and-screen/index.html) auf die neue Zielstruktur mit acht klaren Bloecken umgebaut:
  - Hero (Signature Moment)
  - Vision
  - Core Features (3 Saeulen)
  - Erlebnis (Flow statt Verwaltung)
  - Theatre-of-Mind/Grid
  - Modularitaet
  - Timeline-Teaser
  - Footer
- Hero-Copy und CTA-Hierarchie auf die freigegebene Vision angepasst (Primary: "Jetzt entdecken", Secondary: "Features ansehen").
- Footer erweitert um Branding, Navigation, Kontakt und zusaetzliche Meta-Links (inkl. GitHub-Link).
- Hauptseiten-Styling in [styles/dice-screen-home.css](styles/dice-screen-home.css) umfassend auf Basis des DNS-Brand-Systems erneuert:
  - Arcane-Bronze Token-Setup,
  - Material-Look mit Top-Highlight/Vignette/Shadow-Level,
  - CTA-System Primary/Secondary/Tertiary,
  - dezente Motion (Reveal, Hero-Ambient, Logo-Breathing, Micro-Interactions),
  - prefers-reduced-motion und focus-visible-Regeln.
- CSS-Cache-Buster in [dice-and-screen/index.html](dice-and-screen/index.html) aktualisiert (`v=20260317-main-2`).

### Grund
Die DNS-Hauptseite sollte von einer guten Landingpage zu einer markenreinen, dramaturgisch gefuehrten Hauptseite gemaess Phase 1 bis 3 weiterentwickelt werden.

### Risiko/Hinweise
- Gering bis mittel: Frontend-Only mit groesserem Layout-/Style-Umbau, ohne Backend- oder Datenlogik-Aenderung.
- Hinweis: Der GitHub-Link im Footer verweist aktuell allgemein auf `https://github.com/` und kann bei Bedarf auf ein konkretes Repository angepasst werden.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/index.html](dice-and-screen/index.html), [styles/dice-screen-home.css](styles/dice-screen-home.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-17 (Nachtrag DNS-Brand-System-Basis)

### Bereich
Dice-&-Screen-Dokumentation (Design/Copy-Richtlinien)

### Dateien
- dice-and-screen/DNS_BRAND_SYSTEM_BASE.md

### Aenderung
- Neue zentrale Basisdatei [dice-and-screen/DNS_BRAND_SYSTEM_BASE.md](dice-and-screen/DNS_BRAND_SYSTEM_BASE.md) erstellt.
- Inhalte der Phasen 1 bis 3 als umsetzbares Referenzsystem zusammengefuehrt:
  - Design Foundation (Farben, Typo, CTA, Cards, Spacing)
  - Material & Motion (Noise, Highlights, Vignette, Motion-Regeln, Performance)
  - Copy & Dramaturgie (Tone, Satzbau, Struktur, Limits, CTA-Whitelist, Glossar)
- Verbindliche "Definition of Done" und einfache Rollout-Reihenfolge fuer neue DNS-Seiten ergaenzt.

### Grund
Die drei Phasen sollten in einer einzigen, klaren Orientierungsdatei konsolidiert werden, damit Design- und Copy-Entscheidungen konsistent umgesetzt werden.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Dokumentations-Erweiterung, keine funktionalen Code-Aenderungen.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/DNS_BRAND_SYSTEM_BASE.md](dice-and-screen/DNS_BRAND_SYSTEM_BASE.md) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-17 (Nachtrag DNS-Hauptseite Footer)

### Bereich
Dice-&-Screen-Hauptseite (Layout)

### Dateien
- dice-and-screen/index.html
- styles/dice-screen-home.css

### Aenderung
- Footer auf der Dice-&-Screen-Hauptseite in [dice-and-screen/index.html](dice-and-screen/index.html) eingebaut.
- Footer-Panel und Link-Styles in [styles/dice-screen-home.css](styles/dice-screen-home.css) ergaenzt, passend zur bestehenden Arcane-Bronze-Optik.
- Rechtliche Links auf Impressum und Datenschutz in den Footer integriert.

### Grund
Die Hauptseite sollte wie die anderen Unterseiten einen vollstaendigen Abschluss mit Footer und Legal-Links erhalten.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Markup- und Styling-Ergaenzung ohne Logik-Aenderung.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/index.html](dice-and-screen/index.html), [styles/dice-screen-home.css](styles/dice-screen-home.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-17 (Nachtrag CTA-Ziele Features/Timeline)

### Bereich
Dice-&-Screen-Seiten (Navigation)

### Dateien
- dice-and-screen/timeline/index.html
- dice-and-screen/features/index.html

### Aenderung
- CTA in [dice-and-screen/timeline/index.html](dice-and-screen/timeline/index.html) von der Feature-Seite auf die Dice-&-Screen-Hauptseite umgestellt.
- CTA in [dice-and-screen/features/index.html](dice-and-screen/features/index.html) von der Timeline auf die Dice-&-Screen-Hauptseite umgestellt.
- Beide Seiten verweisen damit konsistent auf [dice-and-screen/index.html](dice-and-screen/index.html).

### Grund
Features- und Timeline-Seite sollten nicht mehr gegenseitig als primäres Ziel verlinken, sondern zentral auf die neue Dice-&-Screen-Hauptseite führen.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Linkziel- und Label-Anpassung.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/timeline/index.html](dice-and-screen/timeline/index.html), [dice-and-screen/features/index.html](dice-and-screen/features/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-17 (Nachtrag Link-Fix Dice-&-Screen)

### Bereich
Routing/Navigation (Dice-&-Screen)

### Dateien
- index.html
- dice-and-screen.html
- dice-and-screen/timeline/index.html

### Aenderung
- Dice-&-Screen-Links auf explizite Dateipfade umgestellt, um lokale Routing-Probleme mit Ordner-URLs zu vermeiden.
- Startseiten-Link in [index.html](index.html) von `dice-and-screen/` auf `dice-and-screen/index.html` geaendert.
- Weiterleitung in [dice-and-screen.html](dice-and-screen.html) auf `/dice-and-screen/index.html` umgestellt (Meta-Refresh, Canonical, JavaScript-Link).
- Ruecklink im Timeline-Header in [dice-and-screen/timeline/index.html](dice-and-screen/timeline/index.html) auf `dice-and-screen/index.html` gesetzt.

### Grund
Beim Klick auf Dice & Screen trat lokal ein 404 auf. Durch explizite Dateiziele wird die Navigation server-unabhaengiger und robuster.

### Risiko/Hinweise
- Sehr geringes Risiko: nur Linkziele, keine Inhalts- oder Logikaenderung.

### Teststatus
- Linkpruefung per Suche und VS Code Fehlerpruefung der geaenderten Dateien: keine Fehler gefunden.

## 2026-03-17 (Nachtrag Dice-&-Screen-Hauptseite)

### Bereich
Dice-&-Screen-Seite (Hauptseite)

### Dateien
- dice-and-screen/index.html
- styles/dice-screen-home.css

### Aenderung
- Platzhalter durch eine echte Dice-&-Screen-Hauptseite ersetzt.
- Neue Startstruktur mit Hero-Bereich, klarer Produktbotschaft und zwei primaren Einstiegs-CTAs (Features und Timeline) umgesetzt.
- Drei Kernversprechen als eigene Sektion eingebaut: Regelvereinfachung, digitale Encounter-Hilfe, Theatre-of-Mind-Fokus.
- Schnellnavigation als Kartenbereich ergaenzt, damit Nutzer direkt zwischen Feature-Ueberblick und Projektreise waehlen koennen.
- Das bisherige Platzhalter-Styling durch ein vollstaendiges Landing-Layout in [styles/dice-screen-home.css](styles/dice-screen-home.css) ersetzt.

### Grund
Die neue Dice-&-Screen-Hauptseite soll als klarer Einstieg fungieren und Besucher strukturiert zu Features oder Timeline fuehren.

### Risiko/Hinweise
- Geringes Risiko: Frontend- und Layout-Aenderungen ohne Backend- oder Logik-Eingriffe.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/index.html](dice-and-screen/index.html) und [styles/dice-screen-home.css](styles/dice-screen-home.css): keine Fehler gefunden.

## 2026-03-17 (Nachtrag Dice-&-Screen-Struktur)

### Bereich
Dice-&-Screen-Seite (Navigation/Struktur)

### Dateien
- dice-and-screen.html
- dice-and-screen/index.html
- dice-and-screen/timeline/index.html
- styles/dice-screen-home.css
- index.html
- dice-and-screen/features/index.html

### Aenderung
- Bisherige Dice-&-Screen-Seite als Unterseite unter [dice-and-screen/timeline/index.html](dice-and-screen/timeline/index.html) bereitgestellt.
- Neue Platzhalter-Hauptseite fuer Dice & Screen unter [dice-and-screen/index.html](dice-and-screen/index.html) erstellt (mit Links zu Features und Timeline).
- Legacy-URL [dice-and-screen.html](dice-and-screen.html) in eine Weiterleitungsseite auf `/dice-and-screen/` umgewandelt (Meta-Refresh + JavaScript).
- Startseiten-Link in [index.html](index.html) auf die neue Dice-&-Screen-Hauptseite (`dice-and-screen/`) umgestellt.
- Timeline-CTA auf der Feature-Unterseite in [dice-and-screen/features/index.html](dice-and-screen/features/index.html) auf die neue Timeline-URL (`/dice-and-screen/timeline/`) angepasst.

### Grund
Die bisherige Timeline sollte als eigene Unterseite weiter bestehen, waehrend eine neue zentrale Dice-&-Screen-Hauptseite fuer den kuenftigen Ausbau vorbereitet wird.

### Risiko/Hinweise
- Geringes Risiko: Hauptsaechlich Routing- und Link-Anpassungen ohne inhaltliche Funktionsaenderungen.
- Hinweis: In [dice-and-screen/timeline/index.html](dice-and-screen/timeline/index.html) wird ein `base`-Tag genutzt, damit bestehende relative Pfade der Timeline-Datei im Unterordner korrekt aufgeloest werden.

### Teststatus
- VS Code Fehlerpruefung fuer die geaenderten Dateien: keine Fehler gefunden.
- Link-Pruefung per Suche durchgefuehrt: neue Zielpfade (`/dice-and-screen/`, `/dice-and-screen/timeline/`) sind in den relevanten HTML-Dateien gesetzt.

## 2026-03-17 (Nachtrag Vision-Ausrichtung)

### Bereich
Features-Seite (Vision-Text)

### Dateien
- dice-and-screen/features/index.html

### Aenderung
- Hero-Introtext der Feature-Seite inhaltlich auf die Kernvision ausgerichtet: Regeln vereinfachen, Verwaltungsaufwand fuer Spielleitung und Spielende reduzieren, TTRPG-Spielgefuehl erhalten.
- Vision-Text im Showcase-Block praezisiert: digitale Encounter-Visualisierung bei gleichzeitigem Fokus auf Theatre-of-Mind-Storytelling.
- Vision-Chips von generischen Schlagworten auf konkrete Leitbegriffe umgestellt (z. B. Regeln vereinfachen, Spielleitung entlasten, digitale Encounter-Visualisierung).

### Grund
Die Vision sollte auf der Seite klar, direkt und konsistent mit dem Produktziel kommuniziert werden.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Text- und Label-Anpassungen ohne funktionale Aenderung.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-03-17 (Nachtrag Arcane Bronze)

### Bereich
Features-Seite (Visual Overhaul)

### Dateien
- dice-and-screen/features/index.html
- styles/features.css

### Aenderung
- Arcane-Bronze-Design umgesetzt: staerkere Hero-Inszenierung mit Lichtkegel, dupliziertem Titellayer und atmosphaerischerem Hintergrund.
- Feature-Cards visuell aufgewertet (edlere Materialflaechen, differenziertere Rahmen/Highlights, staerkeres Hover-Verhalten).
- Vision-Sektion als Showcase ausgebaut (eigene Klassen fuer Vision-Bild/Notiz, neue Schwerpunkt-Chips).
- Bisherige Inline-Styles aus der Feature-Seite entfernt und in [styles/features.css](styles/features.css) ueberfuehrt.
- Cache-Buster der Feature-CSS in [dice-and-screen/features/index.html](dice-and-screen/features/index.html) aktualisiert.

### Grund
Die Seite sollte im Stil "Arcane Bronze" sichtbarer premium wirken: epischer, klarer hierarchisiert und mit konsistenterer visueller Sprache.

### Risiko/Hinweise
- Gering bis mittel: Reines Frontend-Styling, keine funktionalen Aenderungen.
- Hinweis: Der bestehende kritische Inline-Block fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html) bleibt bewusst erhalten, um FOUC weiterhin zu minimieren.

### Teststatus
- VS Code Fehlerpruefung fuer [dice-and-screen/features/index.html](dice-and-screen/features/index.html) und [styles/features.css](styles/features.css): keine Fehler gefunden.

## 2026-03-17

### Bereich
Features-Seite (CSS-Struktur)

### Dateien
- styles/style.css
- styles/features.css
- dice-and-screen/features/index.html

### Aenderung
- Feature-seitenspezifische Styles aus der globalen [styles/style.css](styles/style.css) in eine eigene Datei [styles/features.css](styles/features.css) ausgelagert.
- Die reale Feature-Unterseite [dice-and-screen/features/index.html](dice-and-screen/features/index.html) bindet die neue CSS-Datei zusaetzlich ein.
- Die bestehenden globalen Mini-Oval-Styles in [styles/style.css](styles/style.css) wurden unveraendert belassen, da sie von mehreren Seiten genutzt werden.

### Grund
Die Feature-Seite sollte eine klar getrennte, eigene CSS-Datei erhalten, damit Styles besser wartbar sind und die globale Stylesheet-Datei schlanker bleibt.

### Risiko/Hinweise
- Geringes Risiko: Es handelt sich um eine strukturelle Auslagerung ohne beabsichtigte Design-Aenderung.
- Hinweis: Der bestehende Inline-Critical-CSS-Block in [dice-and-screen/features/index.html](dice-and-screen/features/index.html) bleibt bewusst erhalten, um FOUC beim ersten Laden zu minimieren.

### Teststatus
- Selektor-Pruefung durchgefuehrt: Feature-Selektoren befinden sich in [styles/features.css](styles/features.css) und nicht mehr in [styles/style.css](styles/style.css).
- Einbindung der neuen Datei in [dice-and-screen/features/index.html](dice-and-screen/features/index.html) verifiziert.

## 2026-03-16 (Nachtrag 9)

### Bereich
Dice-&-Screen-Seite / Features-URL-Struktur

### Dateien
- dice-and-screen.html
- dice-and-screen/features/index.html
- features.html

### Aenderung
- Features-Seite als klare Unterseite unter `dice-and-screen/features/` angelegt.
- CTA auf der Dice-&-Screen-Timeline auf die neue Unterseiten-URL umgestellt.
- Alte Root-URL `features.html` in eine Weiterleitungsseite umgewandelt (Meta-Refresh + JavaScript), damit bestehende Links weiterhin funktionieren.
- Alle relativen Pfade in der neuen Unterseite auf die Unterordner-Struktur angepasst (Styles, Logos, Vision-Bild, Ruecklink).

### Grund
Die Features sollten nicht mehr wie eine eigenstaendige Hauptseite auf Domain-Ebene wirken, sondern sichtbar als Teilbereich von Dice & Screen.

### Risiko/Hinweise
- Geringes Risiko: Routing bleibt rueckwaertskompatibel durch Weiterleitung von der alten URL.
- Hinweis: Falls externe Links im Web existieren, werden sie weiterhin korrekt auf die neue Unterseite gefuehrt.

### Teststatus
- VS Code Fehlerpruefung fuer `dice-and-screen.html`, `features.html` und `dice-and-screen/features/index.html`: keine Fehler gefunden.

## 2026-03-16

### Bereich
Features-Seite (UI/Design)

### Dateien
- features.html
- styles/style.css

### Aenderung
- Die bisherige minimale Features-Liste wurde zu einer vollstaendigen Seite mit Hero-Bereich, klarer Struktur und CTA ausgebaut.
- Feature-Inhalte wurden in ein moderneres Kartenlayout mit Kategorietags ueberfuehrt.
- Neue, auf die Features-Seite begrenzte Styles (`.features-page` Scope) hinzugefuegt:
  - atmosphaerischer Hintergrund mit Struktur-Overlay,
  - hochwertigere Cards mit Hover/Fokus-Zustaenden,
  - responsive Grid fuer Desktop, Tablet und Mobile,
  - dezente Entry-Animation fuer Karten.
- Navigation zurueck zur Dice-&-Screen-Timeline integriert.

### Grund
Die Features-Seite sollte optisch deutlich aufgewertet werden und besser zur Qualitaet/Atmosphaere von Dice & Screen passen, ohne das restliche Seitendesign unbeabsichtigt zu veraendern.

### Risiko/Hinweise
- Geringes Risiko: Styles sind ueber `body.features-page` gekapselt und beeinflussen andere Seiten nur minimal.
- Hinweis: Fuer die neue Typografie werden Google Fonts (`Cinzel`, `Inter`) geladen.

### Teststatus
- Visuelle Pruefung der geaenderten Seite durchgefuehrt.
- VS Code Fehlerpruefung fuer `features.html` und `styles/style.css`: keine Fehler gefunden.

## 2026-03-16 (Nachtrag)

### Bereich
Features-Seite (Footer)

### Dateien
- features.html
- styles/style.css

### Aenderung
- Footer auf der Features-Seite als sichtbarer Footer-Block (`features-footer` + `footer-board`) eingebaut.
- Footer-Styles fuer die Features-Seite gezielt ergaenzt (Abstaende, Panel-Optik, Link-Hover, Mobile-Anpassung).

### Grund
Der Footer sollte auf der Features-Seite explizit eingebaut und visuell klar wahrnehmbar gestaltet werden.

### Risiko/Hinweise
- Sehr geringes Risiko: Styles sind auf `body.features-page` begrenzt.

### Teststatus
- VS Code Fehlerpruefung fuer `features.html` und `styles/style.css`: keine Fehler gefunden.

## 2026-03-16 (Nachtrag 5)

### Bereich
Features-Seite (Initiales Laden / Styling)

### Dateien
- features.html

### Aenderung
- Stylesheet-Link um Cache-Buster erweitert (`styles/style.css?v=20260316-features-1`), damit beim Oeffnen sicher die aktuelle CSS-Version geladen wird.
- Kritisches Inline-CSS fuer `body.features-page` im Head ergaenzt, um den visuellen Style-Sprung beim initialen Laden zu reduzieren.

### Grund
Beim Oeffnen der Features-Seite wurde zunaechst ein abweichender Stil angezeigt, bevor das finale Design erschien.

### Risiko/Hinweise
- Sehr geringes Risiko: Anpassung ist auf die Features-Seite begrenzt.
- Query-String kann bei künftigen Style-Aenderungen erneut angepasst werden.

### Teststatus
- VS Code Fehlerpruefung fuer `features.html`: keine Fehler gefunden.

## 2026-03-16 (Nachtrag 6)

### Bereich
Dice-&-Screen-Seite (Mobile Initial-Rendering)

### Dateien
- dice-and-screen.html

### Aenderung
- Fehlenden Viewport-Meta-Tag ergaenzt: `width=device-width, initial-scale=1.0`.
- Externen Google-Font-Link aus der ungueltigen Position vor dem Head in den Head verschoben.

### Grund
Die Seite wurde auf Smartphones initial zu weit herausgezoomt und nach links verschoben dargestellt.

### Risiko/Hinweise
- Geringes Risiko: Nur Head-Struktur und Meta-Angaben der Dice-&-Screen-Seite angepasst.

### Teststatus
- VS Code Fehlerpruefung fuer `dice-and-screen.html`: keine Fehler gefunden.

## 2026-03-16 (Nachtrag 7)

### Bereich
Dice-&-Screen-Seite (Lightbox Mobile)

### Dateien
- dice-and-screen.html
- styles/dice-screen.css

### Aenderung
- Lightbox-Overlay auf viewport-stabile Groessen (`inset: 0`, `height: 100dvh`, Box-Sizing mit Padding) angepasst.
- Bild-Skalierung auf sichere Mobile-Werte umgestellt (`max-width`/`max-height` mit `100dvh`), damit Bilder mittig und voll sichtbar bleiben.
- Problematische Mobile-Regeln (`width: 100%` + unlimitierte Hoehe) ersetzt.
- Beim Oeffnen der Lightbox wird Body-Scroll gesperrt und beim Schliessen wiederhergestellt, um Verschiebungen/Spruenge zu vermeiden.

### Grund
Auf Smartphones war die Lightbox nicht sauber zentriert und verschob sich beim Oeffnen.

### Risiko/Hinweise
- Geringes Risiko: Aenderungen betreffen nur das Lightbox-Verhalten der Dice-&-Screen-Seite.

### Teststatus
- VS Code Fehlerpruefung fuer `dice-and-screen.html` und `styles/dice-screen.css`: keine Fehler gefunden.

## 2026-03-16 (Nachtrag 8)

### Bereich
Dice-&-Screen-Seite (Lightbox Mobile Feinschliff)

### Dateien
- dice-and-screen.html
- styles/dice-screen.css

### Aenderung
- Lightbox-Overlay auf `display: grid` mit `place-items: center` umgestellt fuer stabilere Zentrierung.
- Bild-Constraints auf viewport-stabile Werte mit `100svh` und `calc(100vw - 32px)` angepasst.
- Scroll-Lock im Script verstaerkt: Body wird beim Oeffnen mit `position: fixed` inkl. gespeicherter Scroll-Position fixiert und beim Schliessen exakt wiederhergestellt.

### Grund
Auf Mobile trat weiterhin der Eindruck auf, dass die Lightbox sich an einem anderen (ausgezoomten) Viewport orientiert und das Bild nach oben/rechts verschiebt.

### Risiko/Hinweise
- Geringes Risiko: Nur Lightbox-Logik und Lightbox-Styling der Dice-&-Screen-Seite betroffen.

### Teststatus
- VS Code Fehlerpruefung fuer `dice-and-screen.html` und `styles/dice-screen.css`: keine Fehler gefunden.

## 2026-03-16 (Nachtrag 4)

### Bereich
Features-Seite (Tag-Symbole)

### Dateien
- features.html
- styles/style.css

### Aenderung
- Klarstellung umgesetzt: Nicht die grossen Karten-Ueberschriften, sondern die Kategorie-Tags wurden in Symbole umgewandelt.
- Karten-Ueberschriften (`h2`) wieder als Text gesetzt.
- Tag-Styling auf runde Symbol-Badges angepasst.

### Grund
Gewuenschte Symbolisierung sollte auf den kleinen Labels (`Combat Core`, `Battlefield`, `Abilities` usw.) liegen und nicht auf den Haupttiteln der Karten.

### Risiko/Hinweise
- Sehr geringes Risiko: Nur Features-Seite betroffen.

### Teststatus
- VS Code Fehlerpruefung fuer `features.html` und `styles/style.css`: keine Fehler gefunden.

## 2026-03-16 (Nachtrag 3)

### Bereich
Features-Seite (Karten-Ueberschriften)

### Dateien
- features.html
- styles/style.css

### Aenderung
- Ueberschriften in den Feature-Boxen durch Symbole ersetzt.
- Fuer jede Symbol-Ueberschrift wurden `aria-label` und `title` gesetzt, damit die Bedeutung erhalten bleibt.
- Symbol-Styles (`.feature-symbol`) fuer konsistente Groesse und Abstaende hinzugefuegt.

### Grund
Die Feature-Karten sollten visueller und ikonischer wirken, ohne Lesbarkeit und Accessibility zu verlieren.

### Risiko/Hinweise
- Geringes Risiko: Nur Features-Seite betroffen.
- Hinweis: `assets/icons` ist aktuell leer; deshalb wurden direkt verfuegbare Symbole verwendet.

### Teststatus
- VS Code Fehlerpruefung fuer `features.html` und `styles/style.css`: keine Fehler gefunden.

## 2026-03-16 (Nachtrag 2)

### Bereich
Features-Seite (Hero)

### Dateien
- features.html
- styles/style.css

### Aenderung
- Die Text-Ueberschrift "Dice & Screen" im Hero wurde durch das Dice-&-Screen-Logo ersetzt.
- Neues Styling fuer das Hero-Logo (`.features-kicker-logo`) hinzugefuegt.

### Grund
Der Hero sollte die Markenwirkung staerker ueber das Logo statt ueber Text tragen.

### Risiko/Hinweise
- Sehr geringes Risiko: nur Features-Hero betroffen.

### Teststatus
- VS Code Fehlerpruefung fuer `features.html` und `styles/style.css`: keine Fehler gefunden.
