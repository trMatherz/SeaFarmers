"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[909],{7195:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>h,default:()=>p,frontMatter:()=>m,metadata:()=>a,moduleName:()=>d,toc:()=>x});const a=JSON.parse('{"id":"solutions/TVS2025/ToEatOrNotToEat","title":"ToEatOrNotToEat","description":"Tags: Greedy, Simulation","source":"@site/docs/solutions/TVS2025/ToEatOrNotToEat.mdx","sourceDirName":"solutions/TVS2025","slug":"/solutions/TVS2025/ToEatOrNotToEat","permalink":"/SeaFarmers/docs/solutions/TVS2025/ToEatOrNotToEat","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"PNF-403","permalink":"/SeaFarmers/docs/solutions/TVS2025/PNF-403"}}');var t=e(4848),i=e(8453),l=(e(6540),e(2407),e(8092)),r=e(8866),c=e(426);const m={},h="To Eat Or Not To Eat Solution",o={},d="LearnToCode",x=[];function j(s){const n={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{moduleName:d}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"to-eat-or-not-to-eat-solution",children:"To Eat Or Not To Eat Solution"})}),"\n",(0,t.jsx)(n.p,{children:"Tags: Greedy, Simulation"}),"\n",(0,t.jsx)(n.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsxs)(n.p,{children:["We maintain ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"b"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"["}),(0,t.jsx)(n.mi,{children:"f"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"bes[f]"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"es"}),(0,t.jsx)(n.span,{className:"mopen",children:"["}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," where ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"f"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"f"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"})]})})]})," is the set of colors, for each set of colors."]}),"\n",(0,t.jsxs)(n.p,{children:["There are ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"3"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"3"})]})})]})," things that can happen:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"1"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"1"})]})})]})," We can eat the food"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"2"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"2"})]})})]})," We can go to dinner"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"3"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"3"})]})})]})," We can spit out any food"]}),"\n",(0,t.jsxs)(n.p,{children:["This runs in ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{mathvariant:"script",children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,t.jsx)(n.h1,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,t.jsx)(r.A,{language:"cpp",style:c.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n// #include <iostream> \n#include <fstream>\nstd::ifstream cin ("case8.txt");\nstd::ofstream cout ("out8.txt");\n#include <algorithm>\n#include <map>\nusing namespace std;\n\nmap<string, int> food = {{"Red", 0}, {"Blue", 1}, {"Yellow", 2}};\nlong long const inf = (long long) 1e18 + 7; \nint main() {\n  vector<long long> bes(8, -inf); \n  bes[0] = 0; \n  int n; \n  cin >> n; \n  for(int i = 0; i < n; i++) {\n      string f; \n      cin >> f; \n      if(food.count(f)) {\n          for(int j = 0; j < 8; j++) \n              bes[j | (1 << food[f])] = max(bes[j | (1 << food[f])], bes[j]);\n      }\n      long long r, c; \n      cin >> r >> c; \n      int cur = 0; \n      for(int i = 0; i < r; i++) {\n          string x; \n          cin >> x; \n          cur |= (1 << food[x]); \n      }\n      bes[cur] += c; \n      for(int j = 0; j < 8; j++) {\n          bes[j] = max(bes[j], bes[j | cur]); \n      }\n  }\n  cout << bes[0]; \n}\n'})})]})}function p(s={}){const{wrapper:n}={...(0,i.R)(),...s.components};return n?(0,t.jsx)(n,{...s,children:(0,t.jsx)(j,{...s})}):j(s)}}}]);