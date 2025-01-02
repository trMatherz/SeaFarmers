"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[560],{1039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>E,frontMatter:()=>m,metadata:()=>l,moduleName:()=>f,toc:()=>h,topicId:()=>g});const l=JSON.parse('{"id":"modules/LearnToCode/Output","title":"Output","description":"Prerequisites: Nothing","source":"@site/docs/modules/LearnToCode/Output.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/Output","permalink":"/SeaFarmers/docs/modules/LearnToCode/Output","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Input","permalink":"/SeaFarmers/docs/modules/LearnToCode/Input"},"next":{"title":"ThisGuide","permalink":"/SeaFarmers/docs/modules/LearnToCode/ThisGuide"}}');var s=n(4848),a=n(8453),r=(n(6540),n(2407),n(1955),n(7294)),o=(n(8235),n(5430)),c=n(8092),u=(n(3132),n(8866)),i=n(426);const m={},d="Output",p={},f="LearnToCode",g="Output",h=[];function C(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{moduleName:f}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"output",children:"Output"})}),"\n",(0,s.jsx)(t.p,{children:"Prerequisites: Nothing"}),"\n",(0,s.jsx)(t.p,{children:"At its core, programs are designed to output something, given an input. For right now, let's keep it simple and\nfocus only on outputs."}),"\n",(0,s.jsx)(t.p,{children:"This is your basic C++ file:"}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(u.A,{language:"cpp",style:i.A,children:"#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << 5 << endl; \n  cout << 2 + 3 << endl; \n}\n"})}),"\n",(0,s.jsx)(t.p,{children:'When this code runs, it starts at the top of main() and goes line by line until it reaches the bottom. The "cout"\nmeans output, the "<<" seperarates different outputs, and the "endl" makes the program output on the next line.'}),"\n",(0,s.jsx)(t.p,{children:"If you ran the code, you would get an output like this:"}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(u.A,{language:"cpp",style:i.A,children:"5\n2\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use this to solve this Focus Problem:"}),"\n",(0,s.jsx)(r.A,{moduleName:f,topicId:g,location:"sample1"}),"\n",(0,s.jsx)(o.A,{moduleName:f,topicId:g})]})}function E(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(C,{...e})}):C(e)}},1955:(e,t,n)=>{n(6540);n(4586)},8235:(e,t,n)=>{n.d(t,{A:()=>h});var l=n(6540),s=n(4335);const a="resourceTable_ow7w",r="nameColumn_cltC",o="nameCell_dZOO",c="sourceColumn_R2BC",u="sourceCell_NfiE",i="starredColumn_Ycnc",m="starredCell_Cq7S",d="descriptionColumn_X0UP",p="descriptionCell_gbNW",f="resourceLink_QTdW";var g=n(4586);const h=e=>{let{moduleName:t,topicId:n}=e;const{siteConfig:h}=(0,g.A)(),C=h.customFields.backendUrl,[E,b]=(0,l.useState)(null),[w,N]=(0,l.useState)(null),[_,k]=(0,l.useState)(!1),[y,S]=(0,l.useState)(null);return(0,l.useEffect)((()=>{t&&async function(){k(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await s.A.get(`${C}/api/module/${t}?userId=${e}`,{withCredentials:!0});b(n.data)}catch(y){S(y.response?y.response.data:y.message)}finally{k(!1)}}()}),[t]),(0,l.useEffect)((()=>{if(!E||!n)return;const e=E.topics.find((e=>e.topicId===n));e?N(e):S("Topic not found")}),[E,n]),_?l.createElement("p",null,"Loading data..."):y?l.createElement("p",null,"Error: ",y):l.createElement("div",null,w&&w.resources&&l.createElement("table",{className:a},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:c},"Resources"),l.createElement("th",{className:i}),l.createElement("th",{className:r}),l.createElement("th",{className:d}))),l.createElement("tbody",null,w.resources.map(((e,t)=>l.createElement("tr",{key:e.uniqueId||t},l.createElement("td",{className:u},e.source),l.createElement("td",{className:m},e.star?"\u2b50":""),l.createElement("td",{className:o},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:f},e.name)),l.createElement("td",{className:p},e.description)))))))}},7294:(e,t,n)=>{n.d(t,{A:()=>o});var l=n(6540),s=n(4335);const a={problemTable:"problemTable_Z_QZ",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=n(4586);const o=e=>{let{moduleName:t,topicId:n,location:o}=e;const{siteConfig:c}=(0,r.A)(),u=c.customFields.backendUrl,[i,m]=(0,l.useState)(null),[d,p]=(0,l.useState)(null),[f,g]=(0,l.useState)(!1),[h,C]=(0,l.useState)(null),[E,b]=(0,l.useState)(null),[w,N]=(0,l.useState)({}),[_,k]=(0,l.useState)(null),[y,S]=(0,l.useState)({}),[I,v]=(0,l.useState)(!1),L=(0,l.useRef)(null),T=(0,l.useRef)(null);(0,l.useEffect)((()=>{t&&async function(){g(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await s.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(n.data)}catch(h){C(h.response?h.response.data:h.message)}finally{g(!1)}}()}),[t]),(0,l.useEffect)((()=>{if(!i||!n)return;const e=i.topics.find((e=>e.topicId===n));e?p(e):C("Topic not found")}),[i,n]),(0,l.useEffect)((()=>{const e=e=>{L.current&&!L.current.contains(e.target)&&b(null),T.current&&!T.current.contains(e.target)&&k(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const x=async(e,l)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await s.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:n,problemId:a,newState:l},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:l}:e));return{...e,problems:t}})),b(null)}catch(h){console.error("Error updating problem state:",h)}};return f?l.createElement("p",null,"Loading data..."):h?l.createElement("p",null,"Error: ",h):l.createElement("div",null,d?.problems?.length>0?l.createElement("table",{className:a.problemTable},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:a.statusColumn}),l.createElement("th",{className:a.sourceColumn},"Source"),l.createElement("th",{className:a.starredColumn}),l.createElement("th",{className:a.problemColumn},"Problem"),l.createElement("th",{className:a.difficultyColumn},"Dif"),l.createElement("th",{className:a.tagsColumn},l.createElement("button",{onClick:()=>v((e=>!e)),className:a.toggleTagsButton},I?"Hide Tags":"Show Tags")),l.createElement("th",{className:a.helpColumn}))),l.createElement("tbody",null,d.problems.filter((e=>e.location===o)).map(((e,t)=>l.createElement("tr",{key:e.uniqueId||t},l.createElement("td",{className:a.statusCell},l.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(E===e)b(null),N({});else{const n=t.target.getBoundingClientRect();N({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),b(e)}})(t,e)}),E===t&&l.createElement("div",{className:a.dropdownMenu,ref:L,style:{position:"absolute"}},l.createElement("ul",null,l.createElement("li",{onClick:()=>x(e,2)},"Solved"),l.createElement("li",{onClick:()=>x(e,1)},"Skipped"),l.createElement("li",{onClick:()=>x(e,0)},"Unseen")))),l.createElement("td",{className:a.sourceCell},e.source),l.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),l.createElement("td",{className:a.problemCell},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),l.createElement("td",{className:a.difficultyCell},e.difficulty||"Unknown"),l.createElement("td",{className:a.tagsCell},I&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),l.createElement("td",{className:a.helpCell},l.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(_===e)k(null),S({});else{const n=t.target.getBoundingClientRect();S({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),k(e)}})(t,e)},"Help"),_===t&&l.createElement("div",{className:a.dropdownMenu,ref:T,style:{position:"absolute"}},l.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>l.createElement("li",{key:t},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):l.createElement("li",null,"No Help"))))))))):l.createElement("p",null,"No problems data available."))}},3132:(e,t,n)=>{n(6540)},5430:(e,t,n)=>{n.d(t,{A:()=>o});var l=n(6540),s=n(4335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=n(4586);const o=e=>{let{moduleName:t,topicId:n}=e;const{siteConfig:o}=(0,r.A)(),c=o.customFields.backendUrl,[u,i]=(0,l.useState)(null),[m,d]=(0,l.useState)(null),[p,f]=(0,l.useState)(!0),[g,h]=(0,l.useState)(null),[C,E]=(0,l.useState)(null),[b,w]=(0,l.useState)({}),N=(0,l.useRef)(null);(0,l.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await s.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(n.data)}catch(g){h(g.response?g.response.data:g.message)}finally{f(!1)}}()}),[t]),(0,l.useEffect)((()=>{if(!u||!n)return;const e=u.topics.find((e=>e.topicId===n));e?d(e):h("Topic not found")}),[u,n]);if((0,l.useEffect)((()=>{const e=e=>{N.current&&!N.current.contains(e.target)&&E(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return l.createElement("p",null,"Loading data...");if(g)return l.createElement("p",null,"Error: ",g);const _=["Unseen","Skipped","Solved"],k=_[m?.state??0];return l.createElement("div",{className:a.topicProgress},l.createElement("div",{className:a.label},"Topic Progress:"),l.createElement("div",{className:`${a.stateLabel} ${a[`state-${m?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();w({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),E(!C)}},k),C&&l.createElement("div",{className:a.dropdownMenu,ref:N,style:{position:"absolute",top:`${b.top}px`,left:`${b.left}px`}},_.map(((e,r)=>l.createElement("div",{key:r,onClick:()=>(async e=>{d((t=>({...t,state:e})));try{const l=sessionStorage.getItem("userId")||"guest";if(!l)throw new Error("User ID not found in session storage");await s.A.post(`${c}/api/topic/updateState?userId=${l}`,{moduleName:t,topicId:n,newState:e},{withCredentials:!0}),E(null)}catch(l){h("Failed to update state."),d((e=>({...e,state:e.state})))}})(r),className:a.dropdownItem},e)))))}}}]);