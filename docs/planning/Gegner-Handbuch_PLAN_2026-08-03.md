# Plan: Gegner-Handbuch (Bestiarium)

**Status:** IN ARBEIT
**Datum:** 2026-08-03
**Ziel:** Aufbau des Gegner-Handbuchs (`gegnerhandbuch/`) als vollwertiges Bestiarium mit 45 Gegnern aus `BESTIARIUM_HANDBUCH.md` + JSON-Daten, strukturiert in CR-Tiers mit Gegner-Karten, CR-Color-Coding und SL-Hinweisen.

## Datenquellen (abgeglichen am 2026-08-03)

- **JSONs** (`data/enemies/*.json`, 45 Gegner) — strukturierte Daten: CR, HP, AC, ATK, SaveDC, DPR, Type, Size, Archetype, Initiative, Abilities, aiType
- **Handbuch** (`docs/manuals/BESTIARIUM_HANDBUCH.md`, 45 Gegner) — Lore, KI-Verhalten als Text
- **Abgleich-Ergebnis:** Alle Felder (CR, Type, Size, Archetype, HP, AC, ATK, SaveDC, DPR) stimmen zu 100% überein. Nur Initiative fehlt im Handbuch bei 7 Bossen — JSONs sind vollständigere Quelle.
- **Gargoyle-Type-Diskrepanz:** JSON=MECHANICAL, Handbuch=MONSTROSITY — JSON gewinnt (Code-Quelle)

## Struktur — CR-Tiers (wie das Bestiarium es schon macht)

```
gegnerhandbuch/
├── index.html              ← Hub mit 6 CR-Tier-Karten
├── styles.css              ← Bronze-Dark + CR-Colors + SL-Kasten
├── img/                    ← Portraits (folgen später — backgroundless)
├── lakaien/
│   └── index.html          ← CR 0-1/4 (6 Gegner)
├── soldaten/
│   └── index.html          ← CR 1/2-1 (12 Gegner)
├── elite/
│   └── index.html          ← CR 2-4 (14 Gegner)
├── champions/
│   └── index.html          ← CR 5-10 (7 Gegner)
├── bosse/
│   └── index.html          ← CR 11-17 (4 Gegner)
└── raidbosse/
    └── index.html          ← CR 18+ (2 Gegner)
```

**Keine Einzelseiten pro Gegner** — Karten auf Kategorie-Seiten (Daten füllen keine eigene Seite).

**Keine Quick-Nav** auf Gegner-Seiten — jede Kategorie ist eine eigene Seite mit 2-14 Gegnern, scrollbar ohne Anker-Menü. Der Hub ist die Navigation.

## 6 Kategorien

| Kategorie | CR-Bereich | Anzahl | CR-Farbe |
|---|---|---|---|
| Lakaien | CR 0 – 1/4 | 6 | Grün |
| Soldaten | CR 1/2 – 1 | 12 | Grün/Blau |
| Elite | CR 2 – 4 | 14 | Blau |
| Champions | CR 5 – 10 | 7 | Violett |
| Bosse | CR 11 – 17 | 4 | Rot |
| Raidbosse | CR 18+ | 2 | Gold |

## Gegner-Karte — Aufbau

Pro Gegner eine Karte auf der Kategorie-Seite:

1. **Portrait** (links, ~100×100) — `gegnerhandbuch/img/<gegner_id>.png` (backgroundless)
2. **Header:** Name + CR-Badge (farbcodiert) + Type/Size/Archetype-Tags + Initiative
3. **Statblock-Tabelle:** HP, AC, ATK, SaveDC, DPR (kompakt)
4. **Abilities-Liste:** Würfel-Formel + kurze Beschreibung pro Ability
5. **Tipps gegen X** (spielerfacing, blau-cyan Kasten): 2-4 taktische Tipps für die Party
6. **KI-Verhalten:** 1-2 Sätze (aus Handbuch)
7. **Lore:** 1-2 Sätze Flavour-Text (aus Handbuch)
8. **SL-Hinweise** (SL-facing, bronze Kasten ganz unten): Encounter-Design + Synergien + Kombinationen

## CR-Color-Coding

| Farbe | CR-Bereich | Bedeutung |
|---|---|---|
| Grün | CR 0 – 1/2 | Kanonenfutter / Trash |
| Blau | CR 1 – 4 | Standard-Einheiten |
| Violett | CR 5 – 10 | Elite / Champions |
| Rot | CR 11 – 17 | Bosse |
| Gold | CR 18+ | Raidbosse / Legenden |

CR-Badge = kleiner farbiger Punkt oder Rahmen um die CR-Zahl.

