"use strict";
(self["webpackChunkjupytereverywhere"] = self["webpackChunkjupytereverywhere"] || []).push([["lib_index_js"],{

/***/ "./lib/commands.js":
/*!*************************!*\
  !*** ./lib/commands.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Commands: () => (/* binding */ Commands)
/* harmony export */ });
var Commands;
(function (Commands) {
    Commands.openCompetitions = 'jupytereverywhere:open-competitions';
    Commands.openFiles = 'jupytereverywhere:open-files';
    Commands.routeFiles = 'jupytereverywhere:files-route';
    Commands.openNotFound = 'jupytereverywhere:open-not-found';
    Commands.routeNotFound = 'jupytereverywhere:not-found-route';
    Commands.openHelp = 'jupytereverywhere:open-help';
    Commands.downloadNotebookCommand = 'jupytereverywhere:download-notebook';
    Commands.downloadPDFCommand = 'jupytereverywhere:download-pdf';
    Commands.saveAndShareNotebookCommand = 'jupytereverywhere:save-and-share';
    Commands.shareNotebookCommand = 'jupytereverywhere:share-notebook';
    Commands.createCopyNotebookCommand = 'jupytereverywhere:create-copy-notebook';
    Commands.restartMemoryCommand = 'jupytereverywhere:restart-memory';
    Commands.restartMemoryAndRunAllCommand = 'jupytereverywhere:restart-and-run-all';
})(Commands || (Commands = {}));


/***/ }),

/***/ "./lib/dialogs.js":
/*!************************!*\
  !*** ./lib/dialogs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sessionDialogs: () => (/* binding */ sessionDialogs)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__);


class JESessionContextDialogs extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.SessionContextDialogs {
    async restart(sessionContext) {
        const result = await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showDialog)({
            title: 'Would you like to restart the notebook’s memory?',
            buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.cancelButton({ label: 'Cancel' }), _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.okButton({ label: 'Restart' })]
        });
        if (result.button.accept) {
            try {
                await sessionContext.restartKernel();
                return true;
            }
            catch (err) {
                console.error('Memory restart failed', err);
                return false;
            }
        }
        return false;
    }
}
const sessionDialogs = {
    id: '@jupyter-everywhere/apputils-extension:sessionDialogs',
    provides: _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ISessionContextDialogs,
    optional: [_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.ITranslator],
    autoStart: true,
    activate: async (app, translator) => {
        return new JESessionContextDialogs({
            translator: translator !== null && translator !== void 0 ? translator : _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.nullTranslator
        });
    }
};


/***/ }),

/***/ "./lib/icons.js":
/*!**********************!*\
  !*** ./lib/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EverywhereIcons: () => (/* binding */ EverywhereIcons)
/* harmony export */ });
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_icons_save_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/icons/save.svg */ "./style/icons/save.svg");
/* harmony import */ var _style_icons_folder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/icons/folder.svg */ "./style/icons/folder.svg");
/* harmony import */ var _style_icons_folderSidebar_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/icons/folderSidebar.svg */ "./style/icons/folderSidebar.svg");
/* harmony import */ var _style_icons_addFile_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/icons/addFile.svg */ "./style/icons/addFile.svg");
/* harmony import */ var _style_icons_add_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/icons/add.svg */ "./style/icons/add.svg");
/* harmony import */ var _style_icons_link_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/icons/link.svg */ "./style/icons/link.svg");
/* harmony import */ var _style_icons_competition_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/icons/competition.svg */ "./style/icons/competition.svg");
/* harmony import */ var _style_icons_notebook_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/icons/notebook.svg */ "./style/icons/notebook.svg");
/* harmony import */ var _style_icons_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/icons/logo.svg */ "./style/icons/logo.svg");
/* harmony import */ var _style_icons_je_octopus_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style/icons/je-octopus.svg */ "./style/icons/je-octopus.svg");
/* harmony import */ var _style_icons_run_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style/icons/run.svg */ "./style/icons/run.svg");
/* harmony import */ var _style_icons_run_cell_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../style/icons/run-cell.svg */ "./style/icons/run-cell.svg");
/* harmony import */ var _style_icons_refresh_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../style/icons/refresh.svg */ "./style/icons/refresh.svg");
/* harmony import */ var _style_icons_stop_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../style/icons/stop.svg */ "./style/icons/stop.svg");
/* harmony import */ var _style_icons_fast_forward_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../style/icons/fast-forward.svg */ "./style/icons/fast-forward.svg");
/* harmony import */ var _style_icons_ellipsis_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../style/icons/ellipsis.svg */ "./style/icons/ellipsis.svg");
/* harmony import */ var _style_icons_download_caret_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../style/icons/download-caret.svg */ "./style/icons/download-caret.svg");
/* harmony import */ var _style_icons_kernel_caret_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../style/icons/kernel-caret.svg */ "./style/icons/kernel-caret.svg");
/* harmony import */ var _style_icons_dropdown_triangle_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../style/icons/dropdown-triangle.svg */ "./style/icons/dropdown-triangle.svg");
/* harmony import */ var _style_icons_image_icon_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../style/icons/image-icon.svg */ "./style/icons/image-icon.svg");
/* harmony import */ var _style_icons_file_icon_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../style/icons/file-icon.svg */ "./style/icons/file-icon.svg");
/* harmony import */ var _style_icons_help_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../style/icons/help.svg */ "./style/icons/help.svg");























var EverywhereIcons;
(function (EverywhereIcons) {
    // Overwrite Jupyter default icons
    EverywhereIcons.save = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.saveIcon.name,
        svgstr: _style_icons_save_svg__WEBPACK_IMPORTED_MODULE_1__
    });
    EverywhereIcons.folder = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.folderIcon.name,
        svgstr: _style_icons_folder_svg__WEBPACK_IMPORTED_MODULE_2__
    });
    EverywhereIcons.add = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.addIcon.name,
        svgstr: _style_icons_add_svg__WEBPACK_IMPORTED_MODULE_5__
    });
    EverywhereIcons.link = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.linkIcon.name,
        svgstr: _style_icons_link_svg__WEBPACK_IMPORTED_MODULE_6__
    });
    EverywhereIcons.notebook = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.notebookIcon.name,
        svgstr: _style_icons_notebook_svg__WEBPACK_IMPORTED_MODULE_8__
    });
    EverywhereIcons.run = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.runIcon.name,
        svgstr: _style_icons_run_svg__WEBPACK_IMPORTED_MODULE_11__
    });
    EverywhereIcons.refresh = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.refreshIcon.name,
        svgstr: _style_icons_refresh_svg__WEBPACK_IMPORTED_MODULE_13__
    });
    EverywhereIcons.stop = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.stopIcon.name,
        svgstr: _style_icons_stop_svg__WEBPACK_IMPORTED_MODULE_14__
    });
    EverywhereIcons.fastForward = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.fastForwardIcon.name,
        svgstr: _style_icons_fast_forward_svg__WEBPACK_IMPORTED_MODULE_15__
    });
    EverywhereIcons.ellipsis = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:ellipsis',
        svgstr: _style_icons_ellipsis_svg__WEBPACK_IMPORTED_MODULE_16__
    });
    // Add custom icons
    EverywhereIcons.folderSidebar = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:folder-sidebar',
        svgstr: _style_icons_folderSidebar_svg__WEBPACK_IMPORTED_MODULE_3__
    });
    EverywhereIcons.help = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:help',
        svgstr: _style_icons_help_svg__WEBPACK_IMPORTED_MODULE_22__
    });
    EverywhereIcons.addFile = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:add-file',
        svgstr: _style_icons_addFile_svg__WEBPACK_IMPORTED_MODULE_4__
    });
    EverywhereIcons.competition = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:competition',
        svgstr: _style_icons_competition_svg__WEBPACK_IMPORTED_MODULE_7__
    });
    EverywhereIcons.logo = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:logo',
        svgstr: _style_icons_logo_svg__WEBPACK_IMPORTED_MODULE_9__
    });
    EverywhereIcons.octopus = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:octopus',
        svgstr: _style_icons_je_octopus_svg__WEBPACK_IMPORTED_MODULE_10__
    });
    EverywhereIcons.runCell = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:run-cell',
        svgstr: _style_icons_run_cell_svg__WEBPACK_IMPORTED_MODULE_12__
    });
    EverywhereIcons.downloadCaret = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:download-caret',
        svgstr: _style_icons_download_caret_svg__WEBPACK_IMPORTED_MODULE_17__
    });
    EverywhereIcons.kernelCaret = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:kernel-caret',
        svgstr: _style_icons_kernel_caret_svg__WEBPACK_IMPORTED_MODULE_18__
    });
    EverywhereIcons.dropdownTriangle = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:dropdown-triangle',
        svgstr: _style_icons_dropdown_triangle_svg__WEBPACK_IMPORTED_MODULE_19__
    });
    EverywhereIcons.imageIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:image-icon',
        svgstr: _style_icons_image_icon_svg__WEBPACK_IMPORTED_MODULE_20__
    });
    EverywhereIcons.fileIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
        name: 'everywhere:file-icon',
        svgstr: _style_icons_file_icon_svg__WEBPACK_IMPORTED_MODULE_21__
    });
})(EverywhereIcons || (EverywhereIcons = {}));


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/statedb */ "webpack/sharing/consume/default/@jupyterlab/statedb");
/* harmony import */ var _jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./lib/sidebar.js");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sharing-service */ "./lib/sharing-service.js");
/* harmony import */ var _ui_components_share_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-components/share-dialog */ "./lib/ui-components/share-dialog.js");
/* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pdf */ "./lib/pdf.js");
/* harmony import */ var _pages_files__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/files */ "./lib/pages/files.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes */ "./lib/routes.js");
/* harmony import */ var _pages_not_found__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/not-found */ "./lib/pages/not-found.js");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./commands */ "./lib/commands.js");
/* harmony import */ var _pages_notebook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/notebook */ "./lib/pages/notebook.js");
/* harmony import */ var _pages_help__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/help */ "./lib/pages/help.js");
/* harmony import */ var _notebook_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notebook-utils */ "./lib/notebook-utils.js");
/* harmony import */ var _view_only__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-only */ "./lib/view-only.js");
/* harmony import */ var _kernels__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./kernels */ "./lib/kernels.js");
/* harmony import */ var _single_mode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./single-mode */ "./lib/single-mode.js");
/* harmony import */ var _notebook_factory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notebook-factory */ "./lib/notebook-factory.js");
/* harmony import */ var _placeholders__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./placeholders */ "./lib/placeholders.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icons */ "./lib/icons.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialogs */ "./lib/dialogs.js");












// import { competitions } from './pages/competitions';










/**
 * Generate a shareable URL for the currently active notebook.
 * @param notebookID – The ID of the notebook to share (can be readable_id or sharedId).
 * @returns A URL string that points to the notebook with the given notebookID.
 */
function generateShareURL(notebookID) {
    const currentUrl = new URL(window.location.href);
    const baseUrl = `${currentUrl.protocol}//${currentUrl.host}${currentUrl.pathname}`;
    return `${baseUrl}?notebook=${notebookID}`;
}
/**
 * Sets or updates the 'notebook' query parameter in the current URL to the given notebookID.
 * If the parameter already exists with the same value, no change is made.
 * @param notebookID - The ID of the notebook to set in the URL.
 */
function setNotebookParamInUrl(notebookID) {
    const url = new URL(window.location.href);
    if (url.searchParams.get('notebook') !== notebookID) {
        url.searchParams.set('notebook', notebookID);
        window.history.replaceState({}, '', url.toString());
    }
}
const manuallySharing = new WeakSet();
/**
 * Show a dialog with a shareable link for the notebook.
 * @param sharingService - The sharing service instance to use for generating the shareable link.
 * @param notebookContent - The content of the notebook to share, from which we extract the ID.
 */
async function showShareDialog(sharingService, notebookContent) {
    var _a, _b;
    // Grab the readable ID, or fall back to the UUID.
    const readableID = (_a = notebookContent.metadata) === null || _a === void 0 ? void 0 : _a.readableId;
    const sharedID = (_b = notebookContent.metadata) === null || _b === void 0 ? void 0 : _b.sharedId;
    const notebookID = readableID !== null && readableID !== void 0 ? readableID : sharedID;
    if (!notebookID) {
        console.error('No notebook ID found for sharing');
        return;
    }
    const shareableLink = generateShareURL(notebookID);
    const dialogResult = await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showDialog)({
        title: 'Here is the shareable link to your notebook:',
        body: _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ReactWidget.create((0,_ui_components_share_dialog__WEBPACK_IMPORTED_MODULE_6__.createSuccessDialog)(shareableLink)),
        buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.okButton({ label: 'Copy Link!' })]
    });
    if (dialogResult.button.label === 'Copy Link!') {
        try {
            await navigator.clipboard.writeText(shareableLink);
        }
        catch (err) {
            console.error('Failed to copy link:', err);
        }
    }
}
/**
 * Notebook share/save handler. This function handles both sharing a new notebook and
 * updating an existing shared notebook.
 * @param notebookPanel - The notebook panel to handle sharing for.
 * @param sharingService - The sharing service instance to use for sharing operations.
 * @param manual - Whether this is a manual share operation triggered by the user, i.e., it is
 * true when the user clicks "Share Notebook" from the menu.
 */
async function handleNotebookSharing(notebookPanel, sharingService, manual, onManualSave) {
    var _a, _b, _c, _d, _e;
    const notebookContent = notebookPanel.context.model.toJSON();
    const isViewOnly = ((_a = notebookContent.metadata) === null || _a === void 0 ? void 0 : _a.isSharedNotebook) === true;
    const sharedId = (_b = notebookContent.metadata) === null || _b === void 0 ? void 0 : _b.sharedId;
    const defaultName = (0,_notebook_utils__WEBPACK_IMPORTED_MODULE_14__.generateDefaultNotebookName)();
    // Mark that the user has performed at least one manual save in this session.
    // We do this early in the manual flow for clarity; the local save already happened
    // in the command handlers and this flag only affects reminder wording.
    if (manual && !isViewOnly) {
        onManualSave();
    }
    try {
        if (isViewOnly) {
            // Skip CKHub sync for view-only notebooks
            console.log('View-only notebook: skipping CKHub sync and showing share URL.');
            if (manual) {
                await showShareDialog(sharingService, notebookContent);
            }
            return;
        }
        if (sharedId) {
            console.log('Updating notebook:', sharedId);
            await sharingService.update(sharedId, notebookContent);
            console.log('Notebook automatically synced to CKHub');
        }
        else {
            const shareResponse = await sharingService.share(notebookContent);
            notebookContent.metadata = {
                ...notebookContent.metadata,
                sharedId: shareResponse.notebook.id,
                readableId: shareResponse.notebook.readable_id,
                sharedName: defaultName,
                lastShared: new Date().toISOString()
            };
            notebookPanel.context.model.fromJSON(notebookContent);
            await notebookPanel.context.save();
            try {
                const notebookID = (_d = (_c = notebookContent.metadata) === null || _c === void 0 ? void 0 : _c.readableId) !== null && _d !== void 0 ? _d : (_e = notebookContent.metadata) === null || _e === void 0 ? void 0 : _e.sharedId;
                if (notebookID) {
                    setNotebookParamInUrl(notebookID);
                }
            }
            catch (e) {
                console.warn('Failed to update URL with shareable notebook ID:', e);
            }
        }
        if (manual) {
            await showShareDialog(sharingService, notebookContent);
        }
    }
    catch (error) {
        console.warn('Failed to sync notebook to CKHub:', error);
        await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showDialog)({
            title: manual ? 'Error Sharing Notebook' : 'Sync Failed',
            body: _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ReactWidget.create((0,_ui_components_share_dialog__WEBPACK_IMPORTED_MODULE_6__.createErrorDialog)(error)),
            buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.okButton()]
        });
    }
}
/**
 * JUPYTEREVERYWHERE EXTENSION
 */
