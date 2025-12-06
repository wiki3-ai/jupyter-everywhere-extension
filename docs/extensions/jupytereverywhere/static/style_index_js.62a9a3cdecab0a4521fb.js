"use strict";
(self["webpackChunkjupytereverywhere"] = self["webpackChunkjupytereverywhere"] || []).push([["style_index_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./style/base.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/base.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/

#jp-menu-panel,
#jp-top-bar,
#jp-top-panel,
.jp-LabShell[data-shell-mode='single-document'] #jp-menu-panel,
.jp-LabShell[data-shell-mode='single-document'] #jp-top-bar {
  /* Hide the empty menu panel widget */
  min-height: 0;
  display: none;
}

:root {
  --je-scale: 0.85;
  --je-slate-blue: #412c88;
  --je-round-corners: 12px;
  --je-round-corners-filetiles: 6px;
  --je-font-family: 'Inter', sans-serif;
  --je-dialog-round-corners: 12px;
  --je-cell-height: 40px;
  --je-toastify-z-index: calc(var(--toastify-z-index) + 2);
  --je-document-padding: calc(var(--je-scale) * 51px);
  --je-sidebar-width: calc(var(--je-scale) * 110px);
  --je-toolbar-height: calc(var(--je-scale) * 67px);
  --je-margin-below-toolbar: calc(var(--je-scale) * 15px);
  --je-lilac: #d8b8dc;
  --je-border-color: #e6e6e6;
  --je-slate-blue-gradient:
    linear-gradient(90deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 20%) 100%), #4b3187;
}

.je-DownloadDropdownButton-menu,
.je-KernelSwitcherDropdownButton-menu {
  border-radius: 4px;
  color: var(--je-slate-blue);
  font-family: var(--je-font-family);
  border-collapse: collapse;
  border-color: var(--je-border-color);
}

.je-DownloadDropdownButton-menu .lm-Menu-item,
.je-KernelSwitcherDropdownButton-menu .lm-Menu-item {
  border-top: 1px solid var(--je-border-color);
  cursor: pointer;
}

.je-DownloadDropdownButton-menu .lm-Menu-item:first-of-type,
.je-KernelSwitcherDropdownButton-menu .lm-Menu-item:first-of-type {
  border: 0;
}

.je-DropdownMenu {
  font-size: calc(var(--je-scale) * 24px);
  font-weight: 600;
}

.je-DropdownMenu .lm-Menu-itemLabel {
  padding: 7px 10px;
}

.je-DropdownMenu .lm-Menu-itemSubmenuIcon,
.je-DropdownMenu .lm-Menu-itemIcon {
  display: none;
}

.jp-Dialog-content {
  border: 3px solid var(--je-slate-blue);
  border-radius: var(--je-dialog-round-corners);
  box-shadow: 3px 3px 3px rgb(0 0 0 / 25%);
  font-family: var(--je-font-family);
}

.jp-Dialog-body {
  color: var(--je-slate-blue);
  font-family: var(--je-font-family);
  font-size: calc(var(--je-scale) * 16px);
  line-height: 1.5;
}

.jp-Dialog-footer {
  justify-content: center;
}

.jp-Dialog-footerButtons {
  text-align: center;
  cursor: pointer;
}

.jp-Dialog {
  clip-path: rect(
    calc(var(--je-document-padding) + var(--je-toolbar-height) + var(--je-margin-below-toolbar))
      calc(100% - var(--je-document-padding)) calc(100% - var(--je-document-padding))
      calc(var(--je-document-padding) + var(--je-sidebar-width)) round var(--je-round-corners)
  );
}

.jp-Dialog-content .jp-Dialog-button {
  background: var(--je-slate-blue-gradient) !important;
  box-shadow: 0 1.5px 3px rgb(0 0 0 / 5%);
  border-radius: var(--je-dialog-round-corners);
  font-family: var(--je-font-family);
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
}

.jp-Dialog-header {
  color: var(--je-slate-blue);
  font-family: var(--je-font-family);
  font-weight: 600;
  text-align: center;
  justify-content: center;
}

.je-share-link {
  background: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  word-break: break-all;
  font-family: monospace;
}

.je-PageTitle {
  font-weight: 600;
  font-family: var(--je-font-family);
  font-size: calc(var(--je-scale) * 48px);
}

.je-PageTitle-icon > svg {
  height: calc(var(--je-scale) * 41px);
  margin-left: calc(var(--je-scale) * 30px);
  margin-right: calc(var(--je-scale) * 20px);
}

.jp-toastContainer {
  z-index: var(--je-toastify-z-index);
}

.jp-InputArea-prompt-indicator {
  left: 0;
  line-height: 25px;
}

.jp-InputArea-prompt-indicator::before {
  left: 0;
  line-height: 25px;
  top: 5px;
}

.jp-InputArea-prompt-run.je-cell-run-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%) scale(calc(var(--je-scale) * 2.5));
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}

/* Don't show run button on raw cells */
.jp-RawCell .jp-InputArea-prompt-run.je-cell-run-button {
  display: none;
}

