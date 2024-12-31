"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[338],{36:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,moduleName:()=>u,toc:()=>p,topicId:()=>m});const s=JSON.parse('{"id":"modules/LearnToCode/ThisGuide","title":"ThisGuide","description":"Prerequisites: Nothing","source":"@site/docs/modules/LearnToCode/ThisGuide.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/ThisGuide","permalink":"/SeaFarmers/docs/modules/LearnToCode/ThisGuide","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Time Complexity","permalink":"/SeaFarmers/docs/intro"},"next":{"title":"TimeComplexity","permalink":"/SeaFarmers/docs/modules/LearnToCode/TimeComplexity"}}');var o=n(4848),a=n(8453),r=(n(6540),n(2407),n(1955),n(7294),n(8235),n(5430)),i=n(8092);n(3132);const l={},c="This Guide",d={},u="LearnToCode",m="ThisGuide",p=[];function h(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{moduleName:u}),"\n",(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"this-guide",children:"This Guide"})}),"\n",(0,o.jsx)(t.p,{children:"Prerequisites: Nothing"}),"\n",(0,o.jsx)(t.p,{children:"Whether you are new to programming or someone who wants to push their abilties to the next level,\nthis guide will help you to realize your potential. While the emphasis in on competitive programming,\nthe content taught here will enhance your problem-solving abilities, teach you how to break down abstract\nconcepts, and allow you to code naturally."}),"\n",(0,o.jsx)(t.h1,{id:"competitive-programming",children:"Competitive Programming"}),"\n",(0,o.jsx)(t.p,{children:"Competitive programming in a nut-shell is a competition you aim to solve a certain number of problems in a\ncertain amount of time. The main catch is, that unlike almost everything else, the answers to these problems\nare not specific words or numbers, rather they are generic algorithms. If this is your first exposure, then this\nmay sound overwhelming, but fret not: once you actually get into programming, this will be better understood."}),"\n",(0,o.jsx)(t.p,{children:'The ultimate reason for this guide is to help you dominate competitive programming problems. Competitions\nare hosted locally, but the main target of this guide are the olympiads, specifcally for the U.S., this is\nUSACO. You may learn more about these contests now, but I reccommend waiting since all of these problems will\nseem quite scary and overwhelming if you do not know how to code. Additionally, worrying about potential\nprogression and the details of the contests is NOT more import than learning how to compete in them. You can\nNOT "fake it to you make it" in these contests.'}),"\n",(0,o.jsx)(t.h1,{id:"lanuage",children:"Lanuage"}),"\n",(0,o.jsx)(t.p,{children:"If you are unware, there are many programming languages. This guide is made exclusively for C++. This is the\nbest lanuage for competitive programming, and it is better to learn than python since you must be more explicit\nwith what you code, thereby understanding it better."}),"\n",(0,o.jsx)(t.h1,{id:"environment",children:"Environment"}),"\n",(0,o.jsx)(t.p,{children:"To code, you have to have certain software. I reccommend VSCODE which I will link below, but you may use whatever\nyou prefer."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://code.visualstudio.com/docs/setup/setup-overview",children:"Set Up"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://code.visualstudio.com/docs/languages/cpp",children:"C++"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=QwqV0n7a2tc",children:"Code Runner Extension"})}),"\n",(0,o.jsx)(t.h1,{id:"last",children:"Last"}),"\n",(0,o.jsx)(t.p,{children:"It is import to note that you do NOT have to be a genius to excel at programming. You don't have to have a\nstrong math background. Don't get discouraged if you are confused at first as jumping from not understanding\nprogramming to solving problems on your own is a BIG leap."}),"\n",(0,o.jsx)(t.p,{children:"Also, you are able to track your progress with problems and topics. If you are confused about a topic or problem,\nyou can always skip it and come back to it later."}),"\n",(0,o.jsx)(r.A,{moduleName:u,topicId:m})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1955:(e,t,n)=>{n(6540);n(4586)},8235:(e,t,n)=>{n.d(t,{A:()=>f});var s=n(6540),o=n(4335);const a="resourceTable_ow7w",r="nameColumn_cltC",i="nameCell_dZOO",l="sourceColumn_R2BC",c="sourceCell_NfiE",d="starredColumn_Ycnc",u="starredCell_Cq7S",m="descriptionColumn_X0UP",p="descriptionCell_gbNW",h="resourceLink_QTdW";var g=n(4586);const f=e=>{let{moduleName:t,topicId:n}=e;const{siteConfig:f}=(0,g.A)(),w=f.customFields.backendUrl,[y,b]=(0,s.useState)(null),[E,v]=(0,s.useState)(null),[C,x]=(0,s.useState)(!1),[N,I]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await o.A.get(`${w}/api/module/${t}?userId=${e}`,{withCredentials:!0});b(n.data)}catch(N){I(N.response?N.response.data:N.message)}finally{x(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!y||!n)return;const e=y.topics.find((e=>e.topicId===n));e?v(e):I("Topic not found")}),[y,n]),C?s.createElement("p",null,"Loading data..."):N?s.createElement("p",null,"Error: ",N):s.createElement("div",null,E&&E.resources&&s.createElement("table",{className:a},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:l},"Resources"),s.createElement("th",{className:d}),s.createElement("th",{className:r}),s.createElement("th",{className:m}))),s.createElement("tbody",null,E.resources.map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:c},e.source),s.createElement("td",{className:u},e.star?"\u2b50":""),s.createElement("td",{className:i},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:h},e.name)),s.createElement("td",{className:p},e.description)))))))}},7294:(e,t,n)=>{n(6540);n(4586)},8092:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(6540),o=n(4335);const a={state0:"state0_hYJj",state1:"state1_pE2a",state2:"state2_sngV",sidebarContainer:"sidebarContainer_RDdI",sidebarHeader:"sidebarHeader_hC8H",dropdown:"dropdown_xzkb"};var r=n(1115),i=n(4586);const l=function(e){let{moduleName:t}=e;const{siteConfig:n}=(0,i.A)(),l=n.customFields.backendUrl,[c,d]=(0,s.useState)(null),[u,m]=(0,s.useState)(!1),[p,h]=(0,s.useState)(null);if((0,s.useEffect)((()=>{t&&async function(){m(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await o.A.get(`${l}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(n.data)}catch(p){h(p.response?p.response.data:p.message)}finally{m(!1)}}()}),[t]),u)return s.createElement("p",null,"Loading module data...");if(p)return s.createElement("p",null,"Error: ",p);const{genericTopics:g=[],topics:f=[]}=c||{};return s.createElement("div",{className:a.sidebarContainer},s.createElement("header",{className:a.sidebarHeader},s.createElement("div",{className:a.dropdown},s.createElement(r.A,null))),s.createElement("div",{className:"generic-topics-container"},g.map(((e,n)=>{const o=e.topics.map((e=>f.find((t=>t.topicId===e))));return s.createElement("div",{key:n,className:"generic-topic"},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,o.map(((e,n)=>e&&s.createElement("li",{key:n,className:`${a[`state${e.state}`]}`},s.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}/`},e.topicName))))))}))))}},3132:(e,t,n)=>{n(6540)},5430:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(6540),o=n(4335);const a={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=n(4586);const i=e=>{let{moduleName:t,topicId:n}=e;const{siteConfig:i}=(0,r.A)(),l=i.customFields.backendUrl,[c,d]=(0,s.useState)(null),[u,m]=(0,s.useState)(null),[p,h]=(0,s.useState)(!0),[g,f]=(0,s.useState)(null),[w,y]=(0,s.useState)(null),[b,E]=(0,s.useState)({}),v=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){h(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await o.A.get(`${l}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(n.data)}catch(g){f(g.response?g.response.data:g.message)}finally{h(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!c||!n)return;const e=c.topics.find((e=>e.topicId===n));e?m(e):f("Topic not found")}),[c,n]);if((0,s.useEffect)((()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&y(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return s.createElement("p",null,"Loading data...");if(g)return s.createElement("p",null,"Error: ",g);const C=["Unseen","Skipped","Solved"],x=C[u?.state??0];return s.createElement("div",{className:a.topicProgress},s.createElement("div",{className:a.label},"Topic Progress:"),s.createElement("div",{className:`${a.stateLabel} ${a[`state-${u?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();E({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),y(!w)}},x),w&&s.createElement("div",{className:a.dropdownMenu,ref:v,style:{position:"absolute",top:`${b.top}px`,left:`${b.left}px`}},C.map(((e,r)=>s.createElement("div",{key:r,onClick:()=>(async e=>{m((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await o.A.post(`${l}/api/topic/updateState?userId=${s}`,{moduleName:t,topicId:n,newState:e},{withCredentials:!0}),y(null)}catch(s){f("Failed to update state."),m((e=>({...e,state:e.state})))}})(r),className:a.dropdownItem},e)))))}},2407:()=>{}}]);