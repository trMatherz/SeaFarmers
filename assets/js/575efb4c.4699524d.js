(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62,462],{9236:(e,t,s)=>{s(6540);const a={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=a},1115:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(6540),r=s(8774);const n="navbarItems_SNXV",l="dropdown_tS68",c="dropdownButton_p_GL",o="dropdownContent_RHbB",i=()=>{const[e,t]=(0,a.useState)(!1);return a.createElement("div",{className:n},a.createElement("div",{className:l},a.createElement("button",{className:c,onClick:()=>{t(!e)}},"Sections"),e&&a.createElement("div",{className:o},a.createElement(r.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome/"},"Learn To Code"),a.createElement(r.A,{to:"/SeaFarmers/modules/Novice/NoviceHome/"},"Novice"))))}},3844:(e,t,s)=>{"use strict";s.d(t,{A:()=>u});var a=s(6540);const r=s(9236).customFields.backendUrl,n=()=>{const[e,t]=(0,a.useState)(null),[s,n]=(0,a.useState)(!0);(0,a.useEffect)((()=>{l(),function(){const e=new URLSearchParams(window.location.search).get("userId");e&&(sessionStorage.setItem("userId",e),window.location.href="https://trmatherz.github.io/SeaFarmers/")}()}),[]);const l=async()=>{n(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await fetch(`${r}/api/user?userId=${e}`,{method:"GET",credentials:"include"});if(!s.ok)throw new Error("User not authenticated");const a=await s.json();t(a)}catch(e){console.error("Error fetching user data:",e),t(null)}finally{n(!1)}},c=async()=>{window.location.href=`${r}/auth/github`};return e?a.createElement("div",null,a.createElement("img",{src:e.avatarUrl,alt:"User Avatar",width:"40",height:"40",style:{borderRadius:"50%"}})):a.createElement("div",null,a.createElement("button",{onClick:c},"Login with GitHub"))};var l=s(1115);const c="customNavbar_mklA",o="customNavbarTitle_hVCA",i="customNavbarItems_gN4E",m="customNavbarProfile_zS9W",d="customUserProfile_Q1sk",u=()=>a.createElement("nav",{className:c},a.createElement("div",{className:o},a.createElement("h1",null,"Sea Farmers")),a.createElement("div",{className:i},a.createElement(l.A,null)),a.createElement("div",{className:m},a.createElement("div",{className:d},a.createElement(n,null))))},8092:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(6540),r=s(4335);const n="matchingTopic_xWnE",l="sidebarContainer_RDdI",c="sidebarHeader_hC8H",o="dropdown_xzkb";var i=s(1115);const m=s(9236).customFields.backendUrl;const d=function(e){let{moduleName:t}=e;const[s,d]=(0,a.useState)(null),[u,p]=(0,a.useState)(!1),[E,v]=(0,a.useState)(null);if((0,a.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await r.A.get(`${m}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(s.data)}catch(E){v(E.response?E.response.data:E.message)}finally{p(!1)}}()}),[t]),u)return a.createElement("p",null,"Loading module data...");if(E)return a.createElement("p",null,"Error: ",E);const{genericTopics:h=[],topics:g=[]}=s||{};return a.createElement("div",{className:l},a.createElement("header",{className:c},a.createElement("div",{className:o},a.createElement(i.A,null))),a.createElement("div",{className:"generic-topics-container"},h.map(((e,s)=>{const r=e.topics.map((e=>g.find((t=>t.topicId===e))));return a.createElement("div",{key:s,className:"generic-topic"},a.createElement("h3",null,e.genericTopicName),a.createElement("ul",null,r.map(((e,s)=>e&&a.createElement("li",{key:s,className:n},a.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}/`},e.topicName))))))}))))}},2477:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(6540);const r={moduleHome:"moduleHome_u5vS",informationBackground:"informationBackground_VCss",progressCardsContainer:"progressCardsContainer_V6aV",progressCard:"progressCard_aCO4",progressBar:"progressBar_seXh",progressFill:"progressFill_fdGT",unseen:"unseen_tEWQ",skipped:"skipped_EduS",solved:"solved_bEdP",progressNumbers:"progressNumbers_rb88",number:"number_Ug68",label:"label_each",topicsContainer:"topicsContainer_aDad",topicRow:"topicRow_wTHb",genericTopic:"genericTopic_4L_7",specificTopicsContainer:"specificTopicsContainer_uy8U",state0:"state0_CuR_",state1:"state1_lz0M",state2:"state2_NHXC"};var n=s(781),l=s(3844);s(9236).customFields.backendUrl;const c=function(e){let{moduleName:t,description:s,unseenTopics:c,skippedTopics:o,solvedTopics:i,unseenProblems:m,skippedProblems:d,solvedProblems:u,totalTopics:p,totalProblems:E,genericTopics:v=[],topics:h=[]}=e;return a.createElement(n.A,null,a.createElement(l.A,null),a.createElement("div",{className:r.moduleHome},a.createElement("div",{className:r.informationBackground},a.createElement("h1",null,t),a.createElement("p",null,s),a.createElement("div",{className:r.progressCardsContainer},a.createElement("div",{className:r.progressCard},a.createElement("h3",null,"Problems"),a.createElement("div",{className:r.progressBar},a.createElement("div",{className:`${r.progressFill} ${r.unseen}`,style:{width:"100%"}}),a.createElement("div",{className:`${r.progressFill} ${r.skipped}`,style:{width:(d+u)/E*100+"%"}}),a.createElement("div",{className:`${r.progressFill} ${r.solved}`,style:{width:u/E*100+"%"}})),a.createElement("div",{className:r.progressNumbers},a.createElement("span",null,a.createElement("div",{className:r.number},m),a.createElement("div",{className:r.label},"Unseen")),a.createElement("span",null,a.createElement("div",{className:r.number},d),a.createElement("div",{className:r.label},"Skipped")),a.createElement("span",null,a.createElement("div",{className:r.number},u),a.createElement("div",{className:r.label},"Solved")))),a.createElement("div",{className:r.progressCard},a.createElement("h3",null,"Topics"),a.createElement("div",{className:r.progressBar},a.createElement("div",{className:`${r.progressFill} ${r.unseen}`,style:{width:"100%"}}),a.createElement("div",{className:`${r.progressFill} ${r.skipped}`,style:{width:(o+i)/p*100+"%"}}),a.createElement("div",{className:`${r.progressFill} ${r.solved}`,style:{width:i/p*100+"%"}})),a.createElement("div",{className:r.progressNumbers},a.createElement("span",null,a.createElement("div",{className:r.number},c),a.createElement("div",{className:r.label},"Unseen")),a.createElement("span",null,a.createElement("div",{className:r.number},o),a.createElement("div",{className:r.label},"Skipped")),a.createElement("span",null,a.createElement("div",{className:r.number},i),a.createElement("div",{className:r.label},"Solved")))))),a.createElement("div",{className:r.topicsContainer},v.map(((e,s)=>{const n=e.topics.map((e=>h.find((t=>t.topicId===e))));return a.createElement("div",{key:s,className:r.topicRow},a.createElement("div",{className:r.genericTopic},a.createElement("h3",null,e.genericTopicName)),a.createElement("div",{className:r.specificTopicsContainer},a.createElement("ul",null,n.map(((e,s)=>e&&a.createElement("li",{key:s,className:`${r[`state${e.state}`]}`},a.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}`},e.topicName)))))))})))))};var o=s(4335);const i=s(9236).customFields.backendUrl,m=()=>{const[e,t]=(0,a.useState)(null),[s,r]=(0,a.useState)(null),[n,l]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{(async s=>{l(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await o.A.get(`${i}/api/module/${s}?userId=${e}`,{withCredentials:!0,credentials:"include"});r(t.data),l(!1)}catch(e){t(e.response?e.response.data:e.message),l(!1)}})("LearnToCode")}),[]),n?a.createElement("p",null,"Loading module data..."):e?a.createElement("div",null,"Error: ",e):a.createElement("div",null,s?a.createElement(c,s):a.createElement("div",null,"Error: No data available"))}},5072:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(6540),r=s(4625),n=(s(8092),s(2407));s(2477);const l=function(){const[e,t]=(0,a.useState)([{name:"Resource 1",url:"https://link-to-resource1.com",description:"This is a comprehensive guide on web development, covering HTML, CSS, and JavaScript.",source:"Web Dev Academy",circleState:"unseen",showMenu:!1},{name:"Resource 2",url:"https://link-to-resource2.com",description:"Learn advanced algorithms and data structures in this detailed tutorial.",source:"Algorithms Expert",circleState:"unseen",showMenu:!1},{name:"Resource 3",url:"https://link-to-resource3.com",description:"A step-by-step tutorial on building web applications using React.",source:"React Mastery",circleState:"unseen",showMenu:!1}]),s=(s,a)=>{const r=[...e];r[s].circleState=a,r[s].showMenu=!1,t(r)};return a.createElement("div",{className:n.A.pageContainer},a.createElement("div",{className:n.A.content},a.createElement("div",{className:n.A.header},a.createElement("h1",null,"Learn to Code: Test Module"),a.createElement("h3",null,"Resources and Learning Materials")),a.createElement("div",{className:n.A.resourcesBlock,id:"resources"},a.createElement("h2",null,"Resources"),a.createElement("ul",null,e.map(((l,c)=>a.createElement("li",{key:c,className:c%2==0?n.A.evenItem:n.A.oddItem},a.createElement("div",{className:n.A.resourceItem},a.createElement("div",{className:`${n.A.circle} ${n.A[l.circleState]}`,onClick:()=>(s=>{const a=[...e];a[s].showMenu=!a[s].showMenu,t(a)})(c)}),a.createElement("div",{className:n.A.source},l.source),a.createElement(r.N_,{to:l.url,target:"_blank",rel:"noopener noreferrer"},a.createElement("div",{className:n.A.name},l.name)),a.createElement("div",{className:n.A.description},l.description),l.showMenu&&a.createElement("div",{className:n.A.circleMenu},a.createElement("button",{onClick:()=>s(c,"unseen")},"Unseen"),a.createElement("button",{onClick:()=>s(c,"skipped")},"Skipped"),a.createElement("button",{onClick:()=>s(c,"done")},"Done"))))))))))}},2407:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});const a={}}}]);