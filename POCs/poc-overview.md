## 1 – Tastaturbasierte Wiedergabesteuerung

**Herausforderung und Lösung**  
Viele Web-Musikplayer setzen auf Mausinteraktion, was für Nutzer*innen mit motorischen Einschränkungen eine erhebliche Barriere darstellt. Um vollständige Tastaturbedienbarkeit sicherzustellen, werden alle zentralen Funktionen (Play, Pause, Skip, Lautstärke) über `keydown`-Events realisiert. Die Funktionen dürfen dabei keine pfadabhängigen Eingaben erfordern, sondern müssen punktuell auslösbar sein (z. B. per Enter oder Leertaste).

**Was wird benötigt?**  
- JavaScript-Ereignissteuerung (`keydown`, `keyup`)  
- HTML-Semantik mit klaren Rollen (`button`, `audio`)  
- Barrierefreie Eventbindung ohne Mausabhängigkeit

**Erfolgskriterien**  
- Jede Funktion des Players ist über die Tastatur auslösbar, ohne Timing-Anforderungen.  
- Es existieren keine exklusiven Mausfunktionen.  
- Interaktionen erfolgen eindeutig über Tastendruck.

**Fehlerkriterien**  
- Eine Funktion ist ausschließlich über Mausklick erreichbar.  
- Eingaben benötigen pfadabhängige Bewegung (z. B. Drag & Drop), ohne Alternative.

**Quelle**
https://www.w3.org/WAI/WCAG22/Understanding/keyboard

---

## 2 – Fokusverlassen per Tastatur

**Herausforderung und Lösung**  
Viele Anwendungen lassen Nutzer*innen in modalen Fenstern oder Komponenten „stecken“. Die Herausforderung besteht darin, dem Fokus immer eine erkennbare Fluchtmöglichkeit zu geben (z. B. über ESC oder logische Tabreihenfolge). Der Player muss gewährleisten, dass jedes UI-Element auch wieder verlassen werden kann.

**Was wird benötigt?**  
- Fokussteuerung via `tabindex` und `eventListeners`  
- ESC-Handling zum Schließen von Overlays/Dialogen  
- Sichtbarer Fokusindikator

**Erfolgskriterien**  
- Alle UI-Komponenten sind über Tab oder ESC verlassbar.  
- Bei Spezialbedienung wird die Exit-Methode deutlich kommuniziert.

**Fehlerkriterien**  
- Fokus bleibt in einer Komponente stecken.  
- Kein Hinweis auf notwendige Tastenkombinationen zum Verlassen.

**Quelle**
https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html

---

## 3 – Fokusführung und Tab-Reihenfolge

**Herausforderung und Lösung**  
Die Tastaturnavigation muss logisch und vorhersehbar sein, um Nutzer*innen Orientierung zu geben. Durch konsistente `tabindex`-Werte und eine intuitive Reihenfolge kann die Bedienung effizient erfolgen, ohne Verwirrung oder Sprünge.

**Was wird benötigt?**  
- HTML-Struktur mit klarer visueller und semantischer Reihenfolge  
- Test mit Tastatur-Navigation (Tab/Shift+Tab)  
- Fokus-Indikator per CSS (`:focus-visible`)

**Erfolgskriterien**  
- Die Reihenfolge entspricht der visuellen Struktur.  
- Die gesamte Oberfläche ist über Tab erreichbar.

**Fehlerkriterien**  
- Fokus springt unlogisch oder verlässt den sichtbaren Bereich.  
- Wichtige Bedienelemente sind nicht fokussierbar.

---

## 4 – Fehlerbehandlung in Formularen

**Herausforderung und Lösung**  
Nutzer*innen müssen bei Fehleingaben klare, barrierefreie Rückmeldungen erhalten. Die Herausforderung besteht darin, sowohl visuelles als auch semantisches Feedback zu geben (Farben + Screenreader-Feedback). Fehlermeldungen müssen verständlich, spezifisch und erreichbar sein.

**Was wird benötigt?**  
- ARIA-Attribute (`aria-describedby`, `role="alert"`)  
- Sichtbare Fehlermarkierung (z. B. Kontraste, Icons)  
- Feldprüfung vor Absenden des Formulars

**Erfolgskriterien**  
- Fehler werden sofort und eindeutig benannt.  
- Fehlerzustand ist visuell und semantisch klar erkennbar.

**Fehlerkriterien**  
- Fehler werden nicht erkannt oder unklar beschrieben.  
- Screenreader erhalten keine Information zum Fehler.

---

## 5 – Sichtbarer Fokuszustand

**Herausforderung und Lösung**  
Gerade bei visuellen Einschränkungen ist ein klar sichtbarer Fokuszustand essenziell. Viele Frameworks entfernen standardmäßig die Fokusumrandung (`outline: none`). Ziel ist es, einen konsistenten und barrierefreien Fokusindikator zu gestalten, der auf allen Oberflächen gut erkennbar ist.

**Was wird benötigt?**  
- CSS `:focus-visible`, `outline`, `box-shadow`  
- Kontrasttests auf verschiedenen Hintergründen

**Erfolgskriterien**  
- Der aktuelle Fokus ist auf jedem Element klar sichtbar.  
- Fokusindikator ist farblich und stilistisch eindeutig.

**Fehlerkriterien**  
- Fokus ist nicht sichtbar oder verschwindet bei bestimmten Elementen.  
- Der Fokusindikator ist zu dezent und auf manchen Hintergründen nicht unterscheidbar.

---

## 6 – Keine automatischen Aktionen bei Formulareingaben

**Herausforderung und Lösung**  
Formulareingaben (z. B. Lautstärke, Suchfelder) dürfen nicht automatisch zu Aktionen führen, ohne dass Nutzer*innen sie bewusst bestätigen. Automatische Änderungen können bei assistiver Bedienung zu Kontrollverlust führen.

**Was wird benötigt?**  
- Keine `onchange`-Ereignisse ohne zusätzliche Bestätigung (z. B. Button oder Enter)  
- Trennung zwischen Eingabe und Ausführung

**Erfolgskriterien**  
- Keine automatischen Reaktionen beim Tippen oder Fokussieren.  
- Änderungen erfordern bewusste Eingabeaktion.

**Fehlerkriterien**  
- Felder lösen direkt Aktionen aus.  
- Nutzer*innen verlieren die Kontrolle über den Prozess.

---

## 7 – Webnutzung ohne Setup oder Zusatzgeräte

**Herausforderung und Lösung**  
Die Anwendung soll sofort im Browser funktionieren, ohne externe Geräte oder komplizierte Installationsprozesse. Ziel ist eine barrierearme Nutzung direkt über die Tastatur, ohne Konfigurationsaufwand.

**Was wird benötigt?**  
- Reines Web-Setup (HTML5, CSS, JavaScript)  
- Kein Login oder Benutzerkonto notwendig  
- Datenhaltung lokal (z. B. `localStorage`)

**Erfolgskriterien**  
- Die Anwendung ist direkt im Browser nutzbar.  
- Keine Installation, kein Plugin, kein technisches Setup nötig.

**Fehlerkriterien**  
- Die Anwendung ist ohne externe Hilfe oder Einrichtung nicht nutzbar.  
- Zusätzliche Geräte oder Registrierung sind erforderlich.

---
