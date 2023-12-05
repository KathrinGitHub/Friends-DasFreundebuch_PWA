# Continous Delievery einer Progessive Web App

#### Was ist notwendig zur Build-Automatisierung?

* Konfiguration eines Build-Skripts in der package.json-Datei, das Jest-Tests ausführt und den Build-Prozess startet.
* Einbindung von Node.js-Build-Tools. In diesem Fall Webpack und babel, um den Code zu optimieren und für die Produktion vorzubereiten.
* Integration von Jest für automatisierte Tests in den Build-Prozess.


#### Welchen Vorteil liefert Testautomatisierung in CI/CD-Pipelines?

* Ermöglichen eine schnellere Identifizierung von Fehlern während des Entwicklungsprozesses.
* Stellt sicher, dass Tests in jeder Phase der Pipeline konsistent und wiederholbar durchgeführt werden.
* Helfen, Fehler frühzeitig zu erkennen und zu beheben, was die Gesamtqualität der Anwendung verbessert.

#### Basis-Überprüfung der DOM-Elemente in Jest

In diesem Abschnitt haben wir grundlegende Jest-Tests für unsere PWA implementiert, um sicherzustellen, dass wesentliche DOM-Elemente wie Buttons korrekt im DOM geladen werden. Diese Tests sind ein kritischer Teil der Qualitätssicherung unserer Anwendung.

- **Verifizierung der DOM-Struktur:** Diese Tests bestätigen, dass die Grundelemente unserer Anwendung wie erwartet im DOM vorhanden sind.
- **Frühzeitige Fehlererkennung:** Durch das Überprüfen der Grundelemente können wir Probleme frühzeitig in der Entwicklung erkennen und beheben.

#### Implementierte Tests:

- `test('fabShare und fabAdd Elemente sind im DOM vorhanden')`: Überprüft, ob die Buttons `fabShare` und `fabAdd` im DOM geladen und vorhanden sind. Dies garantiert, dass die Benutzeroberfläche unserer Anwendung wie erwartet initialisiert wird.


#### Wozu dient Containerization in der Entwicklung und in CI/CD-Pipelines?

* Ermöglichen die konsistente Bereitstellung von Anwendungen, unabhängig von der Umgebung.
* Bieten eine isolierte Umgebung für Anwendungen, was potenzielle Konflikte mit anderen Anwendungen oder Abhängigkeiten minimiert.
* Anwendungen können leicht skaliert werden, indem mehrere Instanzen auf verschiedenen Umgebungen bereitgestellt werden.

#### Implementierte Container:

- Ubuntu Container erstellt um immer in der gleichen Container testen zu können.

#### Wie kann Inversion of Control (IoC) dabei unterstützen?

Indem es die Abhängigkeiten und Konfigurationen zentralisiert und den Kontrollfluss umkehrt, erleichtern IoC die Verwaltung von Ressourcen und die Skalierung der Infrastruktur, vorallem in containerisierten Umgebungen.

#### Welche Schritte in einer CI/CD-Pipeline müssen beachtet werden?

* Code-Integration
* Automatisierte Tests
* Artefakt-Erstellung
* Containerisierung
* Bereitstellung auf einer Staging-Umgebung
* Weitere Tests in der Staging-Umgebung
* Bereitstellung in der Produktionsumgebung

#### Wie sieht eine Delivery/Deployment-Strategie aus?

* Continuous Delivery: Automatisierung des Bereitstellungsprozesses bis zur Staging-Umgebung.
* Continuous Deployment: Automatisierte Bereitstellung in der Produktionsumgebung nach erfolgreichem Test in der Staging-Umgebung.

#### Was muss eigentlich "ausgeliefert" werden?

* Kompilierte und optimierte PWA-Dateien.
* Container-Images.
* Konfigurationsdateien.
* Dokumentation.

#### Welche Umgebung ist notwendig zum Ausführen bzw. zur Bereistellung des jeweiligen Themas?

* Node.js-Umgebung für den Build-Prozess.
* Testumgebung für Jest-Tests.
* Container-Orchestrierungssystem für die Bereitstellung in containerisierten Umgebungen.
* Staging-Umgebung für Tests vor der Produktionsbereitstellung.


