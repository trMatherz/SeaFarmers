"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[996],{3540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>E,frontMatter:()=>d,metadata:()=>l,moduleName:()=>f,toc:()=>g,topicId:()=>h});const l=JSON.parse('{"id":"modules/LearnToCode/Input","title":"Input","description":"Prerequisites: Output","source":"@site/docs/modules/LearnToCode/Input.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/Input","permalink":"/SeaFarmers/docs/modules/LearnToCode/Input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Time Complexity","permalink":"/SeaFarmers/docs/intro"},"next":{"title":"Output","permalink":"/SeaFarmers/docs/modules/LearnToCode/Output"}}');var s=n(4848),a=n(8453),r=(n(6540),n(2407),n(1955),n(7294)),o=(n(8235),n(5430)),c=n(8092),i=(n(3132),n(8866)),u=n(426);const d={},m="Input",p={},f="LearnToCode",h="Input",g=[];function C(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{moduleName:f}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"input",children:"Input"})}),"\n",(0,s.jsx)(t.p,{children:"Prerequisites: Output"}),"\n",(0,s.jsx)(t.p,{children:"Now that you can output things, its time to make your programs more dynamic!"}),"\n",(0,s.jsx)(t.h1,{id:"standard-io",children:"Standard I/O"}),"\n",(0,s.jsx)(t.p,{children:"Most problems and vscode will use Standard I/O. It's very similar to output."}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(i.A,{language:"cpp",style:u.A,children:'#include <iostream> //Use this for Standard I/O\nusing namespace std;\n\nint main() {\n  string a, b; \n  cin >> a >> b;\n  cout << a << " : " << b; \n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This code will take an input like this:"}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(i.A,{language:"cpp",style:u.A,children:"Hello World\n"})}),"\n",(0,s.jsx)(t.p,{children:"And output this:"}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(i.A,{language:"cpp",style:u.A,children:"Hello : World\n"})}),"\n",(0,s.jsx)(t.p,{children:'Don\'t worry about data types right now - that\'s next. Focus on how the "cin" operator will go to the next word and assign\nthis value to the variable. You have to separate all variables with ">>".'}),"\n",(0,s.jsx)(t.h1,{id:"file-io",children:"File I/O"}),"\n",(0,s.jsx)(t.p,{children:"If you want to read from files for old USACO problems or for large inputs, you will have to slightly tweak the code."}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(i.A,{language:"cpp",style:u.A,children:'#include <fstream> //Use this for File I/O\nstd::ifstream cin ("boarding.in"); //Change this\nstd::ofstream cout ("boarding.out"); //Change this\nusing namespace std;\n\nint main() {\n  string a, b; \n  cin >> a >> b;\n  cout << a << " : " << b; \n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Note: You will have to change the file names manually."}),"\n",(0,s.jsx)(t.p,{children:"Use this to solve this Focus Problem:"}),"\n",(0,s.jsx)(r.A,{moduleName:f,topicId:h,location:"sample1"}),"\n",(0,s.jsx)(o.A,{moduleName:f,topicId:h})]})}function E(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(C,{...e})}):C(e)}},1955:(e,t,n)=>{n(6540);n(4586)},8235:(e,t,n)=>{n.d(t,{A:()=>g});var l=n(6540),s=n(4335);const a="resourceTable_ow7w",r="nameColumn_cltC",o="nameCell_dZOO",c="sourceColumn_R2BC",i="sourceCell_NfiE",u="starredColumn_Ycnc",d="starredCell_Cq7S",m="descriptionColumn_X0UP",p="descriptionCell_gbNW",f="resourceLink_QTdW";var h=n(4586);const g=e=>{let{moduleName:t,topicId:n}=e;const{siteConfig:g}=(0,h.A)(),C=g.customFields.backendUrl,[E,w]=(0,l.useState)(null),[b,I]=(0,l.useState)(null),[N,y]=(0,l.useState)(!1),[S,_]=(0,l.useState)(null);return(0,l.useEffect)((()=>{t&&async function(){y(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await s.A.get(`${C}/api/module/${t}?userId=${e}`,{withCredentials:!0});w(n.data)}catch(S){_(S.response?S.response.data:S.message)}finally{y(!1)}}()}),[t]),(0,l.useEffect)((()=>{if(!E||!n)return;const e=E.topics.find((e=>e.topicId===n));e?I(e):_("Topic not found")}),[E,n]),N?l.createElement("p",null,"Loading data..."):S?l.createElement("p",null,"Error: ",S):l.createElement("div",null,b&&b.resources&&l.createElement("table",{className:a},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:c},"Resources"),l.createElement("th",{className:u}),l.createElement("th",{className:r}),l.createElement("th",{className:m}))),l.createElement("tbody",null,b.resources.map(((e,t)=>l.createElement("tr",{key:e.uniqueId||t},l.createElement("td",{className:i},e.source),l.createElement("td",{className:d},e.star?"\u2b50":""),l.createElement("td",{className:o},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:f},e.name)),l.createElement("td",{className:p},e.description)))))))}},7294:(e,t,n)=>{n.d(t,{A:()=>o});var l=n(6540),s=n(4335);const a={problemTable:"problemTable_Z_QZ",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=n(4586);const o=e=>{let{moduleName:t,topicId:n,location:o}=e;const{siteConfig:c}=(0,r.A)(),i=c.customFields.backendUrl,[u,d]=(0,l.useState)(null),[m,p]=(0,l.useState)(null),[f,h]=(0,l.useState)(!1),[g,C]=(0,l.useState)(null),[E,w]=(0,l.useState)(null),[b,I]=(0,l.useState)({}),[N,y]=(0,l.useState)(null),[S,_]=(0,l.useState)({}),[k,v]=(0,l.useState)(!1),x=(0,l.useRef)(null),j=(0,l.useRef)(null);(0,l.useEffect)((()=>{t&&async function(){h(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await s.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(n.data)}catch(g){C(g.response?g.response.data:g.message)}finally{h(!1)}}()}),[t]),(0,l.useEffect)((()=>{if(!u||!n)return;const e=u.topics.find((e=>e.topicId===n));e?p(e):C("Topic not found")}),[u,n]),(0,l.useEffect)((()=>{const e=e=>{x.current&&!x.current.contains(e.target)&&w(null),j.current&&!j.current.contains(e.target)&&y(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const A=async(e,l)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await s.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:n,problemId:a,newState:l},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:l}:e));return{...e,problems:t}})),w(null)}catch(g){console.error("Error updating problem state:",g)}};return f?l.createElement("p",null,"Loading data..."):g?l.createElement("p",null,"Error: ",g):l.createElement("div",null,m?.problems?.length>0?l.createElement("table",{className:a.problemTable},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:a.statusColumn}),l.createElement("th",{className:a.sourceColumn},"Source"),l.createElement("th",{className:a.starredColumn}),l.createElement("th",{className:a.problemColumn},"Problem"),l.createElement("th",{className:a.difficultyColumn},"Dif"),l.createElement("th",{className:a.tagsColumn},l.createElement("button",{onClick:()=>v((e=>!e)),className:a.toggleTagsButton},k?"Hide Tags":"Show Tags")),l.createElement("th",{className:a.helpColumn}))),l.createElement("tbody",null,m.problems.filter((e=>e.location===o)).map(((e,t)=>l.createElement("tr",{key:e.uniqueId||t},l.createElement("td",{className:a.statusCell},l.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(E===e)w(null),I({});else{const n=t.target.getBoundingClientRect();I({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),w(e)}})(t,e)}),E===t&&l.createElement("div",{className:a.dropdownMenu,ref:x,style:{position:"absolute"}},l.createElement("ul",null,l.createElement("li",{onClick:()=>A(e,2)},"Solved"),l.createElement("li",{onClick:()=>A(e,1)},"Skipped"),l.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),l.createElement("td",{className:a.sourceCell},e.source),l.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),l.createElement("td",{className:a.problemCell},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),l.createElement("td",{className:a.difficultyCell},e.difficulty||"Unknown"),l.createElement("td",{className:a.tagsCell},k&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),l.createElement("td",{className:a.helpCell},l.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(N===e)y(null),_({});else{const n=t.target.getBoundingClientRect();_({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),y(e)}})(t,e)},"Help"),N===t&&l.createElement("div",{className:a.dropdownMenu,ref:j,style:{position:"absolute"}},l.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>l.createElement("li",{key:t},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):l.createElement("li",null,"No Help"))))))))):l.createElement("p",null,"No problems data available."))}},3132:(e,t,n)=>{n(6540)},5430:(e,t,n)=>{n.d(t,{A:()=>o});var l=n(6540),s=n(4335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=n(4586);const o=e=>{let{moduleName:t,topicId:n}=e;const{siteConfig:o}=(0,r.A)(),c=o.customFields.backendUrl,[i,u]=(0,l.useState)(null),[d,m]=(0,l.useState)(null),[p,f]=(0,l.useState)(!0),[h,g]=(0,l.useState)(null),[C,E]=(0,l.useState)(null),[w,b]=(0,l.useState)({}),I=(0,l.useRef)(null);(0,l.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await s.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});u(n.data)}catch(h){g(h.response?h.response.data:h.message)}finally{f(!1)}}()}),[t]),(0,l.useEffect)((()=>{if(!i||!n)return;const e=i.topics.find((e=>e.topicId===n));e?m(e):g("Topic not found")}),[i,n]);if((0,l.useEffect)((()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&E(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return l.createElement("p",null,"Loading data...");if(h)return l.createElement("p",null,"Error: ",h);const N=["Unseen","Skipped","Solved"],y=N[d?.state??0];return l.createElement("div",{className:a.topicProgress},l.createElement("div",{className:a.label},"Topic Progress:"),l.createElement("div",{className:`${a.stateLabel} ${a[`state-${d?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();b({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),E(!C)}},y),C&&l.createElement("div",{className:a.dropdownMenu,ref:I,style:{position:"absolute",top:`${w.top}px`,left:`${w.left}px`}},N.map(((e,r)=>l.createElement("div",{key:r,onClick:()=>(async e=>{m((t=>({...t,state:e})));try{const l=sessionStorage.getItem("userId")||"guest";if(!l)throw new Error("User ID not found in session storage");await s.A.post(`${c}/api/topic/updateState?userId=${l}`,{moduleName:t,topicId:n,newState:e},{withCredentials:!0}),E(null)}catch(l){g("Failed to update state."),m((e=>({...e,state:e.state})))}})(r),className:a.dropdownItem},e)))))}}}]);