.jp-Cell:hover:not(.jp-RawCell) .jp-InputArea-prompt-run.je-cell-run-button,
.jp-Cell.jp-mod-active:not(.jp-RawCell) .jp-InputArea-prompt-run.je-cell-run-button {
  opacity: 1;
}

/* Hide all dirty state indicators */
.jp-Cell.jp-mod-dirty .jp-Cell-inputCollapser,
.jp-InputCollapser.jp-Cell-inputCollapser,
.jp-OutputCollapser.jp-Cell-outputCollapser,
.jp-Collapser-child {
  display: none;
}

.jp-Notebook .jp-CodeCell:hover .jp-InputArea-prompt-indicator,
.jp-Notebook .jp-CodeCell.jp-mod-active .jp-InputArea-prompt-indicator,
.jp-Notebook .jp-CodeCell.jp-mod-selected .jp-InputArea-prompt-indicator,
.jp-Notebook .jp-CodeCell:hover .jp-InputPrompt > .jp-InputArea-prompt-indicator,
.jp-Notebook .jp-CodeCell.jp-mod-active .jp-InputPrompt > .jp-InputArea-prompt-indicator,
.jp-Notebook .jp-CodeCell.jp-mod-selected .jp-InputPrompt > .jp-InputArea-prompt-indicator {
  visibility: hidden;
}

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
  visibility: hidden;
}

.jp-Notebook .jp-Cell.jp-mod-active .jp-OutputPrompt {
  visibility: visible;
}

.jp-Cell.jp-mod-dirty::before {
  display: none;
}

.jp-Cell.jp-mod-dirty .jp-InputArea::before {
  display: none;
}

/* Hide the • (U+2022) character for dirty cells */
.jp-Cell.jp-mod-dirty .jp-InputPrompt.jp-InputArea-prompt::before {
  content: '';
}

.jp-InputArea {
  position: relative;
}

.jp-InputArea-editor {
  border-radius: var(--je-round-corners);
  padding: calc(var(--je-scale) * 5px);
}

/* Ensure markdown and raw cells have a height that's
consistent with code cells */
.jp-MarkdownCell .jp-InputArea,
.jp-RawCell .jp-InputArea {
  min-height: var(--je-cell-height);
}

.jp-CodeCell .jp-Cell-inputWrapper {
  min-height: var(--je-cell-height);
}

.jp-mod-focused .cm-placeholder {
  /* Hide placeholder when cell is clicked */
  visibility: hidden;
}

.cm-editor .cm-placeholder {
  color: #828282 !important;
  font-weight: 600;
}

.jp-MarkdownCell .jp-RenderedHTMLCommon,
.jp-MarkdownCell .jp-InputArea-editor {
  min-height: 32px;
  align-items: center;
}

.jp-SideBar {
  /* Override colors in sidebar */
  --jp-layout-color1: #e6e6e6;
  --jp-layout-color2: #fff;
  --jp-border-width: 0px;
}

.jp-SideBar.lm-TabBar {
  min-width: var(--je-sidebar-width);
  max-width: var(--je-sidebar-width);
}

.jp-SideBar .lm-TabBar-tab:first-of-type {
  margin-bottom: calc(var(--je-scale) * 20px);
}

.jp-SideBar .lm-TabBar-tabIcon > svg {
  width: initial;
  scale: var(--je-scale);
}

.jp-Toolbar {
  --jp-ui-font-color1: var(--je-slate-blue);
  --jp-ui-font-family: var(--je-font-family);
}

.jp-ToolbarButtonComponent-label {
  font-weight: 600;
}

.je-KernelSwitcherButton.jp-ToolbarButtonComponent::part(content) {
  gap: 4px;
  flex-direction: row-reverse;
}

.jp-cell-toolbar .jp-ToolbarButtonComponent {
  padding: calc(var(--je-scale) * 4px);
}

.jp-cell-toolbar .jp-ToolbarButtonComponent > svg {
  min-height: 25px;
  min-width: 21px;
}

/* Main area widget base styles */
.jp-MainAreaWidget > .jp-Toolbar {
  border-radius: var(--je-round-corners);
  min-height: var(--je-toolbar-height) !important;
}

.jp-MainAreaWidget > .jp-Toolbar .jp-ToolbarButtonComponent-label {
  font-size: calc(var(--je-scale) * 24px);
}

.jp-MainAreaWidget > .jp-Toolbar .jp-ToolbarButtonComponent > svg {
  height: initial;
  width: initial;
  scale: var(--je-scale);
}

.jp-MainAreaWidget > :not(.jp-Toolbar) {
  border-radius: var(--je-round-corners);
  margin-top: var(--je-margin-below-toolbar);
  background: white;
}

.jp-Notebook {
  --jp-code-font-size: calc(var(--je-scale) * 16px);
  --jp-cell-editor-background: #f7f7f7;
  --jp-cell-editor-border-color: #a7a9ac;
  --jp-border-width: calc(var(--je-scale) * 1px);
}

/* View Only header */
.je-ViewOnlyHeader {
  min-height: 40px;
  display: flex;
  align-items: center;
  background: var(--je-slate-blue);
}

.je-ViewOnlyHeader-content {
  color: white;
  font-family: var(--je-font-family);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 8px 16px;
  width: 100%;
}

