# Dice & Screen Brand System Base

Stand: 2026-03-17
Zweck: Zentrale Orientierungsdatei fuer Design, Motion und Copy auf allen Dice-&-Screen-Seiten.

## Scope
Diese Basis gilt fuer:
- dice-and-screen/index.html (Hauptseite)
- dice-and-screen/features/index.html (Feature-Seite)
- dice-and-screen/timeline/index.html (Timeline)
- zugehoerige Stylesheets in styles/

---

## Phase 1 - Design System Foundation

### 1) Farbwelt (Arcane Bronze)
Primar:
- Bronze Gold: #CB9B4C
- Deep Shadow: #141313
- Warm Black: #1F1914

Sekundaer:
- Arcane Cyan: #5C8899
- Soft Sand: #F5E6C2

Utility:
- Glow Gold: rgba(203, 155, 76, 0.35)
- Glow Cyan: rgba(92, 136, 153, 0.35)
- Shadow Black: rgba(0, 0, 0, 0.45)

Ziel: warm, edel, episch, modern-technisch.

### 2) Typografie-System
Headlines:
- Cinzel (500/700)

Body:
- Inter (400/500/600)

Typo-Regeln:
- H1: 3.2rem (Hero, optional Glow-Layer)
- H2: 2.2rem
- H3: 1.4rem
- Body: 1.05rem
- Line-height: 1.45 bis 1.55
- Max text width: 62ch

### 3) CTA-System
Primary (Bronze):
- Bronze-Hintergrund
- Gold-Glow
- Hover: heller + scale(1.02)
- Text: Deep Shadow

Secondary (Cyan Outline):
- 1.5px Arcane Cyan Border
- Arcane Cyan Text
- Hover: leichter Cyan-Fill + Cyan-Glow

Tertiary (Text-Link):
- Underline Fade
- Soft Sand als Basis
- Hover mit Gold-Tint

### 4) Card-System
Manifest-Card (1x pro Seite):
- groesser, ornamentaler Rahmen, tiefer Shadow, Gold-Highlight, leichte Textur

Core-Card:
- mittelgross, staerkerer Glow, markanter Icon-Spot

Support-Card:
- kompakter, reduzierter Glow

### 5) Ikonografie-System
- Stil: Monoline Gold
- Strichstaerke: 1.5 bis 2px
- Einheitliche Groesse: 32x32 oder 40x40
- Einheitliche Platzierung
- Hover-Farbe: Cyan

### 6) Spacing-System (Vertical Rhythm)
Section spacing:
- XL: 6rem
- L: 4rem
- M: 2.5rem
- S: 1.5rem

Card padding:
- Standard: 1.6rem
- Manifest: 2.2rem

---

## Phase 2 - Material & Motion System

### 1) Material-Look
Noise:
- feine Filmgrain-Textur
- 5 bis 8% Opacity

Inneres Top-Highlight:
- linear gradient, transparent zu leicht Gold
- 10 bis 15% Opacity

Vignette Edge:
- radial gradient
- 5 bis 10% Opacity

Gold-Shift Hover:
- waermerer Farbton
- leicht staerkerer Glow
- scale: 1.01 bis 1.02
- 120 bis 180ms ease-out

Shadow-Level:
- S: 0 4px 12px rgba(0,0,0,0.25)
- M: 0 10px 24px rgba(0,0,0,0.35)
- L: 0 14px 34px rgba(0,0,0,0.45)

Ornament-Rahmen (Manifest/Hero):
- 1px Gold Border
- 1px inner dark Border
- Radius 8 bis 12px
- optional dezente SVG-Ecken

### 2) Motion-System
Entry Motion (Staggered Reveal):
- translateY: 6 bis 10px
- opacity: 0 -> 1
- duration: 300 bis 450ms
- stagger delay: 80 bis 120ms
- easing: cubic-bezier(0.22, 1, 0.36, 1)

Parallax Motion:
- 1 bis 3% auf grossen Flaechen
- nur subtil im Hero/Vision-Bereich

