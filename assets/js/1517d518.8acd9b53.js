"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[443],{5649:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>x,contentTitle:()=>h,default:()=>p,frontMatter:()=>m,metadata:()=>n,moduleName:()=>d,toc:()=>j});const n=JSON.parse('{"id":"solutions/LearnToCode/IncreasingArray","title":"IncreasingArray","description":"Tags: Max","source":"@site/docs/solutions/LearnToCode/IncreasingArray.mdx","sourceDirName":"solutions/LearnToCode","slug":"/solutions/LearnToCode/IncreasingArray","permalink":"/SeaFarmers/docs/solutions/LearnToCode/IncreasingArray","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"FencePainting","permalink":"/SeaFarmers/docs/solutions/LearnToCode/FencePainting"},"next":{"title":"KingsDilemma","permalink":"/SeaFarmers/docs/solutions/LearnToCode/KingsDilemma"}}');var l=e(4848),i=e(8453),t=(e(6540),e(2407),e(8092)),c=e(8866),r=e(426);const m={},h="Increasing Array Solution",x={},d="LearnToCode",j=[];function o(s){const a={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{moduleName:d}),"\n",(0,l.jsx)(a.header,{children:(0,l.jsx)(a.h1,{id:"increasing-array-solution",children:"Increasing Array Solution"})}),"\n",(0,l.jsx)(a.p,{children:"Tags: Max"}),"\n",(0,l.jsx)(a.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,l.jsxs)(a.p,{children:["For each interger ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{children:"i"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]})," (",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mo,{children:">"}),(0,l.jsx)(a.mn,{children:"0"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"i > 0"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6986em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:">"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(a.span,{className:"mord",children:"0"})]})]})]}),"), if the ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{children:"a"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"})]})})]}),(0,l.jsx)("sub",{children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mo,{children:"\u2212"}),(0,l.jsx)(a.mn,{children:"1"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"i - 1"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(a.span,{className:"mord",children:"1"})]})]})]})})," ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mo,{children:">"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:">"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(a.span,{className:"mrel",children:">"})]})})]})," ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{children:"a"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"})]})})]}),(0,l.jsx)("sub",{children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{children:"i"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]})})," then we increase the answer by\nthe difference."]}),"\n",(0,l.jsxs)(a.p,{children:["Then, set ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{children:"a"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"})]})})]}),(0,l.jsx)("sub",{children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{children:"i"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]})})," = ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"m"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"x"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsx)(a.mi,{children:"a"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"max(a"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"ma"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"})]})})]}),(0,l.jsx)("sub",{children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"i"}),(0,l.jsx)(a.mo,{children:"\u2212"}),(0,l.jsx)(a.mn,{children:"1"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"i - 1"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(a.span,{className:"mord",children:"1"})]})]})]})})," ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mo,{children:">"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:">"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(a.span,{className:"mrel",children:">"})]})})]})," ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{children:"a"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"})]})})]}),(0,l.jsx)("sub",{children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{children:"i"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]})}),(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mo,{stretchy:"false",children:")"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:")"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,l.jsxs)(a.p,{children:["This runs in ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{mathvariant:"script",children:"O"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsx)(a.mi,{children:"n"}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(a.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,l.jsx)(a.h1,{id:"implementation",children:"Implementation"}),"\n",(0,l.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,l.jsx)(c.A,{language:"cpp",style:r.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream> \n#include <algorithm>\nusing namespace std;\n\n\n\nint main() {\n  long long an = 0; \n  int n, prev;\n  cin >> n >> prev; \n  for(int i = 1; i < n; i++) {\n      int x; cin >> x; \n      an += max(prev - x, 0); \n      prev = max(prev, x); \n  }\n  cout << an; \n}\n"})})]})}function p(s={}){const{wrapper:a}={...(0,i.R)(),...s.components};return a?(0,l.jsx)(a,{...s,children:(0,l.jsx)(o,{...s})}):o(s)}}}]);