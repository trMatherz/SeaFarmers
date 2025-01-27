"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1809],{71158:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>E,frontMatter:()=>u,metadata:()=>n,moduleId:()=>g,toc:()=>x,topicId:()=>f});const n=JSON.parse('{"id":"modules/LearnToCode/VectorsAndStrings","title":"VectorsAndStrings","description":"Prerequisites: Iteration","source":"@site/docs/modules/LearnToCode/VectorsAndStrings.mdx","sourceDirName":"modules/LearnToCode","slug":"/modules/LearnToCode/VectorsAndStrings","permalink":"/SeaFarmers/docs/modules/LearnToCode/VectorsAndStrings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"UsefulTricks","permalink":"/SeaFarmers/docs/modules/LearnToCode/UsefulTricks"},"next":{"title":"BasicSorting","permalink":"/SeaFarmers/docs/modules/Novice/BasicSorting"}}');var a=s(74848),l=s(28453),r=(s(96540),s(42407),s(41955)),o=s(47294),c=(s(38235),s(95430)),i=s(28092),m=(s(13132),s(38866)),d=s(40426);const u={},p="Vectors",h={},g="LearnToCode",f="VectorsAndStrings",x=[];function C(e){const t={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{moduleId:g}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"vectors",children:"Vectors"})}),"\n",(0,a.jsx)(t.p,{children:"Prerequisites: Iteration"}),"\n",(0,a.jsx)(t.p,{children:"Note: Vectors are really the last major thing you have to know before the problems start to get harder.\nThere is a spike in difficulty starting with these problems, so don't get discouraged!"}),"\n",(0,a.jsx)(t.h1,{id:"strings",children:"Strings"}),"\n",(0,a.jsx)(t.p,{children:"There is actually more to strings then simply assigning them to variables. This is mainly important because it\nis a little easier to understand conceptually than a vector at first."}),"\n",(0,a.jsx)(t.p,{children:"So just how we know that words are made up of different characters, computes know that strings are made up of a char."}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(m.A,{language:"cpp",style:d.A,children:"char a = 'd'; \n"})}),"\n",(0,a.jsx)(t.p,{children:"Note: They use a single quote instead of a double quote like a string."}),"\n",(0,a.jsxs)(t.p,{children:['So if we have a string and want to get the individual characters, we can do that! All we have to do is put the indice\n(or position) from the beginng in "[]". Accessing elements works in ',(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{mathvariant:"script",children:"O"}),(0,a.jsx)(t.mo,{stretchy:"false",children:"("}),(0,a.jsx)(t.mn,{children:"1"}),(0,a.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(1)"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(t.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(t.span,{className:"mopen",children:"("}),(0,a.jsx)(t.span,{className:"mord",children:"1"}),(0,a.jsx)(t.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Note: Indices are zero-index meaning that the first is ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mn,{children:"0"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"0"})]})})]}),", second is ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mn,{children:"1"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"1"})]})})]})," and so on."]}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(m.A,{language:"cpp",style:d.A,children:'string a = "cat"; \ncout << a[0] << " " << a[1] << " " << a[2] << endl;\n'})}),"\n",(0,a.jsx)(t.h1,{id:"vectors-1",children:"Vectors"}),"\n",(0,a.jsx)(t.p,{children:"In the same way a string is a list of char, a vector is list except it can be a vist of anything including:\nstrings, ints, long longs, and even other vectors."}),"\n",(0,a.jsx)(t.p,{children:"The syntax is a little differnt since you have to specify the type of vector, but the indices work the same."}),"\n",(0,a.jsxs)(t.p,{children:['To decare a vector, use "','" to surround the list and commas to separate the list.\nAccessing elements works in ',(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{mathvariant:"script",children:"O"}),(0,a.jsx)(t.mo,{stretchy:"false",children:"("}),(0,a.jsx)(t.mn,{children:"1"}),(0,a.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(1)"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(t.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(t.span,{className:"mopen",children:"("}),(0,a.jsx)(t.span,{className:"mord",children:"1"}),(0,a.jsx)(t.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(m.A,{language:"cpp",style:d.A,children:'vector<int> a = {1, 2, 3, 4}; \ncout << a[0] << " " << a[1] << " " << a[2] << " " << a[3] << endl;\n'})}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, you can do this:"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(m.A,{language:"cpp",style:d.A,children:"vector<int> a(4, 3); // (number of elements, value)\nvector<int> b = {3, 3, 3, 3}; \n"})}),"\n",(0,a.jsxs)(t.p,{children:["Vectors also have one more crucial ability. Their size is dynamic! This means you can add elements to the back\nof the vector in ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{mathvariant:"script",children:"O"}),(0,a.jsx)(t.mo,{stretchy:"false",children:"("}),(0,a.jsx)(t.mn,{children:"1"}),(0,a.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(1)"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(t.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(t.span,{className:"mopen",children:"("}),(0,a.jsx)(t.span,{className:"mord",children:"1"}),(0,a.jsx)(t.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(t.p,{children:"To get the size of a vector (or string) you can do this:"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(m.A,{language:"cpp",style:d.A,children:"vector<int> a(4, 3);\ncout << a.size() << endl; // size is 4 and a = {3, 3, 3, 3}; \na.pop_back(); \ncout << a.size() << endl; // size is 3 and a = {3, 3, 3}; \na.push_back(4); \ncout << a.size() << endl; // size is 4 and a = {3, 3, 3, 4}; \n"})}),"\n",(0,a.jsx)(t.h1,{id:"traversing-an-array",children:"Traversing an Array"}),"\n",(0,a.jsx)(t.p,{children:"Here's where things get interesting! Instead of manually accessing indices, you can use loops."}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(m.A,{language:"cpp",style:d.A,children:'vector<string> a(10, "cat");\nfor(int i = 0; i < a.size(); i++) {\ncout << a[i] << " "; \n}\n'})}),"\n",(0,a.jsx)(t.h1,{id:"focus-problem",children:"Focus Problem"}),"\n",(0,a.jsx)(o.A,{moduleId:g,topicId:f,location:"sample1"}),"\n",(0,a.jsx)(t.h1,{id:"more-practice",children:"More Practice"}),"\n",(0,a.jsx)(r.A,{moduleId:g,topicId:f,location:"list"}),"\n",(0,a.jsx)(c.A,{moduleId:g,topicId:f})]})}function E(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(C,{...e})}):C(e)}},41955:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(96540),a=s(94335);const l={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=s(44586);const o=e=>{let{moduleId:t,topicId:s,location:o}=e;const{siteConfig:c}=(0,r.A)(),i=c.customFields.backendUrl,[m,d]=(0,n.useState)(null),[u,p]=(0,n.useState)(null),[h,g]=(0,n.useState)(!1),[f,x]=(0,n.useState)(null),[C,E]=(0,n.useState)(null),[w,j]=(0,n.useState)({}),[b,N]=(0,n.useState)(null),[y,k]=(0,n.useState)({}),[v,_]=(0,n.useState)(!1),I=(0,n.useRef)(null),S=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){g(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(s.data)}catch(f){x(f.response?f.response.data:f.message)}finally{g(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!m||!s)return;const e=m.topics.find((e=>e.topicId===s));e?p(e):x("Topic not found")}),[m,s]);const A=async(e,n)=>{const l=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await a.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:s,problemId:l,newState:n},{withCredentials:!0});p((e=>{const t=e.problems.map((e=>e.problemId===l?{...e,state:n}:e));return{...e,problems:t}})),E(null)}catch(f){console.error("Error updating problem state:",f)}};return(0,n.useEffect)((()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&E(null),S.current&&!S.current.contains(e.target)&&N(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),h?n.createElement("p",null,"Loading data..."):f?n.createElement("p",null,"Error: ",f):n.createElement("div",null,u&&u.problems&&n.createElement("table",{className:l.problemTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:l.statusColumn}),n.createElement("th",{className:l.sourceColumn},"Source"),n.createElement("th",{className:l.starredColumn}),n.createElement("th",{className:l.problemColumn},"Problem"),n.createElement("th",{className:l.difficultyColumn},"Dif"),n.createElement("th",{className:l.tagsColumn},n.createElement("button",{onClick:()=>_((e=>!e)),className:l.toggleTagsButton},v?"Hide Tags":"Show Tags")),n.createElement("th",{className:l.helpColumn}))),n.createElement("tbody",null,u.problems&&Array.isArray(u.problems)&&u.problems.filter((e=>e.location===o)).map(((e,t)=>e?n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:l.statusCell},n.createElement("span",{className:`${l.stateCircle} ${l[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)E(null),j({});else{const s=t.target.getBoundingClientRect();j({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),E(e)}})(t,e)}),C===t&&n.createElement("div",{ref:I,className:l.dropdownMenu,style:{position:"absolute"}},n.createElement("ul",null,n.createElement("li",{onClick:()=>A(e,2)},"Solved"),n.createElement("li",{onClick:()=>A(e,1)},"Skipped"),n.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),n.createElement("td",{className:l.sourceCell},e.source),n.createElement("td",{className:l.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:l.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.problemLink},e.name)),n.createElement("td",{className:l.difficultyCell},e.difficulty),n.createElement("td",{className:l.tagsCell},v&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),n.createElement("td",{className:l.helpCell},n.createElement("span",{className:l.helpButton,onClick:e=>((e,t)=>{if(b===e)N(null),k({});else{const s=t.target.getBoundingClientRect();k({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),N(e)}})(t,e)},"Help"),b===t&&n.createElement("div",{ref:S,className:l.dropdownMenu,style:{position:"absolute"}},n.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>n.createElement("li",{key:t},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.helpLink},e.name)))):n.createElement("li",null,"No Help"))))):null)))))}},38235:(e,t,s)=>{s.d(t,{A:()=>f});var n=s(96540),a=s(94335);const l="resourceTable_ow7w",r="nameColumn_cltC",o="nameCell_dZOO",c="sourceColumn_R2BC",i="sourceCell_NfiE",m="starredColumn_Ycnc",d="starredCell_Cq7S",u="descriptionColumn_X0UP",p="descriptionCell_gbNW",h="resourceLink_QTdW";var g=s(44586);const f=e=>{let{moduleId:t,topicId:s}=e;const{siteConfig:f}=(0,g.A)(),x=f.customFields.backendUrl,[C,E]=(0,n.useState)(null),[w,j]=(0,n.useState)(null),[b,N]=(0,n.useState)(!1),[y,k]=(0,n.useState)(null);return(0,n.useEffect)((()=>{t&&async function(){N(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${x}/api/module/${t}?userId=${e}`,{withCredentials:!0});E(s.data)}catch(y){k(y.response?y.response.data:y.message)}finally{N(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!C||!s)return;const e=C.topics.find((e=>e.topicId===s));e?j(e):k("Topic not found")}),[C,s]),b?n.createElement("p",null,"Loading data..."):y?n.createElement("p",null,"Error: ",y):n.createElement("div",null,w&&w.resources&&n.createElement("table",{className:l},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:c},"Resources"),n.createElement("th",{className:m}),n.createElement("th",{className:r}),n.createElement("th",{className:u}))),n.createElement("tbody",null,w.resources.map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:i},e.source),n.createElement("td",{className:d},e.star?"\u2b50":""),n.createElement("td",{className:o},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:h},e.name)),n.createElement("td",{className:p},e.description)))))))}},47294:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(96540),a=s(94335);const l={sampleTable:"sampleTable_FWCi",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=s(44586);const o=e=>{let{moduleId:t,topicId:s,location:o}=e;const{siteConfig:c}=(0,r.A)(),i=c.customFields.backendUrl,[m,d]=(0,n.useState)(null),[u,p]=(0,n.useState)(null),[h,g]=(0,n.useState)(!1),[f,x]=(0,n.useState)(null),[C,E]=(0,n.useState)(null),[w,j]=(0,n.useState)({}),[b,N]=(0,n.useState)(null),[y,k]=(0,n.useState)({}),[v,_]=(0,n.useState)(!1),I=(0,n.useRef)(null),S=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){g(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});d(s.data)}catch(f){x(f.response?f.response.data:f.message)}finally{g(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!m||!s)return;const e=m.topics.find((e=>e.topicId===s));e?p(e):x("Topic not found")}),[m,s]),(0,n.useEffect)((()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&E(null),S.current&&!S.current.contains(e.target)&&N(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const A=async(e,n)=>{const l=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await a.A.post(`${i}/api/problem/updateState?userId=${e}`,{moduleId:t,topicId:s,problemId:l,newState:n},{withCredentials:!0}),p((e=>{const t=e.problems.map((e=>e.problemId===l?{...e,state:n}:e));return{...e,problems:t}})),E(null)}catch(f){console.error("Error updating problem state:",f)}};return h?n.createElement("p",null,"Loading data..."):f?n.createElement("p",null,"Error: ",f):n.createElement("div",null,u?.problems?.length>0?n.createElement("table",{className:l.sampleTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:l.statusColumn}),n.createElement("th",{className:l.sourceColumn},"Source"),n.createElement("th",{className:l.starredColumn}),n.createElement("th",{className:l.problemColumn},"Problem"),n.createElement("th",{className:l.difficultyColumn},"Dif"),n.createElement("th",{className:l.tagsColumn},n.createElement("button",{onClick:()=>_((e=>!e)),className:l.toggleTagsButton},v?"Hide Tags":"Show Tags")),n.createElement("th",{className:l.helpColumn}))),n.createElement("tbody",null,u.problems.filter((e=>e.location===o)).map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:l.statusCell},n.createElement("span",{className:`${l.stateCircle} ${l[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(C===e)E(null),j({});else{const s=t.target.getBoundingClientRect();j({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),E(e)}})(t,e)}),C===t&&n.createElement("div",{className:l.dropdownMenu,ref:I,style:{position:"absolute"}},n.createElement("ul",null,n.createElement("li",{onClick:()=>A(e,2)},"Solved"),n.createElement("li",{onClick:()=>A(e,1)},"Skipped"),n.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),n.createElement("td",{className:l.sourceCell},e.source),n.createElement("td",{className:l.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:l.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.problemLink},e.name)),n.createElement("td",{className:l.difficultyCell},e.difficulty||"Unknown"),n.createElement("td",{className:l.tagsCell},v&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),n.createElement("td",{className:l.helpCell},n.createElement("span",{className:l.helpButton,onClick:e=>((e,t)=>{if(b===e)N(null),k({});else{const s=t.target.getBoundingClientRect();k({top:s.bottom+window.scrollY,left:s.left+window.scrollX}),N(e)}})(t,e)},"Help"),b===t&&n.createElement("div",{className:l.dropdownMenu,ref:S,style:{position:"absolute"}},n.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>n.createElement("li",{key:t},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:l.helpLink},e.name)))):n.createElement("li",null,"No Help"))))))))):n.createElement("p",null,"No problems data available."))}},13132:(e,t,s)=>{s(96540)},95430:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(96540),a=s(94335);const l={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=s(44586);const o=e=>{let{moduleId:t,topicId:s}=e;const{siteConfig:o}=(0,r.A)(),c=o.customFields.backendUrl,[i,m]=(0,n.useState)(null),[d,u]=(0,n.useState)(null),[p,h]=(0,n.useState)(!0),[g,f]=(0,n.useState)(null),[x,C]=(0,n.useState)(null),[E,w]=(0,n.useState)({}),j=(0,n.useRef)(null);(0,n.useEffect)((()=>{t&&async function(){h(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const s=await a.A.get(`${c}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(s.data)}catch(g){f(g.response?g.response.data:g.message)}finally{h(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!i||!s)return;const e=i.topics.find((e=>e.topicId===s));e?u(e):f("Topic not found")}),[i,s]);if((0,n.useEffect)((()=>{const e=e=>{j.current&&!j.current.contains(e.target)&&C(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return n.createElement("p",null,"Loading data...");if(g)return n.createElement("p",null,"Error: ",g);const b=["Unseen","Skipped","Solved"],N=b[d?.state??0];return n.createElement("div",{className:l.topicProgress},n.createElement("div",{className:l.label},"Topic Progress:"),n.createElement("div",{className:`${l.stateLabel} ${l[`state-${d?.state??0}`]}`,onClick:e=>{const t=e.target.getBoundingClientRect();w({top:t.bottom+window.scrollY-150,left:t.left+window.scrollX}),C(!x)}},N),x&&n.createElement("div",{className:l.dropdownMenu,ref:j,style:{position:"absolute",top:`${E.top}px`,left:`${E.left}px`}},b.map(((e,r)=>n.createElement("div",{key:r,onClick:()=>(async e=>{u((t=>({...t,state:e})));try{const n=sessionStorage.getItem("userId")||"guest";if(!n)throw new Error("User ID not found in session storage");await a.A.post(`${c}/api/topic/updateState?userId=${n}`,{moduleId:t,topicId:s,newState:e},{withCredentials:!0}),C(null)}catch(n){f("Failed to update state."),u((e=>({...e,state:e.state})))}})(r),className:l.dropdownItem},e)))))}}}]);