const plugin = {
    id: 'jupytereverywhere:plugin',
    description: 'A Jupyter extension for k12 education',
    autoStart: true,
    requires: [_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__.INotebookTracker, _view_only__WEBPACK_IMPORTED_MODULE_15__.IViewOnlyNotebookTracker],
    activate: (app, tracker, readonlyTracker) => {
        const { commands } = app;
        // Get API URL from configuration or use a default
        const apiUrl = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PageConfig.getOption('sharing_service_api_url') || 'http://localhost:8080/api/v1';
        const sharingService = new _sharing_service__WEBPACK_IMPORTED_MODULE_5__.SharingService(apiUrl);
        /**
         * Hook into notebook saves using the saveState signal to handle CKHub sharing
         */
        tracker.widgetAdded.connect((sender, widget) => {
            widget.context.saveState.connect(async (sender, saveState) => {
                // Only trigger when save is completed (not dirty and not saving)
                if (saveState === 'completed') {
                    if (manuallySharing.has(widget)) {
                        // Skip auto-sync if it's a manual share.
                        return;
                    }
                    await handleNotebookSharing(widget, sharingService, false, () => { });
                }
            });
        });
        /**
         * 1. A "Download as IPyNB" command.
         */
        commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_11__.Commands.downloadNotebookCommand, {
            label: 'Download as a notebook',
            execute: args => {
                var _a, _b;
                // Clear all sharing-specific metadata before download
                const panel = (_a = readonlyTracker.currentWidget) !== null && _a !== void 0 ? _a : tracker.currentWidget;
                if (!panel) {
                    console.warn('No active notebook to download');
                    return;
                }
                const content = panel.context.model.toJSON();
                // Remove sharing-specific metadata
                const purgedMetadata = { ...content.metadata };
                delete purgedMetadata.isSharedNotebook;
                delete purgedMetadata.sharedId;
                delete purgedMetadata.readableId;
                delete purgedMetadata.sharedName;
                delete purgedMetadata.lastShared;
                // Ensure that we preserve kernelspec metadata if present
                const kernelSpec = (_b = content.metadata) === null || _b === void 0 ? void 0 : _b.kernelspec;
                if (kernelSpec) {
                    purgedMetadata.kernelspec = kernelSpec;
                }
                const cleanedContent = {
                    ...content,
                    metadata: purgedMetadata
                };
                panel.context.model.fromJSON(cleanedContent);
                // Execute the built-in download command with the cleaned model
                return commands.execute('docmanager:download');
            }
        });
        /**
         * 2. A "Download as PDF" command.
         */
        commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_11__.Commands.downloadPDFCommand, {
            label: 'Download as PDF',
            execute: async (args) => {
                var _a;
                const panel = (_a = readonlyTracker.currentWidget) !== null && _a !== void 0 ? _a : tracker.currentWidget;
                if (!panel) {
                    console.warn('No active notebook to download as PDF');
                    return;
                }
                try {
                    await (0,_pdf__WEBPACK_IMPORTED_MODULE_7__.exportNotebookAsPDF)(panel);
                }
                catch (error) {
                    console.error('Failed to export notebook as PDF:', error);
                    await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showDialog)({
                        title: 'Error exporting PDF',
                        body: _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ReactWidget.create((0,_ui_components_share_dialog__WEBPACK_IMPORTED_MODULE_6__.createErrorDialog)(error)),
                        buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.okButton()]
                    });
                }
            }
        });
        /**
         * Add a command to restart the notebook kernel, terming it as "memory",
         * and run all cells after the restart.
         */
        commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_11__.Commands.restartMemoryAndRunAllCommand, {
            label: 'Restart Notebook Memory and Run All Cells',
            icon: _icons__WEBPACK_IMPORTED_MODULE_20__.EverywhereIcons.fastForward,
            isEnabled: () => !!tracker.currentWidget,
            execute: async () => {
                const panel = tracker.currentWidget;
                if (!panel) {
                    console.warn('No active notebook to restart and run.');
                    return;
                }
                const result = await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showDialog)({
                    title: 'Would you like to restart the notebook’s memory and rerun all cells?',
                    buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.cancelButton({ label: 'Cancel' }), _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.okButton({ label: 'Restart' })]
                });
                if (result.button.accept) {
                    try {
                        await panel.sessionContext.restartKernel();
                        await commands.execute('notebook:run-all-cells');
                    }
                    catch (err) {
                        console.error('Restarting and running all cells failed', err);
                    }
                }
            }
        });
        // Track user time, and show a reminder to save the notebook once after
        // five minutes of editing (i.e., once it becomes non-empty and dirty)
        // using a toast notification.
        let saveReminderTimeout = null;
        let isSaveReminderScheduled = false; // a 5-minute timer is scheduled, but it hasn't fired yet
        let hasShownSaveReminder = false; // we've already shown the toast once for this notebook
        let hasManuallySaved = false; // whether the user has manually saved at least once in this session
        /**
         * Add custom Share notebook command
         */
        const markManualSave = () => {
            hasManuallySaved = true;
        };
        commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_11__.Commands.shareNotebookCommand, {
            label: 'Share Notebook',
            execute: async () => {
                try {
                    const notebookPanel = readonlyTracker.currentWidget
                        ? readonlyTracker.currentWidget
                        : tracker.currentWidget;
                    if (!notebookPanel) {
                        console.warn('Notebook panel not found, no notebook to share');
                        return;
                    }
                    // Mark this notebook as being shared manually (i.e., the user has
                    // clicked the "Share Notebook" command).
                    manuallySharing.add(notebookPanel);
                    // Save the notebook before we share it.
                    await notebookPanel.context.save();
                    await handleNotebookSharing(notebookPanel, sharingService, true, markManualSave);
                }
                catch (error) {
                    console.error('Error in share command:', error);
                }
            }
        });
        /**
         * Add a custom Save and Share notebook command. This command
         * is activated only on key bindings (Accel S) and is used to
         * display the shareable link dialog after the notebook is
         * saved manually by the user.
         */
        commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_11__.Commands.saveAndShareNotebookCommand, {
            label: 'Save and Share Notebook',
            execute: async () => {
                var _a;
                const panel = (_a = readonlyTracker.currentWidget) !== null && _a !== void 0 ? _a : tracker.currentWidget;
                if (!panel) {
                    console.warn('No active notebook to save');
                    return;
                }
                if (panel.context.model.readOnly) {
                    console.info('Notebook is read-only, skipping save-and-share.');
                    return;
                }
                manuallySharing.add(panel);
                await panel.context.save();
                await handleNotebookSharing(panel, sharingService, true, markManualSave);
            }
        });
        app.commands.addKeyBinding({
            command: _commands__WEBPACK_IMPORTED_MODULE_11__.Commands.saveAndShareNotebookCommand,
            keys: ['Accel S'],
            selector: '.jp-Notebook'
        });
        commands.addCommand('jupytereverywhere:switch-kernel', {
            label: args => {
                const kernel = args['kernel'] || '';
                const isActive = args['isActive'];
                const display = _kernels__WEBPACK_IMPORTED_MODULE_16__.KERNEL_DISPLAY_NAMES[kernel] || kernel;
                if (isActive) {
                    return display;
                }
                return `Switch to ${display}`;
            },
            execute: async (args) => {
                var _a, _b;
                const kernel = args['kernel'];
                const panel = tracker.currentWidget;
                if (!kernel) {
                    console.warn('No kernel specified for switching.');
                    return;
                }
                if (!panel) {
                    console.warn('No active notebook panel.');
                    return;
                }
                const currentKernel = ((_b = (_a = panel.sessionContext.session) === null || _a === void 0 ? void 0 : _a.kernel) === null || _b === void 0 ? void 0 : _b.name) || '';
                if (currentKernel !== kernel) {
                    const currentKernelDisplay = _kernels__WEBPACK_IMPORTED_MODULE_16__.KERNEL_DISPLAY_NAMES[currentKernel] || currentKernel;
                    const targetKernelDisplay = _kernels__WEBPACK_IMPORTED_MODULE_16__.KERNEL_DISPLAY_NAMES[kernel] || kernel;
                    _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Notification.warning(`You are about to switch your notebook coding language from ${currentKernelDisplay} to ${targetKernelDisplay}. Your previously created code will not run as intended.`, { autoClose: 5000 });
                }
                await (0,_kernels__WEBPACK_IMPORTED_MODULE_16__.switchKernel)(panel, kernel);
            }
        });
        /**
         * Add custom Create Copy notebook command
         * Note: this command is supported and displayed only for View Only notebooks.
         */
        commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_11__.Commands.createCopyNotebookCommand, {
            label: 'Create Copy',
            execute: async () => {
                var _a, _b, _c;
                try {
                    const readonlyPanel = readonlyTracker.currentWidget;
                    if (!readonlyPanel) {
                        console.warn('No view-only notebook is currently active.');
                        return;
                    }
                    const originalContent = readonlyPanel.context.model.toJSON();
                    // Remove any sharing-specific metadata from the copy,
                    // as we create a fresh notebook with new metadata below.
                    const purgedMetadata = { ...originalContent.metadata };
                    delete purgedMetadata.isSharedNotebook;
                    delete purgedMetadata.sharedId;
                    delete purgedMetadata.readableId;
                    delete purgedMetadata.domainId;
                    delete purgedMetadata.sharedName;
                    delete purgedMetadata.lastShared;
                    // Ensure that we preserve kernelspec metadata if present
                    const kernelSpec = (_a = originalContent.metadata) === null || _a === void 0 ? void 0 : _a.kernelspec;
                    // Remove cell-level editable=false; as the notebook has
                    // now been copied and should be possible to write to.
                    const cleanedCells = (_c = (_b = originalContent.cells) === null || _b === void 0 ? void 0 : _b.map(cell => {
                        const cellCopy = { ...cell };
                        cellCopy.metadata = { ...cellCopy.metadata };
                        delete cellCopy.metadata.editable;
                        return cellCopy;
                    })) !== null && _c !== void 0 ? _c : [];
                    if (kernelSpec) {
                        purgedMetadata.kernelspec = kernelSpec;
                    }
                    const copyContent = {
                        ...originalContent,
                        cells: cleanedCells,
                        metadata: purgedMetadata
                    };
                    const result = await app.serviceManager.contents.newUntitled({
                        type: 'notebook'
                    });
                    await app.serviceManager.contents.save(result.path, {
                        type: 'notebook',
                        format: 'json',
                        content: copyContent
                    });
                    // Open the notebook in the normal notebook factory, and
                    // close the previously opened notebook (the view-only one).
                    await commands.execute('docmanager:open', {
                        path: result.path
                    });
                    await readonlyPanel.close();
                    // Remove notebook param from the URL
                    const currentUrl = new URL(window.location.href);
                    currentUrl.searchParams.delete('notebook');
                    window.history.replaceState({}, '', currentUrl.toString());
                    console.log(`Notebook copied as: ${result.path}`);
                }
                catch (error) {
                    console.error('Failed to create notebook copy:', error);
                    await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showDialog)({
                        title: 'Error while creating a copy of the notebook',
                        body: _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ReactWidget.create((0,_ui_components_share_dialog__WEBPACK_IMPORTED_MODULE_6__.createErrorDialog)(error)),
                        buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.okButton()]
                    });
                }
            }
        });
        /**
         * Helper to start the save reminder timer. Clears any existing timer
         * and sets a new one to show the notification after 5 minutes.
         */
        function startSaveReminder(currentTimeout, onFire) {
            if (currentTimeout) {
                window.clearTimeout(currentTimeout);
            }
            return window.setTimeout(() => {
                const message = hasManuallySaved
                    ? "It's been 5 minutes since you last saved this notebook. Make sure to save the link to your notebook to edit your work later."
                    : "It's been 5 minutes since you've been working on this notebook. Make sure to save the link to your notebook to edit your work later.";
                _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Notification.info(message, { autoClose: 8000 });
                onFire();
            }, 300 * 1000); // once after 5 minutes
        }
        tracker.widgetAdded.connect((_, panel) => {
            if (saveReminderTimeout) {
                window.clearTimeout(saveReminderTimeout);
                saveReminderTimeout = null;
            }
            isSaveReminderScheduled = false;
            hasShownSaveReminder = false;
            const maybeScheduleSaveReminder = () => {
                var _a;
                if (hasShownSaveReminder) {
                    return;
                }
                const content = panel.context.model.toJSON();
                // Skip for view-only notebooks
                if (panel.context.model.readOnly || ((_a = content.metadata) === null || _a === void 0 ? void 0 : _a.isSharedNotebook) === true) {
                    return;
                }
                // Schedule after the notebook becomes non-empty
                if ((0,_notebook_utils__WEBPACK_IMPORTED_MODULE_14__.isNotebookEmpty)(content)) {
                    return;
                }
                if (isSaveReminderScheduled) {
                    return;
                }
                isSaveReminderScheduled = true;
                saveReminderTimeout = startSaveReminder(saveReminderTimeout, () => {
                    hasShownSaveReminder = true;
                    isSaveReminderScheduled = false;
                });
            };
            // After the model is ready, check immediately and on any content change.
            void panel.context.ready.then(() => {
                // We cover the case where the notebook loads already non-empty, say,
                // if the user uploads a notebook into the application.
                maybeScheduleSaveReminder();
                panel.context.model.contentChanged.connect(() => {
                    maybeScheduleSaveReminder(); // schedule when first content appears
                });
                // Reset the reminder timer whenever the user saves manually.
                // We clear any pending timer and wait for the next edit (dirty state)
                // to schedule a fresh 5-minute reminder.
                panel.context.saveState.connect((_, state) => {
                    if (state === 'completed') {
                        if (saveReminderTimeout) {
                            window.clearTimeout(saveReminderTimeout);
                            saveReminderTimeout = null;
                        }
                        isSaveReminderScheduled = false;
                        hasShownSaveReminder = false;
                        // Note: we do not reschedule here; it will be scheduled on the next content change
                        // once the notebook becomes dirty again.
                    }
                });
            });
            // If a view-only notebook is opened or becomes active, ensure no reminder can fire.
            readonlyTracker.widgetAdded.connect(() => {
                if (saveReminderTimeout) {
                    window.clearTimeout(saveReminderTimeout);
                    saveReminderTimeout = null;
                }
                isSaveReminderScheduled = false;
                hasShownSaveReminder = false;
            });
            panel.disposed.connect(() => {
                if (saveReminderTimeout) {
                    window.clearTimeout(saveReminderTimeout);
                    saveReminderTimeout = null;
                }
            });
        });
    }
};
const stateDBShim = {
    id: '@jupyter-everywhere/apputils-extension:state',
    autoStart: true,
    provides: _jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_3__.IStateDB,
    activate: (app) => {
        return new _jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_3__.StateDB();
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    stateDBShim,
    _view_only__WEBPACK_IMPORTED_MODULE_15__.viewOnlyNotebookFactoryPlugin,
    _notebook_factory__WEBPACK_IMPORTED_MODULE_18__.notebookFactoryPlugin,
    plugin,
    _pages_notebook__WEBPACK_IMPORTED_MODULE_12__.notebookPlugin,
    _pages_files__WEBPACK_IMPORTED_MODULE_8__.files,
    _routes__WEBPACK_IMPORTED_MODULE_9__["default"],
    // competitions,
    _sidebar__WEBPACK_IMPORTED_MODULE_4__.customSidebar,
    _pages_help__WEBPACK_IMPORTED_MODULE_13__.helpPlugin,
    _single_mode__WEBPACK_IMPORTED_MODULE_17__.singleDocumentMode,
    _placeholders__WEBPACK_IMPORTED_MODULE_19__.placeholderPlugin,
    _dialogs__WEBPACK_IMPORTED_MODULE_21__.sessionDialogs,
    _pages_not_found__WEBPACK_IMPORTED_MODULE_10__["default"]
]);


/***/ }),

/***/ "./lib/kernels.js":
/*!************************!*\
  !*** ./lib/kernels.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTIVE_KERNELS: () => (/* binding */ ACTIVE_KERNELS),
/* harmony export */   KERNEL_DISPLAY_NAMES: () => (/* binding */ KERNEL_DISPLAY_NAMES),
/* harmony export */   KERNEL_NAME_TO_URL: () => (/* binding */ KERNEL_NAME_TO_URL),
/* harmony export */   KERNEL_URL_TO_NAME: () => (/* binding */ KERNEL_URL_TO_NAME),
/* harmony export */   switchKernel: () => (/* binding */ switchKernel)
/* harmony export */ });
const KERNEL_URL_TO_NAME = {
    python: 'python',
    r: 'xr',
    'ai-sdk-chat': 'ai-sdk-chat'
};
const KERNEL_NAME_TO_URL = {
    python: 'python',
    xpython: 'python',
    xr: 'r',
    'ai-sdk-chat': 'ai-sdk-chat'
};
const KERNEL_DISPLAY_NAMES = {
    python: 'Python',
    xpython: 'Python',
    xr: 'R',
    'ai-sdk-chat': 'AI SDK Chat'
};
/**
 * List of kernels that will appear in the kernel switcher dropdown,
 * i.e., for which we have an available factory.
 */
const ACTIVE_KERNELS = ['python', 'xr', 'ai-sdk-chat'];
/**
 * Switch the notebook's kernel if it differs from the desired one.
 * @param panel The NotebookPanel to operate on
 * @param desiredKernel The kernel name to switch to (e.g. "python", "xr")
 */
async function switchKernel(panel, desiredKernel) {
    var _a, _b;
    const currentKernel = (_b = (_a = panel.sessionContext.session) === null || _a === void 0 ? void 0 : _a.kernel) === null || _b === void 0 ? void 0 : _b.name;
    if (currentKernel === desiredKernel) {
        console.log(`Already on kernel: ${desiredKernel}. Skipping switch.`);
        return;
    }
    await panel.sessionContext.changeKernel({ name: desiredKernel });
    console.log(`Switched to kernel: ${desiredKernel}.`);
}


/***/ }),

/***/ "./lib/notebook-factory.js":
/*!*********************************!*\
  !*** ./lib/notebook-factory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JENotebookContentFactory: () => (/* binding */ JENotebookContentFactory),
/* harmony export */   notebookFactoryPlugin: () => (/* binding */ notebookFactoryPlugin)
/* harmony export */ });
/* harmony import */ var _jupyterlab_cells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
/* harmony import */ var _jupyterlab_cells__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_cells__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_codeeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/codeeditor */ "webpack/sharing/consume/default/@jupyterlab/codeeditor");
/* harmony import */ var _jupyterlab_codeeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_codeeditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholders */ "./lib/placeholders.js");
/* harmony import */ var _run_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./run-button */ "./lib/run-button.js");





class JENotebookContentFactory extends _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.Notebook.ContentFactory {
    constructor(options) {
        super(options);
        this._app = options.app;
    }
    createInputPrompt() {
        return new _run_button__WEBPACK_IMPORTED_MODULE_4__.JEInputPrompt(this._app);
    }
    createNotebook(options) {
        return new _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.Notebook(options);
    }
    createMarkdownCell(options) {
        return new _jupyterlab_cells__WEBPACK_IMPORTED_MODULE_0__.MarkdownCell({
            ...options,
            emptyPlaceholder: _placeholders__WEBPACK_IMPORTED_MODULE_3__.EMPTY_MARKDOWN_PLACEHOLDER
        }).initializeState();
    }
}
/**
 * Plugin that provides the custom notebook factory.
 */
const notebookFactoryPlugin = {
    id: 'jupytereverywhere:notebook-factory',
    description: 'Provides notebook cell factory with input prompts',
    provides: _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookPanel.IContentFactory,
    requires: [_jupyterlab_codeeditor__WEBPACK_IMPORTED_MODULE_1__.IEditorServices],
    autoStart: true,
    activate: (app, editorServices) => {
        const editorFactory = editorServices.factoryService.newInlineEditor;
        const factory = new JENotebookContentFactory({
            editorFactory,
            app
        });
        return factory;
    }
};


/***/ }),

/***/ "./lib/notebook-utils.js":
/*!*******************************!*\
  !*** ./lib/notebook-utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateDefaultNotebookName: () => (/* binding */ generateDefaultNotebookName),
/* harmony export */   isNotebookEmpty: () => (/* binding */ isNotebookEmpty)
/* harmony export */ });
const toText = (src) => (Array.isArray(src) ? src.join('') : (src !== null && src !== void 0 ? src : ''));
/**
 * Iterates over all cells of a notebook and returns true the notebook has no meaningful
 * content. We consider a notebook "non-empty" if at least one cell has a populated
 * non-whitespace source.
 * @param nb - the notebook to check if it's empty
 * @returns - a boolean indicating whether the notebook is empty or not.
 */
function isNotebookEmpty(nb) {
    var _a;
    const cells = (_a = nb === null || nb === void 0 ? void 0 : nb.cells) !== null && _a !== void 0 ? _a : [];
    if (cells.length === 0) {
        return true;
    }
    for (const cell of cells) {
        if (/\S/.test(toText(cell === null || cell === void 0 ? void 0 : cell.source))) {
            return false;
        }
    }
    return true;
}
/**
 * Generates a default notebook name based on the current date and time.
 *
 * @returns A string representing the default notebook name, with
 *          the format: "Notebook_YYYY-MM-DD_HH-MM-SS"
 */
