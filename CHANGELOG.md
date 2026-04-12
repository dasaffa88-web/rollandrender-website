# Changelog

## 2026-04-12 (Bookielist Plattform-Hinweis auf Android-only geschärft)

### Bereich
Roll-&-Render-Website (Bookielist Plattform-Copy)

### Dateien
- bookielist/index.html
- bookielist/en.html
- bookielist/playstore.html
- bookielist/playstore-en.html
- bookielist/Daten/playstore_beschreibung.txt
- bookielist/Daten/playstore_beschreibung2.txt
- CHANGELOG.md

### Änderung
- Auf den deutschen und englischen Bookielist-Landingpages ausdrücklich ergänzt, dass Bookielist aktuell nur für Android verfügbar ist und keine iOS-Version angeboten wird.
- Die deutschen und englischen Play-Store-Platzhalterseiten um denselben klaren Android-only-Hinweis erweitert.
- Beide deutschen Play-Store-Copy-Dateien um eine frühe Plattform-Klarstellung ergänzt, damit Store- und Website-Texte dieselbe Aussage transportieren.

### Grund
Die bisherige Kommunikation ließ sich über den Play-Store-Kontext zwar indirekt als Android-only lesen, sollte aber ausdrücklich klarstellen, dass es derzeit keine iOS-Version gibt.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Textanpassung ohne Layout-, Routing- oder Skriptänderungen.
- Falls später eine iOS-Version geplant oder veröffentlicht wird, muss die Plattform-Copy an allen Bookielist-Stellen gemeinsam aktualisiert werden.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [bookielist/en.html](bookielist/en.html), [bookielist/playstore.html](bookielist/playstore.html), [bookielist/playstore-en.html](bookielist/playstore-en.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-11 (Bookielist Landingpage und Privacy an neue Store-Copy angepasst)

### Bereich
Roll-&-Render-Website (Bookielist Copy, Produktpositionierung und Legal-Konsistenz)

### Dateien
- bookielist/index.html
- bookielist/en.html
- bookielist/datenschutz.html
- bookielist/privacy.html
- CHANGELOG.md

### Änderung
- Die Landingpages [bookielist/index.html](bookielist/index.html) und [bookielist/en.html](bookielist/en.html) auf die neue Bookielist-Positionierung aus [bookielist/Daten/playstore_beschreibung2.txt](bookielist/Daten/playstore_beschreibung2.txt) gezogen: persönlicher Sammlungs-Manager statt E-Reader, Testversion mit bis zu 10 Büchern, Serienunterstützung und lokale eigene Coverfotos.
- Die Feature- und Monetarisierungsblöcke auf beiden Landingpages um die neuen Kernbotschaften erweitert, inklusive optional geteilter Serieninfos im Community-Cache und klarerer Trial-/Unlock-Kommunikation.
- Die Datenschutzerklärungen [bookielist/datenschutz.html](bookielist/datenschutz.html) und [bookielist/privacy.html](bookielist/privacy.html) inhaltlich nachgezogen: Serienname/Bandnummer als optionale Community-Freigabe ergänzt und klargestellt, dass selbst gesetzte Coverfotos ausschließlich lokal bleiben.

### Grund
Die aktualisierte Store-Copy beschreibt Bookielist in mehreren Punkten präziser als die Website. Landingpage und Datenschutz sollten dieselben Produktaussagen und Datenflüsse widerspruchsfrei abbilden.

### Risiko/Hinweise
- Geringes Risiko: reine Text- und Inhaltsanpassung auf statischen Bookielist-Seiten ohne Layout-, Routing- oder Skriptänderung.
- Die Datenschutzformulierung beschreibt optionale Serienfreigaben funktional; für formale Rechtsprüfung kann bei Bedarf später noch juristisches Review erfolgen.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [bookielist/en.html](bookielist/en.html), [bookielist/datenschutz.html](bookielist/datenschutz.html), [bookielist/privacy.html](bookielist/privacy.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist Monetarisierungs-Copy ohne festen Preis)

### Bereich
Roll-&-Render-Website (Bookielist Monetarisierungs-Copy)

### Dateien
- bookielist/index.html
- bookielist/en.html
- bookielist/Daten/playstore_beschreibung.txt
- CHANGELOG.md

### Änderung
- Den Monetarisierungs-Block auf [bookielist/index.html](bookielist/index.html) von einer festen Preisnennung auf eine allgemeinere Formulierung mit kleinem einmaligem Aufpreis umgestellt.
- Den entsprechenden englischen Monetarisierungs-Block auf [bookielist/en.html](bookielist/en.html) ebenfalls ohne konkrete Preiszahl formuliert.
- Die Play-Store-Beschreibung in [bookielist/Daten/playstore_beschreibung.txt](bookielist/Daten/playstore_beschreibung.txt) von einer festen Preisfrage auf eine generelle Einmalkauf-Begründung umgestellt.

### Grund
In der Bookielist-Kommunikation soll aktuell kein konkreter Preis angezeigt werden, das Modell eines kleinen einmaligen Unlocks aber weiterhin verständlich bleiben.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Textanpassung auf statischen Seiten und Copy-Dateien ohne Layout-, Logik- oder Routingänderung.
- Die Formulierung "kleiner Aufpreis" bleibt bewusst unscharf und sollte vor Store-Launch mit der finalen Preisstrategie abgeglichen werden.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [bookielist/en.html](bookielist/en.html), [bookielist/Daten/playstore_beschreibung.txt](bookielist/Daten/playstore_beschreibung.txt) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist Play-Store-Platzhalter um EN-Version ergänzt)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage Localization)

