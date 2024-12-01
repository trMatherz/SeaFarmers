(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[462,772],{9236:(e,t,a)=>{a(6540);const s={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=s},1115:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var s=a(6540),n=a(8774);const r="navbarItems_SNXV",l="dropdown_tS68",c="dropdownButton_p_GL",o="dropdownContent_RHbB",i=()=>{const[e,t]=(0,s.useState)(!1);return s.createElement("div",{className:r},s.createElement("div",{className:l},s.createElement("button",{className:c,onClick:()=>{t(!e)}},"Sections"),e&&s.createElement("div",{className:o},s.createElement(n.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome"},"Learn To Code"),s.createElement(n.A,{to:"/SeaFarmers/modules/Novice/NoviceHome"},"Novice"))))}},3844:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var s=a(6540);const n=a(9236).customFields.backendUrl,r=()=>{const[e,t]=(0,s.useState)(null),[a,r]=(0,s.useState)(!0);(0,s.useEffect)((()=>{}),[]);const l=()=>{window.location.href=`${n}/auth/github`};return e?s.createElement("div",null,s.createElement("img",{src:e.avatarUrl,alt:"User Avatar",width:"40",height:"40",style:{borderRadius:"50%"}})):s.createElement("div",null,s.createElement("button",{onClick:l},"Login with GitHub"))};var l=a(1115);const c="customNavbar_mklA",o="customNavbarTitle_hVCA",i="customNavbarItems_gN4E",m="customNavbarProfile_zS9W",d="customUserProfile_Q1sk",u=()=>s.createElement("nav",{className:c},s.createElement("div",{className:o},s.createElement("h1",null,"Sea Farmers")),s.createElement("div",{className:i},s.createElement(l.A,null)),s.createElement("div",{className:m},s.createElement("div",{className:d},s.createElement(r,null))))},8092:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var s=a(6540),n=a(4335);const r="sidebarContainer_RDdI",l="sidebarHeader_hC8H",c="dropdown_xzkb";var o=a(1115);const i=a(9236).customFields.backendUrl;const m=function(e){let{moduleName:t}=e;const[a,m]=(0,s.useState)(null),[d,u]=(0,s.useState)(!1),[p,E]=(0,s.useState)(null);if((0,s.useEffect)((()=>{t&&async function(){u(!0);try{const e=await n.A.get(`${i}/api/module/${t}`,{withCredentials:!0});m(e.data),u(!1)}catch(p){E(p.response?p.response.data:p.message),u(!1)}}()}),[t]),d)return s.createElement("p",null,"Loading module data...");if(p)return s.createElement("p",null,"Error: ",p);const{genericTopics:v=[],topics:N=[]}=a||{};return s.createElement("div",{className:r},s.createElement("header",{className:l},s.createElement("div",{className:c},s.createElement(o.A,null))),s.createElement("div",{className:"generic-topics-container"},v.map(((e,t)=>{const a=e.topics.map((e=>N.find((t=>t.topicId===e))));return s.createElement("div",{key:t,className:"generic-topic"},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,a.map(((e,t)=>e&&s.createElement("li",{key:t},e.topicName)))))}))))}},5257:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(6540),n=a(4625),r=(a(8092),a(2407));a(2477);const l=function(){const[e,t]=(0,s.useState)([{name:"Vscode Installer",url:"https://code.visualstudio.com/download",description:"A link to download Vscode.",source:"VSC",circleState:"unseen",showMenu:!1},{name:"C++ in Vscode",url:"https://code.visualstudio.com/docs/languages/cpp",description:"A tutorial for setting up c++ in Vscode.",source:"VSC",circleState:"unseen",showMenu:!1},{name:"Code Runner",url:"https://www.youtube.com/watch?v=XM68JTpYznU",description:"A tutorial for setting up Code Runner in Vscode.",source:"Youtube",circleState:"unseen",showMenu:!1}]),a=(a,s)=>{const n=[...e];n[a].circleState=s,n[a].showMenu=!1,t(n)};return s.createElement("div",{className:r.A.pageContainer},s.createElement("div",{className:r.A.content},s.createElement("div",{className:r.A.header},s.createElement("h1",null,"How To Code"),s.createElement("h3",null,"Resources and Learning Materials"),s.createElement("p",null,"To code, you need to be able to run it. You will need to establish a coding environment for yourself. Visual Studio Code is the reccomended IDE, but any will work. Below is a resource to teach you how to download and setup Visual Studio Code for c++.")),s.createElement("div",{className:r.A.resourcesBlock,id:"resources"},s.createElement("h2",null,"Resources"),s.createElement("ul",null,e.map(((l,c)=>s.createElement("li",{key:c,className:c%2==0?r.A.evenItem:r.A.oddItem},s.createElement("div",{className:r.A.resourceItem},s.createElement("div",{className:`${r.A.circle} ${r.A[l.circleState]}`,onClick:()=>(a=>{const s=[...e];s[a].showMenu=!s[a].showMenu,t(s)})(c)}),s.createElement("div",{className:r.A.source},l.source),s.createElement(n.N_,{to:l.url,target:"_blank",rel:"noopener noreferrer"},s.createElement("div",{className:r.A.name},l.name)),s.createElement("div",{className:r.A.description},l.description),l.showMenu&&s.createElement("div",{className:r.A.circleMenu},s.createElement("button",{onClick:()=>a(c,"unseen")},"Unseen"),s.createElement("button",{onClick:()=>a(c,"skipped")},"Skipped"),s.createElement("button",{onClick:()=>a(c,"done")},"Done"))))))))))}},2477:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var s=a(6540),n=a(4335);const r={moduleHome:"moduleHome_u5vS",informationBackground:"informationBackground_VCss",progressCardsContainer:"progressCardsContainer_V6aV",progressCard:"progressCard_aCO4",progressBar:"progressBar_seXh",progressFill:"progressFill_fdGT",unseen:"unseen_tEWQ",skipped:"skipped_EduS",solved:"solved_bEdP",progressNumbers:"progressNumbers_rb88",number:"number_Ug68",label:"label_each",genericTopicsContainer:"genericTopicsContainer_FBWn"};var l=a(781),c=a(3844);const o=a(9236).customFields.backendUrl;const i=function(e){let{moduleName:t,description:a,unseenTopics:i,skippedTopics:m,solvedTopics:d,unseenProblems:u,skippedProblems:p,solvedProblems:E,totalTopics:v,totalProblems:N,genericTopics:b=[],topics:h=[],onIncrementSolved:g}=e;const[C,k]=(0,s.useState)(E);return s.createElement(l.A,null,s.createElement(c.A,null),s.createElement("div",{className:r.moduleHome},s.createElement("div",{className:r.informationBackground},s.createElement("h1",null,t),s.createElement("p",null,a),s.createElement("div",{className:r.progressCardsContainer},s.createElement("div",{className:r.progressCard},s.createElement("h3",null,"Progress on Problems"),s.createElement("div",{className:r.progressBar},s.createElement("div",{className:`${r.progressFill} ${r.unseen}`,style:{width:u/N*100+"%"}}),s.createElement("div",{className:`${r.progressFill} ${r.skipped}`,style:{width:p/N*100+"%"}}),s.createElement("div",{className:`${r.progressFill} ${r.solved}`,style:{width:C/N*100+"%"}})),s.createElement("div",{className:r.progressNumbers},s.createElement("span",null,s.createElement("div",{className:r.number},u),s.createElement("div",{className:r.label},"Unseen")),s.createElement("span",null,s.createElement("div",{className:r.number},p),s.createElement("div",{className:r.label},"Skipped")),s.createElement("span",null,s.createElement("div",{className:r.number},C),s.createElement("div",{className:r.label},"Solved")))),s.createElement("div",{className:r.progressCard},s.createElement("h3",null,"Progress on Topics"),s.createElement("div",{className:r.progressBar},s.createElement("div",{className:`${r.progressFill} ${r.unseen}`,style:{width:i/v*100+"%"}}),s.createElement("div",{className:`${r.progressFill} ${r.skipped}`,style:{width:m/v*100+"%"}}),s.createElement("div",{className:`${r.progressFill} ${r.solved}`,style:{width:d/v*100+"%"}})),s.createElement("div",{className:r.progressNumbers},s.createElement("span",null,s.createElement("div",{className:r.number},i),s.createElement("div",{className:r.label},"Unseen")),s.createElement("span",null,s.createElement("div",{className:r.number},m),s.createElement("div",{className:r.label},"Skipped")),s.createElement("span",null,s.createElement("div",{className:r.number},d),s.createElement("div",{className:r.label},"Solved")))))),s.createElement("div",null,s.createElement("button",{onClick:()=>{n.A.put(`${o}/api/module/${t}`,{},{withCredentials:!0}).then((e=>{k(e.data.solvedProblems)})).catch((e=>{console.error("Error updating solved problems:",e)}))}},"Solve a Problem")),s.createElement("h3",null,"Topics in This Module:"),s.createElement("div",{className:r.genericTopicsContainer},b.map(((e,t)=>{const a=e.topics.map((e=>h.find((t=>t.topicId===e))));return s.createElement("div",{key:t,className:r.genericTopic},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,a.map(((e,t)=>e&&s.createElement("li",{key:t},e.topicId,": ",e.topicName)))))})))))},m=a(9236).customFields.backendUrl,d=()=>{const[e,t]=(0,s.useState)(null),[a,r]=(0,s.useState)(null),[l,c]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async a=>{c(!0);try{const e=await n.A.get(`${m}/api/module/${a}`,{withCredentials:!0});r(e.data),c(!1)}catch(e){t(e.response?e.response.data:e.message),c(!1)}})("LearnToCode")}),[]),l?s.createElement("p",null,"Loading module data..."):e?s.createElement("div",null,"Error: ",e):s.createElement("div",null,a?s.createElement(i,a):s.createElement("div",null,"Error: No data available"))}},2407:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});const s={pageContainer:"pageContainer_bYcu",sidebarContainer:"sidebarContainer_MWlL",content:"content_aZeY",header:"header_SwC0",tableOfContents:"tableOfContents_HMov",resourcesBlock:"resourcesBlock_cL99",evenItem:"evenItem_Ng7T",oddItem:"oddItem_UIlS",resourceItem:"resourceItem_Q3gY",source:"source_EmqQ",name:"name_HJ2r",description:"description_vCqv",circle:"circle_ksJ9",unseen:"unseen_xJhJ",skipped:"skipped_ioux",done:"done_xL5X",circleMenu:"circleMenu_chy7"}}}]);