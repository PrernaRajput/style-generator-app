import { get } from 'lodash';
import React from 'react';
const PACKAGE = require('../../../package.json');

/**
 * @desc Application-wide `common` constants.
 * @example
 * import * as COMMON from 'constants/common';
 * console.log( COMMON.IS_USER_LOGGED_IN );
 */

// local storage key to check if user is logged in

export const ACCOUNT_NAME = get(PACKAGE, 'appName', '');

export const IS_USER_LOGGED_IN = 'isUserLoggedIn';
export const VIEWPORT_CONTEXT = React.createContext({});

// environments
export const ENVIRONMENTS = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};

// placements for popover
export const PLACEMENTS = {
  AUTO: 'auto',
  AUTO_START: 'auto-start',
  AUTO_END: 'auto-end',
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end',
  TOP_CENTER: 'top-center',
  TOP_RIGHT: 'top-right',
};

// HTTP methods
// export const HTTP_METHODS = {
//     GET: 'GET',
//     POST: 'POST',
//     PUT: 'PUT',
//     DELETE: 'DELETE'
// };

// http response status
export const HTTP_RESPONSE_STATUS = {
  NONE: 0,
  OK: 200,
};

// service response status
export const SERVICE_RESPONSE_STATUS = {
  SUCCESS: 'success',
  ERROR: 'failure',
  FAILURE: 'failure',
  CANCELLED: undefined,
};

// target variables for links
// export const TARGET = {
//     SELF: '_self',
//     OUTSIDE: '_blank'
// };

// blank symbol value
export const BLANK_VALUE_SYMBOL = '-';

// field-type
export const FIELD_TYPE = {
  INPUT: 'input',
  TEXT: 'text',
  PASSWORD: 'password',
  TEXTAREA: 'textarea',
  ADDRESS: 'address',
  RADIO: 'radio',
  RADIO_GROUP: 'radioGroup',
  CHECKBOX: 'checkbox',
  CHECKBOX_GROUP: 'checkboxGroup',
  SINGLE_SELECT: 'singleSelect',
  MULTI_SELECT: 'multiSelect',
  DATE_FIELD: 'dateField',
  DATE_RANGE: 'dateRange',
  FILE_UPLOAD: 'fileUpload',
  SEARCH: 'search',
  DEEP_SELECT: 'deepSelect',
  FORM_SECTION_TITLE: 'formSectionTitle',
  TYPE_AHEAD: 'typeAhead',
  TYPE_AHEAD_WITH_SEARCH: 'TypeAheadWithSearch',
  COMPOSITE_FIELD: 'compositeField',
  FORM_SECTION_DESCRIPTION: 'formSectionDescription',
};

// ui locators
export const LOCATORS = {
  ERROR: 'error',
  LABEL: 'label',
  TITLE: 'title',
  SUBTITLE: 'subtitle',
  DESCRIPTION: 'description',
  PLACEHOLDER: 'placeholder',
  CLEAR: 'clear',
  CHOICE_LISI: 'choice-list',
  SEARCH: 'search',
  TABLE: 'table',
  ACTION_TITLE: 'action-title',
  SYSTEM_ERROR: 'SYSTEM_ERROR',
};

// platforms
export const DEVICE_PLATFORMS = {
  __PREFIX__: 'mode--platform',
  DEFAULT: 'default',
  MOBILE: 'mobile',
  BROWSER: 'browser',
  ANDROID_BROWSER: 'android-browser',
  IOS_BROWSER: 'ios-browser',
  APP: 'app',
  ANDROID_APP: 'android-app',
  IOS_APP: 'ios-app',
};

// field validation names
export const DATA_VALIDATIONS = {
  REQUIRED: 'required', // field is required
  TYPE_NUMBERS: 'data_number', // field's data is a number
  TYPE_INTEGERS: 'data_integer', // field's data is an integer
  VALUE_ET: 'value_et', // field value is equal to x
  VALUE_GT: 'value_gt', // field value is greater than x
  VALUE_GTE: 'value_gte', // field value is greater than or equal to x
  VALUE_LT: 'value_lt', // field value is less than x
  VALUE_LTE: 'value_lte', // field value is less than or equal to x
  SEARCH: 'search',
  ARRAY: 'array',
  MAX_LENGTH: 'maxlength',
  ZIPCODE: 'zipcode',
  US_PHONE: 'usPhone',
  EMPTY: 'empty',
  NOT_EMPTY: 'notEmpty',
  EMAIL: 'email',
  TIME: 'time',
  EQUAL_TO: 'equalTo',
  NOT_EQUAL_TO: 'notEqualTo',
  DATE: 'date',
  DATE_RANGE: 'dateRange',
  COPY: 'copy',
  IS_TRUE: 'isTrue',
  IS_FALSE: 'isFalse',
};