### Dateien
- bookielist/playstore.html
- bookielist/playstore-en.html
- bookielist/en.html
- CHANGELOG.md

### Änderung
- Neue englische Platzhalterseite [bookielist/playstore-en.html](bookielist/playstore-en.html) für den späteren Play-Store-Link erstellt.
- Auf [bookielist/playstore.html](bookielist/playstore.html) und [bookielist/playstore-en.html](bookielist/playstore-en.html) den festen DE/EN-Sprachswitch oben links ergänzt.
- Den englischen Hero-Button auf [bookielist/en.html](bookielist/en.html) von der deutschen Platzhalterseite auf [bookielist/playstore-en.html](bookielist/playstore-en.html) umgestellt.

### Grund
Die englische Bookielist-Landingpage sollte nicht mehr auf einen deutschen Play-Store-Platzhalter verweisen, sondern auf eine konsistente englische Gegenroute.

### Risiko/Hinweise
- Sehr geringes Risiko: neue statische Sprachvariante und Link-Anpassung ohne Logik- oder Routingänderung außerhalb der Bookielist-Seiten.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/playstore.html](bookielist/playstore.html), [bookielist/playstore-en.html](bookielist/playstore-en.html), [bookielist/en.html](bookielist/en.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist Landingpage um EN-Version und Sprachswitch erweitert)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage Localization)

### Dateien
- bookielist/index.html
- bookielist/en.html
- bookielist/privacy.html
- CHANGELOG.md

### Änderung
- Auf [bookielist/index.html](bookielist/index.html) denselben festen DE/EN-Sprachswitch unter dem Roll-&-Render-Pill ergänzt wie auf den Privacy-Seiten.
- Neue englische Landingpage [bookielist/en.html](bookielist/en.html) erstellt als übersetzte Gegenroute zur deutschen Bookielist-Seite.
- Die englische Seite enthält englische Hero-, Feature-, USP-, Flow-, Screenshot- und Privacy-Texte und verlinkt auf [bookielist/privacy.html](bookielist/privacy.html).
- Auf [bookielist/privacy.html](bookielist/privacy.html) den Rücklink zur neuen englischen Bookielist-Seite angepasst.

### Grund
Der Sprachswitch auf der Bookielist-Seite sollte nicht nur sichtbar sein, sondern auch auf eine echte englische Seitenvariante führen.

