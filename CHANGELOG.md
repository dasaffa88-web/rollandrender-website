# Changelog

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
