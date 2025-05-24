import { DATA_TYPES, LAYOUT_STYLES } from 'constants/common';
import { DIMENSION_STANDARDS } from 'constants/templates';
import { find, isEmpty, some } from 'lodash';
import { addStyle } from 'utils/getDynamicClass';

/**
 * @type {function}
 * @desc Retrieves the appropriate size dimension and applies styles based on the provided value and dimension type.
 * @example
 * import { getSizeDimension } from 'utils/getSizeDimension';
 */

export const addUnitIfNeeded = (value, unit = 'px') => {
  if ('number' === typeof value) {
    return `${value}${unit}`; // Add unit if value is a number
  }
  return value; // Return as-is if it already has a unit
};

export const getObjectKey = (_value, dimensionObject) => {
  // Function to loop through the object and return the key if a match is found
  const unitValue = addUnitIfNeeded(_value);

  for (const [key, spacingValue] of Object.entries(dimensionObject)) {
    if (spacingValue === unitValue) {
      return key;
    }
  }
  return ''; // Return an empty string if the value is invalid
};

export const getSizeDimension = (args = {}) => {
  const dimensionType = args?.dimensionType || '';
  const value = args?.value;

  const sizeDimensions = {
    //standard size dimensions for vh, vw
    xl: '100',
    l: '90',
    m: '70',
    s: '50',
  };

  if (DIMENSION_STANDARDS[value]) {
    //process value by check against dimension standards

    return addStyle(dimensionType, DIMENSION_STANDARDS[value]);
  } else if (
    DATA_TYPES.STRING === typeof value &&
    some(LAYOUT_STYLES, (key) => value.includes(key))
  ) {
    // Checks if the 'value' is a string and contains layout style keys.

    // Find the layout style key that matches the 'value'
    const matchedKey = find(LAYOUT_STYLES, (key) => value.includes(key));

    // If the matched key is not empty
    if (!isEmpty(matchedKey)) {
      // Remove the matched key from the 'value' and trim any whitespace
      const updatedValue = value.replace(matchedKey, '').trim();

      // Add the style using the dimension type and the matched key, applying the updated value
      return addStyle(
        `${dimensionType}-${matchedKey}`,
        getObjectKey(updatedValue, sizeDimensions)
      );
    }
  } else if (null !== value && value !== undefined) {
    // Checks if 'value' is neither null nor undefined

    // If 'value' is valid, apply the style using the dimension type and the value
    return addStyle(dimensionType, value);
  }

  return null;
};
