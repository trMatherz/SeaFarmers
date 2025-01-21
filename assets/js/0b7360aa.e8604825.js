"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3307],{1238:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>x,frontMatter:()=>c,metadata:()=>i,moduleId:()=>p,toc:()=>d});const i=JSON.parse('{"id":"solutions/Novice/AppleDivision","title":"AppleDivision","description":"Tags: Recursion","source":"@site/docs/solutions/Novice/AppleDivision.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/AppleDivision","permalink":"/SeaFarmers/docs/solutions/Novice/AppleDivision","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"AngryCows","permalink":"/SeaFarmers/docs/solutions/Novice/AngryCows"},"next":{"title":"BlockGame","permalink":"/SeaFarmers/docs/solutions/Novice/BlockGame"}}');var a=e(4848),t=e(8453),l=(e(6540),e(2407),e(8092)),o=e(8866),r=e(426);const c={},m="Apple Division Solution",h={},p="Novice",d=[];function u(s){const n={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.A,{moduleId:p}),"\n",(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"apple-division-solution",children:"Apple Division Solution"})}),"\n",(0,a.jsx)(n.p,{children:"Tags: Recursion"}),"\n",(0,a.jsx)(n.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,a.jsx)(n.p,{children:"We can use recursion to completely search all possible partitions of splitting the apples into two groups.\nOur base case\nis when we have no more apples. Other than that, we maintain the current sum of the two piles."}),"\n",(0,a.jsxs)(n.p,{children:["This runs in ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{mathvariant:"script",children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mn,{children:"2"}),(0,a.jsx)(n.mi,{children:"n"})]}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(2^n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord",children:"2"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(n.h1,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(o.A,{language:"cpp",style:r.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint n;\nvector<long long> a; \nlong long go(int x, long long sum1, long long sum2) {\n  if(x == n) return abs(sum1 - sum2); \n  return min(go(x + 1, sum1 + a[x], sum2), go(x + 1, sum1, sum2 + a[x])); \n}\nint main() {      \n  cin >> n; \n  a = vector<long long>(n); \n  for(int i = 0; i < n; i++) cin >> a[i]; \n  cout << go(0, 0, 0); \n}\n"})})]})}function x(s={}){const{wrapper:n}={...(0,t.R)(),...s.components};return n?(0,a.jsx)(n,{...s,children:(0,a.jsx)(u,{...s})}):u(s)}}}]);