.jp-MainAreaWidget > .je-ViewOnlyHeader-wrapper {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.je-ViewOnlyHeader-wrapper + .jp-Notebook {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.jp-NotebookPanel-toolbar.je-ViewOnlyNotebookToolbar {
  border: 3px solid var(--je-slate-blue) !important;
}

#jp-main-dock-panel[data-mode='single-document'] {
  padding: var(--je-document-padding) !important;
  background: var(--je-lilac);
}

#jp-main-dock-panel[data-mode='single-document'] .jp-MainAreaWidget {
  border-radius: var(--je-round-corners);
  background: transparent;
}

.jp-ToolbarButtonComponent.je-CreateCopyButton {
  background: var(--je-slate-blue-gradient);
  color: white;
  border-radius: var(--je-round-corners);
  font-family: var(--je-font-family);
  font-weight: 600;
  padding: 4px 12px;
  border: none;
  box-shadow: 1px 2px 0 #0000006f !important; /* pretty much convinced my browser is haunted */
}

.jp-ToolbarButtonComponent.je-CreateCopyButton:hover {
  background: #2c1f5c;
}

.je-LeaveDialog-note {
  font-family: var(--je-font-family);
  font-size: calc(var(--je-scale) * 16px);
  color: var(--je-slate-blue);
  text-align: center;
}

.je-LeaveDialog.jp-Dialog-body {
  order: 2;
}

/* we reserve space for the close button */
@supports selector(:has(*)) {
  .jp-Dialog-content:has(> .je-LeaveDialog.jp-Dialog-body) > .jp-Dialog-header {
    padding-right: 28px;
  }
}

.jp-Dialog.je-LeaveDialog-container .jp-Dialog-close-button,
.jp-Dialog-content.je-LeaveDialog-container .jp-Dialog-close-button {
  position: absolute;
  top: -16px;
  right: -8px;
  transform: scale(calc(var(--je-scale) * 1.5));
}

.jp-Dialog .jp-Dialog-close-button .jp-Icon {
  --jp-inverse-layout-color3: var(--je-slate-blue);
}

.je-NotFound {
  height: 100%;
  width: 100%;
  background: white;
  border-radius: var(--je-round-corners);
}

.je-NotFound-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}

.je-NotFound-content {
  font-family: var(--je-font-family);
  color: var(--je-slate-blue);
}

.je-NotFound-code {
  opacity: 0.5;
  margin-bottom: 12px;
  font-size: 48px;
  color: var(--je-slate-blue);
}

.je-NotFound-title {
  margin: 0 0 8px;
  font-weight: 700;
  color: var(--je-slate-blue);
}

