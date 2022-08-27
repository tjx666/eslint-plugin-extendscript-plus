'use strict';

/**
 * @typedef {ESlintConfig['globals']} ESLintGlobals
 */

// const OFF = 0;
// const WARN = 1;
const ERROR = 2;

/** @type {ESLintGlobals} */
const baseGlobals = {
  $: 'readonly',
  alert: 'readonly',
  app: 'readonly',
  apps: 'readonly',
  Array: 'readonly',
  AvailabilityCheckOptions: 'readonly',
  Boolean: 'readonly',
  bridge: 'readonly',
  confirm: 'readonly',
  contextMenu: 'readonly',
  Date: 'readonly',
  decodeURI: 'readonly',
  decodeURIComponent: 'readonly',
  document: 'readonly',
  encodeURI: 'readonly',
  encodeURIComponent: 'readonly',
  Error: 'readonly',
  escape: 'readonly',
  eval: 'readonly',
  File: 'readonly',
  Folder: 'readonly',
  Function: 'readonly',
  illustrator: 'readonly',
  indesign: 'readonly',
  Infinity: 'readonly',
  isFinite: 'readonly',
  isNaN: 'readonly',
  isXMLName: 'readonly',
  key: 'readonly',
  keys: 'readonly',
  localize: 'readonly',
  Math: 'readonly',
  menuItemInfo: 'readonly',
  menuTextOrder: 'readonly',
  Namespace: 'readonly',
  NaN: 'readonly',
  Number: 'readonly',
  Object: 'readonly',
  parseFloat: 'readonly',
  parseInt: 'readonly',
  photoshop: 'readonly',
  placeLinkCmd: 'readonly',
  prompt: 'readonly',
  QName: 'readonly',
  Reflection: 'readonly',
  ReflectionInfo: 'readonly',
  RegExp: 'readonly',
  setDefaultXMLNamespace: 'readonly',
  Socket: 'readonly',
  String: 'readonly',
  subMenu: 'readonly',
  subMenuBrush: 'readonly',
  subMenuGraphic: 'readonly',
  subMenuSwatch: 'readonly',
  subMenuSymbol: 'readonly',
  tempPSVersionInfo: 'readonly',
  undefined: 'readonly',
  unescape: 'readonly',
  uneval: 'readonly',
  UnitValue: 'readonly',
  XML: 'readonly',
  XMLList: 'readonly',
};

/** @type {ESLintGlobals} */
const scriptUIGlobals = {
  Bounds: 'readonly',
  Button: 'readonly',
  Checkbox: 'readonly',
  Dimension: 'readonly',
  DrawState: 'readonly',
  DropDownList: 'readonly',
  EditText: 'readonly',
  Environment: 'readonly',
  Event: 'readonly',
  Events: 'readonly',
  FlashPlayer: 'readonly',
  Group: 'readonly',
  IconButton: 'readonly',
  KeyboardState: 'readonly',
  LayoutManager: 'readonly',
  ListBox: 'readonly',
  ListItem: 'readonly',
  Panel: 'readonly',
  Point: 'readonly',
  Progressbar: 'readonly',
  RadioButton: 'readonly',
  ScriptUI: 'readonly',
  ScriptUIBrush: 'readonly',
  ScriptUIFont: 'readonly',
  ScriptUIGraphics: 'readonly',
  ScriptUIImage: 'readonly',
  ScriptUIPath: 'readonly',
  ScriptUIPen: 'readonly',
  Scrollbar: 'readonly',
  Slider: 'readonly',
  StaticText: 'readonly',
  TreeView: 'readonly',
  UIEvent: 'readonly',
  Window: 'readonly',
};

/** @type {ESLintGlobals} */
const externalObjectsGLobals = {
  XMPConst: 'readonly',
};

/**
 * @type {}
 */
module.exports = {
  env: {},
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 3,
  },
  globals: {
    ...baseGlobals,
    ...scriptUIGlobals,
    ...externalObjectsGLobals,
  },
  plugins: ['eslint-plugin-extendscript-plus'],
  rules: {
    'no-undef': ERROR,

    'extendscript-plus/no-let': ERROR,
    'extendscript-plus/no-console': ERROR,
    'extendscript-plus/no-arrow-func': ERROR,
    'extendscript-plus/no-property-shorthand': ERROR,
  },
};
