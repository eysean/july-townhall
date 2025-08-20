import { renderBlock } from '../../scripts/faintly.js';

/**
 * Transform feature item with proper styling and icon
 * @param {Object} context - The rendering context
 * @returns {HTMLElement} The transformed feature element
 */
function transformFeatureItem(context) {
  const col = context.col;
  
  // Create the feature item structure
  const featureItem = document.createElement('div');
  featureItem.className = 'features-item';
  
  // Add checkmark icon
  const icon = document.createElement('div');
  icon.className = 'features-icon';
  icon.innerHTML = '✓'; // Using checkmark character, can be replaced with SVG
  
  // Add feature text
  const text = document.createElement('div');
  text.className = 'features-text';
  text.innerHTML = col.innerHTML;
  
  featureItem.appendChild(icon);
  featureItem.appendChild(text);
  
  return featureItem;
}

/**
 * Transform header content to add proper structure
 * @param {Object} context - The rendering context
 * @returns {HTMLElement} The transformed header element
 */
function transformHeader(context) {
  const col = context.col;
  const content = col.innerHTML;
  
  // Create a wrapper for the header content
  const headerWrapper = document.createElement('div');
  headerWrapper.innerHTML = content;
  
  // Look for patterns to identify eyebrow text (typically uppercase, short text)
  const paragraphs = headerWrapper.querySelectorAll('p');
  if (paragraphs.length > 0) {
    const firstP = paragraphs[0];
    const text = firstP.textContent.trim();
    
    // If first paragraph is short and uppercase, make it an eyebrow
    if (text.length < 50 && text === text.toUpperCase()) {
      firstP.className = 'features-eyebrow';
    }
  }
  
  return headerWrapper.innerHTML;
}

export default async function decorate(block) {
  await renderBlock(block, {
    transformFeatureItem,
    transformHeader,
  });
}
