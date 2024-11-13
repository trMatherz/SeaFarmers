"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4462,6062],{6055:(e,s,i)=>{i.d(s,{A:()=>b});var c=i(6540);const n="sidebarContainer_RDdI",r="sidebarHeader_hC8H",a="dropdown_xzkb",o="dropdownButton_Oz1e",l="dropdownContent_ByPt",d="sidebar_l0U6",t="topicItem_ny_R",m="topicName_ueQT",p="subtopicsList_wiG9",h="subtopicItem__e4r";i(1765);const u=[{label:"Learn To Code",to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome"},{label:"Novice",to:"/SeaFarmers/modules/Novice/NoviceHome"}],x={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io/",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{navbar:{title:"Sea Farmers",items:[{type:"dropdown",label:"Sections",position:"left",className:"navbar-sections",items:u}]},customCss:"./src/css/custom.css",colorMode:{disableSwitch:!0}},customFields:{navbarItems:u}};var j=i(4848);const v=x.customFields.navbarItems;const b=function(e){let{topics:s}=e;const[i,u]=(0,c.useState)([]),[x,b]=(0,c.useState)(!1);return(0,j.jsxs)("div",{className:n,children:[(0,j.jsx)("header",{className:r,children:(0,j.jsxs)("div",{className:a,children:[(0,j.jsx)("button",{className:o,onClick:()=>{b(!x)},children:"Topics"}),x&&(0,j.jsx)("div",{className:l,children:(0,j.jsx)("ul",{children:v.map(((e,s)=>(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.to,children:e.label})},s)))})})]})}),(0,j.jsx)("div",{className:d,children:(0,j.jsx)("ul",{children:s.map(((e,s)=>(0,j.jsxs)("li",{className:t,children:[(0,j.jsx)("div",{className:m,onClick:()=>(e=>{u((s=>s.includes(e)?s.filter((s=>s!==e)):[...s,e]))})(s),children:e.name}),i.includes(s)&&(0,j.jsx)("ul",{className:p,children:e.specificTopics.map(((e,s)=>(0,j.jsx)("li",{className:h,children:(0,j.jsx)("a",{href:`#${e.name.toLowerCase().replace(/\s+/g,"-")}`,children:e.name})},s)))})]},s)))})})]})}},3797:(e,s,i)=>{i.r(s),i.d(s,{default:()=>l,learnToCodeData:()=>o});i(6540);var c=i(4625),n=i(781),r=i(4848);const a=function(e){let{moduleName:s,description:i,unseenTopics:a,skippedTopics:o,solvedTopics:l,unseenProblems:d,skippedProblems:t,solvedProblems:m,totalTopics:p,totalProblems:h,topics:u}=e;return(0,r.jsx)(n.A,{children:(0,r.jsxs)("div",{className:"module-home",children:[(0,r.jsxs)("div",{className:"information-background",children:[(0,r.jsx)("h1",{children:s}),(0,r.jsx)("p",{children:i}),(0,r.jsxs)("div",{className:"progress-cards-container",children:[(0,r.jsxs)("div",{className:"progress-card",children:[(0,r.jsx)("h3",{children:"Progress on Problems"}),(0,r.jsxs)("div",{className:"progress-bar",children:[(0,r.jsx)("div",{className:"progress-fill unseen",style:{width:d/h*100+"%"}}),(0,r.jsx)("div",{className:"progress-fill skipped",style:{width:t/h*100+"%"}}),(0,r.jsx)("div",{className:"progress-fill solved",style:{width:m/h*100+"%"}})]}),(0,r.jsxs)("div",{className:"progress-numbers",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("div",{className:"number",children:d}),(0,r.jsx)("div",{className:"label",children:"Unseen"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("div",{className:"number",children:t}),(0,r.jsx)("div",{className:"label",children:"Skipped"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("div",{className:"number",children:m}),(0,r.jsx)("div",{className:"label",children:"Solved"})]})]})]}),(0,r.jsxs)("div",{className:"progress-card",children:[(0,r.jsx)("h3",{children:"Progress on Topics"}),(0,r.jsxs)("div",{className:"progress-bar",children:[(0,r.jsx)("div",{className:"progress-fill unseen",style:{width:a/p*100+"%"}}),(0,r.jsx)("div",{className:"progress-fill skipped",style:{width:o/p*100+"%"}}),(0,r.jsx)("div",{className:"progress-fill solved",style:{width:l/p*100+"%"}})]}),(0,r.jsxs)("div",{className:"progress-numbers",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("div",{className:"number",children:a}),(0,r.jsx)("div",{className:"label",children:"Unseen"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("div",{className:"number",children:o}),(0,r.jsx)("div",{className:"label",children:"Skipped"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("div",{className:"number",children:l}),(0,r.jsx)("div",{className:"label",children:"Solved"})]})]})]})]})]}),(0,r.jsx)("h3",{children:"Topics in This Module:"}),(0,r.jsx)("div",{className:"topics-container",children:u.map(((e,s)=>(0,r.jsxs)("div",{className:"generic-topic",children:[(0,r.jsx)("div",{className:"generic-topic-name",children:e.name}),(0,r.jsx)("div",{className:"specific-topics",children:e.specificTopics.map(((e,s)=>(0,r.jsxs)("div",{className:"topic-item",children:[(0,r.jsx)("div",{className:"topic-name",children:(0,r.jsx)(c.N_,{to:e.link,children:e.name})}),(0,r.jsx)("div",{className:"topic-description",children:e.description})]},s)))})]},s)))})]})})},o={moduleName:"Learn To Code",description:"An introduction to foundational programming skills.",unseenTopics:20,skippedTopics:2,solvedTopics:0,unseenProblems:3,skippedProblems:2,solvedProblems:3,totalTopics:22,totalProblems:8,topics:[{name:"Preliminaries",specificTopics:[{name:"How To Code",description:"How to setup a coding environment",link:"/SeaFarmers/modules/LearnToCode/HowToCode"},{name:"Time Complexity",description:"Description of Subtopic 1b",link:"/SeaFarmers/modules/LearnToCode/TimeComplexity"}]}]},l=()=>(0,r.jsx)(a,{...o})},5072:(e,s,i)=>{i.r(s),i.d(s,{default:()=>d});var c=i(6540),n=i(4625),r=i(6055),a=i(2407),o=i(3797),l=i(4848);const d=function(){const[e,s]=(0,c.useState)([{name:"Resource 1",url:"https://link-to-resource1.com",description:"This is a comprehensive guide on web development, covering HTML, CSS, and JavaScript.",source:"Web Dev Academy",circleState:"unseen",showMenu:!1},{name:"Resource 2",url:"https://link-to-resource2.com",description:"Learn advanced algorithms and data structures in this detailed tutorial.",source:"Algorithms Expert",circleState:"unseen",showMenu:!1},{name:"Resource 3",url:"https://link-to-resource3.com",description:"A step-by-step tutorial on building web applications using React.",source:"React Mastery",circleState:"unseen",showMenu:!1}]),i=(i,c)=>{const n=[...e];n[i].circleState=c,n[i].showMenu=!1,s(n)};return(0,l.jsxs)("div",{className:a.A.pageContainer,children:[(0,l.jsx)(r.A,{topics:o.learnToCodeData.topics}),(0,l.jsxs)("div",{className:a.A.content,children:[(0,l.jsxs)("div",{className:a.A.header,children:[(0,l.jsx)("h1",{children:"Learn to Code: Test Module"}),(0,l.jsx)("h3",{children:"Resources and Learning Materials"})]}),(0,l.jsxs)("div",{className:a.A.resourcesBlock,id:"resources",children:[(0,l.jsx)("h2",{children:"Resources"}),(0,l.jsx)("ul",{children:e.map(((c,r)=>(0,l.jsx)("li",{className:r%2==0?a.A.evenItem:a.A.oddItem,children:(0,l.jsxs)("div",{className:a.A.resourceItem,children:[(0,l.jsx)("div",{className:`${a.A.circle} ${a.A[c.circleState]}`,onClick:()=>(i=>{const c=[...e];c[i].showMenu=!c[i].showMenu,s(c)})(r)}),(0,l.jsx)("div",{className:a.A.source,children:c.source}),(0,l.jsx)(n.N_,{to:c.url,target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("div",{className:a.A.name,children:c.name})}),(0,l.jsx)("div",{className:a.A.description,children:c.description}),c.showMenu&&(0,l.jsxs)("div",{className:a.A.circleMenu,children:[(0,l.jsx)("button",{onClick:()=>i(r,"unseen"),children:"Unseen"}),(0,l.jsx)("button",{onClick:()=>i(r,"skipped"),children:"Skipped"}),(0,l.jsx)("button",{onClick:()=>i(r,"done"),children:"Done"})]})]})},r)))})]})]})]})}},2407:(e,s,i)=>{i.d(s,{A:()=>c});const c={pageContainer:"pageContainer_bYcu",sidebarContainer:"sidebarContainer_MWlL",content:"content_aZeY",header:"header_SwC0",tableOfContents:"tableOfContents_HMov",resourcesBlock:"resourcesBlock_cL99",evenItem:"evenItem_Ng7T",oddItem:"oddItem_UIlS",resourceItem:"resourceItem_Q3gY",source:"source_EmqQ",name:"name_HJ2r",description:"description_vCqv",circle:"circle_ksJ9",unseen:"unseen_xJhJ",skipped:"skipped_ioux",done:"done_xL5X",circleMenu:"circleMenu_chy7"}}}]);