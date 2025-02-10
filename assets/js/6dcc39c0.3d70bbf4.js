"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3806],{10312:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>i,moduleId:()=>h,toc:()=>p});const i=JSON.parse('{"id":"solutions/Novice/PairedUp","title":"PairedUp","description":"Tags: 2P","source":"@site/docs/solutions/Novice/PairedUp.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/PairedUp","permalink":"/SeaFarmers/docs/solutions/Novice/PairedUp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"PaintingTheBarn","permalink":"/SeaFarmers/docs/solutions/Novice/PaintingTheBarn"},"next":{"title":"Permutator","permalink":"/SeaFarmers/docs/solutions/Novice/Permutator"}}');var a=s(74848),t=s(28453),r=(s(96540),s(42407),s(28092)),o=s(38866),l=s(40426);const c={},d="Paired Up Solution",m={},h="Novice",p=[];function u(n){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{moduleId:h}),"\n",(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"paired-up-solution",children:"Paired Up Solution"})}),"\n",(0,a.jsx)(e.p,{children:"Tags: 2P"}),"\n",(0,a.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,a.jsx)(e.p,{children:"We use two pointers to implement the following greedy strategy: It is always better to pair the current\nlowest with the current highest."}),"\n",(0,a.jsxs)(e.p,{children:["This runs in ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,a.jsx)(o.A,{language:"cpp",style:l.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\nstd::ifstream cin("pairup.in");\nstd::ofstream cout("pairup.out");\n#include <algorithm>\nusing namespace std;\n\nint main() {\n  int n; cin >> n; \n  vector<pair<int, int>> a(n); \n  for(int i = 0; i < n; i++) cin >> a[i].second >> a[i].first; \n  sort(a.begin(), a.end()); \n  int an = 0; \n  int l = 0, r = n - 1; \n  while(l <= r) {\n      int use = min(a[l].second, a[r].second); \n      emax(an, a[l].first + a[r].first); \n      a[l].second -= use; \n      if(r > l) a[r].second -= use; \n      if(a[l].second == 0) l++; \n      if(a[r].second == 0) r--; \n  }\n  cout << an; \n}\n'})})]})}function x(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}}}]);