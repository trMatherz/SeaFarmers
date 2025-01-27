"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9957],{69523:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>t,moduleId:()=>m,toc:()=>p});const t=JSON.parse('{"id":"solutions/LearnToCode/LostCow","title":"LostCow","description":"Tags: Loops","source":"@site/docs/solutions/LearnToCode/LostCow.mdx","sourceDirName":"solutions/LearnToCode","slug":"/solutions/LearnToCode/LostCow","permalink":"/SeaFarmers/docs/solutions/LearnToCode/LostCow","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"KingsDilemma","permalink":"/SeaFarmers/docs/solutions/LearnToCode/KingsDilemma"},"next":{"title":"MaximumDistance","permalink":"/SeaFarmers/docs/solutions/LearnToCode/MaximumDistance"}}');var a=s(74848),i=s(28453),o=(s(96540),s(42407),s(28092)),r=s(38866),d=s(40426);const l={},c="The Lost Cow Solution",h={},m="LearnToCode",p=[];function u(e){const n={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{moduleId:m}),"\n",(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"the-lost-cow-solution",children:"The Lost Cow Solution"})}),"\n",(0,a.jsx)(n.p,{children:"Tags: Loops"}),"\n",(0,a.jsx)(n.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,a.jsx)(n.p,{children:"The answer to the problem in the distance between the starting and ending location plus the amount of times Bessie\ncomes back to her inital point."}),"\n",(0,a.jsx)(n.p,{children:"We can make an observation: if the ending point is to the right of the starting point, she will always have to move\nright to get there. This means we can ignore her leftward movement. The same can be said fot the other case. For\nsimplicity, the code treats these cases distinctly."}),"\n",(0,a.jsxs)(n.p,{children:["This runs in ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{mathvariant:"script",children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(n.h1,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(r.A,{language:"cpp",style:d.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\nstd::ifstream cin ("lostcow.in");\nstd::ofstream cout ("lostcow.out");\n#include <algorithm>\nusing namespace std;\n\n\nint main() {\n  int start, end; \n  cin >> start >> end;\n  if(start <= end) { // Direction is always right\n      int t = 0; \n      for(int dis = 1; start + dis < end; dis *= 4) { // Stops when she would reach the target\n          t += dis * 2; // Adds trip to the right and back\n          t += (dis * 2) * 2; // Adds trip to the left and back\n      }\n      cout << t + end - start; \n  } else {\n      int t = 2; \n      for(int dis = 2; start - dis > end; dis *= 4) {\n          t += dis * 2; \n          t += (dis * 2) * 2; \n      }\n      cout << t + start - end; \n  }\n}\n'})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);