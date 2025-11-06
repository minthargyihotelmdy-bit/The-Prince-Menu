// menus.js now composes menus from per-category data files that populate
// window.menusPartials. Each per-category file should add its data to
// window.menusPartials[menuKey][categoryKey] = [ ...items ];
window.menus = window.menus || {};
// Merge any partials that were loaded before this script.
if (window.menusPartials) {
  Object.keys(window.menusPartials).forEach(menuKey => {
    window.menus[menuKey] = window.menus[menuKey] || {};
    Object.keys(window.menusPartials[menuKey]).forEach(cat => {
      window.menus[menuKey][cat] = window.menus[menuKey][cat] || [];
      // copy items
      window.menus[menuKey][cat] = window.menus[menuKey][cat].concat(window.menusPartials[menuKey][cat]);
    });
  });
}
