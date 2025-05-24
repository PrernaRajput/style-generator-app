import { compact, isEmpty, join } from 'lodash';
import { isMobile } from 'utils/responsiveViewportHook';
import { getGridLayout } from 'utils/getGridLayout';
import { getFlexLayout } from 'utils/getFlexLayout';
import { DIMENSION_STANDARDS } from 'constants/templates';
import { getSizeDimension } from 'utils/getSizeDimension';
import { LAYOUT_STYLES } from 'constants/common';

/**
 * @type {function}
 * @desc An utility function to do [something]
 * @example
 * import { getDynamicClass } from 'utils/getDynamicClass';
 * const result = getDynamicClass( ...args );
 */

// Function to generate the className according to the property and value passed
export const addStyle = ( property, value ) => {
	if ( value !== undefined && null !== value ) {
		return `${property}-${value}`; //return generated class
	}
	return ''; // Return an empty string if the value is invalid
};

export const getDynamicClass = ( args ) => {
	const styles = [];
	const _isMobile = isMobile();

    if ( isEmpty( args ) ) {
        return '';
    }

	// Set config to mobile or web arguments, defaulting to args if web is not available.
	const config = _isMobile && args?.mobile ? args?.mobile : args?.web || args;
	const { height, width, padding } = config;

	if ( width ) {
		styles.push(
			getSizeDimension( { dimensionType: LAYOUT_STYLES.WIDTH, value: width } ),
		);
	}

	if ( height ) {
		styles.push(
			getSizeDimension( { dimensionType: LAYOUT_STYLES.HEIGHT, value: height } ),
		);
	}

	if ( DIMENSION_STANDARDS.hasOwnProperty( padding ) ) {
		styles.push( addStyle( LAYOUT_STYLES.PADDING, padding ) );
	} else {
		styles.push( addStyle( LAYOUT_STYLES.PADDING, `${LAYOUT_STYLES.M}` ) );
	}

	const selectedConfig = config[ args?.layoutType ]
		? config[ args?.layoutType ]
		: null;

	if ( LAYOUT_STYLES.GRID === args?.layoutType && !isEmpty( selectedConfig ) ) {
		const gridTemplate = getGridLayout( selectedConfig );
		styles.push( gridTemplate );
	} else if (
		LAYOUT_STYLES.FLEX === args?.layoutType &&
		!isEmpty( selectedConfig )
	) {
		const flexTemplate = getFlexLayout( selectedConfig );
		styles.push( flexTemplate );
	}

	return join( compact( styles ), ' ' );
};
