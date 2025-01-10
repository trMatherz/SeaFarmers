"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[175],{8910:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>o,metadata:()=>a,moduleName:()=>h,toc:()=>x});const a=JSON.parse('{"id":"solutions/LearnToCode/MaximumDifference","title":"MaximumDifference","description":"Tags: Pairs, Max","source":"@site/docs/solutions/LearnToCode/MaximumDifference.mdx","sourceDirName":"solutions/LearnToCode","slug":"/solutions/LearnToCode/MaximumDifference","permalink":"/SeaFarmers/docs/solutions/LearnToCode/MaximumDifference","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"LostCow","permalink":"/SeaFarmers/docs/solutions/LearnToCode/LostCow"},"next":{"title":"MimickingJerry","permalink":"/SeaFarmers/docs/solutions/LearnToCode/MimickingJerry"}}');var i=e(4848),t=e(8453),r=(e(6540),e(2407),e(8092)),l=e(8866),c=e(426);const o={},m="Maximum Distance Solution",d={},h="LearnToCode",x=[];function p(n){const s={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{moduleName:h}),"\n",(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"maximum-distance-solution",children:"Maximum Distance Solution"})}),"\n",(0,i.jsx)(s.p,{children:"Tags: Pairs, Max"}),"\n",(0,i.jsx)(s.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsx)(s.p,{children:"We check all possible pairs."}),"\n",(0,i.jsxs)(s.p,{children:["This runs in ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mn,{children:"2"})]}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n^2)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,i.jsx)(s.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(l.A,{language:"cpp",style:c.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream> \n#include <algorithm>\nusing namespace std;\n\n\n\nint main() {\n  int n; \n  cin >> n; \n  vector<pair<long long, long long>> a(n); \n  for(int i = 0; i < n; i++) cin >> a[i].first; \n  for(int i = 0; i < n; i++) cin >> a[i].second; \n  long long an = 0;\n  for(int i = 0; i < n; i++) {\n      for(int j = i + 1; j < n; j++) {\n          an = max(an, (a[i].first - a[j].first) * (a[i].first - a[j].first) +\n              (a[i].second - a[j].second) * (a[i].second - a[j].second)); \n      }\n  }\n  cout << an; \n}\n"})})]})}function u(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}}}]);