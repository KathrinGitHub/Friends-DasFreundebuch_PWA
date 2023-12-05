const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Einlesen des HTML-Inhalts
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Initialisieren des globalen Dokuments
global.document = new JSDOM(html).window.document;

// Testbeschreibung für fabShare und fabAdd Buttons
describe('Basis-Überprüfung der DOM-Elemente', () => {
  test('fabShare und fabAdd Elemente sind im DOM vorhanden', () => {
    const fabShare = document.getElementById('shareBtn');
    const fabAdd = document.getElementById('addBtn');

    // Überprüfen, ob die Elemente im DOM vorhanden sind
    expect(fabShare).not.toBeNull();
    expect(fabAdd).not.toBeNull();
  });
});

// Testbeschreibung für die Profilseite
describe('DOM-Elemente in der Profilseite', () => {
  test('Profilelemente sind im DOM vorhanden', () => {
    // Überprüfen, ob das Profilbild vorhanden ist
    const profileImage = document.getElementById('ownProfile');
    expect(profileImage).not.toBeNull();

    // Überprüfen, ob die Kategorieelemente vorhanden sind
    const categoryItems = document.querySelectorAll('.item');
    expect(categoryItems.length).toBeGreaterThan(0);

    // Überprüfen, ob ein spezifischer Inhalt vorhanden ist (z.B. "Lieblingsessen")
    const favoriteFood = Array.from(categoryItems).find(item => item.textContent.includes('Lieblingsessen'));
    expect(favoriteFood).not.toBeNull();
  });
});
