"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4668],{1701:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>m,metadata:()=>a,moduleName:()=>d,toc:()=>u});const a=JSON.parse('{"id":"solutions/LearnToCode/KingsDilemma","title":"KingsDilemma","description":"Tags: Vectors, Stack","source":"@site/docs/solutions/LearnToCode/KingsDilemma.mdx","sourceDirName":"solutions/LearnToCode","slug":"/solutions/LearnToCode/KingsDilemma","permalink":"/SeaFarmers/docs/solutions/LearnToCode/KingsDilemma","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"IncreasingArray","permalink":"/SeaFarmers/docs/solutions/LearnToCode/IncreasingArray"},"next":{"title":"LostCow","permalink":"/SeaFarmers/docs/solutions/LearnToCode/LostCow"}}');var i=s(4848),t=s(8453),l=(s(6540),s(2407),s(8092)),r=s(8866),o=s(426);const m={},c="The King's Dilemma Solution",h={},d="LearnToCode",u=[];function p(n){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{moduleName:d}),"\n",(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"the-kings-dilemma-solution",children:"The King's Dilemma Solution"})}),"\n",(0,i.jsx)(e.p,{children:"Tags: Vectors, Stack"}),"\n",(0,i.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsx)(e.p,{children:"Maintain a current list of all urchins."}),"\n",(0,i.jsxs)(e.p,{children:["Maintain ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"m"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"sum"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," to check if it is possible to fufull the request."]}),"\n",(0,i.jsx)(e.p,{children:"If it is, remove all urchins until the sum of the removed urchins exceed the required amount."}),"\n",(0,i.jsxs)(e.p,{children:["This runs in ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,i.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(r.A,{language:"cpp",style:o.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream>\n#include <algorithm>\nusing namespace std;\n\n\nint main() {\n  int n, q; cin >> n >> q;\n  long long sum = 0; \n  vector<long long> pile(n); \n  for(int i = 0; i < n; i++) {\n      cin >> pile[i]; \n      sum += pile[i]; \n  }\n  while(q--) {\n      long long a, w; cin >> a >> w; \n      if(a == 1) {\n          pile.push_back(w);\n          sum += w; \n      }\n      else {\n          if(sum < w) cout << "We don\'t have enough urchins!" << endl; \n          else {\n              long long amount = 0; \n              while(amount < w) { // it is guranteed that the pile will not be empty while this is true\n                  amount += pile.back(); // or pile[pile.size() - 1]; \n                  sum -= pile.back(); \n                  pile.pop_back(); \n              }\n              cout << "Here\'s " << amount << " in urchins." << endl; \n          }\n      }\n  }\n  return 0;\n}\n'})})]})}function x(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}}}]);