### Risiko/Hinweise
- Geringes Risiko: neue statische Sprachvariante ohne Eingriff in App- oder Routinglogik außerhalb der Bookielist-Seiten.
- Der Play-Store-Platzhalter ist weiterhin nur in deutscher Fassung vorhanden; der englische Hero-Button verweist deshalb vorerst noch auf dieselbe Platzhalterroute.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [bookielist/en.html](bookielist/en.html), [bookielist/privacy.html](bookielist/privacy.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist Privacy-Sprachswitch oben links ergänzt)

### Bereich
Roll-&-Render-Website (Bookielist Legal Pages UI)

### Dateien
- bookielist/datenschutz.html
- bookielist/privacy.html
- styles/bookielist.css
- CHANGELOG.md

### Änderung
- Auf [bookielist/datenschutz.html](bookielist/datenschutz.html) und [bookielist/privacy.html](bookielist/privacy.html) direkt unter dem festen Roll-&-Render-Pill einen kleinen DE/EN-Sprachswitch ergänzt.
- Der Switch markiert die aktuelle Sprache visuell und führt jeweils zur anderen Sprachversion der Datenschutzerklärung.
- Die bisherigen Sprachwechsel-Buttons im Hero entfernt, damit die Sprachumschaltung konsistent oben links sitzt.
- In [styles/bookielist.css](styles/bookielist.css) neue Styles für den festen Sprachswitch ergänzt, inklusive mobiler Anpassung.

### Grund
Der Sprachwechsel sollte auf den Privacy-Seiten sofort sichtbar und an derselben Stelle erreichbar sein, statt nur innerhalb des Hero-Bereichs.

### Risiko/Hinweise
- Sehr geringes Risiko: reine UI- und Navigationsanpassung auf den statischen Rechtsseiten.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/datenschutz.html](bookielist/datenschutz.html), [bookielist/privacy.html](bookielist/privacy.html), [styles/bookielist.css](styles/bookielist.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist Privacy um Google Play Billing ergänzt)

### Bereich
Roll-&-Render-Website (Bookielist Legal Pages)

### Dateien
- bookielist/datenschutz.html
- bookielist/privacy.html
- CHANGELOG.md

### Änderung
- Auf [bookielist/datenschutz.html](bookielist/datenschutz.html) eine eigene Sektion zu Käufen über Google Play Billing ergänzt.
- Die Datenschutzerklärung erwähnt jetzt ausdrücklich, dass Google beim Kauf eigene Daten wie Google-Konto und Zahlungsinformationen verarbeitet.
- Ergänzt, dass Roll &amp; Render Studio keine vollständigen Zahlungsdaten sieht oder speichert und dass der Kaufstatus lokal auf dem Gerät gespeichert wird.
- Die englische Fassung auf [bookielist/privacy.html](bookielist/privacy.html) inhaltlich parallel um denselben Billing-Abschnitt erweitert.

### Grund
Die App-Datenschutzerklärung sollte den Kaufablauf über Google Play Billing und die lokale Speicherung des Freischaltstatus ausdrücklich benennen.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Ergänzung der rechtlichen Informationsseite ohne Logik- oder Routingänderung.
- Die Formulierungen sind bewusst knapp gehalten und beschränken sich auf die verpflichtenden Punkte zum Kaufprozess.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/datenschutz.html](bookielist/datenschutz.html), [bookielist/privacy.html](bookielist/privacy.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist Privacy Policy auf Englisch unter eigener URL ergänzt)

### Bereich
Roll-&-Render-Website (Bookielist Legal Pages)

### Dateien
- bookielist/privacy.html
- bookielist/datenschutz.html
- CHANGELOG.md

