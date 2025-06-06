/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('menu toggle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="menu-toggle"></div>
      <ul class="nav-list"><li><a href="#">link</a></li></ul>
      <div class="back-to-top"></div>
      <header class="header"></header>
    `;

    // Load script
    const scriptPath = path.join(__dirname, '..', 'enquete_psd_web', 'enquete_psd_web', 'js', 'main.js');
    require(scriptPath);

    // Dispatch DOMContentLoaded
    document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));
  });

  afterEach(() => {
    // remove cached module
    jest.resetModules();
  });

  test('clicking menu-toggle toggles active class on nav-list', () => {
    const toggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    expect(toggle).not.toBeNull();
    expect(navList).not.toBeNull();

    toggle.click();

    expect(navList.classList.contains('active')).toBe(true);
  });
});
