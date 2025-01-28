"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9578],{34043:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>a,moduleId:()=>p,toc:()=>j,topicId:()=>x});const a=JSON.parse('{"id":"modules/Novice/TwoPointers","title":"TwoPointers","description":"Prerequisites: NA","source":"@site/docs/modules/Novice/TwoPointers.mdx","sourceDirName":"modules/Novice","slug":"/modules/Novice/TwoPointers","permalink":"/SeaFarmers/docs/modules/Novice/TwoPointers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"SetsAndMaps","permalink":"/SeaFarmers/docs/modules/Novice/SetsAndMaps"},"next":{"title":"BabySteps","permalink":"/SeaFarmers/docs/solutions/LearnToCode/BabySteps"}}');var l=t(74848),n=t(28453),r=(t(96540),t(42407),t(41955)),c=t(47294),m=t(38235),o=t(95430),i=t(28092);t(13132);const d={},h="Two Pointers",u={},p="Novice",x="TwoPointers",j=[];function g(e){const s={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{moduleId:p}),"\n",(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"two-pointers",children:"Two Pointers"})}),"\n",(0,l.jsx)(s.p,{children:"Prerequisites: NA"}),"\n",(0,l.jsx)(s.h1,{id:"resources",children:"Resources"}),"\n",(0,l.jsx)(m.A,{moduleId:p,topicId:x}),"\n",(0,l.jsx)(s.h1,{id:"focus-problem",children:"Focus Problem"}),"\n",(0,l.jsx)(c.A,{moduleId:p,topicId:x,location:"sample1"}),"\n",(0,l.jsx)(s.p,{children:"After looking at the probelem at hand, this concept will seem more concrete. Basicall, instead of doing a complete search\nby looping through every possibility, these problems use a simple fact:"}),"\n",(0,l.jsxs)(s.p,{children:["If ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(i)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})," is the function and the best indice of the function for ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mi,{children:"i"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," is ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"g"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"g(i)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", meaning that ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"g"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(g(i))"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:"))"})]})})]})," is greater than\nall other values of ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"l"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(l)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", and we also know that ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"g"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"g(i)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})," \\leq g(j)",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mi,{children:"o"}),(0,l.jsx)(s.mi,{children:"r"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"for"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"})]})})]}),"i \\leq j",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"t"}),(0,l.jsx)(s.mi,{children:"h"}),(0,l.jsx)(s.mi,{children:"e"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mi,{children:"w"}),(0,l.jsx)(s.mi,{children:"e"}),(0,l.jsx)(s.mi,{children:"c"}),(0,l.jsx)(s.mi,{children:"a"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mi,{children:"s"}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mi,{children:"m"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mi,{children:"l"}),(0,l.jsx)(s.mi,{children:"y"}),(0,l.jsx)(s.mi,{children:"s"}),(0,l.jsx)(s.mi,{children:"t"}),(0,l.jsx)(s.mi,{children:"a"}),(0,l.jsx)(s.mi,{children:"r"}),(0,l.jsx)(s.mi,{children:"t"}),(0,l.jsx)(s.mi,{children:"a"}),(0,l.jsx)(s.mi,{children:"t"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:", then we can simply start at "})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"ec"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"an"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"im"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"pl"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"ys"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),"g(i)",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"w"}),(0,l.jsx)(s.mi,{children:"h"}),(0,l.jsx)(s.mi,{children:"e"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mi,{children:"g"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"\nwhen finding"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"})]})})]}),"g(j)$."]}),"\n",(0,l.jsx)(s.h1,{id:"more-practice",children:"More Practice"}),"\n",(0,l.jsx)(r.A,{moduleId:p,topicId:x,location:"list"}),"\n",(0,l.jsx)(o.A,{moduleId:p,topicId:x})]})}function f(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},41955:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(96540),l=t(94335);const n={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=t(44586);const c=e=>{let{moduleId:s,topicId:t,location:c}=e;const{siteConfig:m}=(0,r.A)(),o=m.customFields.backendUrl,[i,d]=(0,a.useState)(null),[h,u]=(0,a.useState)(null),[p,x]=(0,a.useState)(!1),[j,g]=(0,a.useState)(null),[f,N]=(0,a.useState)(null),[w,C]=(0,a.useState)({}),[E,b]=(0,a.useState)(null),[y,k]=(0,a.useState)({}),[_,I]=(0,a.useState)(!1),S=(0,a.useRef)(null),v=(0,a.useRef)(null);(0,a.useEffect)((()=>{s&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await l.A.get(`${o}/api/module/${s}?userId=${e}`,{withCredentials:!0});d(t.data)}catch(j){g(j.response?j.response.data:j.message)}finally{x(!1)}}()}),[s]),(0,a.useEffect)((()=>{if(!i||!t)return;const e=i.topics.find((e=>e.topicId===t));e?u(e):g("Topic not found")}),[i,t]);const M=async(e,a)=>{const n=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await l.A.post(`${o}/api/problem/updateState?userId=${e}`,{moduleId:s,topicId:t,problemId:n,newState:a},{withCredentials:!0});u((e=>{const s=e.problems.map((e=>e.problemId===n?{...e,state:a}:e));return{...e,problems:s}})),N(null)}catch(j){console.error("Error updating problem state:",j)}};return(0,a.useEffect)((()=>{const e=e=>{S.current&&!S.current.contains(e.target)&&N(null),v.current&&!v.current.contains(e.target)&&b(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p?a.createElement("p",null,"Loading data..."):j?a.createElement("p",null,"Error: ",j):a.createElement("div",null,h&&h.problems&&a.createElement("table",{className:n.problemTable},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:n.statusColumn}),a.createElement("th",{className:n.sourceColumn},"Source"),a.createElement("th",{className:n.starredColumn}),a.createElement("th",{className:n.problemColumn},"Problem"),a.createElement("th",{className:n.difficultyColumn},"Dif"),a.createElement("th",{className:n.tagsColumn},a.createElement("button",{onClick:()=>I((e=>!e)),className:n.toggleTagsButton},_?"Hide Tags":"Show Tags")),a.createElement("th",{className:n.helpColumn}))),a.createElement("tbody",null,h.problems&&Array.isArray(h.problems)&&h.problems.filter((e=>e.location===c)).map(((e,s)=>e?a.createElement("tr",{key:e.uniqueId||s},a.createElement("td",{className:n.statusCell},a.createElement("span",{className:`${n.stateCircle} ${n[`state${e.state}`]}`,onClick:e=>((e,s)=>{if(f===e)N(null),C({});else{const t=s.target.getBoundingClientRect();C({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),N(e)}})(s,e)}),f===s&&a.createElement("div",{ref:S,className:n.dropdownMenu,style:{position:"absolute"}},a.createElement("ul",null,a.createElement("li",{onClick:()=>M(e,2)},"Solved"),a.createElement("li",{onClick:()=>M(e,1)},"Skipped"),a.createElement("li",{onClick:()=>M(e,0)},"Unseen")))),a.createElement("td",{className:n.sourceCell},e.source),a.createElement("td",{className:n.starredCell},e.star?"\u2b50":""),a.createElement("td",{className:n.problemCell},a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.problemLink},e.name)),a.createElement("td",{className:n.difficultyCell},e.difficulty),a.createElement("td",{className:n.tagsCell},_&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),a.createElement("td",{className:n.helpCell},a.createElement("span",{className:n.helpButton,onClick:e=>((e,s)=>{if(E===e)b(null),k({});else{const t=s.target.getBoundingClientRect();k({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),b(e)}})(s,e)},"Help"),E===s&&a.createElement("div",{ref:v,className:n.dropdownMenu,style:{position:"absolute"}},a.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,s)=>a.createElement("li",{key:s},a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.helpLink},e.name)))):a.createElement("li",null,"No Help"))))):null)))))}},38235:(e,s,t)=>{t.d(s,{A:()=>j});var a=t(96540),l=t(94335);const n="resourceTable_ow7w",r="nameColumn_cltC",c="nameCell_dZOO",m="sourceColumn_R2BC",o="sourceCell_NfiE",i="starredColumn_Ycnc",d="starredCell_Cq7S",h="descriptionColumn_X0UP",u="descriptionCell_gbNW",p="resourceLink_QTdW";var x=t(44586);const j=e=>{let{moduleId:s,topicId:t}=e;const{siteConfig:j}=(0,x.A)(),g=j.customFields.backendUrl,[f,N]=(0,a.useState)(null),[w,C]=(0,a.useState)(null),[E,b]=(0,a.useState)(!1),[y,k]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s&&async function(){b(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await l.A.get(`${g}/api/module/${s}?userId=${e}`,{withCredentials:!0});N(t.data)}catch(y){k(y.response?y.response.data:y.message)}finally{b(!1)}}()}),[s]),(0,a.useEffect)((()=>{if(!f||!t)return;const e=f.topics.find((e=>e.topicId===t));e?C(e):k("Topic not found")}),[f,t]),E?a.createElement("p",null,"Loading data..."):y?a.createElement("p",null,"Error: ",y):a.createElement("div",null,w&&w.resources&&a.createElement("table",{className:n},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:m},"Resources"),a.createElement("th",{className:i}),a.createElement("th",{className:r}),a.createElement("th",{className:h}))),a.createElement("tbody",null,w.resources.map(((e,s)=>a.createElement("tr",{key:e.uniqueId||s},a.createElement("td",{className:o},e.source),a.createElement("td",{className:d},e.star?"\u2b50":""),a.createElement("td",{className:c},a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:p},e.name)),a.createElement("td",{className:u},e.description)))))))}},47294:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(96540),l=t(94335);const n={sampleTable:"sampleTable_FWCi",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=t(44586);const c=e=>{let{moduleId:s,topicId:t,location:c}=e;const{siteConfig:m}=(0,r.A)(),o=m.customFields.backendUrl,[i,d]=(0,a.useState)(null),[h,u]=(0,a.useState)(null),[p,x]=(0,a.useState)(!1),[j,g]=(0,a.useState)(null),[f,N]=(0,a.useState)(null),[w,C]=(0,a.useState)({}),[E,b]=(0,a.useState)(null),[y,k]=(0,a.useState)({}),[_,I]=(0,a.useState)(!1),S=(0,a.useRef)(null),v=(0,a.useRef)(null);(0,a.useEffect)((()=>{s&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await l.A.get(`${o}/api/module/${s}?userId=${e}`,{withCredentials:!0});d(t.data)}catch(j){g(j.response?j.response.data:j.message)}finally{x(!1)}}()}),[s]),(0,a.useEffect)((()=>{if(!i||!t)return;const e=i.topics.find((e=>e.topicId===t));e?u(e):g("Topic not found")}),[i,t]),(0,a.useEffect)((()=>{const e=e=>{S.current&&!S.current.contains(e.target)&&N(null),v.current&&!v.current.contains(e.target)&&b(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const M=async(e,a)=>{const n=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await l.A.post(`${o}/api/problem/updateState?userId=${e}`,{moduleId:s,topicId:t,problemId:n,newState:a},{withCredentials:!0}),u((e=>{const s=e.problems.map((e=>e.problemId===n?{...e,state:a}:e));return{...e,problems:s}})),N(null)}catch(j){console.error("Error updating problem state:",j)}};return p?a.createElement("p",null,"Loading data..."):j?a.createElement("p",null,"Error: ",j):a.createElement("div",null,h?.problems?.length>0?a.createElement("table",{className:n.sampleTable},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:n.statusColumn}),a.createElement("th",{className:n.sourceColumn},"Source"),a.createElement("th",{className:n.starredColumn}),a.createElement("th",{className:n.problemColumn},"Problem"),a.createElement("th",{className:n.difficultyColumn},"Dif"),a.createElement("th",{className:n.tagsColumn},a.createElement("button",{onClick:()=>I((e=>!e)),className:n.toggleTagsButton},_?"Hide Tags":"Show Tags")),a.createElement("th",{className:n.helpColumn}))),a.createElement("tbody",null,h.problems.filter((e=>e.location===c)).map(((e,s)=>a.createElement("tr",{key:e.uniqueId||s},a.createElement("td",{className:n.statusCell},a.createElement("span",{className:`${n.stateCircle} ${n[`state${e.state}`]}`,onClick:e=>((e,s)=>{if(f===e)N(null),C({});else{const t=s.target.getBoundingClientRect();C({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),N(e)}})(s,e)}),f===s&&a.createElement("div",{className:n.dropdownMenu,ref:S,style:{position:"absolute"}},a.createElement("ul",null,a.createElement("li",{onClick:()=>M(e,2)},"Solved"),a.createElement("li",{onClick:()=>M(e,1)},"Skipped"),a.createElement("li",{onClick:()=>M(e,0)},"Unseen")))),a.createElement("td",{className:n.sourceCell},e.source),a.createElement("td",{className:n.starredCell},e.star?"\u2b50":""),a.createElement("td",{className:n.problemCell},a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.problemLink},e.name)),a.createElement("td",{className:n.difficultyCell},e.difficulty||"Unknown"),a.createElement("td",{className:n.tagsCell},_&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),a.createElement("td",{className:n.helpCell},a.createElement("span",{className:n.helpButton,onClick:e=>((e,s)=>{if(E===e)b(null),k({});else{const t=s.target.getBoundingClientRect();k({top:t.bottom+window.scrollY,left:t.left+window.scrollX}),b(e)}})(s,e)},"Help"),E===s&&a.createElement("div",{className:n.dropdownMenu,ref:v,style:{position:"absolute"}},a.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,s)=>a.createElement("li",{key:s},a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.helpLink},e.name)))):a.createElement("li",null,"No Help"))))))))):a.createElement("p",null,"No problems data available."))}},13132:(e,s,t)=>{t(96540)},95430:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(96540),l=t(94335);const n={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=t(44586);const c=e=>{let{moduleId:s,topicId:t}=e;const{siteConfig:c}=(0,r.A)(),m=c.customFields.backendUrl,[o,i]=(0,a.useState)(null),[d,h]=(0,a.useState)(null),[u,p]=(0,a.useState)(!0),[x,j]=(0,a.useState)(null),[g,f]=(0,a.useState)(null),[N,w]=(0,a.useState)({}),C=(0,a.useRef)(null);(0,a.useEffect)((()=>{s&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await l.A.get(`${m}/api/module/${s}?userId=${e}`,{withCredentials:!0});i(t.data)}catch(x){j(x.response?x.response.data:x.message)}finally{p(!1)}}()}),[s]),(0,a.useEffect)((()=>{if(!o||!t)return;const e=o.topics.find((e=>e.topicId===t));e?h(e):j("Topic not found")}),[o,t]);if((0,a.useEffect)((()=>{const e=e=>{C.current&&!C.current.contains(e.target)&&f(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),u)return a.createElement("p",null,"Loading data...");if(x)return a.createElement("p",null,"Error: ",x);const E=["Unseen","Skipped","Solved"],b=E[d?.state??0];return a.createElement("div",{className:n.topicProgress},a.createElement("div",{className:n.label},"Topic Progress:"),a.createElement("div",{className:`${n.stateLabel} ${n[`state-${d?.state??0}`]}`,onClick:e=>{const s=e.target.getBoundingClientRect();w({top:s.bottom+window.scrollY-150,left:s.left+window.scrollX}),f(!g)}},b),g&&a.createElement("div",{className:n.dropdownMenu,ref:C,style:{position:"absolute",top:`${N.top}px`,left:`${N.left}px`}},E.map(((e,r)=>a.createElement("div",{key:r,onClick:()=>(async e=>{h((s=>({...s,state:e})));try{const a=sessionStorage.getItem("userId")||"guest";if(!a)throw new Error("User ID not found in session storage");await l.A.post(`${m}/api/topic/updateState?userId=${a}`,{moduleId:s,topicId:t,newState:e},{withCredentials:!0}),f(null)}catch(a){j("Failed to update state."),h((e=>({...e,state:e.state})))}})(r),className:n.dropdownItem},e)))))}}}]);