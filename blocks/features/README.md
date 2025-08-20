# Features Block

A customizable features block that displays a list of features with checkmark icons, following the design pattern from the BLOCKS8 UI Components Library.

## Structure

The features block expects the following structure:

1. **First row**: Header content (eyebrow, heading, description)
2. **Subsequent rows**: Individual feature items

## Usage Example

In your document, create a table structure like this:

```
| FEATURES |
| Cool features from BLOCKS8 |
| Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales interdum sapien non pretium. |
| Lorem ipsum dolor sit amet, consectetur. |
| Sed do eiusmod tempor incididunt ut. |
| Ut enim ad minim veniam. |
| Labore et dolore magna aliqua. |
```

This will render as:
- An eyebrow label ("FEATURES")
- A main heading ("Cool features from BLOCKS8")
- A description paragraph
- A list of features with blue checkmark icons

## Styling

The block includes responsive CSS with the following features:
- Blue checkmark icons for each feature item
- Flexible layout that adapts to different screen sizes
- Support for eyebrow text (uppercase labels)
- Clean typography using CSS custom properties

## Customization

You can customize the appearance by modifying the CSS custom properties:
- `--text-color` for text colors
- Modify `.features-icon` for different icon styles
- Adjust spacing and typography in the CSS file

## Files

- `features.js` - JavaScript block logic using Faintly templating
- `features.html` - Faintly template for rendering
- `features.css` - Styling for the block
- `_features.json` - Block configuration for AEM Edge Delivery

## Demo

See `features-demo.html` for a working example of the block.
