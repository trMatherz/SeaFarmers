"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4545],{6042:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>m,metadata:()=>a,moduleId:()=>d,toc:()=>p});const a=JSON.parse('{"id":"solutions/Novice/MovieFestival","title":"MovieFestival","description":"Tags: Sorting","source":"@site/docs/solutions/Novice/MovieFestival.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/MovieFestival","permalink":"/SeaFarmers/docs/solutions/Novice/MovieFestival","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"JuryMarks","permalink":"/SeaFarmers/docs/solutions/Novice/JuryMarks"},"next":{"title":"Permutator","permalink":"/SeaFarmers/docs/solutions/Novice/Permutator"}}');var i=n(74848),t=n(28453),l=(n(96540),n(42407),n(28092)),r=n(38866),c=n(40426);const m={},o="Movie Festival Solution",h={},d="Novice",p=[];function x(s){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{moduleId:d}),"\n",(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"movie-festival-solution",children:"Movie Festival Solution"})}),"\n",(0,i.jsx)(e.p,{children:"Tags: Sorting"}),"\n",(0,i.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsx)(e.p,{children:"It is always better to go to a movie if it ends first since we will be able to go to the next movie sooner. Sort them by\nending time, then simulate."}),"\n",(0,i.jsxs)(e.p,{children:["This runs in ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(e.msub,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"log"}),(0,i.jsx)(e.mo,{children:"\u2061"})]}),(0,i.jsx)(e.mn,{children:"2"})]}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(\\log_2(n)*n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsxs)(e.span,{className:"mop",children:[(0,i.jsxs)(e.span,{className:"mop",children:["lo",(0,i.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.207em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2441em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,i.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(r.A,{language:"cpp",style:c.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n  int n; cin >> n; \n  vector<pair<int, int>> a(n); \n  for(int i = 0; i < n; i++) cin >> a[i].second >> a[i].first; \n  sort(a.begin(), a.end()); \n  int an = 0, t = 0;  \n  for(int i = 0; i < n; i++) {\n      if(t <= a[i].second) {\n          t = a[i].first; \n          an++; \n      }\n  }\n  cout << an; \n}\n"})})]})}function j(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(x,{...s})}):x(s)}}}]);