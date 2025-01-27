"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4706],{60092:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(96540);const r={moduleHome:"moduleHome_u5vS",moduleHeader:"moduleHeader_fLAu",moduleDescription:"moduleDescription_cToS",informationBackground:"informationBackground_VCss",progressCardsContainer:"progressCardsContainer_V6aV",progressCard:"progressCard_aCO4",progressBar:"progressBar_seXh",progressFill:"progressFill_fdGT",unseen:"unseen_tEWQ",skipped:"skipped_EduS",solved:"solved_bEdP",progressNumbers:"progressNumbers_rb88",number:"number_Ug68",label:"label_each",topicsContainer:"topicsContainer_aDad",topicRow:"topicRow_wTHb",genericTopic:"genericTopic_4L_7",specificTopicsContainer:"specificTopicsContainer_uy8U",state0:"state0_CuR_",state1:"state1_lz0M",state2:"state2_NHXC"};var l=s(10781),n=s(13844);const c=function(e){let{moduleId:t,moduleName:s,description:c,unseenTopics:o,skippedTopics:i,solvedTopics:m,unseenProblems:d,skippedProblems:u,solvedProblems:p,totalTopics:E,totalProblems:v,genericTopics:g=[],topics:N=[]}=e;return a.createElement(l.A,null,a.createElement(n.A,null),a.createElement("div",{className:r.moduleHome},a.createElement("div",{className:r.informationBackground},a.createElement("h1",{className:r.moduleHeader},s),a.createElement("p",{className:r.moduleDescription},c),a.createElement("div",{className:r.progressCardsContainer},a.createElement("div",{className:r.progressCard},a.createElement("h3",null,"Problems"),a.createElement("div",{className:r.progressBar},a.createElement("div",{className:`${r.progressFill} ${r.unseen}`,style:{width:"100%"}}),a.createElement("div",{className:`${r.progressFill} ${r.skipped}`,style:{width:(u+p)/v*100+"%"}}),a.createElement("div",{className:`${r.progressFill} ${r.solved}`,style:{width:p/v*100+"%"}})),a.createElement("div",{className:r.progressNumbers},a.createElement("span",null,a.createElement("div",{className:r.number},d),a.createElement("div",{className:r.label},"Unseen")),a.createElement("span",null,a.createElement("div",{className:r.number},u),a.createElement("div",{className:r.label},"Skipped")),a.createElement("span",null,a.createElement("div",{className:r.number},p),a.createElement("div",{className:r.label},"Solved")))),a.createElement("div",{className:r.progressCard},a.createElement("h3",null,"Topics"),a.createElement("div",{className:r.progressBar},a.createElement("div",{className:`${r.progressFill} ${r.unseen}`,style:{width:"100%"}}),a.createElement("div",{className:`${r.progressFill} ${r.skipped}`,style:{width:(i+m)/E*100+"%"}}),a.createElement("div",{className:`${r.progressFill} ${r.solved}`,style:{width:m/E*100+"%"}})),a.createElement("div",{className:r.progressNumbers},a.createElement("span",null,a.createElement("div",{className:r.number},o),a.createElement("div",{className:r.label},"Unseen")),a.createElement("span",null,a.createElement("div",{className:r.number},i),a.createElement("div",{className:r.label},"Skipped")),a.createElement("span",null,a.createElement("div",{className:r.number},m),a.createElement("div",{className:r.label},"Solved")))))),a.createElement("div",{className:r.topicsContainer},g.map(((e,s)=>{const l=e.topics.map((e=>N.find((t=>t.topicId===e))));return a.createElement("div",{key:s,className:r.topicRow},a.createElement("div",{className:r.genericTopic},a.createElement("h3",null,e.genericTopicName)),a.createElement("div",{className:r.specificTopicsContainer},a.createElement("ul",null,l.map(((e,s)=>e&&a.createElement("li",{key:s,className:`${r[`state${e.state}`]}`},a.createElement("a",{href:`/SeaFarmers/docs/modules/${t}/${e.topicId}`},e.topicName),a.createElement("span",{style:{color:"lightgray"}},"  :  ",e.description)))))))})))))}},13844:(e,t,s)=>{s.d(t,{A:()=>p});var a=s(96540),r=s(54625),l=s(44586);const n=()=>{const{siteConfig:e}=(0,l.A)(),t=e.customFields.backendUrl,[s,r]=(0,a.useState)(null),[n,c]=(0,a.useState)(!0);(0,a.useEffect)((()=>{o(),function(){const e=new URLSearchParams(window.location.search).get("userId");e&&(sessionStorage.setItem("userId",e),window.location.href="https://trmatherz.github.io/SeaFarmers/")}()}),[]);const o=async()=>{c(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await fetch(`${t}/api/user?userId=${e}`,{method:"GET",credentials:"include"});if(!s.ok)throw new Error("User not authenticated");const a=await s.json();r(a)}catch(e){console.error("Error fetching user data:",e),r(null)}finally{c(!1)}},i=async()=>{window.location.href=`${t}/auth/github`};return s?a.createElement("div",null,a.createElement("img",{src:s.avatarUrl,alt:"User Avatar",width:"40",height:"40",style:{borderRadius:"50%"}})):a.createElement("div",null,a.createElement("button",{onClick:i},"Login with GitHub"))};var c=s(51115);const o="customNavbar_mklA",i="customNavbarTitle_hVCA",m="customNavbarItems_gN4E",d="customNavbarProfile_zS9W",u="customUserProfile_Q1sk",p=()=>a.createElement("nav",{className:o},a.createElement("div",{className:i},a.createElement("h1",null,a.createElement(r.N_,{to:"/SeaFarmers/"},"Sea Farmers"))),a.createElement("div",{className:m},a.createElement(c.A,null)),a.createElement("div",{className:d},a.createElement("div",{className:u},a.createElement(n,null))))},61153:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(96540),r=s(60092),l=s(94335),n=s(44586);const c=()=>{const{siteConfig:e}=(0,n.A)(),t=e.customFields.backendUrl,[s,c]=(0,a.useState)(null),[o,i]=(0,a.useState)(null),[m,d]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{(async e=>{d(!0);try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");const a=await l.A.get(`${t}/api/module/${e}?userId=${s}`,{withCredentials:!0,credentials:"include"});i(a.data),d(!1)}catch(s){c(s.response?s.response.data:s.message),d(!1)}})("Novice")}),[]),m?a.createElement("p",null,"Loading module data..."):s?a.createElement("div",null,"Error: ",s):a.createElement("div",null,o?a.createElement(r.A,o):a.createElement("div",null,"Error: No data available"))}}}]);