### Änderung
- Neue englische Privacy-Policy-Seite [bookielist/privacy.html](bookielist/privacy.html) erstellt als inhaltliche Übersetzung der bestehenden Bookielist-App-Datenschutzerklärung.
- Die englische Version nutzt die gewünschte eigenständige URL `bookielist/privacy.html` statt die deutsche Route `datenschutz.html`.
- Auf [bookielist/datenschutz.html](bookielist/datenschutz.html) einen direkten Sprachwechsel zur englischen Version ergänzt.

### Grund
Für Bookielist ist Englisch als Hauptsprache vorgesehen; deshalb sollte die App-Datenschutzerklärung in einer klaren englischen Fassung unter einer passenden URL erreichbar sein.

### Risiko/Hinweise
- Geringes Risiko: neue statische Legal-Seite ohne Eingriff in Logik oder Navigation außerhalb der Bookielist-Rechtsseiten.
- Die englische Fassung bildet die bestehende Struktur und Aussagen der deutschen Datenschutzerklärung inhaltlich nach; für formale Rechtsprüfung kann bei Bedarf später noch juristisches Review erfolgen.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/privacy.html](bookielist/privacy.html), [bookielist/datenschutz.html](bookielist/datenschutz.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist Mobile-Hero-Reihenfolge für Logo angepasst)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage Responsive Layout)

### Dateien
- bookielist/index.html
- styles/bookielist.css
- CHANGELOG.md

### Änderung
- Die Hero-Struktur auf [bookielist/index.html](bookielist/index.html) in getrennte Bereiche für Wortmarke, Logo und übrige Copy aufgeteilt.
- Das responsive Grid in [styles/bookielist.css](styles/bookielist.css) so angepasst, dass auf Mobilgeräten zuerst Name, dann Logo und erst danach Claim, Subline und Buttons erscheinen.
- Das Desktop-Verhalten bleibt dabei erhalten: links Text, rechts das App-Logo.

### Grund
Auf kleinen Viewports sollte das Logo direkt unter dem Namen sichtbar werden statt erst nach den Hero-Buttons.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Layout-Anpassung innerhalb des bestehenden Hero-Bereichs.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [styles/bookielist.css](styles/bookielist.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist Hero um App-Logo erweitert)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage Visual Hierarchy)

### Dateien
- bookielist/index.html
- styles/bookielist.css
- CHANGELOG.md

### Änderung
- Auf [bookielist/index.html](bookielist/index.html) das vorhandene App-Logo `logo_bookielist.png` direkt in den Hero der Bookielist-Landingpage integriert.
- Den Hero in ein responsives Zwei-Spalten-Layout umgebaut, damit Wortmarke, Claim und CTAs links bleiben und das App-Logo rechts prominent sichtbar ist.
- In [styles/bookielist.css](styles/bookielist.css) neue Hero-Layout- und Logo-Styles ergänzt, inklusive mobiler Stapelung und eigener Bildkarte für das Icon.

### Grund
Die Bookielist-Seite sollte das vorhandene Produktlogo nicht nur in der Projektübersicht, sondern auch auf der eigentlichen Landingpage sichtbar einsetzen.

### Risiko/Hinweise
- Geringes Risiko: rein visuelle Hero-Erweiterung ohne Routing- oder Inhaltslogik.
- Das Logo nutzt den bereits vorhandenen Asset-Pfad in lowercase-Form für konsistentes Deployment auf GitHub Pages.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [styles/bookielist.css](styles/bookielist.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-10 (Bookielist USP- und Preis-Sektion ergänzt)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage Copy und Struktur)

### Dateien
- bookielist/index.html
- styles/bookielist.css
- CHANGELOG.md

### Änderung
- Auf [bookielist/index.html](bookielist/index.html) direkt nach den Feature-Karten eine neue Sektion `Was Bookielist besonders macht` ergänzt.
- Die neue Sektion hebt die Abgrenzung von Bookielist in vier Punkten hervor: lokale Kontrolle über die Bibliothek, datensparsame Produktlogik, werbefreie Nutzung und das Einmalzahlungsmodell.
- Die Monetarisierung jetzt explizit auf der Landingpage erklärt: kostenlos testen, später einmalig 1,99 € für die Vollversion, ohne Abo und ohne versteckte Folgekosten.
- In [styles/bookielist.css](styles/bookielist.css) neue Card- und Grid-Styles für die USP-/Preis-Sektion ergänzt und die Reveal-Animation um einen zusätzlichen Abschnitt erweitert.

