import homeImage from "./cafe-aesthetic.jpg";

export default function renderHomepage() {
  const content = document.querySelector('#content');

  // Hero Container (2 Columns)
  const heroContainer = document.createElement('section');
  heroContainer.classList.add('hero-container');

  // Left Column: Text & CTA
  const textCol = document.createElement('div');
  textCol.classList.add('hero-text-col');

  const eyebrow = document.createElement('div');
  eyebrow.classList.add('eyebrow-badge');
  eyebrow.textContent = 'Specialty Roastery & Tea';

  const title = document.createElement('h1');
  title.classList.add('hero-title');
  title.innerHTML = 'Memories made with the <em>best coffee</em> in town.';

  const desc = document.createElement('p');
  desc.classList.add('hero-description');
  desc.textContent = 'Handcrafted single-origin roasts, velvety micro-foamed lattes, and ceremonial teas in a warm, contemplative space. Served with love and intention.';

  const ctaBtn = document.createElement('button');
  ctaBtn.classList.add('hero-cta-btn');
  ctaBtn.innerHTML = '<span>Explore Our Menu</span> <span>&rarr;</span>';
  ctaBtn.addEventListener('click', () => {
    document.querySelector('#menu')?.click();
  });

  textCol.appendChild(eyebrow);
  textCol.appendChild(title);
  textCol.appendChild(desc);
  textCol.appendChild(ctaBtn);

  // Right Column: Image with floating tag
  const imageCol = document.createElement('div');
  imageCol.classList.add('hero-image-col');

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('hero-image-wrapper');

  const img = document.createElement('img');
  img.src = homeImage;
  img.alt = 'Kyoto Dusk Artisanal Coffee';

  const floatingTag = document.createElement('div');
  floatingTag.classList.add('floating-image-tag');
  floatingTag.innerHTML = `
    <span class="tag-title">Single-Origin Roast</span>
    <span class="tag-sub">Freshly brewed daily</span>
  `;

  imgWrapper.appendChild(img);
  imgWrapper.appendChild(floatingTag);
  imageCol.appendChild(imgWrapper);

  heroContainer.appendChild(textCol);
  heroContainer.appendChild(imageCol);

  // Features Highlight Row
  const featuresGrid = document.createElement('div');
  featuresGrid.classList.add('features-grid');

  const features = [
    { icon: '☕', title: 'Artisanal Roasts', sub: 'Small-batch, direct-trade' },
    { icon: '🍵', title: 'Ceremonial Matcha', sub: 'Sourced from Uji, Kyoto' },
    { icon: '🥐', title: 'Fresh Bakehouse', sub: 'Warm pastries every morning' },
  ];

  features.forEach(f => {
    const pill = document.createElement('div');
    pill.classList.add('feature-pill');
    pill.innerHTML = `
      <div class="feature-icon">${f.icon}</div>
      <div class="feature-info">
        <h4>${f.title}</h4>
        <p>${f.sub}</p>
      </div>
    `;
    featuresGrid.appendChild(pill);
  });

  content.appendChild(heroContainer);
  content.appendChild(featuresGrid);
}



