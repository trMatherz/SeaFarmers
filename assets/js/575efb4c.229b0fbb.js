"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62,462],{3844:(e,t,a)=>{a.d(t,{A:()=>p});var s=a(6540),r=a(4625),n=a(4586);const l=()=>{const{siteConfig:e}=(0,n.A)(),t=e.customFields.backendUrl,[a,r]=(0,s.useState)(null),[l,c]=(0,s.useState)(!0);(0,s.useEffect)((()=>{o(),function(){const e=new URLSearchParams(window.location.search).get("userId");e&&(sessionStorage.setItem("userId",e),window.location.href="https://trmatherz.github.io/SeaFarmers/")}()}),[]);const o=async()=>{c(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await fetch(`${t}/api/user?userId=${e}`,{method:"GET",credentials:"include"});if(!a.ok)throw new Error("User not authenticated");const s=await a.json();r(s)}catch(e){console.error("Error fetching user data:",e),r(null)}finally{c(!1)}},i=async()=>{window.location.href=`${t}/auth/github`};return a?s.createElement("div",null,s.createElement("img",{src:a.avatarUrl,alt:"User Avatar",width:"40",height:"40",style:{borderRadius:"50%"}})):s.createElement("div",null,s.createElement("button",{onClick:i},"Login with GitHub"))};var c=a(1115);const o="customNavbar_mklA",i="customNavbarTitle_hVCA",m="customNavbarItems_gN4E",d="customNavbarProfile_zS9W",u="customUserProfile_Q1sk",p=()=>s.createElement("nav",{className:o},s.createElement("div",{className:i},s.createElement("h1",null,s.createElement(r.N_,{to:"/SeaFarmers/"},"Sea Farmers"))),s.createElement("div",{className:m},s.createElement(c.A,null)),s.createElement("div",{className:d},s.createElement("div",{className:u},s.createElement(l,null))))},8092:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(6540),r=a(4335);const n={state0:"state0_hYJj",state1:"state1_pE2a",state2:"state2_sngV",sidebarContainer:"sidebarContainer_RDdI",sidebarHeader:"sidebarHeader_hC8H",dropdown:"dropdown_xzkb"};var l=a(1115),c=a(4586);const o=function(e){let{moduleName:t}=e;const{siteConfig:a}=(0,c.A)(),o=a.customFields.backendUrl,[i,m]=(0,s.useState)(null),[d,u]=(0,s.useState)(!1),[p,E]=(0,s.useState)(null);if((0,s.useEffect)((()=>{t&&async function(){u(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await r.A.get(`${o}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(a.data)}catch(p){E(p.response?p.response.data:p.message)}finally{u(!1)}}()}),[t]),d)return s.createElement("p",null,"Loading module data...");if(p)return s.createElement("p",null,"Error: ",p);const{genericTopics:v=[],topics:g=[]}=i||{};return s.createElement("div",{className:n.sidebarContainer},s.createElement("header",{className:n.sidebarHeader},s.createElement("div",{className:n.dropdown},s.createElement(l.A,null))),s.createElement("div",{className:"generic-topics-container"},v.map(((e,a)=>{const r=e.topics.map((e=>g.find((t=>t.topicId===e))));return s.createElement("div",{key:a,className:"generic-topic"},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,r.map(((e,a)=>e&&s.createElement("li",{key:a,className:`${n[`state${e.state}`]}`},s.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}/`},e.topicName))))))}))))}},2477:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(6540);const r={moduleHome:"moduleHome_u5vS",moduleHeader:"moduleHeader_fLAu",moduleDescription:"moduleDescription_cToS",informationBackground:"informationBackground_VCss",progressCardsContainer:"progressCardsContainer_V6aV",progressCard:"progressCard_aCO4",progressBar:"progressBar_seXh",progressFill:"progressFill_fdGT",unseen:"unseen_tEWQ",skipped:"skipped_EduS",solved:"solved_bEdP",progressNumbers:"progressNumbers_rb88",number:"number_Ug68",label:"label_each",topicsContainer:"topicsContainer_aDad",topicRow:"topicRow_wTHb",genericTopic:"genericTopic_4L_7",specificTopicsContainer:"specificTopicsContainer_uy8U",state0:"state0_CuR_",state1:"state1_lz0M",state2:"state2_NHXC"};var n=a(781),l=a(3844);const c=function(e){let{moduleName:t,description:a,unseenTopics:c,skippedTopics:o,solvedTopics:i,unseenProblems:m,skippedProblems:d,solvedProblems:u,totalTopics:p,totalProblems:E,genericTopics:v=[],topics:g=[]}=e;return s.createElement(n.A,null,s.createElement(l.A,null),s.createElement("div",{className:r.moduleHome},s.createElement("div",{className:r.informationBackground},s.createElement("h1",{className:r.moduleHeader},t),s.createElement("p",{className:r.moduleDescription},a),s.createElement("div",{className:r.progressCardsContainer},s.createElement("div",{className:r.progressCard},s.createElement("h3",null,"Problems"),s.createElement("div",{className:r.progressBar},s.createElement("div",{className:`${r.progressFill} ${r.unseen}`,style:{width:"100%"}}),s.createElement("div",{className:`${r.progressFill} ${r.skipped}`,style:{width:(d+u)/E*100+"%"}}),s.createElement("div",{className:`${r.progressFill} ${r.solved}`,style:{width:u/E*100+"%"}})),s.createElement("div",{className:r.progressNumbers},s.createElement("span",null,s.createElement("div",{className:r.number},m),s.createElement("div",{className:r.label},"Unseen")),s.createElement("span",null,s.createElement("div",{className:r.number},d),s.createElement("div",{className:r.label},"Skipped")),s.createElement("span",null,s.createElement("div",{className:r.number},u),s.createElement("div",{className:r.label},"Solved")))),s.createElement("div",{className:r.progressCard},s.createElement("h3",null,"Topics"),s.createElement("div",{className:r.progressBar},s.createElement("div",{className:`${r.progressFill} ${r.unseen}`,style:{width:"100%"}}),s.createElement("div",{className:`${r.progressFill} ${r.skipped}`,style:{width:(o+i)/p*100+"%"}}),s.createElement("div",{className:`${r.progressFill} ${r.solved}`,style:{width:i/p*100+"%"}})),s.createElement("div",{className:r.progressNumbers},s.createElement("span",null,s.createElement("div",{className:r.number},c),s.createElement("div",{className:r.label},"Unseen")),s.createElement("span",null,s.createElement("div",{className:r.number},o),s.createElement("div",{className:r.label},"Skipped")),s.createElement("span",null,s.createElement("div",{className:r.number},i),s.createElement("div",{className:r.label},"Solved")))))),s.createElement("div",{className:r.topicsContainer},v.map(((e,a)=>{const n=e.topics.map((e=>g.find((t=>t.topicId===e))));return s.createElement("div",{key:a,className:r.topicRow},s.createElement("div",{className:r.genericTopic},s.createElement("h3",null,e.genericTopicName)),s.createElement("div",{className:r.specificTopicsContainer},s.createElement("ul",null,n.map(((e,a)=>e&&s.createElement("li",{key:a,className:`${r[`state${e.state}`]}`},s.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}`},e.topicName)))))))})))))};var o=a(4335),i=a(4586);const m=()=>{const{siteConfig:e}=(0,i.A)(),t=e.customFields.backendUrl,[a,r]=(0,s.useState)(null),[n,l]=(0,s.useState)(null),[m,d]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async e=>{d(!0);try{const a=sessionStorage.getItem("userId")||"guest";if(!a)throw new Error("User ID not found in session storage");const s=await o.A.get(`${t}/api/module/${e}?userId=${a}`,{withCredentials:!0,credentials:"include"});l(s.data),d(!1)}catch(a){r(a.response?a.response.data:a.message),d(!1)}})("LearnToCode")}),[]),m?s.createElement("p",null,"Loading module data..."):a?s.createElement("div",null,"Error: ",a):s.createElement("div",null,n?s.createElement(c,n):s.createElement("div",null,"Error: No data available"))}},5072:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(6540),r=a(4625),n=(a(8092),a(2407));a(2477);const l=function(){const[e,t]=(0,s.useState)([{name:"Resource 1",url:"https://link-to-resource1.com",description:"This is a comprehensive guide on web development, covering HTML, CSS, and JavaScript.",source:"Web Dev Academy",circleState:"unseen",showMenu:!1},{name:"Resource 2",url:"https://link-to-resource2.com",description:"Learn advanced algorithms and data structures in this detailed tutorial.",source:"Algorithms Expert",circleState:"unseen",showMenu:!1},{name:"Resource 3",url:"https://link-to-resource3.com",description:"A step-by-step tutorial on building web applications using React.",source:"React Mastery",circleState:"unseen",showMenu:!1}]),a=(a,s)=>{const r=[...e];r[a].circleState=s,r[a].showMenu=!1,t(r)};return s.createElement("div",{className:n.A.pageContainer},s.createElement("div",{className:n.A.content},s.createElement("div",{className:n.A.header},s.createElement("h1",null,"Learn to Code: Test Module"),s.createElement("h3",null,"Resources and Learning Materials")),s.createElement("div",{className:n.A.resourcesBlock,id:"resources"},s.createElement("h2",null,"Resources"),s.createElement("ul",null,e.map(((l,c)=>s.createElement("li",{key:c,className:c%2==0?n.A.evenItem:n.A.oddItem},s.createElement("div",{className:n.A.resourceItem},s.createElement("div",{className:`${n.A.circle} ${n.A[l.circleState]}`,onClick:()=>(a=>{const s=[...e];s[a].showMenu=!s[a].showMenu,t(s)})(c)}),s.createElement("div",{className:n.A.source},l.source),s.createElement(r.N_,{to:l.url,target:"_blank",rel:"noopener noreferrer"},s.createElement("div",{className:n.A.name},l.name)),s.createElement("div",{className:n.A.description},l.description),l.showMenu&&s.createElement("div",{className:n.A.circleMenu},s.createElement("button",{onClick:()=>a(c,"unseen")},"Unseen"),s.createElement("button",{onClick:()=>a(c,"skipped")},"Skipped"),s.createElement("button",{onClick:()=>a(c,"done")},"Done"))))))))))}},2407:(e,t,a)=>{a.d(t,{A:()=>s});const s={}}}]);