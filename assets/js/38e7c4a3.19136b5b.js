/*! For license information please see 38e7c4a3.19136b5b.js.LICENSE.txt */
(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[639],{8113:(e,t,l)=>{"use strict";l.r(t),l.d(t,{assets:()=>U,contentTitle:()=>T,default:()=>B,frontMatter:()=>x,metadata:()=>s,moduleName:()=>A,toc:()=>M,topicId:()=>R});const s=JSON.parse('{"type":"mdx","permalink":"/SeaFarmers/modules/LearnToCode/TimeComplexity","source":"@site/src/pages/modules/LearnToCode/TimeComplexity.mdx","frontMatter":{},"unlisted":false}');var n=l(4848),a=l(8453),r=l(6540),o=(l(2407),l(4335));const c={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9"},m=l(9236).customFields.backendUrl,u=e=>{let{moduleName:t,topicId:l,location:s}=e;const[n,a]=(0,r.useState)(null),[u,i]=(0,r.useState)(null),[d,p]=(0,r.useState)(!1),[f,E]=(0,r.useState)(null),[C,g]=(0,r.useState)(null),[h,b]=(0,r.useState)({}),[w,N]=(0,r.useState)(null),[_,S]=(0,r.useState)({}),[y,k]=(0,r.useState)(!1),I=(0,r.useRef)(null),v=(0,r.useRef)(null);(0,r.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${m}/api/module/${t}?userId=${e}`,{withCredentials:!0});a(l.data)}catch(f){E(f.response?f.response.data:f.message)}finally{p(!1)}}()}),[t]),(0,r.useEffect)((()=>{if(!n||!l)return;const e=n.topics.find((e=>e.topicId===l));e?i(e):E("Topic not found")}),[n,l]);const $=async(e,s)=>{const n=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${m}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:n,newState:s},{withCredentials:!0});i((e=>{const t=e.problems.map((e=>e.problemId===n?{...e,state:s}:e));return{...e,problems:t}})),g(null)}catch(f){console.error("Error updating problem state:",f)}};return(0,r.useEffect)((()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&g(null),v.current&&!v.current.contains(e.target)&&N(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),d?r.createElement("p",null,"Loading data..."):f?r.createElement("p",null,"Error: ",f):r.createElement("div",null,u&&u.problems&&r.createElement("table",{className:c.problemTable},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:c.statusColumn},"Status"),r.createElement("th",{className:c.sourceColumn},"Source"),r.createElement("th",{className:c.starredColumn}),r.createElement("th",{className:c.problemColumn},"Problem"),r.createElement("th",{className:c.difficultyColumn},"Dif"),r.createElement("th",{className:c.tagsColumn},"Tags"),r.createElement("th",{className:c.helpColumn}))),r.createElement("tbody",null,u.problems&&Array.isArray(u.problems)&&u.problems.filter((e=>e.location===s)).map(((e,t)=>e?r.createElement("tr",{key:e.uniqueId||t},r.createElement("td",{className:c.statusCell},r.createElement("span",{className:`${c.stateCircle} ${c[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)g(null),b({});else{const l=t.target.getBoundingClientRect();b({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),g(e)}})(t,e)}),C===t&&r.createElement("div",{ref:I,className:c.dropdownMenu,style:{position:"absolute",top:`${h.top}px`,left:`${h.left}px`}},r.createElement("ul",null,r.createElement("li",{onClick:()=>$(e,2)},"Solved"),r.createElement("li",{onClick:()=>$(e,1)},"Skipped"),r.createElement("li",{onClick:()=>$(e,0)},"Unseen")))),r.createElement("td",{className:c.sourceCell},e.source),r.createElement("td",{className:c.starredCell},e.star?"\u2b50":""),r.createElement("td",{className:c.problemCell},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:c.problemLink},e.name)),r.createElement("td",{className:c.difficultyCell},e.difficulty),r.createElement("td",{className:c.tagsCell},y?e.tags&&Array.isArray(e.tags)?e.tags.join(", "):"No tags":r.createElement("button",{onClick:()=>k(!0),className:c.showTagsButton},"Show Tags")),r.createElement("td",{className:c.helpCell},r.createElement("span",{className:c.helpButton,onClick:e=>((e,t)=>{if(w===e)N(null),S({});else{const l=t.target.getBoundingClientRect();S({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),N(e)}})(t,e)},"Help"),w===t&&r.createElement("div",{ref:v,className:c.dropdownMenu,style:{position:"absolute",top:`${_.top}px`,left:`${_.left}px`}},r.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>r.createElement("li",{key:t},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:c.helpLink},e.name)))):r.createElement("li",null,"No Help"))))):null)))))},i={problemTable:"problemTable_Z_QZ",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v"},d=l(9236).customFields.backendUrl,p=e=>{let{moduleName:t,topicId:l,location:s}=e;const[n,a]=(0,r.useState)(null),[c,m]=(0,r.useState)(null),[u,p]=(0,r.useState)(!1),[f,E]=(0,r.useState)(null),[C,g]=(0,r.useState)(null),[h,b]=(0,r.useState)({}),[w,N]=(0,r.useState)(null),[_,S]=(0,r.useState)({}),[y,k]=(0,r.useState)(!1),I=(0,r.useRef)(null),v=(0,r.useRef)(null);(0,r.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${d}/api/module/${t}?userId=${e}`,{withCredentials:!0});a(l.data)}catch(f){E(f.response?f.response.data:f.message)}finally{p(!1)}}()}),[t]),(0,r.useEffect)((()=>{if(!n||!l)return;const e=n.topics.find((e=>e.topicId===l));e?m(e):E("Topic not found")}),[n,l]),(0,r.useEffect)((()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&g(null),v.current&&!v.current.contains(e.target)&&N(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const $=async(e,s)=>{const n=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${d}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:n,newState:s},{withCredentials:!0}),m((e=>{const t=e.problems.map((e=>e.problemId===n?{...e,state:s}:e));return{...e,problems:t}})),g(null)}catch(f){console.error("Error updating problem state:",f)}};return u?r.createElement("p",null,"Loading data..."):f?r.createElement("p",null,"Error: ",f):r.createElement("div",null,c?.problems?.length>0?r.createElement("table",{className:i.problemTable},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:i.statusColumn},"Status"),r.createElement("th",{className:i.sourceColumn},"Source"),r.createElement("th",{className:i.starredColumn}),r.createElement("th",{className:i.problemColumn},"Problem"),r.createElement("th",{className:i.difficultyColumn},"Dif"),r.createElement("th",{className:i.tagsColumn},"Tags"),r.createElement("th",{className:i.helpColumn}))),r.createElement("tbody",null,c.problems.filter((e=>e.location===s)).map(((e,t)=>r.createElement("tr",{key:e.uniqueId||t},r.createElement("td",{className:i.statusCell},r.createElement("span",{className:`${i.stateCircle} ${i[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)g(null),b({});else{const l=t.target.getBoundingClientRect();b({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),g(e)}})(t,e)},"a"),C===t&&r.createElement("div",{className:i.dropdownMenu,ref:I,style:{position:"absolute",top:`${h.top}px`,left:`${h.left}px`}},r.createElement("ul",null,r.createElement("li",{onClick:()=>$(e,2)},"Solved"),r.createElement("li",{onClick:()=>$(e,1)},"Skipped"),r.createElement("li",{onClick:()=>$(e,0)},"Unseen")))),r.createElement("td",{className:i.sourceCell},e.source),r.createElement("td",{className:i.starredCell},e.star?"\u2b50":""),r.createElement("td",{className:i.problemCell},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:i.problemLink},e.name)),r.createElement("td",{className:i.difficultyCell},e.difficulty||"Unknown"),r.createElement("td",{className:i.tagsCell},y?e.tags&&Array.isArray(e.tags)?e.tags.join(", "):"No tags":r.createElement("button",{onClick:()=>k(!0),className:i.showTagsButton},"Show Tags")),r.createElement("td",{className:i.helpCell},r.createElement("span",{className:i.helpButton,onClick:e=>((e,t)=>{if(w===e)N(null),S({});else{const l=t.target.getBoundingClientRect();S({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),N(e)}})(t,e)},"Help"),w===t&&r.createElement("div",{className:i.dropdownMenu,ref:v,style:{position:"absolute",top:`${_.top}px`,left:`${_.left}px`}},r.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>r.createElement("li",{key:t},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:i.helpLink},e.name)))):r.createElement("li",null,"No Help"))))))))):r.createElement("p",null,"No problems data available."))},f="resourceTable_ow7w",E="nameColumn_cltC",C="nameCell_dZOO",g="sourceColumn_R2BC",h="sourceCell_NfiE",b="starredColumn_Ycnc",w="starredCell_Cq7S",N="descriptionColumn_X0UP",_="descriptionCell_gbNW",S="resourceLink_QTdW",y=l(9236).customFields.backendUrl,k=e=>{let{moduleName:t,topicId:l}=e;const[s,n]=(0,r.useState)(null),[a,c]=(0,r.useState)(null),[m,u]=(0,r.useState)(!1),[i,d]=(0,r.useState)(null);return(0,r.useEffect)((()=>{t&&async function(){u(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${y}/api/module/${t}?userId=${e}`,{withCredentials:!0});n(l.data)}catch(i){d(i.response?i.response.data:i.message)}finally{u(!1)}}()}),[t]),(0,r.useEffect)((()=>{if(!s||!l)return;const e=s.topics.find((e=>e.topicId===l));e?c(e):d("Topic not found")}),[s,l]),m?r.createElement("p",null,"Loading data..."):i?r.createElement("p",null,"Error: ",i):r.createElement("div",null,a&&a.resources&&r.createElement("table",{className:f},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:g},"Resources"),r.createElement("th",{className:b}),r.createElement("th",{className:E}),r.createElement("th",{className:N}))),r.createElement("tbody",null,a.resources.map(((e,t)=>r.createElement("tr",{key:e.uniqueId||t},r.createElement("td",{className:h},e.source),r.createElement("td",{className:w},e.star?"\u2b50":""),r.createElement("td",{className:C},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:S},e.name)),r.createElement("td",{className:_},e.description)))))))},I={topicProgress:"topicProgress_vBvg",label:"label_wsxD",stateCircle:"stateCircle_E6bh",state0:"state0_qFD_",state1:"state1_sQKs",state2:"state2_w3Ye",dropdown:"dropdown_WV7Y",dropdownContent:"dropdownContent_etXv",dropdownMenu:"dropdownMenu_mCPJ"},v=l(9236).customFields.backendUrl,$=e=>{let{moduleName:t,topicId:l}=e;const[s,n]=(0,r.useState)(null),[a,c]=(0,r.useState)(null),[m,u]=(0,r.useState)(!0),[i,d]=(0,r.useState)(null),[p,f]=(0,r.useState)(!1),[E,C]=(0,r.useState)({}),g=(0,r.useRef)(null);(0,r.useEffect)((()=>{t&&async function(){u(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${v}/api/module/${t}?userId=${e}`,{withCredentials:!0});n(l.data)}catch(i){d(i.response?i.response.data:i.message)}finally{u(!1)}}()}),[t]),(0,r.useEffect)((()=>{if(!s||!l)return;const e=s.topics.find((e=>e.topicId===l));e?c(e):d("Topic not found")}),[s,l]);const h=async e=>{c((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await o.A.post(`${v}/api/topic/updateState?userId=${s}`,{moduleName:t,topicId:l,newState:e},{withCredentials:!0}),f(!1)}catch(s){d("Failed to update state."),c((e=>({...e,state:e.state})))}};return(0,r.useEffect)((()=>{const e=e=>{g.current&&!g.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),m?r.createElement("p",null,"Loading data..."):i?r.createElement("p",null,"Error: ",i):r.createElement("div",{className:I.topicProgress},r.createElement("div",{className:I.label},"Topic Progress:"),r.createElement("div",{className:`${I.stateCircle} ${I[`state${a?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();C({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),f(!p)}}),p&&r.createElement("div",{className:I.dropdownMenu,ref:g,style:{position:"absolute",top:`${E.top} - 50px`,left:`${E.left}px`}},r.createElement("div",{onClick:()=>h(0),className:"dropdownItem"},"Unseen"),r.createElement("div",{onClick:()=>h(1),className:"dropdownItem"},"Skipped"),r.createElement("div",{onClick:()=>h(2),className:"dropdownItem"},"Solved")))};var L=l(8092);const x={},T="Example Problem List",U={},A="LearnToCode",R="TimeComplexity",M=[];function j(e){const t={h1:"h1",header:"header",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L.A,{moduleName:A}),"\n",(0,n.jsx)(k,{moduleName:A,topicId:R}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"example-problem-list",children:"Example Problem List"})}),"\n",(0,n.jsx)(p,{moduleName:A,topicId:R,location:"sample1"}),"\n",(0,n.jsx)(u,{moduleName:A,topicId:R,location:"problemlist"}),"\n",(0,n.jsx)($,{moduleName:A,topicId:R})]})}function B(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},9236:(e,t,l)=>{l(6540);const s={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=s},1115:(e,t,l)=>{"use strict";l.d(t,{A:()=>m});var s=l(6540),n=l(8774);const a="navbarItems_SNXV",r="dropdown_tS68",o="dropdownButton_p_GL",c="dropdownContent_RHbB",m=()=>{const[e,t]=(0,s.useState)(!1),l=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=e=>{l.current&&!l.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),s.createElement("div",{className:a},s.createElement("div",{className:r,ref:l}," ",s.createElement("button",{className:o,onClick:()=>{t(!e)}},"Sections"),e&&s.createElement("div",{className:c},s.createElement(n.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome/"},"Learn To Code"),s.createElement(n.A,{to:"/SeaFarmers/modules/Novice/NoviceHome/"},"Novice"))))}},8092:(e,t,l)=>{"use strict";l.d(t,{A:()=>i});var s=l(6540),n=l(4335);const a="matchingTopic_xWnE",r="sidebarContainer_RDdI",o="sidebarHeader_hC8H",c="dropdown_xzkb";var m=l(1115);const u=l(9236).customFields.backendUrl;const i=function(e){let{moduleName:t}=e;const[l,i]=(0,s.useState)(null),[d,p]=(0,s.useState)(!1),[f,E]=(0,s.useState)(null);if((0,s.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(f){E(f.response?f.response.data:f.message)}finally{p(!1)}}()}),[t]),d)return s.createElement("p",null,"Loading module data...");if(f)return s.createElement("p",null,"Error: ",f);const{genericTopics:C=[],topics:g=[]}=l||{};return s.createElement("div",{className:r},s.createElement("header",{className:o},s.createElement("div",{className:c},s.createElement(m.A,null))),s.createElement("div",{className:"generic-topics-container"},C.map(((e,l)=>{const n=e.topics.map((e=>g.find((t=>t.topicId===e))));return s.createElement("div",{key:l,className:"generic-topic"},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,n.map(((e,l)=>e&&s.createElement("li",{key:l,className:a},s.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}/`},e.topicName))))))}))))}},2407:(e,t,l)=>{"use strict";l.d(t,{A:()=>s});const s={}},1020:(e,t,l)=>{"use strict";var s=l(6540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function m(e,t,l){var s,a={},m=null,u=null;for(s in void 0!==l&&(m=""+l),void 0!==t.key&&(m=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:m,ref:u,props:a,_owner:o.current}}t.Fragment=a,t.jsx=m,t.jsxs=m},4848:(e,t,l)=>{"use strict";e.exports=l(1020)},8453:(e,t,l)=>{"use strict";l.d(t,{R:()=>r,x:()=>o});var s=l(6540);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);