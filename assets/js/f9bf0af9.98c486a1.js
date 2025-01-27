"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2886],{69390:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>x,contentTitle:()=>p,default:()=>j,frontMatter:()=>h,metadata:()=>n,moduleId:()=>g,toc:()=>C,topicId:()=>f});const n=JSON.parse('{"id":"modules/Novice/Recursion","title":"Recursion","description":"Prerequisites: Functions","source":"@site/docs/modules/Novice/Recursion.mdx","sourceDirName":"modules/Novice","slug":"/modules/Novice/Recursion","permalink":"/SeaFarmers/docs/modules/Novice/Recursion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Functions","permalink":"/SeaFarmers/docs/modules/Novice/Functions"},"next":{"title":"SetsAndMaps","permalink":"/SeaFarmers/docs/modules/Novice/SetsAndMaps"}}');var a=s(74848),l=s(28453),r=(s(96540),s(42407),s(41955)),o=s(47294),c=s(38235),i=s(95430),m=s(28092),d=(s(13132),s(38866)),u=s(40426);const h={},p="Recursion",x={},g="Novice",f="Recursion",C=[];function N(e){const t={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.A,{moduleId:g}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"recursion",children:"Recursion"})}),"\n",(0,a.jsx)(t.p,{children:"Prerequisites: Functions"}),"\n",(0,a.jsx)(t.h1,{id:"resources",children:"Resources"}),"\n",(0,a.jsx)(c.A,{moduleId:g,topicId:f}),"\n",(0,a.jsx)(t.p,{children:"Now, we can take these functions, which may seem elementary right now, and spice them up by having them call\nthemselves. Look at the code below:"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(d.A,{language:"cpp",style:u.A,children:"int count = 0; \nvoid increaseCount(int x) {\n  if(x <= 0) return; \n  count++; \n  increaseCount(x - 1); \n}\n\nint main() {\n  cout << count << endl;\n  increaseCount(1); \n  cout << count << endl;\n  increaseCount(3); \n  cout << count << endl;\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This code and increases the count variable by the initial ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mi,{children:"x"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"x"})]})})]})," value. Though this code may seem extreme to solve such a\nsimple problem, think about how the code runs."]}),"\n",(0,a.jsxs)(t.p,{children:["Inside the function, there is a base case: This is when ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"x"}),(0,a.jsx)(t.mo,{children:"\u2264"}),(0,a.jsx)(t.mn,{children:"0"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"x \\leq 0"})]})})}),(0,a.jsxs)(t.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(t.span,{className:"mrel",children:"\u2264"}),(0,a.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"0"})]})]})]}),". Since count doesn't need to be increased anymore,\nthe funciton returns and does nothing."]}),"\n",(0,a.jsxs)(t.p,{children:["Else: The function increases count by ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mn,{children:"1"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"1"})]})})]})," and then calls increaseCount(",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"x"}),(0,a.jsx)(t.mo,{children:"\u2212"}),(0,a.jsx)(t.mn,{children:"1"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"x - 1"})]})})}),(0,a.jsxs)(t.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(t.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"1"})]})]})]}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["To really break it down, increaseCount(",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mi,{children:"x"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"x"})]})})]}),") has the same affect as increaseCount(",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mn,{children:"1"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"1"})]})})]}),"), increaseCount(",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"x"}),(0,a.jsx)(t.mo,{children:"\u2212"}),(0,a.jsx)(t.mn,{children:"1"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"x - 1"})]})})}),(0,a.jsxs)(t.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(t.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"1"})]})]})]}),"). With\nincreaseCount(",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mn,{children:"1"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"1"})]})})]}),") only increasing count once."]}),"\n",(0,a.jsx)(t.h1,{id:"initial-applications",children:"Initial Applications"}),"\n",(0,a.jsx)(t.p,{children:"We will use recursion to implement solutions that try to completely search all of the possible bounds of a problem.\nThis is usually for finding the BEST combination or findind the NUMBER of combinations."}),"\n",(0,a.jsx)(t.h1,{id:"focus-problem",children:"Focus Problem"}),"\n",(0,a.jsx)(o.A,{moduleId:g,topicId:f,location:"sample1"}),"\n",(0,a.jsx)(t.h1,{id:"more-practice",children:"More Practice"}),"\n",(0,a.jsx)(r.A,{moduleId:g,topicId:f,location:"list"}),"\n",(0,a.jsx)(i.A,{moduleId:g,topicId:f})]})}function j(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(N,{...e})}):N(e)}},41955:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(96540),a=s(94335);const l={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=s(44586);const o=e=>{let{moduleId:t,topicId:s,location:o}=e;const{siteConfig:c}=(0,r.A)(),i=c.customFields.backendUrl,[m,d]=(0,n.useState)(null),[u,h]=(0,n.useState)(null),[p,x]=(0,n.useState)(!1),[g,f]=(0,n.useState)(null),[C,N]=(0,n.useState)(null),[j,w]=(0,n.useState)({}),[E,b]=(0,n.useState)(null),[y,k]=(0,n.useState)({}),[_,I]=(0,n.useState)(!1),S=(0,n.useRef)(null),v=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(s.data)}catch(g){f(g.response?g.response.data:g.message)}finally{x(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!m||!s)return;const e=m.topics.find((e=>e.topicId===s));e?h(e):f("Topic not found")}),[m,s]);const M=async(e,n)=>{const l=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await a.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:s,problemId:l,newState:n},{withCredentials:!0});h((e=>{const t=e.problems.map((e=>e.problemId===l?{...e,state:n}:e));return{...e,problems:t}})),N(null)}catch(g){console.error("Error updating problem state:",g)}};return(0,n.useEffect)((()=>{const e=e=>{S.current&&!S.current.contains(e.target)&&N(null),v.current&&!v.current.contains(e.target)&&b(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p?n.createElement("p",null,"Loading data..."):g?n.createElement("p",null,"Error: ",g):n.createElement("div",null,u&&u.problems&&n.createElement("table",{className:l.problemTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:l.statusColumn}),n.createElement("th",{className:l.sourceColumn},"Source"),n.createElement("th",{className:l.starredColumn}),n.createElement("th",{className:l.problemColumn},"Problem"),n.createElement("th",{className:l.difficultyColumn},"Dif"),n.createElement("th",{className:l.tagsColumn},n.createElement("button",{onClick:()=>I((e=>!e)),className:l.toggleTagsButton},_?"Hide Tags":"Show Tags")),n.createElement("th",{className:l.helpColumn}))),n.createElement("tbody",null,u.problems&&Array.isArray(u.problems)&&u.problems.filter((e=>e.location===o)).map(((e,t)=>e?n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:l.statusCell},n.createElement("span",{className:`${l.stateCircle} ${l[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)N(null),w({});else{const s=t.target.getBoundingClientRect();w({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),N(e)}})(t,e)}),C===t&&n.createElement("div",{ref:S,className:l.dropdownMenu,style:{position:"absolute"}},n.createElement("ul",null,n.createElement("li",{onClick:()=>M(e,2)},"Solved"),n.createElement("li",{onClick:()=>M(e,1)},"Skipped"),n.createElement("li",{onClick:()=>M(e,0)},"Unseen")))),n.createElement("td",{className:l.sourceCell},e.source),n.createElement("td",{className:l.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:l.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.problemLink},e.name)),n.createElement("td",{className:l.difficultyCell},e.difficulty),n.createElement("td",{className:l.tagsCell},_&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),n.createElement("td",{className:l.helpCell},n.createElement("span",{className:l.helpButton,onClick:e=>((e,t)=>{if(E===e)b(null),k({});else{const s=t.target.getBoundingClientRect();k({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),b(e)}})(t,e)},"Help"),E===t&&n.createElement("div",{ref:v,className:l.dropdownMenu,style:{position:"absolute"}},n.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>n.createElement("li",{key:t},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.helpLink},e.name)))):n.createElement("li",null,"No Help"))))):null)))))}},38235:(e,t,s)=>{s.d(t,{A:()=>g});var n=s(96540),a=s(94335);const l="resourceTable_ow7w",r="nameColumn_cltC",o="nameCell_dZOO",c="sourceColumn_R2BC",i="sourceCell_NfiE",m="starredColumn_Ycnc",d="starredCell_Cq7S",u="descriptionColumn_X0UP",h="descriptionCell_gbNW",p="resourceLink_QTdW";var x=s(44586);const g=e=>{let{moduleId:t,topicId:s}=e;const{siteConfig:g}=(0,x.A)(),f=g.customFields.backendUrl,[C,N]=(0,n.useState)(null),[j,w]=(0,n.useState)(null),[E,b]=(0,n.useState)(!1),[y,k]=(0,n.useState)(null);return(0,n.useEffect)((()=>{t&&async function(){b(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${f}/api/module/${t}?userId=${e}`,{withCredentials:!0});N(s.data)}catch(y){k(y.response?y.response.data:y.message)}finally{b(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!C||!s)return;const e=C.topics.find((e=>e.topicId===s));e?w(e):k("Topic not found")}),[C,s]),E?n.createElement("p",null,"Loading data..."):y?n.createElement("p",null,"Error: ",y):n.createElement("div",null,j&&j.resources&&n.createElement("table",{className:l},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:c},"Resources"),n.createElement("th",{className:m}),n.createElement("th",{className:r}),n.createElement("th",{className:u}))),n.createElement("tbody",null,j.resources.map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:i},e.source),n.createElement("td",{className:d},e.star?"\u2b50":""),n.createElement("td",{className:o},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:p},e.name)),n.createElement("td",{className:h},e.description)))))))}},47294:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(96540),a=s(94335);const l={sampleTable:"sampleTable_FWCi",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=s(44586);const o=e=>{let{moduleId:t,topicId:s,location:o}=e;const{siteConfig:c}=(0,r.A)(),i=c.customFields.backendUrl,[m,d]=(0,n.useState)(null),[u,h]=(0,n.useState)(null),[p,x]=(0,n.useState)(!1),[g,f]=(0,n.useState)(null),[C,N]=(0,n.useState)(null),[j,w]=(0,n.useState)({}),[E,b]=(0,n.useState)(null),[y,k]=(0,n.useState)({}),[_,I]=(0,n.useState)(!1),S=(0,n.useRef)(null),v=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(s.data)}catch(g){f(g.response?g.response.data:g.message)}finally{x(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!m||!s)return;const e=m.topics.find((e=>e.topicId===s));e?h(e):f("Topic not found")}),[m,s]),(0,n.useEffect)((()=>{const e=e=>{S.current&&!S.current.contains(e.target)&&N(null),v.current&&!v.current.contains(e.target)&&b(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const M=async(e,n)=>{const l=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await a.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:s,problemId:l,newState:n},{withCredentials:!0}),h((e=>{const t=e.problems.map((e=>e.problemId===l?{...e,state:n}:e));return{...e,problems:t}})),N(null)}catch(g){console.error("Error updating problem state:",g)}};return p?n.createElement("p",null,"Loading data..."):g?n.createElement("p",null,"Error: ",g):n.createElement("div",null,u?.problems?.length>0?n.createElement("table",{className:l.sampleTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:l.statusColumn}),n.createElement("th",{className:l.sourceColumn},"Source"),n.createElement("th",{className:l.starredColumn}),n.createElement("th",{className:l.problemColumn},"Problem"),n.createElement("th",{className:l.difficultyColumn},"Dif"),n.createElement("th",{className:l.tagsColumn},n.createElement("button",{onClick:()=>I((e=>!e)),className:l.toggleTagsButton},_?"Hide Tags":"Show Tags")),n.createElement("th",{className:l.helpColumn}))),n.createElement("tbody",null,u.problems.filter((e=>e.location===o)).map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:l.statusCell},n.createElement("span",{className:`${l.stateCircle} ${l[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)N(null),w({});else{const s=t.target.getBoundingClientRect();w({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),N(e)}})(t,e)}),C===t&&n.createElement("div",{className:l.dropdownMenu,ref:S,style:{position:"absolute"}},n.createElement("ul",null,n.createElement("li",{onClick:()=>M(e,2)},"Solved"),n.createElement("li",{onClick:()=>M(e,1)},"Skipped"),n.createElement("li",{onClick:()=>M(e,0)},"Unseen")))),n.createElement("td",{className:l.sourceCell},e.source),n.createElement("td",{className:l.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:l.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.problemLink},e.name)),n.createElement("td",{className:l.difficultyCell},e.difficulty||"Unknown"),n.createElement("td",{className:l.tagsCell},_&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),n.createElement("td",{className:l.helpCell},n.createElement("span",{className:l.helpButton,onClick:e=>((e,t)=>{if(E===e)b(null),k({});else{const s=t.target.getBoundingClientRect();k({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),b(e)}})(t,e)},"Help"),E===t&&n.createElement("div",{className:l.dropdownMenu,ref:v,style:{position:"absolute"}},n.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>n.createElement("li",{key:t},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.helpLink},e.name)))):n.createElement("li",null,"No Help"))))))))):n.createElement("p",null,"No problems data available."))}},13132:(e,t,s)=>{s(96540)},95430:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(96540),a=s(94335);const l={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=s(44586);const o=e=>{let{moduleId:t,topicId:s}=e;const{siteConfig:o}=(0,r.A)(),c=o.customFields.backendUrl,[i,m]=(0,n.useState)(null),[d,u]=(0,n.useState)(null),[h,p]=(0,n.useState)(!0),[x,g]=(0,n.useState)(null),[f,C]=(0,n.useState)(null),[N,j]=(0,n.useState)({}),w=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(s.data)}catch(x){g(x.response?x.response.data:x.message)}finally{p(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!i||!s)return;const e=i.topics.find((e=>e.topicId===s));e?u(e):g("Topic not found")}),[i,s]);if((0,n.useEffect)((()=>{const e=e=>{w.current&&!w.current.contains(e.target)&&C(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),h)return n.createElement("p",null,"Loading data...");if(x)return n.createElement("p",null,"Error: ",x);const E=["Unseen","Skipped","Solved"],b=E[d?.state??0];return n.createElement("div",{className:l.topicProgress},n.createElement("div",{className:l.label},"Topic Progress:"),n.createElement("div",{className:`${l.stateLabel} ${l[`state-${d?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();j({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),C(!f)}},b),f&&n.createElement("div",{className:l.dropdownMenu,ref:w,style:{position:"absolute",top:`${N.top}px`,left:`${N.left}px`}},E.map(((e,r)=>n.createElement("div",{key:r,onClick:()=>(async e=>{u((t=>({...t,state:e})));try{const n=sessionStorage.getItem("userId")||"guest";if(!n)throw new Error("User ID not found in session storage");await a.A.post(`${c}/api/topic/updateState?userId=${n}`,{moduleId:t,topicId:s,newState:e},{withCredentials:!0}),C(null)}catch(n){g("Failed to update state."),u((e=>({...e,state:e.state})))}})(r),className:l.dropdownItem},e)))))}}}]);