function generateDefaultNotebookName() {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    const time = `${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
    return `Notebook_${date}_${time}`;
}


/***/ }),

/***/ "./lib/pages/files.js":
/*!****************************!*\
  !*** ./lib/pages/files.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   files: () => (/* binding */ files)
/* harmony export */ });
/* harmony import */ var _jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/application */ "webpack/sharing/consume/default/@jupyterlite/application/@jupyterlite/application");
/* harmony import */ var _jupyterlite_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/services */ "webpack/sharing/consume/default/@jupyterlab/services");
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_services__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commands */ "./lib/commands.js");
/* harmony import */ var _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui-components/SidebarIcon */ "./lib/ui-components/SidebarIcon.js");
/* harmony import */ var _ui_components_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui-components/PageTitle */ "./lib/ui-components/PageTitle.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons */ "./lib/icons.js");
/* harmony import */ var _ui_components_FilesWarningBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui-components/FilesWarningBanner */ "./lib/ui-components/FilesWarningBanner.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ui_components_upload_conflict__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui-components/upload-conflict */ "./lib/ui-components/upload-conflict.js");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_11__);












/**
 * File type icons mapping function. We currently implement four common file types:
 * 1. Image files (PNG, JPEG/JPG, WEBP) (binary)
 * 2. CSV/TSV files (text)
 * @param fileName - the name of the file to determine the icon for.
 * @param fileType - the MIME type of the file to determine the icon for.
 * @returns A LabIcon representing the file type icon.
 */
const getFileIcon = (fileName, fileType) => {
    const extension = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.extname(fileName).toLowerCase().slice(1);
    if (fileType.startsWith('image/') || ['png', 'jpg', 'jpeg', 'webp'].includes(extension)) {
        return _icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.imageIcon;
    }
    if (fileType === 'text/csv' ||
        extension === 'csv' ||
        fileType === 'text/tab-separated-values' ||
        extension === 'tsv') {
        return _icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.fileIcon;
    }
    return _icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.addFile;
};
/**
 * Checks if the file type is supported (PNG, JPG/JPEG, WEBP, or CSV/TSV).
 * @param file - The file to check
 * @returns True if the file type is supported, false otherwise.
 */
const isSupportedFileType = (file) => {
    const supportedMimeTypes = [
        'image/png',
        'image/jpeg',
        'image/webp',
        'text/csv',
        'text/tab-separated-values'
    ];
    const extension = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.extname(file.name).toLowerCase().slice(1);
    const supportedExtensions = ['png', 'jpg', 'jpeg', 'webp', 'csv', 'tsv'];
    return supportedMimeTypes.includes(file.type) || supportedExtensions.includes(extension);
};
/**
 * A helper function to check if a file exists in the contents manager.
 * @param contentsManager - The contents manager instance.
 * @param path - The path to check.
 * @returns True if the file exists, false otherwise.
 */
async function fileExists(contentsManager, path) {
    try {
        await contentsManager.get(path, { content: false });
        return true;
    }
    catch (error) {
        return false;
    }
}
const FileUploader = react__WEBPACK_IMPORTED_MODULE_9___default().forwardRef((props, ref) => {
    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    const handleFileSelect = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(async (files) => {
        if (!files.length) {
            return;
        }
        const supportedFiles = Array.from(files).filter(isSupportedFileType);
        if (supportedFiles.length === 0) {
            await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)('Unsupported file type', 'Please upload only PNG, JPG/JPEG, WEBP, or CSV/TSV files.');
            return;
        }
        // Check for conflicts before starting file uploads. We check all files first
        // and allow the user to decide if they want to upload the non-conflicting files.
        const conflictingFiles = [];
        const filesToUpload = [];
        for (const file of supportedFiles) {
            const exists = await fileExists(props.contentsManager, file.name);
            if (exists) {
                conflictingFiles.push(file.name);
            }
            else {
                filesToUpload.push(file);
            }
        }
        if (conflictingFiles.length > 0) {
            await (0,_ui_components_upload_conflict__WEBPACK_IMPORTED_MODULE_10__.showUploadConflictDialog)(conflictingFiles);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            // If there are non-conflicting files after the dialog is dismissed
            // by the user, ask if they want to upload them.
            if (filesToUpload.length > 0) {
                const result = await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showDialog)({
                    title: 'Upload remaining files',
                    body: `${conflictingFiles.length} file${conflictingFiles.length > 1 ? 's' : ''} could not be uploaded due to name conflicts. Would you like to upload the remaining ${filesToUpload.length} file${filesToUpload.length > 1 ? 's' : ''}?`,
                    buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.cancelButton(), _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.okButton({ label: 'Upload' })]
                });
                if (!result.button.accept) {
                    return;
                }
            }
            else {
                // All files had conflicts, nothing to upload.
                return;
            }
        }
        if (filesToUpload.length === 0) {
            return;
        }
        props.onUploadStart(filesToUpload.length);
        try {
            for (const file of filesToUpload) {
                const content = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => reject(reader.error);
                    reader.readAsDataURL(file);
                });
                const isImage = file.type.startsWith('image/');
                const base64 = content.split(',')[1];
                const finalContent = isImage ? base64 : atob(base64);
                const finalFileName = file.name;
                try {
                    await props.contentsManager.save(finalFileName, {
                        type: 'file',
                        format: isImage ? 'base64' : 'text',
                        content: finalContent
                    });
                }
                catch (error) {
                    console.warn(`Upload skipped or failed for ${finalFileName}`, error);
                }
            }
        }
        finally {
            props.onUploadEnd();
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    }, [props]);
    const handleInputChange = (e) => {
        if (e.target.files) {
            handleFileSelect(e.target.files);
        }
    };
    const triggerFileSelect = () => {
        var _a;
        (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    // Expose the trigger function to the parent
    react__WEBPACK_IMPORTED_MODULE_9___default().useImperativeHandle(ref, () => ({
        triggerFileSelect
    }));
    return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement("input", { ref: fileInputRef, type: "file", multiple: true, onChange: handleInputChange, style: { display: 'none' }, accept: ".png,.jpg,.jpeg,.webp,.csv,.tsv,image/png,image/jpeg,image/webp,text/csv,text/tab-separated-values" }));
});
FileUploader.displayName = 'FileUploader';
function FileMenu(props) {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    const menuId = (0,react__WEBPACK_IMPORTED_MODULE_9__.useId)();
    const triggerId = (0,react__WEBPACK_IMPORTED_MODULE_9__.useId)();
    const menuItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)([]);
    // We'll close the menu when clicking outside the component.
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
        var _a;
        if (!isOpen) {
            return;
        }
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        const handleKeyDown = (e) => {
            var _a, _b;
            if (e.key === 'Escape') {
                (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                setIsOpen(false);
                return;
            }
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                const activeElement = document.activeElement;
                const currentIndex = menuItemsRef.current.findIndex(item => item === activeElement);
                let nextIndex;
                if (e.key === 'ArrowDown') {
                    nextIndex = currentIndex < menuItemsRef.current.length - 1 ? currentIndex + 1 : 0;
                }
                else {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItemsRef.current.length - 1;
                }
                (_b = menuItemsRef.current[nextIndex]) === null || _b === void 0 ? void 0 : _b.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        // Focus the first menu item when the menu opens.
        (_a = menuItemsRef.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);
    const handleMenuClick = (e) => {
        e.stopPropagation();
        if (!isOpen && menuRef.current) {
            const fileTile = menuRef.current.closest('.je-FileTile');
            if (fileTile) {
                fileTile.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                });
            }
        }
        setIsOpen(!isOpen);
    };
    const handleRename = (e) => {
        e.stopPropagation();
        props.onRename(props.model);
        setIsOpen(false);
    };
    const handleDownload = (e) => {
        e.stopPropagation();
        props.onDownload(props.model);
        setIsOpen(false);
    };
    const handleDelete = (e) => {
        e.stopPropagation();
        props.onDelete(props.model);
        setIsOpen(false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileMenu", ref: menuRef },
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement("button", { ref: triggerRef, className: "je-FileMenu-trigger", id: triggerId, "aria-label": `Options for ${props.model.name}`, "aria-haspopup": "menu", "aria-controls": menuId, "aria-expanded": isOpen, onClick: handleMenuClick }, isOpen ? react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.dropdownTriangle.react, null) : react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.ellipsis.react, null)),
        isOpen && (react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileMenu-dropdown", id: menuId, role: "menu", "aria-labelledby": triggerId },
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement("button", { ref: el => el && (menuItemsRef.current[0] = el), className: "je-FileMenu-item", onClick: handleRename, role: "menuitem" }, "Rename"),
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement("button", { ref: el => el && (menuItemsRef.current[1] = el), className: "je-FileMenu-item", onClick: handleDownload, role: "menuitem" }, "Download"),
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement("button", { ref: el => el && (menuItemsRef.current[2] = el), className: "je-FileMenu-item", onClick: handleDelete, role: "menuitem" }, "Delete")))));
}
/**
 * Infer the MIME type from a file name.
 * @param name - file name
 * @returns the MIME type inferred from the file extension, or an empty string if unknown.
 */
function inferMimeFromName(name) {
    const ext = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.extname(name).toLowerCase().slice(1);
    if (ext === 'png') {
        return 'image/png';
    }
    if (ext === 'jpg' || ext === 'jpeg') {
        return 'image/jpeg';
    }
    if (ext === 'webp') {
        return 'image/webp';
    }
    if (ext === 'csv') {
        return 'text/csv';
    }
    if (ext === 'tsv') {
        return 'text/tab-separated-values';
    }
    return '';
}
function FilesApp(props) {
    var _a;
    const [listing, setListing] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null);
    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const [uploadingCount, setUploadingCount] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0);
    const fileUploaderRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    const gridRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    const [gridColumns, setGridColumns] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
        if (!gridRef.current) {
            return;
        }
        const updateColumns = () => {
            const gridComputedStyle = window.getComputedStyle(gridRef.current);
            const gridTemplateColumns = gridComputedStyle.gridTemplateColumns;
            const columns = gridTemplateColumns.split(' ').length;
            setGridColumns(columns);
        };
        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, [(_a = listing === null || listing === void 0 ? void 0 : listing.content) === null || _a === void 0 ? void 0 : _a.length]);
    // Preserve file order across file renames.
    const [orderMap, setOrderMap] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(new Map());
    const refreshListing = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)(async () => {
        try {
            const dirListing = await props.contentsManager.get('', { content: true });
            setListing(dirListing);
            if (dirListing.type === 'directory') {
                const items = dirListing.content;
                setOrderMap(prev => {
                    const next = new Map(prev);
                    for (const key of Array.from(next.keys())) {
                        if (!items.some(i => i.path === key)) {
                            next.delete(key);
                        }
                    }
                    let max = -1;
                    for (const pos of next.values()) {
                        if (pos > max) {
                            max = pos;
                        }
                    }
                    items.forEach((it, idx) => {
                        if (!next.has(it.path)) {
                            next.set(it.path, ++max >= 0 ? max : idx);
                        }
                    });
                    return next;
                });
            }
        }
        catch (err) {
            await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)('Error loading files', `Could not load files from the contents manager: ${err instanceof Error ? err.message : String(err)}`);
        }
    }, [props.contentsManager]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
        void refreshListing();
    }, [refreshListing]);
    // Show the native "Leave site?" prompt when there is at least one uploaded (supported) file.
    const hasAnyFileBeenUploaded = react__WEBPACK_IMPORTED_MODULE_9___default().useMemo(() => {
        if (!listing || listing.type !== 'directory') {
            return false;
        }
        const items = listing.content;
        return items.some(f => {
            var _a, _b;
            if (f.type !== 'file') {
                return false;
            }
            return isSupportedFileType({
                name: f.name,
                type: (_a = f.mimetype) !== null && _a !== void 0 ? _a : '',
                size: (_b = f.size) !== null && _b !== void 0 ? _b : 0,
                lastModified: Date.now()
            });
        });
    }, [listing]);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
        if (!hasAnyFileBeenUploaded) {
            return;
        }
        const handler = (e) => {
            e.preventDefault();
            return true;
        };
        window.addEventListener('beforeunload', handler);
        return () => window.removeEventListener('beforeunload', handler);
    }, [hasAnyFileBeenUploaded]);
    const onRename = react__WEBPACK_IMPORTED_MODULE_9___default().useCallback(async (change) => {
        setOrderMap(prev => {
            const next = new Map(prev);
            const pos = next.get(change.oldPath);
            if (typeof pos === 'number') {
                next.delete(change.oldPath);
                next.set(change.newPath, pos);
            }
            return next;
        });
        await refreshListing();
    }, [refreshListing, setOrderMap]);
    return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FilesApp" },
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement(FileUploader, { ref: fileUploaderRef, onUploadStart: count => {
                setUploadingCount(count);
                setIsUploading(true);
            }, onUploadEnd: async () => {
                setUploadingCount(0);
                setIsUploading(false);
                await refreshListing();
            }, contentsManager: props.contentsManager }),
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FilesApp-content" },
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FilesApp-grid", ref: gridRef },
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileTile" },
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileTile-box je-FileTile-box-addNew", onClick: () => { var _a; return (_a = fileUploaderRef.current) === null || _a === void 0 ? void 0 : _a.triggerFileSelect(); } }, isUploading ? (react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileTile-spinner" })) : (react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.addFile.react, null))),
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileTile-label" }, uploadingCount > 0
                        ? `Uploading ${uploadingCount} file${uploadingCount > 1 ? 's' : ''}...`
                        : 'add new')),
                listing &&
                    listing.type === 'directory' &&
                    [...listing.content]
                        .sort((a, b) => {
                        const orderOfa = orderMap.get(a.path);
                        const orderOfb = orderMap.get(b.path);
                        if (orderOfa === undefined && orderOfb === undefined) {
                            return 0;
                        }
                        if (orderOfa === undefined) {
                            return 1;
                        }
                        if (orderOfb === undefined) {
                            return -1;
                        }
                        return orderOfa - orderOfb;
                    })
                        .filter(f => {
                        var _a, _b;
                        return (f.type === 'file' &&
                            isSupportedFileType({
                                name: f.name,
                                type: (_a = f.mimetype) !== null && _a !== void 0 ? _a : '',
                                size: (_b = f.size) !== null && _b !== void 0 ? _b : 0,
                                lastModified: Date.now()
                            }));
                    })
                        .map((file, index) => {
                        return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement(FileTile, { file: file, gridIndex: index, contentsManager: props.contentsManager, onRename: onRename, onDelete: refreshListing, gridColumns: gridColumns }));
                    }))),
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_ui_components_FilesWarningBanner__WEBPACK_IMPORTED_MODULE_8__.FilesWarningBanner, null)));
}
function FileTile(props) {
    var _a;
    const [isRenaming, setIsRenaming] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const [draftName, setDraftName] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null);
    const downloadFile = react__WEBPACK_IMPORTED_MODULE_9___default().useCallback(async (model) => {
        var _a, _b, _c, _d;
        try {
            const fetched = await props.contentsManager.get(model.path, { content: true });
            if (fetched.type !== 'file') {
                return;
            }
            const fmt = ((_a = fetched.format) !== null && _a !== void 0 ? _a : 'text');
            const mime = (_b = fetched.mimetype) !== null && _b !== void 0 ? _b : inferMimeFromName(model.name);
            let blob;
            if (fmt === 'base64') {
                const b64 = String((_c = fetched.content) !== null && _c !== void 0 ? _c : '');
                const bytes = atob(b64);
                const buf = new Uint8Array(bytes.length);
                for (let i = 0; i < bytes.length; i++) {
                    buf[i] = bytes.charCodeAt(i);
                }
                blob = new Blob([buf], { type: mime });
            }
            else {
                blob = new Blob([String((_d = fetched.content) !== null && _d !== void 0 ? _d : '')], { type: mime || 'text/plain' });
            }
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = model.name;
            document.body.appendChild(a);
            a.click();
            requestAnimationFrame(() => {
                URL.revokeObjectURL(a.href);
                a.remove();
            });
        }
        catch (err) {
            await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)('Download failed', `Could not download ${model.name}: ${err instanceof Error ? err.message : String(err)}`);
        }
    }, [props.contentsManager]);
    const deleteFile = react__WEBPACK_IMPORTED_MODULE_9___default().useCallback(async (model) => {
        try {
            await props.contentsManager.delete(model.path);
            await props.onDelete();
        }
        catch (err) {
            await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)('Delete failed', `Could not delete ${model.name}: ${err instanceof Error ? err.message : String(err)}`);
        }
    }, [props.contentsManager, props.onDelete]);
    /**
     * Rename handler: prompts for a new name and performs a contents rename.
     * We check for conflicts and prevent changing file extensions here.
     */
    const renameFile = react__WEBPACK_IMPORTED_MODULE_9___default().useCallback(async (model) => {
        const oldName = model.name;
        const oldPath = model.path;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const delegate = new _lumino_coreutils__WEBPACK_IMPORTED_MODULE_11__.PromiseDelegate();
            setIsRenaming(delegate);
            let result;
            try {
                result = await delegate.promise;
            }
            catch (_a) {
                // User cancelled, finish.
                return;
            }
            finally {
                setIsRenaming(false);
            }
            const newName = result.trim();
            setDraftName(newName);
            // No-op if unchanged or empty
            if (!newName || newName === oldName) {
                return;
            }
            if (/[\\/]/.test(newName)) {
                await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)('Invalid name', 'File name cannot contain invalid characters. Please choose a different name for your file.');
                continue;
            }
            const oldExt = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.extname(oldName);
            const newExt = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.extname(newName);
            if (oldExt && newExt && oldExt.toLowerCase() !== newExt.toLowerCase()) {
                await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)('Cannot change file extension', 'Jupyter Everywhere does not support converting files from one format to another. To convert a file, please delete it and re-upload the converted version.');
                continue;
            }
            const finalName = oldExt && !newExt ? `${newName}${oldExt}` : newName;
            const dirname = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.dirname(model.path);
            const newPath = dirname ? _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.join(dirname, finalName) : finalName;
            const exists = await fileExists(props.contentsManager, newPath);
            if (exists && newPath !== oldPath) {
                await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)('File exists', `A file named "${finalName}" already exists. Please choose a different name.`);
                continue;
            }
            try {
                await props.contentsManager.rename(model.path, newPath);
                await props.onRename({ oldPath, newPath });
                setDraftName(null);
                return;
            }
            catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)('Rename failed', `Could not rename “${oldName}”: ${msg}`);
                // The loop will continue to allow the user to try again; the user may click the
                // "Cancel" button to exit at any point on the "Rename file" dialog.
                continue;
            }
        }
    }, [props.contentsManager, props.onRename]);
    const { file, gridColumns, gridIndex } = props;
    const fileIcon = getFileIcon(file.name, (_a = file.mimetype) !== null && _a !== void 0 ? _a : '');
    // The "add new" tile sits at the zeroth index, so we offset by 1.
    // We use this to determine if we are in the rightmost column.
    // If so, we add a special data attribute to the tile, which is
    // used in CSS to remove the right margin. This is to avoid users
    // from adding horizontal scrolling by accident.
    const totalIndex = gridIndex + 1;
    const row = Math.floor(totalIndex / gridColumns);
    const col = totalIndex % gridColumns;
    const isRightColumn = col === gridColumns - 1;
    const isLeftColumn = col === 0;
    return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileTile", key: file.path, "data-row": row, "data-col-right": isRightColumn ? 'true' : 'false', "data-col-left": isLeftColumn ? 'true' : 'false' },
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileTile-box je-FileTile-box-hasMenu" },
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement(FileMenu, { model: file, onDownload: downloadFile, onDelete: deleteFile, onRename: renameFile }),
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement(fileIcon.react, null)),
        isRenaming ? (react__WEBPACK_IMPORTED_MODULE_9___default().createElement(EditableFileLabel, { delegate: isRenaming, name: draftName !== null && draftName !== void 0 ? draftName : file.name })) : (react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { className: "je-FileTile-label" }, file.name))));
}
function EditableFileLabel(props) {
    const { delegate, name } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    const renameMaybeSubmit = react__WEBPACK_IMPORTED_MODULE_9___default().useCallback((e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            delegate.resolve(e.currentTarget.textContent);
        }
        else if (e.key === 'Escape') {
            delegate.reject(e);
        }
    }, [delegate]);
    const renameSubmit = react__WEBPACK_IMPORTED_MODULE_9___default().useCallback((e) => {
        delegate.resolve(e.currentTarget.textContent);
    }, [delegate]);
    return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", { contentEditable: true, className: "je-FileTile-label je-FileTile-label-rename", onKeyDown: renameMaybeSubmit, onBlur: renameSubmit, onFocus: e => {
            const ext = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_2__.PathExt.extname(name);
            const value = e.target.textContent;
            const selection = window.getSelection();
            if (!selection) {
                return;
            }
            const range = document.createRange();
            const textNode = e.target.firstChild;
            range.setStart(textNode, 0);
            range.setEnd(textNode, value.length - ext.length);
            selection.removeAllRanges();
            selection.addRange(range);
        }, tabIndex: 0, ref: ref, role: "textbox" }, name));
}
class Files extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ReactWidget {
    constructor(_contentsManager) {
        super();
        this._contentsManager = _contentsManager;
        this.addClass('je-Files');
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_9___default().createElement(FilesApp, { contentsManager: this._contentsManager });
    }
}
const files = {
    id: 'jupytereverywhere:files',
    autoStart: true,
    requires: [_jupyterlab_services__WEBPACK_IMPORTED_MODULE_3__.IContentsManager],
    optional: [_jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__.ILiteRouter],
    activate: (app, contentsManager, router) => {
        const createWidget = () => {
            const content = new Files(contentsManager);
            const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.MainAreaWidget({ content });
            widget.id = 'je-files';
            widget.title.label = 'Files';
            widget.title.closable = true;
            widget.title.icon = _icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.folder;
            widget.toolbar.addItem('title', new _ui_components_PageTitle__WEBPACK_IMPORTED_MODULE_6__.PageTitle({
                label: 'Files',
                icon: _icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.folder
            }));
            return widget;
        };
        let widget = createWidget();
        const base = ((router === null || router === void 0 ? void 0 : router.base) || '').replace(/\/$/, '');
        const filesPath = `${base}/lab/files/`;
        // Show the Files widget; return false-y so SidebarIcon does the URL swap.
        const filesSidebar = new _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_5__.SidebarIcon({
            label: 'Files',
            icon: _icons__WEBPACK_IMPORTED_MODULE_7__.EverywhereIcons.folderSidebar,
            pathName: filesPath,
            execute: () => {
                void app.commands.execute(_commands__WEBPACK_IMPORTED_MODULE_4__.Commands.openFiles);
                return _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_5__.SidebarIcon.delegateNavigation;
            }
        });
        app.shell.add(filesSidebar, 'left', { rank: 200 });
        // If we landed with a "files" intent, highlight Files in the sidebar.
        void app.restored.then(() => {
            const url = new URL(window.location.href);
            const pathIsFiles = /\/lab\/files(?:\/|$)/.test(url.pathname);
            const tabIsFiles = url.searchParams.get('tab') === 'files';
            if (pathIsFiles || tabIsFiles) {
                const desired = new URL(filesPath, window.location.origin);
                desired.hash = url.hash;
                window.history.replaceState(null, 'Files', desired.toString());
                if (widget.isDisposed) {
                    widget = createWidget();
                }
                if (!widget.isAttached) {
                    app.shell.add(widget, 'main');
                }
                app.shell.activateById(filesSidebar.id);
            }
        });
        app.commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_4__.Commands.openFiles, {
            label: 'Open Files',
            execute: () => {
                // Regenerate the widget if disposed
                if (widget.isDisposed) {
                    widget = createWidget();
                }
                if (!widget.isAttached) {
                    // Attach the widget to the main work area if it's not there
                    app.shell.add(widget, 'main');
                }
                app.shell.activateById(widget.id);
            }
        });
    }
};


/***/ }),

/***/ "./lib/pages/help.js":
/*!***************************!*\
  !*** ./lib/pages/help.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpCentre: () => (/* binding */ HelpCentre),
/* harmony export */   helpPlugin: () => (/* binding */ helpPlugin)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commands */ "./lib/commands.js");
/* harmony import */ var _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-components/SidebarIcon */ "./lib/ui-components/SidebarIcon.js");
/* harmony import */ var _ui_components_PageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-components/PageTitle */ "./lib/ui-components/PageTitle.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./lib/icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






class HelpCentre extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    constructor() {
        super();
        this.addClass('je-Help');
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", null, "About"),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null, "Jupyter Everywhere (JE) is a collaborative project between Skew the Script and CourseKata launched in 2024 with support from the Gates Foundation. Our initiative focuses on bringing data science tools and resources into classrooms by providing accessible high-quality tools. Our goal is to empower both teachers and students to explore data science and statistics with ease, fostering deeper engagement and understanding in these essential fields."),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", null, "Get Started"),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null, "Follow these steps to get started with the Jupyter Everywhere platform..."),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("ol", null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "Open the Magic Portal"),
                    "Go to the Jupyter Everywhere website (no login needed\u2014yay!)."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "Create an R or Python Notebook"),
                    "Instantly drop into a blank Jupyter notebook powered by WebAssembly \u2014 no setup, just vibes."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "Upload your files"),
                    "Want to use data and add images? Well you can! Use the left navigation bar to upload your files by clicking the file icon. Simply drag in your own CSV or PNG/JPG files or click the add files button."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "Code Like a Wizard"),
                    "Run some cells, make a plot, maybe even do some linear regression. Sky\u2019s the limit."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "Hit \u201CShare\u201D to Make a Magic Link"),
                    "When you're ready, hit the Share button to get a link. Great for showing off."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "Send the Link to a Friend or Teacher"),
                    "Boom\u2014now someone else can view your Jupyter notebook via JE."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "Make a Copy if You\u2019re in View-Only Mode"),
                    "If someone sends you a notebook and you want to edit, just click \"Make a Copy\" to tinker freely. Once done, make sure to save again to create a new link."),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "Come Back Later"),
                    "Your notebook lives in the cloud. If you have your magic link you can access your notebook in any other computer, on the go, and even at home. No rush to finish, just come back later with your shared link, create a copy, and continue working wherever you go.")),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", null, "JE User Guide"),
            "The user guide will help you get started coding in your favorite language:",
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    "Click",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", { href: "https://docs.google.com/document/d/1k05giO8HYKiLtdyS1pWM7GOJuxsQ0ww2Q-PrO9xRaxE/edit" }, "here"),
                    ' ',
                    "for an R Coding Guide"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", null,
                    "Click",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", { href: "https://docs.google.com/document/d/1J_STDSo_9JJvsS87GIB7wY-lGAgr4lza3hoXaYDJnw8/edit" }, "here"),
                    ' ',
                    "for a Python Coding Guide")),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                "Need help with a coding or notebook question? Check out our",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", { href: "https://jupytereverywhere.freeflarum.com/" }, "Community Forum"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("br", null),
                "Need to report something? Fill out",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", { href: "https://forms.gle/SAi65HfqhkSzygMr7" }, "the Google Form"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("br", null))));
    }
}
const helpPlugin = {
    id: 'jupytereverywhere:help',
    autoStart: true,
    activate: (app) => {
        const newWidget = () => {
            const content = new HelpCentre();
            const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget({ content });
            widget.id = 'je-help';
            widget.title.label = 'Help Center';
            widget.title.closable = true;
            widget.title.icon = _icons__WEBPACK_IMPORTED_MODULE_4__.EverywhereIcons.help;
            const toolbarTitle = new _ui_components_PageTitle__WEBPACK_IMPORTED_MODULE_3__.PageTitle({
                label: 'Help Center',
                icon: _icons__WEBPACK_IMPORTED_MODULE_4__.EverywhereIcons.help
            });
            widget.toolbar.addItem('title', toolbarTitle);
            return widget;
        };
        let widget = newWidget();
        app.shell.add(new _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__.SidebarIcon({
            label: 'Help Centre',
            icon: _icons__WEBPACK_IMPORTED_MODULE_4__.EverywhereIcons.help,
            execute: () => {
                void app.commands.execute(_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.openHelp);
                return;
            }
        }), 'left', { rank: 300 });
        app.commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.openHelp, {
            label: 'Open Help Center',
            execute: () => {
                // Regenerate the widget if disposed
                if (widget.isDisposed) {
                    widget = newWidget();
                }
                if (!widget.isAttached) {
                    // Attach the widget to the main work area if it's not there
                    app.shell.add(widget, 'main');
                }
                app.shell.activateById(widget.id);
            }
        });
    }
};


/***/ }),

/***/ "./lib/pages/not-found.js":
/*!********************************!*\
  !*** ./lib/pages/not-found.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   notFoundPlugin: () => (/* binding */ notFoundPlugin)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commands */ "./lib/commands.js");



class NotFoundView extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    constructor() {
        super();
        this.addClass('je-NotFound');
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "je-NotFound-container" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "je-NotFound-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "je-NotFound-code" }, "404"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { className: "je-NotFound-title" }, "Oops! We could not find what you are looking for."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "je-NotFound-message" }, "The page may have moved or the link might be incorrect."))));
    }
}
const notFoundPlugin = {
    id: 'jupytereverywhere:not-found',
    autoStart: true,
    activate: (app) => {
        const newWidget = () => {
            const widget = new NotFoundView();
            widget.id = 'je-not-found';
            widget.title.label = 'Not found';
            widget.title.closable = true;
            return widget;
        };
        let widget = newWidget();
        app.commands.addCommand(_commands__WEBPACK_IMPORTED_MODULE_2__.Commands.openNotFound, {
            label: 'Open 404 Page',
            execute: () => {
                if (widget.isDisposed) {
                    widget = newWidget();
                }
                if (!widget.isAttached) {
                    app.shell.add(widget, 'main');
                }
                app.shell.activateById(widget.id);
            }
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notFoundPlugin);


/***/ }),

/***/ "./lib/pages/notebook.js":
/*!*******************************!*\
  !*** ./lib/pages/notebook.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notebookPlugin: () => (/* binding */ notebookPlugin)
/* harmony export */ });
/* harmony import */ var _jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/application */ "webpack/sharing/consume/default/@jupyterlite/application/@jupyterlite/application");
/* harmony import */ var _jupyterlite_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-components/SidebarIcon */ "./lib/ui-components/SidebarIcon.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./lib/icons.js");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_components_DownloadDropdownButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui-components/DownloadDropdownButton */ "./lib/ui-components/DownloadDropdownButton.js");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commands */ "./lib/commands.js");
/* harmony import */ var _sharing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sharing-service */ "./lib/sharing-service.js");
/* harmony import */ var _view_only__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view-only */ "./lib/view-only.js");
/* harmony import */ var _ui_components_KernelSwitcherDropdownButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui-components/KernelSwitcherDropdownButton */ "./lib/ui-components/KernelSwitcherDropdownButton.js");
/* harmony import */ var _kernels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../kernels */ "./lib/kernels.js");












/**
 * Maps the notebook content language to a kernel name. We currently
 * only support Python and R notebooks, so this function maps them
 * to 'python' and 'xr' respectively. If the language is not recognized,
 * it defaults to 'python' (Pyodide).
 * @param content - The notebook content to map the language to a kernel name.
 * @returns - The kernel name as a string, either 'python' for Python or 'xr' for R.
 */
function mapLanguageToKernel(content) {
    var _a, _b, _c, _d, _e, _f;
    const rawLang = ((_c = (_b = (_a = content === null || content === void 0 ? void 0 : content.metadata) === null || _a === void 0 ? void 0 : _a.kernelspec) === null || _b === void 0 ? void 0 : _b.language) === null || _c === void 0 ? void 0 : _c.toLowerCase()) ||
        ((_f = (_e = (_d = content === null || content === void 0 ? void 0 : content.metadata) === null || _d === void 0 ? void 0 : _d.language_info) === null || _e === void 0 ? void 0 : _e.name) === null || _f === void 0 ? void 0 : _f.toLowerCase()) ||
        'python';
    if (rawLang === 'r') {
        return 'xr';
    }
    return 'python';
}
/**
 * Patch pyodide HTTP kernel
 */
async function patchPyodideHttp(sessionContext) {
    const session = sessionContext.session;
    if (!session) {
        throw Error('Session should have been ready');
    }
    const kernel = session.kernel;
    if (!kernel) {
        console.warn('Kernel was expected but not found');
        return;
    }
    if (kernel.name !== 'python') {
        console.debug('Non-python kernel: not patching');
        return;
    }
    await kernel.requestExecute({
        allow_stdin: false,
        code: [
            '%pip install -y pyodide-http requests',
            'import pyodide_http',
            'pyodide_http.patch_all()'
        ].join('\n'),
        silent: true,
        stop_on_error: false,
        store_history: false
    });
}
const notebookPlugin = {
    id: 'jupytereverywhere:notebook',
    autoStart: true,
    requires: [
        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.INotebookTracker,
        _view_only__WEBPACK_IMPORTED_MODULE_9__.IViewOnlyNotebookTracker,
        _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_4__.IToolbarWidgetRegistry,
        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.INotebookWidgetFactory
    ],
    optional: [_jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__.ILiteRouter],
    activate: (app, tracker, readonlyTracker, toolbarRegistry, router) => {
        const { commands, shell, serviceManager } = app;
        const { contents } = serviceManager;
        const params = new URLSearchParams(window.location.search);
        // Are we landing on the Files tab directly? In this case, we won't
        // auto-create a new notebook or activate the notebook sidebar.
        const nowUrl = new URL(window.location.href);
        const onFilesPath = /\/lab\/files(?:\/|$)/.test(nowUrl.pathname);
        const onFilesTab = nowUrl.searchParams.get('tab') === 'files';
        const onFilesIntent = onFilesPath || onFilesTab;
        let notebookId = params.get('notebook');
        const uploadedNotebookId = params.get('uploaded-notebook');
        if (notebookId === null || notebookId === void 0 ? void 0 : notebookId.endsWith('.ipynb')) {
            notebookId = notebookId.slice(0, -6);
        }
        /**
         * Load a shared notebook from the CKHub API
         */
        const loadSharedNotebook = async (id) => {
            var _a;
            try {
                console.log(`Loading shared notebook with ID: ${id}`);
                const apiUrl = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_5__.PageConfig.getOption('sharing_service_api_url') || 'http://localhost:8080/api/v1';
                const sharingService = new _sharing_service__WEBPACK_IMPORTED_MODULE_8__.SharingService(apiUrl);
                console.log(`API URL: ${apiUrl}`);
                console.log('Retrieving notebook from API...');
                const notebookResponse = await sharingService.retrieve(id);
                console.log('API Response received:', notebookResponse);
                const { content } = notebookResponse;
                // We make all cells read-only by setting editable: false.
                // This is still required with a custom widget factory as
                // it is not trivial to coerce the cells to respect the `readOnly`
                // property otherwise (Mike tried swapping `Notebook.ContentFactory`
                // and it does not work without further hacks).
                if (content.cells) {
                    content.cells.forEach(cell => {
                        cell.metadata = {
                            ...cell.metadata,
                            editable: false
                        };
                    });
                }
                const { id: responseId, readable_id, domain_id } = notebookResponse;
                content.metadata = {
                    ...content.metadata,
                    isSharedNotebook: true,
                    sharedId: responseId,
                    readableId: readable_id,
                    domainId: domain_id
                };
                const filename = `Shared_${readable_id || responseId}.ipynb`;
                await contents.save(filename, {
                    content,
                    format: 'json',
                    type: 'notebook',
                    // Even though we have a custom view-only factory, we still
                    // want to indicate that notebook is read-only to avoid
                    // error on Ctrl + S and instead get a nice notification that
                    // the notebook cannot be saved unless using save-as.
                    writable: false
                });
                await commands.execute('docmanager:open', {
                    path: filename,
                    factory: _view_only__WEBPACK_IMPORTED_MODULE_9__.VIEW_ONLY_NOTEBOOK_FACTORY
                });
                // Remove kernel param from URL, as we no longer need it on
                // a view-only notebook.
                const url = new URL(window.location.href);
                url.searchParams.delete('kernel');
                window.history.replaceState({}, '', url.toString());
                console.log(`Successfully loaded shared notebook: ${filename}`);
            }
            catch (error) {
                console.error('Failed to load shared notebook:', error);
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                const errorStack = error instanceof Error ? error.stack : undefined;
                console.error('Error details:', {
                    message: errorMessage,
                    stack: errorStack,
                    notebookId: id,
                    errorType: typeof error,
                    errorConstructor: (_a = error === null || error === void 0 ? void 0 : error.constructor) === null || _a === void 0 ? void 0 : _a.name
                });
                alert(`Failed to load shared notebook "${id}": ${errorMessage}`);
                await createNewNotebook();
            }
        };
        /**
         * Create a new blank notebook
         */
        const createNewNotebook = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                const desiredKernelParam = params.get('kernel') || 'python';
                const desiredKernel = _kernels__WEBPACK_IMPORTED_MODULE_11__.KERNEL_URL_TO_NAME[desiredKernelParam] || 'python';
                await commands.execute('notebook:create-new', {
                    kernelName: desiredKernel
                });
                console.log(`Created new notebook with kernel: ${desiredKernel}`);
            }
            catch (error) {
                console.error('Failed to create new notebook:', error);
            }
        };
        const openUploadedNotebook = async (id) => {
            var _a, _b;
            try {
                const raw = localStorage.getItem(`uploaded-notebook:${id}`);
                // Should not happen
                if (!raw) {
                    console.warn(`No uploaded notebook found for ID: ${id}`);
                    await createNewNotebook();
                    return;
                }
                const content = JSON.parse(raw);
                const kernelName = mapLanguageToKernel(content);
                content.metadata.kernelspec = {
                    name: kernelName,
                    display_name: (_a = _kernels__WEBPACK_IMPORTED_MODULE_11__.KERNEL_DISPLAY_NAMES[kernelName]) !== null && _a !== void 0 ? _a : kernelName
                };
                const filename = `${((_b = content.metadata) === null || _b === void 0 ? void 0 : _b.name) || `Uploaded_${id}`}.ipynb`;
                await contents.save(filename, {
                    type: 'notebook',
                    format: 'json',
                    content
                });
                await commands.execute('docmanager:open', { path: filename });
                // Once we have the notebook in the editor, it is now safe to drop
                // the uploaded notebook ID from the URL and the temporary storage.
                const currentUrl = new URL(window.location.href);
                currentUrl.searchParams.delete('uploaded-notebook');
                window.history.replaceState({}, '', currentUrl.toString());
                localStorage.removeItem(`uploaded-notebook:${id}`);
                console.log(`Opened uploaded notebook: ${filename}`);
            }
            catch (error) {
                console.error('Failed to open uploaded notebook:', error);
                await createNewNotebook();
            }
        };
        // If a notebook ID is provided in the URL (whether shared or uploaded),
        // load it; otherwise, create a new notebook
        if (notebookId) {
            void loadSharedNotebook(notebookId);
        }
        else if (uploadedNotebookId) {
            void openUploadedNotebook(uploadedNotebookId);
        }
        else if (!onFilesIntent) {
            void createNewNotebook();
        }
        tracker.widgetAdded.connect(async (_, panel) => {
            await panel.sessionContext.ready;
            // Remove kernel URL param after notebook kernel is ready, as
            // we don't want it to linger and confuse users.
            const url = new URL(window.location.href);
            if (url.searchParams.has('kernel')) {
                url.searchParams.delete('kernel');
                window.history.replaceState({}, '', url.toString());
                console.log('Removed kernel param from URL after kernel init.');
            }
            // for Python notebooks, inject code enabling URL access
            panel.sessionContext.kernelChanged.connect(patchPyodideHttp);
            await patchPyodideHttp(panel.sessionContext);
        });
        const sidebarItem = new _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__.SidebarIcon({
            label: 'Notebook',
            icon: _icons__WEBPACK_IMPORTED_MODULE_3__.EverywhereIcons.notebook,
            pathName: `${((router === null || router === void 0 ? void 0 : router.base) || '').replace(/\/$/, '')}/lab/index.html`,
            execute: () => {
                if (readonlyTracker.currentWidget) {
                    const id = readonlyTracker.currentWidget.id;
                    shell.activateById(id);
                    return _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__.SidebarIcon.delegateNavigation;
                }
                if (tracker.currentWidget) {
                    const id = tracker.currentWidget.id;
                    shell.activateById(id);
                    return _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__.SidebarIcon.delegateNavigation;
                }
                // If we don't have a notebook yet (likely we started on /lab/files/) -> create one now.
                void (async () => {
                    await app.commands.execute('notebook:create-new', { kernelName: 'python' });
                    if (tracker.currentWidget) {
                        shell.activateById(tracker.currentWidget.id);
                    }
                })();
                return _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__.SidebarIcon.delegateNavigation;
            }
        });
        shell.add(sidebarItem, 'left', { rank: 100 });
        if (!onFilesIntent) {
            app.shell.activateById(sidebarItem.id);
            app.restored.then(() => app.shell.activateById(sidebarItem.id));
        }
        for (const toolbarName of ['Notebook', 'ViewOnlyNotebook']) {
            toolbarRegistry.addFactory(toolbarName, 'createCopy', () => new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton({
                label: 'Create Copy',
                tooltip: 'Create an editable copy of this notebook',
                className: 'je-CreateCopyButton',
                onClick: () => {
                    void commands.execute(_commands__WEBPACK_IMPORTED_MODULE_7__.Commands.createCopyNotebookCommand);
                }
            }));
            toolbarRegistry.addFactory(toolbarName, 'downloadDropdown', () => new _ui_components_DownloadDropdownButton__WEBPACK_IMPORTED_MODULE_6__.DownloadDropdownButton(commands));
            toolbarRegistry.addFactory(toolbarName, 'share', () => new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton({
                label: 'Share',
                icon: _icons__WEBPACK_IMPORTED_MODULE_3__.EverywhereIcons.link,
                tooltip: 'Share this notebook',
                onClick: () => {
                    void commands.execute(_commands__WEBPACK_IMPORTED_MODULE_7__.Commands.shareNotebookCommand);
                }
            }));
            toolbarRegistry.addFactory('Notebook', 'save', () => {
                return new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton({
                    label: '',
                    icon: _icons__WEBPACK_IMPORTED_MODULE_3__.EverywhereIcons.save,
                    tooltip: 'Save this notebook',
                    onClick: () => {
                        void app.commands.execute(_commands__WEBPACK_IMPORTED_MODULE_7__.Commands.saveAndShareNotebookCommand);
                    }
                });
            });
            toolbarRegistry.addFactory('Notebook', 'jeKernelSwitcher', () => new _ui_components_KernelSwitcherDropdownButton__WEBPACK_IMPORTED_MODULE_10__.KernelSwitcherDropdownButton(commands, tracker));
        }
        // Canonicalise the URL if we are directly at /lab/.
        void app.restored.then(() => {
            var _a;
            const url = new URL(window.location.href);
            if (/\/lab\/$/.test(url.pathname)) {
                url.pathname = url.pathname.replace(/\/lab\/$/, '/lab/index.html');
                window.history.replaceState({}, '', url.toString());
            }
            const after = new URL(window.location.href);
            if (after.searchParams.get('tab') === 'notebook') {
                const id = (_a = document.querySelector('.jp-NotebookPanel')) === null || _a === void 0 ? void 0 : _a.id;
                if (id) {
                    app.shell.activateById(id);
                    after.searchParams.delete('tab');
                    const base = ((router === null || router === void 0 ? void 0 : router.base) || '').replace(/\/$/, '');
                    const canonical = new URL(`${base}/lab/index.html`, window.location.origin);
                    canonical.hash = after.hash;
                    // Keep any other non-tab params off; Notebook page doesn't need them
                    if (after.pathname + after.search + after.hash !==
                        canonical.pathname + canonical.search + canonical.hash) {
                        window.history.replaceState(null, 'Notebook', canonical.toString());
                    }
                }
            }
        });
    }
};


/***/ }),

/***/ "./lib/pdf.js":
/*!********************!*\
  !*** ./lib/pdf.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportNotebookAsPDF: () => (/* binding */ exportNotebookAsPDF)
/* harmony export */ });
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "webpack/sharing/consume/default/jspdf/jspdf");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
// Adapted from https://github.com/jupyterlite/jupyterlite/pull/1625


/**
 * Export a notebook panel as a PDF by rasterizing the DOM using jsPDF + html2canvas.
 */
function exportNotebookAsPDF(notebook) {
    const name = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PathExt.basename(notebook.context.path, _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PathExt.extname(notebook.context.path));
    const doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())({ orientation: 'portrait', format: 'a4' });
    return new Promise((resolve, reject) => {
        doc.html(notebook.content.node, {
            callback: () => {
                try {
                    doc.save(`${name}.pdf`);
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            },
            html2canvas: { scale: 0.25 }
        });
    });
}


/***/ }),

/***/ "./lib/placeholders.js":
/*!*****************************!*\
  !*** ./lib/placeholders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_MARKDOWN_PLACEHOLDER: () => (/* binding */ EMPTY_MARKDOWN_PLACEHOLDER),
/* harmony export */   placeholderPlugin: () => (/* binding */ placeholderPlugin)
/* harmony export */ });
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @codemirror/view */ "webpack/sharing/consume/default/@codemirror/view");
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_codemirror_view__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/codemirror */ "webpack/sharing/consume/default/@jupyterlab/codemirror");
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_1__);


const EMPTY_MARKDOWN_PLACEHOLDER = 'This is a text cell. Double-click to edit.';
const placeholderPlugin = {
    id: '@jupyter-everywhere/codemirror-extension:placeholder',
    autoStart: true,
    requires: [_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_1__.IEditorExtensionRegistry],
    activate: (app, extensions) => {
        extensions.addExtension(Object.freeze({
            name: 'placeholder',
            default: null,
            factory: () => _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_1__.EditorExtensionRegistry.createConfigurableExtension((text) => text ? (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__.placeholder)(text) : []),
            schema: {
                type: ['string', 'null'],
                title: 'Placeholder',
                description: 'Placeholder to show.'
            }
        }));
    }
};


/***/ }),

/***/ "./lib/routes.js":
/*!***********************!*\
  !*** ./lib/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/application */ "webpack/sharing/consume/default/@jupyterlite/application/@jupyterlite/application");
/* harmony import */ var _jupyterlite_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ "./lib/commands.js");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_2__);



const ROUTE_FILES_CMD = _commands__WEBPACK_IMPORTED_MODULE_1__.Commands.routeFiles;
const ROUTE_NOT_FOUND_CMD = _commands__WEBPACK_IMPORTED_MODULE_1__.Commands.routeNotFound;
const routesPlugin = {
    id: 'jupytereverywhere:routes',
    autoStart: true,
    optional: [_jupyterlite_application__WEBPACK_IMPORTED_MODULE_0__.ILiteRouter, _jupyterlab_application__WEBPACK_IMPORTED_MODULE_2__.ILabShell],
    activate: (app, router, _labShell) => {
        if (!router) {
            return;
        }
        app.commands.addCommand(ROUTE_FILES_CMD, {
            label: 'Open Files (route)',
            execute: async () => {
                await app.restored;
                await app.commands.execute(_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.openFiles);
            }
        });
        app.commands.addCommand(ROUTE_NOT_FOUND_CMD, {
            label: 'Open the "Not found" widget (route)',
            execute: async () => {
                await app.restored;
                await app.commands.execute(_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.openNotFound);
            }
        });
        const base = router.base.replace(/\/+$/, '');
        const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // 1. Support direct files/ paths, as the redirect page lands there first.
        const filesPathPatterns = [
            /^\/files(?:\/.*)?$/,
            new RegExp(`^${esc(base)}\\/files(?:\\/.*)?$`)
        ];
        filesPathPatterns.forEach(pattern => router.register({ command: ROUTE_FILES_CMD, pattern }));
        // 2. Support /lab/index.html?tab=files (or ?tab=notebook). We register a
        // router handler that just inspects the query string.
        router.register({
            command: ROUTE_FILES_CMD,
            pattern: new RegExp(`^${esc(base)}\\/?(?:index\\.html)?\\?[^#]*\\btab=files\\b(?:[&#].*)?$`)
        });
        router.register({
            command: ROUTE_FILES_CMD,
            pattern: /^\/?(?:index\.html)?\?[^#]*\btab=files\b(?:[&#].*)?$/
        });
        const notFoundPathPatterns = [/^\/404(?:\/.*)?$/, new RegExp(`^${esc(base)}\\/404(?:\\/.*)?$`)];
        notFoundPathPatterns.forEach(pattern => router.register({ command: ROUTE_NOT_FOUND_CMD, pattern }));
        router.register({
            command: ROUTE_NOT_FOUND_CMD,
            pattern: new RegExp(`^${esc(base)}\\/?(?:index\\.html)?\\?[^#]*\\btab=404\\b(?:[&#].*)?$`)
        });
        router.register({
            command: ROUTE_NOT_FOUND_CMD,
            pattern: /^\/?(?:index\.html)?\?[^#]*\btab=404\b(?:[&#].*)?$/
        });
        void app.restored.then(() => {
            const search = window.location.search || '';
            const params = new URLSearchParams(search);
            const tab = params.get('tab');
            if (tab === 'files') {
                void app.commands.execute(ROUTE_FILES_CMD).then(() => {
                    const filesURL = new URL(`${base.replace(/\/$/, '')}/lab/files/`, window.location.origin);
                    filesURL.hash = window.location.hash;
                    window.history.replaceState(null, 'Files', filesURL.toString());
                });
                return;
            }
            if (tab === '404') {
                void app.commands.execute(ROUTE_NOT_FOUND_CMD).then(() => {
                    const nfURL = new URL(`${base.replace(/\/$/, '')}/lab/404/`, window.location.origin);
                    nfURL.hash = window.location.hash;
                    window.history.replaceState(null, 'Not Found', nfURL.toString());
                });
                return;
            }
            if (tab === 'notebook') {
                const tryActivate = async () => {
                    var _a;
                    const id = (_a = document.querySelector('.jp-NotebookPanel')) === null || _a === void 0 ? void 0 : _a.id;
                    if (id) {
                        app.shell.activateById(id);
                    }
                    const nbURL = new URL(`${base.replace(/\/$/, '')}/lab/index.html`, window.location.origin);
                    nbURL.hash = window.location.hash;
                    window.history.replaceState(null, 'Notebook', nbURL.toString());
                };
                tryActivate();
            }
        });
        const here = window.location.href;
        if (filesPathPatterns.some(p => p.test(here))) {
            void app.restored.then(() => {
                void app.commands.execute(_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.openFiles);
            });
        }
        if (notFoundPathPatterns.some(p => p.test(here))) {
            void app.restored.then(() => {
                void app.commands.execute(_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.openNotFound);
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routesPlugin);


/***/ }),

/***/ "./lib/run-button.js":
/*!***************************!*\
  !*** ./lib/run-button.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputPromptIndicator: () => (/* binding */ InputPromptIndicator),
/* harmony export */   JEInputPrompt: () => (/* binding */ JEInputPrompt)
/* harmony export */ });
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./lib/icons.js");
// Most of the code in this file was inspired by the following PRs in JupyterLab upstream:
// 1. https://github.com/jupyterlab/jupyterlab/pull/16602
// 2. https://github.com/jupyterlab/jupyterlab/pull/17775



