"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2632],{2756:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>m,default:()=>j,frontMatter:()=>o,metadata:()=>a,moduleName:()=>h,toc:()=>x});const a=JSON.parse('{"id":"solutions/LearnToCode/FieldReduction","title":"FieldReduction","description":"Tags: Vectors","source":"@site/docs/solutions/LearnToCode/FieldReduction.mdx","sourceDirName":"solutions/LearnToCode","slug":"/solutions/LearnToCode/FieldReduction","permalink":"/SeaFarmers/docs/solutions/LearnToCode/FieldReduction","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"FencePainting","permalink":"/SeaFarmers/docs/solutions/LearnToCode/FencePainting"},"next":{"title":"IncreasingArray","permalink":"/SeaFarmers/docs/solutions/LearnToCode/IncreasingArray"}}');var t=n(4848),i=n(8453),l=(n(6540),n(2407),n(8092)),c=n(8866),r=n(426);const o={},m="Field Reduction Solution",d={},h="LearnToCode",x=[];function p(e){const s={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{moduleName:h}),"\n",(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"field-reduction-solution",children:"Field Reduction Solution"})}),"\n",(0,t.jsx)(s.p,{children:"Tags: Vectors"}),"\n",(0,t.jsx)(s.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsx)(s.p,{children:"Any cow that does not have a max or min in either the x or y direction will not affect the bounding rectangle."}),"\n",(0,t.jsxs)(s.p,{children:["If we simulate this process where we calculate these ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mn,{children:"4"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"4"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord",children:"4"})]})})]}),' "critical values",\nit runs in ',(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n^2)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," which will fail one testcase."]}),"\n",(0,t.jsx)(s.p,{children:"A better solution would be to only recalculate the area IF the cow is on the global rectangle since removing a\ncow in the middle has no effect anyway."}),"\n",(0,t.jsxs)(s.p,{children:["This runs in ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsx)(s.h1,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,t.jsx)(c.A,{language:"cpp",style:r.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\nstd::ifstream cin ("crossroad.in");\nstd::ofstream cout ("crossroad.out");\n#include <algorithm>\nusing namespace std;\n\n\n\nint main() {\n  int n; cin >> n; \n  int an = 0; \n  vector<int> a(10, -1); \n  for(int i = 0; i < n; i++) {\n      int x, y; \n      cin >> x >> y; \n      x--; \n      if(a[x] != -1 && a[x] != y) an++; // check if on the other side\n      a[x] = y; \n  }\n  cout << an;\n}\n'})})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);