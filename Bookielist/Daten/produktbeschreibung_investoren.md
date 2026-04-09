# Bookielist – Produktbeschreibung für Investoren

**Stand: April 2026 (Update: 07.04.2026)**

---

## Elevator Pitch

Bookielist ist das persönliche digitale Bücherregal für Leserinnen und Leser, die ihren Bestand schnell erfassen, intelligent organisieren und emotional erleben wollen. Die App verbindet hochperformantes ISBN-Scanning, robuste Metadaten-Suche mit API-Fallback, eine wachsende Community-Cloud für schnellere Treffer und ein einzigartiges Mood-Theme-Erlebnis in einer klaren, alltagstauglichen UX.

---

## Das Problem

Der Buchmarkt ist emotional, aber die Organisation privater Büchersammlungen ist oft technisch rückständig:

- Bestandslisten sind verstreut (Notizen, Excel, Shop-Wunschlisten, Kopf)
- Neue Bücher werden gekauft, obwohl sie bereits vorhanden sind
- Metadaten-Erfassung ist manuell und zeitaufwendig
- Standard-Apps fühlen sich funktional, aber nicht „buchig" an
- Datenverlust bei Gerätewechsel ist ein reales Risiko
- Langsame API-Responses bei jedem einzelnen Scan frustrieren Vielnutzer

---

## Unsere Lösung

Bookielist bietet einen End-to-End-Flow vom Entdecken bis zur langfristigen Verwaltung:

1. Buch erfassen (Scanner oder Suche)
2. Metadaten bestätigen/ergänzen
3. In Besitz oder Merkliste einsortieren
4. Mit Status, Filtern und Suche aktiv managen
5. Daten per Import/Export sicher übertragen
6. Community-Cloud beschleunigt künftige Scans für alle Nutzer

---

## Zielgruppe

- **Core:** Bookies, Vielleserinnen, Sammler, Genre-Communities (Romance, Dark Romance, Fantasy etc.)
- **Secondary:** Gelegenheitsleser, die Ordnung ohne Aufwand wollen
- **Early Adopter Fit:** Nutzer mit hoher Cover-/Stimmungs-Affinität und Wunsch nach schneller Erfassung

---

## Produktvision

Bookielist wird zur „Homebase" für das persönliche Lesen:

- Funktional stark genug für Inventar-Management
- Emotional stark genug für langfristige Bindung
- Technisch robust genug für Alltag und Skalierung
- Community-getrieben durch anonymen Metadaten-Cache

---

## Kernfeatures und Flows

### 1) Start-Hub

Der Start-Screen ist bewusst als Aktions-Hub gestaltet:

- Scanner öffnen
- Buch online suchen (Titel/Autor)
- Buch manuell hinzufügen
- Stimmungsmodi
- Sichern & Wiederherstellen

### 2) ISBN-Scanner mit direkter Folgeaktion

Flow:
1. Scanner öffnen → ISBN scannen
2. Lookup startet (Cloud-Cache → Google Books → Open Library)
3. Treffer bestätigen und in Bestand oder Merkliste übernehmen

Technik: CameraX + ML Kit Barcode Scanning

### 3) Tri-Layer-Metadatenstrategie (Differenzierungsfaktor)

Lookup-Reihenfolge:
1. **Bookielist Cloud-Cache** (sofortiger Treffer wenn verfügbar)
2. **Google Books** (Trefferqualität, Cover, Metadaten)
3. **Open Library** (Fallback für ältere/seltene Titel)

Nutzen:
- Schnellster Cold-Start-Moment bei bereits bekannten ISBNs
- Höhere Trefferquote als Single-API-Apps
- Weniger Frust bei „nicht gefunden"

### 4) Manuelle Suche (Titel + Autor)

Wenn kein Barcode verfügbar: Suche nach Titel/Autor, Ergebnisliste mit Auswahl.

### 5) Manuelle Anlage + späteres Resync

Falls API nichts liefert: Buch sofort speichern, später „Metadaten erneut suchen".

### 6) Lokale Library als eigener Bereich

- Lokale Volltextsuche, Filter und Sortierung
- Besitzstatus: Besitz / Merkliste
- Lesestatus: Ungelesen / Angefangen / Gelesen / Abgebrochen
- Cover in der Liste für schnelle visuelle Orientierung

### 7) Mood-Theme-System (UX-Moat)

Kuratierte Modi mit passender Farbwelt und Typografie:
Standard · Verliebt · Dark · Spooky · Gemütlich · Fröhlich

Nutzen: emotionales Produktgefühl, hohe Wiedererkennung,
klare Differenzierung gegen utilitaristische Konkurrenz.

### 8) Backup: Sichern & Wiederherstellen

Dateibasiertes Import/Export-Konzept:
- Lokaler Bestand bleibt kontrollierbar
- Gerätewechsel und Reinstall sind abgesichert
- Intelligentes Merge: neuerer Zeitstempel gewinnt, keine Duplikate

### 9) Bookielist Cloud-Cache (NEU)

Anonymer Community-Metadaten-Cache auf Cloudflare Workers + KV:

