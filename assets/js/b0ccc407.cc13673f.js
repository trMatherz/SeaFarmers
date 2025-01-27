"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2921],{7300:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>h,default:()=>j,frontMatter:()=>m,metadata:()=>a,moduleId:()=>d,toc:()=>x});const a=JSON.parse('{"id":"solutions/Novice/AngryCows","title":"AngryCows","description":"Tags: Sorting, Functions","source":"@site/docs/solutions/Novice/AngryCows.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/AngryCows","permalink":"/SeaFarmers/docs/solutions/Novice/AngryCows","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"AnglerFish","permalink":"/SeaFarmers/docs/solutions/Novice/AnglerFish"},"next":{"title":"AppleDivision","permalink":"/SeaFarmers/docs/solutions/Novice/AppleDivision"}}');var i=e(74848),t=e(28453),l=(e(96540),e(42407),e(28092)),r=e(38866),c=e(40426);const m={},h="Angry Cows Solution",o={},d="Novice",x=[];function p(s){const n={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{moduleId:d}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"angry-cows-solution",children:"Angry Cows Solution"})}),"\n",(0,i.jsx)(n.p,{children:"Tags: Sorting, Functions"}),"\n",(0,i.jsx)(n.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsx)(n.p,{children:"We sort the cows in a line to make this problem more manageable."}),"\n",(0,i.jsx)(n.p,{children:"Then, we can simulate problem if we started at each cow and take the max."}),"\n",(0,i.jsxs)(n.p,{children:["This runs in ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(n.msub,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"log"}),(0,i.jsx)(n.mo,{children:"\u2061"})]}),(0,i.jsx)(n.mn,{children:"2"})]}),(0,i.jsx)(n.mo,{stretchy:"false",children:"("}),(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mo,{stretchy:"false",children:")"}),(0,i.jsx)(n.mo,{children:"\u2217"}),(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mo,{children:"+"}),(0,i.jsxs)(n.msup,{children:[(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mn,{children:"2"})]}),(0,i.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(\\log_2(n)*n+n^2)"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(n.span,{className:"mopen",children:"("}),(0,i.jsxs)(n.span,{className:"mop",children:[(0,i.jsxs)(n.span,{className:"mop",children:["lo",(0,i.jsx)(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,i.jsx)(n.span,{className:"msupsub",children:(0,i.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(n.span,{className:"vlist-r",children:[(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.207em"},children:(0,i.jsxs)(n.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.2441em"},children:(0,i.jsx)(n.span,{})})})]})})]}),(0,i.jsx)(n.span,{className:"mopen",children:"("}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"mclose",children:")"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"+"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsxs)(n.span,{className:"mord",children:[(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"msupsub",children:(0,i.jsx)(n.span,{className:"vlist-t",children:(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,i.jsx)(n.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,i.jsx)(n.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(r.A,{language:"cpp",style:c.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\nstd::ifstream cin ("angry.in");\nstd::ofstream cout ("angry.out");\n#include <algorithm>\nusing namespace std;\n\nint n;\nvector<int> a;\nint get(int x) {\n  int l = x, r = x; \n  int last = a[x], t = 1; // we only care about the "last" cow to explode\n  while(last != -1) { // go left\n      int nex = last - t; \n      last = -1; \n      while(l > 0 && a[l - 1] >= nex) last = a[--l]; \n      t++; \n  }\n  last = a[x], t = 1; \n  while(last != -1) { // go right\n      int nex = last + t; \n      last = -1; \n      while(r + 1 < n && a[r + 1] <= nex) last = a[++r]; \n      t++; \n  }\n  return r - l + 1; \n}\nint main() {\n  cin >> n; \n  a = vector<int>(n); \n  for(int i = 0; i < n; i++) cin >> a[i]; \n  sort(a.begin(), a.end()); \n  int an = 0; \n  for(int i = 0; i < n; i++) an = max(an, get(i)); \n  cout << an; \n}\n'})})]})}function j(s={}){const{wrapper:n}={...(0,t.R)(),...s.components};return n?(0,i.jsx)(n,{...s,children:(0,i.jsx)(p,{...s})}):p(s)}}}]);