const INPUT_PROMPT_CLASS = 'jp-InputPrompt';
const INPUT_AREA_PROMPT_INDICATOR_CLASS = 'jp-InputArea-prompt-indicator';
const INPUT_AREA_PROMPT_INDICATOR_EMPTY_CLASS = 'jp-InputArea-prompt-indicator-empty';
const INPUT_AREA_PROMPT_RUN_CLASS = 'jp-InputArea-prompt-run';
class InputPromptIndicator extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.Widget {
    constructor() {
        super();
        this._executionCount = null;
        this.addClass(INPUT_AREA_PROMPT_INDICATOR_CLASS);
    }
    get executionCount() {
        return this._executionCount;
    }
    set executionCount(value) {
        this._executionCount = value;
        if (value) {
            this.node.textContent = `[${value}]:`;
            this.removeClass(INPUT_AREA_PROMPT_INDICATOR_EMPTY_CLASS);
        }
        else {
            this.node.textContent = '[ ]:';
            this.addClass(INPUT_AREA_PROMPT_INDICATOR_EMPTY_CLASS);
        }
    }
}
class JEInputPrompt extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.Widget {
    constructor(_app) {
        super();
        this._app = _app;
        this._customExecutionCount = null;
        this.addClass(INPUT_PROMPT_CLASS);
        const layout = (this.layout = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.PanelLayout());
        this._promptIndicator = new InputPromptIndicator();
        layout.addWidget(this._promptIndicator);
        this._runButton = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarButton({
            icon: _icons__WEBPACK_IMPORTED_MODULE_2__.EverywhereIcons.runCell,
            onClick: () => {
                this._app.commands.execute('notebook:run-cell');
            },
            tooltip: 'Run this cell'
        });
        this._runButton.addClass(INPUT_AREA_PROMPT_RUN_CLASS);
        this._runButton.addClass('je-cell-run-button');
        layout.addWidget(this._runButton);
    }
    get executionCount() {
        return this._customExecutionCount;
    }
    set executionCount(value) {
        this._customExecutionCount = value;
        this._promptIndicator.executionCount = value;
    }
}


/***/ }),

/***/ "./lib/sharing-service.js":
/*!********************************!*\
  !*** ./lib/sharing-service.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharingService: () => (/* binding */ SharingService),
/* harmony export */   hasRequiredKeys: () => (/* binding */ hasRequiredKeys),
/* harmony export */   validateNotebookContent: () => (/* binding */ validateNotebookContent),
/* harmony export */   validateToken: () => (/* binding */ validateToken),
/* harmony export */   validateUUID: () => (/* binding */ validateUUID)
/* harmony export */ });
/**
 * Validates if a string is a valid UUID
 */
function validateUUID(id) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
}
/**
 * Maximum notebook size we expect the backend to be able to handle.
 */
const MAX_NOTEBOOK_SIZE_MB = 10;
/**
 * HTTP status code for content too large.
 */