- Beim Scan: Buchmetadaten werden anonym gecacht
- Beim nächsten Scan (anderer User): sofortiger Cache-Treffer
- In der Detailansicht ohne Cover: kurzer Read-Check gegen die Cloud, automatisches Cover-Backfill bei Treffer
- Keine persönlichen Daten, kein Profiling
- Globaler Lookup in < 50ms (Cloudflare Edge)
- Wächst automatisch mit der Nutzerbasis
- **Snapshot fuer App-Start:** `GET /books` liefert `isbn`, `title`, `author`, `coverUrl`, `source`, `updatedAt`
- **Detail-Read on demand:** `GET /books/:isbn`
- **Zweck:** schnellere Metadaten-Treffer und Cover-Verfuegbarkeit direkt beim Start

### 10) Internationalisierung

Mehrsprachige String-Struktur mit englischem Fallback.

---

## Technische Architektur

### Android App
- Kotlin + Jetpack Compose (100% nativer Android-Stack)
- Room (SQLite) für lokale Persistenz
- Retrofit/OkHttp für API-Schicht
- Koin für Dependency Injection
- MVVM + Use Cases + Repository Pattern
- Backup/Restore via SAF (Storage Access Framework)

### Bookielist Cloud (NEU – Live seit April 2026)
- **Cloudflare Workers** (TypeScript, Edge-deployed)
- **Cloudflare KV** (Key-Value Store, global repliziert)
- **Snapshot fuer App-Start:** `GET /books` liefert `isbn`, `title`, `author`, `coverUrl`, `source`, `updatedAt`
- **Detail-Read on demand:** `GET /books/:isbn`
- **Zweck:** schnellere Metadaten-Treffer und Cover-Verfuegbarkeit direkt beim Start
- **Verfuegbarkeit:** 99,9%+ (Cloudflare SLA)
- **Kosten:** Cloudflare Free Tier (100K Reads/Tag, 1K Writes/Tag)

---

## Datenschutz und Vertrauen

- Nutzerzentrierter, lokaler Datenfokus (kein Pflicht-Account)
- Transparente Backup-Strategie (nutzergesteuert)
- Cloud-Cache: ausschließlich anonyme Buchmetadaten (kein Bezug zu Nutzern)
- API-Zugriffe zweckgebunden für Metadaten
- DSGVO-konform: Rechtsgrundlage Art. 6 Abs. 1 lit. f für Cloud-Cache

---

## Monetarisierung

### Aktuell
- Einmalkauf (1 €) – einmalig, kein Abo, keine Werbung

### Optionen (Roadmap)
1. **Freemium:** Free (Kernfunktionen) / Pro (Premium-Themes, Statistiken, Smart-Listen)
2. **Einmalkauf + Add-ons:** Themes als optionale Ergänzung
3. **Affiliate (später):** Kontextuelle Buchlinks, transparent und optional

---

## Go-to-Market

- **Phase 1:** Organischer Start über Buch-Communities, Testgruppen, Social Proof
- **Phase 2:** Store-Optimierung über Theme-/Scanner-USP + Cloud-Cache-Schnelligkeit
- **Phase 3:** Kooperationen mit Book-Influencern und Lesecommunities

---

## Roadmap

### Kurzfristig (in Entwicklung)
- ✅ Cloud-Cache als Metadaten-Beschleuniger (live)
- Ausbau der Cloud-Cache-Qualitaet (Trefferabdeckung und Datenqualitaet)

### Mittelfristig
- Cloud-Sync als optionales Pro-Feature
- Reader Insights (Leseverlauf, Ziele, Trends)
- Smart Collections (regelbasiert)

### Langfristig
- Empfehlungs-Layer auf Basis lokaler Bibliothek
- iOS / Web Companion
- API für Drittanbieter-Integrationen

---

## Warum Nutzer bleiben

- Sofortiger Nutzen beim ersten Scan
- Cloud-Cache wird mit jeder Nutzung für alle besser
- Alltagstaugliche Ordnungsfunktionen (Suche, Filter, Status)
- Emotionales Interface statt „kalter Datenbank"
- Datensicherheit durch Backup-Option

---

## Investment-Case in einem Satz

Bookielist kombiniert eine hohe Alltagshäufigkeit (Bücher erfassen und verwalten) mit emotionaler Produktbindung (Mood-UX), einem wachsenden Community-Netzwerkeffekt (Cloud-Cache) und robuster technischer Basis (Tri-Layer-Lookup, lokale Datenhoheit, Backup) – und hat damit das Potenzial, sich als markenstarke Homebase für moderne Leser zu etablieren.

---

## Kurzfazit

Bookielist ist nicht nur „eine weitere Bücherliste" – es ist ein nutzerzentriertes, differenziertes Produkt mit klarer Value Proposition, Community-Netzwerkeffekt durch den Cloud-Cache, emotionaler UX-Stärke und einer glaubwürdigen Skalierungsstory von MVP zu Plattform.

---

*Zuletzt aktualisiert: 07.04.2026*
