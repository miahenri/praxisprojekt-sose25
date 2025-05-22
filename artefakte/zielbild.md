## Projektübersicht

Ziel dieses Projekts ist die Entwicklung einer **barrierearmen Webanwendung zur Musikwiedergabe**, die speziell für Menschen mit **motorischen Einschränkungen** leicht verständlich und bedienbar ist. Die Anwendung soll eine reduzierte Benutzeroberfläche bieten und **vollständig ohne Maus, ausschließlich über die Tastatur** bedienbar sein.

Der Fokus liegt auf einem klar strukturierten, minimalistischen Interface und der Einhaltung zentraler Barrierefreiheitsstandards gemäß **WCAG 2.1**.

---

## Mögliches Erscheinungsbild

- Große, klar erkennbare Schaltflächen (z. B. Play, Pause, Lautstärke)
- Sichtbare Fokus-Rahmen zur Orientierung bei Tastaturbedienung
- Hoher Farbkontrast für gute Lesbarkeit
- Responsive Design (optimiert für Desktop & Tablet)
- Keine komplexen Bedienelemente wie Drag-and-Drop oder Hover-Menüs

---

## Geplante Funktionen

- Wiedergabe von Audiodateien
- Zentrale Steuerfunktionen:  
  `Play / Pause / Vor / Zurück / Lautstärke`
- **Komplette Tastatursteuerung** für alle Interaktionen
- Intuitive Fokusführung (logische Tab-Reihenfolge)
- Optionale Favoriten- oder einfache Playlistfunktion


- **Modulare Erweiterung zur Progressive Web App (PWA)**:
  - Offline-Nutzung
  - Installation auf dem Homescreen
  - App-ähnliches Verhalten

---

## Barrierefreiheits-Anforderungen

Fokus auf Anforderungen für Nutzer*innen mit motorischen Einschränkungen:
https://www.w3.org/TR/WCAG22/#contrast-minimum

### Spezifische WCAG 2.2-Kriterien für motorische Barrierefreiheit

| Kriterium | Name                                 | Level | Beschreibung                                                                                  |
|-----------|--------------------------------------|--------|-----------------------------------------------------------------------------------------------|
| 2.5.7     | Dragging Movements                   | AA     | Funktionen, die Ziehbewegungen erfordern, müssen auch auf andere Weise ausführbar sein.      |
| 2.5.8     | Target Size (Minimum)                | AA     | Interaktive Bedienelemente müssen mindestens 24×24 CSS-Pixel groß sein.                      |
| 2.4.11    | Focus Not Obscured (Minimum)         | AA     | Fokussierte Elemente dürfen nicht vollständig durch andere Inhalte verdeckt werden.          |
| 2.4.12    | Focus Not Obscured (Enhanced)        | AAA    | Fokussierte Elemente müssen vollständig sichtbar sein.                                        |
| 2.4.13    | Focus Appearance                     | AAA    | Der Tastaturfokus muss visuell klar erkennbar sein.                                          |
| 3.3.7     | Redundant Entry                      | A      | Informationen müssen nicht mehrfach eingegeben werden.                                 

### Grundlegende WCAG-Kriterien mit Relevanz für motorisch eingeschränkte Nutzer

| Kriterium | Name                                 | Level | Beschreibung                                                                                  |
|-----------|--------------------------------------|--------|-----------------------------------------------------------------------------------------------|
| 2.1.1     | Tastatur                             | A      | Alle Funktionen müssen ohne Maus bedienbar sein.                                             |
| 2.1.2     | Keine Tastatur-Falle                 | A      | Verlassen eines Elements mit der Tastatur muss möglich sein.                                 |
| 2.4.1     | Blöcke überspringen                  | A      | Mechanismen zum Überspringen wiederholter Inhalte müssen vorhanden sein.                     |
| 2.4.3     | Fokus-Reihenfolge                    | A      | Fokusreihenfolge muss logisch und vorhersehbar sein.                                         |
| 2.4.7     | Sichtbarer Fokus                     | AA     | Der Tastaturfokus muss immer sichtbar sein.                                                  |
| 3.2.1     | Bei Fokus keine Kontextänderung      | A      | Fokus darf keine unerwarteten Änderungen auslösen.                                           |
| 3.2.2     | Bei Eingabe keine Überraschung       | A      | Formulareingaben dürfen keine automatischen Aktionen auslösen.                               |
| 3.3.1     | Fehlererkennung                      | A      | Fehler müssen eindeutig erkannt und benannt werden.                                          


---

## Erwartetes Ergebnis

Am Ende des Projekts soll eine funktionale Musikplayer-Website vorliegen, die:

- sich auf **wesentliche Interaktionen** beschränkt
- vollständig ohne Maus steuerbar ist
- ein barrierearmes, zugängliches Interface bietet
- klare visuelle Orientierungshilfen für Nutzer*innen liefert

---

*Letztes Update: 07. Mai 2025*