const CONTENT_TOO_LARGE = 413;
/**
 * Validation helper for objects
 */
function hasRequiredKeys(obj, requiredKeys) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return requiredKeys.every(key => key in obj);
}
/**
 * Validates token objects
 */
function validateToken(data) {
    return (hasRequiredKeys(data, ['token']) &&
        typeof data.token === 'string');
}
/**
 * Validates notebook content
 */
function validateNotebookContent(data) {
    if (!data || typeof data !== 'object') {
        return false;
    }
    const requiredKeys = ['cells', 'metadata', 'nbformat'];
    return requiredKeys.every(key => key in data);
}
/**
 * Validates if the provided data conforms to the IShareResponse interface.
 *
 * Checks for notebook ID
 *
 * @param data - The response to validate.
 * @returns A boolean indicating whether the data conforms to the IShareResponse interface.
 */
function validateShareResponse(data) {
    if (!hasRequiredKeys(data, ['message', 'notebook'])) {
        return false;
    }
    const response = data;
    if (typeof response.message !== 'string') {
        return false;
    }
    if (!hasRequiredKeys(response.notebook, ['id', 'readable_id'])) {
        return false;
    }
    if (!validateUUID(response.notebook.id)) {
        return false;
    }
    return true;
}
/**
 * Validates if the given data conforms to the INotebookResponse interface.
 *
 * @param data - The data to be validated.
 * @returns A boolean indicating whether the data is a valid INotebookResponse.
 */
function validateNotebookResponse(data) {
    if (!hasRequiredKeys(data, [
        'id',
        'domain_id',
        'readable_id',
        'content'
    ])) {
        return false;
    }
    const response = data;
    if (!validateUUID(response.id)) {
        return false;
    }
    if (typeof response.domain_id !== 'string') {
        return false;
    }
    if (!validateNotebookContent(response.content)) {
        return false;
    }
    return true;
}
/**
 * Service for interacting with the CKHub Sharing API
 */
class SharingService {
    /**
     * Retrieves the current authentication token, authenticating if necessary.
     *
     * @returns A promise that resolves to the current authentication token.
     */
    get token() {
        return (async () => {
            if (this._token) {
                return this._token;
            }
            return await this.authenticate();
        })();
    }
    /**
     * Creates an instance of the SharingService.
     *
     * @param url - The base URL of the API (e.g. localhost:8080/api/v1/).
     */
    constructor(url) {
        this.api_url = url instanceof URL ? url : new URL(url);
        if (!this.api_url.pathname.endsWith('/')) {
            this.api_url.pathname += '/';
        }
    }
    /**
     * Authenticates the user by making a POST request to the authentication endpoint.
     *
     * @returns {Promise<IToken>} A promise that resolves to an authentication token.
     * @throws {Error} If the authentication request fails or the token response is invalid.
     */
    async authenticate() {
        const endpoint = new URL('auth/issue', this.api_url);
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: await this.makeHeaders()
        });
        if (!response.ok) {
            throw new Error(`Authentication failed: ${response.statusText}`);
        }
        const responseData = await response.json();
        if (!validateToken(responseData)) {
            throw new Error('Invalid token response');
        }
        this._token = responseData;
        return responseData;
    }
    /**
     * Refreshes the current token.
     *
     * @param token - The token to be refreshed. If not provided, the current token will be used.
     * @returns A promise that resolves to the refreshed token.
     * @throws {Error} If the authentication request fails or the token response is invalid.
     */
    async refresh(token) {
        if (!token) {
            token = await this.token;
        }
        const endpoint = new URL('auth/refresh', this.api_url);
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: await this.makeHeaders(),
            body: JSON.stringify({ token: token.token })
        });
        if (!response.ok) {
            throw new Error(`Token refresh failed: ${response.statusText}`);
        }
        const refreshed = await response.json();
        if (!validateToken(refreshed)) {
            throw new Error('Invalid token response from refresh');
        }
        this._token = refreshed;
        return refreshed;
    }
    /**
     * Retrieves a notebook by its ID.
     *
     * @param id - The ID of the notebook to retrieve.
     * @returns A promise that resolves to the notebook response.
     * @throws {Error} If the notebook retrieval fails or if the response is invalid.
     */
    async retrieve(id) {
        id = id.trim();
        const endpoint = validateUUID(id)
            ? new URL(`notebooks/${id}`, this.api_url)
            : new URL(`notebooks/get-by-readable-id/${id}`, this.api_url);
        const token = await this.token;
        const response = await fetch(endpoint, {
            headers: await this.makeHeaders(token)
        });
        if (!response.ok) {
            throw new Error(`Failed to retrieve notebook: ${response.statusText}`);
        }
        const responseData = await response.json();
        if (!validateNotebookResponse(responseData)) {
            throw new Error('Invalid notebook response from API');
        }
        return responseData;
    }
    /**
     * Stores a notebook on the server and returns a share response with the notebook ID and metadata.
     *
     * @param notebook - The notebook content to be shared.
     * @returns A promise that resolves to the share response.
     * @throws {Error} If the notebook content is invalid or if the sharing request fails.
     */
    async share(notebook) {
        if (!validateNotebookContent(notebook)) {
            throw new Error('Invalid notebook content');
        }
        const requestData = { notebook };
        const endpoint = new URL('notebooks', this.api_url);
        const token = await this.token;
        const body = JSON.stringify(requestData);
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: await this.makeHeaders(token),
            body
        });
        if (!response.ok) {
            const sizeInMB = new Blob([body]).size / (1000 * 1000);
            if (sizeInMB > MAX_NOTEBOOK_SIZE_MB || response.status === CONTENT_TOO_LARGE) {
                throw new Error(`The notebook appears to be too large for the backend to handle (${sizeInMB.toFixed(2)} MB). Details: ${response.status} ${response.statusText}`);
            }
            throw new Error(`Server share request failed: ${response.status} ${response.statusText}`);
        }
        const responseData = await response.json();
        if (!validateShareResponse(responseData)) {
            throw new Error('Unexpected API response while sharing');
        }
        return responseData;
    }
    /**
     * Updates an existing shared notebook
     * @param id - Notebook ID
     * @param notebook - Updated notebook content
     * @returns API response with updated notebook details
     */
    async update(id, notebook) {
        if (!validateNotebookContent(notebook)) {
            throw new Error('Invalid notebook content');
        }
        const requestData = notebook;
        const endpoint = new URL(`notebooks/${id}`, this.api_url);
        const token = await this.token;
        const body = JSON.stringify(requestData);
        const response = await fetch(endpoint, {
            method: 'PUT',
            headers: await this.makeHeaders(token),
            body
        });
        if (!response.ok) {
            const sizeInMB = new Blob([body]).size / (1000 * 1000);
            if (sizeInMB > MAX_NOTEBOOK_SIZE_MB || response.status === CONTENT_TOO_LARGE) {
                throw new Error(`The notebook appears to be too large for the backend to handle (${sizeInMB.toFixed(2)} MB). Details: ${response.status} ${response.statusText}`);
            }
            throw new Error(`Server update request failed: ${response.status} ${response.statusText}`);
        }
        const responseData = await response.json();
        if (!validateShareResponse(responseData)) {
            throw new Error('Unexpected API response while updating');
        }
        return responseData;
    }
    /**
     * Constructs a URL for retrieving a notebook by its unique identifier.
     *
     * @param id - The unique identifier (UUID) or readable ID of the notebook.
     * @returns The constructed URL for retrieving the notebook.
     */
    makeRetrieveURL(id) {
        if (!id) {
            throw new Error('Notebook ID is required');
        }
        const url = validateUUID(id)
            ? new URL(`notebooks/${id}`, this.api_url)
            : new URL(`notebooks/get-by-readable-id/${id}`, this.api_url);
        return url;
    }
    /**
     * Constructs headers for HTTP requests.
     *
     * @param token - The authentication token to include in the headers.
     * @param extra - Additional headers to include.
     * @returns A promise that resolves to the constructed headers.
     */
    async makeHeaders(token, extra) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        if (extra) {
            Object.entries(extra).forEach(([key, value]) => {
                headers.set(key, value.toString());
            });
        }
        if (token) {
            headers.set('Authorization', `Bearer ${token.token}`);
        }
        return headers;
    }
}


/***/ }),

/***/ "./lib/sidebar.js":
/*!************************!*\
  !*** ./lib/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customSidebar: () => (/* binding */ customSidebar)
/* harmony export */ });
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-components/SidebarIcon */ "./lib/ui-components/SidebarIcon.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./lib/icons.js");
/* harmony import */ var _ui_components_LeaveConfirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-components/LeaveConfirmation */ "./lib/ui-components/LeaveConfirmation.js");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands */ "./lib/commands.js");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _view_only__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-only */ "./lib/view-only.js");
/* harmony import */ var _notebook_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notebook-utils */ "./lib/notebook-utils.js");









const customSidebar = {
    id: 'jupytereverywhere:sidebar',
    autoStart: true,
    requires: [_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILabShell, _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_6__.INotebookTracker, _view_only__WEBPACK_IMPORTED_MODULE_7__.IViewOnlyNotebookTracker],
    activate: (app, shell, tracker, readonlyTracker) => {
        // Overwrite behaviour of the sidebar panel
        const leftHandler = shell['_leftHandler'];
        const sidebar = leftHandler._sideBar;
        leftHandler._refreshVisibility = () => {
            sidebar.setHidden(false);
            leftHandler._stackedPanel.setHidden(true);
            leftHandler._updated.emit();
        };
        sidebar.currentChanged.connect((_sender, args) => {
            const oldWidget = args.previousTitle
                ? leftHandler._findWidgetByTitle(args.previousTitle)
                : null;
            const newWidget = args.currentTitle
                ? leftHandler._findWidgetByTitle(args.currentTitle)
                : null;
            if (newWidget && newWidget instanceof _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__.SidebarIcon) {
                const cancel = newWidget.execute();
                if (cancel === true) {
                    console.log('Attempting to revert to:', oldWidget === null || oldWidget === void 0 ? void 0 : oldWidget.label);
                    if (args.previousTitle) {
                        const previousIndex = sidebar.titles.indexOf(oldWidget);
                        if (previousIndex >= 0) {
                            sidebar.currentIndex = previousIndex;
                        }
                        else {
                            sidebar.currentIndex = -1;
                        }
                    }
                    else {
                        sidebar.currentIndex = -1;
                    }
                }
            }
        }, undefined);
        // Add Jupyter Everywhere Octopus icon
        shell.add(new _ui_components_SidebarIcon__WEBPACK_IMPORTED_MODULE_2__.SidebarIcon({
            label: 'Jupyter Everywhere',
            icon: _icons__WEBPACK_IMPORTED_MODULE_3__.EverywhereIcons.octopus,
            execute: () => {
                void (async () => {
                    var _a;
                    const readOnlyNotebookPanel = readonlyTracker.currentWidget;
                    const notebookPanel = tracker.currentWidget;
                    // If a view-only notebook is open: skip dialog and go home,
                    // as we cannot save the notebook anyway + we can assume the
                    // user retrieved the URL from somewhere (either someone else's
                    // or their own notebook) to paste or share in the first place
                    if (readOnlyNotebookPanel) {
                        window.location.href = '/index.html';
                        return;
                    }
                    // If we have a new notebook, decide based on emptiness.
                    if (notebookPanel) {
                        const content = notebookPanel.context.model.toJSON();
                        const empty = (0,_notebook_utils__WEBPACK_IMPORTED_MODULE_8__.isNotebookEmpty)(content);
                        if (empty) {
                            window.location.href = '/index.html';
                            return;
                        }
                        // Non-empty regular notebook -> confirm and optionally save/share
                        const dialog = new _ui_components_LeaveConfirmation__WEBPACK_IMPORTED_MODULE_4__.LeaveDialog({
                            title: _ui_components_LeaveConfirmation__WEBPACK_IMPORTED_MODULE_4__.LEAVE_CONFIRMATION_TITLE,
                            body: new _ui_components_LeaveConfirmation__WEBPACK_IMPORTED_MODULE_4__.LeaveConfirmation(),
                            hasClose: true,
                            buttons: [
                                _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.createButton({
                                    label: "Don't save and leave",
                                    accept: true,
                                    actions: ['leave-nosave']
                                }),
                                _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.Dialog.okButton({
                                    label: 'Save and leave',
                                    actions: ['leave-save']
                                })
                            ],
                            defaultButton: 1
                        });
                        const result = await dialog.launch();
                        const actions = (_a = result.button.actions) !== null && _a !== void 0 ? _a : [];
                        if (actions.includes('leave-nosave')) {
                            window.location.href = '/index.html';
                            return;
                        }
                        if (actions.includes('leave-save')) {
                            try {
                                await app.commands.execute(_commands__WEBPACK_IMPORTED_MODULE_5__.Commands.shareNotebookCommand);
                            }
                            catch (error) {
                                console.error('Failed to share notebook before leaving to the Landing page:', error);
                            }
                            window.location.href = '/index.html';
                        }
                        return;
                    }
                })();
                return true;
            }
        }), 'left', { rank: 0 });
    }
};


/***/ }),

/***/ "./lib/single-mode.js":
/*!****************************!*\
  !*** ./lib/single-mode.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   singleDocumentMode: () => (/* binding */ singleDocumentMode)
/* harmony export */ });
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hard-enforce single-document mode after restore and keep the URL param in sync (?todo drop this and figure out the right schema?)
 */
const singleDocumentMode = {
    id: 'jupytereverywhere:force-single-mode',
    autoStart: true,
    optional: [_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.IRouter, _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILabShell],
    activate: (app, router, labShell) => {
        if (!labShell) {
            return;
        }
        const setSingle = () => {
            if (labShell.mode !== 'single-document') {
                labShell.mode = 'single-document';
            }
            _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.PageConfig.setOption('mode', 'single-document');
            const url = new URL(window.location.href);
            if (url.searchParams.get('mode') !== 'single-document') {
                url.searchParams.set('mode', 'single-document');
                const next = `${url.pathname}${url.search}${url.hash}`;
                router === null || router === void 0 ? void 0 : router.navigate(next, { skipRouting: true });
            }
        };
        // 1) After the layout has been restored, assert single mode
        void app.restored.then(() => {
            setSingle();
            // 2) If anything later toggles mode (e.g. a workspace or a command), snap back to single
            labShell.modeChanged.connect((_sender, newMode) => {
                if (newMode !== 'single-document') {
                    setSingle();
                }
            });
            // 3) Now drop mode=single-document URL param from URL
            const url = new URL(window.location.href);
            url.searchParams.delete('mode');
            const next = `${url.pathname}${url.search}${url.hash}`;
            router === null || router === void 0 ? void 0 : router.navigate(next, { skipRouting: true });
        });
    }
};


/***/ }),

/***/ "./lib/ui-components/DownloadDropdownButton.js":
/*!*****************************************************!*\
  !*** ./lib/ui-components/DownloadDropdownButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadDropdownButton: () => (/* binding */ DownloadDropdownButton)
/* harmony export */ });
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./lib/icons.js");





class DownloadDropdownButton extends _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    constructor(commands) {
        super();
        this.addClass('jp-Toolbar-item');
        this.addClass('jp-Toolbar-button');
        this._menu = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_2__.Menu({ commands });
        this._menu.addClass('je-DownloadDropdownButton-menu');
        this._menu.addClass('je-DropdownMenu');
        this._menu.addItem({ command: 'jupytereverywhere:download-pdf' });
        this._menu.addItem({ command: 'jupytereverywhere:download-notebook' });
        this._menu.id = _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__.UUID.uuid4();
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarButtonComponent, { className: "je-DownloadButton", icon: _icons__WEBPACK_IMPORTED_MODULE_4__.EverywhereIcons.downloadCaret, label: "Download", tooltip: "Download notebook", onClick: this._showMenu.bind(this), "aria-expanded": this._menu.isVisible, "aria-controls": this._menu.id, "aria-haspopup": true }));
    }
    _showMenu() {
        var _a;
        const node = (_a = this.node.querySelector('jp-button')) !== null && _a !== void 0 ? _a : this.node;
        const rect = node.getBoundingClientRect();
        this._menu.open(rect.left, rect.top - 4);
    }
}


/***/ }),

/***/ "./lib/ui-components/FilesWarningBanner.js":
/*!*************************************************!*\
  !*** ./lib/ui-components/FilesWarningBanner.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesWarningBanner: () => (/* binding */ FilesWarningBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Warning banner displayed at the bottom of the Files widget.
 */
const FilesWarningBanner = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "je-WarningBanner" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "je-WarningBanner-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "WARNING:"),
            " To save memory, all data and image files are discarded after each session. Please upload your data each time you use your notebook. Note: images rendered in the notebook will persist between sessions.")));
};


/***/ }),

/***/ "./lib/ui-components/KernelSwitcherDropdownButton.js":
/*!***********************************************************!*\
  !*** ./lib/ui-components/KernelSwitcherDropdownButton.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KernelSwitcherDropdownButton: () => (/* binding */ KernelSwitcherDropdownButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./lib/icons.js");
/* harmony import */ var _kernels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kernels */ "./lib/kernels.js");






class KernelSwitcherDropdownButton extends _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__.ReactWidget {
    constructor(commands, tracker) {
        super();
        this._currentKernelName = null;
        this.addClass('jp-Toolbar-item');
        this.addClass('jp-Toolbar-button');
        this._tracker = tracker;
        this._menu = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_2__.Menu({ commands });
        this._menu.addClass('je-KernelSwitcherDropdownButton-menu');
        this._menu.addClass('je-DropdownMenu');
        this._menu.id = _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__.UUID.uuid4();
    }
    onAfterAttach(msg) {
        super.onAfterAttach(msg);
        this._tracker.currentChanged.connect(this._onActiveNotebookChanged, this);
        this._onActiveNotebookChanged();
    }
    _onActiveNotebookChanged() {
        var _a, _b;
        const panel = this._tracker.currentWidget;
        if (!panel) {
            this._currentKernelName = null;
            this.update();
            return;
        }
        panel.sessionContext.kernelChanged.connect(this._onKernelChanged, this);
        this._currentKernelName = ((_b = (_a = panel.sessionContext.session) === null || _a === void 0 ? void 0 : _a.kernel) === null || _b === void 0 ? void 0 : _b.name) || null;
        this.update();
    }
    _onKernelChanged() {
        var _a, _b;
        const panel = this._tracker.currentWidget;
        if (!panel) {
            this._currentKernelName = null;
            this.update();
            return;
        }
        this._currentKernelName = ((_b = (_a = panel.sessionContext.session) === null || _a === void 0 ? void 0 : _a.kernel) === null || _b === void 0 ? void 0 : _b.name) || null;
        this.update();
    }
    render() {
        var _a, _b;
        const label = (_b = _kernels__WEBPACK_IMPORTED_MODULE_5__.KERNEL_DISPLAY_NAMES[(_a = this._currentKernelName) !== null && _a !== void 0 ? _a : '']) !== null && _b !== void 0 ? _b : 'Select Kernel';
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButtonComponent, { className: "je-KernelSwitcherButton", icon: _icons__WEBPACK_IMPORTED_MODULE_4__.EverywhereIcons.kernelCaret, label: label, tooltip: "Switch coding language", onClick: () => this._showMenu(), "aria-expanded": this._menu.isVisible, "aria-controls": this._menu.id, "aria-haspopup": true }));
    }
    _showMenu() {
        var _a, _b, _c, _d, _e;
        const currentKernel = (_d = (_c = (_b = (_a = this._tracker.currentWidget) === null || _a === void 0 ? void 0 : _a.sessionContext.session) === null || _b === void 0 ? void 0 : _b.kernel) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : undefined;
        const isCurrentActive = typeof currentKernel === 'string' && _kernels__WEBPACK_IMPORTED_MODULE_5__.ACTIVE_KERNELS.includes(currentKernel);
        // We order the kernels, so that the current kernel appears first
        // in the dropdown.
        const orderedKernels = isCurrentActive
            ? [currentKernel, ..._kernels__WEBPACK_IMPORTED_MODULE_5__.ACTIVE_KERNELS.filter(k => k !== currentKernel)]
            : _kernels__WEBPACK_IMPORTED_MODULE_5__.ACTIVE_KERNELS;
        this._menu.clearItems();
        for (const kernel of orderedKernels) {
            const isActive = kernel === currentKernel;
            this._menu.addItem({
                command: 'jupytereverywhere:switch-kernel',
                args: { kernel, isActive }
            });
        }
        const node = (_e = this.node.querySelector('jp-button')) !== null && _e !== void 0 ? _e : this.node;
        const rect = node.getBoundingClientRect();
        this._menu.open(rect.left, rect.top - 4);
    }
}


/***/ }),

/***/ "./lib/ui-components/LeaveConfirmation.js":
/*!************************************************!*\
  !*** ./lib/ui-components/LeaveConfirmation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LEAVE_CONFIRMATION_TITLE: () => (/* binding */ LEAVE_CONFIRMATION_TITLE),
/* harmony export */   LeaveConfirmation: () => (/* binding */ LeaveConfirmation),
/* harmony export */   LeaveDialog: () => (/* binding */ LeaveDialog)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LEAVE_CONFIRMATION_TITLE = 'Would you like to save the link to your notebook before navigating away?';
/**
 * A dialog widget that asks users if they want to share the notebook
 * before navigating away from the current page.
 */
class LeaveConfirmation extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    constructor() {
        super();
        this.addClass('je-LeaveDialog');
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "je-LeaveDialog-body" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "je-LeaveDialog-note" }, "Note: To edit your work later, you'll have to save the link to your notebook and make a copy."))));
    }
}
/**
 * A dialog with a "close" button in the top-right corner, currently here
 * because we only use hasClose in the leave confirmation dialog.
 */
class LeaveDialog extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog {
    constructor(options) {
        const normalized = {
            host: document.body,
            ...options
        };
        super(normalized);
        this.addClass('je-LeaveDialog-container');
    }
}


/***/ }),

/***/ "./lib/ui-components/PageTitle.js":
/*!****************************************!*\
  !*** ./lib/ui-components/PageTitle.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageTitle: () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class PageTitle extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    constructor(props) {
        super();
        this.props = props;
        this.addClass('je-PageTitle');
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(this.props.icon.react, { className: "je-PageTitle-icon" }),
            this.props.label));
    }
}


/***/ }),

/***/ "./lib/ui-components/SidebarIcon.js":
/*!******************************************!*\
  !*** ./lib/ui-components/SidebarIcon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarIcon: () => (/* binding */ SidebarIcon)
/* harmony export */ });
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_1__);


/**
 * An icon in the sidebar that executes a command when clicked. If a pathName
 * is provided, it also updates the URL to that pathName. This could extend Widget,
 * StackedPanel is just temporary as it gives 0-width layout.
 */
