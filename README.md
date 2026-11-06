# HIMA Elektro Technik — React

Eigenständig betreibbare React-Umsetzung der öffentlichen Website https://hima-elektro.de/, Stand 6. November 2026. Die bestehende Gestaltung, Texte und Bilder sind weitgehend originalgetreu übernommen. WordPress, Datenbank und PHP werden zum Betrieb nicht benötigt.

## Schnellstart

Voraussetzung zum Entwickeln und Bauen: Node.js 22.12 oder neuer.

```sh
npm ci
npm run dev
```

## Für den eigenen Server

```sh
npm run build
npm run verify
```

**Den Inhalt von `dist/` ins Webverzeichnis kopieren.** Der Build enthält zehn vorgerenderte Seiten mit echten Unterverzeichnissen und alle Bilder, Icons, Schriften, CSS- und JavaScript-Dateien. Für den laufenden Betrieb ist kein Node.js erforderlich. Der Code ist frei editierbar; das Projekt ist nicht an Sites-Hosting gebunden.

Beispiel Nginx (Dokumentpfad und Domain anpassen):

```nginx
server {
    listen 80;
    server_name example.de;
    root /var/www/hima;
    index index.html;
    location / { try_files $uri $uri/ =404; }
    error_page 404 /404.html;
}
```

Apache benötigt normalerweise nur aktiviertes `DirectoryIndex index.html`. Kein SPA-Rewrite erforderlich. HTTPS wie für die eigene Domain üblich konfigurieren. Das Projekt erwartet Hosting im Wurzelverzeichnis einer Domain.

## Enthaltene Seiten

- `/` — Home, sechs Aufgabengebiete, Partner und Kontaktaufruf
- `/ueber-uns/` — Firmendarstellung und Meisterbrief
- `/referenzen/` — vollständige Kundenliste
- `/kontakt/` — Kontaktdaten, optionale Karte und Kontaktformular
- `/jobs/` — beide Stellenangebote
- `/bewerbung/` — Bewerbung
- `/impressum/` — aktualisierte Anbieterkennzeichnung nach DDG
- `/datenschutz/` — Datenschutz passend zur React-Website
- `/impressum-datenschutzerklaerung/` — bestehende URL, beide überarbeiteten Texte; nicht in der Sitemap
- `/cookie-richtlinie-eu/` — Angaben zu den tatsächlich eingebauten lokalen Einstellungen und optionaler Karte

## Bewusste Abweichungen und Funktionsumfang

- Die Originalwebsite zeigt statt der Gravity-Forms-Formulare nur rohe WordPress-Shortcodes. In React gibt es echte Eingabefelder mit Pflichtfeldprüfung. Sie bereiten eine E-Mail vor; der Besucher öffnet sein Mailprogramm und versendet sie dort. **Ein direkter serverseitiger Versand ist nicht angeschlossen.** Dateien für Bewerbungen werden im Mailprogramm angehängt. Kein Formular behauptet einen erfolgten Versand.
- Der ursprüngliche Cookie-Link zeigt irrtümlich die Bewerbungsseite. Die React-Version trennt diese beiden Seiten. Die Cookie-Seite beschreibt die implementierte Technik und ist keine Übernahme einer rechtlichen Beratung.
- Die Karte wird erst nach Zustimmung als OpenStreetMap-Frame geladen. Ablehnen verhindert die Einbindung. Die Auswahl kann über „Manage consent“ wieder geöffnet werden; sie wird im lokalen Browserspeicher hinterlegt.
- Werbung, WordPress-Telemetrie und Statistik-Skripte sind nicht übernommen. Keine externen Font- oder Bildabrufe. Telefon-, E-Mail- und externe Quellenlinks bleiben vorhanden.
- Impressum, Datenschutz und Cookie-Informationen wurden am 06.11.2026 überarbeitet. Registergericht, HRB und beide Geschäftsführer sowie die Nichtteilnahme an Verbraucherschlichtung wurden vom Auftraggeber bestätigt. Eine USt-ID wurde nicht angegeben und wird nicht erfunden. Die Datenschutztexte beschreiben die vorgesehene TECHFULL-/Hetzner-Bereitstellung und Migadu-Weiterleitung; Domain- und Mailfreischaltung erfolgen getrennt. Die tatsächliche Kundenorganisation muss insbesondere Vertragsunterlagen zur Auftragsverarbeitung und ihre organisatorischen Aufbewahrungsprozesse prüfen.
- Die originalen Gestaltungsmittel und Medien bleiben den jeweiligen Rechteinhabern zugeordnet.

