"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7575],{5635:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>a,moduleId:()=>h,toc:()=>u});const a=JSON.parse('{"id":"solutions/Novice/TeamTicTacToe","title":"TeamTicTacToe","description":"Tags: Functions","source":"@site/docs/solutions/Novice/TeamTicTacToe.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/TeamTicTacToe","permalink":"/SeaFarmers/docs/solutions/Novice/TeamTicTacToe","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"BlockGame","permalink":"/SeaFarmers/docs/solutions/Novice/BlockGame"},"next":{"title":"TwoKnights","permalink":"/SeaFarmers/docs/solutions/Novice/TwoKnights"}}');var i=n(4848),t=n(8453),c=(n(6540),n(2407),n(8092)),r=n(8866),l=n(426);const d={},o="Team Tic Tac Toe Solution",m={},h="Novice",u=[];function x(e){const s={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.A,{moduleId:h}),"\n",(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"team-tic-tac-toe-solution",children:"Team Tic Tac Toe Solution"})}),"\n",(0,i.jsx)(s.p,{children:"Tags: Functions"}),"\n",(0,i.jsx)(s.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsx)(s.p,{children:"We check each combination of letters to see if it is possible for that team to win."}),"\n",(0,i.jsxs)(s.p,{children:["Where ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"L"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"L"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"L"})]})})]})," is the number of letters, this runs in ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mi,{children:"L"}),(0,i.jsx)(s.mn,{children:"2"})]}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(L^2)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,i.jsx)(s.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(r.A,{language:"cpp",style:l.A,children:"#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\nstd::ifstream cin (\"tttt.in\");\nstd::ofstream cout (\"tttt.out\");\n#include <algorithm>\nusing namespace std;\n\nvector<string> a(3); \nint get(char c, char d) { // if a team of c and d can form a line\n  bool used1, used2, bad; \n  for(int i = 0; i < 3; i++) { // check rows\n      used1 = used2 = bad = false; \n      for(int j = 0; j < 3; j++) {\n          if(a[i][j] == c) used1 = true; \n          else if(a[i][j] == d) used2 = true; \n          else bad = true; \n      }\n      if(!bad && used1 && (used2 || c == d)) return true; \n  }\n  for(int i = 0; i < 3; i++) { // check columns\n      used1 = used2 = bad = false; \n      for(int j = 0; j < 3; j++) {\n          if(a[j][i] == c) used1 = true; \n          else if(a[j][i] == d) used2 = true; \n          else bad = true; \n      }\n      if(!bad && used1 && (used2 || c == d)) return true; \n  }\n  used1 = used2 = bad = false; // diagnols\n  for(int i = 0; i < 3; i++) { \n      if(a[i][i] == c) used1 = true; \n      else if(a[i][i] == d) used2 = true; \n      else bad = true; \n  }\n  if(!bad && used1 && (used2 || c == d)) return true; \n  for(int i = 0; i < 3; i++) { \n      if(a[i][2 - i] == c) used1 = true; \n      else if(a[i][2 - i] == d) used2 = true; \n      else bad = true; \n  }\n  if(!bad && used1 && (used2 || c == d)) return true; \n  used1 = used2 = bad = false; \n  return false;\n}\nint main() {\n  for(int i = 0; i < 3; i++) cin >> a[i]; \n  int an1 = 0, an2 = 0; \n  for(char c = 'A'; c <= 'Z'; c++) an1 += get(c, c);\n  for(char c = 'A'; c <= 'Z'; c++) \n      for(char d = c + 1; d <= 'Z'; d++) \n          an2 += get(c, d);\n  cout << an1 << endl << an2; \n}\n"})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);