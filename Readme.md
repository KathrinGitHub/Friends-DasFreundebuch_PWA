# MSD Mobile Platforms #
## Lab 05 Teil 1: PWAs ##
by Muesluem Atas & Mathias Knoll

### Ein Manifest verfassen ###

Ein Dokument in der Javascript Object Notation (JSON) welches die WebApp(PWA) beschreibt.

* Datei: manifest.json
* [Referenz](https://w3c.github.io/manifest/) 
* [Tutorial](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## Continous Delievery

**Was ist notwendig zur Build-Automatisierung?**
Zur Build-Automatisierung in einer Continuous Delivery-Pipeline für eine Progressive Web App (PWA) mit Jest zum Testen und Node.js zum Build sind einige Schritte notwendig. Hier sind die notwendigen Schlüsselaspekte:

* Konfiguration eines Build-Skripts in der package.json-Datei, das Jest-Tests ausführt und den Build-Prozess startet.
* Einbindung von Node.js-Build-Tools wie Webpack oder Parcel, um den Code zu bündeln, optimieren und für die Produktion vorzubereiten.
* Integration von Jest für automatisierte Tests in den Build-Prozess.

**Welchen Vorteil liefert Testautomatisierung in CI/CD-Pipelines?**

* Automatisierte Tests ermöglichen eine schnellere Identifizierung von Fehlern während des Entwicklungsprozesses.
* Durch automatisierte Tests wird sichergestellt, dass Tests in jeder Phase der Pipeline konsistent und wiederholbar durchgeführt werden.
* Automatisierte Tests helfen, Fehler frühzeitig zu erkennen und zu beheben, was die Gesamtqualität der Anwendung verbessert.

**Wozu dient Containerization in der Entwicklung und in CI/CD-Pipelines?**

* Container ermöglichen die konsistente Bereitstellung von Anwendungen, unabhängig von der Umgebung.
* Container bieten eine isolierte Umgebung für Anwendungen, was potenzielle Konflikte mit anderen Anwendungen oder Abhängigkeiten minimiert.
* Durch die Verwendung von Containern können Anwendungen leicht skaliert werden, indem mehrere Instanzen auf verschiedenen Umgebungen bereitgestellt werden.

**Wie kann Inversion of Control (IoC) dabei unterstützen?**

IoC kann in CI/CD-Pipelines unterstützen, indem es die Abhängigkeiten und Konfigurationen zentralisiert und den Kontrollfluss umkehrt. Das erleichtert die Verwaltung von Ressourcen und die Skalierung der Infrastruktur, insbesondere in containerisierten Umgebungen.

**Welche Schritte in einer CI/CD-Pipeline müssen beachtet werden?**

* Code-Integration
* Automatisierte Tests
* Artefakt-Erstellung
* Containerisierung
* Bereitstellung auf einer Staging-Umgebung
* Weitere Tests in der Staging-Umgebung
* Bereitstellung in der Produktionsumgebung

**Wie sieht eine Delivery/Deployment-Strategie aus?**

* Continuous Delivery: Automatisierung des Bereitstellungsprozesses bis zur Staging-Umgebung.
* Continuous Deployment: Automatisierte Bereitstellung in der Produktionsumgebung nach erfolgreichem Test in der Staging-Umgebung.

**Was muss eigentlich "ausgeliefert" werden?**

* Kompilierte und optimierte PWA-Dateien.
* Container-Images (falls Containerisierung verwendet wird).
* Konfigurationsdateien.
* Dokumentation.

**Welche Umgebung ist notwendig zum Ausführen bzw. zur Bereistellung des jeweiligen Themas?**

* Node.js-Umgebung für den Build-Prozess.
Testumgebung für Jest-Tests.
* Container-Orchestrierungssystem für die Bereitstellung in containerisierten Umgebungen.
* Staging-Umgebung für Tests vor der Produktionsbereitstellung.
