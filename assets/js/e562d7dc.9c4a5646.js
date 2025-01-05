"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[853],{3155:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>s,moduleName:()=>p,toc:()=>f,topicId:()=>C});const s=JSON.parse('{"id":"modules/LearnToCode/Conditionals","title":"Conditionals","description":"Prerequisites: Basic Data Types","source":"@site/docs/modules/LearnToCode/Conditionals.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/Conditionals","permalink":"/SeaFarmers/docs/modules/LearnToCode/Conditionals","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"BasicDataTypes","permalink":"/SeaFarmers/docs/modules/LearnToCode/BasicDataTypes"},"next":{"title":"Input","permalink":"/SeaFarmers/docs/modules/LearnToCode/Input"}}');var n=l(4848),a=l(8453),o=(l(6540),l(2407),l(1955)),r=l(7294),c=(l(8235),l(5430)),u=l(8092);l(3132);const i={},m="Conditionals",d={},p="LearnToCode",C="Conditionals",f=[];function E(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.A,{moduleName:p}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"conditionals",children:"Conditionals"})}),"\n",(0,n.jsx)(t.p,{children:"Prerequisites: Basic Data Types"}),"\n",(0,n.jsx)(t.h1,{id:"focus-problem",children:"Focus Problem"}),"\n",(0,n.jsx)(r.A,{moduleName:p,topicId:C,location:"sample1"}),"\n",(0,n.jsx)(t.p,{children:"So what is a conditional? It is a fancy way of saying IF this, THEN this."}),"\n",(0,n.jsx)(t.h1,{id:"practice",children:"Practice"}),"\n",(0,n.jsx)(o.A,{moduleName:p,topicId:C,location:"list"}),"\n",(0,n.jsx)(c.A,{moduleName:p,topicId:C})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(E,{...e})}):E(e)}},1955:(e,t,l)=>{l.d(t,{A:()=>r});var s=l(6540),n=l(4335);const a={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var o=l(4586);const r=e=>{let{moduleName:t,topicId:l,location:r}=e;const{siteConfig:c}=(0,o.A)(),u=c.customFields.backendUrl,[i,m]=(0,s.useState)(null),[d,p]=(0,s.useState)(null),[C,f]=(0,s.useState)(!1),[E,g]=(0,s.useState)(null),[h,b]=(0,s.useState)(null),[w,N]=(0,s.useState)({}),[_,y]=(0,s.useState)(null),[S,k]=(0,s.useState)({}),[I,T]=(0,s.useState)(!1),v=(0,s.useRef)(null),L=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(l.data)}catch(E){g(E.response?E.response.data:E.message)}finally{f(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!i||!l)return;const e=i.topics.find((e=>e.topicId===l));e?p(e):g("Topic not found")}),[i,l]);const A=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await n.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:a,newState:s},{withCredentials:!0});p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),b(null)}catch(E){console.error("Error updating problem state:",E)}};return(0,s.useEffect)((()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&b(null),L.current&&!L.current.contains(e.target)&&y(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),C?s.createElement("p",null,"Loading data..."):E?s.createElement("p",null,"Error: ",E):s.createElement("div",null,d&&d.problems&&s.createElement("table",{className:a.problemTable},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:a.statusColumn}),s.createElement("th",{className:a.sourceColumn},"Source"),s.createElement("th",{className:a.starredColumn}),s.createElement("th",{className:a.problemColumn},"Problem"),s.createElement("th",{className:a.difficultyColumn},"Dif"),s.createElement("th",{className:a.tagsColumn},s.createElement("button",{onClick:()=>T((e=>!e)),className:a.toggleTagsButton},I?"Hide Tags":"Show Tags")),s.createElement("th",{className:a.helpColumn}))),s.createElement("tbody",null,d.problems&&Array.isArray(d.problems)&&d.problems.filter((e=>e.location===r)).map(((e,t)=>e?s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:a.statusCell},s.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(h===e)b(null),N({});else{const l=t.target.getBoundingClientRect();N({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),b(e)}})(t,e)}),h===t&&s.createElement("div",{ref:v,className:a.dropdownMenu,style:{position:"absolute"}},s.createElement("ul",null,s.createElement("li",{onClick:()=>A(e,2)},"Solved"),s.createElement("li",{onClick:()=>A(e,1)},"Skipped"),s.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),s.createElement("td",{className:a.sourceCell},e.source),s.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),s.createElement("td",{className:a.problemCell},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),s.createElement("td",{className:a.difficultyCell},e.difficulty),s.createElement("td",{className:a.tagsCell},I&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),s.createElement("td",{className:a.helpCell},s.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(_===e)y(null),k({});else{const l=t.target.getBoundingClientRect();k({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),y(e)}})(t,e)},"Help"),_===t&&s.createElement("div",{ref:L,className:a.dropdownMenu,style:{position:"absolute"}},s.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>s.createElement("li",{key:t},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):s.createElement("li",null,"No Help"))))):null)))))}},8235:(e,t,l)=>{l.d(t,{A:()=>E});var s=l(6540),n=l(4335);const a="resourceTable_ow7w",o="nameColumn_cltC",r="nameCell_dZOO",c="sourceColumn_R2BC",u="sourceCell_NfiE",i="starredColumn_Ycnc",m="starredCell_Cq7S",d="descriptionColumn_X0UP",p="descriptionCell_gbNW",C="resourceLink_QTdW";var f=l(4586);const E=e=>{let{moduleName:t,topicId:l}=e;const{siteConfig:E}=(0,f.A)(),g=E.customFields.backendUrl,[h,b]=(0,s.useState)(null),[w,N]=(0,s.useState)(null),[_,y]=(0,s.useState)(!1),[S,k]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t&&async function(){y(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${g}/api/module/${t}?userId=${e}`,{withCredentials:!0});b(l.data)}catch(S){k(S.response?S.response.data:S.message)}finally{y(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!h||!l)return;const e=h.topics.find((e=>e.topicId===l));e?N(e):k("Topic not found")}),[h,l]),_?s.createElement("p",null,"Loading data..."):S?s.createElement("p",null,"Error: ",S):s.createElement("div",null,w&&w.resources&&s.createElement("table",{className:a},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:c},"Resources"),s.createElement("th",{className:i}),s.createElement("th",{className:o}),s.createElement("th",{className:d}))),s.createElement("tbody",null,w.resources.map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:u},e.source),s.createElement("td",{className:m},e.star?"\u2b50":""),s.createElement("td",{className:r},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:C},e.name)),s.createElement("td",{className:p},e.description)))))))}},7294:(e,t,l)=>{l.d(t,{A:()=>r});var s=l(6540),n=l(4335);const a={problemTable:"problemTable_Z_QZ",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var o=l(4586);const r=e=>{let{moduleName:t,topicId:l,location:r}=e;const{siteConfig:c}=(0,o.A)(),u=c.customFields.backendUrl,[i,m]=(0,s.useState)(null),[d,p]=(0,s.useState)(null),[C,f]=(0,s.useState)(!1),[E,g]=(0,s.useState)(null),[h,b]=(0,s.useState)(null),[w,N]=(0,s.useState)({}),[_,y]=(0,s.useState)(null),[S,k]=(0,s.useState)({}),[I,T]=(0,s.useState)(!1),v=(0,s.useRef)(null),L=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(l.data)}catch(E){g(E.response?E.response.data:E.message)}finally{f(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!i||!l)return;const e=i.topics.find((e=>e.topicId===l));e?p(e):g("Topic not found")}),[i,l]),(0,s.useEffect)((()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&b(null),L.current&&!L.current.contains(e.target)&&y(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const A=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await n.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:a,newState:s},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),b(null)}catch(E){console.error("Error updating problem state:",E)}};return C?s.createElement("p",null,"Loading data..."):E?s.createElement("p",null,"Error: ",E):s.createElement("div",null,d?.problems?.length>0?s.createElement("table",{className:a.problemTable},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:a.statusColumn}),s.createElement("th",{className:a.sourceColumn},"Source"),s.createElement("th",{className:a.starredColumn}),s.createElement("th",{className:a.problemColumn},"Problem"),s.createElement("th",{className:a.difficultyColumn},"Dif"),s.createElement("th",{className:a.tagsColumn},s.createElement("button",{onClick:()=>T((e=>!e)),className:a.toggleTagsButton},I?"Hide Tags":"Show Tags")),s.createElement("th",{className:a.helpColumn}))),s.createElement("tbody",null,d.problems.filter((e=>e.location===r)).map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:a.statusCell},s.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(h===e)b(null),N({});else{const l=t.target.getBoundingClientRect();N({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),b(e)}})(t,e)}),h===t&&s.createElement("div",{className:a.dropdownMenu,ref:v,style:{position:"absolute"}},s.createElement("ul",null,s.createElement("li",{onClick:()=>A(e,2)},"Solved"),s.createElement("li",{onClick:()=>A(e,1)},"Skipped"),s.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),s.createElement("td",{className:a.sourceCell},e.source),s.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),s.createElement("td",{className:a.problemCell},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),s.createElement("td",{className:a.difficultyCell},e.difficulty||"Unknown"),s.createElement("td",{className:a.tagsCell},I&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),s.createElement("td",{className:a.helpCell},s.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(_===e)y(null),k({});else{const l=t.target.getBoundingClientRect();k({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),y(e)}})(t,e)},"Help"),_===t&&s.createElement("div",{className:a.dropdownMenu,ref:L,style:{position:"absolute"}},s.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>s.createElement("li",{key:t},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):s.createElement("li",null,"No Help"))))))))):s.createElement("p",null,"No problems data available."))}},3132:(e,t,l)=>{l(6540)},5430:(e,t,l)=>{l.d(t,{A:()=>r});var s=l(6540),n=l(4335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var o=l(4586);const r=e=>{let{moduleName:t,topicId:l}=e;const{siteConfig:r}=(0,o.A)(),c=r.customFields.backendUrl,[u,i]=(0,s.useState)(null),[m,d]=(0,s.useState)(null),[p,C]=(0,s.useState)(!0),[f,E]=(0,s.useState)(null),[g,h]=(0,s.useState)(null),[b,w]=(0,s.useState)({}),N=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){C(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(f){E(f.response?f.response.data:f.message)}finally{C(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!u||!l)return;const e=u.topics.find((e=>e.topicId===l));e?d(e):E("Topic not found")}),[u,l]);if((0,s.useEffect)((()=>{const e=e=>{N.current&&!N.current.contains(e.target)&&h(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return s.createElement("p",null,"Loading data...");if(f)return s.createElement("p",null,"Error: ",f);const _=["Unseen","Skipped","Solved"],y=_[m?.state??0];return s.createElement("div",{className:a.topicProgress},s.createElement("div",{className:a.label},"Topic Progress:"),s.createElement("div",{className:`${a.stateLabel} ${a[`state-${m?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();w({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),h(!g)}},y),g&&s.createElement("div",{className:a.dropdownMenu,ref:N,style:{position:"absolute",top:`${b.top}px`,left:`${b.left}px`}},_.map(((e,o)=>s.createElement("div",{key:o,onClick:()=>(async e=>{d((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await n.A.post(`${c}/api/topic/updateState?userId=${s}`,{moduleName:t,topicId:l,newState:e},{withCredentials:!0}),h(null)}catch(s){E("Failed to update state."),d((e=>({...e,state:e.state})))}})(o),className:a.dropdownItem},e)))))}}}]);