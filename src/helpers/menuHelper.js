const getSelectedItem = (menuSections = [], id = '') => menuSections.reduce((acc, menuSection) => {
  const filteredItem = menuSection.menuItems.filter(menuItem => menuItem.id === id);
  return [...acc, ...filteredItem];
}, []);

const deleteSelectedItem = (selectedItems = [], id) => selectedItems.filter(selectedItem => selectedItem.id !== id)

export { getSelectedItem, deleteSelectedItem }