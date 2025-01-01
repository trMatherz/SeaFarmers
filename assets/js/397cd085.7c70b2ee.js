"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[560],{1039:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>n,moduleName:()=>C,toc:()=>E,topicId:()=>g});const n=JSON.parse('{"id":"modules/LearnToCode/Output","title":"Output","description":"Prerequisites: Nothing","source":"@site/docs/modules/LearnToCode/Output.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/Output","permalink":"/SeaFarmers/docs/modules/LearnToCode/Output","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Time Complexity","permalink":"/SeaFarmers/docs/intro"},"next":{"title":"ThisGuide","permalink":"/SeaFarmers/docs/modules/LearnToCode/ThisGuide"}}');var s=l(4848),a=l(8453),r=(l(6540),l(2407),l(1955)),o=l(7294),c=(l(8235),l(5430)),u=l(8092),m=(l(3132),l(8866)),i=l(426);const d={},p="Output",f={},C="LearnToCode",g="Output",E=[];function h(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.A,{moduleName:C}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"output",children:"Output"})}),"\n",(0,s.jsx)(t.p,{children:"Prerequisites: Nothing"}),"\n",(0,s.jsx)(t.p,{children:"At its core, programs are designed to output something, given an input. For right now, let's keep it simple and\nfocus only on outputs."}),"\n",(0,s.jsx)(t.p,{children:"This is your basic C++ file:"}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(m.A,{language:"cpp",style:i.A,children:"#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << 5 << endl; \n  cout << 2 + 3 << endl; \n}\n"})}),"\n",(0,s.jsx)(t.p,{children:'When this code runs, it starts at the top of main() and goes line by line until it reaches the bottom. The "cout"\nmeans output, the "<<" seperarates different outputs, and the "endl" makes the program output on the next line.'}),"\n",(0,s.jsx)(t.p,{children:"If you ran the code, you would get an output like this:"}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(m.A,{language:"cpp",style:i.A,children:"5\n2\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use this to solve this Focus Problem:"}),"\n",(0,s.jsx)(o.A,{moduleName:C,topicId:g,location:"sample1"}),"\n",(0,s.jsx)(r.A,{moduleName:C,topicId:g,location:"sample1"}),"\n",(0,s.jsx)(c.A,{moduleName:C,topicId:g})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1955:(e,t,l)=>{l.d(t,{A:()=>o});var n=l(6540),s=l(4335);const a={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=l(4586);const o=e=>{let{moduleName:t,topicId:l,location:o}=e;const{siteConfig:c}=(0,r.A)(),u=c.customFields.backendUrl,[m,i]=(0,n.useState)(null),[d,p]=(0,n.useState)(null),[f,C]=(0,n.useState)(!1),[g,E]=(0,n.useState)(null),[h,b]=(0,n.useState)(null),[w,N]=(0,n.useState)({}),[_,y]=(0,n.useState)(null),[k,S]=(0,n.useState)({}),[I,v]=(0,n.useState)(!1),T=(0,n.useRef)(null),L=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){C(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await s.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(g){E(g.response?g.response.data:g.message)}finally{C(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!m||!l)return;const e=m.topics.find((e=>e.topicId===l));e?p(e):E("Topic not found")}),[m,l]);const A=async(e,n)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await s.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:a,newState:n},{withCredentials:!0});p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:n}:e));return{...e,problems:t}})),b(null)}catch(g){console.error("Error updating problem state:",g)}};return(0,n.useEffect)((()=>{const e=e=>{T.current&&!T.current.contains(e.target)&&b(null),L.current&&!L.current.contains(e.target)&&y(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),f?n.createElement("p",null,"Loading data..."):g?n.createElement("p",null,"Error: ",g):n.createElement("div",null,d&&d.problems&&n.createElement("table",{className:a.problemTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:a.statusColumn}),n.createElement("th",{className:a.sourceColumn},"Source"),n.createElement("th",{className:a.starredColumn}),n.createElement("th",{className:a.problemColumn},"Problem"),n.createElement("th",{className:a.difficultyColumn},"Dif"),n.createElement("th",{className:a.tagsColumn},n.createElement("button",{onClick:()=>v((e=>!e)),className:a.toggleTagsButton},I?"Hide Tags":"Show Tags")),n.createElement("th",{className:a.helpColumn}))),n.createElement("tbody",null,d.problems&&Array.isArray(d.problems)&&d.problems.filter((e=>e.location===o)).map(((e,t)=>e?n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:a.statusCell},n.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(h===e)b(null),N({});else{const l=t.target.getBoundingClientRect();N({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),b(e)}})(t,e)}),h===t&&n.createElement("div",{ref:T,className:a.dropdownMenu,style:{position:"absolute"}},n.createElement("ul",null,n.createElement("li",{onClick:()=>A(e,2)},"Solved"),n.createElement("li",{onClick:()=>A(e,1)},"Skipped"),n.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),n.createElement("td",{className:a.sourceCell},e.source),n.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:a.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),n.createElement("td",{className:a.difficultyCell},e.difficulty),n.createElement("td",{className:a.tagsCell},I&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),n.createElement("td",{className:a.helpCell},n.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(_===e)y(null),S({});else{const l=t.target.getBoundingClientRect();S({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),y(e)}})(t,e)},"Help"),_===t&&n.createElement("div",{ref:L,className:a.dropdownMenu,style:{position:"absolute"}},n.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>n.createElement("li",{key:t},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):n.createElement("li",null,"No Help"))))):null)))))}},8235:(e,t,l)=>{l.d(t,{A:()=>g});var n=l(6540),s=l(4335);const a="resourceTable_ow7w",r="nameColumn_cltC",o="nameCell_dZOO",c="sourceColumn_R2BC",u="sourceCell_NfiE",m="starredColumn_Ycnc",i="starredCell_Cq7S",d="descriptionColumn_X0UP",p="descriptionCell_gbNW",f="resourceLink_QTdW";var C=l(4586);const g=e=>{let{moduleName:t,topicId:l}=e;const{siteConfig:g}=(0,C.A)(),E=g.customFields.backendUrl,[h,b]=(0,n.useState)(null),[w,N]=(0,n.useState)(null),[_,y]=(0,n.useState)(!1),[k,S]=(0,n.useState)(null);return(0,n.useEffect)((()=>{t&&async function(){y(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await s.A.get(`${E}/api/module/${t}?userId=${e}`,{withCredentials:!0});b(l.data)}catch(k){S(k.response?k.response.data:k.message)}finally{y(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!h||!l)return;const e=h.topics.find((e=>e.topicId===l));e?N(e):S("Topic not found")}),[h,l]),_?n.createElement("p",null,"Loading data..."):k?n.createElement("p",null,"Error: ",k):n.createElement("div",null,w&&w.resources&&n.createElement("table",{className:a},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:c},"Resources"),n.createElement("th",{className:m}),n.createElement("th",{className:r}),n.createElement("th",{className:d}))),n.createElement("tbody",null,w.resources.map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:u},e.source),n.createElement("td",{className:i},e.star?"\u2b50":""),n.createElement("td",{className:o},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:f},e.name)),n.createElement("td",{className:p},e.description)))))))}},7294:(e,t,l)=>{l.d(t,{A:()=>o});var n=l(6540),s=l(4335);const a={problemTable:"problemTable_Z_QZ",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=l(4586);const o=e=>{let{moduleName:t,topicId:l,location:o}=e;const{siteConfig:c}=(0,r.A)(),u=c.customFields.backendUrl,[m,i]=(0,n.useState)(null),[d,p]=(0,n.useState)(null),[f,C]=(0,n.useState)(!1),[g,E]=(0,n.useState)(null),[h,b]=(0,n.useState)(null),[w,N]=(0,n.useState)({}),[_,y]=(0,n.useState)(null),[k,S]=(0,n.useState)({}),[I,v]=(0,n.useState)(!1),T=(0,n.useRef)(null),L=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){C(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await s.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(g){E(g.response?g.response.data:g.message)}finally{C(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!m||!l)return;const e=m.topics.find((e=>e.topicId===l));e?p(e):E("Topic not found")}),[m,l]),(0,n.useEffect)((()=>{const e=e=>{T.current&&!T.current.contains(e.target)&&b(null),L.current&&!L.current.contains(e.target)&&y(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const A=async(e,n)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await s.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:a,newState:n},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:n}:e));return{...e,problems:t}})),b(null)}catch(g){console.error("Error updating problem state:",g)}};return f?n.createElement("p",null,"Loading data..."):g?n.createElement("p",null,"Error: ",g):n.createElement("div",null,d?.problems?.length>0?n.createElement("table",{className:a.problemTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:a.statusColumn}),n.createElement("th",{className:a.sourceColumn},"Source"),n.createElement("th",{className:a.starredColumn}),n.createElement("th",{className:a.problemColumn},"Problem"),n.createElement("th",{className:a.difficultyColumn},"Dif"),n.createElement("th",{className:a.tagsColumn},n.createElement("button",{onClick:()=>v((e=>!e)),className:a.toggleTagsButton},I?"Hide Tags":"Show Tags")),n.createElement("th",{className:a.helpColumn}))),n.createElement("tbody",null,d.problems.filter((e=>e.location===o)).map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:a.statusCell},n.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(h===e)b(null),N({});else{const l=t.target.getBoundingClientRect();N({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),b(e)}})(t,e)}),h===t&&n.createElement("div",{className:a.dropdownMenu,ref:T,style:{position:"absolute"}},n.createElement("ul",null,n.createElement("li",{onClick:()=>A(e,2)},"Solved"),n.createElement("li",{onClick:()=>A(e,1)},"Skipped"),n.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),n.createElement("td",{className:a.sourceCell},e.source),n.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:a.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),n.createElement("td",{className:a.difficultyCell},e.difficulty||"Unknown"),n.createElement("td",{className:a.tagsCell},I&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),n.createElement("td",{className:a.helpCell},n.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(_===e)y(null),S({});else{const l=t.target.getBoundingClientRect();S({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),y(e)}})(t,e)},"Help"),_===t&&n.createElement("div",{className:a.dropdownMenu,ref:L,style:{position:"absolute"}},n.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>n.createElement("li",{key:t},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):n.createElement("li",null,"No Help"))))))))):n.createElement("p",null,"No problems data available."))}},3132:(e,t,l)=>{l(6540)},5430:(e,t,l)=>{l.d(t,{A:()=>o});var n=l(6540),s=l(4335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=l(4586);const o=e=>{let{moduleName:t,topicId:l}=e;const{siteConfig:o}=(0,r.A)(),c=o.customFields.backendUrl,[u,m]=(0,n.useState)(null),[i,d]=(0,n.useState)(null),[p,f]=(0,n.useState)(!0),[C,g]=(0,n.useState)(null),[E,h]=(0,n.useState)(null),[b,w]=(0,n.useState)({}),N=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await s.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(l.data)}catch(C){g(C.response?C.response.data:C.message)}finally{f(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!u||!l)return;const e=u.topics.find((e=>e.topicId===l));e?d(e):g("Topic not found")}),[u,l]);if((0,n.useEffect)((()=>{const e=e=>{N.current&&!N.current.contains(e.target)&&h(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return n.createElement("p",null,"Loading data...");if(C)return n.createElement("p",null,"Error: ",C);const _=["Unseen","Skipped","Solved"],y=_[i?.state??0];return n.createElement("div",{className:a.topicProgress},n.createElement("div",{className:a.label},"Topic Progress:"),n.createElement("div",{className:`${a.stateLabel} ${a[`state-${i?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();w({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),h(!E)}},y),E&&n.createElement("div",{className:a.dropdownMenu,ref:N,style:{position:"absolute",top:`${b.top}px`,left:`${b.left}px`}},_.map(((e,r)=>n.createElement("div",{key:r,onClick:()=>(async e=>{d((t=>({...t,state:e})));try{const n=sessionStorage.getItem("userId")||"guest";if(!n)throw new Error("User ID not found in session storage");await s.A.post(`${c}/api/topic/updateState?userId=${n}`,{moduleName:t,topicId:l,newState:e},{withCredentials:!0}),h(null)}catch(n){g("Failed to update state."),d((e=>({...e,state:e.state})))}})(r),className:a.dropdownItem},e)))))}}}]);