### Grund
Die Bookielist-Seite sollte klarer kommunizieren, wodurch sich das Produkt in Datenschutz, Nutzungsgefühl und Preisstruktur von typischen App-Modellen abhebt.

### Risiko/Hinweise
- Geringes Risiko: Content- und Layout-Erweiterung ohne Routing- oder Logikänderung.
- Formulierungen wurden bewusst so gewählt, dass sie zur bestehenden Datenschutzerklärung mit anonymem Metadaten-Cache passen und keine pauschal falsche `keine Weitergabe`-Aussage erzeugen.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [styles/bookielist.css](styles/bookielist.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Bookielist komplett auf sichtbare Umlaute umgestellt)

### Bereich
Roll-&-Render-Website (Bookielist Copy und Metadaten)

### Dateien
- bookielist/index.html
- bookielist/datenschutz.html
- CHANGELOG.md

### Änderung
- Die sichtbaren Texte, `title`-Tags, Meta-Descriptions und Accessibility-Texte auf den Bookielist-Seiten auf echte deutsche Umlaute umgestellt.
- Auf [bookielist/index.html](bookielist/index.html) Copy, Alt-Texte und CTA-Beschriftungen von ASCII-Umschreibungen wie `Buecher`, `fuer` und `Gemuetlich` auf normales deutsches Schriftbild angepasst.
- Auf [bookielist/datenschutz.html](bookielist/datenschutz.html) die komplette Datenschutzerklärung sprachlich von `ae/oe/ue`-Schreibweise auf Umlaute und korrekte Sonderzeichen umgestellt.

### Grund
Die komplette Bookielist-Webpräsenz sollte im sichtbaren deutschen Textbild konsistent echte Umlaute verwenden statt ASCII-Umschreibungen.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Content-Änderung ohne Layout-, Routing- oder Logik-Eingriff.
- Voraussetzung bleibt erfüllt: Die betroffenen HTML-Dateien deklarieren bereits UTF-8, daher sind echte Umlaute technisch unkritisch.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [bookielist/datenschutz.html](bookielist/datenschutz.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Bookielist Daten-Ordner aus Git ausgenommen)

### Bereich
Repository-Hygiene (Bookielist Arbeitsmaterial)

### Dateien
- .gitignore
- CHANGELOG.md

### Aenderung
- Neue [.gitignore](.gitignore) angelegt.
- Den Arbeitsordner `Bookielist/Daten/` sowie die lowercase-Variante `bookielist/Daten/` explizit in Git-Ignore aufgenommen.

### Grund
Die Inhalte im Daten-Ordner dienen als internes Arbeitsmaterial und sollen kuenftig nicht mehr ins Repository bzw. auf GitHub Pages gelangen.

### Risiko/Hinweise
- Sehr geringes Risiko: betrifft nur kuenftiges Tracking neuer Aenderungen im Daten-Ordner.
- Bereits getrackte Dateien muessen zusaetzlich einmal aus dem Git-Index entfernt und erneut gepusht werden.

### Teststatus
- VS Code Fehlerpruefung fuer [.gitignore](.gitignore) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Bookielist Pfade auf GitHub-Pages-Case abgestimmt)

### Bereich
Roll-&-Render-Website (Bookielist Routing und Assets)

### Dateien
- Bookielist/index.html
- projects.html
- CHANGELOG.md

### Aenderung
- Bildpfade auf [Bookielist/index.html](Bookielist/index.html) von `../Bookielist/Images/...` auf die fuer GitHub Pages erwartete lowercase-Form `../bookielist/Images/...` umgestellt.
- Logo-Pfad auf [projects.html](projects.html) von `Bookielist/Images/logo_bookielist.png` auf `bookielist/Images/logo_bookielist.png` angepasst.

