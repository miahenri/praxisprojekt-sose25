## POC 1 – Fokussteuerung und logische Tastaturnavigation

**Herausforderung und Lösung**  
HTML bietet zwar standardmäßig eine Tab-Navigation, doch sobald individuelle UI-Komponenten wie modale Fenster, Slider oder strukturierte Player-Bereiche eingebaut werden, entstehen Fokusfallen und unlogische Navigationspfade. Um eine barrierefreie Bedienung sicherzustellen, muss die Tab-Reihenfolge manuell gesteuert, Fokuswechsel gezielt programmiert und ESC- bzw. Rücksprungrouten implementiert werden.

**Was wird benötigt?**  
- Verwendung von `tabindex`, `autofocus` und `focus()`-Methoden  
- Sichtbare Fokusanzeige über CSS (`:focus-visible`)  
- Logische DOM-Struktur zur natürlichen Tabreihenfolge  
- `keydown`-Eventsteuerung für Escape-Funktionen (z. B. Schließen von Overlays)

**Erfolgskriterien**  
- Jede interaktive Komponente ist per Tab erreichbar und per Tab/Shift+Tab wieder verlassbar  
- Fokusverlauf entspricht der visuellen und funktionalen Struktur  
- Fokusindikator ist stets sichtbar und deutlich erkennbar  
- Modale Komponenten (z. B. Dialoge) sind als Fokus-Falle korrekt implementiert

**Fehlerkriterien**  
- Fokus bleibt in einem Element „stecken“ oder springt unlogisch  
- Fokus verlässt die Seite (z. B. ins Nichts)  
- Wichtige Funktionen sind per Tastatur nicht erreichbar  
- Der Fokus ist unsichtbar oder auf mobilen Geräten nicht nachvollziehbar

---

## POC 2 – Globale Tastatursteuerung (Shortcuts vs. Standardverhalten)

**Herausforderung und Lösung**  
Barrierefreie Tastaturbedienung erfordert die Steuerung zentraler Aktionen wie Play/Pause über einfache Tasteneingaben (z. B. Leertaste, Pfeiltasten). Diese Tasten haben jedoch teils Standardverhalten (z. B. Scrollen mit der Leertaste), was zu Konflikten führen kann. Die Herausforderung besteht darin, Tasteneingaben nur zielgerichtet und kontextabhängig abzufangen, ohne unerwünschte Nebeneffekte oder Einschränkungen zu erzeugen.

**Was wird benötigt?**  
- Globales `keydown`-Event auf `document` oder `window`  
- `event.preventDefault()` gezielt anwenden  
- Kontextprüfung (z. B. ist ein Eingabefeld aktiv?)  
- Modularer Aufbau eines zentralen Key-Handler-Moduls

**Erfolgskriterien**  
- Tasten wie Leertaste oder Pfeiltasten lösen Funktionen nur aus, wenn kontextuell sinnvoll  
- Seiten-Scrollen, Formulareingaben und andere Standardverhalten bleiben erhalten, wo nötig  
- Tastatursteuerung funktioniert auf allen Seiten/Komponenten konsistent

**Fehlerkriterien**  
- Leertaste oder andere Keys blockieren gewünschte Standardverhalten ohne Kontext  
- Ungewollte Interaktionen (z. B. Play/Pause springt im falschen Zustand an)  
- Mehrfache Events bei gedrückter Taste (z. B. Wiederholung durch Key Repeat)

---

## POC 3 – Zustandsmanagement des Players

**Herausforderung und Lösung**  
Ein zugänglicher Musikplayer muss jederzeit zuverlässig anzeigen, in welchem Zustand er sich befindet (z. B. „Wiedergabe läuft“, „Fehler beim Laden“, „abgeschlossen“). Gerade bei rein tastaturbedienter Nutzung ist es essenziell, diese Zustände programmatisch zu verwalten und visuell sowie semantisch darzustellen. HTML-Audio-Elemente liefern viele Events, die sauber interpretiert und im Interface abgebildet werden müssen.

**Was wird benötigt?**  
- Event-Handling für `play`, `pause`, `ended`, `error`, `canplay`, `waiting`  
- Eigener State-Manager (z. B. per JS-Objekt oder Reactive State)  
- Visuelles Feedback (z. B. Play/Pause-Symbol, Fehlerhinweis)  
- Optional: ARIA Live Regions zur sprachlichen Rückmeldung (z. B. für Screenreader)

**Erfolgskriterien**  
- Der aktuelle Zustand ist intern gespeichert und korrekt im UI dargestellt  
- Fehlerzustände werden angezeigt (z. B. bei nicht ladbaren Audiodateien)  
- Alle Zustände sind auch ohne Maus eindeutig bedienbar und nachvollziehbar  
- Screenreader-Nutzer*innen erhalten akustisches Feedback bei Statuswechsel

**Fehlerkriterien**  
- Zustand ist uneindeutig oder bleibt im „Zwischenmodus“ hängen  
- Play/Pause-Toggles verhalten sich inkonsistent oder aktualisieren das UI nicht korrekt  
- Fehler (z. B. Datei nicht gefunden) bleiben ohne Feedback oder führen zu Blockaden
