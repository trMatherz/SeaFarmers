(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[634],{9236:(e,t,a)=>{a(6540);const r={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=r},1115:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(6540),s=a(8774);const o="navbarItems_SNXV",n="dropdown_tS68",c="dropdownButton_p_GL",i="dropdownContent_RHbB",l=()=>{const[e,t]=(0,r.useState)(!1),a=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),r.createElement("div",{className:o},r.createElement("div",{className:n,ref:a}," ",r.createElement("button",{className:c,onClick:()=>{t(!e)}},"Sections"),e&&r.createElement("div",{className:i},r.createElement(s.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome/"},"Learn To Code"),r.createElement(s.A,{to:"/SeaFarmers/modules/Novice/NoviceHome/"},"Novice"))))}},3844:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var r=a(6540);const s=a(9236).customFields.backendUrl,o=()=>{const[e,t]=(0,r.useState)(null),[a,o]=(0,r.useState)(!0);(0,r.useEffect)((()=>{n(),function(){const e=new URLSearchParams(window.location.search).get("userId");e&&(sessionStorage.setItem("userId",e),window.location.href="https://trmatherz.github.io/SeaFarmers/")}()}),[]);const n=async()=>{o(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await fetch(`${s}/api/user?userId=${e}`,{method:"GET",credentials:"include"});if(!a.ok)throw new Error("User not authenticated");const r=await a.json();t(r)}catch(e){console.error("Error fetching user data:",e),t(null)}finally{o(!1)}},c=async()=>{window.location.href=`${s}/auth/github`};return e?r.createElement("div",null,r.createElement("img",{src:e.avatarUrl,alt:"User Avatar",width:"40",height:"40",style:{borderRadius:"50%"}})):r.createElement("div",null,r.createElement("button",{onClick:c},"Login with GitHub"))};var n=a(1115);const c="customNavbar_mklA",i="customNavbarTitle_hVCA",l="customNavbarItems_gN4E",m="customNavbarProfile_zS9W",u="customUserProfile_Q1sk",d=()=>r.createElement("nav",{className:c},r.createElement("div",{className:i},r.createElement("h1",null,"Sea Farmers")),r.createElement("div",{className:l},r.createElement(n.A,null)),r.createElement("div",{className:m},r.createElement("div",{className:u},r.createElement(o,null))))},6050:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(6540),s=a(781),o=(a(8774),a(3844));const n="heroTitle_gWW5",c="subtitle_sxiU",i="mainContent_JKKk",l="backgroundVideoContainer_ZYw6",m="backgroundVideo_q2yD";const u=function(){return r.createElement(s.A,{title:"Welcome to the Guide",description:"The ultimate guide to competitive programming."},r.createElement(o.A,null),r.createElement("div",{className:l},r.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:m},r.createElement("source",{src:"/SeaFarmers/background.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")),r.createElement("main",{className:i},r.createElement("section",{className:"container"},r.createElement("h1",{className:n},"Sea Farmers"),r.createElement("h2",{className:c},"The ultimate guide to competitive programming."))))}}}]);