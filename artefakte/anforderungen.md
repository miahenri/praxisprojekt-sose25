## Definition Anforderung
Eine Anforderung (Requirement) ist nach **IEEE 610.12-1990** definiert als: <br>
(1) Eine Bedingung oder Fähigkeit, die von einer Person zur **Lösung eines Problems oder zur Erreichung eines Ziels benötigt** wird. <br>
(2) Eine Bedingung oder Fähigkeit, die eine Software erfüllen oder besitzen muss, um einen **Vertrag**, eine **Norm** oder ein anderes, **formell bestimmtes Dokument** zu erfüllen. <br>
(3) Eine **dokumentierte Darstellung einer Bedingung oder Fähigkeit** wie in (1) oder (2).

**Anforderungen werden häufig unterschieden in:**
- Funktionale Anforderungen
- Organisationale Anforderungen
- Qualitative (nicht-funktionale) Anforderungen

## Funktionale Anforderungen

- MILO muss fähig sein, Musik abzuspielen.  
- MILO muss fähig sein, Informationen zum aktuell laufenden Song einzusehen.
- MILO muss die aktuelle Wiedergabeposition/zustand verdeutlichen.   
- MILO muss die Möglichkeit bieten, die Wiedergabe zu starten.  
- MILO muss die Möglichkeit bieten, die Wiedergabe zu stoppen.
- MILO muss die Möglichkeit bieten, die Lautstärke anzupassen. 
- MILO muss die Möglichkeit bieten, einzelne Songs vorzuspulen.  
- MILO muss die Möglichkeit bieten, einzelne Songs zurückzuspulen.  
- MILO muss die Möglichkeit bieten, Musikdateien von der lokalen Festplatte auszuwählen.  
- MILO muss die Möglichkeit bieten, interaktive Elemente per Tastatur zu verlassen.  
- MILO muss die Möglichkeit bieten, Drag-and-Drop-Funktionen alternativ ohne Maus auszuführen. 
- MILO muss die Möglichkeit bieten, während der Wiedergabe andere Funktionen der Seite störungsfrei zu nutzen (z. B. Navigation, Einstellungen). 
- MILO muss den Interpreten des laufenden Songs anzeigen.  
- MILO muss die Fokusreihenfolge logisch und vorhersehbar darstellen.
- MILO sollte die Möglichkeit bieten, sich ohne Anmeldung durch das System zu bewegen.  
- MILO sollte die Möglichkeit bieten, zwischen verschiedenen Abspielmodi zu wählen (z.B Loop, Queue).
- MILO sollte die Möglichkeit bieten, eine einfache Warteschlange zu erstellen.  
- MILO sollte die Möglichkeit bieten, die Warteschlange zu bearbeiten (Reihenfolge ändern, löschen).
- MILO sollte bekannte Informationen nicht erneut abfragen.  
- MILO sollte Fehler erkennen und eindeutig kommunizieren.

---

## Nicht-funktionale Anforderungen

- **MILO MUSS fokussierte Elemente sichtbar darstellen und darf sie nicht durch andere Inhalte verdecken.**  
  Der sichtbare Fokusrahmen muss bei einer Bildschirmauflösung von mindestens 1280×800 px in allen Navigationszuständen vollständig sichtbar bleiben.

- **MILO MUSS sicherstellen, dass Formulareingaben keine automatischen Aktionen auslösen.**  
  Keine Eingabe (z. B. Tastendruck, Auswahl, Fokuswechsel) darf automatisch einen Seitenwechsel, eine Wiedergabe oder eine sonstige Aktion auslösen – es sei denn, dies wurde vorher explizit durch die Nutzer*in bestätigt.

- **MILO MUSS den Tastaturfokus visuell deutlich hervorheben.**  
  Der Fokusindikator muss sich visuell vom Hintergrund abheben (z. B. Kontrast ≥ 3:1), mindestens 2px breit sein und bei jedem fokussierbaren Element klar sichtbar sein.

- **MILO MUSS für alle interaktiven Elemente semantisch korrekte HTML-Tags verwenden (z. B. `<button>` statt `<div>`).**  
  100 % aller interaktiven Bedienelemente im Code verwenden semantisch richtige HTML-Rollen – überprüfbar durch WCAG-Validator (z. B. WAVE oder axe DevTools).

- **MILO SOLLTE nach einem Seitenneuladen den vorherigen Zustand wiederherstellen (sofern technisch möglich).**  
  Nach einem `Page Reload` wird der zuletzt abgespielte Track inkl. Position in mindestens 80 % der Fälle korrekt wiederhergestellt (getestet mit 5 verschiedenen Beispieldateien).

- **MILO SOLLTE interaktive Bedienelemente mit einer Mindestgröße von 24×24 CSS-Pixeln darstellen.**  
  Alle Buttons und klickbaren Elemente müssen im Browser mindestens 24×24 px groß sein (gemessen mit DevTools).

- **MILO SOLLTE so gestaltet sein, dass eine erstmalige Nutzung ohne externe Geräte und innerhalb von fünf Minuten möglich ist.**  
  In einem Usability-Test mit 3 Testpersonen mit motorischer Einschränkung darf keine Einrichtung länger als 5 Minuten dauern.

- **MILO WIRD bei Screenreadern alle Bedienelemente korrekt und verständlich beschreiben.**  
  In Screenreader-Tests mit NVDA und VoiceOver sind alle interaktiven Elemente mit Name, Rolle und Status korrekt auslesbar.



## Literatur 
- IEEE. (1990). IEEE Standard Glossary of Software Engineering Terminology. Institute of Electrical and Electronics Engineers. https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=159342
- Rupp, C. (2014). Requirements-Engineering und -Management: Aus der Praxis von klassisch bis agil (1. Aufl.). Hanser.