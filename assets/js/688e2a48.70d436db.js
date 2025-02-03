"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5295],{73849:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>h,default:()=>j,frontMatter:()=>m,metadata:()=>a,moduleId:()=>d,toc:()=>x});const a=JSON.parse('{"id":"solutions/Novice/Handshake","title":"Handshake","description":"Tags: Binary Search","source":"@site/docs/solutions/Novice/Handshake.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/Handshake","permalink":"/SeaFarmers/docs/solutions/Novice/Handshake","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"FactoryMachines","permalink":"/SeaFarmers/docs/solutions/Novice/FactoryMachines"},"next":{"title":"JuryMarks","permalink":"/SeaFarmers/docs/solutions/Novice/JuryMarks"}}');var l=e(74848),i=e(28453),t=(e(96540),e(42407),e(28092)),c=e(38866),r=e(40426);const m={},h="Handshake Solution",o={},d="Novice",x=[];function p(s){const n={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{moduleId:d}),"\n",(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"handshake-solution",children:"Handshake Solution"})}),"\n",(0,l.jsx)(n.p,{children:"Tags: Binary Search"}),"\n",(0,l.jsx)(n.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,l.jsxs)(n.p,{children:["We can test a minimum value in ",(0,l.jsxs)(n.span,{className:"katex",children:[(0,l.jsx)(n.span,{className:"katex-mathml",children:(0,l.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(n.semantics,{children:[(0,l.jsxs)(n.mrow,{children:[(0,l.jsx)(n.mi,{mathvariant:"script",children:"O"}),(0,l.jsx)(n.mo,{stretchy:"false",children:"("}),(0,l.jsx)(n.mi,{children:"n"}),(0,l.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,l.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(n.span,{className:"base",children:[(0,l.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(n.span,{className:"mopen",children:"("}),(0,l.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", and the function is monotonic."]}),"\n",(0,l.jsxs)(n.p,{children:["This runs in ",(0,l.jsxs)(n.span,{className:"katex",children:[(0,l.jsx)(n.span,{className:"katex-mathml",children:(0,l.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(n.semantics,{children:[(0,l.jsxs)(n.mrow,{children:[(0,l.jsx)(n.mi,{mathvariant:"script",children:"O"}),(0,l.jsx)(n.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(n.msub,{children:[(0,l.jsxs)(n.mrow,{children:[(0,l.jsx)(n.mi,{children:"log"}),(0,l.jsx)(n.mo,{children:"\u2061"})]}),(0,l.jsx)(n.mn,{children:"2"})]}),(0,l.jsx)(n.mo,{stretchy:"false",children:"("}),(0,l.jsx)(n.mi,{children:"n"}),(0,l.jsx)(n.mo,{stretchy:"false",children:")"}),(0,l.jsx)(n.mo,{children:"\u2217"}),(0,l.jsx)(n.mi,{children:"n"}),(0,l.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(\\log_2(n)*n)"})]})})}),(0,l.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(n.span,{className:"base",children:[(0,l.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(n.span,{className:"mopen",children:"("}),(0,l.jsxs)(n.span,{className:"mop",children:[(0,l.jsxs)(n.span,{className:"mop",children:["lo",(0,l.jsx)(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(n.span,{className:"msupsub",children:(0,l.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(n.span,{className:"vlist-r",children:[(0,l.jsx)(n.span,{className:"vlist",style:{height:"0.207em"},children:(0,l.jsxs)(n.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,l.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(n.span,{className:"mord mtight",children:"2"})})]})}),(0,l.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(n.span,{className:"vlist-r",children:(0,l.jsx)(n.span,{className:"vlist",style:{height:"0.2441em"},children:(0,l.jsx)(n.span,{})})})]})})]}),(0,l.jsx)(n.span,{className:"mopen",children:"("}),(0,l.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(n.span,{className:"mclose",children:")"}),(0,l.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(n.span,{className:"base",children:[(0,l.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(n.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,l.jsx)(n.h1,{id:"implementation",children:"Implementation"}),"\n",(0,l.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,l.jsx)(c.A,{language:"cpp",style:r.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nlong long n, k, an; \nvector<long long> a; \nlong long check(long long x) {\n  an = 0; \n  long long ct = 0, sum = 0; \n  int r = n; \n  for(int i = 0; i < n; i++) {\n      while(r > 0 && a[r - 1] + a[i] >= x) sum += a[--r]; \n      an += sum + (n - r) * a[i];\n      ct += (n - r); \n  }\n  return ct; \n}\nint main() {\n  cin >> n >> k; \n  a = vector<long long>(n); \n  for(int i = 0; i < n; i++) cin >> a[i]; \n  sort(a.begin(), a.end()); \n  long long l = 0, r = (long long) 1e6; \n  while(l < r) {\n      long long m = (l + r) / 2; \n      if(check(m) >= k) l = m + 1; \n      else r = m; \n  }\n  cout << (k - check(l)) * (l - 1) + an; \n}\n"})})]})}function j(s={}){const{wrapper:n}={...(0,i.R)(),...s.components};return n?(0,l.jsx)(n,{...s,children:(0,l.jsx)(p,{...s})}):p(s)}}}]);