Hover Motion:
- scale: 1.00 -> 1.02
- leichter Glow-Boost
- 120 bis 180ms ease-out

Icon Motion:
- 1 bis 2 Grad Rotation
- leichter Glow-Boost
- 80 bis 120ms

Hero Signature Motion:
- logo breathing glow (2 bis 3% pulse)
- headline glow offset (1 bis 2px)
- partikel low opacity (0.05 bis 0.1)
- sehr schwacher CTA glow pulse

### 3) Performance-Regeln
- Animieren nur transform + opacity
- Keine animierten box-shadow-Werte
- Parallax auf GPU-freundlichen Layern
- Noise als PNG/SVG, nicht als teure Filter
- Animationen <= 450ms

### 4) Accessibility-Ergaenzung (verbindlich)
- prefers-reduced-motion beachten
- Sichtbare focus-visible states bei allen interaktiven Elementen
- Kontrast auf dunklen Flaechen pruefen (insb. kleine Texte)

---

## Phase 3 - Copy-Reduktion & Dramaturgie

### 1) Tone of Voice
- episch, aber nicht kitschig
- klar, aber nicht trocken
- selbstbewusst, aber nicht arrogant
- modern, aber nicht kalt
- praezise, aber nicht wortkarg

Keywords:
- cinematic, taktisch, fokussiert, inspirierend

### 2) Satzbau-Regeln
- Satzlaenge: 12 bis 16 Woerter
- starke Verben verwenden
- Fuellwoerter vermeiden
- Nutzen vor Funktion
- Read-aloud-Regel: Muss in einem Atemzug lesbar sein

### 3) Struktur-Regeln je Sektion
- 1 starke Headline
- 1 praegnante Subline
- 2 bis 3 kurze Absaetze
- 1 Punchline, die haengen bleibt

### 4) Copy-Limits (verbindlich)
- Hero Subline: max 140 Zeichen
- Feature-Absatz: max 220 Zeichen
- Vision-Absatz: max 260 Zeichen
- CTA-Subtext: max 80 Zeichen

### 5) CTA-Whitelist
Erlaubte CTA-Verben:
- Entdecken
- Ansehen
- Starten
- Erkunden
- Oeffnen
- Mehr erfahren
- Weiterlesen
- Loslegen

Zuordnung:
- Primary: Entdecken, Starten
- Secondary: Ansehen, Erkunden
- Tertiary: Mehr erfahren, Weiterlesen

### 6) Glossar (Kernbegriffe)
- Spielleitung: offizieller Begriff statt DM/GM
- Flow: fluessiges Spielen ohne Unterbrechung
- Theatre of Mind: erzaehlerisches Spiel ohne Grid
- Grid: taktisches Spielfeld
- Effekte: Zustaende, Buffs, Debuffs, Auren
- skalierbare Effekte: Ersatz fuer Upcasting
- Vergleichsproben: Ersatz fuer Contest
- aufrechterhaltene Effekte: Ersatz fuer Konzentration

---

## Definition of Done (DoD) fuer neue DNS-Seiten
Eine Seite ist nur "fertig", wenn:
- Design-Tokens aus dieser Basisdatei verwendet sind
- CTA-Typen konsistent (Primary/Secondary/Tertiary)
- Copy-Limits eingehalten
- CTA-Whitelist eingehalten
- Glossar-konforme Begriffe genutzt
- Read-aloud-Regel bestanden
- Focus-visible vorhanden
- prefers-reduced-motion vorhanden
- Mobile-Layout geprueft (>= 360px Breite)

---

## Einfache Rollout-Reihenfolge
1. Hauptseite: Hero + CTA-System + Motion-Basics
2. Feature-Seite: Manifest/Core/Support-Rhythmus + Material-Look
3. Timeline: visuell angleichen, Textdichte reduzieren, klarere Teaser
4. Icons: Emoji schrittweise gegen Monoline-SVG austauschen
5. Final QA: Performance, Kontrast, Navigation, Konsistenz
