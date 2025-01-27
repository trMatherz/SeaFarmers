"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2286],{79686:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>m,default:()=>j,frontMatter:()=>o,metadata:()=>a,moduleId:()=>d,toc:()=>p});const a=JSON.parse('{"id":"solutions/Novice/WhyDidTheCowCrossTheRoadIII","title":"WhyDidTheCowCrossTheRoadIII","description":"Tags: Sorting","source":"@site/docs/solutions/Novice/WhyDidTheCowCrossTheRoadIII.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/WhyDidTheCowCrossTheRoadIII","permalink":"/SeaFarmers/docs/solutions/Novice/WhyDidTheCowCrossTheRoadIII","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"WhereAmI","permalink":"/SeaFarmers/docs/solutions/Novice/WhereAmI"},"next":{"title":"LegendOfTheRoom","permalink":"/SeaFarmers/docs/solutions/TVS2025/LegendOfTheRoom"}}');var i=n(74848),t=n(28453),r=(n(96540),n(42407),n(28092)),l=n(38866),c=n(40426);const o={},m="Why Did The Cow Cross The Road III Solution",h={},d="Novice",p=[];function x(s){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{moduleId:d}),"\n",(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"why-did-the-cow-cross-the-road-iii-solution",children:"Why Did The Cow Cross The Road III Solution"})}),"\n",(0,i.jsx)(e.p,{children:"Tags: Sorting"}),"\n",(0,i.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsx)(e.p,{children:"It is always better to first do a cow if their arrival time is smaller than another cow's. Thus, we sort the cows and\nthen simulate the process."}),"\n",(0,i.jsxs)(e.p,{children:["This runs in ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(e.msub,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"log"}),(0,i.jsx)(e.mo,{children:"\u2061"})]}),(0,i.jsx)(e.mn,{children:"2"})]}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(\\log_2(n)*n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsxs)(e.span,{className:"mop",children:[(0,i.jsxs)(e.span,{className:"mop",children:["lo",(0,i.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.207em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2441em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,i.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(l.A,{language:"cpp",style:c.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\nstd::ifstream cin ("cowqueue.in");\nstd::ofstream cout ("cowqueue.out");\n#include <algorithm>\nusing namespace std;\n\n\nint main() {\n  int n; cin >> n; \n  vector<pair<int, int>> a(n); \n  for(int i = 0; i < n; i++) cin >> a[i].first >> a[i].second; \n  sort(a.begin(), a.end()); // always better if it starts first\n  int t = 0; \n  for(int i = 0; i < n; i++) t = max(t, a[i].first) + a[i].second; \n  cout << t; \n}\n'})})]})}function j(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(x,{...s})}):x(s)}}}]);