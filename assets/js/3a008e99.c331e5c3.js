"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4992],{2134:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>n,moduleId:()=>C,toc:()=>h,topicId:()=>g});const n=JSON.parse('{"id":"modules/LearnToCode/BasicDataTypes","title":"BasicDataTypes","description":"Prerequisites: Nothing","source":"@site/docs/modules/LearnToCode/BasicDataTypes.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/BasicDataTypes","permalink":"/SeaFarmers/docs/modules/LearnToCode/BasicDataTypes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","next":{"title":"Conditionals","permalink":"/SeaFarmers/docs/modules/LearnToCode/Conditionals"}}');var s=l(4848),a=l(8453),r=(l(6540),l(2407),l(1955),l(7294)),o=l(8235),c=l(5430),u=l(8092),i=(l(3132),l(8866)),m=l(426);const d={},p="Basic Data Types",f={},C="LearnToCode",g="BasicDataTypes",h=[];function E(e){const t={annotation:"annotation",h1:"h1",header:"header",math:"math",mn:"mn",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.A,{moduleId:C}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"basic-data-types",children:"Basic Data Types"})}),"\n",(0,s.jsx)(t.p,{children:"Prerequisites: Nothing"}),"\n",(0,s.jsx)(t.h1,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(o.A,{moduleId:C,topicId:g}),"\n",(0,s.jsxs)(t.p,{children:["So you just used a string but there are really ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mn,{children:"3"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(t.span,{className:"mord",children:"3"})]})})]})," import data types you should know for now:"]}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(i.A,{language:"cpp",style:m.A,children:"string a; //words\nint b; //numbers less than a couple billion (10^9)\nlong long c; //numners less than a couple quintillion (10^18)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Here is more syntax (or way that the code for certain logic is written):"}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(i.A,{language:"cpp",style:m.A,children:"int a = 0; cout << a << endl;\n  a = 3; cout << a << endl;\n  a = 4 + 7 - 2; cout << a << endl; //addition and subtraction\n  a = a + 1; cout << a << endl; //can use variables in equaitons\n  a = a * 3; cout << a << endl; //multiplication\n  a = 5 / 3; cout << a << endl; //division rounds down to nearest integer number\n  a = 5 % 3; cout << a << endl; //modular funciton that computes remainder; optional  \n"})}),"\n",(0,s.jsx)(t.p,{children:"Note: The code above would also work if a was a long long."}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(i.A,{language:"cpp",style:m.A,children:'string a = "cat"; cout << a << endl; \na = "dog"; cout << a << endl; \n'})}),"\n",(0,s.jsx)(t.h1,{id:"focus-problem",children:"Focus Problem"}),"\n",(0,s.jsx)(r.A,{moduleId:C,topicId:g,location:"sample1"}),"\n",(0,s.jsx)(c.A,{moduleId:C,topicId:g})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(E,{...e})}):E(e)}},1955:(e,t,l)=>{l.d(t,{A:()=>o});var n=l(6540),s=l(4335);const a={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=l(4586);const o=e=>{let{moduleId:t,topicId:l,location:o}=e;const{siteConfig:c}=(0,r.A)(),u=c.customFields.backendUrl,[i,m]=(0,n.useState)(null),[d,p]=(0,n.useState)(null),[f,C]=(0,n.useState)(!1),[g,h]=(0,n.useState)(null),[E,b]=(0,n.useState)(null),[w,y]=(0,n.useState)({}),[N,_]=(0,n.useState)(null),[I,k]=(0,n.useState)({}),[S,x]=(0,n.useState)(!1),v=(0,n.useRef)(null),T=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){C(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await s.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(l.data)}catch(g){h(g.response?g.response.data:g.message)}finally{C(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!i||!l)return;const e=i.topics.find((e=>e.topicId===l));e?p(e):h("Topic not found")}),[i,l]);const j=async(e,n)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await s.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:l,problemId:a,newState:n},{withCredentials:!0});p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:n}:e));return{...e,problems:t}})),b(null)}catch(g){console.error("Error updating problem state:",g)}};return(0,n.useEffect)((()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&b(null),T.current&&!T.current.contains(e.target)&&_(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),f?n.createElement("p",null,"Loading data..."):g?n.createElement("p",null,"Error: ",g):n.createElement("div",null,d&&d.problems&&n.createElement("table",{className:a.problemTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:a.statusColumn}),n.createElement("th",{className:a.sourceColumn},"Source"),n.createElement("th",{className:a.starredColumn}),n.createElement("th",{className:a.problemColumn},"Problem"),n.createElement("th",{className:a.difficultyColumn},"Dif"),n.createElement("th",{className:a.tagsColumn},n.createElement("button",{onClick:()=>x((e=>!e)),className:a.toggleTagsButton},S?"Hide Tags":"Show Tags")),n.createElement("th",{className:a.helpColumn}))),n.createElement("tbody",null,d.problems&&Array.isArray(d.problems)&&d.problems.filter((e=>e.location===o)).map(((e,t)=>e?n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:a.statusCell},n.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(E===e)b(null),y({});else{const l=t.target.getBoundingClientRect();y({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),b(e)}})(t,e)}),E===t&&n.createElement("div",{ref:v,className:a.dropdownMenu,style:{position:"absolute"}},n.createElement("ul",null,n.createElement("li",{onClick:()=>j(e,2)},"Solved"),n.createElement("li",{onClick:()=>j(e,1)},"Skipped"),n.createElement("li",{onClick:()=>j(e,0)},"Unseen")))),n.createElement("td",{className:a.sourceCell},e.source),n.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:a.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),n.createElement("td",{className:a.difficultyCell},e.difficulty),n.createElement("td",{className:a.tagsCell},S&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),n.createElement("td",{className:a.helpCell},n.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(N===e)_(null),k({});else{const l=t.target.getBoundingClientRect();k({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),_(e)}})(t,e)},"Help"),N===t&&n.createElement("div",{ref:T,className:a.dropdownMenu,style:{position:"absolute"}},n.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>n.createElement("li",{key:t},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):n.createElement("li",null,"No Help"))))):null)))))}},8235:(e,t,l)=>{l.d(t,{A:()=>g});var n=l(6540),s=l(4335);const a="resourceTable_ow7w",r="nameColumn_cltC",o="nameCell_dZOO",c="sourceColumn_R2BC",u="sourceCell_NfiE",i="starredColumn_Ycnc",m="starredCell_Cq7S",d="descriptionColumn_X0UP",p="descriptionCell_gbNW",f="resourceLink_QTdW";var C=l(4586);const g=e=>{let{moduleId:t,topicId:l}=e;const{siteConfig:g}=(0,C.A)(),h=g.customFields.backendUrl,[E,b]=(0,n.useState)(null),[w,y]=(0,n.useState)(null),[N,_]=(0,n.useState)(!1),[I,k]=(0,n.useState)(null);return(0,n.useEffect)((()=>{t&&async function(){_(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await s.A.get(`${h}/api/module/${t}?userId=${e}`,{withCredentials:!0});b(l.data)}catch(I){k(I.response?I.response.data:I.message)}finally{_(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!E||!l)return;const e=E.topics.find((e=>e.topicId===l));e?y(e):k("Topic not found")}),[E,l]),N?n.createElement("p",null,"Loading data..."):I?n.createElement("p",null,"Error: ",I):n.createElement("div",null,w&&w.resources&&n.createElement("table",{className:a},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:c},"Resources"),n.createElement("th",{className:i}),n.createElement("th",{className:r}),n.createElement("th",{className:d}))),n.createElement("tbody",null,w.resources.map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:u},e.source),n.createElement("td",{className:m},e.star?"\u2b50":""),n.createElement("td",{className:o},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:f},e.name)),n.createElement("td",{className:p},e.description)))))))}},7294:(e,t,l)=>{l.d(t,{A:()=>o});var n=l(6540),s=l(4335);const a={sampleTable:"sampleTable_FWCi",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=l(4586);const o=e=>{let{moduleId:t,topicId:l,location:o}=e;const{siteConfig:c}=(0,r.A)(),u=c.customFields.backendUrl,[i,m]=(0,n.useState)(null),[d,p]=(0,n.useState)(null),[f,C]=(0,n.useState)(!1),[g,h]=(0,n.useState)(null),[E,b]=(0,n.useState)(null),[w,y]=(0,n.useState)({}),[N,_]=(0,n.useState)(null),[I,k]=(0,n.useState)({}),[S,x]=(0,n.useState)(!1),v=(0,n.useRef)(null),T=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){C(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await s.A.get(`${u}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(l.data)}catch(g){h(g.response?g.response.data:g.message)}finally{C(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!i||!l)return;const e=i.topics.find((e=>e.topicId===l));e?p(e):h("Topic not found")}),[i,l]),(0,n.useEffect)((()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&b(null),T.current&&!T.current.contains(e.target)&&_(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const j=async(e,n)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await s.A.post(`${u}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:l,problemId:a,newState:n},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:n}:e));return{...e,problems:t}})),b(null)}catch(g){console.error("Error updating problem state:",g)}};return f?n.createElement("p",null,"Loading data..."):g?n.createElement("p",null,"Error: ",g):n.createElement("div",null,d?.problems?.length>0?n.createElement("table",{className:a.sampleTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:a.statusColumn}),n.createElement("th",{className:a.sourceColumn},"Source"),n.createElement("th",{className:a.starredColumn}),n.createElement("th",{className:a.problemColumn},"Problem"),n.createElement("th",{className:a.difficultyColumn},"Dif"),n.createElement("th",{className:a.tagsColumn},n.createElement("button",{onClick:()=>x((e=>!e)),className:a.toggleTagsButton},S?"Hide Tags":"Show Tags")),n.createElement("th",{className:a.helpColumn}))),n.createElement("tbody",null,d.problems.filter((e=>e.location===o)).map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:a.statusCell},n.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(E===e)b(null),y({});else{const l=t.target.getBoundingClientRect();y({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),b(e)}})(t,e)}),E===t&&n.createElement("div",{className:a.dropdownMenu,ref:v,style:{position:"absolute"}},n.createElement("ul",null,n.createElement("li",{onClick:()=>j(e,2)},"Solved"),n.createElement("li",{onClick:()=>j(e,1)},"Skipped"),n.createElement("li",{onClick:()=>j(e,0)},"Unseen")))),n.createElement("td",{className:a.sourceCell},e.source),n.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:a.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),n.createElement("td",{className:a.difficultyCell},e.difficulty||"Unknown"),n.createElement("td",{className:a.tagsCell},S&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),n.createElement("td",{className:a.helpCell},n.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(N===e)_(null),k({});else{const l=t.target.getBoundingClientRect();k({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),_(e)}})(t,e)},"Help"),N===t&&n.createElement("div",{className:a.dropdownMenu,ref:T,style:{position:"absolute"}},n.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>n.createElement("li",{key:t},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):n.createElement("li",null,"No Help"))))))))):n.createElement("p",null,"No problems data available."))}},3132:(e,t,l)=>{l(6540)},5430:(e,t,l)=>{l.d(t,{A:()=>o});var n=l(6540),s=l(4335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=l(4586);const o=e=>{let{moduleId:t,topicId:l}=e;const{siteConfig:o}=(0,r.A)(),c=o.customFields.backendUrl,[u,i]=(0,n.useState)(null),[m,d]=(0,n.useState)(null),[p,f]=(0,n.useState)(!0),[C,g]=(0,n.useState)(null),[h,E]=(0,n.useState)(null),[b,w]=(0,n.useState)({}),y=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await s.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(C){g(C.response?C.response.data:C.message)}finally{f(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!u||!l)return;const e=u.topics.find((e=>e.topicId===l));e?d(e):g("Topic not found")}),[u,l]);if((0,n.useEffect)((()=>{const e=e=>{y.current&&!y.current.contains(e.target)&&E(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return n.createElement("p",null,"Loading data...");if(C)return n.createElement("p",null,"Error: ",C);const N=["Unseen","Skipped","Solved"],_=N[m?.state??0];return n.createElement("div",{className:a.topicProgress},n.createElement("div",{className:a.label},"Topic Progress:"),n.createElement("div",{className:`${a.stateLabel} ${a[`state-${m?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();w({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),E(!h)}},_),h&&n.createElement("div",{className:a.dropdownMenu,ref:y,style:{position:"absolute",top:`${b.top}px`,left:`${b.left}px`}},N.map(((e,r)=>n.createElement("div",{key:r,onClick:()=>(async e=>{d((t=>({...t,state:e})));try{const n=sessionStorage.getItem("userId")||"guest";if(!n)throw new Error("User ID not found in session storage");await s.A.post(`${c}/api/topic/updateState?userId=${n}`,{moduleId:t,topicId:l,newState:e},{withCredentials:!0}),E(null)}catch(n){g("Failed to update state."),d((e=>({...e,state:e.state})))}})(r),className:a.dropdownItem},e)))))}}}]);