class SidebarIcon extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.StackedPanel {
    constructor(_options) {
        super();
        this._options = _options;
        this.title.caption = _options.label;
        this.title.icon = _options.icon;
        this.id = _lumino_coreutils__WEBPACK_IMPORTED_MODULE_0__.UUID.uuid4();
    }
    execute() {
        var _a;
        const ret = this._options.execute();
        if (ret === SidebarIcon.delegateNavigation && this._options.pathName) {
            const target = new URL(this._options.pathName, window.location.origin);
            const here = window.location.href;
            const there = target.href;
            if (here !== there) {
                window.history.pushState(null, (_a = this.title.caption) !== null && _a !== void 0 ? _a : '', there);
            }
        }
        return ret;
    }
}
// A return token that we use to signal whether we should let the SidebarIcon handle navigation or not
SidebarIcon.delegateNavigation = Symbol('delegateNavigation');


/***/ }),

/***/ "./lib/ui-components/share-dialog.js":
/*!*******************************************!*\
  !*** ./lib/ui-components/share-dialog.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareDialog: () => (/* binding */ ShareDialog),
/* harmony export */   createErrorDialog: () => (/* binding */ createErrorDialog),
/* harmony export */   createSuccessDialog: () => (/* binding */ createSuccessDialog)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notebook_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notebook-utils */ "./lib/notebook-utils.js");



/**
 * Share dialog widget component.
 *
 * @param props - The component props are:
 *   - notebookName: The current notebook name to display in the input field.
 *   - onNameChange: Callback invoked when the notebook name is edited.
 * @returns A JSX element containing a labelled input field for renaming the notebook.
 */
const ShareDialogComponent = ({ notebookName, onNameChange }) => {
    const handleNameChange = (e) => {
        onNameChange(e.target.value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "notebook-name" }, "Notebook Name:"),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { id: "notebook-name", type: "text", value: notebookName, onChange: handleNameChange, style: {
                width: '100%',
                marginBottom: '15px',
                padding: '5px'
            }, required: true })));
};
class ShareDialog extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    constructor() {
        super();
        // Generate default values
        this._notebookName = (0,_notebook_utils__WEBPACK_IMPORTED_MODULE_2__.generateDefaultNotebookName)();
    }
    /**
     * Retrieve the notebook name from the input field.
     *
     * @returns An object containing the notebook name entered by the user.
     */
    getValue() {
        // Get current values from the DOM
        const nameInput = this.node.querySelector('#notebook-name');
        return {
            notebookName: (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) || this._notebookName
        };
    }
    /**
     * Renders the React component for the share dialog.
     *
     * @returns A JSX element that represents the share dialog.
     */
    render() {
        const [notebookName, setNotebookName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(this._notebookName);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ShareDialogComponent, { notebookName: notebookName, onNameChange: setNotebookName });
    }
}
/**
 * Success dialog - shows the shareable link after a successful notebook save operation.
 *
 * @param shareableLink - The URL that allows users to view the shared notebook.
 * @returns A React element containing the shareable link with styling.
 */
const createSuccessDialog = (shareableLink) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "je-share-link" }, shareableLink);
};
/**
 * Creates an error dialog component for displaying notebook sharing
 * failures. It displays a generic error message.
 *
 * @param error - The error that occurred during notebook sharing. Can
 *                be an Error object or any other value.
 * @returns A React JSX element containing the formatted error message.
 */
const createErrorDialog = (error) => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
            "Failed to share notebook: ",
            error instanceof Error ? error.message : 'Unknown error')));
};


/***/ }),

/***/ "./lib/ui-components/upload-conflict.js":
/*!**********************************************!*\
  !*** ./lib/ui-components/upload-conflict.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showUploadConflictDialog: () => (/* binding */ showUploadConflictDialog)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Shows a dialog informing the user that one or more files already exist.
 * @param fileNames - an array of conflicting file names.
 * @returns - A promise that resolves when the dialog is closed.
 */
async function showUploadConflictDialog(fileNames) {
    let body;
    if (fileNames.length === 1) {
        body = `A file named "${fileNames[0]}" already exists. Please choose a different file to upload, or rename the file before uploading.`;
    }
    else {
        const fileList = fileNames.map(name => `"${name}"`).join(', ');
        body = `The following files already exist: ${fileList}. Please choose different files to upload, or rename the files before uploading.`;
    }
    await (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showDialog)({
        title: fileNames.length === 1 ? 'File already exists' : 'Files already exist',
        body,
        buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.okButton({ label: 'Close' })]
    });
}


/***/ }),

/***/ "./lib/view-only.js":
/*!**************************!*\
  !*** ./lib/view-only.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IViewOnlyNotebookTracker: () => (/* binding */ IViewOnlyNotebookTracker),
/* harmony export */   VIEW_ONLY_NOTEBOOK_FACTORY: () => (/* binding */ VIEW_ONLY_NOTEBOOK_FACTORY),
/* harmony export */   ViewOnlyNotebook: () => (/* binding */ ViewOnlyNotebook),
/* harmony export */   ViewOnlyNotebookPanel: () => (/* binding */ ViewOnlyNotebookPanel),
/* harmony export */   viewOnlyNotebookFactoryPlugin: () => (/* binding */ viewOnlyNotebookFactoryPlugin)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_codeeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/codeeditor */ "webpack/sharing/consume/default/@jupyterlab/codeeditor");
/* harmony import */ var _jupyterlab_codeeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_codeeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_docregistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/docregistry */ "webpack/sharing/consume/default/@jupyterlab/docregistry");
/* harmony import */ var _jupyterlab_docregistry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_docregistry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jupyterlab/settingregistry */ "webpack/sharing/consume/default/@jupyterlab/settingregistry");
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jupyterlab/rendermime */ "webpack/sharing/consume/default/@jupyterlab/rendermime");
/* harmony import */ var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_9__);











const VIEW_ONLY_NOTEBOOK_FACTORY = 'ViewOnlyNotebook';
const NOTEBOOK_PANEL_CLASS = 'jp-NotebookPanel';
const NOTEBOOK_PANEL_TOOLBAR_CLASS = 'jp-NotebookPanel-toolbar';
const NOTEBOOK_PANEL_NOTEBOOK_CLASS = 'jp-NotebookPanel-notebook';
const IViewOnlyNotebookTracker = new _lumino_coreutils__WEBPACK_IMPORTED_MODULE_9__.Token('jupytereverywhere:view-only-notebook:IViewOnlyNotebookTracker');
/**
 * Creates a "View Only" header widget for view-only notebooks.
 */
class ViewOnlyHeader extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_8__.Widget {
    constructor() {
        super();
        this.addClass('je-ViewOnlyHeader');
        const contentNode = document.createElement('div');
        contentNode.className = 'je-ViewOnlyHeader-content';
        contentNode.textContent = 'View Only';
        this.node.appendChild(contentNode);
    }
}
class FilteredToolbar extends _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_1__.ReactiveToolbar {
    constructor(options) {
        super(options);
        this._itemsToFilterOut = options.itemsToFilterOut;
    }
    insertItem(index, name, widget) {
        var _a;
        if ((_a = this._itemsToFilterOut) === null || _a === void 0 ? void 0 : _a.has(name)) {
            return false;
        }
        return super.insertItem(index, name, widget);
    }
}
class ViewOnlyNotebook extends _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.StaticNotebook {
}
class ViewOnlyNotebookPanel extends _jupyterlab_docregistry__WEBPACK_IMPORTED_MODULE_3__.DocumentWidget {
    /**
     * Construct a new view-only notebook panel.
     */
    constructor(options) {
        super({
            ...options,
            toolbar: new FilteredToolbar({
                itemsToFilterOut: new Set(['read-only-indicator'])
            })
        });
        this.addClass(NOTEBOOK_PANEL_CLASS);
        this.toolbar.addClass(NOTEBOOK_PANEL_TOOLBAR_CLASS);
        this.toolbar.addClass('je-ViewOnlyNotebookToolbar');
        this.content.addClass(NOTEBOOK_PANEL_NOTEBOOK_CLASS);
        this.content.model = this.context.model;
        const headerWidget = new ViewOnlyHeader();
        this.contentHeader.insertWidget(0, headerWidget);
        this.contentHeader.addClass('je-ViewOnlyHeader-wrapper');
    }
}
class ViewOnlyNotebookWidgetFactory extends _jupyterlab_docregistry__WEBPACK_IMPORTED_MODULE_3__.ABCWidgetFactory {
    /**
     * Construct a new notebook widget factory.
     *
     * @param options - The options used to construct the factory.
     */
    constructor(_options) {
        super(_options);
        this._options = _options;
    }
    /**
     * Create a new widget.
     */
    createNewWidget(context, source) {
        const translator = context.translator;
        const { contentFactory, mimeTypeService, rendermime } = this._options;
        const nbOptions = {
            rendermime: source
                ? source.content.rendermime
                : rendermime.clone({ resolver: context.urlResolver }),
            contentFactory,
            mimeTypeService,
            editorConfig: source
                ? source.content.editorConfig
                : this._options.editorConfig || _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.StaticNotebook.defaultEditorConfig,
            notebookConfig: source
                ? source.content.notebookConfig
                : this._options.notebookConfig || _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.StaticNotebook.defaultNotebookConfig,
            translator
        };
        const content = new ViewOnlyNotebook(nbOptions);
        return new ViewOnlyNotebookPanel({ context, content });
    }
}
class ViewOnlyContentFactory extends _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.Notebook.ContentFactory {
    createMarkdownCell(options) {
        const cell = super.createMarkdownCell(options);
        cell.showEditorForReadOnly = false;
        return cell;
    }
}
const viewOnlyNotebookFactoryPlugin = {
    id: 'jupytereverywhere:view-only-notebook',
    requires: [
        _jupyterlab_codeeditor__WEBPACK_IMPORTED_MODULE_2__.IEditorServices,
        _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_5__.IRenderMimeRegistry,
        _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.IToolbarWidgetRegistry,
        _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_4__.ISettingRegistry,
        _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_6__.ITranslator
    ],
    provides: IViewOnlyNotebookTracker,
    autoStart: true,
    activate: (app, editorServices, rendermime, toolbarRegistry, settingRegistry, translator) => {
        // This needs to have a `toolbar` property with an array
        const PANEL_SETTINGS = 'jupytereverywhere:plugin';
        const toolbarFactory = (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.createToolbarFactory)(toolbarRegistry, settingRegistry, VIEW_ONLY_NOTEBOOK_FACTORY, PANEL_SETTINGS, translator);
        const trans = translator.load('jupyterlab');
        const editorFactory = editorServices.factoryService.newInlineEditor;
        const factory = new ViewOnlyNotebookWidgetFactory({
            name: VIEW_ONLY_NOTEBOOK_FACTORY,
            label: trans.__('View-only Notebook'),
            fileTypes: ['notebook'],
            modelName: 'notebook',
            preferKernel: false,
            canStartKernel: false,
            rendermime,
            contentFactory: new ViewOnlyContentFactory({ editorFactory }),
            editorConfig: _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.StaticNotebook.defaultEditorConfig,
            notebookConfig: _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.StaticNotebook.defaultNotebookConfig,
            mimeTypeService: editorServices.mimeTypeService,
            toolbarFactory,
            translator
        });
        const tracker = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.WidgetTracker({
            namespace: 'view-only-notebook'
        });
        factory.widgetCreated.connect((sender, widget) => {
            void tracker.add(widget);
        });
        app.docRegistry.addWidgetFactory(factory);
        return tracker;
    }
};


/***/ }),

/***/ "./style/icons/add.svg":
/*!*****************************!*\
  !*** ./style/icons/add.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg width=\"24\" height=\"23\" viewBox=\"0 0 24 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M2.63806 11.2098H19.8047M11.1805 2.62842V19.7951\" stroke=\"#F47950\" stroke-width=\"4.48944\" stroke-linecap=\"round\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/addFile.svg":
/*!*********************************!*\
  !*** ./style/icons/addFile.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg width=\"49\" height=\"55\" viewBox=\"0 0 49 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M27.5 8.59375C27.5 6.69238 25.9639 5.15625 24.0625 5.15625C22.1611 5.15625 20.625 6.69238 20.625 8.59375V24.0625H5.15625C3.25488 24.0625 1.71875 25.5986 1.71875 27.5C1.71875 29.4014 3.25488 30.9375 5.15625 30.9375H20.625V46.4062C20.625 48.3076 22.1611 49.8438 24.0625 49.8438C25.9639 49.8438 27.5 48.3076 27.5 46.4062V30.9375H42.9688C44.8701 30.9375 46.4062 29.4014 46.4062 27.5C46.4062 25.5986 44.8701 24.0625 42.9688 24.0625H27.5V8.59375Z\" fill=\"#F47950\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/competition.svg":
/*!*************************************!*\
  !*** ./style/icons/competition.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg width=\"50\" height=\"83\" viewBox=\"0 0 50 83\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<mask id=\"mask0_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"32\" y=\"32\" width=\"18\" height=\"18\">\n<path d=\"M32.6774 32.3929H49.3963V49.1119H32.6774V32.3929Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask0_153_5173)\">\n<mask id=\"mask1_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"32\" y=\"32\" width=\"18\" height=\"18\">\n<path d=\"M41.0381 32.3929C36.4218 32.3929 32.6774 36.1348 32.6774 40.7537C32.6774 45.37 36.4218 49.1119 41.0381 49.1119C45.6545 49.1119 49.3963 45.37 49.3963 40.7537C49.3963 36.1348 45.6545 32.3929 41.0381 32.3929Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask1_153_5173)\">\n<path d=\"M41.0381 32.3929C36.4218 32.3929 32.6774 36.1348 32.6774 40.7537C32.6774 45.37 36.4218 49.1119 41.0381 49.1119C45.6545 49.1119 49.3963 45.37 49.3963 40.7537C49.3963 36.1348 45.6545 32.3929 41.0381 32.3929Z\" stroke=\"#482F87\" stroke-width=\"4.07041\"/>\n</g>\n</g>\n<mask id=\"mask2_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"32\" width=\"17\" height=\"18\">\n<path d=\"M0 32.3929H16.7189V49.1119H0V32.3929Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask2_153_5173)\">\n<mask id=\"mask3_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"32\" width=\"17\" height=\"18\">\n<path d=\"M8.36078 32.3929C3.74446 32.3929 0 36.1348 0 40.7537C0 45.37 3.74446 49.1119 8.36078 49.1119C12.9771 49.1119 16.7189 45.37 16.7189 40.7537C16.7189 36.1348 12.9771 32.3929 8.36078 32.3929Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask3_153_5173)\">\n<path d=\"M8.36078 32.3929C3.74446 32.3929 0 36.1348 0 40.7537C0 45.37 3.74446 49.1119 8.36078 49.1119C12.9771 49.1119 16.7189 45.37 16.7189 40.7537C16.7189 36.1348 12.9771 32.3929 8.36078 32.3929Z\" stroke=\"#482F87\" stroke-width=\"4.07041\"/>\n</g>\n</g>\n<path d=\"M24.698 2V18.1359M36.9834 11.5745L33.4298 17.7305M11.8905 12.1893L15.5369 18.2896\" stroke=\"#F47950\" stroke-width=\"3.05281\" stroke-linecap=\"round\"/>\n<mask id=\"mask4_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"61\" width=\"11\" height=\"17\">\n<path d=\"M19.9574 61.3973H29.4656V77.7028H19.9574V61.3973Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask4_153_5173)\">\n<mask id=\"mask5_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"61\" width=\"11\" height=\"17\">\n<path d=\"M21.4838 61.3973H27.9392C28.342 61.3973 28.7316 61.559 29.0178 61.8452C29.304 62.1314 29.4656 62.5209 29.4656 62.9237V76.1632C29.4656 76.566 29.304 76.9555 29.0178 77.2417C28.7316 77.5279 28.342 77.6896 27.9392 77.6896H21.4838C21.0784 77.6896 20.6888 77.5279 20.4026 77.2417C20.1164 76.9555 19.9574 76.566 19.9574 76.1632V62.9237C19.9574 62.5209 20.1164 62.1314 20.4026 61.8452C20.6888 61.559 21.0784 61.3973 21.4838 61.3973Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask5_153_5173)\">\n<path d=\"M19.9574 61.3973H29.4656V77.7028H19.9574V61.3973Z\" fill=\"#482F87\"/>\n</g>\n</g>\n<mask id=\"mask6_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"13\" y=\"72\" width=\"24\" height=\"11\">\n<path d=\"M13.3057 72.8533H36.1514V82.4569H13.3057V72.8533Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask6_153_5173)\">\n<mask id=\"mask7_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"13\" y=\"72\" width=\"24\" height=\"11\">\n<path d=\"M15.3409 72.8533H34.0791C35.2054 72.8533 36.1143 73.7649 36.1143 74.8885V80.4217C36.1143 81.5453 35.2054 82.4569 34.0791 82.4569H15.3409C14.2173 82.4569 13.3057 81.5453 13.3057 80.4217V74.8885C13.3057 73.7649 14.2173 72.8533 15.3409 72.8533Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask7_153_5173)\">\n<path d=\"M13.3057 72.8533H36.1143V82.4569H13.3057V72.8533Z\" fill=\"#482F87\"/>\n</g>\n</g>\n<mask id=\"mask8_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"13\" y=\"72\" width=\"24\" height=\"11\">\n<path d=\"M13.3057 72.8533H36.2018V82.5205H13.3057V72.8533Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask8_153_5173)\">\n<mask id=\"mask9_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"13\" y=\"72\" width=\"24\" height=\"11\">\n<path d=\"M15.3409 72.8533H34.0791C35.2027 72.8533 36.1143 73.7649 36.1143 74.8885V80.4217C36.1143 81.5453 35.2027 82.4569 34.0791 82.4569H15.3409C14.2173 82.4569 13.3057 81.5453 13.3057 80.4217V74.8885C13.3057 73.7649 14.2173 72.8533 15.3409 72.8533Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask9_153_5173)\">\n<path d=\"M15.3409 72.8533H34.0791C35.2027 72.8533 36.1143 73.7649 36.1143 74.8885V80.4217C36.1143 81.5453 35.2027 82.4569 34.0791 82.4569H15.3409C14.2173 82.4569 13.3057 81.5453 13.3057 80.4217V74.8885C13.3057 73.7649 14.2173 72.8533 15.3409 72.8533Z\" stroke=\"white\" stroke-width=\"3.05281\"/>\n</g>\n</g>\n<mask id=\"mask10_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"8\" y=\"26\" width=\"34\" height=\"42\">\n<path d=\"M8.3606 26.812H41.0061V67.1107H8.3606V26.812Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask10_153_5173)\">\n<mask id=\"mask11_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"8\" y=\"26\" width=\"34\" height=\"42\">\n<path d=\"M30.1172 66.1673C28.4503 66.7371 26.5423 67.1107 24.674 67.1107C22.8058 67.1107 21.0091 66.7901 19.3528 66.2203C19.3184 66.2044 19.2839 66.2044 19.2468 66.1859C13.0273 63.9095 8.44805 57.8966 8.3606 50.8715V30.4929C8.3606 28.5239 9.95325 26.9313 11.9222 26.9313H37.4444C39.4107 26.9313 41.0061 28.5239 41.0061 30.4929V50.8529C40.9186 57.9337 36.4083 63.9439 30.1172 66.1673Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask11_153_5173)\">\n<path d=\"M41.006 67.1111H8.36053V26.9396H41.006V67.1111Z\" fill=\"#482F87\"/>\n</g>\n</g>\n<mask id=\"mask12_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"16\" y=\"35\" width=\"17\" height=\"17\">\n<path d=\"M16.528 35.9943H32.8733V51.6558H16.528V35.9943Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask12_153_5173)\">\n<mask id=\"mask13_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"16\" y=\"36\" width=\"17\" height=\"16\">\n<path d=\"M25.1567 36.3522L26.3836 40.1364C26.6645 41.003 27.4701 41.5886 28.3817 41.5886H32.3435C32.5581 41.5886 32.7489 41.7264 32.8152 41.9305C32.8814 42.1345 32.8099 42.3598 32.635 42.487L29.4285 44.8217C28.6918 45.3596 28.3844 46.3057 28.6653 47.1722L29.8922 50.9564C29.9585 51.1605 29.8843 51.3831 29.712 51.5103C29.5371 51.6375 29.3013 51.6348 29.129 51.5103L25.9199 49.173C25.1832 48.6377 24.1868 48.6377 23.4527 49.173L20.2435 51.5103C20.0713 51.6348 19.8354 51.6375 19.6605 51.5103C19.4883 51.3831 19.4141 51.1605 19.4803 50.9564L20.7073 47.1722C20.9882 46.3057 20.6808 45.3596 19.9441 44.8217L16.7349 42.487C16.5627 42.3598 16.4885 42.1345 16.5547 41.9305C16.6236 41.7264 16.8118 41.5886 17.0291 41.5886H20.9908C21.9024 41.5886 22.708 41.003 22.9889 40.1364L24.2159 36.3522C24.2822 36.1482 24.4703 36.0104 24.685 36.0104C24.8996 36.0104 25.0904 36.1482 25.1567 36.3522Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask13_153_5173)\">\n<path d=\"M15.5024 34.8998H33.8987V52.4084H15.5024V34.8998Z\" fill=\"#D7C1DC\"/>\n</g>\n</g>\n<mask id=\"mask14_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"7\" y=\"25\" width=\"35\" height=\"44\">\n<path d=\"M7.75122 25.8977H41.8409V68.1256H7.75122V25.8977Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask14_153_5173)\">\n<mask id=\"mask15_153_5173\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"7\" y=\"25\" width=\"35\" height=\"44\">\n<path d=\"M30.4115 67.1822C28.6625 67.7519 26.6591 68.1256 24.6981 68.1256C22.7397 68.1256 20.8529 67.8049 19.1145 67.2352C19.0774 67.2193 19.0403 67.2193 19.0032 67.2007C12.4762 64.9244 7.66911 58.9142 7.57635 51.8439V29.4779C7.57635 27.5089 9.16901 25.9163 11.138 25.9163H38.2794C40.2457 25.9163 41.841 27.5089 41.841 29.4779V51.8227C41.7482 58.9486 37.0153 64.9588 30.4115 67.1822Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask15_153_5173)\">\n<path d=\"M30.4115 67.1822C28.6625 67.7519 26.6591 68.1256 24.6981 68.1256C22.7397 68.1256 20.8529 67.8049 19.1145 67.2352C19.0774 67.2193 19.0403 67.2193 19.0032 67.2007C12.4762 64.9244 7.66911 58.9142 7.57635 51.8439V29.4779C7.57635 27.5089 9.16901 25.9163 11.138 25.9163H38.2794C40.2457 25.9163 41.841 27.5089 41.841 29.4779V51.8227C41.7482 58.9486 37.0153 64.9588 30.4115 67.1822Z\" stroke=\"white\" stroke-width=\"3.05281\"/>\n</g>\n</g>\n</svg>\n";

/***/ }),

