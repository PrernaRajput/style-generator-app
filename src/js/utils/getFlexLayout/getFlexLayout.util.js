import { DIMENSION_STANDARDS } from 'constants/templates';
import { split } from 'lodash';
import { addUnitIfNeeded } from 'utils/getSizeDimension';

/**
 * @type {function}
 * @desc An utility function to do [something]
 * @example
 * import { getFlexLayout } from 'utils/getFlexLayout';
 * const result = getFlexLayout( ...args );
 */
export const getFlexLayout = (args = {}) => {
  let styleSheet;

  // Creates and appends a new <style> element to the document head.
  const createStyleSheet = () => {
    const style = document.createElement('style');
    document.head.appendChild(style);
    styleSheet = style.sheet;
  };

  // Adds a global CSS rule for the specified class name and style
  const addGlobalStyle = (className, style) => {
    if (!styleSheet) {
      createStyleSheet(); //creating a style sheet if not present
    }
    styleSheet.insertRule(
      `.${className} { ${style} }`,
      styleSheet.cssRules.length
    );
    return className; // return the class name
  };

  // Formats gap values based on dimension standards, handling single and double value cases.
  const formatGap = (gap) => {
    const gapValues = split(gap, '');
    if (
      1 === gapValues.length &&
      DIMENSION_STANDARDS.hasOwnProperty(gapValues)
    ) {
      return `${DIMENSION_STANDARDS[gapValues]}`; // Single value case
    } else if (2 === gapValues.length) {
      return `${DIMENSION_STANDARDS[gapValues[0]]} ${DIMENSION_STANDARDS[gapValues[1]]}`; // Two values case
    }
    return `${DIMENSION_STANDARDS.M}`; //default case returning M
  };

  // Validates and returns an flex-direction value, defaulting to 'row' if the input is invalid
  const formatFlexDirection = (direction) => {
    const validDirections = [
      'row',
      'row-reverse',
      'column',
      'column-reverse',
      'unset',
      'inherit',
    ];

    if (validDirections.includes(direction)) {
      return direction;
    }

    // Default to 'row' if the direction is invalid
    return 'row';
  };

  // Validates and returns an align-items value
  const formatAlignItems = (alignItems) => {
    const validAlignments = [
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch',
    ];

    if (validAlignments.includes(alignItems)) {
      return alignItems;
    }
  };

  // Validates and returns a justify-content value
  const formatJustifyContent = (justifyContent) => {
    const validJustifications = [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ];

    if (validJustifications.includes(justifyContent)) {
      return justifyContent;
    }
  };

  // Validates and formats the flex-wrap property, defaulting to 'nowrap' if the input is invalid
  const formatFlexWrap = (flexWrap) => {
    const validWraps = ['nowrap', 'wrap', 'wrap-reverse'];

    if (validWraps.includes(flexWrap)) {
      return flexWrap;
    }

    // Default to 'nowrap' if the wrap value is invalid
    return 'nowrap';
  };

  const flexWrap = formatFlexWrap(args?.flexWrap);
  const gap = formatGap(addUnitIfNeeded(args?.gap));
  const alignment = formatAlignItems(args?.alignment);
  const flexDirection = formatFlexDirection(args?.flexDirection);
  const justifyContent = formatJustifyContent(args?.justifyContent);

  // Generating and applying global styles for a flex container with customizable properties
  const generateFlexStyles = () => {
    const className = 'flexLayout';
    const style = `
            display: flex;
            flex-direction: ${flexDirection || 'row'};
            gap: ${gap || `${DIMENSION_STANDARDS.M}`};
            align-items:${alignment};
            justify-content: ${justifyContent};
            flex-wrap: ${flexWrap || 'nowrap'};
        `;
    return addGlobalStyle(className, style);
  };

  return generateFlexStyles();
};
