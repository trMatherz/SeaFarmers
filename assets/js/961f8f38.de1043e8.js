"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9164],{50193:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>E,frontMatter:()=>u,metadata:()=>s,moduleId:()=>d,toc:()=>f,topicId:()=>p});const s=JSON.parse('{"id":"modules/LearnToCode/Review","title":"Review","description":"Prerequisites: Everything","source":"@site/docs/modules/LearnToCode/Review.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/Review","permalink":"/SeaFarmers/docs/modules/LearnToCode/Review","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Output","permalink":"/SeaFarmers/docs/modules/LearnToCode/Output"},"next":{"title":"ThisGuide","permalink":"/SeaFarmers/docs/modules/LearnToCode/ThisGuide"}}');var n=l(74848),a=l(28453),r=(l(96540),l(42407),l(41955)),o=(l(47294),l(38235),l(95430)),c=l(28092);l(13132);const u={},m="Review",i={},d="LearnToCode",p="Review",f=[];function C(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{moduleId:d}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"review",children:"Review"})}),"\n",(0,n.jsx)(t.p,{children:"Prerequisites: Everything"}),"\n",(0,n.jsx)(t.p,{children:"Ah, you've made it through the first few concepts. Now, it's time to apply whta you've leanred to problems\nin the wild!"}),"\n",(0,n.jsx)(t.h1,{id:"problems",children:"Problems"}),"\n",(0,n.jsx)(r.A,{moduleId:d,topicId:p,location:"list"}),"\n",(0,n.jsx)(o.A,{moduleId:d,topicId:p})]})}function E(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(C,{...e})}):C(e)}},41955:(e,t,l)=>{l.d(t,{A:()=>o});var s=l(96540),n=l(94335);const a={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=l(44586);const o=e=>{let{moduleId:t,topicId:l,location:o}=e;const{siteConfig:c}=(0,r.A)(),u=c.customFields.backendUrl,[m,i]=(0,s.useState)(null),[d,p]=(0,s.useState)(null),[f,C]=(0,s.useState)(!1),[E,g]=(0,s.useState)(null),[h,w]=(0,s.useState)(null),[b,_]=(0,s.useState)({}),[N,I]=(0,s.useState)(null),[y,S]=(0,s.useState)({}),[k,v]=(0,s.useState)(!1),L=(0,s.useRef)(null),T=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){C(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(E){g(E.response?E.response.data:E.message)}finally{C(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!m||!l)return;const e=m.topics.find((e=>e.topicId===l));e?p(e):g("Topic not found")}),[m,l]);const A=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await n.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:l,problemId:a,newState:s},{withCredentials:!0});p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),w(null)}catch(E){console.error("Error updating problem state:",E)}};return(0,s.useEffect)((()=>{const e=e=>{L.current&&!L.current.contains(e.target)&&w(null),T.current&&!T.current.contains(e.target)&&I(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),f?s.createElement("p",null,"Loading data..."):E?s.createElement("p",null,"Error: ",E):s.createElement("div",null,d&&d.problems&&s.createElement("table",{className:a.problemTable},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:a.statusColumn}),s.createElement("th",{className:a.sourceColumn},"Source"),s.createElement("th",{className:a.starredColumn}),s.createElement("th",{className:a.problemColumn},"Problem"),s.createElement("th",{className:a.difficultyColumn},"Dif"),s.createElement("th",{className:a.tagsColumn},s.createElement("button",{onClick:()=>v((e=>!e)),className:a.toggleTagsButton},k?"Hide Tags":"Show Tags")),s.createElement("th",{className:a.helpColumn}))),s.createElement("tbody",null,d.problems&&Array.isArray(d.problems)&&d.problems.filter((e=>e.location===o)).map(((e,t)=>e?s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:a.statusCell},s.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(h===e)w(null),_({});else{const l=t.target.getBoundingClientRect();_({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),w(e)}})(t,e)}),h===t&&s.createElement("div",{ref:L,className:a.dropdownMenu,style:{position:"absolute"}},s.createElement("ul",null,s.createElement("li",{onClick:()=>A(e,2)},"Solved"),s.createElement("li",{onClick:()=>A(e,1)},"Skipped"),s.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),s.createElement("td",{className:a.sourceCell},e.source),s.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),s.createElement("td",{className:a.problemCell},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),s.createElement("td",{className:a.difficultyCell},e.difficulty),s.createElement("td",{className:a.tagsCell},k&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),s.createElement("td",{className:a.helpCell},s.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(N===e)I(null),S({});else{const l=t.target.getBoundingClientRect();S({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),I(e)}})(t,e)},"Help"),N===t&&s.createElement("div",{ref:T,className:a.dropdownMenu,style:{position:"absolute"}},s.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>s.createElement("li",{key:t},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):s.createElement("li",null,"No Help"))))):null)))))}},38235:(e,t,l)=>{l.d(t,{A:()=>E});var s=l(96540),n=l(94335);const a="resourceTable_ow7w",r="nameColumn_cltC",o="nameCell_dZOO",c="sourceColumn_R2BC",u="sourceCell_NfiE",m="starredColumn_Ycnc",i="starredCell_Cq7S",d="descriptionColumn_X0UP",p="descriptionCell_gbNW",f="resourceLink_QTdW";var C=l(44586);const E=e=>{let{moduleId:t,topicId:l}=e;const{siteConfig:E}=(0,C.A)(),g=E.customFields.backendUrl,[h,w]=(0,s.useState)(null),[b,_]=(0,s.useState)(null),[N,I]=(0,s.useState)(!1),[y,S]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t&&async function(){I(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${g}/api/module/${t}?userId=${e}`,{withCredentials:!0});w(l.data)}catch(y){S(y.response?y.response.data:y.message)}finally{I(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!h||!l)return;const e=h.topics.find((e=>e.topicId===l));e?_(e):S("Topic not found")}),[h,l]),N?s.createElement("p",null,"Loading data..."):y?s.createElement("p",null,"Error: ",y):s.createElement("div",null,b&&b.resources&&s.createElement("table",{className:a},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:c},"Resources"),s.createElement("th",{className:m}),s.createElement("th",{className:r}),s.createElement("th",{className:d}))),s.createElement("tbody",null,b.resources.map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:u},e.source),s.createElement("td",{className:i},e.star?"\u2b50":""),s.createElement("td",{className:o},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:f},e.name)),s.createElement("td",{className:p},e.description)))))))}},47294:(e,t,l)=>{l.d(t,{A:()=>o});var s=l(96540),n=l(94335);const a={sampleTable:"sampleTable_FWCi",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=l(44586);const o=e=>{let{moduleId:t,topicId:l,location:o}=e;const{siteConfig:c}=(0,r.A)(),u=c.customFields.backendUrl,[m,i]=(0,s.useState)(null),[d,p]=(0,s.useState)(null),[f,C]=(0,s.useState)(!1),[E,g]=(0,s.useState)(null),[h,w]=(0,s.useState)(null),[b,_]=(0,s.useState)({}),[N,I]=(0,s.useState)(null),[y,S]=(0,s.useState)({}),[k,v]=(0,s.useState)(!1),L=(0,s.useRef)(null),T=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){C(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(E){g(E.response?E.response.data:E.message)}finally{C(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!m||!l)return;const e=m.topics.find((e=>e.topicId===l));e?p(e):g("Topic not found")}),[m,l]),(0,s.useEffect)((()=>{const e=e=>{L.current&&!L.current.contains(e.target)&&w(null),T.current&&!T.current.contains(e.target)&&I(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const A=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await n.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:l,problemId:a,newState:s},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),w(null)}catch(E){console.error("Error updating problem state:",E)}};return f?s.createElement("p",null,"Loading data..."):E?s.createElement("p",null,"Error: ",E):s.createElement("div",null,d?.problems?.length>0?s.createElement("table",{className:a.sampleTable},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:a.statusColumn}),s.createElement("th",{className:a.sourceColumn},"Source"),s.createElement("th",{className:a.starredColumn}),s.createElement("th",{className:a.problemColumn},"Problem"),s.createElement("th",{className:a.difficultyColumn},"Dif"),s.createElement("th",{className:a.tagsColumn},s.createElement("button",{onClick:()=>v((e=>!e)),className:a.toggleTagsButton},k?"Hide Tags":"Show Tags")),s.createElement("th",{className:a.helpColumn}))),s.createElement("tbody",null,d.problems.filter((e=>e.location===o)).map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:a.statusCell},s.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(h===e)w(null),_({});else{const l=t.target.getBoundingClientRect();_({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),w(e)}})(t,e)}),h===t&&s.createElement("div",{className:a.dropdownMenu,ref:L,style:{position:"absolute"}},s.createElement("ul",null,s.createElement("li",{onClick:()=>A(e,2)},"Solved"),s.createElement("li",{onClick:()=>A(e,1)},"Skipped"),s.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),s.createElement("td",{className:a.sourceCell},e.source),s.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),s.createElement("td",{className:a.problemCell},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),s.createElement("td",{className:a.difficultyCell},e.difficulty||"Unknown"),s.createElement("td",{className:a.tagsCell},k&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),s.createElement("td",{className:a.helpCell},s.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(N===e)I(null),S({});else{const l=t.target.getBoundingClientRect();S({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),I(e)}})(t,e)},"Help"),N===t&&s.createElement("div",{className:a.dropdownMenu,ref:T,style:{position:"absolute"}},s.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>s.createElement("li",{key:t},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):s.createElement("li",null,"No Help"))))))))):s.createElement("p",null,"No problems data available."))}},13132:(e,t,l)=>{l(96540)},95430:(e,t,l)=>{l.d(t,{A:()=>o});var s=l(96540),n=l(94335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=l(44586);const o=e=>{let{moduleId:t,topicId:l}=e;const{siteConfig:o}=(0,r.A)(),c=o.customFields.backendUrl,[u,m]=(0,s.useState)(null),[i,d]=(0,s.useState)(null),[p,f]=(0,s.useState)(!0),[C,E]=(0,s.useState)(null),[g,h]=(0,s.useState)(null),[w,b]=(0,s.useState)({}),_=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await n.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(l.data)}catch(C){E(C.response?C.response.data:C.message)}finally{f(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!u||!l)return;const e=u.topics.find((e=>e.topicId===l));e?d(e):E("Topic not found")}),[u,l]);if((0,s.useEffect)((()=>{const e=e=>{_.current&&!_.current.contains(e.target)&&h(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return s.createElement("p",null,"Loading data...");if(C)return s.createElement("p",null,"Error: ",C);const N=["Unseen","Skipped","Solved"],I=N[i?.state??0];return s.createElement("div",{className:a.topicProgress},s.createElement("div",{className:a.label},"Topic Progress:"),s.createElement("div",{className:`${a.stateLabel} ${a[`state-${i?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();b({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),h(!g)}},I),g&&s.createElement("div",{className:a.dropdownMenu,ref:_,style:{position:"absolute",top:`${w.top}px`,left:`${w.left}px`}},N.map(((e,r)=>s.createElement("div",{key:r,onClick:()=>(async e=>{d((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await n.A.post(`${c}/api/topic/updateState?userId=${s}`,{moduleId:t,topicId:l,newState:e},{withCredentials:!0}),h(null)}catch(s){E("Failed to update state."),d((e=>({...e,state:e.state})))}})(r),className:a.dropdownItem},e)))))}}}]);