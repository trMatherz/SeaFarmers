"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[935],{2287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>a,moduleName:()=>u,toc:()=>p});const a=JSON.parse('{"id":"modules/Solutions/Example","title":"Example","description":"Prerequisites: Nothing","source":"@site/docs/modules/Solutions/Example.mdx","sourceDirName":"modules/Solutions","slug":"/modules/Solutions/Example","permalink":"/SeaFarmers/docs/modules/Solutions/Example","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"TimeComplexity","permalink":"/SeaFarmers/docs/modules/LearnToCode/TimeComplexity"}}');var s=n(4848),r=n(8453),o=(n(6540),n(2407),n(8092)),i=n(8866),l=n(426);const d={},c="Breakdown",m={},u="LearnToCode",p=[];function h(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{moduleName:u}),"\n",(0,s.jsx)(t.p,{children:"#Example"}),"\n",(0,s.jsx)(t.p,{children:"Prerequisites: Nothing"}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"breakdown",children:"Breakdown"})}),"\n",(0,s.jsx)(t.p,{children:"Example breakdown"}),"\n",(0,s.jsx)(t.h1,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,s.jsx)(i.A,{language:"cpp",style:l.A,children:"int a = 5; \nint b = 7; \nint c = a + b; \n"})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8092:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540),s=n(4335);const r={state0:"state0_hYJj",state1:"state1_pE2a",state2:"state2_sngV",sidebarContainer:"sidebarContainer_RDdI",sidebarHeader:"sidebarHeader_hC8H",dropdown:"dropdown_xzkb"};var o=n(1115),i=n(4586);const l=function(e){let{moduleName:t}=e;const{siteConfig:n}=(0,i.A)(),l=n.customFields.backendUrl,[d,c]=(0,a.useState)(null),[m,u]=(0,a.useState)(!1),[p,h]=(0,a.useState)(null);if((0,a.useEffect)((()=>{t&&async function(){u(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await s.A.get(`${l}/api/module/${t}?userId=${e}`,{withCredentials:!0});c(n.data)}catch(p){h(p.response?p.response.data:p.message)}finally{u(!1)}}()}),[t]),m)return a.createElement("p",null,"Loading module data...");if(p)return a.createElement("p",null,"Error: ",p);const{genericTopics:x=[],topics:f=[]}=d||{};return a.createElement("div",{className:r.sidebarContainer},a.createElement("header",{className:r.sidebarHeader},a.createElement("div",{className:r.dropdown},a.createElement(o.A,null))),a.createElement("div",{className:"generic-topics-container"},x.map(((e,n)=>{const s=e.topics.map((e=>f.find((t=>t.topicId===e))));return a.createElement("div",{key:n,className:"generic-topic"},a.createElement("h3",null,e.genericTopicName),a.createElement("ul",null,s.map(((e,n)=>e&&a.createElement("li",{key:n,className:`${r[`state${e.state}`]}`},a.createElement("a",{href:`/SeaFarmers/docs/modules/${t}/${e.topicId}/`},e.topicName))))))}))))}},2407:()=>{}}]);