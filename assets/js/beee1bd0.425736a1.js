"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4563],{7041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>w,frontMatter:()=>p,metadata:()=>s,moduleId:()=>g,toc:()=>C,topicId:()=>x});const s=JSON.parse('{"id":"modules/Novice/Functions","title":"Functions","description":"Prerequisites: Learn To Code","source":"@site/docs/modules/Novice/Functions.mdx","sourceDirName":"modules/Novice","slug":"/modules/Novice/Functions","permalink":"/SeaFarmers/docs/modules/Novice/Functions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"VectorsAndStrings","permalink":"/SeaFarmers/docs/modules/LearnToCode/VectorsAndStrings"},"next":{"title":"BabySteps","permalink":"/SeaFarmers/docs/solutions/LearnToCode/BabySteps"}}');var a=n(4848),l=n(8453),r=(n(6540),n(2407),n(1955)),o=n(7294),c=n(8235),i=n(5430),m=n(8092),d=(n(3132),n(8866)),u=n(426);const p={},h="Functions",f={},g="Novice",x="Functions",C=[];function E(e){const t={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.A,{moduleId:g}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"functions",children:"Functions"})}),"\n",(0,a.jsx)(t.p,{children:"Prerequisites: Learn To Code"}),"\n",(0,a.jsx)(t.h1,{id:"resources",children:"Resources"}),"\n",(0,a.jsx)(c.A,{moduleId:g,topicId:x}),"\n",(0,a.jsx)(t.h1,{id:"an-introduction-to-functions",children:"An Introduction to Functions"}),"\n",(0,a.jsx)(t.p,{children:'Now that you have some experience solving basic problems, you can learn how to implement more complex ideas. To do this,\nwe can take the tools you have used to solve "mini" problems in a problem. We can solve these, without\ncopy and pasting code by using functions. Here is an example of a program using a basic function:'}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(d.A,{language:"cpp",style:u.A,children:"int count = 0; \nvoid increaseCount() {\n  count++; \n}\n\nint main() {\n  cout << count << endl;\n  increaseCount(); \n  cout << count << endl;\n  increaseCount(); \n  increaseCount(); \n  cout << count << endl;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:'Observe how you can "call" a function - this makes the program stop where it is and run all of the code in the\nfunction.'}),"\n",(0,a.jsx)(t.p,{children:'Not it is also import to explain a variable\'s "localness"'}),"\n",(0,a.jsxs)(t.p,{children:["Take varibes ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"x"}),(0,a.jsx)(t.mo,{separator:"true",children:","}),(0,a.jsx)(t.mi,{children:"y"}),(0,a.jsx)(t.mo,{separator:"true",children:","}),(0,a.jsx)(t.mi,{children:"z"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"x, y, z"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(t.span,{className:"mpunct",children:","}),(0,a.jsx)(t.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(t.span,{className:"mpunct",children:","}),(0,a.jsx)(t.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})})]})," and positions A, B, C:"]}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(d.A,{language:"cpp",style:u.A,children:"int x; \nvoid increaseCount() {\n  // Position A\n}\n\nint main() {\n  int y; \n  // Position B\n  if(6 > 4) {\n      int z; \n      // Position C\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Try to see how ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mi,{children:"x"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"x"})]})})]})," can be used at A, B, and C; ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mi,{children:"y"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})," can be used at B and C; and ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mi,{children:"z"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"z"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})})]})," can only be used at C."]}),"\n",(0,a.jsx)(t.h1,{id:"more-complex-functions",children:"More Complex Functions"}),"\n",(0,a.jsx)(t.p,{children:"But that's not all: Functions can both RECEIVE and RETURN input!"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(d.A,{language:"cpp",style:u.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\n#include <fstream>\n#include <iostream> \n#include <algorithm>\nusing namespace std;\n\n\nbool checkX(int x) {\n  if(x > 5) return true; \n  return false; \n}\n\nint main() {\n  int x = 5; \n  int y = 6; \n  if(checkX(x)) cout << "X is Good!" << endl;\n  else cout << "X is Bad!" << endl;\n  if(checkX(y)) cout << "Y is Good!" << endl;\n  else cout << "Y is Bad!" << endl;\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["For example, if you want a function to determine if a number if greater than ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mn,{children:"5"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"5"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"5"})]})})]}),", you can pass ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mi,{children:"x"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"x"})]})})]})," as a variable\ninto the function and receive a return value from the function."]}),"\n",(0,a.jsx)(t.p,{children:'The return value can be a data type: "int", "long long", "string", "bool" and goes BEFORE the function name.'}),"\n",(0,a.jsx)(t.p,{children:'Note: Use "void" if the funciton doesn\'t return anything.'}),"\n",(0,a.jsx)(t.p,{children:'The parameters of a function (the variables that you "pass to it"), are named IN ORDER inside the () after the\nfunction name. You must give a function all of its parameters in order for it to work.'}),"\n",(0,a.jsx)(t.p,{children:"Last example:"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(d.A,{language:"cpp",style:u.A,children:'bool checkX(int x, string z) {\n  if(z == "CAT") return true; \n  if(x > 5) return true; \n  return false; \n}\n\nint main() {\n  int x = 5; \n  if(checkX(x, "CAT")) cout << "X is Good!" << endl;\n  else cout << "X is Bad!" << endl;\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Observe that the variables are passed into the function in the specified order."}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(d.A,{language:"cpp",style:u.A,children:'string a = "cat"; cout << a << endl; \na = "dog"; cout << a << endl; \n'})}),"\n",(0,a.jsx)(t.h1,{id:"focus-problem",children:"Focus Problem"}),"\n",(0,a.jsx)(o.A,{moduleId:g,topicId:x,location:"sample1"}),"\n",(0,a.jsx)(t.h1,{id:"more-practice",children:"More Practice"}),"\n",(0,a.jsx)(r.A,{moduleId:g,topicId:x,location:"list"}),"\n",(0,a.jsx)(i.A,{moduleId:g,topicId:x})]})}function w(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(E,{...e})}):E(e)}},1955:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(6540),a=n(4335);const l={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=n(4586);const o=e=>{let{moduleId:t,topicId:n,location:o}=e;const{siteConfig:c}=(0,r.A)(),i=c.customFields.backendUrl,[m,d]=(0,s.useState)(null),[u,p]=(0,s.useState)(null),[h,f]=(0,s.useState)(!1),[g,x]=(0,s.useState)(null),[C,E]=(0,s.useState)(null),[w,b]=(0,s.useState)({}),[j,N]=(0,s.useState)(null),[y,k]=(0,s.useState)({}),[v,I]=(0,s.useState)(!1),_=(0,s.useRef)(null),S=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await a.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(n.data)}catch(g){x(g.response?g.response.data:g.message)}finally{f(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!m||!n)return;const e=m.topics.find((e=>e.topicId===n));e?p(e):x("Topic not found")}),[m,n]);const A=async(e,s)=>{const l=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await a.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:n,problemId:l,newState:s},{withCredentials:!0});p((e=>{const t=e.problems.map((e=>e.problemId===l?{...e,state:s}:e));return{...e,problems:t}})),E(null)}catch(g){console.error("Error updating problem state:",g)}};return(0,s.useEffect)((()=>{const e=e=>{_.current&&!_.current.contains(e.target)&&E(null),S.current&&!S.current.contains(e.target)&&N(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),h?s.createElement("p",null,"Loading data..."):g?s.createElement("p",null,"Error: ",g):s.createElement("div",null,u&&u.problems&&s.createElement("table",{className:l.problemTable},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:l.statusColumn}),s.createElement("th",{className:l.sourceColumn},"Source"),s.createElement("th",{className:l.starredColumn}),s.createElement("th",{className:l.problemColumn},"Problem"),s.createElement("th",{className:l.difficultyColumn},"Dif"),s.createElement("th",{className:l.tagsColumn},s.createElement("button",{onClick:()=>I((e=>!e)),className:l.toggleTagsButton},v?"Hide Tags":"Show Tags")),s.createElement("th",{className:l.helpColumn}))),s.createElement("tbody",null,u.problems&&Array.isArray(u.problems)&&u.problems.filter((e=>e.location===o)).map(((e,t)=>e?s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:l.statusCell},s.createElement("span",{className:`${l.stateCircle} ${l[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)E(null),b({});else{const n=t.target.getBoundingClientRect();b({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),E(e)}})(t,e)}),C===t&&s.createElement("div",{ref:_,className:l.dropdownMenu,style:{position:"absolute"}},s.createElement("ul",null,s.createElement("li",{onClick:()=>A(e,2)},"Solved"),s.createElement("li",{onClick:()=>A(e,1)},"Skipped"),s.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),s.createElement("td",{className:l.sourceCell},e.source),s.createElement("td",{className:l.starredCell},e.star?"\u2b50":""),s.createElement("td",{className:l.problemCell},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.problemLink},e.name)),s.createElement("td",{className:l.difficultyCell},e.difficulty),s.createElement("td",{className:l.tagsCell},v&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),s.createElement("td",{className:l.helpCell},s.createElement("span",{className:l.helpButton,onClick:e=>((e,t)=>{if(j===e)N(null),k({});else{const n=t.target.getBoundingClientRect();k({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),N(e)}})(t,e)},"Help"),j===t&&s.createElement("div",{ref:S,className:l.dropdownMenu,style:{position:"absolute"}},s.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>s.createElement("li",{key:t},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.helpLink},e.name)))):s.createElement("li",null,"No Help"))))):null)))))}},8235:(e,t,n)=>{n.d(t,{A:()=>g});var s=n(6540),a=n(4335);const l="resourceTable_ow7w",r="nameColumn_cltC",o="nameCell_dZOO",c="sourceColumn_R2BC",i="sourceCell_NfiE",m="starredColumn_Ycnc",d="starredCell_Cq7S",u="descriptionColumn_X0UP",p="descriptionCell_gbNW",h="resourceLink_QTdW";var f=n(4586);const g=e=>{let{moduleId:t,topicId:n}=e;const{siteConfig:g}=(0,f.A)(),x=g.customFields.backendUrl,[C,E]=(0,s.useState)(null),[w,b]=(0,s.useState)(null),[j,N]=(0,s.useState)(!1),[y,k]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t&&async function(){N(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await a.A.get(`${x}/api/module/${t}?userId=${e}`,{withCredentials:!0});E(n.data)}catch(y){k(y.response?y.response.data:y.message)}finally{N(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!C||!n)return;const e=C.topics.find((e=>e.topicId===n));e?b(e):k("Topic not found")}),[C,n]),j?s.createElement("p",null,"Loading data..."):y?s.createElement("p",null,"Error: ",y):s.createElement("div",null,w&&w.resources&&s.createElement("table",{className:l},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:c},"Resources"),s.createElement("th",{className:m}),s.createElement("th",{className:r}),s.createElement("th",{className:u}))),s.createElement("tbody",null,w.resources.map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:i},e.source),s.createElement("td",{className:d},e.star?"\u2b50":""),s.createElement("td",{className:o},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:h},e.name)),s.createElement("td",{className:p},e.description)))))))}},7294:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(6540),a=n(4335);const l={sampleTable:"sampleTable_FWCi",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=n(4586);const o=e=>{let{moduleId:t,topicId:n,location:o}=e;const{siteConfig:c}=(0,r.A)(),i=c.customFields.backendUrl,[m,d]=(0,s.useState)(null),[u,p]=(0,s.useState)(null),[h,f]=(0,s.useState)(!1),[g,x]=(0,s.useState)(null),[C,E]=(0,s.useState)(null),[w,b]=(0,s.useState)({}),[j,N]=(0,s.useState)(null),[y,k]=(0,s.useState)({}),[v,I]=(0,s.useState)(!1),_=(0,s.useRef)(null),S=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){f(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await a.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(n.data)}catch(g){x(g.response?g.response.data:g.message)}finally{f(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!m||!n)return;const e=m.topics.find((e=>e.topicId===n));e?p(e):x("Topic not found")}),[m,n]),(0,s.useEffect)((()=>{const e=e=>{_.current&&!_.current.contains(e.target)&&E(null),S.current&&!S.current.contains(e.target)&&N(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const A=async(e,s)=>{const l=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await a.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:n,problemId:l,newState:s},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===l?{...e,state:s}:e));return{...e,problems:t}})),E(null)}catch(g){console.error("Error updating problem state:",g)}};return h?s.createElement("p",null,"Loading data..."):g?s.createElement("p",null,"Error: ",g):s.createElement("div",null,u?.problems?.length>0?s.createElement("table",{className:l.sampleTable},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:l.statusColumn}),s.createElement("th",{className:l.sourceColumn},"Source"),s.createElement("th",{className:l.starredColumn}),s.createElement("th",{className:l.problemColumn},"Problem"),s.createElement("th",{className:l.difficultyColumn},"Dif"),s.createElement("th",{className:l.tagsColumn},s.createElement("button",{onClick:()=>I((e=>!e)),className:l.toggleTagsButton},v?"Hide Tags":"Show Tags")),s.createElement("th",{className:l.helpColumn}))),s.createElement("tbody",null,u.problems.filter((e=>e.location===o)).map(((e,t)=>s.createElement("tr",{key:e.uniqueId||t},s.createElement("td",{className:l.statusCell},s.createElement("span",{className:`${l.stateCircle} ${l[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)E(null),b({});else{const n=t.target.getBoundingClientRect();b({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),E(e)}})(t,e)}),C===t&&s.createElement("div",{className:l.dropdownMenu,ref:_,style:{position:"absolute"}},s.createElement("ul",null,s.createElement("li",{onClick:()=>A(e,2)},"Solved"),s.createElement("li",{onClick:()=>A(e,1)},"Skipped"),s.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),s.createElement("td",{className:l.sourceCell},e.source),s.createElement("td",{className:l.starredCell},e.star?"\u2b50":""),s.createElement("td",{className:l.problemCell},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.problemLink},e.name)),s.createElement("td",{className:l.difficultyCell},e.difficulty||"Unknown"),s.createElement("td",{className:l.tagsCell},v&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),s.createElement("td",{className:l.helpCell},s.createElement("span",{className:l.helpButton,onClick:e=>((e,t)=>{if(j===e)N(null),k({});else{const n=t.target.getBoundingClientRect();k({top:n.bottom+window.scrollY,left:n.left+window.scrollX}),N(e)}})(t,e)},"Help"),j===t&&s.createElement("div",{className:l.dropdownMenu,ref:S,style:{position:"absolute"}},s.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>s.createElement("li",{key:t},s.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.helpLink},e.name)))):s.createElement("li",null,"No Help"))))))))):s.createElement("p",null,"No problems data available."))}},3132:(e,t,n)=>{n(6540)},5430:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(6540),a=n(4335);const l={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=n(4586);const o=e=>{let{moduleId:t,topicId:n}=e;const{siteConfig:o}=(0,r.A)(),c=o.customFields.backendUrl,[i,m]=(0,s.useState)(null),[d,u]=(0,s.useState)(null),[p,h]=(0,s.useState)(!0),[f,g]=(0,s.useState)(null),[x,C]=(0,s.useState)(null),[E,w]=(0,s.useState)({}),b=(0,s.useRef)(null);(0,s.useEffect)((()=>{t&&async function(){h(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const n=await a.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(n.data)}catch(f){g(f.response?f.response.data:f.message)}finally{h(!1)}}()}),[t]),(0,s.useEffect)((()=>{if(!i||!n)return;const e=i.topics.find((e=>e.topicId===n));e?u(e):g("Topic not found")}),[i,n]);if((0,s.useEffect)((()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&C(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return s.createElement("p",null,"Loading data...");if(f)return s.createElement("p",null,"Error: ",f);const j=["Unseen","Skipped","Solved"],N=j[d?.state??0];return s.createElement("div",{className:l.topicProgress},s.createElement("div",{className:l.label},"Topic Progress:"),s.createElement("div",{className:`${l.stateLabel} ${l[`state-${d?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();w({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),C(!x)}},N),x&&s.createElement("div",{className:l.dropdownMenu,ref:b,style:{position:"absolute",top:`${E.top}px`,left:`${E.left}px`}},j.map(((e,r)=>s.createElement("div",{key:r,onClick:()=>(async e=>{u((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await a.A.post(`${c}/api/topic/updateState?userId=${s}`,{moduleId:t,topicId:n,newState:e},{withCredentials:!0}),C(null)}catch(s){g("Failed to update state."),u((e=>({...e,state:e.state})))}})(r),className:l.dropdownItem},e)))))}}}]);