### Grund
Nach dem geplanten Ordner-Rename auf `bookielist` sollen Route und Asset-Pfade auf GitHub Pages konsistent case-sensitiv funktionieren.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Pfadnormalisierung.
- Hinweis: Damit die Seite unter `/bookielist` erreichbar wird, muss der Ordner im Repository selbst ebenfalls auf lowercase umbenannt und neu gepusht werden.

### Teststatus
- VS Code Fehlerpruefung fuer [Bookielist/index.html](Bookielist/index.html), [projects.html](projects.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Projekte-Seite: Dice & Screen als Hauptprojekt priorisiert)

### Bereich
Roll-&-Render-Website (Projekte-Seite Hierarchie)

### Dateien
- projects.html
- styles/projects.css
- CHANGELOG.md

### Änderung
- Auf [projects.html](projects.html) Dice & Screen explizit als `Hauptprojekt` markiert.
- Dice-&-Screen-Karte inhaltlich und visuell stärker priorisiert:
  - zusätzlicher Hinweistext zum Fokusprojekt,
  - zweiter CTA zu den Features,
  - stärkere Desktop-Gewichtung in der Grid-Hierarchie.
- In [styles/projects.css](styles/projects.css) Layout und Kartenhierarchie so erweitert, dass Dice & Screen auf größeren Viewports präsenter wirkt, ohne Bookielist aus der Übersicht zu drängen.

### Grund
Dice & Screen soll in der Projektübersicht klar als zentrales Studio-Projekt erkennbar bleiben.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Frontend-/Hierarchie-Anpassung ohne Logikänderung.

### Teststatus
- VS Code Fehlerprüfung für [projects.html](projects.html), [styles/projects.css](styles/projects.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Projekte-Seite: Bookielist-Logo und Hexagon-Grid ergänzt)

### Bereich
Roll-&-Render-Website (Projekte-Seite Visuals)

### Dateien
- projects.html
- styles/projects.css
- CHANGELOG.md

### Änderung
- Auf [projects.html](projects.html) das echte Bookielist-Logo aus [Bookielist/Images/logo_bookielist.png](Bookielist/Images/logo_bookielist.png) in den Bookielist-Projektbutton übernommen.
- In [styles/projects.css](styles/projects.css) für die Projekte-Seite wieder das Hexagon-Grid der Hauptseite als Hintergrundmuster ergänzt.
- Bookielist-Projektbutton farblich leicht an das warme Bookielist-Farbspektrum angepasst.

### Grund
Die Projekte-Seite sollte visuell stärker an die Hauptseite anschließen und für Bookielist nicht nur mit Text, sondern mit dem vorhandenen Projektlogo arbeiten.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Frontend-/Visual-Anpassung ohne Struktur- oder Logikänderung.

### Teststatus
- VS Code Fehlerprüfung für [projects.html](projects.html), [styles/projects.css](styles/projects.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Hauptseite auf Projekte-Übersicht umgestellt)

### Bereich
Roll-&-Render-Website (Navigation und Projektarchitektur)

### Dateien
- index.html
- projects.html
- styles/projects.css
- CHANGELOG.md

### Änderung
- Auf [index.html](index.html) den bisherigen Dice-&-Screen-Navigationsbutton auf eine neue Projekte-Übersicht umgestellt.
- Neue Seite [projects.html](projects.html) erstellt als zentrale, erweiterbare Projektübersicht mit drei Bereichen:
  - Dice & Screen
  - Bookielist
  - Platzhalter für kommende Projekte
- Für Dice & Screen auf der Projekte-Seite das bestehende Logo aus der Hauptseite wiederverwendet und direkt als Projekt-CTA eingebunden.
- Neues Styling in [styles/projects.css](styles/projects.css) ergänzt, damit die Projektkarten eigenständig, scanbar und später leicht erweiterbar sind.