.je-NotFound-message {
  margin: 0;
  opacity: 0.8;
  color: var(--je-slate-blue);
}
`, "",{"version":3,"sources":["webpack://./style/base.css"],"names":[],"mappings":"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","sourcesContent":["/*\n    See the JupyterLab Developer Guide for useful CSS Patterns:\n\n    https://jupyterlab.readthedocs.io/en/stable/developer/css.html\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');\n\n#jp-menu-panel,\n#jp-top-bar,\n#jp-top-panel,\n.jp-LabShell[data-shell-mode='single-document'] #jp-menu-panel,\n.jp-LabShell[data-shell-mode='single-document'] #jp-top-bar {\n  /* Hide the empty menu panel widget */\n  min-height: 0;\n  display: none;\n}\n\n:root {\n  --je-scale: 0.85;\n  --je-slate-blue: #412c88;\n  --je-round-corners: 12px;\n  --je-round-corners-filetiles: 6px;\n  --je-font-family: 'Inter', sans-serif;\n  --je-dialog-round-corners: 12px;\n  --je-cell-height: 40px;\n  --je-toastify-z-index: calc(var(--toastify-z-index) + 2);\n  --je-document-padding: calc(var(--je-scale) * 51px);\n  --je-sidebar-width: calc(var(--je-scale) * 110px);\n  --je-toolbar-height: calc(var(--je-scale) * 67px);\n  --je-margin-below-toolbar: calc(var(--je-scale) * 15px);\n  --je-lilac: #d8b8dc;\n  --je-border-color: #e6e6e6;\n  --je-slate-blue-gradient:\n    linear-gradient(90deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 20%) 100%), #4b3187;\n}\n\n.je-DownloadDropdownButton-menu,\n.je-KernelSwitcherDropdownButton-menu {\n  border-radius: 4px;\n  color: var(--je-slate-blue);\n  font-family: var(--je-font-family);\n  border-collapse: collapse;\n  border-color: var(--je-border-color);\n}\n\n.je-DownloadDropdownButton-menu .lm-Menu-item,\n.je-KernelSwitcherDropdownButton-menu .lm-Menu-item {\n  border-top: 1px solid var(--je-border-color);\n  cursor: pointer;\n}\n\n.je-DownloadDropdownButton-menu .lm-Menu-item:first-of-type,\n.je-KernelSwitcherDropdownButton-menu .lm-Menu-item:first-of-type {\n  border: 0;\n}\n\n.je-DropdownMenu {\n  font-size: calc(var(--je-scale) * 24px);\n  font-weight: 600;\n}\n\n.je-DropdownMenu .lm-Menu-itemLabel {\n  padding: 7px 10px;\n}\n\n.je-DropdownMenu .lm-Menu-itemSubmenuIcon,\n.je-DropdownMenu .lm-Menu-itemIcon {\n  display: none;\n}\n\n.jp-Dialog-content {\n  border: 3px solid var(--je-slate-blue);\n  border-radius: var(--je-dialog-round-corners);\n  box-shadow: 3px 3px 3px rgb(0 0 0 / 25%);\n  font-family: var(--je-font-family);\n}\n\n.jp-Dialog-body {\n  color: var(--je-slate-blue);\n  font-family: var(--je-font-family);\n  font-size: calc(var(--je-scale) * 16px);\n  line-height: 1.5;\n}\n\n.jp-Dialog-footer {\n  justify-content: center;\n}\n\n.jp-Dialog-footerButtons {\n  text-align: center;\n  cursor: pointer;\n}\n\n.jp-Dialog {\n  clip-path: rect(\n    calc(var(--je-document-padding) + var(--je-toolbar-height) + var(--je-margin-below-toolbar))\n      calc(100% - var(--je-document-padding)) calc(100% - var(--je-document-padding))\n      calc(var(--je-document-padding) + var(--je-sidebar-width)) round var(--je-round-corners)\n  );\n}\n\n.jp-Dialog-content .jp-Dialog-button {\n  background: var(--je-slate-blue-gradient) !important;\n  box-shadow: 0 1.5px 3px rgb(0 0 0 / 5%);\n  border-radius: var(--je-dialog-round-corners);\n  font-family: var(--je-font-family);\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  cursor: pointer;\n}\n\n.jp-Dialog-header {\n  color: var(--je-slate-blue);\n  font-family: var(--je-font-family);\n  font-weight: 600;\n  text-align: center;\n  justify-content: center;\n}\n\n.je-share-link {\n  background: #f0f0f0;\n  padding: 10px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n  word-break: break-all;\n  font-family: monospace;\n}\n\n.je-PageTitle {\n  font-weight: 600;\n  font-family: var(--je-font-family);\n  font-size: calc(var(--je-scale) * 48px);\n}\n\n.je-PageTitle-icon > svg {\n  height: calc(var(--je-scale) * 41px);\n  margin-left: calc(var(--je-scale) * 30px);\n  margin-right: calc(var(--je-scale) * 20px);\n}\n\n.jp-toastContainer {\n  z-index: var(--je-toastify-z-index);\n}\n\n.jp-InputArea-prompt-indicator {\n  left: 0;\n  line-height: 25px;\n}\n\n.jp-InputArea-prompt-indicator::before {\n  left: 0;\n  line-height: 25px;\n  top: 5px;\n}\n\n.jp-InputArea-prompt-run.je-cell-run-button {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%) scale(calc(var(--je-scale) * 2.5));\n  opacity: 0;\n  transition: opacity 0.15s ease-in-out;\n}\n\n/* Don't show run button on raw cells */\n.jp-RawCell .jp-InputArea-prompt-run.je-cell-run-button {\n  display: none;\n}\n\n.jp-Cell:hover:not(.jp-RawCell) .jp-InputArea-prompt-run.je-cell-run-button,\n.jp-Cell.jp-mod-active:not(.jp-RawCell) .jp-InputArea-prompt-run.je-cell-run-button {\n  opacity: 1;\n}\n\n/* Hide all dirty state indicators */\n.jp-Cell.jp-mod-dirty .jp-Cell-inputCollapser,\n.jp-InputCollapser.jp-Cell-inputCollapser,\n.jp-OutputCollapser.jp-Cell-outputCollapser,\n.jp-Collapser-child {\n  display: none;\n}\n\n.jp-Notebook .jp-CodeCell:hover .jp-InputArea-prompt-indicator,\n.jp-Notebook .jp-CodeCell.jp-mod-active .jp-InputArea-prompt-indicator,\n.jp-Notebook .jp-CodeCell.jp-mod-selected .jp-InputArea-prompt-indicator,\n.jp-Notebook .jp-CodeCell:hover .jp-InputPrompt > .jp-InputArea-prompt-indicator,\n.jp-Notebook .jp-CodeCell.jp-mod-active .jp-InputPrompt > .jp-InputArea-prompt-indicator,\n.jp-Notebook .jp-CodeCell.jp-mod-selected .jp-InputPrompt > .jp-InputArea-prompt-indicator {\n  visibility: hidden;\n}\n\n.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {\n  visibility: hidden;\n}\n\n.jp-Notebook .jp-Cell.jp-mod-active .jp-OutputPrompt {\n  visibility: visible;\n}\n\n.jp-Cell.jp-mod-dirty::before {\n  display: none;\n}\n\n.jp-Cell.jp-mod-dirty .jp-InputArea::before {\n  display: none;\n}\n\n/* Hide the • (U+2022) character for dirty cells */\n.jp-Cell.jp-mod-dirty .jp-InputPrompt.jp-InputArea-prompt::before {\n  content: '';\n}\n\n.jp-InputArea {\n  position: relative;\n}\n\n.jp-InputArea-editor {\n  border-radius: var(--je-round-corners);\n  padding: calc(var(--je-scale) * 5px);\n}\n\n/* Ensure markdown and raw cells have a height that's\nconsistent with code cells */\n.jp-MarkdownCell .jp-InputArea,\n.jp-RawCell .jp-InputArea {\n  min-height: var(--je-cell-height);\n}\n\n.jp-CodeCell .jp-Cell-inputWrapper {\n  min-height: var(--je-cell-height);\n}\n\n.jp-mod-focused .cm-placeholder {\n  /* Hide placeholder when cell is clicked */\n  visibility: hidden;\n}\n\n.cm-editor .cm-placeholder {\n  color: #828282 !important;\n  font-weight: 600;\n}\n\n.jp-MarkdownCell .jp-RenderedHTMLCommon,\n.jp-MarkdownCell .jp-InputArea-editor {\n  min-height: 32px;\n  align-items: center;\n}\n\n.jp-SideBar {\n  /* Override colors in sidebar */\n  --jp-layout-color1: #e6e6e6;\n  --jp-layout-color2: #fff;\n  --jp-border-width: 0px;\n}\n\n.jp-SideBar.lm-TabBar {\n  min-width: var(--je-sidebar-width);\n  max-width: var(--je-sidebar-width);\n}\n\n.jp-SideBar .lm-TabBar-tab:first-of-type {\n  margin-bottom: calc(var(--je-scale) * 20px);\n}\n\n.jp-SideBar .lm-TabBar-tabIcon > svg {\n  width: initial;\n  scale: var(--je-scale);\n}\n\n.jp-Toolbar {\n  --jp-ui-font-color1: var(--je-slate-blue);\n  --jp-ui-font-family: var(--je-font-family);\n}\n\n.jp-ToolbarButtonComponent-label {\n  font-weight: 600;\n}\n\n.je-KernelSwitcherButton.jp-ToolbarButtonComponent::part(content) {\n  gap: 4px;\n  flex-direction: row-reverse;\n}\n\n.jp-cell-toolbar .jp-ToolbarButtonComponent {\n  padding: calc(var(--je-scale) * 4px);\n}\n\n.jp-cell-toolbar .jp-ToolbarButtonComponent > svg {\n  min-height: 25px;\n  min-width: 21px;\n}\n\n/* Main area widget base styles */\n.jp-MainAreaWidget > .jp-Toolbar {\n  border-radius: var(--je-round-corners);\n  min-height: var(--je-toolbar-height) !important;\n}\n\n.jp-MainAreaWidget > .jp-Toolbar .jp-ToolbarButtonComponent-label {\n  font-size: calc(var(--je-scale) * 24px);\n}\n\n.jp-MainAreaWidget > .jp-Toolbar .jp-ToolbarButtonComponent > svg {\n  height: initial;\n  width: initial;\n  scale: var(--je-scale);\n}\n\n.jp-MainAreaWidget > :not(.jp-Toolbar) {\n  border-radius: var(--je-round-corners);\n  margin-top: var(--je-margin-below-toolbar);\n  background: white;\n}\n\n.jp-Notebook {\n  --jp-code-font-size: calc(var(--je-scale) * 16px);\n  --jp-cell-editor-background: #f7f7f7;\n  --jp-cell-editor-border-color: #a7a9ac;\n  --jp-border-width: calc(var(--je-scale) * 1px);\n}\n\n/* View Only header */\n.je-ViewOnlyHeader {\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  background: var(--je-slate-blue);\n}\n\n.je-ViewOnlyHeader-content {\n  color: white;\n  font-family: var(--je-font-family);\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px 16px;\n  width: 100%;\n}\n\n.jp-MainAreaWidget > .je-ViewOnlyHeader-wrapper {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.je-ViewOnlyHeader-wrapper + .jp-Notebook {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.jp-NotebookPanel-toolbar.je-ViewOnlyNotebookToolbar {\n  border: 3px solid var(--je-slate-blue) !important;\n}\n\n#jp-main-dock-panel[data-mode='single-document'] {\n  padding: var(--je-document-padding) !important;\n  background: var(--je-lilac);\n}\n\n#jp-main-dock-panel[data-mode='single-document'] .jp-MainAreaWidget {\n  border-radius: var(--je-round-corners);\n  background: transparent;\n}\n\n.jp-ToolbarButtonComponent.je-CreateCopyButton {\n  background: var(--je-slate-blue-gradient);\n  color: white;\n  border-radius: var(--je-round-corners);\n  font-family: var(--je-font-family);\n  font-weight: 600;\n  padding: 4px 12px;\n  border: none;\n  box-shadow: 1px 2px 0 #0000006f !important; /* pretty much convinced my browser is haunted */\n}\n\n.jp-ToolbarButtonComponent.je-CreateCopyButton:hover {\n  background: #2c1f5c;\n}\n\n.je-LeaveDialog-note {\n  font-family: var(--je-font-family);\n  font-size: calc(var(--je-scale) * 16px);\n  color: var(--je-slate-blue);\n  text-align: center;\n}\n\n.je-LeaveDialog.jp-Dialog-body {\n  order: 2;\n}\n\n/* we reserve space for the close button */\n@supports selector(:has(*)) {\n  .jp-Dialog-content:has(> .je-LeaveDialog.jp-Dialog-body) > .jp-Dialog-header {\n    padding-right: 28px;\n  }\n}\n\n.jp-Dialog.je-LeaveDialog-container .jp-Dialog-close-button,\n.jp-Dialog-content.je-LeaveDialog-container .jp-Dialog-close-button {\n  position: absolute;\n  top: -16px;\n  right: -8px;\n  transform: scale(calc(var(--je-scale) * 1.5));\n}\n\n.jp-Dialog .jp-Dialog-close-button .jp-Icon {\n  --jp-inverse-layout-color3: var(--je-slate-blue);\n}\n\n.je-NotFound {\n  height: 100%;\n  width: 100%;\n  background: white;\n  border-radius: var(--je-round-corners);\n}\n\n.je-NotFound-container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 24px;\n}\n\n.je-NotFound-content {\n  font-family: var(--je-font-family);\n  color: var(--je-slate-blue);\n}\n\n.je-NotFound-code {\n  opacity: 0.5;\n  margin-bottom: 12px;\n  font-size: 48px;\n  color: var(--je-slate-blue);\n}\n\n.je-NotFound-title {\n  margin: 0 0 8px;\n  font-weight: 700;\n  color: var(--je-slate-blue);\n}\n\n.je-NotFound-message {\n  margin: 0;\n  opacity: 0.8;\n  color: var(--je-slate-blue);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/files-widget.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/files-widget.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Styling for the Files area */

.je-Files {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: var(--je-font-family);
}

.je-FilesApp {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  overflow: hidden;
}

.je-FilesApp-content {
  flex: 1;
  overflow: auto;
}

.je-FilesApp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 16px;
  padding: 16px 0;
}

@media (width <= 768px) {
  .je-FilesApp-grid {
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 12px;
  }
}

.je-FileTile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: var(--je-font-family);
  position: relative;
}

.je-FileTile-box {
  width: 100px;
  height: 100px;
  border: calc(var(--je-scale) * 3px) solid transparent;
  border-radius: var(--je-round-corners);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 8px;
}

.je-FileTile-box-addNew {
  border-color: var(--je-slate-blue);
  cursor: pointer;
}

.je-FileTile-box-addNew:hover {
  background: rgb(65 44 136 / 8%);
}

.je-FileTile-box svg {
  width: 48px;
  height: 48px;

  /* Ensure the file glyph sits below overlay buttons */
  position: relative;
  z-index: 0;
}

.je-FileTile-label {
  font-size: calc(var(--je-scale) * 20px);
  font-weight: 500;
  color: var(--je-slate-blue);
  word-break: break-word;
}

.je-FileTile-label-rename {
  width: 100%;
  z-index: 1;
  box-sizing: content-box;
  padding: 8px 10px;

  /* 8px of padding + 2px of border */
  margin-top: -10px;
  border-radius: var(--je-dialog-round-corners);
  border: 2px solid var(--je-border-color);
  outline: none;
  transition:
    border-color 120ms ease,
    box-shadow 120ms ease,
    background 120ms ease;
  background: #fff;
}

.je-FileTile-label-rename:hover {
  border-color: color-mix(in srgb, var(--je-slate-blue) 40%, var(--je-border-color));
}

.je-FileTile-label-rename:focus {
  border-color: var(--je-slate-blue);
  box-shadow: 0 0 0 3px rgb(65 44 136 / 15%);
  background: rgb(65 44 136 / 3%);
}

.je-FileTile-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgb(65 44 136 / 30%);
  border-top: 2px solid var(--je-slate-blue);
  border-radius: 50%;
  animation: je-spin 1s linear infinite;
}

@keyframes je-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* Styling for the warning banner */

.je-WarningBanner {
  background: var(--je-slate-blue);
  color: white;
  padding: calc(var(--je-scale) * 10px) calc(var(--je-scale) * 40px);
  margin: calc(var(--je-scale) * 20px) 0;
  border-radius: var(--je-round-corners);
  font-size: calc(var(--je-scale) * 20px);
  line-height: 1.5;
}

/* Styling for the ellipsis menu on each file tile. */

.je-FileTile-box-hasMenu {
  position: relative;
}

/* When the dropdown is opened, we raise the z-index of the tile to ensure
that the dropdown is not clipped by neighbouring tiles. */
.je-FileTile:has(.je-FileMenu-dropdown) {
  z-index: 1000;
  position: relative;
}

.je-FileMenu {
  position: absolute;
  top: 2px;
  right: 6px;
  z-index: 2;
}

.je-FileMenu-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  border-radius: var(--je-round-corners-filetiles);
  transition: background 120ms ease;
}

.je-FileMenu-trigger:hover {
  background: rgb(255 140 0 / 15%);
}

.je-FileMenu-trigger:active {
  background: rgb(255 140 0 / 25%);
}

.je-FileMenu-trigger svg {
  width: 20px;
  height: 20px;
  display: block;
  color: #ff8c00;
}

/* Make the dropdown triangle smaller than the ellipsis. We scale to 75%. */
.je-FileMenu-trigger svg[data-icon='everywhere:dropdown-triangle'] {
  width: 16px;
  height: 16px;
}

.je-FileMenu-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: white;
  border: 2px solid var(--je-slate-blue);
  border-radius: var(--je-round-corners);
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
  min-width: 120px;
  overflow: hidden;
  z-index: 3;
}

.je-FileMenu-item {
  display: block;
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: white;
  color: var(--je-slate-blue);
  font-size: calc(var(--je-scale) * 18px);
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background 120ms ease;
  font-family: var(--je-font-family);
  white-space: nowrap;
  box-sizing: border-box;
}

/* Positioning for file menu dropdowns, based on the grid layout */

.je-FileTile[data-row='0'] .je-FileMenu-dropdown,
.je-FileTile[data-row='1'] .je-FileMenu-dropdown {
  top: 100%;
  bottom: auto;
  margin-top: 4px;
  margin-bottom: 0;
}

.je-FileTile[data-col-right='true'] .je-FileMenu-dropdown {
  left: auto;
  right: 0;
}

.je-FileTile[data-col-left='true'] .je-FileMenu-dropdown {
  left: 0;
  right: auto;
}

.je-FileMenu-item:hover,
.je-FileMenu-item:focus {
  background: rgb(65 44 136 / 8%);
}

.je-FileMenu-item:active {
  background: rgb(65 44 136 / 15%);
}
`, "",{"version":3,"sources":["webpack://./style/files-widget.css"],"names":[],"mappings":"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","sourcesContent":["/* Styling for the Files area */\n\n.je-Files {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family: var(--je-font-family);\n}\n\n.je-FilesApp {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  gap: 16px;\n  overflow: hidden;\n}\n\n.je-FilesApp-content {\n  flex: 1;\n  overflow: auto;\n}\n\n.je-FilesApp-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n  gap: 16px;\n  padding: 16px 0;\n}\n\n@media (width <= 768px) {\n  .je-FilesApp-grid {\n    grid-template-columns: repeat(auto-fill, 100px);\n    gap: 12px;\n  }\n}\n\n.je-FileTile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  font-family: var(--je-font-family);\n  position: relative;\n}\n\n.je-FileTile-box {\n  width: 100px;\n  height: 100px;\n  border: calc(var(--je-scale) * 3px) solid transparent;\n  border-radius: var(--je-round-corners);\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n  padding: 16px;\n  margin-bottom: 8px;\n}\n\n.je-FileTile-box-addNew {\n  border-color: var(--je-slate-blue);\n  cursor: pointer;\n}\n\n.je-FileTile-box-addNew:hover {\n  background: rgb(65 44 136 / 8%);\n}\n\n.je-FileTile-box svg {\n  width: 48px;\n  height: 48px;\n\n  /* Ensure the file glyph sits below overlay buttons */\n  position: relative;\n  z-index: 0;\n}\n\n.je-FileTile-label {\n  font-size: calc(var(--je-scale) * 20px);\n  font-weight: 500;\n  color: var(--je-slate-blue);\n  word-break: break-word;\n}\n\n.je-FileTile-label-rename {\n  width: 100%;\n  z-index: 1;\n  box-sizing: content-box;\n  padding: 8px 10px;\n\n  /* 8px of padding + 2px of border */\n  margin-top: -10px;\n  border-radius: var(--je-dialog-round-corners);\n  border: 2px solid var(--je-border-color);\n  outline: none;\n  transition:\n    border-color 120ms ease,\n    box-shadow 120ms ease,\n    background 120ms ease;\n  background: #fff;\n}\n\n.je-FileTile-label-rename:hover {\n  border-color: color-mix(in srgb, var(--je-slate-blue) 40%, var(--je-border-color));\n}\n\n.je-FileTile-label-rename:focus {\n  border-color: var(--je-slate-blue);\n  box-shadow: 0 0 0 3px rgb(65 44 136 / 15%);\n  background: rgb(65 44 136 / 3%);\n}\n\n.je-FileTile-spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgb(65 44 136 / 30%);\n  border-top: 2px solid var(--je-slate-blue);\n  border-radius: 50%;\n  animation: je-spin 1s linear infinite;\n}\n\n@keyframes je-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Styling for the warning banner */\n\n.je-WarningBanner {\n  background: var(--je-slate-blue);\n  color: white;\n  padding: calc(var(--je-scale) * 10px) calc(var(--je-scale) * 40px);\n  margin: calc(var(--je-scale) * 20px) 0;\n  border-radius: var(--je-round-corners);\n  font-size: calc(var(--je-scale) * 20px);\n  line-height: 1.5;\n}\n\n/* Styling for the ellipsis menu on each file tile. */\n\n.je-FileTile-box-hasMenu {\n  position: relative;\n}\n\n/* When the dropdown is opened, we raise the z-index of the tile to ensure\nthat the dropdown is not clipped by neighbouring tiles. */\n.je-FileTile:has(.je-FileMenu-dropdown) {\n  z-index: 1000;\n  position: relative;\n}\n\n.je-FileMenu {\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  z-index: 2;\n}\n\n.je-FileMenu-trigger {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  border-radius: var(--je-round-corners-filetiles);\n  transition: background 120ms ease;\n}\n\n.je-FileMenu-trigger:hover {\n  background: rgb(255 140 0 / 15%);\n}\n\n.je-FileMenu-trigger:active {\n  background: rgb(255 140 0 / 25%);\n}\n\n.je-FileMenu-trigger svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n  color: #ff8c00;\n}\n\n/* Make the dropdown triangle smaller than the ellipsis. We scale to 75%. */\n.je-FileMenu-trigger svg[data-icon='everywhere:dropdown-triangle'] {\n  width: 16px;\n  height: 16px;\n}\n\n.je-FileMenu-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 4px;\n  background: white;\n  border: 2px solid var(--je-slate-blue);\n  border-radius: var(--je-round-corners);\n  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);\n  min-width: 120px;\n  overflow: hidden;\n  z-index: 3;\n}\n\n.je-FileMenu-item {\n  display: block;\n  width: 100%;\n  padding: 10px 16px;\n  border: none;\n  background: white;\n  color: var(--je-slate-blue);\n  font-size: calc(var(--je-scale) * 18px);\n  font-weight: 500;\n  text-align: left;\n  cursor: pointer;\n  transition: background 120ms ease;\n  font-family: var(--je-font-family);\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n\n/* Positioning for file menu dropdowns, based on the grid layout */\n\n.je-FileTile[data-row='0'] .je-FileMenu-dropdown,\n.je-FileTile[data-row='1'] .je-FileMenu-dropdown {\n  top: 100%;\n  bottom: auto;\n  margin-top: 4px;\n  margin-bottom: 0;\n}\n\n.je-FileTile[data-col-right='true'] .je-FileMenu-dropdown {\n  left: auto;\n  right: 0;\n}\n\n.je-FileTile[data-col-left='true'] .je-FileMenu-dropdown {\n  left: 0;\n  right: auto;\n}\n\n.je-FileMenu-item:hover,\n.je-FileMenu-item:focus {\n  background: rgb(65 44 136 / 8%);\n}\n\n.je-FileMenu-item:active {\n  background: rgb(65 44 136 / 15%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/help-center.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/help-center.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lm-TabBar-tab[title='Help Centre'] {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.je-Help {
  padding: calc(var(--je-scale) * 5px) calc(var(--je-scale) * 50px);
  font-family: var(--je-font-family);
  color: var(--je-slate-blue);
  font-size: calc(var(--je-scale) * 24px);
  text-shadow: 0 0 1px #00000040;
  line-height: 150%;
  overflow: scroll;
}

.je-Help h3 {
  margin-top: calc(var(--je-scale) * 25px);
  margin-bottom: calc(var(--je-scale) * 5px);
  font-size: calc(var(--je-scale) * 32px);
}

.je-Help h4 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 100%;
}