## Projektstruktur

`src/pages/` enthält editierbare JSX-Seiten, keine eingebettete fremde Website und keine HTML-Injection. `Header.jsx`, `Footer.jsx`, `components.jsx` und `CookieConsent.jsx` enthalten gemeinsame React-Komponenten. `public/assets/` enthält die lokal übernommenen Medien und die ursprüngliche Präsentations-CSS. `src/styles.css` ergänzt die React-Funktionen und die CSS-basierte Rastersteuerung.

Der Produktionsbuild rendert über React zusätzlich HTML für direkte Aufrufe und Suchmaschinen. Der Browser übernimmt dieses HTML mittels React-Hydration und navigiert intern ohne Vollseiten-Reload. Die Inhalte sind auch ohne JavaScript lesbar; Formulare, Menü und Datenschutzsteuerung benötigen JavaScript.

Die einmaligen Migrationsskripte `scripts/collect.py` und `scripts/migrate.mjs` dokumentieren die Übernahme. Sie benötigen den nicht ausgelieferten Referenzdownload unter `reference/`; für Entwickeln, Bauen und Betreiben sind sie nicht erforderlich. Eine erneute Migration überschreibt manuell bearbeitete Seiten und ist nicht Teil des Builds.

## Prüfung

`npm run verify` prüft alle zehn HTML-Einstiegspunkte, lokale Bilder/Schriften/CSS-Ressourcen, interne Links und das Fehlen von WordPress-Ressourcen und Formular-Shortcodes. Alle zehn Seiten wurden im Browser bei 320, 390, 640, 768, 1024 und 1440 Pixeln geprüft. Navigation, mobiles Menü, E-Mail-Vorbereitung und die Einwilligungssteuerung sind geprüft. `npm test` prüft insbesondere das Ablaufen einer Auswahl und den Widerruf bei gesperrtem Browserspeicher. Der direkte E-Mail-Versand ist bewusst nicht Bestandteil dieser statischen Version.


## SEO, Darstellung und Favicon

Eigene Titel und Meta-Beschreibungen pro Seite, Canonicals auf `https://hima-elektro.de/`, Open-Graph-/Twitter-Metadaten und JSON-LD für Unternehmen, Website und Breadcrumbs werden statisch erzeugt. `robots.txt` verweist auf die Sitemap mit neun indexierbaren Seiten. Die kombinierte Alt-URL bleibt erreichbar und ist als `noindex,follow` markiert. Pro Seite genau eine H1. Kein erfundenes Bewertungsmarkup, keine erfundenen Öffnungszeiten oder Job-Veröffentlichungsdaten.

Das SVG-Favicon greift die drei Balken und das H der bestehenden HIMA-Marke auf. Farbpalette und vorhandene Schriftfamilien bleiben erhalten. Die Bedienung ist per Tastatur möglich; Eingaben haben mindestens 16 px Schriftgröße, um ungewollten iOS-Zoom zu vermeiden.

Rechtsgrundlagen und Anbieterinformationen für die Textüberarbeitung: [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html), [§ 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html), [§ 36 VSBG](https://www.gesetze-im-internet.de/vsbg/__36.html), [DSGVO](https://eur-lex.europa.eu/eli/reg/2016/679/oj), [§ 26 BDSG](https://www.gesetze-im-internet.de/bdsg_2018/__26.html), [Einstellung der ODR-Plattform](https://eur-lex.europa.eu/eli/reg/2024/3228), [OpenStreetMap-Datenschutz](https://osmfoundation.org/wiki/Privacy_Policy), [Migadu-Datenschutz](https://www.migadu.com/privacy/).