### Grund
Mit mehreren eigenständigen Projekten sollte die Hauptnavigation nicht mehr direkt nur auf Dice & Screen zeigen, sondern auf eine skalierbare Projektübersicht führen.

### Risiko/Hinweise
- Geringes Risiko: Frontend-/Navigationsänderung ohne Logikänderung.
- Hinweis: Bookielist nutzt auf der Projekte-Seite vorerst eine typografische Wortmarke; ein eigenes Logo kann später leicht ergänzt werden.

### Teststatus
- VS Code Fehlerprüfung für [index.html](index.html), [projects.html](projects.html), [styles/projects.css](styles/projects.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Bookielist Play-Store-Platzhalter ergänzt)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage und Store-Platzhalter)

### Dateien
- bookielist/index.html
- bookielist/playstore.html
- CHANGELOG.md

### Änderung
- Auf [bookielist/index.html](bookielist/index.html) einen zusätzlichen Button ergänzt, der später zur Google-Play-Store-Seite führen soll.
- Neue Platzhalterseite [bookielist/playstore.html](bookielist/playstore.html) erstellt.
- Die Platzhalterseite informiert aktuell darüber, dass Bookielist noch in der Testphase ist und der Play-Store-Link erst mit dem Release live geschaltet wird.

### Grund
Es sollte bereits ein sichtbarer Einstieg für den späteren Play-Store-Link vorhanden sein, ohne einen noch nicht veröffentlichten Store-Eintrag vorzutäuschen.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Frontend-Erweiterung ohne Logikänderung.
- Der Button verweist aktuell bewusst auf die interne Platzhalterseite statt auf einen externen Store-Link.

### Teststatus
- VS Code Fehlerprüfung für [bookielist/index.html](bookielist/index.html), [bookielist/playstore.html](bookielist/playstore.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Bookielist Screenshot-Captions auf Wunschtext mit Umlauten angepasst)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage Copy)

### Dateien
- bookielist/index.html
- CHANGELOG.md

### Aenderung
- Die ersten drei Screenshot-Captions auf [bookielist/index.html](bookielist/index.html) an den gewuenschten Wortlaut angepasst.
- Sichtbare Umlaute in diesen Captions auf normales deutsches Sprachbild umgestellt (`Bücher`, `überall`, `hinkommst`).
- Neue Formulierungen:
  - `Das ist dein Hub, von dem aus du überall hinkommst.`
  - `Suche Bücher entweder durch Scannen des Codes.`
  - `Oder mit der manuellen Suchfunktion.`

### Grund
Die ersten drei Screenshots sollten sprachlich direkter an den gewuenschten Nutzerflow angepasst und mit echten Umlauten statt ASCII-Umschreibungen dargestellt werden.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Copy-Anpassung ohne Struktur- oder Logikaenderung.

### Teststatus
- VS Code Fehlerpruefung fuer [bookielist/index.html](bookielist/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Bookielist Copy fuer Erfassungswege und Stimmungsmodi geschaerft)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage Copy)

### Dateien
- bookielist/index.html
- CHANGELOG.md

### Aenderung
- Copy auf [bookielist/index.html](bookielist/index.html) so angepasst, dass der Erfassungsweg klarer beschrieben wird: Nutzer koennen entweder per Scanner starten oder ein Buch manuell ueber die Online-Suche finden.
- Hero-Subline, Ablauftext und erste Screenshot-Caption entsprechend sprachlich geschaerft.
- Hinweise zu den Stimmungsmodi erweitert: Die gezeigten Screens `Verliebt` und `Gemuetlich` werden jetzt explizit als Beispiele aus mehreren verfuegbaren Modi beschrieben.

### Grund
Die Seite sollte den tatsaechlichen Nutzungsfluss klarer vermitteln und nicht den Eindruck erzeugen, es gaebe nur zwei Stimmungsmodi.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Copy-Anpassung ohne Struktur- oder Logikaenderung.

