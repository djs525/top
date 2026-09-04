const menuData = [
  {
    category: "Espresso & Hand Pour",
    items: [
      { name: "Kyoto Slow Drip", price: "$5.50", desc: "12-hour chilled Kyoto-style drip with notes of cacao and wild blackberry.", badge: "Signature" },
      { name: "Velvet Flat White", price: "$4.75", desc: "Double ristretto shot enveloped in micro-textured steamed milk.", badge: "Popular" },
      { name: "Vanilla Foam Cortado", price: "$4.50", desc: "Equal parts espresso and lightly sweet Madagascar vanilla foam.", badge: "" },
      { name: "Roasted Terracotta Americano", price: "$4.00", desc: "Bold espresso blend over filtered hot spring water.", badge: "" },
    ]
  },
  {
    category: "Matcha & Botanical Teas",
    items: [
      { name: "Uji Ceremonial Matcha", price: "$6.00", desc: "First-harvest organic green tea whisked with creamy oat milk.", badge: "Organic" },
      { name: "Kyoto Dusk Blossom", price: "$5.25", desc: "Silky lavender-infused Earl Grey with butterfly pea blossom notes.", badge: "Specialty" },
      { name: "Charcoal Hojicha Latte", price: "$5.75", desc: "Nutty roasted Japanese green tea with toasted sesame undertones.", badge: "" },
      { name: "Spiced Terracotta Chai", price: "$5.00", desc: "House-crushed cardamom, cinnamon, and whole clove simmered in milk.", badge: "" },
    ]
  },
  {
    category: "Bakehouse Pastries",
    items: [
      { name: "Cardamom Morning Bun", price: "$4.50", desc: "Caramelized laminated pastry with freshly cracked Ceylon cardamom.", badge: "Fresh Daily" },
      { name: "Matcha Cream Brioche", price: "$4.75", desc: "Puffy golden brioche injected with velvet matcha custard.", badge: "" },
      { name: "Almond Twice-Baked Croissant", price: "$5.25", desc: "Flaky butter croissant filled with frangipane and toasted almonds.", badge: "Favorite" },
      { name: "Vanilla Foam Financier", price: "$3.50", desc: "Brown butter tea cake topped with flaky sea salt.", badge: "" },
    ]
  }
];

export default function renderMenu() {
  const content = document.querySelector('#content');

  // Header Section
  const header = document.createElement('div');
  header.classList.add('section-header');
  header.innerHTML = `
    <h2>The Cafe Menu</h2>
    <p>Every beverage is thoughtfully crafted with sustainably sourced beans and ceremonial-grade botanicals.</p>
  `;
  content.appendChild(header);

  // Menu Grid Container
  const grid = document.createElement('div');
  grid.classList.add('menu-grid');

  menuData.forEach(cat => {
    const card = document.createElement('div');
    card.classList.add('menu-category-card');

    const title = document.createElement('h3');
    title.classList.add('category-title');
    title.innerHTML = `<span>☕</span> ${cat.category}`;
    card.appendChild(title);

    const list = document.createElement('ul');
    list.classList.add('menu-item-list');

    cat.items.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('menu-item');

      const itemHeader = document.createElement('div');
      itemHeader.classList.add('menu-item-header');

      const nameSpan = document.createElement('span');
      nameSpan.classList.add('item-name');
      nameSpan.textContent = item.name;

      if (item.badge) {
        const badge = document.createElement('span');
        badge.classList.add('item-badge');
        badge.textContent = item.badge;
        nameSpan.appendChild(badge);
      }

      const priceSpan = document.createElement('span');
      priceSpan.classList.add('item-price');
      priceSpan.textContent = item.price;

      itemHeader.appendChild(nameSpan);
      itemHeader.appendChild(priceSpan);

      const descP = document.createElement('p');
      descP.classList.add('item-desc');
      descP.textContent = item.desc;

      li.appendChild(itemHeader);
      li.appendChild(descP);
      list.appendChild(li);
    });

    card.appendChild(list);
    grid.appendChild(card);
  });

  content.appendChild(grid);
}