// masks
export const MASKS = {
  usPhone: '(999) 999-9999',
  time: '99:99',
  date: '99-99-9999',
  dateRange: '99-99-9999 - 99-99-9999',
};

// field and table-column types
export const DATA_TYPES = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  DATE: 'date',
  PHONE: 'phone',
  EMAIL: 'email',
  ADDRESS: 'address',
  SINGLE_SELECT: 'singleSelect',
  MULTI_SELECT: 'multiSelect',
  DEEP_SELECT: 'deepSelect',
  STRING: 'string',
};

// sizes
export const SIZES = {
  EXTRA_SMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large',
};

export const PARTIAL = 'partial';

export const SELECT_ALL_OPTION_VALUE = 'ALL';

// page-level preloader templates
export const PAGE_LEVEL_PRELOADER_TEMPLATES = {
  DEFAULT: 'DEFAULT',
  NANOBAR: 'NANOBAR',
};

// MIME_TYPES
export const MIME_TYPES = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx':
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xls': 'application/vnd.ms-excel',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

// file uploader errors
export const FILE_UPLOADER_ERRORS = {
  INVALID_FILE: 'INVALID_FILE',
  INVALID_FILE_DIMENSIONS: 'INVALID_FILE_DIMENSIONS',
  INVALID_ASPECT_RATIO: 'INVALID_ASPECT_RATIO',
  SERVER_ERROR: 'SERVER_ERROR',
};

// status-bar themes
export const STATUS_BAR_THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

// Aria attributes for overlay screen
export const OVERLAY_ROLES = {
  DIALOG: 'dialog',
  ALERT: 'alert',
};

// sort directions
export const SORT_DIRECTIONS = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export const FETCHING_TYPE = {
  PAGINATION: 'pagination',
  SORT_AND_FILTER: 'sortAndFilter',
};

// global labels
export const GLOBAL_LABELS = {
  DISPLAY_TEXT_NO_DATA_AVAILABLE: 'displayTextNoDataAvailable',
  DISPLAY_TEXT_SOMETHING_WENT_WRONG: 'displayTextSomethingWentWrong',
  SOMETHING_WENT_WRONG: 'Something went wrong',
  DISPLAY_TEXT_SYSTEM_ERROR: 'displayTextSystemError',
  DISPLAY_TEXT_TRY_AGAIN: 'displayTextTryAgain',
};

export const INTERNET_OUTAGE_LABELS = {
  TITLE: 'OOOPS!',
  SUBTITLE: 'Look’s like you’re not connected to the World Wide Web',
};

export const DATE_FORMAT = 'MM/DD/YYYY';

// placements for popover
export const ICON_PLACEMENTS = {
  RIGHT: 'right',
  LEFT: 'left',
};

export const ACTION_TYPES = {
  SUBNAV: 'subNav',
  CLEAR: 'clear',
  TOUR: 'tour',
  ACTION_ICON_WITH_URL: 'actionIconWithUrl',
  SUB_HEADER_SEARCH: 'subHeaderSearch',
  PRODUCT_SWITCH: 'productSwitch',
};

export const HEADER_ACTIONS = {
  ABOUT_FRAMEWORK: 'aboutFramework',
  MICRO_FRONTEND: 'microFrontend',
  CORE_MODULES: 'coreModules',
  LOGOUT: 'logout',
  FORM_CONTROL: 'formControl',
  BACK_TO_PORTAL: 'backToPortal',
};

export const ACTIONS = {
  CANCEL: 'cancel',
  SUBMIT: 'submit',
};

export const LIVE_WIRE_ACTIONS = {
  RELOAD: 'reload',
  SYNC_ADD: 'sync_add',
  SYNC_DELETE: 'sync_delete',
  SYNC_UPDATE: 'sync_update',
};

export const ICON_NAMES = {
  RIGHT_ARROW: 'rightArrow',
  PRIMARY_LOGO: 'primaryLogo',
  SECONDARY_LOGO: 'secondaryLogo',
  CLOSE: 'close',
};
export const NETWORK_ERROR_CODES = {
  401: 401,
  403: 403,
};

export const PROPERTIES = {
  DISABLED: 'disabled',
  ENABLE_COPY: 'enableCopy',
};