### Teststatus
- VS Code Fehlerpruefung fuer [bookielist/index.html](bookielist/index.html) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Bookielist Screenshot-Galerie auf neue Bildfolge umgestellt)

### Bereich
Roll-&-Render-Website (Bookielist Showcase)

### Dateien
- bookielist/index.html
- styles/bookielist.css
- CHANGELOG.md

### Aenderung
- Screenshot-Galerie auf [bookielist/index.html](bookielist/index.html) von den alten Zeitstempel-Dateinamen auf die neue nummerierte Bildfolge `1.jpg` bis `9.jpg` bzw. `4.png` umgestellt.
- Reihenfolge in der Galerie an die neue Nummerierung angepasst.
- Fuer alle neun Screenshots kurze sichtbare Minisatz-Captions ergaenzt, passend zu den gezeigten App-Schritten und Screens.
- In [styles/bookielist.css](styles/bookielist.css) Screenshot-Cards erweitert, damit Bild und Caption gemeinsam als saubere Cozy-Card dargestellt werden.

### Grund
Die bereitgestellten Bookielist-Screenshots wurden neu sortiert und umbenannt; die Landingpage sollte diese Aenderung direkt uebernehmen und die Bilder zugleich besser einordnen.

### Risiko/Hinweise
- Sehr geringes Risiko: reine Frontend-Content-/Style-Anpassung.
- Hinweis: Die Galerie folgt jetzt direkt der Dateinummerierung im Ordner `Bookielist/Images`.

### Teststatus
- VS Code Fehlerpruefung fuer [bookielist/index.html](bookielist/index.html), [styles/bookielist.css](styles/bookielist.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

## 2026-04-09 (Bookielist Unterseiten: App-Showcase + App-Datenschutz)

### Bereich
Roll-&-Render-Website (Bookielist Landingpage und App-Rechtstexte)

### Dateien
- bookielist/index.html
- bookielist/datenschutz.html
- styles/bookielist.css
- CHANGELOG.md

### Aenderung
- Neue Unterseite [bookielist/index.html](bookielist/index.html) erstellt fuer `rollandrender.studio/bookielist` mit:
  - Hero im cozy Bookie-Look,
  - Feature-Ueberblick auf Basis der bereitgestellten Produktdaten,
  - Ablaufsektion fuer die zentralen Nutzerflows,
  - Screenshot-Galerie mit den bereitgestellten Bildern aus `Bookielist/Images`,
  - klarer Verlinkung zur dedizierten App-Datenschutzerklaerung.
- Neue Unterseite [bookielist/datenschutz.html](bookielist/datenschutz.html) erstellt als separate Datenschutzerklaerung fuer Bookielist (Google/Store-Kontext) auf Basis der gelieferten Datenschutzvorlage, inklusive Verantwortlichendaten und externer Quellenhinweise.
- Neues Stylesheet [styles/bookielist.css](styles/bookielist.css) eingefuehrt:
  - eigenes warmes, cozy Farb- und Materialsystem,
  - mobile-optimierte Layouts fuer Landing und Rechtstextseite,
  - dezente Entry-Animationen mit `prefers-reduced-motion`-Fallback.

### Grund
Fuer Bookielist wurden eine eigene, visuell stimmige Produktseite mit Screenshots/Features sowie eine separate App-Datenschutzerklaerung benoetigt.

### Risiko/Hinweise
- Geringes Risiko: reine Frontend-/Content-Erweiterung ohne Backend- oder Laufzeitlogik.
- Hinweis: Bildpfade verweisen bewusst auf den bestehenden Ordner `Bookielist/Images` (Gross-/Kleinschreibung beibehalten).

### Teststatus
- VS Code Fehlerpruefung fuer [bookielist/index.html](bookielist/index.html), [bookielist/datenschutz.html](bookielist/datenschutz.html), [styles/bookielist.css](styles/bookielist.css) und [CHANGELOG.md](CHANGELOG.md): keine Fehler gefunden.

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
