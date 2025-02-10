"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1339],{50308:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>h,contentTitle:()=>m,default:()=>x,frontMatter:()=>o,metadata:()=>a,moduleId:()=>d,toc:()=>j});const a=JSON.parse('{"id":"solutions/Novice/TheLazyCow","title":"TheLazyCow","description":"Tags: Prefix Sums","source":"@site/docs/solutions/Novice/TheLazyCow.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/TheLazyCow","permalink":"/SeaFarmers/docs/solutions/Novice/TheLazyCow","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"TeamTicTacToe","permalink":"/SeaFarmers/docs/solutions/Novice/TeamTicTacToe"},"next":{"title":"TowerOfHanoi","permalink":"/SeaFarmers/docs/solutions/Novice/TowerOfHanoi"}}');var i=e(74848),t=e(28453),r=(e(96540),e(42407),e(28092)),c=e(38866),l=e(40426);const o={},m="The Lazy Cow Solution",h={},d="Novice",j=[];function p(n){const s={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{moduleId:d}),"\n",(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"the-lazy-cow-solution",children:"The Lazy Cow Solution"})}),"\n",(0,i.jsx)(s.p,{children:"Tags: Prefix Sums"}),"\n",(0,i.jsx)(s.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsxs)(s.p,{children:["You have to rotate the field by ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mn,{children:"45"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"45"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"45"})]})})]})," degrees. Then, do prefix sums."]}),"\n",(0,i.jsxs)(s.p,{children:["This runs in ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mn,{children:"2"})]}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n^2)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,i.jsx)(s.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(c.A,{language:"cpp",style:l.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include<fstream> \nstd::ifstream cin ("lazy.in");\nstd::ofstream cout ("lazy.out");\n#include <algorithm>\nusing namespace std;\n\nint main () {\n  int n, k; cin >> n >> k; \n  vector<vector<int>> a(n * 2 - 1, vector<int>(n * 2 - 1, 0)); \n  for(int i = 0; i < n; i++) {\n      for(int j = 0; j < n; j++) {\n          cin >> a[i + j][n - i + j - 1]; \n      }\n  }\n  vector<vector<int>> pre(n * 2, vector<int>(n * 2, 0)); \n  for(int i = 0; i < n * 2 - 1; i++) {\n      for(int j = 0; j < n * 2 - 1; j++) {\n          pre[i + 1][j + 1] = pre[i + 1][j] + pre[i][j + 1] - pre[i][j] + a[i][j]; \n      }\n  }\n  int an = 0; \n  for(int i = 0; i < n * 2; i++) {\n      for(int j = 0; j < n * 2; j++) {\n          int ni = max(0, i - 2 * k - 1), nj = max(0, j - 2 * k - 1); \n          an = max(an, pre[i][j] - pre[ni][j] - pre[i][nj] + pre[ni][nj]); \n      }\n  }\n  cout << an; \n}   \n'})})]})}function x(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}}}]);