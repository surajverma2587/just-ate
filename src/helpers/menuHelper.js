const getSelectedItem = (menuSections = [], id = '') => menuSections.reduce((acc, menuSection) => {
  const filteredItem = menuSection.menuItems.filter(menuItem => menuItem.id === id);
  return [...acc, ...filteredItem];
}, []);

function deleteSelectedItem(selectedItems, id) {
  for (var i = 0; i < selectedItems.length; i++)
  if(selectedItems[i].id === id) {
    selectedItems.splice(i, 1)
    break;
  }
  return selectedItems;
} 

export { getSelectedItem, deleteSelectedItem }