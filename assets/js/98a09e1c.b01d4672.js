"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4693],{8059:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>p,frontMatter:()=>l,metadata:()=>i,moduleName:()=>h,toc:()=>u});const i=JSON.parse('{"id":"solutions/LearnToCode/CountingToysII","title":"CountingToysII","description":"Tags: Pairs, Max","source":"@site/docs/solutions/LearnToCode/CountingToysII.mdx","sourceDirName":"solutions/LearnToCode","slug":"/solutions/LearnToCode/CountingToysII","permalink":"/SeaFarmers/docs/solutions/LearnToCode/CountingToysII","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"CountingToys","permalink":"/SeaFarmers/docs/solutions/LearnToCode/CountingToys"},"next":{"title":"FencePainting","permalink":"/SeaFarmers/docs/solutions/LearnToCode/FencePainting"}}');var t=s(4848),a=s(8453),o=(s(6540),s(2407),s(8092)),r=s(8866),c=s(426);const l={},m="Counting Toys II Solution",d={},h="LearnToCode",u=[];function x(n){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{moduleName:h}),"\n",(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"counting-toys-ii-solution",children:"Counting Toys II Solution"})}),"\n",(0,t.jsx)(e.p,{children:"Tags: Pairs, Max"}),"\n",(0,t.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsx)(e.p,{children:"We go through all pairs, maintaining the current maximum. We can store the information in a pair and just take\nthe max of two pais."}),"\n",(0,t.jsx)(e.p,{children:"Note: Pake sure the integer is the first element since this is the one that we wish to compare."}),"\n",(0,t.jsxs)(e.p,{children:["This runs in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,t.jsx)(e.mo,{stretchy:"false",children:"("}),(0,t.jsx)(e.mi,{children:"n"}),(0,t.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(e.span,{className:"mopen",children:"("}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,t.jsx)(r.A,{language:"cpp",style:c.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream>\n#include <fstream>\n#include <iostream> \n#include <algorithm>\nusing namespace std;\n\n// The solution without pairs and max: \n\n// int main() { \n//     int n; cin >> n; \n//     int cur = 0; \n//     string bes = ""; \n//     for(int i = 0; i < n; i++) {\n//         string a; cin >> a; \n//         int x; cin >> x; \n//         if(x > cur) cur = x, bes = a; \n//     }\n//     cout << bes; \n//     return 0;\n// }\n\nint main() {\n  int n; cin >> n; \n  pair<int, string> cur = {0, ""}, nex; \n  for(int i = 0; i < n; i++) {\n      cin >> nex.second >> nex.first;\n      cur = max(cur, nex); \n  }\n  cout << cur.second; \n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}}}]);