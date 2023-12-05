// moreBtn.test.js

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Einlesen des HTML-Inhalts
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Initialisieren des globalen Dokuments
global.document = new JSDOM(html).window.document;

// Testbeschreibung
describe('Basis-Überprüfung der DOM-Elemente', () => {
  test('fabShare und fabAdd Elemente sind im DOM vorhanden', () => {
    const fabShare = document.getElementById('shareBtn');
    const fabAdd = document.getElementById('addBtn');

    // Überprüfen, ob die Elemente im DOM vorhanden sind
    expect(fabShare).not.toBeNull();
    expect(fabAdd).not.toBeNull();
  });
});
