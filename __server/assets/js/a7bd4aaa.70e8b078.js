"use strict";
exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 1723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocVersionRoot)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1003);
;// ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsSearch.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


/** The search tag to append as each doc's metadata. */
function getDocsVersionSearchTag(pluginId, versionName) {
  return `docs-${pluginId}-${versionName}`;
}
/**
 * Gets the relevant docs tags to search.
 * This is the logic that powers the contextual search feature.
 *
 * If user is browsing Android 1.4 docs, he'll get presented with:
 * - Android '1.4' docs
 * - iOS 'preferred | latest' docs
 *
 * The result is generic and not coupled to Algolia/DocSearch on purpose.
 */
function useDocsContextualSearchTags() {
  const allDocsData = useAllDocsData();
  const activePluginAndVersion = useActivePluginAndVersion();
  const docsPreferredVersionByPluginId = useDocsPreferredVersionByPluginId();
  // This can't use more specialized hooks because we are mapping over all
  // plugin instances.
  function getDocPluginTags(pluginId) {
    const activeVersion = activePluginAndVersion?.activePlugin.pluginId === pluginId ? activePluginAndVersion.activeVersion : undefined;
    const preferredVersion = docsPreferredVersionByPluginId[pluginId];
    const latestVersion = allDocsData[pluginId].versions.find(v => v.isLast);
    const version = activeVersion ?? preferredVersion ?? latestVersion;
    return getDocsVersionSearchTag(pluginId, version.name);
  }
  return [...Object.keys(allDocsData).map(getDocPluginTags)];
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsVersion.js
var docsVersion = __webpack_require__(3025);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(2831);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(1463);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionRoot/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function DocVersionRootMetadata(props) {
  const {
    version
  } = props;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(SearchMetadata/* default */.A, {
    version: version.version,
    tag: getDocsVersionSearchTag(version.pluginId, version.version)
  }), /*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.be, null, version.noIndex && /*#__PURE__*/react.createElement("meta", {
    name: "robots",
    content: "noindex, nofollow"
  })));
}
function DocVersionRootContent(props) {
  const {
    version,
    route
  } = props;
  return /*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.e3, {
    className: version.className
  }, /*#__PURE__*/react.createElement(docsVersion/* DocsVersionProvider */.n, {
    version: version
  }, (0,react_router_config/* renderRoutes */.v)(route.routes)));
}
function DocVersionRoot(props) {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(DocVersionRootMetadata, props), /*#__PURE__*/react.createElement(DocVersionRootContent, props));
}

/***/ })

};
;