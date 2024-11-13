"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4462,7772],{6055:(e,s,i)=>{i.d(s,{A:()=>b});var n=i(6540);const c="sidebarContainer_RDdI",o="sidebarHeader_hC8H",r="dropdown_xzkb",a="dropdownButton_Oz1e",l="dropdownContent_ByPt",d="sidebar_l0U6",t="topicItem_ny_R",m="topicName_ueQT",u="subtopicsList_wiG9",p="subtopicItem__e4r";i(1765);const h=[{label:"Learn To Code",to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome"},{label:"Novice",to:"/SeaFarmers/modules/Novice/NoviceHome"}],x={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io/",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{navbar:{title:"Sea Farmers",items:[{type:"dropdown",label:"Sections",position:"left",className:"navbar-sections",items:h}]},customCss:"./src/css/custom.css",colorMode:{disableSwitch:!0}},customFields:{navbarItems:h}};var j=i(4848);const v=x.customFields.navbarItems;const b=function(e){let{topics:s}=e;const[i,h]=(0,n.useState)([]),[x,b]=(0,n.useState)(!1);return(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("header",{className:o,children:(0,j.jsxs)("div",{className:r,children:[(0,j.jsx)("button",{className:a,onClick:()=>{b(!x)},children:"Topics"}),x&&(0,j.jsx)("div",{className:l,children:(0,j.jsx)("ul",{children:v.map(((e,s)=>(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.to,children:e.label})},s)))})})]})}),(0,j.jsx)("div",{className:d,children:(0,j.jsx)("ul",{children:s.map(((e,s)=>(0,j.jsxs)("li",{className:t,children:[(0,j.jsx)("div",{className:m,onClick:()=>(e=>{h((s=>s.includes(e)?s.filter((s=>s!==e)):[...s,e]))})(s),children:e.name}),i.includes(s)&&(0,j.jsx)("ul",{className:u,children:e.specificTopics.map(((e,s)=>(0,j.jsx)("li",{className:p,children:(0,j.jsx)("a",{href:`#${e.name.toLowerCase().replace(/\s+/g,"-")}`,children:e.name})},s)))})]},s)))})})]})}},5257:(e,s,i)=>{i.r(s),i.d(s,{default:()=>d});var n=i(6540),c=i(4625),o=i(6055),r=i(2407),a=i(3797),l=i(4848);const d=function(){const[e,s]=(0,n.useState)([{name:"Vscode Installer",url:"https://code.visualstudio.com/download",description:"A link to download Vscode.",source:"VSC",circleState:"unseen",showMenu:!1},{name:"C++ in Vscode",url:"https://code.visualstudio.com/docs/languages/cpp",description:"A tutorial for setting up c++ in Vscode.",source:"VSC",circleState:"unseen",showMenu:!1},{name:"Code Runner",url:"https://www.youtube.com/watch?v=XM68JTpYznU",description:"A tutorial for setting up Code Runner in Vscode.",source:"Youtube",circleState:"unseen",showMenu:!1}]),i=(i,n)=>{const c=[...e];c[i].circleState=n,c[i].showMenu=!1,s(c)};return(0,l.jsxs)("div",{className:r.A.pageContainer,children:[(0,l.jsx)(o.A,{topics:a.learnToCodeData.topics}),(0,l.jsxs)("div",{className:r.A.content,children:[(0,l.jsxs)("div",{className:r.A.header,children:[(0,l.jsx)("h1",{children:"How To Code"}),(0,l.jsx)("h3",{children:"Resources and Learning Materials"}),(0,l.jsx)("p",{children:"To code, you need to be able to run it. You will need to establish a coding environment for yourself. Visual Studio Code is the reccomended IDE, but any will work. Below is a resource to teach you how to download and setup Visual Studio Code for c++."})]}),(0,l.jsxs)("div",{className:r.A.resourcesBlock,id:"resources",children:[(0,l.jsx)("h2",{children:"Resources"}),(0,l.jsx)("ul",{children:e.map(((n,o)=>(0,l.jsx)("li",{className:o%2==0?r.A.evenItem:r.A.oddItem,children:(0,l.jsxs)("div",{className:r.A.resourceItem,children:[(0,l.jsx)("div",{className:`${r.A.circle} ${r.A[n.circleState]}`,onClick:()=>(i=>{const n=[...e];n[i].showMenu=!n[i].showMenu,s(n)})(o)}),(0,l.jsx)("div",{className:r.A.source,children:n.source}),(0,l.jsx)(c.N_,{to:n.url,target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("div",{className:r.A.name,children:n.name})}),(0,l.jsx)("div",{className:r.A.description,children:n.description}),n.showMenu&&(0,l.jsxs)("div",{className:r.A.circleMenu,children:[(0,l.jsx)("button",{onClick:()=>i(o,"unseen"),children:"Unseen"}),(0,l.jsx)("button",{onClick:()=>i(o,"skipped"),children:"Skipped"}),(0,l.jsx)("button",{onClick:()=>i(o,"done"),children:"Done"})]})]})},o)))})]})]})]})}},3797:(e,s,i)=>{i.r(s),i.d(s,{default:()=>l,learnToCodeData:()=>a});i(6540);var n=i(4625),c=i(781),o=i(4848);const r=function(e){let{moduleName:s,description:i,unseenTopics:r,skippedTopics:a,solvedTopics:l,unseenProblems:d,skippedProblems:t,solvedProblems:m,totalTopics:u,totalProblems:p,topics:h}=e;return(0,o.jsx)(c.A,{children:(0,o.jsxs)("div",{className:"module-home",children:[(0,o.jsxs)("div",{className:"information-background",children:[(0,o.jsx)("h1",{children:s}),(0,o.jsx)("p",{children:i}),(0,o.jsxs)("div",{className:"progress-cards-container",children:[(0,o.jsxs)("div",{className:"progress-card",children:[(0,o.jsx)("h3",{children:"Progress on Problems"}),(0,o.jsxs)("div",{className:"progress-bar",children:[(0,o.jsx)("div",{className:"progress-fill unseen",style:{width:d/p*100+"%"}}),(0,o.jsx)("div",{className:"progress-fill skipped",style:{width:t/p*100+"%"}}),(0,o.jsx)("div",{className:"progress-fill solved",style:{width:m/p*100+"%"}})]}),(0,o.jsxs)("div",{className:"progress-numbers",children:[(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{className:"number",children:d}),(0,o.jsx)("div",{className:"label",children:"Unseen"})]}),(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{className:"number",children:t}),(0,o.jsx)("div",{className:"label",children:"Skipped"})]}),(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{className:"number",children:m}),(0,o.jsx)("div",{className:"label",children:"Solved"})]})]})]}),(0,o.jsxs)("div",{className:"progress-card",children:[(0,o.jsx)("h3",{children:"Progress on Topics"}),(0,o.jsxs)("div",{className:"progress-bar",children:[(0,o.jsx)("div",{className:"progress-fill unseen",style:{width:r/u*100+"%"}}),(0,o.jsx)("div",{className:"progress-fill skipped",style:{width:a/u*100+"%"}}),(0,o.jsx)("div",{className:"progress-fill solved",style:{width:l/u*100+"%"}})]}),(0,o.jsxs)("div",{className:"progress-numbers",children:[(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{className:"number",children:r}),(0,o.jsx)("div",{className:"label",children:"Unseen"})]}),(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{className:"number",children:a}),(0,o.jsx)("div",{className:"label",children:"Skipped"})]}),(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{className:"number",children:l}),(0,o.jsx)("div",{className:"label",children:"Solved"})]})]})]})]})]}),(0,o.jsx)("h3",{children:"Topics in This Module:"}),(0,o.jsx)("div",{className:"topics-container",children:h.map(((e,s)=>(0,o.jsxs)("div",{className:"generic-topic",children:[(0,o.jsx)("div",{className:"generic-topic-name",children:e.name}),(0,o.jsx)("div",{className:"specific-topics",children:e.specificTopics.map(((e,s)=>(0,o.jsxs)("div",{className:"topic-item",children:[(0,o.jsx)("div",{className:"topic-name",children:(0,o.jsx)(n.N_,{to:e.link,children:e.name})}),(0,o.jsx)("div",{className:"topic-description",children:e.description})]},s)))})]},s)))})]})})},a={moduleName:"Learn To Code",description:"An introduction to foundational programming skills.",unseenTopics:20,skippedTopics:2,solvedTopics:0,unseenProblems:3,skippedProblems:2,solvedProblems:3,totalTopics:22,totalProblems:8,topics:[{name:"Preliminaries",specificTopics:[{name:"How To Code",description:"How to setup a coding environment",link:"/SeaFarmers/modules/LearnToCode/HowToCode"},{name:"Time Complexity",description:"Description of Subtopic 1b",link:"/SeaFarmers/modules/LearnToCode/TimeComplexity"}]}]},l=()=>(0,o.jsx)(r,{...a})},2407:(e,s,i)=>{i.d(s,{A:()=>n});const n={pageContainer:"pageContainer_bYcu",sidebarContainer:"sidebarContainer_MWlL",content:"content_aZeY",header:"header_SwC0",tableOfContents:"tableOfContents_HMov",resourcesBlock:"resourcesBlock_cL99",evenItem:"evenItem_Ng7T",oddItem:"oddItem_UIlS",resourceItem:"resourceItem_Q3gY",source:"source_EmqQ",name:"name_HJ2r",description:"description_vCqv",circle:"circle_ksJ9",unseen:"unseen_xJhJ",skipped:"skipped_ioux",done:"done_xL5X",circleMenu:"circleMenu_chy7"}}}]);