/***/ "./style/icons/download-caret.svg":
/*!****************************************!*\
  !*** ./style/icons/download-caret.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg width=\"28\" height=\"29\" viewBox=\"0 0 36 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M17.5458 4.84912C9.61915 4.84912 3.18896 11.2754 3.18896 19.206C3.18896 27.1365 9.61915 33.5628 17.5458 33.5628C25.4764 33.5628 31.9027 27.1365 31.9027 19.206C31.9027 11.2754 25.4764 4.84912 17.5458 4.84912Z\"\n    stroke=\"#F47950\" stroke-width=\"5\" fill=\"none\"\n  />\n  <path\n    d=\"M18.8203 23.4497L23.3214 16.8948C23.5669 16.5324 23.5942 16.0647 23.3916 15.675C23.185 15.2853 22.7836 15.0437 22.3471 15.0437H12.7525C12.3122 15.0437 11.9108 15.2853 11.7042 15.675C11.5016 16.0647 11.5288 16.5324 11.7782 16.8948L16.2794 23.4497C16.5639 23.8667 17.0393 24.12 17.5498 24.12C18.0564 24.12 18.5319 23.8667 18.8203 23.4497Z\"\n    fill=\"#F47950\"\n  />\n</svg>\n";

/***/ }),

/***/ "./style/icons/dropdown-triangle.svg":
/*!*******************************************!*\
  !*** ./style/icons/dropdown-triangle.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg width=\"9\" height=\"8\" viewBox=\"0 0 9 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.43159 7.03502L8.79299 2.13785C8.97634 1.86708 8.99671 1.5177 8.84537 1.22655C8.69113 0.935397 8.39137 0.754883 8.06541 0.754883H0.900255C0.571392 0.754883 0.271631 0.935397 0.117385 1.22655C-0.0339504 1.5177 -0.0135789 1.86708 0.17268 2.13785L3.53408 7.03502C3.74653 7.34656 4.10158 7.5358 4.48283 7.5358C4.86117 7.5358 5.21623 7.34656 5.43159 7.03502Z\" fill=\"#F47950\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/ellipsis.svg":
/*!**********************************!*\
  !*** ./style/icons/ellipsis.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg width=\"24\" height=\"6\" viewBox=\"0 0 24 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.64773 5.25C1.95833 5.25 1.36742 5.00758 0.875 4.52273C0.382576 4.03788 0.140152 3.44697 0.147727 2.75C0.140152 2.06818 0.382576 1.48485 0.875 1C1.36742 0.515151 1.95833 0.272727 2.64773 0.272727C3.31439 0.272727 3.89394 0.515151 4.38636 1C4.88636 1.48485 5.14015 2.06818 5.14773 2.75C5.14015 3.21212 5.01894 3.63258 4.78409 4.01136C4.55682 4.39015 4.25379 4.69318 3.875 4.92045C3.50379 5.14015 3.0947 5.25 2.64773 5.25ZM11.929 5.25C11.2396 5.25 10.6487 5.00758 10.1562 4.52273C9.66383 4.03788 9.4214 3.44697 9.42898 2.75C9.4214 2.06818 9.66383 1.48485 10.1562 1C10.6487 0.515151 11.2396 0.272727 11.929 0.272727C12.5956 0.272727 13.1752 0.515151 13.6676 1C14.1676 1.48485 14.4214 2.06818 14.429 2.75C14.4214 3.21212 14.3002 3.63258 14.0653 4.01136C13.8381 4.39015 13.535 4.69318 13.1562 4.92045C12.785 5.14015 12.3759 5.25 11.929 5.25ZM21.2102 5.25C20.5208 5.25 19.9299 5.00758 19.4375 4.52273C18.9451 4.03788 18.7027 3.44697 18.7102 2.75C18.7027 2.06818 18.9451 1.48485 19.4375 1C19.9299 0.515151 20.5208 0.272727 21.2102 0.272727C21.8769 0.272727 22.4564 0.515151 22.9489 1C23.4489 1.48485 23.7027 2.06818 23.7102 2.75C23.7027 3.21212 23.5814 3.63258 23.3466 4.01136C23.1193 4.39015 22.8163 4.69318 22.4375 4.92045C22.0663 5.14015 21.6572 5.25 21.2102 5.25Z\" fill=\"#F47950\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/fast-forward.svg":
/*!**************************************!*\
  !*** ./style/icons/fast-forward.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg width=\"36\" height=\"25\" viewBox=\"0 0 36 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M16.8904 10.1358L3.40699 0.874222C2.77545 0.440406 1.95766 0.393822 1.28247 0.749026C0.604367 1.10714 0.182373 1.80882 0.182373 2.57164V22.1283C0.182373 22.894 0.604367 23.5957 1.28247 23.9509C1.95766 24.309 2.77545 24.2595 3.40699 23.8286L16.8904 14.5671C17.6209 14.0634 18.0545 13.2365 18.0545 12.3514C18.0545 11.4663 17.6209 10.6365 16.8904 10.1358Z\" fill=\"#482F87\"/>\n  <path d=\"M34.3495 10.1358L20.8661 0.874222C20.2346 0.440406 19.4168 0.393822 18.7387 0.749026C18.0635 1.10714 17.6415 1.80882 17.6415 2.57164V22.1283C17.6415 22.894 18.0635 23.5957 18.7387 23.9509C19.4168 24.309 20.2346 24.2595 20.8661 23.8286L34.3495 14.5671C35.08 14.0634 35.5136 13.2365 35.5136 12.3514C35.5136 11.4663 35.08 10.6365 34.3495 10.1358Z\" fill=\"#482F87\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/file-icon.svg":
/*!***********************************!*\
  !*** ./style/icons/file-icon.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg width=\"57\" height=\"76\" viewBox=\"0 0 57 76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_430_4002)\">\n<path d=\"M47.5 68.875C48.8063 68.875 49.875 67.8063 49.875 66.5V23.75H38C35.3727 23.75 33.25 21.6273 33.25 19V7.125H9.5C8.19375 7.125 7.125 8.19375 7.125 9.5V66.5C7.125 67.8063 8.19375 68.875 9.5 68.875H47.5ZM0 9.5C0 4.26016 4.26016 0 9.5 0H34.0664C36.5898 0 39.0094 0.994531 40.7906 2.77578L54.2242 16.2094C56.0055 17.9906 57 20.4102 57 22.9336V66.5C57 71.7398 52.7398 76 47.5 76H9.5C4.26016 76 0 71.7398 0 66.5V9.5Z\" fill=\"#482F87\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_430_4002\">\n<rect width=\"57\" height=\"76\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n";

/***/ }),

/***/ "./style/icons/folder.svg":
/*!********************************!*\
  !*** ./style/icons/folder.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg width=\"50\" height=\"42\" viewBox=\"0 0 50 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<mask id=\"mask0_14_6\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"3\" y=\"0\" width=\"21\" height=\"9\">\n<path d=\"M3.60925 0.863022H23.6871V8.7839H3.60925V0.863022Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask0_14_6)\">\n<mask id=\"mask1_14_6\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"3\" y=\"0\" width=\"21\" height=\"9\">\n<path d=\"M5.13778 0.863022H22.132C22.9759 0.863022 23.6605 1.54407 23.6605 2.38943V7.25749C23.6605 8.1002 22.9759 8.7839 22.132 8.7839H5.13778C4.2939 8.7839 3.60925 8.1002 3.60925 7.25749V2.38943C3.60925 1.54407 4.2939 0.863022 5.13778 0.863022Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask1_14_6)\">\n<path d=\"M3.60925 0.863022H23.6552V8.7839H3.60925V0.863022Z\" fill=\"#D7C1DC\"/>\n</g>\n</g>\n<mask id=\"mask2_14_6\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"3\" width=\"27\" height=\"6\">\n<path d=\"M19.4121 3.74355H45.6067V8.78386H19.4121V3.74355Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask2_14_6)\">\n<mask id=\"mask3_14_6\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"3\" width=\"27\" height=\"6\">\n<path d=\"M20.9406 3.74355H44.0622C44.9061 3.74355 45.5908 4.42725 45.5908 5.26995V7.25746C45.5908 8.10016 44.9061 8.78386 44.0622 8.78386H20.9406C20.0968 8.78386 19.4121 8.10016 19.4121 7.25746V5.26995C19.4121 4.42725 20.0968 3.74355 20.9406 3.74355Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask3_14_6)\">\n<path d=\"M19.4121 3.74355H45.5881V8.78386H19.4121V3.74355Z\" fill=\"#D7C1DC\"/>\n</g>\n</g>\n<mask id=\"mask4_14_6\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"10\" width=\"50\" height=\"32\">\n<path d=\"M0.270813 10.774H49.786V41.1298H0.270813V10.774Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask4_14_6)\">\n<mask id=\"mask5_14_6\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"10\" width=\"50\" height=\"32\">\n<path d=\"M3.83737 10.774H46.1743C48.1434 10.774 49.7409 12.3693 49.7409 14.3356V37.5682C49.7409 39.5345 48.1434 41.1298 46.1743 41.1298H3.83737C1.86833 41.1298 0.270813 39.5345 0.270813 37.5682V14.3356C0.270813 12.3693 1.86833 10.774 3.83737 10.774Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask5_14_6)\">\n<path d=\"M0.270813 10.774H49.786V41.1298H0.270813V10.774Z\" fill=\"#482F87\"/>\n</g>\n</g>\n</svg>\n";

/***/ }),

/***/ "./style/icons/folderSidebar.svg":
/*!***************************************!*\
  !*** ./style/icons/folderSidebar.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg width=\"50\" height=\"59\" viewBox=\"0 0 50 59\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<mask id=\"mask0_153_3502\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"3\" y=\"17\" width=\"21\" height=\"9\">\n<path d=\"M3.33374 17.863H23.3837V25.7839H3.33374V17.863Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask0_153_3502)\">\n<mask id=\"mask1_153_3502\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"3\" y=\"17\" width=\"21\" height=\"9\">\n<path d=\"M4.86014 17.863H21.8308C22.6735 17.863 23.3572 18.5441 23.3572 19.3894V24.2575C23.3572 25.1002 22.6735 25.7839 21.8308 25.7839H4.86014C4.01744 25.7839 3.33374 25.1002 3.33374 24.2575V19.3894C3.33374 18.5441 4.01744 17.863 4.86014 17.863Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask1_153_3502)\">\n<path d=\"M3.33374 17.863H23.3519V25.7839H3.33374V17.863Z\" fill=\"#D7C1DC\"/>\n</g>\n</g>\n<mask id=\"mask2_153_3502\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"20\" width=\"27\" height=\"6\">\n<path d=\"M19.1147 20.7435H45.273V25.7838H19.1147V20.7435Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask2_153_3502)\">\n<mask id=\"mask3_153_3502\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"20\" width=\"27\" height=\"6\">\n<path d=\"M20.6412 20.7435H43.7307C44.5734 20.7435 45.2571 21.4272 45.2571 22.2699V24.2574C45.2571 25.1001 44.5734 25.7838 43.7307 25.7838H20.6412C19.7984 25.7838 19.1147 25.1001 19.1147 24.2574V22.2699C19.1147 21.4272 19.7984 20.7435 20.6412 20.7435Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask3_153_3502)\">\n<path d=\"M19.1147 20.7435H45.2544V25.7838H19.1147V20.7435Z\" fill=\"#D7C1DC\"/>\n</g>\n</g>\n<mask id=\"mask4_153_3502\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"27\" width=\"50\" height=\"32\">\n<path d=\"M0 27.774H49.4465V58.1298H0V27.774Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask4_153_3502)\">\n<mask id=\"mask5_153_3502\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"27\" width=\"50\" height=\"32\">\n<path d=\"M3.56161 27.774H45.8398C47.8062 27.774 49.4015 29.3693 49.4015 31.3356V54.5682C49.4015 56.5345 47.8062 58.1298 45.8398 58.1298H3.56161C1.59531 58.1298 0 56.5345 0 54.5682V31.3356C0 29.3693 1.59531 27.774 3.56161 27.774Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask5_153_3502)\">\n<path d=\"M0 27.774H49.4465V58.1298H0V27.774Z\" fill=\"#482F87\"/>\n</g>\n</g>\n<path d=\"M33.2151 15.5707V2\" stroke=\"#F47950\" stroke-width=\"3.05281\" stroke-linecap=\"round\"/>\n<path d=\"M28.6357 10.2283L33.215 16.3339L37.7942 10.2283\" stroke=\"#F47950\" stroke-width=\"3.05281\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/help.svg":
/*!******************************!*\
  !*** ./style/icons/help.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17C34 12.4913 32.2089 8.1673 29.0208 4.97919C25.8327 1.79107 21.5087 0 17 0C12.4913 0 8.1673 1.79107 4.97919 4.97919C1.79107 8.1673 0 12.4913 0 17C0 21.5087 1.79107 25.8327 4.97919 29.0208C8.1673 32.2089 12.4913 34 17 34ZM11.2758 10.977C11.8004 9.49609 13.2082 8.5 14.782 8.5H18.6535C20.9711 8.5 22.8438 10.3793 22.8438 12.6902C22.8438 14.191 22.0402 15.5789 20.7387 16.3293L18.5938 17.5578C18.5805 18.4211 17.8699 19.125 17 19.125C16.1168 19.125 15.4062 18.4145 15.4062 17.5312V16.6348C15.4062 16.0637 15.7117 15.5391 16.2098 15.2535L19.1516 13.5668C19.4637 13.3875 19.6562 13.0555 19.6562 12.6969C19.6562 12.1391 19.2047 11.6941 18.6535 11.6941H14.782C14.5563 11.6941 14.357 11.8336 14.284 12.0461L14.2574 12.1258C13.9652 12.9559 13.0488 13.3875 12.2254 13.0953C11.402 12.8031 10.9637 11.8867 11.2559 11.0633L11.2824 10.9836L11.2758 10.977ZM14.875 23.375C14.875 22.8114 15.0989 22.2709 15.4974 21.8724C15.8959 21.4739 16.4364 21.25 17 21.25C17.5636 21.25 18.1041 21.4739 18.5026 21.8724C18.9011 22.2709 19.125 22.8114 19.125 23.375C19.125 23.9386 18.9011 24.4791 18.5026 24.8776C18.1041 25.2761 17.5636 25.5 17 25.5C16.4364 25.5 15.8959 25.2761 15.4974 24.8776C15.0989 24.4791 14.875 23.9386 14.875 23.375Z\" fill=\"#F36342\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/image-icon.svg":
/*!************************************!*\
  !*** ./style/icons/image-icon.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg width=\"74\" height=\"74\" viewBox=\"0 0 74 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 13.875C0 8.77305 4.14805 4.625 9.25 4.625H64.75C69.852 4.625 74 8.77305 74 13.875V60.125C74 65.227 69.852 69.375 64.75 69.375H9.25C4.14805 69.375 0 65.227 0 60.125V13.875ZM46.7992 29.2676C46.1488 28.3137 45.0793 27.75 43.9375 27.75C42.7957 27.75 41.7117 28.3137 41.0758 29.2676L28.5016 47.7098L24.6715 42.9258C24.0066 42.102 23.0094 41.625 21.9688 41.625C20.9281 41.625 19.9164 42.102 19.266 42.9258L10.016 54.4883C9.17773 55.5289 9.01875 56.9598 9.59688 58.1594C10.175 59.359 11.3891 60.125 12.7188 60.125H26.5938H31.2187H61.2812C62.5676 60.125 63.7527 59.4168 64.3453 58.275C64.9379 57.1332 64.8656 55.7602 64.143 54.7051L46.7992 29.2676ZM16.1875 27.75C18.0274 27.75 19.792 27.0191 21.0931 25.7181C22.3941 24.417 23.125 22.6524 23.125 20.8125C23.125 18.9726 22.3941 17.208 21.0931 15.9069C19.792 14.6059 18.0274 13.875 16.1875 13.875C14.3476 13.875 12.583 14.6059 11.2819 15.9069C9.98091 17.208 9.25 18.9726 9.25 20.8125C9.25 22.6524 9.98091 24.417 11.2819 25.7181C12.583 27.0191 14.3476 27.75 16.1875 27.75Z\" fill=\"#4B3187\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/je-octopus.svg":
/*!************************************!*\
  !*** ./style/icons/je-octopus.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg width=\"92\" height=\"73\" viewBox=\"0 0 92 73\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<path d=\"M0 0H92V73H0V0Z\" fill=\"url(#pattern0_97_21185)\"/>\n<defs>\n<pattern id=\"pattern0_97_21185\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n<use xlink:href=\"#image0_97_21185\" transform=\"matrix(0.002 0 0 0.00252055 0 -0.130137)\"/>\n</pattern>\n<image id=\"image0_97_21185\" width=\"500\" height=\"500\" preserveAspectRatio=\"none\" xlink:href=\"data:image/png;base64,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\"/>\n</defs>\n</svg>\n";

/***/ }),

