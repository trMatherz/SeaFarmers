"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1790],{4765:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>x,contentTitle:()=>m,default:()=>p,frontMatter:()=>r,metadata:()=>n,moduleId:()=>d,toc:()=>o});const n=JSON.parse('{"id":"solutions/Novice/TowerOfHanoi","title":"TowerOfHanoi","description":"Tags: Recursion","source":"@site/docs/solutions/Novice/TowerOfHanoi.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/TowerOfHanoi","permalink":"/SeaFarmers/docs/solutions/Novice/TowerOfHanoi","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"TeamTicTacToe","permalink":"/SeaFarmers/docs/solutions/Novice/TeamTicTacToe"},"next":{"title":"TwoKnights","permalink":"/SeaFarmers/docs/solutions/Novice/TwoKnights"}}');var t=e(4848),i=e(8453),l=(e(6540),e(2407),e(8092)),c=e(8866),h=e(426);const r={},m="Tower Of Hanoi Solution",x={},d="Novice",o=[];function j(s){const a={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{moduleId:d}),"\n",(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"tower-of-hanoi-solution",children:"Tower Of Hanoi Solution"})}),"\n",(0,t.jsx)(a.p,{children:"Tags: Recursion"}),"\n",(0,t.jsx)(a.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsxs)(a.p,{children:["Say we need to move a stack of ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"3"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"3"})]})})]})," from position ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"1"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"1"})]})})]})," to position ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"3"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"3"})]})})]}),", this can be done by moving the stack of ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"2"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"2"})]})})]})," from\nposition ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"1"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"1"})]})})]})," to position ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"2"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"2"})]})})]}),", then moving disk ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"3"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"3"})]})})]})," from position ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"1"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"1"})]})})]})," to position ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"3"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"3"})]})})]}),", then moving the stack of ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"2"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"2"})]})})]})," from\nposition ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"2"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"2"})]})})]})," to position ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"3"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"3"})]})})]}),". We can use recursion so simulate this. For the base case of ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mn,{children:"1"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"1"})]})})]}),", we can just move the disk.\nThis also proves that the number of moves is ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsxs)(a.msup,{children:[(0,t.jsx)(a.mn,{children:"2"}),(0,t.jsx)(a.mi,{children:"n"})]}),(0,t.jsx)(a.mo,{children:"\u2212"}),(0,t.jsx)(a.mn,{children:"1"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"2^n - 1"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.7477em",verticalAlign:"-0.0833em"}}),(0,t.jsxs)(a.span,{className:"mord",children:[(0,t.jsx)(a.span,{className:"mord",children:"2"}),(0,t.jsx)(a.span,{className:"msupsub",children:(0,t.jsx)(a.span,{className:"vlist-t",children:(0,t.jsx)(a.span,{className:"vlist-r",children:(0,t.jsx)(a.span,{className:"vlist",style:{height:"0.6644em"},children:(0,t.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(a.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"1"})]})]})]}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["This runs in ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{mathvariant:"script",children:"O"}),(0,t.jsx)(a.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(a.msup,{children:[(0,t.jsx)(a.mn,{children:"2"}),(0,t.jsx)(a.mi,{children:"n"})]}),(0,t.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(2^n)"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(a.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(a.span,{className:"mopen",children:"("}),(0,t.jsxs)(a.span,{className:"mord",children:[(0,t.jsx)(a.span,{className:"mord",children:"2"}),(0,t.jsx)(a.span,{className:"msupsub",children:(0,t.jsx)(a.span,{className:"vlist-t",children:(0,t.jsx)(a.span,{className:"vlist-r",children:(0,t.jsx)(a.span,{className:"vlist",style:{height:"0.6644em"},children:(0,t.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(a.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,t.jsx)(a.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsx)(a.h1,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,t.jsx)(c.A,{language:"cpp",style:h.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nvoid go(int x, int start, int end, int other) {\n  if(x == 0) return; \n  go(x - 1, start, other, end); \n  cout << start << " " << end << endl;\n  go(x - 1, other, end, start); \n}\nint main() {\n  int n; cin >> n; \n  cout << (1 << n) - 1 << endl; \n  go(n, 1, 3, 2); \n}\n'})})]})}function p(s={}){const{wrapper:a}={...(0,i.R)(),...s.components};return a?(0,t.jsx)(a,{...s,children:(0,t.jsx)(j,{...s})}):j(s)}}}]);