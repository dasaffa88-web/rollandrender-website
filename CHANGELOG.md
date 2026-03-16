# Changelog

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
