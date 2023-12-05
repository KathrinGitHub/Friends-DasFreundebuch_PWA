// moreBtn.test.js
const { fireEvent, getByTestId } = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

global.document = new JSDOM(html).window.document;

describe('more button functionality', () => {
  test('it toggles visibility of share and add buttons', () => {
    const fab = document.getElementById('moreBtn');
    const fabShare = document.getElementById('shareBtn');
    const fabAdd = document.getElementById('addBtn');

    // Initial state: collapsed
    expect(fabShare).toHaveStyle('visibility: collapse');
    expect(fabAdd).toHaveStyle('visibility: collapse');

    // Simulate click
    fireEvent.click(fab);

    // State after click
    expect(fabShare).toHaveStyle('visibility: visible');
    expect(fabAdd).toHaveStyle('visibility: visible');
  });
});
