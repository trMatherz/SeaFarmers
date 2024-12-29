/*! For license information please see 38e7c4a3.66dd2dd7.js.LICENSE.txt */
(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[639],{7283:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>s,moduleName:()=>u,toc:()=>p,topicId:()=>h});const s=JSON.parse('{"type":"mdx","permalink":"/SeaFarmers/modules/LearnToCode/TimeComplexity","source":"@site/src/pages/modules/LearnToCode/TimeComplexity.mdx","description":"Prerequisites: Nothing","frontMatter":{},"unlisted":false}');var r=n(4848),a=n(8453),o=(n(6540),n(2407),n(1955),n(7294),n(8235)),c=n(5430),l=n(8092);n(8525),n(3132);const i={},d="Time Complexity",m={},u="LearnToCode",h="TimeComplexity",p=[];function x(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{moduleName:u}),"\n",(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"time-complexity",children:"Time Complexity"})}),"\n",(0,r.jsx)(t.p,{children:"Prerequisites: Nothing"}),"\n",(0,r.jsx)(t.p,{children:"Note: If you have never coded before, you may want to skip this until you have done a few simple problems."}),"\n",(0,r.jsx)(t.p,{children:"Here are some additional resources if you would like:"}),"\n",(0,r.jsx)(o.A,{moduleName:u,topicId:h}),"\n",(0,r.jsx)(t.p,{children:"Time Complexity is all about determining the worst-case scenario for the time it takes for code to run.\nThis matters because probelms have a time limit for your code to run for each test-case which is usually a couple seconds.\nWith good constant factors, this you are limited to around $5 * 10^8$ opperations for a problem."}),"\n",(0,r.jsx)(t.h1,{id:"big-o-notation",children:"Big O Notation"}),"\n",(0,r.jsx)(t.p,{children:"The way we measure a code's time complexity is in Big O Notation."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"$\\mathcal{O}(f(x))$"})," is how many opperations the worst-case-scenario of f(x) takes to complete."]}),"\n",(0,r.jsx)(t.p,{children:"Here are some example time complexities:"}),"\n",(0,r.jsxs)(t.p,{children:["The code below runs in ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(1)$"}),"since it does a constant number of opperations:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"int a = 5;\nint b = 7;\nint c = a + b; \n"})}),"\n",(0,r.jsxs)(t.p,{children:["To keep it simple, we say that ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(C)$"})," = ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(1)$"}),"\nas the extact number will not often affect the run-time."]}),"\n",(0,r.jsxs)(t.p,{children:["The code below runs in ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n)$"})," since it does a constant number of opperations $n$ times:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"for (int i = 1; i <= n; i++) {\n\tint a = 5; \n    int b = 7; \n    c = a + b; \n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once again, we ignore $C$ so ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n)$"})," becomes ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n)$"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If we add one more loop, it will run in ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^2)$"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n; j++) {\n        int a = 5; \n        int b = 7; \n        c = a + b; \n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Here is table to refernce if you are just starting out:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"$n$"}),(0,r.jsx)(t.th,{children:"Possible complexities"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$n \\le 10$"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n!)$"}),", ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^7)$"}),", ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^6)$"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$n \\le 20$"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"$\\mathcal{O}(2^n \\cdot n)$"}),", ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^5)$"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$n \\le 100$"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^4)$"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$n \\le 500$"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^3)$"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$n \\le 7500$"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^2)$"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$n \\le 7 \\cdot 10^4$"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n \\sqrt n)$"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$n \\le 5 \\cdot 10^5$"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n \\log n)$"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$n \\le 5 \\cdot 10^6$"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n)$"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["$n \\le 10^",18,"$"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"$\\mathcal{O}(\\log^2 n)$"}),", ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(\\log n)$"}),", ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(1)$"})]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"For now, just worry about a few cases:"}),"\n",(0,r.jsxs)(t.p,{children:["If $n \\le 500$,  ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^3)$"})," works"]}),"\n",(0,r.jsxs)(t.p,{children:["If $n \\le 8000$,  ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n^2)$"})," works"]}),"\n",(0,r.jsxs)(t.p,{children:["If $n \\le 5 \\cdot 10^6$,  ",(0,r.jsx)(t.code,{children:"$\\mathcal{O}(n)$"})," works"]}),"\n",(0,r.jsx)(c.A,{moduleName:u,topicId:h})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},9236:(e,t,n)=>{n(6540);const s={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=s},1115:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var s=n(6540),r=n(8774);const a="navbarItems_SNXV",o="dropdown_tS68",c="dropdownButton_p_GL",l="dropdownContent_RHbB",i=()=>{const[e,t]=(0,s.useState)(!1),n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=e=>{n.current&&!n.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),s.createElement("div",{className:a},s.createElement("div",{className:o,ref:n}," ",s.createElement("button",{className:c,onClick:()=>{t(!e)}},"Sections"),e&&s.createElement("div",{className:l},s.createElement(r.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome/"},"Learn To Code"),s.createElement(r.A,{to:"/SeaFarmers/modules/Novice/NoviceHome/"},"Novice"))))}},1955:(e,t,n)=>{"use strict";n(6540);n(9236).customFields.backendUrl},8235:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var s=n(6540),r=n(4335);const a="resourceTable_ow7w",o="nameColumn_cltC",c="nameCell_dZOO",l="sourceColumn_R2BC",i="sourceCell_NfiE",d="starredColumn_Ycnc",m="starredCell_Cq7S",u="descriptionColumn_X0UP",h="descriptionCell_gbNW",p="resourceLink_QTdW",x=n(9236).customFields.backendUrl,f=e=>{let{moduleName:t,topicId:n}=e;const[f,$]=(0,s.useState)(null),[j,w]=(0,s.useState)(null),[g,b]=(0,s.useState)(!1),[E,y]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t&&async function(){b(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await r.A.get(`${x}/api/module/${t}?userId=${e}`,{withCredentials:!0});$(n.data)}catch(E){y(E.response?E.response.data:E.message)}finally{b(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!f||!n)return;const e=f.topics.find((e=>e.topicId===n));e?w(e):y("Topic not found")}),[f,n]),g?s.createElement("p",null,"Loading data..."):E?s.createElement("p",null,"Error: ",E):s.createElement("div",null,j&&j.resources&&s.createElement("table",{className:a},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:l},"Resources"),s.createElement("th",{className:d}),s.createElement("th",{className:o}),s.createElement("th",{className:u}))),s.createElement("tbody",null,j.resources.map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:i},e.source),s.createElement("td",{className:m},e.star?"\u2b50":""),s.createElement("td",{className:c},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:p},e.name)),s.createElement("td",{className:h},e.description)))))))}},7294:(e,t,n)=>{"use strict";n(6540);n(9236).customFields.backendUrl},8092:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var s=n(6540),r=n(4335);const a={state0:"state0_hYJj",state1:"state1_pE2a",state2:"state2_sngV",sidebarContainer:"sidebarContainer_RDdI",sidebarHeader:"sidebarHeader_hC8H",dropdown:"dropdown_xzkb"};var o=n(1115);const c=n(9236).customFields.backendUrl;const l=function(e){let{moduleName:t}=e;const[n,l]=(0,s.useState)(null),[i,d]=(0,s.useState)(!1),[m,u]=(0,s.useState)(null);if((0,s.useEffect)((()=>{t&&async function(){d(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await r.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});l(n.data)}catch(m){u(m.response?m.response.data:m.message)}finally{d(!1)}}()}),[t]),i)return s.createElement("p",null,"Loading module data...");if(m)return s.createElement("p",null,"Error: ",m);const{genericTopics:h=[],topics:p=[]}=n||{};return s.createElement("div",{className:a.sidebarContainer},s.createElement("header",{className:a.sidebarHeader},s.createElement("div",{className:a.dropdown},s.createElement(o.A,null))),s.createElement("div",{className:"generic-topics-container"},h.map(((e,n)=>{const r=e.topics.map((e=>p.find((t=>t.topicId===e))));return s.createElement("div",{key:n,className:"generic-topic"},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,r.map(((e,n)=>e&&s.createElement("li",{key:n,className:`${a[`state${e.state}`]}`},s.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}/`},e.topicName))))))}))))}},3132:(e,t,n)=>{"use strict";n(6540)},5430:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var s=n(6540),r=n(4335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"},o=n(9236).customFields.backendUrl,c=e=>{let{moduleName:t,topicId:n}=e;const[c,l]=(0,s.useState)(null),[i,d]=(0,s.useState)(null),[m,u]=(0,s.useState)(!0),[h,p]=(0,s.useState)(null),[x,f]=(0,s.useState)(null),[$,j]=(0,s.useState)({}),w=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){u(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await r.A.get(`${o}/api/module/${t}?userId=${e}`,{withCredentials:!0});l(n.data)}catch(h){p(h.response?h.response.data:h.message)}finally{u(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!c||!n)return;const e=c.topics.find((e=>e.topicId===n));e?d(e):p("Topic not found")}),[c,n]);if((0,s.useEffect)((()=>{const e=e=>{w.current&&!w.current.contains(e.target)&&f(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),m)return s.createElement("p",null,"Loading data...");if(h)return s.createElement("p",null,"Error: ",h);const g=["Unseen","Skipped","Solved"],b=g[i?.state??0];return s.createElement("div",{className:a.topicProgress},s.createElement("div",{className:a.label},"Topic Progress:"),s.createElement("div",{className:`${a.stateLabel} ${a[`state-${i?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();j({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),f(!x)}},b),x&&s.createElement("div",{className:a.dropdownMenu,ref:w,style:{position:"absolute",top:`${$.top}px`,left:`${$.left}px`}},g.map(((e,c)=>s.createElement("div",{key:c,onClick:()=>(async e=>{d((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await r.A.post(`${o}/api/topic/updateState?userId=${s}`,{moduleName:t,topicId:n,newState:e},{withCredentials:!0}),f(null)}catch(s){p("Failed to update state."),d((e=>({...e,state:e.state})))}})(c),className:a.dropdownItem},e)))))}},2407:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});const s={}},1020:(e,t,n)=>{"use strict";var s=n(6540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var s,a={},i=null,d=null;for(s in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:r,type:e,key:i,ref:d,props:a,_owner:c.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},4848:(e,t,n)=>{"use strict";e.exports=n(1020)},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}},8525:e=>{"use strict";e.exports={}}}]);