const calculateSubTotal = (selectedItems = []) => selectedItems.reduce((acc, item) => (acc + parseFloat(item.price)), 0)

const calculateTaxes = (subTotal = 0) => (0.2 * subTotal)

const calculateDelivery = (subTotal = 0) => (subTotal >= 12) ? 0 : 1.50

const calculateTotal = (subTotal = 0, taxes = 0, delivery = 0) => (parseFloat(subTotal) + parseFloat(taxes) + parseFloat(delivery))

const recalculate = (selectedItems) => {
  const subTotal = calculateSubTotal(selectedItems).toFixed(2);
  const taxes = calculateTaxes(subTotal).toFixed(2);
  const delivery = (parseFloat(subTotal) === 0) ? parseFloat(0).toFixed(2) : calculateDelivery(subTotal).toFixed(2);
  const total = calculateTotal(subTotal, taxes, delivery).toFixed(2);
  return {
    subTotal: parseFloat(subTotal),
    taxes: parseFloat(taxes),
    delivery: parseFloat(delivery),
    total: parseFloat(total),
  };
}

export { calculateSubTotal, calculateTaxes, calculateDelivery, calculateTotal, recalculate }