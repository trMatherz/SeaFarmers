"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1757],{67357:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>m,default:()=>j,frontMatter:()=>o,metadata:()=>a,moduleId:()=>d,toc:()=>x});const a=JSON.parse('{"id":"solutions/Novice/BlockGame","title":"BlockGame","description":"Tags: Functions","source":"@site/docs/solutions/Novice/BlockGame.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/BlockGame","permalink":"/SeaFarmers/docs/solutions/Novice/BlockGame","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"AssociativeArray","permalink":"/SeaFarmers/docs/solutions/Novice/AssociativeArray"},"next":{"title":"ChessboardAndQueens","permalink":"/SeaFarmers/docs/solutions/Novice/ChessboardAndQueens"}}');var t=n(74848),i=n(28453),c=(n(96540),n(42407),n(28092)),r=n(38866),l=n(40426);const o={},m="Block Game Solution",h={},d="Novice",x=[];function p(s){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{moduleId:d}),"\n",(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"block-game-solution",children:"Block Game Solution"})}),"\n",(0,t.jsx)(e.p,{children:"Tags: Functions"}),"\n",(0,t.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsxs)(e.p,{children:["For set of words, we add whichever word has a higher count of letter ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"l"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"l"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]})," to the number of blocks for ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"l"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"l"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Note: if we have a character ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"c"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"c"})]})})]}),", we can subtract its distance from 'a' to get the position in the vector."]}),"\n",(0,t.jsxs)(e.p,{children:["This runs in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,t.jsx)(e.mo,{stretchy:"false",children:"("}),(0,t.jsx)(e.mi,{children:"n"}),(0,t.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(e.span,{className:"mopen",children:"("}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,t.jsx)(r.A,{language:"cpp",style:l.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\nstd::ifstream cin (\"blocks.in\");\nstd::ofstream cout (\"blocks.out\");\n#include <algorithm>\nusing namespace std;\n\nint get(string z, char c) { // number of times c appears in z\n  int ret = 0; \n  for(int i = 0; i < z.size(); i++) if(z[i] == c) ret++; \n  return ret; \n}\nint main() {\n  int n; cin >> n; \n  vector<int> ans(26, 0); \n  for(int i = 0; i < n; i++) {\n      string x, y; \n      cin >> x >> y; \n      for(char c = 'a'; c <= 'z'; c++) ans[c - 'a'] += max(get(x, c), get(y, c)); \n  }\n  for(int i = 0; i < 26; i++) cout << ans[i] << endl;\n}\n"})})]})}function j(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(p,{...s})}):p(s)}}}]);