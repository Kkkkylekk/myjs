// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Start coding here...

const itemTotals = cart.map(item => {
  const total = item.price * item.quantity;
  return { ...item, total };
});

itemTotals.forEach(item => {
  const p = document.createElement("p");
  p.textContent = `${item.name}: ₱${item.total}`;
  document.body.appendChild(p);
});

const itemDescriptions = cart.map(item => `${item.name} - ₱${item.price}`);
const descriptionHeader = document.createElement("h2");
descriptionHeader.textContent = "Item Descriptions";
document.body.appendChild(descriptionHeader);

itemDescriptions.forEach(description => {
  const p = document.createElement("p");
  p.textContent = description;
  document.body.appendChild(p);
});

const totalCartValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const totalHeader = document.createElement("h2");
totalHeader.textContent = `Total Cart Value: ₱${totalCartValue}`;
document.body.appendChild(totalHeader);
