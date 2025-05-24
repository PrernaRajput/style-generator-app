import { isString, join, map, replace, split } from 'lodash';
import { DIMENSION_STANDARDS } from 'constants/templates';
import { addUnitIfNeeded } from 'utils/getSizeDimension';
import { DATA_TYPES } from 'constants/common';
import { LAYOUT_STYLES } from 'constants/common';

/**
 * @type {function}
 * @desc An utility function to do [something]
 * @example
 * import { getGridLayout } from 'utils/getGridLayout';
 * const result = getGridLayout( ...args );
 */
export const getGridLayout = ( args = {} ) => {
	let styleSheet;
	let templateColumn;

	const { gridGap, gridColumn, gridRow, gridTemplateColumns = '' } = args;

	// Creates and appends a new <style> element to the document head.
	const createStyleSheet = () => {
		const style = document.createElement( 'style' );
		document.head.appendChild( style );
		styleSheet = style.sheet;
	};

	// Adds a global CSS rule for the specified class name and style
	const addGlobalStyle = ( className, style ) => {
		if ( !styleSheet ) {
			createStyleSheet();
		}
		styleSheet.insertRule(
			`.${className} { ${style} }`,
			styleSheet.cssRules.length,
		);
		return className; // return the class name
	};

	// Converts a string to an array, while checking those within parentheses, and removing whitespace and parentheses.
	const convertStringToArray = ( str ) => {

		// Match sequences of expressions inside parentheses
		const regex = /[^\s()]+|\([^)]+\)/g;

		return map( str.match( regex ), ( val ) =>
			replace( replace( val, /[()]/g, '' ), /\s+/g, '' ),  //removes parenthesis and then any whitespace
		);//return an array of items with items inside parenthesis as one object
	};

	// Transforms grid template input by converting "start/end" format to "start / span end"
	const transformGridProperty = ( template ) => {

		// Check if the input is a single character
		if ( 1 === template.length ) {
			return template; // Return the single digit as is
		}

		const regex = /(\d+)\s*\/\s*(\d+)/;
		const match = template.match( regex ); //checking if '/' exists in template

		// If match is found, format it as `start / span end`
		if ( match ) {
			return `${match[ 1 ]} / span ${match[ 2 ]}`;
		}

		return template;
	};

	// Function to parse grid-template-columns property of grid handling range values like "25% - 36px" by converting to "calc()"
	const getGridTemplateColumns = ( columns ) => {
		const parseColumn = ( col ) => {
			if ( DATA_TYPES.STRING === typeof col && col.includes( '-' ) ) {

				// Handle range: "25% - 36px" -> calc(25% - 36px)
				const [ percentage, pixel ] = col.split( '-' ).map( ( val ) => val.trim() );
				return `calc(${percentage} - ${pixel})`;
			} else {

				// Treat everything else as a percentage or direct value
				return `${col}%`;
			}
		};

		if ( !columns || 0 === columns.length ) {
			return `grid-template-columns: ${DIMENSION_STANDARDS.AUTO}`;
		}

		const gridColumns = join( map( columns, parseColumn ), ' ' );

		return `${gridColumns}`;
	};

	// Formats gap values based on dimension standards, handling single and double value cases.
	const formatGridGap = ( gap ) => {
		const gapValues = split( gap, '' );

		if (
			1 === gapValues.length &&
			DIMENSION_STANDARDS.hasOwnProperty( gapValues )
		) {
			return `${DIMENSION_STANDARDS[ gapValues ]}`; // Single value case
		} else if ( 2 === gapValues.length ) {
			return `${DIMENSION_STANDARDS[ gapValues[ 0 ] ]} ${DIMENSION_STANDARDS[ gapValues[ 1 ] ]}`; // Two values case
		}
		return `${DIMENSION_STANDARDS.M}`; //default case returning M
	};

	// Converts gridTemplateColumns to an array if it's a string; otherwise, wrap it in an array
	if ( isString( gridTemplateColumns ) ) {
		templateColumn = convertStringToArray( gridTemplateColumns );
	} else {
		templateColumn = [ gridTemplateColumns ];
	}

	const templateColumns = getGridTemplateColumns( templateColumn );
	const gap = formatGridGap( addUnitIfNeeded( gridGap ) );

	// Generates and applies global styles for a grid container with customizable properties
	const generateGridStyles = () => {
		const className = 'gridLayout';
		const style = `
            display: grid;
            grid-template-columns: ${templateColumns || `${LAYOUT_STYLES.AUTO}`};
            grid-column: ${transformGridProperty( gridColumn ) || `${LAYOUT_STYLES.AUTO}`};
            grid-row: ${transformGridProperty( gridRow ) || `${LAYOUT_STYLES.AUTO}`};
            grid-gap: ${gap || `${DIMENSION_STANDARDS.M}`};
        `;
		return addGlobalStyle( className, style );
	};

	return generateGridStyles();
};