## Tipps gegen X — Inhalt pro Gegner (spielerfacing)

2-4 kurze, taktische Punkte für die **Party**:
- **Schwäche ausnutzen** (niedrige AC, kein Save, anfällig für Condition X)
- **Gegenmassnahme** (welche Ability/Strategie neutralisiert den Gegner)
- **Verhalten vorausdenken** (Flucht-KI blockieren, Summon-Priorität, etc.)
- **Was vermeiden** (Lebensraub nicht mit vielen kleinen Treffen, etc.)

## SL-Hinweise — Inhalt pro Gegner (SL-facing, ganz unten)

2-3 kurze Punkte für den **Spielleiter**:
- **Encounter-Design** ("Ideal als Trash-Mob in Gruppen von 3-5", "Auf erhöhten Positionen platzieren")
- **Synergie-Kombinationen** ("Kombiniere mit Goblin-Schamane: Schattenfluch + Gift = tödliche Combo")
- **Dramaturgie** ("Flucht-KI für wiederkehrende Gegner nutzen", "Bei 50% HP wird er aggressiver")

## Portrait-Bilder

- **Pfad:** `gegnerhandbuch/img/<gegner_id>.png`
- **Format:** PNG, backgroundless (transparenter Hintergrund)
- **Größe:** ~200×200px (wird auf 100×100 skaliert im CSS)
- **Namenskonvention:** exakt die Gegner-ID aus den JSONs (z.B. `goblin_assassin.png`, `adult_fire_dragon.png`)
- **Beispiele:**
  - `rat_swarm.png` — Rattenschwarm
  - `goblin_assassin.png` — Goblin-Assassine
  - `adult_fire_dragon.png` — Erwachsener Feuerdrache
  - `lich.png` — Lich
  - `titan.png` — Titan

## Design

- Gleicher Bronze-Dark-Stil wie `itemhandbuch/` und `klassenhandbuch/`
- Eigene `gegnerhandbuch/styles.css` (basiert auf bestehenden Handbuch-Styles)
- Karten-Layout: grösser als Item-Karten, kleiner als Klassen-Detail-Seiten
- Mobile: Karten stapeln, Tabellen horizontal scrollbar (wie bei anderen Handbüchern)

## Betroffene Dateien

- **NEU:** `gegnerhandbuch/index.html` — Hub (ersetzt aktuelle Platzhalter-Seite)
- **NEU:** `gegnerhandbuch/styles.css` — Styles
- **NEU:** `gegnerhandbuch/lakaien/index.html`
- **NEU:** `gegnerhandbuch/soldaten/index.html`
- **NEU:** `gegnerhandbuch/elite/index.html`
- **NEU:** `gegnerhandbuch/champions/index.html`
- **NEU:** `gegnerhandbuch/bosse/index.html`
- **NEU:** `gegnerhandbuch/raidbosse/index.html`
- **UPDATE:** `handbuch/index.html` — Gegner-Handbuch von Platzhalter → aktiv

## Schritte

1. Gegner-Daten aus JSONs + Handbuch extrahieren (Python-Skript, temporär)
2. `gegnerhandbuch/styles.css` — Bronze-Dark + CR-Colors + SL-Hinweis-Kasten
3. `gegnerhandbuch/index.html` — Hub mit 6 Kategorie-Karten
4. 6 Kategorie-Seiten bauen — je mit Gegner-Karten
5. SL-Hinweise pro Gegner formulieren (taktische Tipps + Synergien)
6. Hub aktualisieren — Gegner-Handbuch von "Folgt" → aktiv
7. Mobile-Test
8. Commit + Push

## Später (separat)

- Quick-Nav-Anker auf Waffenhandbuch (9 Kategorien auf 1 Seite)
- Quick-Nav-Anker auf Klassen-Handbuch (falls gewünscht)
- Backgroundless-Portraits für alle 45 Gegner

## Geklärte Entscheidungen

1. ✅ Keine Einzelseiten pro Gegner — Karten auf Kategorie-Seiten
2. ✅ 6 Kategorien nach CR-Tiers (wie Bestiarium)
3. ✅ CR-Color-Coding: Grün/Blau/Violett/Rot/Gold
4. ✅ SL-Hinweise als dezenter Kasten unten auf der Karte
5. ✅ Keine Quick-Nav auf Gegner-Seiten — Hub ist Navigation
6. ✅ Portraits als Platzhalter bis backgroundless-Bilder fertig
7. ✅ JSONs als primäre Datenquelle (vollständiger als Handbuch)
8. ✅ Lore + KI-Verhalten aus Handbuch ergänzen

## Offene Fragen

Alle geklärt.
