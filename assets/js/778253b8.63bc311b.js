"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[221],{5021:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>c,metadata:()=>i,moduleName:()=>h,toc:()=>p});const i=JSON.parse('{"id":"solutions/TVS2025/LegendOfTheRoom","title":"LegendOfTheRoom","description":"Prerequisites: Complete Search","source":"@site/docs/solutions/TVS2025/LegendOfTheRoom.mdx","sourceDirName":"solutions/TVS2025","slug":"/solutions/TVS2025/LegendOfTheRoom","permalink":"/SeaFarmers/docs/solutions/TVS2025/LegendOfTheRoom","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"MimickingJerry","permalink":"/SeaFarmers/docs/solutions/LearnToCode/MimickingJerry"},"next":{"title":"PNF-403","permalink":"/SeaFarmers/docs/solutions/TVS2025/PNF-403"}}');var a=s(4848),t=s(8453),o=(s(6540),s(2407),s(8092)),r=s(8866),l=s(426);const c={},m="The Legend Of The Room Solution",d={},h="LearnToCode",p=[];function x(n){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{moduleName:h}),"\n",(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"the-legend-of-the-room-solution",children:"The Legend Of The Room Solution"})}),"\n",(0,a.jsx)(e.p,{children:"Prerequisites: Complete Search"}),"\n",(0,a.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,a.jsx)(e.p,{children:"This problem asks how count the number of ways something can be done: it is a complete search problem. This can be\ndone naively with a boolean array and simulating the entire process with recursion."}),"\n",(0,a.jsxs)(e.p,{children:["This has a upper-bound time of ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(A^n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," with noticable constant time."]}),"\n",(0,a.jsx)(e.h1,{id:"naive-implementation",children:"Naive Implementation"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(r.A,{language:"cpp",style:l.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream> \n#include <algorithm>\n#include <map>\nusing namespace std;\n\n\nint w, l, n; \nvector<pair<int, int>> a; \nlong long go(int x, vector<vector<bool>> y) {\n  if(x == n) return 1; \n  long long ret = 0; \n  for(int i = 0; i <= w - a[x].first; i++) {\n      for(int j = 0; j <= l - a[x].second; j++) {\n          vector<vector<bool>> ny = y; \n          bool bad = false; \n          for(int k = 0; k < a[x].first; k++) {\n              for(int p = 0; p < a[x].second; p++) {\n                  int xpos = i + k; \n                  int ypos = j + p; \n                  if(y[xpos][ypos]) bad = true; \n                  ny[xpos][ypos] = true; \n              }\n          }\n          if(!bad) ret += go(x + 1, ny); \n      }\n  }\n  return ret; \n}\nint main() {\n  cin >> w >> l >> n; \n  a = vector<pair<int, int>>(n); \n  for(auto &u : a) cin >> u.first >> u.second; \n  cout << go(0, vector<vector<bool>>(w, vector<bool>(l, false))); \n}\n"})}),"\n",(0,a.jsx)(e.h1,{id:"optional-optimization",children:"Optional Optimization"}),"\n",(0,a.jsx)(e.p,{children:"You make the array global and merely modify it OR"}),"\n",(0,a.jsxs)(e.p,{children:["You can replace the boolean array with an integer since ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"A"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"A"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"})]})})]})," is small. This removes a lot of constant time."]}),"\n",(0,a.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(r.A,{language:"cpp",style:l.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream> \n#include <algorithm>\n#include <map>\nusing namespace std;\n\n\nint w, l, n; \nvector<pair<int, int>> a; \nlong long go(int x, int y) {\n  if(x == n) return 1; \n  long long ret = 0; \n  for(int i = 0; i <= w - a[x].first; i++) {\n      for(int j = 0; j <= l - a[x].second; j++) {\n          int ny = y; \n          bool bad = false; \n          for(int k = 0; k < a[x].first; k++) {\n              for(int p = 0; p < a[x].second; p++) {\n                  int xpos = i + k; \n                  int ypos = j + p; \n                  if(y & (1 << (xpos * l + ypos))) bad = true; \n                  ny += (1 << (xpos * l + ypos)); \n              }\n          }\n          if(!bad) ret += go(x + 1, ny); \n      }\n  }\n  return ret; \n}\nint main() {\n  cin >> w >> l >> n; \n  a = vector<pair<int, int>>(n); \n  for(auto &u : a) cin >> u.first >> u.second; \n  cout << go(0, 0); \n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(x,{...n})}):x(n)}}}]);