//changed the name from SIDEBAR to NAVIGATION because we were already importing Sidebar from core in view
export const NAVIGATION = {
  WEB_PRIMARY_NAVIGATION: 'webPrimaryNavigation',
  HAMBURGER_MENU: 'hamburgerMenuItems',
  LANGUAGE: 'language',
  USERNAME: 'userName',
  NAVIGATION: 'navigation',
  HEADER_NAVIGATION: 'headerNavigation',
  SIDEBAR_NAVIGATION: 'sidebarNavigation',
  ACTION: 'action',
  LOGOUT: 'logout',
  ACTION_ICON: 'actionIcon',
  HAMBURGER: 'hamburgerMenu',
  GROUP: 'group',
  HOME: 'home',
  MENU: 'menu',
  MOBILE_HEADER: 'mobileHeader',
  MOBILE_FOOTER: 'mobileFooter',
  SIDEBAR: 'sidebar',
  SIDEBAR_HEADER: 'sidebarHeader',
  ACTION_ICON_WITH_URL: 'actionIconWithUrl',
  MENU_COMPONENT: 'menuComponent',
  HEADER_NAV_VIEW: 'headerNavView',
  HAMBURGER_MENU_ITEMS: 'hamburgerMenuItem',
  GROUPED_NAVIGATION: 'groupedNavigation',
  SINGLE_SELECT: 'singleSelect',
  GROUP_SEARCH_CALLBACK: 'groupSearchCallback',
  PRODUCT_SWITCH: 'productSwitch',
  ACTIONABLE_CLIENT_LOGO: 'clientPrimaryLogoSmall',
};

export const GLOBAL_CONTEXT_ENTITIES = {
  VIEW_AS: 'viewAs',
  PICK_KEYS: 'pickKeys',
  BROKER: 'broker',
  GROUP_REF: 'groupRef',
};

export const ACTION_NAME = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  ACTION_ELEMENT: 'actionElement',
};

export const FILTER_NAMES = {
  GROUP_NAME: 'groupName',
};

export const LOGIN_FORM = 'loginForm';

export const LOGIN_ACTIONS = {
  FORGOT_PASSWORD: 'forgotPassword',
  SUBMIT: 'submit',
  ACCOUNT_RESTRICTED: 'accountRestricted',
};

export const THEME_LOGOS = {
  CLIENT_SECONDARY_LOGO_SMALL: 'clientSecondaryLogoSmall',
  CLIENT_PRIMARY_LOGO_SMALL: 'clientPrimaryLogoSmall',
  CLIENT_PRIMARY_LOGO_MEDIUM: 'clientPrimaryLogoMedium',
};

// application identifiers
export const CORDOVA_APP_ID = 'com.argusmemberx.argx';

// secure local storage keys
export const SECURE_STORAGE_KEYS = {
  BIOMETRICS: 'BIOMETRIC_SETTINGS',
  LOGIN_CREDENTIALS: 'USR_LOGIN_CREDENTIALS',
};

// biometric login types (device features)
export const BIOMETRIC_TYPES = {
  FACE: 'face',
  FINGER: 'finger',
  BIOMETRIC: 'biometric',
};

// biometrics registration error codes
export const BIOMETRIC_REGISTRATION_ERR_CODES = {
  CREDENTIALS_EMPTY: 'CREDENTIALS_EMPTY',
  FAILED_TO_SAVE_CREDENTIALS: 'FAILED_TO_SAVE_CREDENTIALS',
  FAILED_TO_SAVE_SETTINGS: 'FAILED_TO_SAVE_SETTINGS',
};

export const EVENT_TYPES = {
  CALLBACK: 'callback',
};

export const CALLBACK_EVENT_TYPES = {
  OVERLAY: 'overlay',
};

export const OVERLAY_TRIGGERING_ACTION_NAMES = {
  GROUP_NAME: 'groupName',
  SALES_GROUP: 'salesGroup',
};
export const APP_LOGOS = {
  primaryLogo: '/assets/images/appLogoMedium.svg',
};

export const LAYOUT_STYLES = {
  DVW: 'dvw',
  VW: 'vw',
  DVH: 'dvh',
  VH: 'vh',
  M: 'M',
  WIDTH: 'width',
  HEIGHT: 'height',
  PADDING: 'padding',
  GAP: 'gap',
  GRID: 'grid',
  FLEX: 'flex',
  AUTO: 'auto',
};
export const LANGUAGE = 'language';
