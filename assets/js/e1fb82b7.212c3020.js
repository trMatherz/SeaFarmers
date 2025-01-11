"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1930],{3324:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>m,default:()=>x,frontMatter:()=>c,metadata:()=>a,moduleName:()=>h,toc:()=>u});const a=JSON.parse('{"id":"solutions/TVS2025/PNF-403","title":"PNF-403","description":"Tags: Simulation","source":"@site/docs/solutions/TVS2025/PNF-403.mdx","sourceDirName":"solutions/TVS2025","slug":"/solutions/TVS2025/PNF-403","permalink":"/SeaFarmers/docs/solutions/TVS2025/PNF-403","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"NowTHATsASuit","permalink":"/SeaFarmers/docs/solutions/TVS2025/NowTHATsASuit"},"next":{"title":"ThomasJCrook","permalink":"/SeaFarmers/docs/solutions/TVS2025/ThomasJCrook"}}');var t=e(4848),i=e(8453),r=(e(6540),e(2407),e(8092)),o=e(8866),l=e(426);const c={},m="PNF-403 Solution",d={},h="LearnToCode",u=[];function p(n){const s={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{moduleName:h}),"\n",(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"pnf-403-solution",children:"PNF-403 Solution"})}),"\n",(0,t.jsx)(s.p,{children:"Tags: Simulation"}),"\n",(0,t.jsx)(s.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsx)(s.p,{children:"This is a simulation problem, so all you have to do is translate the problem into code form. You can do this\nwith If-Statements and variables, but I used a map to simplify."}),"\n",(0,t.jsxs)(s.p,{children:["Regardless, the solution runs in ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsx)(s.h1,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,t.jsx)(o.A,{language:"cpp",style:l.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream> \n#include <algorithm>\n#include <map>\nusing namespace std;\n\n\nint main() {\n  int n; \n  cin >> n; \n  map<char, long long> cur; \n  for(int i = 0; i < n; i++) {\n      int k; \n      cin >> k; \n      for(int j = 0; j < k; j++) {\n          string w; long long x; char y; \n          cin >> w >> x >> y; \n          if(w == "Grow") cur[y] += x; \n          else if(w == "Die") cur[y] -= x; \n          else {\n              char z; \n              cin >> z; \n              cur[y] -= x; \n              cur[z] += x; \n          }\n      }\n      cout << cur[\'R\'] << " " << \'R\' << " ";\n      cout << cur[\'B\'] << " " << \'B\' << " ";\n      cout << cur[\'P\'] << " " << \'P\' << endl; \n  }\n}\n'})})]})}function x(n={}){const{wrapper:s}={...(0,i.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}}}]);