/***/ "./style/icons/kernel-caret.svg":
/*!**************************************!*\
  !*** ./style/icons/kernel-caret.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg width=\"16\" height=\"9\" viewBox=\"0 0 16 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z\" fill=\"#F47950\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/link.svg":
/*!******************************!*\
  !*** ./style/icons/link.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg width=\"34\" height=\"16\" viewBox=\"0 0 34 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<mask id=\"mask0_link\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"34\" height=\"16\">\n<path d=\"M0.757935 0.304199H33.1641V15.8983H0.757935V0.304199Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask0_link)\">\n<mask id=\"mask1_link\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"34\" height=\"16\">\n<path d=\"M8.46732 0.304199H25.5042C29.762 0.304199 33.2136 3.75726 33.2136 8.01681C33.2136 12.2764 29.762 15.7294 25.5042 15.7294H8.46732C4.20955 15.7294 0.757935 12.2764 0.757935 8.01681C0.757935 3.75726 4.20955 0.304199 8.46732 0.304199Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask1_link)\">\n<path d=\"M8.46732 0.304199H25.5042C29.762 0.304199 33.2136 3.75726 33.2136 8.01681C33.2136 12.2764 29.762 15.7294 25.5042 15.7294H8.46732C4.20955 15.7294 0.757935 12.2764 0.757935 8.01681C0.757935 3.75726 4.20955 0.304199 8.46732 0.304199Z\" stroke=\"#F47950\" stroke-width=\"6.70462\"/>\n</g>\n</g>\n<path d=\"M22.4252 8.07462H11.6047M13.6855 2.03613H10.2688M13.6797 14.1131H8.42371M24.378 14.0578H20.9613M24.378 2.03613H20.9613\" stroke=\"#F47950\" stroke-width=\"3.35231\" stroke-linecap=\"round\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/logo.svg":
/*!******************************!*\
  !*** ./style/icons/logo.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg width=\"79\" height=\"79\" viewBox=\"0 0 79 79\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M79 39.5C79 61.3153 61.3123 79 39.4981 79C17.6877 79 0 61.3153 0 39.5C0 17.6847 17.6877 0 39.4981 0C61.3123 0 79 17.6847 79 39.5Z\" fill=\"#412C88\"/>\n<path d=\"M36.1036 26V42.6731C36.1036 49.7728 31.7751 53 26.584 53C21.582 53 17 49.7728 17 42.6731V40.3639H23.4095V42.5728C23.4095 45.7318 24.9154 46.4454 26.584 46.4454C28.4417 46.4454 29.7244 45.7318 29.7244 42.5728V26H36.1036ZM41.798 26H61V32.5866H48.2113V36.3911H58.7222V42.5367H48.2113V45.9323H61V52.4909H41.798V26Z\" fill=\"white\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/notebook.svg":
/*!**********************************!*\
  !*** ./style/icons/notebook.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg width=\"50\" height=\"62\" viewBox=\"0 0 50 62\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<mask id=\"mask0_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"5\" y=\"0\" width=\"45\" height=\"62\">\n<path d=\"M5.70941 0H49.1926V62H5.70941V0Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask0_153_5172)\">\n<mask id=\"mask1_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"5\" y=\"0\" width=\"45\" height=\"62\">\n<path d=\"M9.8195 0H45.0825C47.3547 0 49.1926 1.84098 49.1926 4.11009V57.7248C49.1926 59.9969 47.3547 61.8349 45.0825 61.8349H9.8195C7.55039 61.8349 5.70941 59.9969 5.70941 57.7248V4.11009C5.70941 1.84098 7.55039 0 9.8195 0Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask1_153_5172)\">\n<path d=\"M5.70941 0H49.1926V61.8318H5.70941V0Z\" fill=\"#482F87\"/>\n</g>\n</g>\n<mask id=\"mask2_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"8\" width=\"22\" height=\"11\">\n<path d=\"M19.1835 8.46484H40.4862V18.2049H19.1835V8.46484Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask2_153_5172)\">\n<mask id=\"mask3_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"8\" width=\"22\" height=\"11\">\n<path d=\"M21.5321 8.46484H38.1162C39.4128 8.46484 40.4648 9.51683 40.4648 10.8135V15.8563C40.4648 17.1529 39.4128 18.2049 38.1162 18.2049H21.5321C20.2355 18.2049 19.1835 17.1529 19.1835 15.8563V10.8135C19.1835 9.51683 20.2355 8.46484 21.5321 8.46484Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask3_153_5172)\">\n<path d=\"M19.1835 8.46484H40.4495V18.2049H19.1835V8.46484Z\" fill=\"#D7C1DC\"/>\n</g>\n</g>\n<mask id=\"mask4_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"8\" width=\"22\" height=\"11\">\n<path d=\"M19.1835 8.46484H40.4037V18.4893H19.1835V8.46484Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask4_153_5172)\">\n<mask id=\"mask5_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"19\" y=\"8\" width=\"22\" height=\"11\">\n<path d=\"M21.5321 8.46484H38.1101C39.4067 8.46484 40.4587 9.51683 40.4587 10.8135V15.8532C40.4587 17.1499 39.4067 18.2018 38.1101 18.2018H21.5321C20.2355 18.2018 19.1835 17.1499 19.1835 15.8532V10.8135C19.1835 9.51683 20.2355 8.46484 21.5321 8.46484Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask5_153_5172)\">\n<path d=\"M21.5321 8.46484H38.1101C39.4067 8.46484 40.4587 9.51683 40.4587 10.8135V15.8532C40.4587 17.1499 39.4067 18.2018 38.1101 18.2018H21.5321C20.2355 18.2018 19.1835 17.1499 19.1835 15.8532V10.8135C19.1835 9.51683 20.2355 8.46484 21.5321 8.46484Z\" stroke=\"#D7C1DC\" stroke-width=\"3.52294\"/>\n</g>\n</g>\n<mask id=\"mask6_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"8\" y=\"1\" width=\"5\" height=\"60\">\n<path d=\"M8.578 1.48315H12.9694V60.4281H8.578V1.48315Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask6_153_5172)\">\n<path d=\"M12.9879 4.40971C12.9879 5.78891 12.0215 6.90206 10.8044 6.90206C9.59032 6.90206 8.62396 5.78891 8.62396 4.40971C8.62396 3.0305 9.61173 1.92041 10.8044 1.92041C12.0001 1.92041 12.9879 3.0305 12.9879 4.40971ZM12.9879 11.9235C12.9879 13.3027 12.0215 14.4128 10.8044 14.4128C9.59032 14.4128 8.62396 13.3027 8.62396 11.9235C8.62396 10.5443 9.59032 9.43417 10.8044 9.43417C12.0215 9.43417 12.9879 10.5443 12.9879 11.9235ZM12.9879 19.4372C12.9879 20.8134 12.0215 21.9265 10.8044 21.9265C9.59032 21.9265 8.62396 20.8134 8.62396 19.4372C8.62396 18.058 9.61173 16.9449 10.8044 16.9449C12.0001 16.9449 12.9879 18.058 12.9879 19.4372ZM12.9879 26.9479C12.9879 28.3271 12.0215 29.4403 10.8044 29.4403C9.59032 29.4403 8.62396 28.3271 8.62396 26.9479C8.62396 25.5687 9.59032 24.4586 10.8044 24.4586C12.0215 24.4586 12.9879 25.5687 12.9879 26.9479ZM12.9879 34.48C12.9879 35.8592 12.0215 36.9724 10.8044 36.9724C9.59032 36.9724 8.62396 35.8592 8.62396 34.48C8.62396 33.1039 9.61173 31.9693 10.8044 31.9693C12.0001 31.9693 12.9879 33.0825 12.9879 34.48ZM12.9879 41.9938C12.9879 43.373 12.0215 44.4831 10.8044 44.4831C9.59032 44.4831 8.62396 43.373 8.62396 41.9938C8.62396 40.6146 9.59032 39.5045 10.8044 39.5045C12.0215 39.5045 12.9879 40.6146 12.9879 41.9938ZM12.9879 49.5076C12.9879 50.8868 12.0215 51.9969 10.8044 51.9969C9.59032 51.9969 8.62396 50.8868 8.62396 49.5076C8.62396 48.1284 9.59032 47.0152 10.8044 47.0152C12.0215 47.0152 12.9879 48.1284 12.9879 49.5076ZM12.9879 57.0183C12.9879 58.3975 12.0215 59.5106 10.8044 59.5106C9.59032 59.5106 8.62396 58.3975 8.62396 57.0183C8.62396 55.6391 9.59032 54.529 10.8044 54.529C12.0215 54.529 12.9879 55.6391 12.9879 57.0183ZM12.9879 64.532C12.9879 65.9112 12.0215 67.0213 10.8044 67.0213C9.59032 67.0213 8.62396 65.9112 8.62396 64.532C8.62396 63.1528 9.61173 62.0213 10.8044 62.0213C12.0001 62.0213 12.9879 63.1528 12.9879 64.532ZM12.9879 72.0458C12.9879 73.4219 12.0215 74.5351 10.8044 74.5351C9.59032 74.5351 8.62396 73.4219 8.62396 72.0458C8.62396 70.6666 9.59032 69.5534 10.8044 69.5534C12.0215 69.5534 12.9879 70.6666 12.9879 72.0458ZM12.9879 79.5565C12.9879 80.9357 12.0215 82.0489 10.8044 82.0489C9.59032 82.0489 8.62396 80.9357 8.62396 79.5565C8.62396 78.1773 9.59032 77.0672 10.8044 77.0672C12.0215 77.0672 12.9879 78.1773 12.9879 79.5565ZM12.9879 87.0703C12.9879 88.4495 12.0215 89.5596 10.8044 89.5596C9.59032 89.5596 8.62396 88.4495 8.62396 87.0703C8.62396 85.6911 9.59032 84.5779 10.8044 84.5779C12.0215 84.5779 12.9879 85.6911 12.9879 87.0703ZM12.9879 94.581C12.9879 95.9602 12.0215 97.0733 10.8044 97.0733C9.59032 97.0733 8.62396 95.9602 8.62396 94.581C8.62396 93.2018 9.59032 92.0917 10.8044 92.0917C12.0215 92.0917 12.9879 93.2018 12.9879 94.581ZM12.9879 102.095C12.9879 103.474 12.0215 104.584 10.8044 104.584C9.59032 104.584 8.62396 103.474 8.62396 102.095C8.62396 100.716 9.59032 99.6054 10.8044 99.6054C12.0215 99.6054 12.9879 100.716 12.9879 102.095Z\" fill=\"white\"/>\n</g>\n<mask id=\"mask7_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"3\" width=\"13\" height=\"58\">\n<path d=\"M0 3.04883H12.4924V60.428H0V3.04883Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask7_153_5172)\">\n<mask id=\"mask8_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"3\" width=\"12\" height=\"101\">\n<path d=\"M10.5779 5.76751H1.35775C0.617692 5.76751 0.0213623 5.17118 0.0213623 4.43112C0.0213623 3.69106 0.617692 3.09473 1.35775 3.09473H10.5596C11.2997 3.09473 11.896 3.69106 11.896 4.43112C11.9174 5.15283 11.2997 5.76751 10.5779 5.76751ZM10.5779 13.2813H1.35775C0.617692 13.2813 0.0213623 12.6849 0.0213623 11.9449C0.0213623 11.2018 0.617692 10.6054 1.35775 10.6054H10.5596C11.2997 10.6054 11.896 11.2018 11.896 11.9449C11.9174 12.6635 11.2997 13.2813 10.5779 13.2813ZM10.5779 20.795H1.35775C0.617692 20.795 0.0213623 20.1987 0.0213623 19.4556C0.0213623 18.7155 0.617692 18.1192 1.35775 18.1192H10.5596C11.2997 18.1192 11.896 18.7155 11.896 19.4556C11.9174 20.1773 11.2997 20.795 10.5779 20.795ZM10.5779 28.3057H1.35775C0.617692 28.3057 0.0213623 27.7094 0.0213623 26.9693C0.0213623 26.2293 0.617692 25.6299 1.35775 25.6299H10.5596C11.2997 25.6299 11.896 26.2293 11.896 26.9693C11.9174 27.688 11.2997 28.3057 10.5779 28.3057ZM10.5779 35.8195H1.35775C0.617692 35.8195 0.0213623 35.2232 0.0213623 34.48C0.0213623 33.74 0.617692 33.1437 1.35775 33.1437H10.5596C11.2997 33.1437 11.896 33.74 11.896 34.48C11.9174 35.2018 11.2997 35.8195 10.5779 35.8195ZM10.5779 43.3333H1.35775C0.617692 43.3333 0.0213623 42.7339 0.0213623 41.9938C0.0213623 41.2537 0.617692 40.6574 1.35775 40.6574H10.5596C11.2997 40.6574 11.896 41.2537 11.896 41.9938C11.9174 42.7155 11.2997 43.3333 10.5779 43.3333ZM10.5779 50.844H1.35775C0.617692 50.844 0.0213623 50.2476 0.0213623 49.5076C0.0213623 48.7645 0.617692 48.1681 1.35775 48.1681H10.5596C11.2997 48.1681 11.896 48.7645 11.896 49.5076C11.9174 50.2262 11.2997 50.844 10.5779 50.844ZM10.5779 58.3577H1.35775C0.617692 58.3577 0.0213623 57.7614 0.0213623 57.0183C0.0213623 56.2782 0.617692 55.6819 1.35775 55.6819H10.5596C11.2997 55.6819 11.896 56.2782 11.896 57.0183C11.9174 57.7614 11.2997 58.3577 10.5779 58.3577ZM10.5779 65.8684H1.35775C0.617692 65.8684 0.0213623 65.2721 0.0213623 64.532C0.0213623 63.792 0.617692 63.1926 1.35775 63.1926H10.5596C11.2997 63.1926 11.896 63.792 11.896 64.532C11.9174 65.2721 11.2997 65.8684 10.5779 65.8684ZM10.5779 73.3822H1.35775C0.617692 73.3822 0.0213623 72.7859 0.0213623 72.0458C0.0213623 71.3027 0.617692 70.7064 1.35775 70.7064H10.5596C11.2997 70.7064 11.896 71.3027 11.896 72.0458C11.9174 72.7859 11.2997 73.3822 10.5779 73.3822ZM10.5779 80.896H1.35775C0.617692 80.896 0.0213623 80.2966 0.0213623 79.5565C0.0213623 78.8164 0.617692 78.2201 1.35775 78.2201H10.5596C11.2997 78.2201 11.896 78.8164 11.896 79.5565C11.9174 80.2966 11.2997 80.896 10.5779 80.896ZM10.5779 88.4067H1.35775C0.617692 88.4067 0.0213623 87.8103 0.0213623 87.0703C0.0213623 86.3271 0.617692 85.7308 1.35775 85.7308H10.5596C11.2997 85.7308 11.896 86.3271 11.896 87.0703C11.9174 87.8103 11.2997 88.4067 10.5779 88.4067ZM10.5779 95.9204H1.35775C0.617692 95.9204 0.0213623 95.3241 0.0213623 94.581C0.0213623 93.8409 0.617692 93.2446 1.35775 93.2446H10.5596C11.2997 93.2446 11.896 93.8409 11.896 94.581C11.9174 95.3241 11.2997 95.9204 10.5779 95.9204ZM10.5779 103.431H1.35775C0.617692 103.431 0.0213623 102.835 0.0213623 102.095C0.0213623 101.355 0.617692 100.755 1.35775 100.755H10.5596C11.2997 100.755 11.896 101.355 11.896 102.095C11.9174 102.835 11.2997 103.431 10.5779 103.431Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask8_153_5172)\">\n<path d=\"M0.0213623 3.09473V60.4281H11.9174V3.09473H0.0213623Z\" fill=\"#F47950\"/>\n</g>\n</g>\n<mask id=\"mask9_153_5172\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"2\" width=\"13\" height=\"59\">\n<path d=\"M0 2.26611H12.9694V60.4282H0V2.26611Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask9_153_5172)\">\n<path d=\"M10.5779 5.76763H1.35775C0.617692 5.76763 0.0213623 5.1713 0.0213623 4.43124C0.0213623 3.69118 0.617692 3.09485 1.35775 3.09485H10.5596C11.2997 3.09485 11.896 3.69118 11.896 4.43124C11.9174 5.15295 11.2997 5.76763 10.5779 5.76763ZM10.5779 13.2814H1.35775C0.617692 13.2814 0.0213623 12.6851 0.0213623 11.945C0.0213623 11.2019 0.617692 10.6056 1.35775 10.6056H10.5596C11.2997 10.6056 11.896 11.2019 11.896 11.945C11.9174 12.6637 11.2997 13.2814 10.5779 13.2814ZM10.5779 20.7952H1.35775C0.617692 20.7952 0.0213623 20.1988 0.0213623 19.4557C0.0213623 18.7157 0.617692 18.1193 1.35775 18.1193H10.5596C11.2997 18.1193 11.896 18.7157 11.896 19.4557C11.9174 20.1774 11.2997 20.7952 10.5779 20.7952ZM10.5779 28.3059H1.35775C0.617692 28.3059 0.0213623 27.7095 0.0213623 26.9695C0.0213623 26.2294 0.617692 25.63 1.35775 25.63H10.5596C11.2997 25.63 11.896 26.2294 11.896 26.9695C11.9174 27.6881 11.2997 28.3059 10.5779 28.3059ZM10.5779 35.8196H1.35775C0.617692 35.8196 0.0213623 35.2233 0.0213623 34.4802C0.0213623 33.7401 0.617692 33.1438 1.35775 33.1438H10.5596C11.2997 33.1438 11.896 33.7401 11.896 34.4802C11.9174 35.2019 11.2997 35.8196 10.5779 35.8196ZM10.5779 43.3334H1.35775C0.617692 43.3334 0.0213623 42.734 0.0213623 41.9939C0.0213623 41.2539 0.617692 40.6576 1.35775 40.6576H10.5596C11.2997 40.6576 11.896 41.2539 11.896 41.9939C11.9174 42.7157 11.2997 43.3334 10.5779 43.3334ZM10.5779 50.8441H1.35775C0.617692 50.8441 0.0213623 50.2478 0.0213623 49.5077C0.0213623 48.7646 0.617692 48.1683 1.35775 48.1683H10.5596C11.2997 48.1683 11.896 48.7646 11.896 49.5077C11.9174 50.2264 11.2997 50.8441 10.5779 50.8441ZM10.5779 58.3579H1.35775C0.617692 58.3579 0.0213623 57.7615 0.0213623 57.0184C0.0213623 56.2784 0.617692 55.682 1.35775 55.682H10.5596C11.2997 55.682 11.896 56.2784 11.896 57.0184C11.9174 57.7615 11.2997 58.3579 10.5779 58.3579ZM10.5779 65.8686H1.35775C0.617692 65.8686 0.0213623 65.2722 0.0213623 64.5322C0.0213623 63.7921 0.617692 63.1927 1.35775 63.1927H10.5596C11.2997 63.1927 11.896 63.7921 11.896 64.5322C11.9174 65.2722 11.2997 65.8686 10.5779 65.8686ZM10.5779 73.3823H1.35775C0.617692 73.3823 0.0213623 72.786 0.0213623 72.046C0.0213623 71.3028 0.617692 70.7065 1.35775 70.7065H10.5596C11.2997 70.7065 11.896 71.3028 11.896 72.046C11.9174 72.786 11.2997 73.3823 10.5779 73.3823ZM10.5779 80.8961H1.35775C0.617692 80.8961 0.0213623 80.2967 0.0213623 79.5566C0.0213623 78.8166 0.617692 78.2203 1.35775 78.2203H10.5596C11.2997 78.2203 11.896 78.8166 11.896 79.5566C11.9174 80.2967 11.2997 80.8961 10.5779 80.8961ZM10.5779 88.4068H1.35775C0.617692 88.4068 0.0213623 87.8105 0.0213623 87.0704C0.0213623 86.3273 0.617692 85.731 1.35775 85.731H10.5596C11.2997 85.731 11.896 86.3273 11.896 87.0704C11.9174 87.8105 11.2997 88.4068 10.5779 88.4068ZM10.5779 95.9206H1.35775C0.617692 95.9206 0.0213623 95.3243 0.0213623 94.5811C0.0213623 93.8411 0.617692 93.2447 1.35775 93.2447H10.5596C11.2997 93.2447 11.896 93.8411 11.896 94.5811C11.9174 95.3243 11.2997 95.9206 10.5779 95.9206ZM10.5779 103.431H1.35775C0.617692 103.431 0.0213623 102.835 0.0213623 102.095C0.0213623 101.355 0.617692 100.755 1.35775 100.755H10.5596C11.2997 100.755 11.896 101.355 11.896 102.095C11.9174 102.835 11.2997 103.431 10.5779 103.431Z\" stroke=\"#A7A9AC\" stroke-width=\"0.0514564\" stroke-miterlimit=\"10\"/>\n</g>\n</svg>\n";

/***/ }),

/***/ "./style/icons/refresh.svg":
/*!*********************************!*\
  !*** ./style/icons/refresh.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg width=\"29\" height=\"29\" viewBox=\"10 0 90 90\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M 75 25 A 35 35 0 1 1 50 15\"\n        fill=\"none\"\n        stroke=\"#482F87\"\n        stroke-width=\"10\"\n        stroke-linecap=\"round\"/>\n  <path\n     d=\"M 65 15 L 44 2 L 44 28 Z\"\n     fill=\"#482F87\"\n        stroke=\"#482F87\"\n        stroke-width=\"4\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\" />\n</svg>\n";

/***/ }),

/***/ "./style/icons/run-cell.svg":
/*!**********************************!*\
  !*** ./style/icons/run-cell.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20ZM14.7109 11.4922C14.1172 11.8203 13.75 12.4531 13.75 13.125V26.875C13.75 27.5547 14.1172 28.1797 14.7109 28.5078C15.3047 28.8359 16.0234 28.8281 16.6094 28.4688L27.8594 21.5938C28.4141 21.25 28.7578 20.6484 28.7578 19.9922C28.7578 19.3359 28.4141 18.7344 27.8594 18.3906L16.6094 11.5156C16.0312 11.1641 15.3047 11.1484 14.7109 11.4766V11.4922Z\" fill=\"#F47950\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/run.svg":
/*!*****************************!*\
  !*** ./style/icons/run.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg width=\"20\" height=\"27\" viewBox=\"0 0 20 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M18.5635 11.1352L3.67151 0.907043C3.03998 0.473227 2.22218 0.426643 1.54699 0.781848C0.868893 1.13705 0.446899 1.83873 0.446899 2.60446V24.0973C0.446899 24.8601 0.868893 25.5618 1.54699 25.9199C2.22218 26.2751 3.03998 26.2285 3.67151 25.7947L18.5635 15.5665C19.294 15.0628 19.7305 14.236 19.7305 13.3509C19.7305 12.4658 19.294 11.636 18.5635 11.1352Z\" fill=\"#482F87\"/>\n</svg>\n";

/***/ }),

/***/ "./style/icons/save.svg":
/*!******************************!*\
  !*** ./style/icons/save.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg width=\"36\" height=\"34\" viewBox=\"0 0 36 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<mask id=\"mask0_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"2\" width=\"32\" height=\"32\">\n<path d=\"M2.1217 2.13928H33.2183V33.4439H2.1217V2.13928Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask0_0_1)\">\n<mask id=\"mask1_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"1\" y=\"1\" width=\"33\" height=\"33\">\n<path d=\"M1.56323 11.6424V23.8125C1.56323 29.3706 6.06547 33.8747 11.6212 33.8747H23.7863C29.342 33.8747 33.8443 29.3706 33.8443 23.8125V11.6424C33.8443 6.08432 29.342 1.5802 23.7863 1.5802H11.6212C6.06547 1.5802 1.56323 6.08432 1.56323 11.6424Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask1_0_1)\">\n<mask id=\"mask2_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"2\" width=\"32\" height=\"32\">\n<path d=\"M12.2909 2.24988H23.1172C28.673 2.24988 33.1752 6.75691 33.1752 12.3121V23.1429C33.1752 28.701 28.673 33.2051 23.1172 33.2051H12.2909C6.73805 33.2051 2.23291 28.701 2.23291 23.1429V12.3121C2.23291 6.75691 6.73805 2.24988 12.2909 2.24988Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask2_0_1)\">\n<path d=\"M1.66821 1.68506H33.8736V33.9039H1.66821V1.68506Z\" fill=\"white\"/>\n<path d=\"M1.56628 1.58313V34.0058H33.9754V1.58313H1.56628ZM33.7717 33.802H1.77001V1.78694H33.7717V33.802Z\" fill=\"black\"/>\n</g>\n</g>\n</g>\n<mask id=\"mask3_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"36\" height=\"21\">\n<path d=\"M0.00012207 0.535034H35.1973V20.6216H0.00012207V0.535034Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask3_0_1)\">\n<path d=\"M0.00012207 0.535034H35.2148V20.6216H0.00012207V0.535034Z\" fill=\"white\"/>\n</g>\n<mask id=\"mask4_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"3\" y=\"3\" width=\"30\" height=\"30\">\n<path d=\"M3 3H32.3242V32.0133H3V3Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask4_0_1)\">\n<mask id=\"mask5_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"3\" y=\"3\" width=\"30\" height=\"30\">\n<path d=\"M6.91144 3H28.3254C29.3615 3 30.3568 3.41344 31.0902 4.14714C31.8236 4.88084 32.2369 5.87658 32.2369 6.91308V28.1002C32.2369 29.1396 31.8236 30.1353 31.0902 30.869C30.3568 31.6027 29.3615 32.0133 28.3254 32.0133H6.91144C5.87538 32.0133 4.88005 31.6027 4.14666 30.869C3.41326 30.1353 3 29.1396 3 28.1002V6.91308C3 5.87658 3.41326 4.88084 4.14666 4.14714C4.88005 3.41344 5.87538 3 6.91144 3Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask5_0_1)\">\n<path d=\"M3 3H32.2281V32.0133H3V3Z\" fill=\"#482F87\"/>\n</g>\n</g>\n<mask id=\"mask6_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"7\" y=\"4\" width=\"18\" height=\"7\">\n<path d=\"M7.61572 4.22607H24.705V10.5412H7.61572V4.22607Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask6_0_1)\">\n<mask id=\"mask7_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"7\" y=\"4\" width=\"18\" height=\"7\">\n<path d=\"M8.73328 4.22607H23.5816C24.1986 4.22607 24.6992 4.72686 24.6992 5.3441V9.42313C24.6992 10.0404 24.1986 10.5412 23.5816 10.5412H8.73328C8.11629 10.5412 7.61572 10.0404 7.61572 9.42313V5.3441C7.61572 4.72686 8.11629 4.22607 8.73328 4.22607Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask7_0_1)\">\n<path d=\"M7.61572 4.22607H24.705V10.5412H7.61572V4.22607Z\" fill=\"white\"/>\n</g>\n</g>\n<mask id=\"mask8_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"16\" width=\"16\" height=\"15\">\n<path d=\"M10.0547 16.2563H25.2348V30.7644H10.0547V16.2563Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask8_0_1)\">\n<mask id=\"mask9_0_1\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"16\" width=\"16\" height=\"15\">\n<path d=\"M11.1722 16.2563H24.0649C24.6848 16.2563 25.1824 16.7571 25.1824 17.3744V29.6464C25.1824 30.2637 24.6848 30.7644 24.0649 30.7644H11.1722C10.5523 30.7644 10.0547 30.2637 10.0547 29.6464V17.3744C10.0547 16.7571 10.5523 16.2563 11.1722 16.2563Z\" fill=\"white\"/>\n</mask>\n<g mask=\"url(#mask9_0_1)\">\n<path d=\"M10.0547 16.2563H25.1766V30.7644H10.0547V16.2563Z\" fill=\"white\"/>\n</g>\n</g>\n</svg>\n";

/***/ }),

/***/ "./style/icons/stop.svg":
/*!******************************!*\
  !*** ./style/icons/stop.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M3.90412 0.10791H21.7588C22.7978 0.10791 23.7931 0.521346 24.5265 1.25505C25.2599 1.98875 25.6703 2.98449 25.6703 4.02099V21.4231C25.6703 22.4625 25.2599 23.4583 24.5265 24.192C23.7931 24.9257 22.7978 25.3362 21.7588 25.3362H3.90412C2.86805 25.3362 1.87273 24.9257 1.13933 24.192C0.405938 23.4583 -0.00732422 22.4625 -0.00732422 21.4231V4.02099C-0.00732422 2.98449 0.405938 1.98875 1.13933 1.25505C1.87273 0.521346 2.86805 0.10791 3.90412 0.10791Z\" fill=\"#482F87\"/>\n</svg>\n";

/***/ })

}]);
//# sourceMappingURL=lib_index_js.2fce6b25391b035cf918.js.map