.je-Help ol {
  list-style-type: lower-roman;
}

.je-Help ol > li::marker {
  font-weight: bold;
}

.je-Help a {
  text-decoration: underline;
}
`, "",{"version":3,"sources":["webpack://./style/help-center.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,iEAAiE;EACjE,kCAAkC;EAClC,2BAA2B;EAC3B,uCAAuC;EACvC,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;EACxC,0CAA0C;EAC1C,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":[".lm-TabBar-tab[title='Help Centre'] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.je-Help {\n  padding: calc(var(--je-scale) * 5px) calc(var(--je-scale) * 50px);\n  font-family: var(--je-font-family);\n  color: var(--je-slate-blue);\n  font-size: calc(var(--je-scale) * 24px);\n  text-shadow: 0 0 1px #00000040;\n  line-height: 150%;\n  overflow: scroll;\n}\n\n.je-Help h3 {\n  margin-top: calc(var(--je-scale) * 25px);\n  margin-bottom: calc(var(--je-scale) * 5px);\n  font-size: calc(var(--je-scale) * 32px);\n}\n\n.je-Help h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 100%;\n}\n\n.je-Help ol {\n  list-style-type: lower-roman;\n}\n\n.je-Help ol > li::marker {\n  font-weight: bold;\n}\n\n.je-Help a {\n  text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./style/base.css":
/*!************************!*\
  !*** ./style/base.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./style/base.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./style/files-widget.css":
/*!********************************!*\
  !*** ./style/files-widget.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_files_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./files-widget.css */ "./node_modules/css-loader/dist/cjs.js!./style/files-widget.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_files_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_files_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_files_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_files_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./style/help-center.css":
/*!*******************************!*\
  !*** ./style/help-center.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_help_center_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./help-center.css */ "./node_modules/css-loader/dist/cjs.js!./style/help-center.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_help_center_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_help_center_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_help_center_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_help_center_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./style/index.js":
/*!************************!*\
  !*** ./style/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.css */ "./style/base.css");
/* harmony import */ var _files_widget_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files-widget.css */ "./style/files-widget.css");
/* harmony import */ var _help_center_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-center.css */ "./style/help-center.css");





/***/ })

}]);
//# sourceMappingURL=style_index_js.62a9a3cdecab0a4521fb.js.map