exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 8747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8774);
/* harmony import */ var _css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3736);
/* harmony import */ var _css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__);


 // Import CSS module

const Dropdown = () => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // Reference for the dropdown menu

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if the click is outside
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().navbarItems)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown),
    ref: dropdownRef
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: (_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropdownButton),
    onClick: toggleDropdown
  }, "Sections"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropdownContent)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    to: "/SeaFarmers/modules/LearnToCodeHome/"
  }, "Learn To Code"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ 6013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(4625);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
;// ./src/components/ProfilePicture.js



const ProfilePicture = () => {
  const {
    siteConfig
  } = (0,useDocusaurusContext/* default */.A)();
  const backendUrl = siteConfig.customFields.backendUrl;
  const [user, setUser] = (0,react.useState)(null);
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    fetchUserData();
    handleRedirect();
  }, []);
  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const userId = sessionStorage.getItem('userId') || "guest";
      if (!userId) {
        throw new Error('User ID not found in session storage');
      }
      // Send a request to the backend to get user data
      const response = await fetch(`${backendUrl}/api/user?userId=${userId}`, {
        method: 'GET',
        // Explicitly specify GET method
        credentials: 'include' // Include session cookies for authentication
      });
      if (!response.ok) {
        throw new Error('User not authenticated');
      }

      // Parse the user data from the response
      const data = await response.json();

      // Set the user data in the state
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null); // Handle error if not authenticated
    } finally {
      setIsLoading(false);
    }
  };
  const handleGitHubLogin = async () => {
    window.location.href = `${backendUrl}/auth/github`;
  };
  function handleRedirect() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    if (userId) {
      sessionStorage.setItem('userId', userId);
      window.location.href = `https://trmatherz.github.io/SeaFarmers/`;
    }
  }
  ;

  // if (isLoading) {
  //   return <div>Loading user data...</div>;
  // }

  if (user) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
      src: user.avatarUrl,
      alt: "User Avatar",
      width: "40",
      height: "40",
      style: {
        borderRadius: '50%'
      }
    }));
  } else {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("button", {
      onClick: handleGitHubLogin
    }, "Login with GitHub"));
  }
};

// EXTERNAL MODULE: ./src/components/Dropdown.js
var Dropdown = __webpack_require__(8747);
// EXTERNAL MODULE: ./src/css/navbar.module.css
var navbar_module = __webpack_require__(1623);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// ./src/components/Navbar.js





const Navbar = () => {
  return /*#__PURE__*/react.createElement("nav", {
    className: (navbar_module_default()).customNavbar
  }, /*#__PURE__*/react.createElement("div", {
    className: (navbar_module_default()).customNavbarTitle
  }, /*#__PURE__*/react.createElement("h1", null, /*#__PURE__*/react.createElement(react_router_dom/* Link */.N_, {
    to: "/SeaFarmers/"
  }, "Sea Farmers"))), /*#__PURE__*/react.createElement("div", {
    className: (navbar_module_default()).customNavbarItems
  }, /*#__PURE__*/react.createElement(Dropdown/* default */.A, null)), /*#__PURE__*/react.createElement("div", {
    className: (navbar_module_default()).customNavbarProfile
  }, /*#__PURE__*/react.createElement("div", {
    className: (navbar_module_default()).customUserProfile
  }, /*#__PURE__*/react.createElement(ProfilePicture, null))));
};
/* harmony default export */ const components_Navbar = (Navbar);

/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7356);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8774);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6013);
/* harmony import */ var _css_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6569);
/* harmony import */ var _css_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_module_css__WEBPACK_IMPORTED_MODULE_4__);



 // Import the Navbar component
 // Import the index-specific CSS module

function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    title: "Welcome to the Guide",
    description: "The ultimate guide to competitive programming."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_css_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().backgroundVideoContainer)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    className: (_css_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().backgroundVideo)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: "/SeaFarmers/background.mp4",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: (_css_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainContent)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: (_css_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().heroTitle)
  }, "Sea Farmers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: (_css_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtitle)
  }, "The ultimate guide to competitive programming."))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 3736:
/***/ ((module) => {

// Exports
module.exports = {
	"navbarItems": `navbarItems_SNXV`,
	"dropdown": `dropdown_tS68`,
	"dropdownButton": `dropdownButton_p_GL`,
	"dropdownContent": `dropdownContent_RHbB`
};


/***/ }),

/***/ 6569:
/***/ ((module) => {

// Exports
module.exports = {
	"fixedHeader": `fixedHeader_plLg`,
	"heroTitle": `heroTitle_gWW5`,
	"subtitle": `subtitle_sxiU`,
	"mainContent": `mainContent_JKKk`,
	"backgroundVideoContainer": `backgroundVideoContainer_ZYw6`,
	"backgroundVideo": `backgroundVideo_q2yD`
};


/***/ }),

/***/ 1623:
/***/ ((module) => {

// Exports
module.exports = {
	"customNavbar": `customNavbar_mklA`,
	"customNavbarTitle": `customNavbarTitle_hVCA`,
	"customNavbarItems": `customNavbarItems_gN4E`,
	"customNavbarProfile": `customNavbarProfile_zS9W`,
	"customUserProfile": `customUserProfile_Q1sk`,
	"customUserAvatar": `customUserAvatar_xufM`,
	"customDropdown": `customDropdown_CF4V`,
	"customDropdownContent": `customDropdownContent_qnzh`
};


/***/ })

};
;