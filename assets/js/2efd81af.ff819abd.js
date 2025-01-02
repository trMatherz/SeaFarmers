"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[338],{36:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>s,moduleName:()=>m,toc:()=>p,topicId:()=>d});const s=JSON.parse('{"id":"modules/LearnToCode/ThisGuide","title":"ThisGuide","description":"Prerequisites: Nothing","source":"@site/docs/modules/LearnToCode/ThisGuide.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/ThisGuide","permalink":"/SeaFarmers/docs/modules/LearnToCode/ThisGuide","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Output","permalink":"/SeaFarmers/docs/modules/LearnToCode/Output"},"next":{"title":"TimeComplexity","permalink":"/SeaFarmers/docs/modules/LearnToCode/TimeComplexity"}}');var o=n(4848),a=n(8453),l=(n(6540),n(2407),n(1955),n(7294),n(8235),n(5430)),r=n(8092);n(3132);const i={},c="This Guide",u={},m="LearnToCode",d="ThisGuide",p=[];function h(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{moduleName:m}),"\n",(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"this-guide",children:"This Guide"})}),"\n",(0,o.jsx)(t.p,{children:"Prerequisites: Nothing"}),"\n",(0,o.jsx)(t.p,{children:"Whether you are new to programming or someone who wants to push their abilties to the next level,\nthis guide will help you to realize your potential. While the emphasis in on competitive programming,\nthe content taught here will enhance your problem-solving abilities, teach you how to break down abstract\nconcepts, and allow you to code naturally."}),"\n",(0,o.jsx)(t.h1,{id:"competitive-programming",children:"Competitive Programming"}),"\n",(0,o.jsx)(t.p,{children:"Competitive programming in a nut-shell is a competition you aim to solve a certain number of problems in a\ncertain amount of time. The main catch is, that unlike almost everything else, the answers to these problems\nare not specific words or numbers, rather they are generic algorithms. If this is your first exposure, then this\nmay sound overwhelming, but fret not: once you actually get into programming, this will be better understood."}),"\n",(0,o.jsx)(t.p,{children:'The ultimate reason for this guide is to help you dominate competitive programming problems. Competitions\nare hosted locally, but the main target of this guide are the olympiads, specifcally for the U.S., this is\nUSACO. You may learn more about these contests now, but I reccommend waiting since all of these problems will\nseem quite scary and overwhelming if you do not know how to code. Additionally, worrying about potential\nprogression and the details of the contests is NOT more import than learning how to compete in them. You can\nNOT "fake it to you make it" in these contests.'}),"\n",(0,o.jsx)(t.h1,{id:"lanuage",children:"Lanuage"}),"\n",(0,o.jsx)(t.p,{children:"If you are unware, there are many programming languages. This guide is made exclusively for C++. This is the\nbest lanuage for competitive programming, and it is better to learn than python since you must be more explicit\nwith what you code, thereby understanding it better."}),"\n",(0,o.jsx)(t.h1,{id:"environment",children:"Environment"}),"\n",(0,o.jsx)(t.p,{children:"To code, you have to have certain software. I reccommend VSCODE which I will link below, but you may use whatever\nyou prefer."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://code.visualstudio.com/docs/setup/setup-overview",children:"Set Up"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://code.visualstudio.com/docs/languages/cpp",children:"C++"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=QwqV0n7a2tc",children:"Code Runner Extension"})}),"\n",(0,o.jsx)(t.h1,{id:"last",children:"Last"}),"\n",(0,o.jsx)(t.p,{children:"It is import to note that you do NOT have to be a genius to excel at programming. You don't have to have a\nstrong math background. Don't get discouraged if you are confused at first as jumping from not understanding\nprogramming to solving problems on your own is a BIG leap."}),"\n",(0,o.jsx)(t.p,{children:"Also, you are able to track your progress with problems and topics. If you are confused about a topic or problem,\nyou can always skip it and come back to it later."}),"\n",(0,o.jsx)(l.A,{moduleName:m,topicId:d})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1955:(e,t,n)=>{n(6540);n(4586)},8235:(e,t,n)=>{n.d(t,{A:()=>f});var s=n(6540),o=n(4335);const a="resourceTable_ow7w",l="nameColumn_cltC",r="nameCell_dZOO",i="sourceColumn_R2BC",c="sourceCell_NfiE",u="starredColumn_Ycnc",m="starredCell_Cq7S",d="descriptionColumn_X0UP",p="descriptionCell_gbNW",h="resourceLink_QTdW";var g=n(4586);const f=e=>{let{moduleName:t,topicId:n}=e;const{siteConfig:f}=(0,g.A)(),C=f.customFields.backendUrl,[w,b]=(0,s.useState)(null),[E,y]=(0,s.useState)(null),[v,N]=(0,s.useState)(!1),[k,S]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t&&async function(){N(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await o.A.get(`${C}/api/module/${t}?userId=${e}`,{withCredentials:!0});b(n.data)}catch(k){S(k.response?k.response.data:k.message)}finally{N(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!w||!n)return;const e=w.topics.find((e=>e.topicId===n));e?y(e):S("Topic not found")}),[w,n]),v?s.createElement("p",null,"Loading data..."):k?s.createElement("p",null,"Error: ",k):s.createElement("div",null,E&&E.resources&&s.createElement("table",{className:a},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:i},"Resources"),s.createElement("th",{className:u}),s.createElement("th",{className:l}),s.createElement("th",{className:d}))),s.createElement("tbody",null,E.resources.map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:c},e.source),s.createElement("td",{className:m},e.star?"\u2b50":""),s.createElement("td",{className:r},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:h},e.name)),s.createElement("td",{className:p},e.description)))))))}},7294:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(6540),o=n(4335);const a={problemTable:"problemTable_Z_QZ",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var l=n(4586);const r=e=>{let{moduleName:t,topicId:n,location:r}=e;const{siteConfig:i}=(0,l.A)(),c=i.customFields.backendUrl,[u,m]=(0,s.useState)(null),[d,p]=(0,s.useState)(null),[h,g]=(0,s.useState)(!1),[f,C]=(0,s.useState)(null),[w,b]=(0,s.useState)(null),[E,y]=(0,s.useState)({}),[v,N]=(0,s.useState)(null),[k,S]=(0,s.useState)({}),[_,I]=(0,s.useState)(!1),T=(0,s.useRef)(null),x=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){g(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await o.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(n.data)}catch(f){C(f.response?f.response.data:f.message)}finally{g(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!u||!n)return;const e=u.topics.find((e=>e.topicId===n));e?p(e):C("Topic not found")}),[u,n]),(0,s.useEffect)((()=>{const e=e=>{T.current&&!T.current.contains(e.target)&&b(null),x.current&&!x.current.contains(e.target)&&N(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const L=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${c}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:n,problemId:a,newState:s},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),b(null)}catch(f){console.error("Error updating problem state:",f)}};return h?s.createElement("p",null,"Loading data..."):f?s.createElement("p",null,"Error: ",f):s.createElement("div",null,d?.problems?.length>0?s.createElement("table",{className:a.problemTable},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:a.statusColumn}),s.createElement("th",{className:a.sourceColumn},"Source"),s.createElement("th",{className:a.starredColumn}),s.createElement("th",{className:a.problemColumn},"Problem"),s.createElement("th",{className:a.difficultyColumn},"Dif"),s.createElement("th",{className:a.tagsColumn},s.createElement("button",{onClick:()=>I((e=>!e)),className:a.toggleTagsButton},_?"Hide Tags":"Show Tags")),s.createElement("th",{className:a.helpColumn}))),s.createElement("tbody",null,d.problems.filter((e=>e.location===r)).map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:a.statusCell},s.createElement("span",{className:`${a.stateCircle} ${a[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(w===e)b(null),y({});else{const n=t.target.getBoundingClientRect();y({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),b(e)}})(t,e)}),w===t&&s.createElement("div",{className:a.dropdownMenu,ref:T,style:{position:"absolute"}},s.createElement("ul",null,s.createElement("li",{onClick:()=>L(e,2)},"Solved"),s.createElement("li",{onClick:()=>L(e,1)},"Skipped"),s.createElement("li",{onClick:()=>L(e,0)},"Unseen")))),s.createElement("td",{className:a.sourceCell},e.source),s.createElement("td",{className:a.starredCell},e.star?"\u2b50":""),s.createElement("td",{className:a.problemCell},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.problemLink},e.name)),s.createElement("td",{className:a.difficultyCell},e.difficulty||"Unknown"),s.createElement("td",{className:a.tagsCell},_&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),s.createElement("td",{className:a.helpCell},s.createElement("span",{className:a.helpButton,onClick:e=>((e,t)=>{if(v===e)N(null),S({});else{const n=t.target.getBoundingClientRect();S({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),N(e)}})(t,e)},"Help"),v===t&&s.createElement("div",{className:a.dropdownMenu,ref:x,style:{position:"absolute"}},s.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>s.createElement("li",{key:t},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.helpLink},e.name)))):s.createElement("li",null,"No Help"))))))))):s.createElement("p",null,"No problems data available."))}},3132:(e,t,n)=>{n(6540)},5430:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(6540),o=n(4335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var l=n(4586);const r=e=>{let{moduleName:t,topicId:n}=e;const{siteConfig:r}=(0,l.A)(),i=r.customFields.backendUrl,[c,u]=(0,s.useState)(null),[m,d]=(0,s.useState)(null),[p,h]=(0,s.useState)(!0),[g,f]=(0,s.useState)(null),[C,w]=(0,s.useState)(null),[b,E]=(0,s.useState)({}),y=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){h(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await o.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});u(n.data)}catch(g){f(g.response?g.response.data:g.message)}finally{h(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!c||!n)return;const e=c.topics.find((e=>e.topicId===n));e?d(e):f("Topic not found")}),[c,n]);if((0,s.useEffect)((()=>{const e=e=>{y.current&&!y.current.contains(e.target)&&w(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return s.createElement("p",null,"Loading data...");if(g)return s.createElement("p",null,"Error: ",g);const v=["Unseen","Skipped","Solved"],N=v[m?.state??0];return s.createElement("div",{className:a.topicProgress},s.createElement("div",{className:a.label},"Topic Progress:"),s.createElement("div",{className:`${a.stateLabel} ${a[`state-${m?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();E({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),w(!C)}},N),C&&s.createElement("div",{className:a.dropdownMenu,ref:y,style:{position:"absolute",top:`${b.top}px`,left:`${b.left}px`}},v.map(((e,l)=>s.createElement("div",{key:l,onClick:()=>(async e=>{d((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await o.A.post(`${i}/api/topic/updateState?userId=${s}`,{moduleName:t,topicId:n,newState:e},{withCredentials:!0}),w(null)}catch(s){f("Failed to update state."),d((e=>({...e,state:e.state})))}})(l),className:a.dropdownItem},e)))))}}}]);