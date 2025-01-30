"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5891],{18687:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>h,default:()=>p,frontMatter:()=>r,metadata:()=>n,moduleId:()=>x,toc:()=>o});const n=JSON.parse('{"id":"solutions/Novice/SumOfTwoValues","title":"SumOfTwoValues","description":"Tags: Sets","source":"@site/docs/solutions/Novice/SumOfTwoValues.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/SumOfTwoValues","permalink":"/SeaFarmers/docs/solutions/Novice/SumOfTwoValues","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"SumOfThreeValues","permalink":"/SeaFarmers/docs/solutions/Novice/SumOfThreeValues"},"next":{"title":"TeamTicTacToe","permalink":"/SeaFarmers/docs/solutions/Novice/TeamTicTacToe"}}');var l=a(74848),i=a(28453),t=(a(96540),a(42407),a(28092)),m=a(38866),c=a(40426);const r={},h="Sum Of Two Values Solution",d={},x="Novice",o=[];function j(s){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{moduleId:x}),"\n",(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"sum-of-two-values-solution",children:"Sum Of Two Values Solution"})}),"\n",(0,l.jsx)(e.p,{children:"Tags: Sets"}),"\n",(0,l.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,l.jsxs)(e.p,{children:["For each ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"i"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),", we can check if there exits an element at ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mi,{children:"a"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x - a"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"a"})]})]})]}),(0,l.jsx)("sub",{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"j"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})})," where ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"j < i"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})]})]}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["This runs in ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(e.msub,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"log"}),(0,l.jsx)(e.mo,{children:"\u2061"})]}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(\\log_2(n)*n)"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsxs)(e.span,{className:"mop",children:[(0,l.jsxs)(e.span,{className:"mop",children:["lo",(0,l.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.207em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.2441em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,l.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,l.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,l.jsx)(m.A,{language:"cpp",style:c.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream>\n#include <algorithm>\n#include <map> \nusing namespace std;\n\nint main() {\n  int n, k; cin >> n >> k; \n  map<int, int> v; \n  for(int i = 0; i < n; i++) {\n      int x; cin >> x; \n      if(v.count(k - x)) {\n          cout << v[k - x] + 1 << " " << i + 1 << endl; \n          return 0; \n      }\n      v[x] = i; \n  }\n  cout << "IMPOSSIBLE"; \n}\n'})})]})}function p(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(j,{...s})}):j(s)}}}]);