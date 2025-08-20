export default function decorate(block) {
  // Get all rows from the block
  const rows = [...block.children];

  if (rows.length === 0) return;

  // Create the main container
  const featuresContent = document.createElement('div');
  featuresContent.classList.add('features-content');

  // Process the first row as header (eyebrow, heading, description)
  if (rows.length > 0) {
    const headerRow = rows[0];
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('features-header');

    // Move all content from the first row to header
    while (headerRow.firstElementChild) {
      const col = headerRow.firstElementChild;

      // Check if first paragraph looks like eyebrow text (short, uppercase)
      const firstP = col.querySelector('p:first-child');
      if (firstP) {
        const text = firstP.textContent.trim();
        if (text.length < 50 && text === text.toUpperCase()) {
          firstP.classList.add('features-eyebrow');
        }
      }

      headerDiv.appendChild(col);
    }

    featuresContent.appendChild(headerDiv);
  }

  // Process remaining rows as feature items
  if (rows.length > 1) {
    const featuresList = document.createElement('div');
    featuresList.classList.add('features-list');

    // Process each remaining row as a feature item
    for (let i = 1; i < rows.length; i += 1) {
      const row = rows[i];
      const cols = [...row.children];

      cols.forEach((col) => {
        const featureItem = document.createElement('div');
        featureItem.classList.add('features-item');

        // Create checkmark icon
        const icon = document.createElement('div');
        icon.classList.add('features-icon');
        icon.textContent = '✓';

        // Create text container
        const textDiv = document.createElement('div');
        textDiv.classList.add('features-text');
        textDiv.innerHTML = col.innerHTML;

        // Assemble the feature item
        featureItem.appendChild(icon);
        featureItem.appendChild(textDiv);

        featuresList.appendChild(featureItem);
      });
    }

    featuresContent.appendChild(featuresList);
  }

  // Replace block content
  block.textContent = '';
  block.appendChild(featuresContent);
}
