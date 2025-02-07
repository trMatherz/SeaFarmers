"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2746],{54422:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>x,contentTitle:()=>u,default:()=>w,frontMatter:()=>p,metadata:()=>t,moduleId:()=>j,toc:()=>N,topicId:()=>g});const t=JSON.parse('{"id":"modules/Novice/BinarySearch","title":"BinarySearch","description":"Prerequisites: Nothing","source":"@site/docs/modules/Novice/BinarySearch.mdx","sourceDirName":"modules/Novice","slug":"/modules/Novice/BinarySearch","permalink":"/SeaFarmers/docs/modules/Novice/BinarySearch","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"BasicSorting","permalink":"/SeaFarmers/docs/modules/Novice/BasicSorting"},"next":{"title":"Functions","permalink":"/SeaFarmers/docs/modules/Novice/Functions"}}');var l=a(74848),n=a(28453),r=(a(96540),a(42407),a(41955)),c=a(47294),i=a(38235),m=a(95430),o=a(28092),d=(a(13132),a(38866)),h=a(40426);const p={},u="Binary Search",x={},j="Novice",g="BinarySearch",N=[];function f(e){const s={annotation:"annotation",h1:"h1",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.A,{moduleId:j}),"\n",(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"binary-search",children:"Binary Search"})}),"\n",(0,l.jsx)(s.p,{children:"Prerequisites: Nothing"}),"\n",(0,l.jsx)(s.h1,{id:"resources",children:"Resources"}),"\n",(0,l.jsx)(i.A,{moduleId:j,topicId:g}),"\n",(0,l.jsx)(s.h1,{id:"using-library-functions",children:"Using Library Functions"}),"\n",(0,l.jsx)(s.p,{children:"I think its best to see the goal of binary search before understanding general applications since there are so many.\nSo, consider the problem where we have a sorted array and are using a set. We can use the two following functions to\nfind either the first element that is strictly greater or greater than ot equal to a certain value."}),"\n",(0,l.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,l.jsx)(d.A,{language:"cpp",style:h.A,children:"\nvector<int> a = {0, 1, 2, 5, 6}; \nint pos = upper_bound(a.begin(), a.end(), 2); // pos = 3, since a[3] >= 3\npos = upper_bound(a.begin(), a.end(), 2); // pos = 2, since a[2] >= 2\n"})}),"\n",(0,l.jsx)(s.p,{children:"Note that on a vector, it only works if the vector is in SORTED order."}),"\n",(0,l.jsxs)(s.p,{children:["These functions run in ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(s.msub,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"log"}),(0,l.jsx)(s.mo,{children:"\u2061"})]}),(0,l.jsx)(s.mn,{children:"2"})]}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(\\log_2(n))"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsxs)(s.span,{className:"mop",children:[(0,l.jsxs)(s.span,{className:"mop",children:["lo",(0,l.jsx)(s.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(s.span,{className:"msupsub",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.207em"},children:(0,l.jsxs)(s.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(s.span,{className:"mord mtight",children:"2"})})]})}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.2441em"},children:(0,l.jsx)(s.span,{})})})]})})]}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mclose",children:"))"})]})})]})]}),"\n",(0,l.jsx)(s.h1,{id:"library-function-focus-problem",children:"Library Function Focus Problem"}),"\n",(0,l.jsx)(c.A,{moduleId:j,topicId:g,location:"sample1"}),"\n",(0,l.jsx)(s.h1,{id:"general-applications",children:"General Applications"}),"\n",(0,l.jsxs)(s.p,{children:["Instead of being limited to certain problems, we can binary search on any monotonic function. A funtion is monotonic\nif ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mo,{children:"="})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x) <= "})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<="})]})})]}),"f(x + 1",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mo,{stretchy:"false",children:")"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:")"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})," or ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:">"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x) >= f(x + 1)"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:">="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," for all values of ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mi,{children:"x"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["If we are to find the first value of ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mi,{children:"x"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," where ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})," is a certain value, we can take are current search-able area,\nand then keep dividing it into two until we have one value."]}),"\n",(0,l.jsxs)(s.p,{children:["This finds the first value with ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsx)(s.mi,{children:"v"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x) <= v"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})]})]})," if ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})," is decreasing:"]}),"\n",(0,l.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,l.jsx)(d.A,{language:"cpp",style:h.A,children:"\nint l = 0, r = n - 1; \nwhile(l < r) {\n  int m = (l + r) / 2; \n  if(f(m) <= v) r = m; \n  else l = m + 1; \n}\n"})}),"\n",(0,l.jsxs)(s.p,{children:["This finds the last value with ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mi,{children:"v"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x) < v"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})]})]})," if ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(x)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})," is increasing:"]}),"\n",(0,l.jsx)("div",{style:{transform:"translateX(150px)"},children:(0,l.jsx)(d.A,{language:"cpp",style:h.A,children:"int l = 0, r = n - 1; \nwhile(l < r) {\n  int m = (l + r + 1) / 2; // Add one if r = m - 1 \n  if(f(m) >= v) r = m - 1; \n  else l = m ;\n}\n"})}),"\n",(0,l.jsxs)(s.p,{children:["Binary Searching runs in ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(s.msub,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"log"}),(0,l.jsx)(s.mo,{children:"\u2061"})]}),(0,l.jsx)(s.mn,{children:"2"})]}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"\u2217"}),(0,l.jsx)(s.mi,{mathvariant:"script",children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathcal{O}(\\log_2(n)) * \\mathcal{O}(f(x))"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsxs)(s.span,{className:"mop",children:[(0,l.jsxs)(s.span,{className:"mop",children:["lo",(0,l.jsx)(s.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(s.span,{className:"msupsub",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.207em"},children:(0,l.jsxs)(s.span,{style:{top:"-2.4559em",marginRight:"0.05em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(s.span,{className:"mord mtight",children:"2"})})]})}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.2441em"},children:(0,l.jsx)(s.span,{})})})]})})]}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mclose",children:"))"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathcal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mclose",children:"))"})]})]})]})]}),"\n",(0,l.jsx)(s.h1,{id:"general-applications-focus-problem",children:"General Applications Focus Problem"}),"\n",(0,l.jsx)(c.A,{moduleId:j,topicId:g,location:"sample2"}),"\n",(0,l.jsx)(s.h1,{id:"more-practice",children:"More Practice"}),"\n",(0,l.jsx)(r.A,{moduleId:j,topicId:g,location:"list"}),"\n",(0,l.jsx)(m.A,{moduleId:j,topicId:g})]})}function w(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},41955:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(96540),l=a(94335);const n={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9",helpLink:"helpLink_wCOy",toggleTagsButton:"toggleTagsButton_YUf1"};var r=a(44586);const c=e=>{let{moduleId:s,topicId:a,location:c}=e;const{siteConfig:i}=(0,r.A)(),m=i.customFields.backendUrl,[o,d]=(0,t.useState)(null),[h,p]=(0,t.useState)(null),[u,x]=(0,t.useState)(!1),[j,g]=(0,t.useState)(null),[N,f]=(0,t.useState)(null),[w,y]=(0,t.useState)({}),[b,C]=(0,t.useState)(null),[E,v]=(0,t.useState)({}),[k,_]=(0,t.useState)(!1),I=(0,t.useRef)(null),S=(0,t.useRef)(null);(0,t.useEffect)((()=>{s&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await l.A.get(`${m}/api/module/${s}?userId=${e}`,{withCredentials:!0});d(a.data)}catch(j){g(j.response?j.response.data:j.message)}finally{x(!1)}}()}),[s]),(0,t.useEffect)((()=>{if(!o||!a)return;const e=o.topics.find((e=>e.topicId===a));e?p(e):g("Topic not found")}),[o,a]);const A=async(e,t)=>{const n=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await l.A.post(`${m}/api/problem/updateState?userId=${e}`,{moduleId:s,topicId:a,problemId:n,newState:t},{withCredentials:!0});p((e=>{const s=e.problems.map((e=>e.problemId===n?{...e,state:t}:e));return{...e,problems:s}})),f(null)}catch(j){console.error("Error updating problem state:",j)}};return(0,t.useEffect)((()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&f(null),S.current&&!S.current.contains(e.target)&&C(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),u?t.createElement("p",null,"Loading data..."):j?t.createElement("p",null,"Error: ",j):t.createElement("div",null,h&&h.problems&&t.createElement("table",{className:n.problemTable},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",{className:n.statusColumn}),t.createElement("th",{className:n.sourceColumn},"Source"),t.createElement("th",{className:n.starredColumn}),t.createElement("th",{className:n.problemColumn},"Problem"),t.createElement("th",{className:n.difficultyColumn},"Dif"),t.createElement("th",{className:n.tagsColumn},t.createElement("button",{onClick:()=>_((e=>!e)),className:n.toggleTagsButton},k?"Hide Tags":"Show Tags")),t.createElement("th",{className:n.helpColumn}))),t.createElement("tbody",null,h.problems&&Array.isArray(h.problems)&&h.problems.filter((e=>e.location===c)).map(((e,s)=>e?t.createElement("tr",{key:e.uniqueId||s},t.createElement("td",{className:n.statusCell},t.createElement("span",{className:`${n.stateCircle} ${n[`state${e.state}`]}`,onClick:e=>((e,s)=>{if(N===e)f(null),y({});else{const a=s.target.getBoundingClientRect();y({top:a.bottom+window.scrollY,left:a.left+window.scrollX}),f(e)}})(s,e)}),N===s&&t.createElement("div",{ref:I,className:n.dropdownMenu,style:{position:"absolute"}},t.createElement("ul",null,t.createElement("li",{onClick:()=>A(e,2)},"Solved"),t.createElement("li",{onClick:()=>A(e,1)},"Skipped"),t.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),t.createElement("td",{className:n.sourceCell},e.source),t.createElement("td",{className:n.starredCell},e.star?"\u2b50":""),t.createElement("td",{className:n.problemCell},t.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.problemLink},e.name)),t.createElement("td",{className:n.difficultyCell},e.difficulty),t.createElement("td",{className:n.tagsCell},k&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),t.createElement("td",{className:n.helpCell},t.createElement("span",{className:n.helpButton,onClick:e=>((e,s)=>{if(b===e)C(null),v({});else{const a=s.target.getBoundingClientRect();v({top:a.bottom+window.scrollY,left:a.left+window.scrollX}),C(e)}})(s,e)},"Help"),b===s&&t.createElement("div",{ref:S,className:n.dropdownMenu,style:{position:"absolute"}},t.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,s)=>t.createElement("li",{key:s},t.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.helpLink},e.name)))):t.createElement("li",null,"No Help"))))):null)))))}},38235:(e,s,a)=>{a.d(s,{A:()=>j});var t=a(96540),l=a(94335);const n="resourceTable_ow7w",r="nameColumn_cltC",c="nameCell_dZOO",i="sourceColumn_R2BC",m="sourceCell_NfiE",o="starredColumn_Ycnc",d="starredCell_Cq7S",h="descriptionColumn_X0UP",p="descriptionCell_gbNW",u="resourceLink_QTdW";var x=a(44586);const j=e=>{let{moduleId:s,topicId:a}=e;const{siteConfig:j}=(0,x.A)(),g=j.customFields.backendUrl,[N,f]=(0,t.useState)(null),[w,y]=(0,t.useState)(null),[b,C]=(0,t.useState)(!1),[E,v]=(0,t.useState)(null);return(0,t.useEffect)((()=>{s&&async function(){C(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await l.A.get(`${g}/api/module/${s}?userId=${e}`,{withCredentials:!0});f(a.data)}catch(E){v(E.response?E.response.data:E.message)}finally{C(!1)}}()}),[s]),(0,t.useEffect)((()=>{if(!N||!a)return;const e=N.topics.find((e=>e.topicId===a));e?y(e):v("Topic not found")}),[N,a]),b?t.createElement("p",null,"Loading data..."):E?t.createElement("p",null,"Error: ",E):t.createElement("div",null,w&&w.resources&&t.createElement("table",{className:n},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",{className:i},"Resources"),t.createElement("th",{className:o}),t.createElement("th",{className:r}),t.createElement("th",{className:h}))),t.createElement("tbody",null,w.resources.map(((e,s)=>t.createElement("tr",{key:e.uniqueId||s},t.createElement("td",{className:m},e.source),t.createElement("td",{className:d},e.star?"\u2b50":""),t.createElement("td",{className:c},t.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:u},e.name)),t.createElement("td",{className:p},e.description)))))))}},47294:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(96540),l=a(94335);const n={sampleTable:"sampleTable_FWCi",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v",helpLink:"helpLink_CBzA",toggleTagsButton:"toggleTagsButton_rv1D"};var r=a(44586);const c=e=>{let{moduleId:s,topicId:a,location:c}=e;const{siteConfig:i}=(0,r.A)(),m=i.customFields.backendUrl,[o,d]=(0,t.useState)(null),[h,p]=(0,t.useState)(null),[u,x]=(0,t.useState)(!1),[j,g]=(0,t.useState)(null),[N,f]=(0,t.useState)(null),[w,y]=(0,t.useState)({}),[b,C]=(0,t.useState)(null),[E,v]=(0,t.useState)({}),[k,_]=(0,t.useState)(!1),I=(0,t.useRef)(null),S=(0,t.useRef)(null);(0,t.useEffect)((()=>{s&&async function(){x(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await l.A.get(`${m}/api/module/${s}?userId=${e}`,{withCredentials:!0});d(a.data)}catch(j){g(j.response?j.response.data:j.message)}finally{x(!1)}}()}),[s]),(0,t.useEffect)((()=>{if(!o||!a)return;const e=o.topics.find((e=>e.topicId===a));e?p(e):g("Topic not found")}),[o,a]),(0,t.useEffect)((()=>{const e=e=>{I.current&&!I.current.contains(e.target)&&f(null),S.current&&!S.current.contains(e.target)&&C(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const A=async(e,t)=>{const n=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await l.A.post(`${m}/api/problem/updateState?userId=${e}`,{moduleId:s,topicId:a,problemId:n,newState:t},{withCredentials:!0}),p((e=>{const s=e.problems.map((e=>e.problemId===n?{...e,state:t}:e));return{...e,problems:s}})),f(null)}catch(j){console.error("Error updating problem state:",j)}};return u?t.createElement("p",null,"Loading data..."):j?t.createElement("p",null,"Error: ",j):t.createElement("div",null,h?.problems?.length>0?t.createElement("table",{className:n.sampleTable},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",{className:n.statusColumn}),t.createElement("th",{className:n.sourceColumn},"Source"),t.createElement("th",{className:n.starredColumn}),t.createElement("th",{className:n.problemColumn},"Problem"),t.createElement("th",{className:n.difficultyColumn},"Dif"),t.createElement("th",{className:n.tagsColumn},t.createElement("button",{onClick:()=>_((e=>!e)),className:n.toggleTagsButton},k?"Hide Tags":"Show Tags")),t.createElement("th",{className:n.helpColumn}))),t.createElement("tbody",null,h.problems.filter((e=>e.location===c)).map(((e,s)=>t.createElement("tr",{key:e.uniqueId||s},t.createElement("td",{className:n.statusCell},t.createElement("span",{className:`${n.stateCircle} ${n[`state${e.state}`]}`,onClick:e=>((e,s)=>{if(N===e)f(null),y({});else{const a=s.target.getBoundingClientRect();y({top:a.bottom+window.scrollY,left:a.left+window.scrollX}),f(e)}})(s,e)}),N===s&&t.createElement("div",{className:n.dropdownMenu,ref:I,style:{position:"absolute"}},t.createElement("ul",null,t.createElement("li",{onClick:()=>A(e,2)},"Solved"),t.createElement("li",{onClick:()=>A(e,1)},"Skipped"),t.createElement("li",{onClick:()=>A(e,0)},"Unseen")))),t.createElement("td",{className:n.sourceCell},e.source),t.createElement("td",{className:n.starredCell},e.star?"\u2b50":""),t.createElement("td",{className:n.problemCell},t.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.problemLink},e.name)),t.createElement("td",{className:n.difficultyCell},e.difficulty||"Unknown"),t.createElement("td",{className:n.tagsCell},k&&e.tags&&Array.isArray(e.tags)?e.tags.join(", "):""),t.createElement("td",{className:n.helpCell},t.createElement("span",{className:n.helpButton,onClick:e=>((e,s)=>{if(b===e)C(null),v({});else{const a=s.target.getBoundingClientRect();v({top:a.bottom+window.scrollY,left:a.left+window.scrollX}),C(e)}})(s,e)},"Help"),b===s&&t.createElement("div",{className:n.dropdownMenu,ref:S,style:{position:"absolute"}},t.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,s)=>t.createElement("li",{key:s},t.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:n.helpLink},e.name)))):t.createElement("li",null,"No Help"))))))))):t.createElement("p",null,"No problems data available."))}},13132:(e,s,a)=>{a(96540)},95430:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(96540),l=a(94335);const n={topicProgress:"topicProgress_vBvg",stateLabel:"stateLabel_nOCn","state-0":"state-0_jLw4","state-1":"state-1_era8","state-2":"state-2_B6h4",label:"label_wsxD",dropdownMenu:"dropdownMenu_mCPJ",dropdownItem:"dropdownItem_VeAh"};var r=a(44586);const c=e=>{let{moduleId:s,topicId:a}=e;const{siteConfig:c}=(0,r.A)(),i=c.customFields.backendUrl,[m,o]=(0,t.useState)(null),[d,h]=(0,t.useState)(null),[p,u]=(0,t.useState)(!0),[x,j]=(0,t.useState)(null),[g,N]=(0,t.useState)(null),[f,w]=(0,t.useState)({}),y=(0,t.useRef)(null);(0,t.useEffect)((()=>{s&&async function(){u(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await l.A.get(`${i}/api/module/${s}?userId=${e}`,{withCredentials:!0});o(a.data)}catch(x){j(x.response?x.response.data:x.message)}finally{u(!1)}}()}),[s]),(0,t.useEffect)((()=>{if(!m||!a)return;const e=m.topics.find((e=>e.topicId===a));e?h(e):j("Topic not found")}),[m,a]);if((0,t.useEffect)((()=>{const e=e=>{y.current&&!y.current.contains(e.target)&&N(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),p)return t.createElement("p",null,"Loading data...");if(x)return t.createElement("p",null,"Error: ",x);const b=["Unseen","Skipped","Solved"],C=b[d?.state??0];return t.createElement("div",{className:n.topicProgress},t.createElement("div",{className:n.label},"Topic Progress:"),t.createElement("div",{className:`${n.stateLabel} ${n[`state-${d?.state??0}`]}`,onClick:e=>{const s=e.target.getBoundingClientRect();w({top:s.bottom+window.scrollY-150,left:s.left+window.scrollX}),N(!g)}},C),g&&t.createElement("div",{className:n.dropdownMenu,ref:y,style:{position:"absolute",top:`${f.top}px`,left:`${f.left}px`}},b.map(((e,r)=>t.createElement("div",{key:r,onClick:()=>(async e=>{h((s=>({...s,state:e})));try{const t=sessionStorage.getItem("userId")||"guest";if(!t)throw new Error("User ID not found in session storage");await l.A.post(`${i}/api/topic/updateState?userId=${t}`,{moduleId:s,topicId:a,newState:e},{withCredentials:!0}),N(null)}catch(t){j("Failed to update state."),h((e=>({...e,state:e.state})))}})(r),className:n.dropdownItem},e)))))}}}]);