"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7044],{54078:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>m,metadata:()=>a,moduleId:()=>d,toc:()=>x});const a=JSON.parse('{"id":"solutions/Novice/SocialDistancing","title":"SocialDistancing","description":"Tags: Binary Search","source":"@site/docs/solutions/Novice/SocialDistancing.mdx","sourceDirName":"solutions/Novice","slug":"/solutions/Novice/SocialDistancing","permalink":"/SeaFarmers/docs/solutions/Novice/SocialDistancing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"SleepyCowHerding","permalink":"/SeaFarmers/docs/solutions/Novice/SleepyCowHerding"},"next":{"title":"StaticRangeSums","permalink":"/SeaFarmers/docs/solutions/Novice/StaticRangeSums"}}');var i=e(74848),l=e(28453),t=(e(96540),e(42407),e(28092)),c=e(38866),r=e(40426);const m={},o="Social Distancing Solution",h={},d="Novice",x=[];function p(s){const n={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.A,{moduleId:d}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"social-distancing-solution",children:"Social Distancing Solution"})}),"\n",(0,i.jsx)(n.p,{children:"Tags: Binary Search"}),"\n",(0,i.jsx)(n.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsxs)(n.p,{children:["We can test a certain distance in ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"("}),(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n)"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(n.span,{className:"mopen",children:"("}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", and the function is monotonic."]}),"\n",(0,i.jsxs)(n.p,{children:["This runs in ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(n.msub,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"log"}),(0,i.jsx)(n.mo,{children:"\u2061"})]}),(0,i.jsx)(n.mn,{children:"2"})]}),(0,i.jsx)(n.mo,{stretchy:"false",children:"("}),(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mo,{stretchy:"false",children:")"}),(0,i.jsx)(n.mo,{children:"\u2217"}),(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(\\log_2(n)*n)"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(n.span,{className:"mopen",children:"("}),(0,i.jsxs)(n.span,{className:"mop",children:[(0,i.jsxs)(n.span,{className:"mop",children:["lo",(0,i.jsx)(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,i.jsx)(n.span,{className:"msupsub",children:(0,i.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(n.span,{className:"vlist-r",children:[(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.207em"},children:(0,i.jsxs)(n.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.2441em"},children:(0,i.jsx)(n.span,{})})})]})})]}),(0,i.jsx)(n.span,{className:"mopen",children:"("}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"mclose",children:")"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,i.jsx)(n.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(c.A,{language:"cpp",style:r.A,children:'#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <fstream> \nstd::ifstream cin("socdist.in");\nstd::ofstream cout("socdist.out");\n#include <algorithm>\nusing namespace std;\n\nint n, k; \nvector<pair<long long, long long>> a; \nbool check(long long x) {  \n  int ret = 0; \n  long long last = -x; \n  for(int i = 0; i < k; i++) {\n      while(last + x <= a[i].second) {\n          last = max(last + x, a[i].first);\n          if(++ret == n) return true; \n      }\n  }\n  return false; \n}\nint main() {\n  cin >> n >> k; \n  long long l = 0, r = (long long) 1e18 + 7;\n  a = vector<pair<long long, long long>>(k); \n  for(int i = 0; i < k; i++) cin >> a[i].first >> a[i].second;  \n  sort(a.begin(), a.end()); \n  while(l < r) {\n      long long m = (l + r + 1) / 2; \n      if(check(m)) l = m;\n      else r = m - 1; \n  }\n  cout << l; \n}\n'})})]})}function j(s={}){const{wrapper:n}={...(0,l.R)(),...s.components};return n?(0,i.jsx)(n,{...s,children:(0,i.jsx)(p,{...s})}):p(s)}}}]);