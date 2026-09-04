export default function renderAbout() {
  const content = document.querySelector('#content');

  const wrapper = document.createElement('div');
  wrapper.classList.add('about-wrapper');

  // Story Card
  const storyCard = document.createElement('div');
  storyCard.classList.add('story-card');
  storyCard.innerHTML = `
    <h2>It all began with a modest concept: Create <em>amazing</em> coffee!</h2>
    <p>Our mission is to provide sustainably sourced, hand-picked quality coffee. Great coffee is our passion and we want to share it with you.</p>
    <p>Inspired by the serene kissaten coffee houses of Kyoto, our cafe is a haven for slow moments, mindful mornings, and warm connections. Every batch of beans is roasted in small batches to preserve its distinct origin notes.</p>
  `;

  // Info Grid (Hours, Location, Direct Trade)
  const infoGrid = document.createElement('div');
  infoGrid.classList.add('info-grid');

  const hoursCard = document.createElement('div');
  hoursCard.classList.add('info-card');
  hoursCard.innerHTML = `
    <h3><span>⏰</span> Hours of Operation</h3>
    <ul>
      <li><strong>Monday – Friday:</strong> 7:00 AM – 6:00 PM</li>
      <li><strong>Saturday:</strong> 8:00 AM – 7:00 PM</li>
      <li><strong>Sunday:</strong> 8:00 AM – 5:00 PM</li>
    </ul>
  `;

  const locationCard = document.createElement('div');
  locationCard.classList.add('info-card');
  locationCard.innerHTML = `
    <h3><span>📍</span> Visit Us</h3>
    <p>42 Blossom Way, Kyoto Quarter<br>Downtown Arts District</p>
    <p style="margin-top: 0.5rem;"><strong>Phone:</strong> (555) 328-7589<br><strong>Email:</strong> hello@kyotodusk.cafe</p>
  `;

  const philosophyCard = document.createElement('div');
  philosophyCard.classList.add('info-card');
  philosophyCard.innerHTML = `
    <h3><span>🌱</span> Direct Trade & Craft</h3>
    <p>We work directly with organic cooperatives in Ethiopia, Colombia, and Uji, Japan, ensuring fair wages and regenerative agriculture at every step.</p>
  `;

  infoGrid.appendChild(hoursCard);
  infoGrid.appendChild(locationCard);
  infoGrid.appendChild(philosophyCard);

  wrapper.appendChild(storyCard);
  wrapper.appendChild(infoGrid);
  content.appendChild(wrapper);
}