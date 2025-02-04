"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9578],{34043:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>l,moduleId:()=>p,toc:()=>g,topicId:()=>x});const l=JSON.parse('{"id":"modules/Novice/TwoPointers","title":"TwoPointers","description":"Prerequisites: NA","source":"@site/docs/modules/Novice/TwoPointers.mdx","sourceDirName":"modules/Novice","slug":"/modules/Novice/TwoPointers","permalink":"/SeaFarmers/docs/modules/Novice/TwoPointers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"SimpleSums","permalink":"/SeaFarmers/docs/modules/Novice/SimpleSums"},"next":{"title":"BabySteps","permalink":"/SeaFarmers/docs/solutions/LearnToCode/BabySteps"}}');var a=t(74848),n=t(28453),r=(t(96540),t(42407),t(41955)),c=t(47294),o=t(38235),i=t(95430),m=t(28092);t(13132);const d={},h="Two Pointers",u={},p="Novice",x="TwoPointers",g=[];function j(e){const s={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.A,{moduleId:p}),"\n",(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"two-pointers",children:"Two Pointers"})}),"\n",(0,a.jsx)(s.p,{children:"Prerequisites: NA"}),"\n",(0,a.jsx)(s.h1,{id:"resources",children:"Resources"}),"\n",(0,a.jsx)(o.A,{moduleId:p,topicId:x}),"\n",(0,a.jsx)(s.h1,{id:"focus-problem",children:"Focus Problem"}),"\n",(0,a.jsx)(c.A,{moduleId:p,topicId:x,location:"sample1"}),"\n",(0,a.jsx)(s.p,{children:"After looking at the probelem at hand, this concept will seem more concrete. Basically, instead of doing a complete search\nby looping through every possibility, these problems use a simple fact:"}),"\n",(0,a.jsxs)(s.p,{children:["If ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(i)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," is the function and the best indice of the function for ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"i"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"g(i)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", meaning that ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(g(i))"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"))"})]})})]})," is greater than\nall other values of ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(l)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", and we also know that ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{children:"\u2264"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"j"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"g(i) \\leq g(j)"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," for ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"\u2264"}),(0,a.jsx)(s.mi,{children:"j"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i \\leq j"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7955em",verticalAlign:"-0.136em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})]})]}),", then we can simply start at ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"g(i)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"\nwhen finding ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"j"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"g(j)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,a.jsx)(s.h1,{id:"more-practice",children:"More Practice"}),"\n",(0,a.jsx)(r.A,{moduleId:p,topicId:x,location:"list"}),"\n",(0,a.jsx)(i.A,{moduleId:p,topicId:x})]})}function f(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},41955:(e,s,t)=>{t.d(s,{A:()=>c});var l=t(96540),a=t(94335);const n={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=t(44586);const c=e=>{let{moduleId:s,topicId:t,location:c}=e;const{siteConfig:o}=(0,r.A)(),i=o.customFields.backendUrl,[m,d]=(0,l.useState)(null),[h,u]=(0,l.useState)(null),[p,x]=(0,l.useState)(!1),[g,j]=(0,l.useState)(null),[f,N]=(0,l.useState)(null),[w,C]=(0,l.useState)({}),[E,b]=(0,l.useState)(null),[y,k]=(0,l.useState)({}),[_,I]=(0,l.useState)(!1),S=(0,l.useRef)(null),v=(0,l.useRef)(null);(0,l.useEffect)((()=>{s&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await a.A.get(`${i}/api/module/${s}?userId=${e}`,{withCredentials:!0});d(t.data)}catch(g){j(g.response?g.response.data:g.message)}finally{x(!1)}}()}),[s]),(0,l.useEffect)((()=>{if(!m||!t)return;const e=m.topics.find((e=>e.topicId===t));e?u(e):j("Topic not found")}),[m,t]);const M=async(e,l)=>{const n=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await a.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleId:s,topicId:t,problemId:n,newState:l},{withCredentials:!0});u((e=>{const s=e.problems.map((e=>e.problemId===n?{...e,state:l}:e));return{...e,problems:s}})),N(null)}catch(g){console.error("Error updating problem state:",g)}};return(0,l.useEffect)((()=>{const e=e=>{S.current&&!S.current.contains(e.target)&&N(null),v.current&&!v.current.contains(e.target)&&b(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p?l.createElement("p",null,"Loading data..."):g?l.createElement("p",null,"Error: ",g):l.createElement("div",null,h&&h.problems&&l.createElement("table",{className:n.problemTable},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:n.statusColumn}),l.createElement("th",{className:n.sourceColumn},"Source"),l.createElement("th",{className:n.starredColumn}),l.createElement("th",{className:n.problemColumn},"Problem"),l.createElement("th",{className:n.difficultyColumn},"Dif"),l.createElement("th",{className:n.tagsColumn},l.createElement("button",{onClick:()=>I((e=>!e)),className:n.toggleTagsButton},_?"Hide Tags":"Show Tags")),l.createElement("th",{className:n.helpColumn}))),l.createElement("tbody",null,h.problems&&Array.isArray(h.problems)&&h.problems.filter((e=>e.location===c)).map(((e,s)=>e?l.createElement("tr",{key:e.uniqueId||s},l.createElement("td",{className:n.statusCell},l.createElement("span",{className:`${n.stateCircle} ${n[`state${e.state}`]}`,onClick:e=>((e,s)=>{if(f===e)N(null),C({});else{const t=s.target.getBoundingClientRect();C({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),N(e)}})(s,e)}),f===s&&l.createElement("div",{ref:S,className:n.dropdownMenu,style:{position:"absolute"}},l.createElement("ul",null,l.createElement("li",{onClick:()=>M(e,2)},"Solved"),l.createElement("li",{onClick:()=>M(e,1)},"Skipped"),l.createElement("li",{onClick:()=>M(e,0)},"Unseen")))),l.createElement("td",{className:n.sourceCell},e.source),l.createElement("td",{className:n.starredCell},e.star?"\u2b50":""),l.createElement("td",{className:n.problemCell},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.problemLink},e.name)),l.createElement("td",{className:n.difficultyCell},e.difficulty),l.createElement("td",{className:n.tagsCell},_&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),l.createElement("td",{className:n.helpCell},l.createElement("span",{className:n.helpButton,onClick:e=>((e,s)=>{if(E===e)b(null),k({});else{const t=s.target.getBoundingClientRect();k({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),b(e)}})(s,e)},"Help"),E===s&&l.createElement("div",{ref:v,className:n.dropdownMenu,style:{position:"absolute"}},l.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,s)=>l.createElement("li",{key:s},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.helpLink},e.name)))):l.createElement("li",null,"No Help"))))):null)))))}},38235:(e,s,t)=>{t.d(s,{A:()=>g});var l=t(96540),a=t(94335);const n="resourceTable_ow7w",r="nameColumn_cltC",c="nameCell_dZOO",o="sourceColumn_R2BC",i="sourceCell_NfiE",m="starredColumn_Ycnc",d="starredCell_Cq7S",h="descriptionColumn_X0UP",u="descriptionCell_gbNW",p="resourceLink_QTdW";var x=t(44586);const g=e=>{let{moduleId:s,topicId:t}=e;const{siteConfig:g}=(0,x.A)(),j=g.customFields.backendUrl,[f,N]=(0,l.useState)(null),[w,C]=(0,l.useState)(null),[E,b]=(0,l.useState)(!1),[y,k]=(0,l.useState)(null);return(0,l.useEffect)((()=>{s&&async function(){b(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await a.A.get(`${j}/api/module/${s}?userId=${e}`,{withCredentials:!0});N(t.data)}catch(y){k(y.response?y.response.data:y.message)}finally{b(!1)}}()}),[s]),(0,l.useEffect)((()=>{if(!f||!t)return;const e=f.topics.find((e=>e.topicId===t));e?C(e):k("Topic not found")}),[f,t]),E?l.createElement("p",null,"Loading data..."):y?l.createElement("p",null,"Error: ",y):l.createElement("div",null,w&&w.resources&&l.createElement("table",{className:n},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:o},"Resources"),l.createElement("th",{className:m}),l.createElement("th",{className:r}),l.createElement("th",{className:h}))),l.createElement("tbody",null,w.resources.map(((e,s)=>l.createElement("tr",{key:e.uniqueId||s},l.createElement("td",{className:i},e.source),l.createElement("td",{className:d},e.star?"\u2b50":""),l.createElement("td",{className:c},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:p},e.name)),l.createElement("td",{className:u},e.description)))))))}},47294:(e,s,t)=>{t.d(s,{A:()=>c});var l=t(96540),a=t(94335);const n={sampleTable:"sampleTable_FWCi",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=t(44586);const c=e=>{let{moduleId:s,topicId:t,location:c}=e;const{siteConfig:o}=(0,r.A)(),i=o.customFields.backendUrl,[m,d]=(0,l.useState)(null),[h,u]=(0,l.useState)(null),[p,x]=(0,l.useState)(!1),[g,j]=(0,l.useState)(null),[f,N]=(0,l.useState)(null),[w,C]=(0,l.useState)({}),[E,b]=(0,l.useState)(null),[y,k]=(0,l.useState)({}),[_,I]=(0,l.useState)(!1),S=(0,l.useRef)(null),v=(0,l.useRef)(null);(0,l.useEffect)((()=>{s&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await a.A.get(`${i}/api/module/${s}?userId=${e}`,{withCredentials:!0});d(t.data)}catch(g){j(g.response?g.response.data:g.message)}finally{x(!1)}}()}),[s]),(0,l.useEffect)((()=>{if(!m||!t)return;const e=m.topics.find((e=>e.topicId===t));e?u(e):j("Topic not found")}),[m,t]),(0,l.useEffect)((()=>{const e=e=>{S.current&&!S.current.contains(e.target)&&N(null),v.current&&!v.current.contains(e.target)&&b(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const M=async(e,l)=>{const n=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await a.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleId:s,topicId:t,problemId:n,newState:l},{withCredentials:!0}),u((e=>{const s=e.problems.map((e=>e.problemId===n?{...e,state:l}:e));return{...e,problems:s}})),N(null)}catch(g){console.error("Error updating problem state:",g)}};return p?l.createElement("p",null,"Loading data..."):g?l.createElement("p",null,"Error: ",g):l.createElement("div",null,h?.problems?.length>0?l.createElement("table",{className:n.sampleTable},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:n.statusColumn}),l.createElement("th",{className:n.sourceColumn},"Source"),l.createElement("th",{className:n.starredColumn}),l.createElement("th",{className:n.problemColumn},"Problem"),l.createElement("th",{className:n.difficultyColumn},"Dif"),l.createElement("th",{className:n.tagsColumn},l.createElement("button",{onClick:()=>I((e=>!e)),className:n.toggleTagsButton},_?"Hide Tags":"Show Tags")),l.createElement("th",{className:n.helpColumn}))),l.createElement("tbody",null,h.problems.filter((e=>e.location===c)).map(((e,s)=>l.createElement("tr",{key:e.uniqueId||s},l.createElement("td",{className:n.statusCell},l.createElement("span",{className:`${n.stateCircle} ${n[`state${e.state}`]}`,onClick:e=>((e,s)=>{if(f===e)N(null),C({});else{const t=s.target.getBoundingClientRect();C({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),N(e)}})(s,e)}),f===s&&l.createElement("div",{className:n.dropdownMenu,ref:S,style:{position:"absolute"}},l.createElement("ul",null,l.createElement("li",{onClick:()=>M(e,2)},"Solved"),l.createElement("li",{onClick:()=>M(e,1)},"Skipped"),l.createElement("li",{onClick:()=>M(e,0)},"Unseen")))),l.createElement("td",{className:n.sourceCell},e.source),l.createElement("td",{className:n.starredCell},e.star?"\u2b50":""),l.createElement("td",{className:n.problemCell},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.problemLink},e.name)),l.createElement("td",{className:n.difficultyCell},e.difficulty||"Unknown"),l.createElement("td",{className:n.tagsCell},_&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),l.createElement("td",{className:n.helpCell},l.createElement("span",{className:n.helpButton,onClick:e=>((e,s)=>{if(E===e)b(null),k({});else{const t=s.target.getBoundingClientRect();k({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),b(e)}})(s,e)},"Help"),E===s&&l.createElement("div",{className:n.dropdownMenu,ref:v,style:{position:"absolute"}},l.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,s)=>l.createElement("li",{key:s},l.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.helpLink},e.name)))):l.createElement("li",null,"No Help"))))))))):l.createElement("p",null,"No problems data available."))}},13132:(e,s,t)=>{t(96540)},95430:(e,s,t)=>{t.d(s,{A:()=>c});var l=t(96540),a=t(94335);const n={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=t(44586);const c=e=>{let{moduleId:s,topicId:t}=e;const{siteConfig:c}=(0,r.A)(),o=c.customFields.backendUrl,[i,m]=(0,l.useState)(null),[d,h]=(0,l.useState)(null),[u,p]=(0,l.useState)(!0),[x,g]=(0,l.useState)(null),[j,f]=(0,l.useState)(null),[N,w]=(0,l.useState)({}),C=(0,l.useRef)(null);(0,l.useEffect)((()=>{s&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await a.A.get(`${o}/api/module/${s}?userId=${e}`,{withCredentials:!0});m(t.data)}catch(x){g(x.response?x.response.data:x.message)}finally{p(!1)}}()}),[s]),(0,l.useEffect)((()=>{if(!i||!t)return;const e=i.topics.find((e=>e.topicId===t));e?h(e):g("Topic not found")}),[i,t]);if((0,l.useEffect)((()=>{const e=e=>{C.current&&!C.current.contains(e.target)&&f(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),u)return l.createElement("p",null,"Loading data...");if(x)return l.createElement("p",null,"Error: ",x);const E=["Unseen","Skipped","Solved"],b=E[d?.state??0];return l.createElement("div",{className:n.topicProgress},l.createElement("div",{className:n.label},"Topic Progress:"),l.createElement("div",{className:`${n.stateLabel} ${n[`state-${d?.state??0}`]}`,onClick:e=>{const s=e.target.getBoundingClientRect();w({top:s.bottom+window.scrollY-150,left:s.left+window.scrollX}),f(!j)}},b),j&&l.createElement("div",{className:n.dropdownMenu,ref:C,style:{position:"absolute",top:`${N.top}px`,left:`${N.left}px`}},E.map(((e,r)=>l.createElement("div",{key:r,onClick:()=>(async e=>{h((s=>({...s,state:e})));try{const l=sessionStorage.getItem("userId")||"guest";if(!l)throw new Error("User ID not found in session storage");await a.A.post(`${o}/api/topic/updateState?userId=${l}`,{moduleId:s,topicId:t,newState:e},{withCredentials:!0}),f(null)}catch(l){g("Failed to update state."),h((e=>({...e,state:e.state})))}})(r),className:n.dropdownItem},e)))))}}}]);