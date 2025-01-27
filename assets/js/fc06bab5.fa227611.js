"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3844],{75461:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>h,default:()=>p,frontMatter:()=>r,metadata:()=>n,moduleId:()=>x,toc:()=>o});const n=JSON.parse('{"id":"solutions/TVS2025/NowTHATsASuit","title":"NowTHATsASuit","description":"Tags: Bitwise DP","source":"@site/docs/solutions/TVS2025/NowTHATsASuit.mdx","sourceDirName":"solutions/TVS2025","slug":"/solutions/TVS2025/NowTHATsASuit","permalink":"/SeaFarmers/docs/solutions/TVS2025/NowTHATsASuit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"MushroomKingdom","permalink":"/SeaFarmers/docs/solutions/TVS2025/MushroomKingdom"},"next":{"title":"PNF-403","permalink":"/SeaFarmers/docs/solutions/TVS2025/PNF-403"}}');var i=a(74848),l=a(28453),t=(a(96540),a(42407),a(28092)),m=a(38866),c=a(40426);const r={},h="Now THATs A Suit Solution",d={},x="LearnToCode",o=[];function j(s){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.A,{moduleId:x}),"\n",(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"now-thats-a-suit-solution",children:"Now THATs A Suit Solution"})}),"\n",(0,i.jsx)(e.p,{children:"Tags: Bitwise DP"}),"\n",(0,i.jsx)(e.h1,{id:"initial-thoughts",children:"Initial Thoughts"}),"\n",(0,i.jsx)(e.p,{children:"For each query, we can try all the macthes."}),"\n",(0,i.jsxs)(e.p,{children:["This runs in ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"q"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(n*q*m)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6597em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,i.jsx)(e.h1,{id:"complete-search-implementation",children:"Complete Search Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(m.A,{language:"cpp",style:c.A,children:"#include <queue>\n#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream> \n#include <algorithm>\n#include <map>\nusing namespace std;\n\n\n\nint main() {\n  ios_base::sync_with_stdio(false);\n  cin.tie(NULL);\n  int n, m, p; \n  cin >> n >> m >> p; \n  vector<vector<int>> a(n, vector<int>(m)); \n  for(auto &u : a) for(auto &l : u) cin >> l; \n  int q; \n  cin >> q; \n  for(int i = 0; i < q; i++) {\n      int ans = 0; \n      vector<int> x(m);\n      for(auto &u : x) cin >> u; \n      for(int j = 0; j < n; j++) {\n          bool bad = false; \n          for(int k = 0; k < m; k++) {\n              if(x[k] > a[j][k]) bad = true; \n          }\n          if(!bad) ans++; \n      }\n      cout << ans << endl;\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h1,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsx)(e.p,{children:"The problem is just asking for the sum of an adventure's subset of suits. For each possible set,\nwe could count the number of subsets but this is too slow. We must use SOS DP."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"j"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j]"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," is the sum of the subsets of set ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," where the first ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"j"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," stats are less than\nor equal to ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"'s first ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"j"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," stats."]}),"\n",(0,i.jsxs)(e.p,{children:["We can transitition to ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"j"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j + 1]"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})," with ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"j"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[k][j]"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),", where the ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"k"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),"th stat is less than or equal to the ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"th stat."]}),"\n",(0,i.jsxs)(e.p,{children:["This runs in ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"script",children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"q"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"m"})]}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}((q+p^m)m)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"(("}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"})})]})})})})})]}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,i.jsx)(e.h1,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,i.jsx)(m.A,{language:"cpp",style:c.A,children:"#include <queue>\n#include <cmath>\n#include <cstdio>\n#include <vector>\n#include <iostream> \n#include <algorithm>\n#include <map>\nusing namespace std;\n\n\n\nint main() {\n  ios_base::sync_with_stdio(false);\n  cin.tie(NULL);\n  int n, m, p; \n  cin >> n >> m >> p; \n  vector<int> pow = {1}; \n  for(int i = 0; i < m; i++) pow.push_back(pow.back() * p); \n  vector<vector<int>> v(pow[m], vector<int>(m, p - 1)); \n  for(int i = 0; i < pow[m]; i++) {\n      int x = i; \n      for(int j = m - 1; j >= 0; j--) {\n          while(x >= pow[j]) x -= pow[j], v[i][j]--; \n      }\n  }\n  vector<vector<int>> dp(pow[m], vector<int>(m + 1, 0)); \n  for(int i = 0; i < n; i++) {\n      int cur = 0;\n      for(int j = 0; j < m; j++) {\n          int x; \n          cin >> x; \n          cur += pow[j] * x; \n      }\n      dp[cur][0]++; \n  }\n  for(int i = pow[m] - 1; i >= 0; i--) { \n      for(int j = 0; j < m; j++) {\n          for(int k = 0; k <= v[i][j]; k++) {\n              dp[i][j + 1] += dp[i + k * pow[j]][j]; \n          }\n      }\n  }\n  int q; \n  cin >> q; \n  for(int i = 0; i < q; i++) {\n      int cur = 0;\n      for(int j = 0; j < m; j++) {\n          int x; \n          cin >> x; \n          cur += pow[j] * x; \n      }\n      cout << dp[cur][m] << endl;\n  }\n}\n"})})]})}function p(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(j,{...s})}):j(s)}}}]);