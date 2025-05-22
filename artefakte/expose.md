## Problemfeld & Kontext

Digitale Musikplattformen wie Spotify, YouTube Music oder Apple Music sind heute allgegenwärtig und bieten umfangreiche Funktionen zur Musikwiedergabe. Dennoch sind die genannten Plattformen nicht barrierefrei gestaltet, sodass Menschen mit motorischen Einschränkungen Schwierigkeiten haben ihre Musik abzuspielen. Gerade bei feinmotorischen Einschränkungen, Lähmungen oder Krankheiten wie Parkinson oder ALS[^1] ist das ein gravierendes Hindernis für digitale Teilhabe.

Zwar existieren allgemeine Barrierefreiheitsrichtlinien (z. B. **WCAG 2.1**, **EN 301 549**), doch werden diese in vielen modernen Musikinterfaces nur unzureichend berücksichtigt – vor allem bei der Tastaturnavigation und der Größe von interaktiven Elementen. Die Notwendigkeit barrierearmer Alternativen wächst zudem angesichts des demografischen Wandels und zunehmender digitaler Nutzung auch im höheren Alter.


## Ziel + Aufgabenstellung

Ziel dieses Projekts ist die Entwicklung eines **barrierearmen Musikplayers als Webanwendung**, die speziell auf die Anforderungen von Menschen mit **motorischen Einschränkungen** abgestimmt ist. Im Zentrum stehen die Fragen:  
**„Wie kann ein Musikplayer so gestaltet werden, dass er auch für Menschen mit motorischen Einschränkungen leicht verständlich und bedienbar ist?“**

Die Anwendung wird vollständig **tastaturbedienbar** gestaltet, interaktive Elemente sind deutlich vergrößert, Fokusführung und logische Tabreihenfolge werden explizit umgesetzt. Die Anwendung soll bewusst **reduziert und zugänglich** sein, ohne überflüssige Funktionalität. Eine optionale Erweiterung zur Progressive Web App (PWA) ist möglich.


## Chancen & Risiken

### Chancen:
- Förderung der digitalen Inklusion
- Konkreter gesellschaftlicher Mehrwert
- Nachweisbare Umsetzung von Accessibility-Prinzipien
- Technische und gestalterische Lernerfahrung im Bereich UX, ARIA, Webstandards
- Möglichkeit zur modularen Erweiterung (z. B. Sprachsteuerung, Offlinefähigkeit)

### Risiken:
- Eingeschränkter Funktionsumfang gegenüber großen Plattformen
- Aufwand durch manuelle Barrierefreiheitstests
- Technische Begrenzungen bei Audio, Browserkompatibilität und eventuellen PWA-Funktionen


## Ressourcen

### Literatur & Standards:
- WCAG 2.1 (Web Content Accessibility Guidelines)
- EN 301 549 – Anforderungen an barrierefreie IKT
- Fachliteratur zu inklusivem UX-Design

### Technologien:
- HTML, CSS (weitere Tools/Frameworks noch offen)
- weitere Technologien werden in Phase 2 (Prototyp Design & Architektur) festgelegt


## Motivation

Musik ist ein emotionales Grundbedürfnis – und sollte für alle Menschen unabhängig von körperlichen Voraussetzungen zugänglich sein. Der Zugang zu Medienangeboten ist ein Aspekt digitaler Teilhabe, der in der Entwicklung oft vernachlässigt wird. Medieninformatiker bringen technisches Wissen, Designverständnis und Nutzerfokus zusammen, um solche Hürden gezielt abzubauen. Innerhalb des Praxisprojekts wird dieses Wissen praktisch angewendet und das technische Wissen mit den Vorgaben für eine barrierefreie Webanwendung kombiniert.


## Setup, Abhängigkeiten & Meilensteine

### Setup:
- Ein-Personen-Projekt im Rahmen des Praxissemesters
- Arbeitsumgebung: lokale Webentwicklung (HTML/CSS/JS), GitHub für Versionskontrolle
- Betreuer: Volker Schaefer

### Meilensteine (vereinfacht):
1. **Analyse & Planung (bis 24. Mai)**  
2. **Design & Architektur (bis 7. Juni)**  
3. **POCs entwickeln (bis 21. Juni)**  
4. **Gesamtprototyp bauen (bis 30. Juni)**  
5. **Testing & Dokumentation (bis 5. Juli)**  
6. **Pufferzeit (bis 9. Juli)**


## Arbeitsergebnis

Am Ende soll eine funktionsfähige, barrierearme Webanwendung vorliegen, die:

- Musikdateien abspielen kann,
- vollständig tastaturbedienbar ist,
- klare Fokusführung und visuelles Feedback bietet
- und die wichtigsten **WCAG 2.1-Kriterien für motorische Barrierefreiheit erfüllt**.

Die Anwendung soll als statische Website nutzbar sein, kann aber optional zur Progressive Web App erweitert werden.  
Das Projekt wird durch eine schriftliche Ausarbeitung und Projektdokumentation begleitet und evaluiert.
Im Rahmen dieses Projekts soll die Anwendung sich auf die Umsetzung des Frontends konzentrieren. Für eine eventuelle Erweiterung in Rahmen einer Bachlorarbeit, kann über die Anbindung an einen Streaminganbieter (Spotify, Soundcloud etc.) nachgedacht werden.

## Fußnoten
[^1]: Amyotrophe Lateralsklerose - ALS ist eine fortschreitende, bisher unheilbare Erkrankung des motorischen Nervensystems, bei der Nervenzellen im Gehirn und Rückenmark ihre Funktion verlieren, die für die Steuerung der Muskulatur verantwortlich sind. Typische Symptome sind langsam fortschreitende Muskelschwäche, Lähmung und Steifigkeit der Arme und Beine, des Rumpfes, der Zunge, des Schlundes und Kehlkopfes. 

## Literatur

- W3C. (2018). Understanding Success Criterion 2.1.1: Keyboard. World Wide Web Consortium (W3C). https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html
- W3C. (n.d.). Accessibility Fundamentals: Disabilities. Web Accessibility Initiative (WAI). https://www.w3.org/WAI/people-use-web/disabilities/
- Prof. Dr. Thomas Meyer. (2022). Was ist ALS? Informationen zur Amyotrophen Lateralsklerose für Patienten und Angehörige. https://als-charite.de/wp-content/uploads/2019/01/WAS-IST-ALS.pdf

---

Potentielle Namen: AUDARA (die Hörbare), MILO (Music – Interface – Low Barrier – Open Access)
"Music in, barriers out."

*Letztes Update: 22. Mai 2025*
