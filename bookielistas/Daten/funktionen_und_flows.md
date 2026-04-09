# Bookielist - Funktionen und Flows

**Stand:** 07.04.2026  
**Ziel dieses Dokuments:** Schneller, nicht-technischer Gesamtueberblick ueber alle wichtigen Funktionen und Nutzerablaeufe.

---

## 1. Zweck der App

Bookielist ist ein digitales Buecherregal fuer Leserinnen und Leser, die ihre Buecher schnell erfassen, sauber organisieren und langfristig verwalten wollen.

Kernidee:
- schnell erfassen (Scan, Suche, manuell)
- einfach organisieren (Besitz/Merkliste, Lesestatus, Filter)
- sicher behalten (Sicherung und Wiederherstellung)

---

## 2. App-Bereiche auf einen Blick

Bottom Navigation:
- **Start**: zentrale Aktionen
- **Buecherregal**: lokaler Bestand mit Suche/Filter/Sortierung

Start-Aktionen:
- Scanner oeffnen
- Buch online suchen
- Buch manuell anlegen
- Stimmungsmodi
- Sicherung & Wiederherstellung

---

## 3. Flow A - Buch erfassen (Scanner)

1. Nutzer oeffnet den Scanner.
2. Strichcode wird erkannt.
3. Lookup-Kette startet (lokal/Cloud/Remote-Fallbacks).
4. Bei Treffer erscheint die Buchansicht mit Quelle und Optionen.
5. Nutzer speichert in **Besitz** oder **Merkliste**.

Wenn kein Treffer gefunden wird:
- automatische Weiterleitung in die manuelle Online-Suche
- falls dort ebenfalls kein Treffer: manuelles Anlegen moeglich

---

## 4. Flow B - Buch erfassen (Online-Suche)

1. Nutzer gibt Titel (und optional Autor) ein.
2. Ergebnisliste wird angezeigt.
3. Gewuenschtes Buch wird ausgewaehlt.
4. Buch wird in Besitz oder Merkliste uebernommen.

Hinweis:
- API-Suche ist besonders wichtig bei Buechern ohne lesbaren Strichcode.

---

## 5. Flow C - Buch erfassen (manuell)

1. Nutzer oeffnet "Buch manuell anlegen".
2. ISBN und Titel werden eingegeben (Autor optional).
3. Nutzer speichert in Besitz oder Merkliste.
4. Buch ist sofort lokal verfuegbar.

Spaeter kann in der Detailansicht eine erneute Metadaten-Suche gestartet werden.

---

## 6. Flow D - Buecherregal verwalten

Im Bereich **Buecherregal**:
- beim App-Start ein einmaliger Snapshot-Check fuer schnelle Cloud-Metadaten-Abgleiche
- lokale Volltextsuche
- Kamera-Button neben Suche fuer schnellen ISBN-Eintrag ins Suchfeld
- Filter (z. B. Besitz/Merkliste, Lesestatus)
- Sortierung (z. B. Alphabet, zuletzt hinzugefuegt)
- Cover in der Liste fuer schnellere visuelle Wiedererkennung

Lesestatus:
- Ungelesen
- Angefangen
- Gelesen
- Abgebrochen

Der Lesestatus ist fuer **Besitz und Merkliste** verfuegbar.

---

## 7. Flow E - Detailansicht eines Buches

In der Detailansicht sind moeglich:
- Besitzstatus aendern
- Lesestatus aendern
- Metadaten erneut suchen (v. a. bei manuell angelegten Buechern)
- Buch loeschen

Neuer Detail-Flow bei fehlendem Cover:
1. Detailansicht wird geoeffnet.
2. Wenn kein Cover vorhanden ist, startet kurz ein Cloud-Check.
3. Wenn in der Bookielist Cloud inzwischen ein Cover vorhanden ist, wird die Cover-URL lokal ergaenzt.
4. In der UI wird waehrenddessen ein kurzes Inline-Feedback angezeigt.

---

## 8. Stimmungsmodi (Themes)

Bookielist bietet mehrere Stimmungsmodi fuer unterschiedliche Lesegefuehle (z. B. Standard, Verliebt, Dark, Spooky, Gemuetlich, Froehlich).

Ablauf:
1. Nutzer oeffnet Stimmungsmodi.
2. Vorschau wird angezeigt.
3. Modus wird uebernehmen.

Ziel: funktionale App + emotionales Lesegefuehl.

---

## 9. Sicherung und Wiederherstellung

Unter "Sicherung & Wiederherstellung":
- **Sicherung speichern**: Export wichtiger lokaler Daten
- **Sicherung laden**: Import zum Wiederaufbau auf neuem Geraet/neu installierter App

Ziel:
- kein Verlust der lokalen Bibliothek bei Geraetewechsel oder Neuinstallation

---

## 10. Datenquellen und Datenschutz (Kurzfassung)

Datenquellen fuer Buchmetadaten:
- Bookielist Cloud (Community-Metadaten-Cache)
- Google Books
- Open Library

Datenschutzgrundsatz:
- persoenliche Bibliotheksdaten bleiben lokal
- Cloud dient als Metadaten-Cache (ohne Nutzerkonto, ohne Profiling)
- manuelle Sicherung bleibt nutzerkontrolliert

---

## 11. Begriffe

- **Besitz**: Buch ist in der eigenen Sammlung
- **Merkliste**: Buch ist vorgemerkt, noch nicht zwingend im Besitz
- **Lesestatus**: Fortschritt (ungelesen/angefangen/gelesen/abgebrochen)
- **Bookielist Cloud**: anonymer Metadaten-Cache fuer schnellere Treffer und fruehe Cover-Signale im Snapshot

---

## 12. Aktueller Produktnutzen in einem Satz

Bookielist kombiniert schnellen Erfassungs-Flow, starke lokale Verwaltung und ein emotionales UI mit einem datensparsamen Cloud-Metadaten-Cache.
