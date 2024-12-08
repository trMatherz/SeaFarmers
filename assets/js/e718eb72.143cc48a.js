/*! For license information please see e718eb72.143cc48a.js.LICENSE.txt */
(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[854],{5341:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>I,contentTitle:()=>_,default:()=>x,frontMatter:()=>S,metadata:()=>l,moduleName:()=>y,toc:()=>v,topicId:()=>k});const l=JSON.parse('{"type":"mdx","permalink":"/SeaFarmers/modules/LearnToCode/test","source":"@site/src/pages/modules/LearnToCode/test.mdx","description":"Click below to sign in with GitHub:","frontMatter":{},"unlisted":false}');var a=s(4848),r=s(8453),n=s(6540),o=s(4335);const c={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9"},i=s(9236).customFields.backendUrl,m=e=>{let{moduleName:t,topicId:s,location:l}=e;const[a,r]=(0,n.useState)(null),[m,u]=(0,n.useState)(null),[d,p]=(0,n.useState)(!1),[f,E]=(0,n.useState)(null),[C,g]=(0,n.useState)(null),[b,h]=(0,n.useState)({});(0,n.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId");if(!e)throw new Error("User ID not found in session storage");const s=await o.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});r(s.data)}catch(f){E(f.response?f.response.data:f.message)}finally{p(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!a||!s)return;const e=a.topics.find((e=>e.topicId===s));e?u(e):E("Topic not found")}),[a,s]);const w=async(e,l)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId");if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:s,problemId:a,newState:l},{withCredentials:!0});u((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:l}:e));return{...e,problems:t}})),g(null)}catch(f){console.error("Error updating problem state:",f)}};return d?n.createElement("p",null,"Loading data..."):f?n.createElement("p",null,"Error: ",f):n.createElement("div",null,m&&m.problems&&n.createElement("table",{className:c.problemTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:c.statusColumn},"Status"),n.createElement("th",{className:c.sourceColumn},"Source"),n.createElement("th",{className:c.starredColumn},"Starred"),n.createElement("th",{className:c.problemColumn},"Problem"),n.createElement("th",{className:c.difficultyColumn},"Difficulty"),n.createElement("th",{className:c.tagsColumn},"Tags"))),n.createElement("tbody",null,m.problems.filter((e=>e.location===l)).map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:c.statusCell},n.createElement("span",{className:`${c.stateCircle} ${c[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)g(null),h({});else{const s=t.target.getBoundingClientRect();h({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),g(e)}})(t,e)}),C===t&&n.createElement("div",{className:c.dropdownMenu,style:{position:"absolute",top:`${b.top}px`,left:`${b.left}px`}},n.createElement("ul",null,n.createElement("li",{onClick:()=>w(e,2)},"Solved"),n.createElement("li",{onClick:()=>w(e,1)},"Skipped"),n.createElement("li",{onClick:()=>w(e,0)},"Unseen")))),n.createElement("td",{className:c.sourceCell},e.source),n.createElement("td",{className:c.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:c.problemCell},n.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:c.problemLink},e.name)),n.createElement("td",{className:c.difficultyCell},e.difficulty),n.createElement("td",{className:c.tagsCell},e.tags&&Array.isArray(e.tags)?e.tags.join(", "):"No tags")))))))},u={problemDetails:"problemDetails_epqq",statusCell:"statusCell_qscZ",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",dropdownMenu:"dropdownMenu_wG6v",sourceCell:"sourceCell_eTCO",starredCell:"starredCell_LjUf",problemCell:"problemCell_f4Xa",difficultyCell:"difficultyCell_TYpE",tagsCell:"tagsCell_X8Zz"},d=s(9236).customFields.backendUrl,p=e=>{let{moduleName:t,topicId:s,location:l}=e;const[a,r]=(0,n.useState)(null),[c,i]=(0,n.useState)(null),[m,p]=(0,n.useState)(!1),[f,E]=(0,n.useState)(null),[C,g]=(0,n.useState)(null),[b,h]=(0,n.useState)({});(0,n.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId");if(!e)throw new Error("User ID not found in session storage");const s=await o.A.get(`${d}/api/module/${t}?userId=${e}`,{withCredentials:!0});r(s.data)}catch(f){E(f.response?f.response.data:f.message)}finally{p(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!a||!s)return;const e=a.topics.find((e=>e.topicId===s));e?i(e):E("Topic not found")}),[a,s]);const w=async(e,l)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId");if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${d}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:s,problemId:a,newState:l},{withCredentials:!0});i((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:l}:e));return{...e,problems:t}})),g(null)}catch(f){console.error("Error updating problem state:",f)}};return m?n.createElement("p",null,"Loading data..."):f?n.createElement("p",null,"Error: ",f):n.createElement("div",null,c&&c.problems&&c.problems.find((e=>e.location===l))&&n.createElement("div",{className:u.problemDetails},(()=>{const e=c.problems.find((e=>e.location===l));return n.createElement(n.Fragment,null,n.createElement("div",{className:u.statusCell},n.createElement("span",{className:`${u.stateCircle} ${u[`state${e.state}`]}`,onClick:t=>((e,t)=>{if(C===e)g(null),h({});else{const s=t.target.getBoundingClientRect();h({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),g(e)}})(e.uniqueId,t)}),C===e.uniqueId&&n.createElement("div",{className:u.dropdownMenu,style:{position:"absolute",top:`${b.top}px`,left:`${b.left}px`}},n.createElement("ul",null,n.createElement("li",{onClick:()=>w(e,2)},"Solved"),n.createElement("li",{onClick:()=>w(e,1)},"Skipped"),n.createElement("li",{onClick:()=>w(e,0)},"Unseen")))),n.createElement("div",{className:u.sourceCell},n.createElement("strong",null,"Source:")," ",e.source),n.createElement("div",{className:u.starredCell},n.createElement("strong",null,"Starred:")," ",e.star?"\u2b50":"No"),n.createElement("div",{className:u.problemCell},n.createElement("strong",null,"Problem:"),n.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:u.problemLink},e.name)),n.createElement("div",{className:u.difficultyCell},n.createElement("strong",null,"Difficulty:")," ",e.difficulty),n.createElement("div",{className:u.tagsCell},n.createElement("strong",null,"Tags:")," ",e.tags&&Array.isArray(e.tags)?e.tags.join(", "):"No tags"))})()))},f={resourceTable:"resourceTable_ow7w",nameColumn:"nameColumn_cltC",sourceColumn:"sourceColumn_R2BC",starredColumn:"starredColumn_Ycnc",descriptionColumn:"descriptionColumn_X0UP",resourceLink:"resourceLink_QTdW",starredCell:"starredCell_Cq7S"},E=s(9236).customFields.backendUrl,C=e=>{let{moduleName:t,topicId:s}=e;const[l,a]=(0,n.useState)(null),[r,c]=(0,n.useState)(null),[i,m]=(0,n.useState)(!1),[u,d]=(0,n.useState)(null);return(0,n.useEffect)((()=>{t&&async function(){m(!0);try{const e=sessionStorage.getItem("userId");if(!e)throw new Error("User ID not found in session storage");const s=await o.A.get(`${E}/api/module/${t}?userId=${e}`,{withCredentials:!0});a(s.data)}catch(u){d(u.response?u.response.data:u.message)}finally{m(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!l||!s)return;const e=l.topics.find((e=>e.topicId===s));e?c(e):d("Topic not found")}),[l,s]),i?n.createElement("p",null,"Loading data..."):u?n.createElement("p",null,"Error: ",u):n.createElement("div",null,r&&r.resources&&n.createElement("table",{className:f.resourceTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:f.nameColumn},"Name"),n.createElement("th",{className:f.sourceColumn},"Source"),n.createElement("th",{className:f.starredColumn},"Starred"),n.createElement("th",{className:f.descriptionColumn},"Description"))),n.createElement("tbody",null,r.resources.map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:f.nameCell},n.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:f.resourceLink},e.name)),n.createElement("td",{className:f.sourceCell},e.source),n.createElement("td",{className:f.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:f.descriptionCell},e.description)))))))},g={topicProgress:"topicProgress_vBvg",stateCircle:"stateCircle_E6bh",state0:"state0_qFD_",state1:"state1_sQKs",state2:"state2_w3Ye"},b=s(9236).customFields.backendUrl,h=e=>{let{moduleName:t,topicId:s}=e;const[l,a]=(0,n.useState)(null),[r,c]=(0,n.useState)(null),[i,m]=(0,n.useState)(!0),[u,d]=(0,n.useState)(null),[p,f]=(0,n.useState)(!1);(0,n.useEffect)((()=>{t&&async function(){m(!0);try{const e=sessionStorage.getItem("userId");if(!e)throw new Error("User ID not found in session storage");const s=await o.A.get(`${b}/api/module/${t}?userId=${e}`,{withCredentials:!0});a(s.data)}catch(u){d(u.response?u.response.data:u.message)}finally{m(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!l||!s)return;const e=l.topics.find((e=>e.topicId===s));e?c(e):d("Topic not found")}),[l,s]);const E=async e=>{c((t=>({...t,state:e})));try{const l=sessionStorage.getItem("userId");if(!l)throw new Error("User ID not found in session storage");await o.A.post(`${b}/api/topic/updateState?userId=${l}`,{moduleName:t,topicId:s,newState:e},{withCredentials:!0}),f(!1)}catch(l){d("Failed to update state."),c((e=>({...e,state:e.state})))}};return i?n.createElement("p",null,"Loading data..."):u?n.createElement("p",null,"Error: ",u):n.createElement("div",{className:g.topicProgress},n.createElement("div",{className:`${g.stateCircle} ${g[`state${r?.state??0}`]}`,onClick:()=>f(!p)}),p&&n.createElement("div",{className:g.dropdown},n.createElement("div",{onClick:()=>E(0),className:g.dropdownItem},"Unseen"),n.createElement("div",{onClick:()=>E(1),className:g.dropdownItem},"Skipped"),n.createElement("div",{onClick:()=>E(2),className:g.dropdownItem},"Solved")))};var w=s(8092);const N=()=>n.createElement("div",null,n.createElement("a",{href:"/auth/github",style:{padding:"10px",backgroundColor:"#24292f",color:"white",borderRadius:"5px",textDecoration:"none"}},"Sign in with GitHub")),S={},_="Welcome to the Site",I={},y="LearnToCode",k="variables",v=[];function $(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.A,{moduleName:y}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"welcome-to-the-site",children:"Welcome to the Site"})}),"\n",(0,a.jsx)(t.p,{children:"Click below to sign in with GitHub:"}),"\n",(0,a.jsx)(N,{}),"\n",(0,a.jsx)(C,{moduleName:y,topicId:k}),"\n",(0,a.jsx)(t.h1,{id:"example-problem-list",children:"Example Problem List"}),"\n",(0,a.jsx)(p,{moduleName:y,topicId:k,location:"sample1"}),"\n",(0,a.jsx)(m,{moduleName:y,topicId:k,location:"problemlist"}),"\n",(0,a.jsx)(h,{moduleName:y,topicId:k})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)($,{...e})}):$(e)}},9236:(e,t,s)=>{s(6540);const l={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=l},1115:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var l=s(6540),a=s(8774);const r="navbarItems_SNXV",n="dropdown_tS68",o="dropdownButton_p_GL",c="dropdownContent_RHbB",i=()=>{const[e,t]=(0,l.useState)(!1);return l.createElement("div",{className:r},l.createElement("div",{className:n},l.createElement("button",{className:o,onClick:()=>{t(!e)}},"Sections"),e&&l.createElement("div",{className:c},l.createElement(a.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome"},"Learn To Code"),l.createElement(a.A,{to:"/SeaFarmers/modules/Novice/NoviceHome"},"Novice"))))}},8092:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var l=s(6540),a=s(4335);const r="sidebarContainer_RDdI",n="sidebarHeader_hC8H",o="dropdown_xzkb";var c=s(1115);const i=s(9236).customFields.backendUrl;const m=function(e){let{moduleName:t}=e;const[s,m]=(0,l.useState)(null),[u,d]=(0,l.useState)(!1),[p,f]=(0,l.useState)(null);if((0,l.useEffect)((()=>{t&&async function(){d(!0);try{const e=sessionStorage.getItem("userId");if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(s.data)}catch(p){f(p.response?p.response.data:p.message)}finally{d(!1)}}()}),[t]),u)return l.createElement("p",null,"Loading module data...");if(p)return l.createElement("p",null,"Error: ",p);const{genericTopics:E=[],topics:C=[]}=s||{};return l.createElement("div",{className:r},l.createElement("header",{className:n},l.createElement("div",{className:o},l.createElement(c.A,null))),l.createElement("div",{className:"generic-topics-container"},E.map(((e,t)=>{const s=e.topics.map((e=>C.find((t=>t.topicId===e))));return l.createElement("div",{key:t,className:"generic-topic"},l.createElement("h3",null,e.genericTopicName),l.createElement("ul",null,s.map(((e,t)=>e&&l.createElement("li",{key:t},e.topicName)))))}))))}},1020:(e,t,s)=>{"use strict";var l=s(6540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var l,r={},i=null,m=null;for(l in void 0!==s&&(i=""+s),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(m=t.ref),t)n.call(t,l)&&!c.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===r[l]&&(r[l]=t[l]);return{$$typeof:a,type:e,key:i,ref:m,props:r,_owner:o.current}}t.Fragment=r,t.jsx=i,t.jsxs=i},4848:(e,t,s)=>{"use strict";e.exports=s(1020)},8453:(e,t,s)=>{"use strict";s.d(t,{R:()=>n,x:()=>o});var l=s(6540);const a={},r=l.createContext(a);function n(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);