"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48],{1377:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(6540),l=n(4164),o=n(1003),r=n(7559),c=n(4718),i=n(609),s=n(1312),d=n(3104),m=n(5062);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(o.current?o.current=!1:a>=r?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,m.$)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,s.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.A)("clean-btn",r.G.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var p=n(3109),h=n(6347),f=n(4581),E=n(6342),v=n(3465);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(null,arguments)}function _(e){return a.createElement("svg",g({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const k="collapseSidebarButton_PEFL",A="collapseSidebarButtonIcon_kv0_";function C(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,s.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.A)("button button--secondary button--outline",k),onClick:t},a.createElement(_,{className:A}))}var S=n(5041),T=n(9532);const y=Symbol("EmptyContext"),N=a.createContext(y);function I(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(N.Provider,{value:o},t)}var x=n(1422),w=n(9169),B=n(8774),L=n(2303);function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(null,arguments)}function O(e){let{collapsed:t,categoryLabel:n,onClick:l}=e;return a.createElement("button",{"aria-label":t?(0,s.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,s.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:l})}function P(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,E.p)(),v=function(e){const t=(0,L.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,c.Nr)(e):void 0),[e,t])}(t),g=(0,c.w8)(t,o),_=(0,w.ys)(h,o),{collapsed:k,setCollapsed:A}=(0,x.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:C,setExpandedItem:S}=function(){const e=(0,a.useContext)(N);if(e===y)throw new T.dV("DocSidebarItemsExpandedStateProvider");return e}(),I=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!k;S(e?null:s),A(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,T.ZC)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:g,collapsed:k,updateCollapsed:I}),(0,a.useEffect)((()=>{b&&null!=C&&C!==s&&f&&A(!0)}),[b,C,s,A,f]),a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(B.A,M({className:(0,l.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?I(!1):(e.preventDefault(),I())}:()=>{n?.(t)},"aria-current":_?"page":void 0,role:b&&!h?"button":void 0,"aria-expanded":b&&!h?!k:void 0,href:b?v??"#":v},d),u),h&&b&&a.createElement(O,{collapsed:k,categoryLabel:u,onClick:e=>{e.preventDefault(),I()}})),a.createElement(x.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(z,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:i+1})))}var H=n(6654),G=n(3186);const j="menuExternalLink_NmtK";function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(null,arguments)}function W(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c.w8)(t,o),f=(0,H.A)(m);return a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(B.A,R({className:(0,l.A)("menu__link",!f&&j,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},f&&{onClick:n?()=>n(t):void 0},d),u,!f&&a.createElement(G.A,null)))}const D="menuHtmlItem_M9Kj";function F(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),i&&[D,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U.apply(null,arguments)}function V(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,U({item:t},n));case"html":return a.createElement(F,U({item:t},n));default:return a.createElement(W,U({item:t},n))}}function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y.apply(null,arguments)}function K(e){let{items:t,...n}=e;const l=(0,c.Y)(t,n.activePath);return a.createElement(I,null,l.map(((e,t)=>a.createElement(V,Y({key:t,item:e,index:t},n)))))}const z=(0,a.memo)(K),q="menu_SIkG",J="menuWithAnnouncementBar_GW3s";function Q(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,S.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,s.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.A)("menu thin-scrollbar",q,c&&J,o)},a.createElement("ul",{className:(0,l.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:n,activePath:t,level:1})))}const X="sidebar_njMd",Z="sidebarWithHideableNavbar_wUlq",$="sidebarHidden_VK0M",ee="sidebarLogo_isFc";function te(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,E.p)();return a.createElement("div",{className:(0,l.A)(X,c&&Z,r&&$)},c&&a.createElement(v.A,{tabIndex:-1,className:ee}),a.createElement(Q,{path:t,sidebar:n}),i&&a.createElement(C,{onClick:o}))}const ne=a.memo(te);var ae=n(5600),le=n(9876);const oe=e=>{let{sidebar:t,path:n}=e;const o=(0,le.M)();return a.createElement("ul",{className:(0,l.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function re(e){return a.createElement(ae.GX,{component:oe,props:e})}const ce=a.memo(re);function ie(e){const t=(0,f.l)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ne,e),l&&a.createElement(ce,e))}const se={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:se.expandButton,title:(0,s.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(_,{className:se.expandButtonIcon}))}const me={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function ue(e){let{children:t}=e;const n=(0,i.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,h.zy)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,p.O)()&&s(!0),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.A)(r.G.docs.docSidebarContainer,me.docSidebarContainer,n&&me.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.docSidebarContainer)&&n&&s(!0)}},a.createElement(ue,null,a.createElement("div",{className:(0,l.A)(me.sidebarViewport,i&&me.sidebarViewportHidden)},a.createElement(ie,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(de,{toggleSidebar:d}))))}const pe={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function he(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,i.t)();return a.createElement("main",{className:(0,l.A)(pe.docMainContainer,(t||!o)&&pe.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.A)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},n))}const fe={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function Ee(e){let{children:t}=e;const n=(0,i.t)(),[l,o]=(0,a.useState)(!1);return a.createElement("div",{className:fe.docsWrapper},a.createElement(b,null),a.createElement("div",{className:fe.docRoot},n&&a.createElement(be,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(he,{hiddenSidebarContainer:l},t)))}var ve=n(3363);function ge(e){const t=(0,c.B5)(e);if(!t)return a.createElement(ve.A,null);const{docElement:n,sidebarName:s,sidebarItems:d}=t;return a.createElement(o.e3,{className:(0,l.A)(r.G.page.docsDocPage)},a.createElement(i.V,{name:s,items:d},a.createElement(Ee,null,n)))}},3363:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),l=n(4164),o=n(1312),r=n(1107);function c(e){let{className:t}=e;return a.createElement("main",{className:(0,l.A)("container margin-vert--xl",t)},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement(r.A,{as:"h1",className:"hero__title"},a.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);