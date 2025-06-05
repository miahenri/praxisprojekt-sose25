## Frontend - Vanilla oder Framework?
**Problemfeld:**  
Benutzerfreundlichkeit, Interaktivität, Wartbarkeit

**Entscheidung:**  
Für die erste Version des Players wird **kein JavaScript-Framework** wie React oder Vue verwendet. Stattdessen wird auf **Vanilla JS mit strukturierter Modularchitektur** gesetzt.

**Begründung:**  
- Reduktion technischer Komplexität zugunsten von Barrierefreiheit  
- Frameworks bringen Overhead mit sich und erfordern zusätzliche Accessibility-Arbeit  
- Fokus liegt auf Einfachheit, Klarheit und Kontrolle über das DOM und die Fokuslogik  
- Leichte Einstiegshürde für spätere Weiterentwicklung oder Drittnutzung

**Alternativen:**  
- React (hohe Verbreitung, große Community)  
- Vue.js (einfacher Einstieg, gute Strukturierungsmöglichkeiten)  
- Svelte (leichgewichtig, modern, wenig Overhead)

**Konsequenzen:**  
- Höherer initialer Umsetzungsaufwand für UI-Logik  
- Weniger abstrahiertes State-Management  
- Maximale Kontrolle über Accessibility und HTML-Semantik


## Musik abspielen - Abstraktionsschicht oder <audio>-Element?
Verwaltung Status? (play, paused, error)

**Problemfeld:**  
Mediensteuerung, State-Verwaltung, Robustheit

**Entscheidung:**  
Die Anwendung verwendet das native HTML5-`<audio>`-Element mit einer **selbst entwickelten Wrapper-Logik** für Status, Events und Steuerung.

**Begründung:**  
- `<audio>` bietet plattformübergreifend konsistente Grundfunktionen  
- Fokus liegt auf Zugänglichkeit, nicht auf komplexer UI oder DSP  
- Eigener Wrapper ermöglicht die Anbindung von Tastatur-Events, Statusanzeigen (playing, paused, ended) und Fehlerbehandlung
- mithilfe von JavaScript-Logik kann einfache "Playlist"/Warteschlange implementiert werden

**Alternativen:**  
- Verwendung einer externen Audioplayer-Library (z. B. Howler.js)  
- Komplett eigene Audio-Abstraktion mit Web Audio API

**Konsequenzen:**  
- Gute Kontrolle über Playerstatus ohne unnötige Komplexität  
- Leicht testbar und erweiterbar (z. B. PWA-Fähigkeiten oder Voice Control)


## Bedienlogik für Tastatursteuerung - Bedienlogik für Tastatursteuerung

**Problemfeld:**  
Interaktionsdesign, Usability, Accessibility

**Entscheidung:**  
Es wird ein **zentral gesteuertes Tastatur-Handling-Modul** implementiert, das globale Tastenaktionen verwaltet und an Komponenten weitergibt.

**Begründung:**  
- Einheitliches Verhalten bei Navigation und Shortcuts  
- Leichtere Wartbarkeit und Debugging  
- Fokus liegt auf konsistenter Tabreihenfolge und Escape-Routen für alle Komponenten

**Alternativen:**  
- Verteilte Event-Listener pro Komponente (hohes Fehlerpotenzial, inkonsistentes Verhalten)
- externe Accessibility/Keyboard Frameworks (z.B. react-aria, headlessui) (Möglicher Overhead, eingeschränkte Kontrolle bei individuellen Anforderungen)

**Konsequenzen:**  
- Klare Trennung von UI und Steuerlogik  
- Verbesserte Erweiterbarkeit (z. B. konfigurierbare Tastenkombinationen in Zukunft)


## Datenhaltung im Browser

**Problemfeld:**  
Persistenz, lokale Nutzerdaten, Zustandsverwaltung

**Entscheidung:**  
Für die Speicherung wird **`localStorage`** verwendet, um Einstellungen wie Lautstärke, zuletzt gespielte Datei oder Barrierefreiheits-Optionen zu speichern.

**Begründung:**  
- Einfache Implementierung, keine komplexen DB-Strukturen nötig  
- Daten bleiben im Browser, keine Serveranbindung erforderlich  
- Unterstützt schnelle und offlinefähige Nutzung der Anwendung
- Ideal für kleine Datenmengen (z.B. zuletzt genutzte Audiodateien)

**Alternativen:**  
- `IndexedDB` (komplexer, aber leistungsfähiger bei großen Datenmengen)  
- SessionStorage (nur temporär)

**Konsequenzen:**  
- Begrenzte Speicherkapazität (ca. 5 MB)  
- Keine Synchronisation zwischen Geräten  
- Schnell und für die Anforderungen ausreichend


## Technologie Stack
Auf Basis der 4 Architecture Decision Records ergibt sich folgender Technologie Stack.

### Frontend
- **HTML5 (semantisch)**  
  Für eine klare, screenreaderfreundliche Struktur und native Elemente (z. B. `<button>`, `<audio>`)

- **CSS3**  
  Eigenes responsives Stylesheet mit Fokus auf Lesbarkeit, Kontrast & reduziertes Design  
  → Barrierearme Farbwahl, klare visuelle Hierarchie

- **JavaScript (Vanilla JS)**  
  Keine Frameworks – maximale Kontrolle über DOM, Tastatursteuerung und Zustände  
  Modular organisiert (ES6-Module)

- **`<audio>`-Element mit eigener Steuerlogik**  
  Für die Medienwiedergabe inkl. Statushandling (play, pause, ended, error)

### Barrierefreiheit & Usability

- **WCAG 2.1-konformes UI-Design**  
  Fokusführung, Tastaturnavigation, Fokus-Styles, ausreichend große Interaktionsflächen

- **Zentrale Tastatursteuerung**  
  Globales Event-Handling-Modul zur Steuerung (Shortcuts, Navigationslogik)

### Persistenz / Datenhaltung

- **localStorage (Web Storage API)**  
  Speicherung von Nutzerpräferenzen (z. B. letzte Wiedergabe, Lautstärke, A11Y-Optionen)

### Tooling (optional, aber empfohlen)

- **Prettier (+ ESLint)**  
  Für einheitlichen, wartbaren Code

- **Lighthouse / WCAG-Checker**  
  Zur automatisierten Prüfung von Barrierefreiheits-Kriterien

- **Git + GitHub**  
  Versionskontrolle, ADR-Verwaltung, Dokumentation (Wiki)



