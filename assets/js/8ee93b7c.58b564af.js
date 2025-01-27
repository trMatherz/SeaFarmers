"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[681],{41851:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>x,frontMatter:()=>c,metadata:()=>a,moduleId:()=>h,toc:()=>u});const a=JSON.parse('{"id":"solutions/LearnToCode/PizzaParty","title":"PizzaParty","description":"Tags: Loops","source":"@site/docs/solutions/LearnToCode/PizzaParty.mdx","sourceDirName":"solutions/LearnToCode","slug":"/solutions/LearnToCode/PizzaParty","permalink":"/SeaFarmers/docs/solutions/LearnToCode/PizzaParty","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Permutations","permalink":"/SeaFarmers/docs/solutions/LearnToCode/Permutations"},"next":{"title":"PromotionCounting","permalink":"/SeaFarmers/docs/solutions/LearnToCode/PromotionCounting"}}');var t=s(74848),i=s(28453),r=(s(96540),s(42407),s(28092)),o=s(38866),l=s(40426);const c={},m="The Pizza Party Solution",d={},h="LearnToCode",u=[];function p(n){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{moduleId:h}),"\n",(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"the-pizza-party-solution",children:"The Pizza Party Solution"})}),"\n",(0,t.jsx)(e.p,{children:"Tags: Loops"}),"\n",(0,t.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsx)(e.p,{children:"We can simulate this process using a For Loop."}),"\n",(0,t.jsxs)(e.p,{children:["This runs in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,t.jsx)(e.mo,{stretchy:"false",children:"("}),(0,t.jsx)(e.mi,{children:"n"}),(0,t.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(e.span,{className:"mopen",children:"("}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,t.jsx)(o.A,{language:"cpp",style:l.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream>\n#include <algorithm>\nusing namespace std;\n\n\nint main() {\n  int n; cin >> n; \n  for(int i = 0; i < n; i++) {\n      int s, f; cin >> s >> f; \n      int num = s / f; \n      int rem = s % f; \n      cout << "All friends shall get " << num << " slice";\n      if (num != 1) cout << "s"; \n      cout << " and Mark shall get " << rem / 2 << " slice";\n      if (rem / 2 != 1) cout << "s"; \n      cout << " which leaves Jerry with " << (rem + 1) / 2 << " slice";\n      if ((rem + 1) / 2 != 1) cout << "s"; \n      cout << "!\n"; \n  }\n  return 0;\n}\n'})})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}}}]);