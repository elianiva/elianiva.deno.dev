import{S as a,i as t,s,o as e,p as n,r as o,u as i,v as r,x as p,y as h,z as c,w as u,e as l,t as d,a as f,f as m,g as w,k,d as y,c as g,h as I,j as b,l as v,n as j}from"../../../chunks/stores-7ca13020.js";import{P as S}from"../../../chunks/project-e94646f8.js";import"../../../chunks/ProgressButton-549bf321.js";import"../../../chunks/Chrome-a579d3f1.js";function E(a){let t,s,e,n,o,i,r,p,h,c,u,S,E,$,x,T,P,R,z,A,C,J,B,N,q,K,M,G,L,W,H,O,V;return{c(){t=l("p"),s=l("strong"),e=d("Kanaizu"),n=d(" is an app that I made when I was starting to learn Svelte. I made this app because I want to help my friend memorise Japanese kana because we’re both learning Japanese at the time I’m writing this. It’s also because I want to try Routify. I made this app for about a week, maybe that’s way too long but hey, it was my second time so I barely know the basics."),o=f(),i=l("p"),r=d("I got the data from "),p=l("a"),h=d("Wikibooks"),c=d(". It has around ~508 words. I picked them randomly, most of them are N5 and N4. I picked them using a weird method. As you can see, the words that they provide has kanji because that’s how you would use it, with kanji. I only want the hiragana or katakana version. So what I did was scrape the data and make this tiny and unefficient script using js that would transform the data that I got from the site which is an array of words into an object that looks something like this."),u=f(),S=l("pre"),E=f(),$=l("p"),x=d("I converted it from kanji to hiragana/katakana using "),T=l("a"),P=d("this tool"),R=d(". Big thanks for the creator of that tool. It would be "),z=l("em"),A=d("very"),C=d(" tedious if it didn’t exist. Imagine converting hundreds of words manually."),J=f(),B=l("p"),N=d("I use Tailwind CSS for this project which means that I have to setup postcss. Again, because this is my second time trying Routify and my first time setting up Tailwind CSS specifically for Routify, as expected, I messed up. I have no idea what I was doing until a few hours later but it’s worth it. I learned something new."),q=f(),K=l("p"),M=d("I you’re interested with this app, go ahead and try it yourself ツ"),G=f(),L=l("p"),W=d("There’s some inconsistency though, but it’s "),H=l("em"),O=d("rarely"),V=d(" appear. I can’t fix it because it’s quite unpredictable. Basically, it won’t show your score. Just refresh the app if this happen."),this.h()},l(a){t=m(a,"P",{});var l=w(t);s=m(l,"STRONG",{});var d=w(s);e=k(d,"Kanaizu"),d.forEach(y),n=k(l," is an app that I made when I was starting to learn Svelte. I made this app because I want to help my friend memorise Japanese kana because we’re both learning Japanese at the time I’m writing this. It’s also because I want to try Routify. I made this app for about a week, maybe that’s way too long but hey, it was my second time so I barely know the basics."),l.forEach(y),o=g(a),i=m(a,"P",{});var f=w(i);r=k(f,"I got the data from "),p=m(f,"A",{href:!0,rel:!0});var I=w(p);h=k(I,"Wikibooks"),I.forEach(y),c=k(f,". It has around ~508 words. I picked them randomly, most of them are N5 and N4. I picked them using a weird method. As you can see, the words that they provide has kanji because that’s how you would use it, with kanji. I only want the hiragana or katakana version. So what I did was scrape the data and make this tiny and unefficient script using js that would transform the data that I got from the site which is an array of words into an object that looks something like this."),f.forEach(y),u=g(a),S=m(a,"PRE",{class:!0}),w(S).forEach(y),E=g(a),$=m(a,"P",{});var b=w($);x=k(b,"I converted it from kanji to hiragana/katakana using "),T=m(b,"A",{href:!0,rel:!0});var v=w(T);P=k(v,"this tool"),v.forEach(y),R=k(b,". Big thanks for the creator of that tool. It would be "),z=m(b,"EM",{});var j=w(z);A=k(j,"very"),j.forEach(y),C=k(b," tedious if it didn’t exist. Imagine converting hundreds of words manually."),b.forEach(y),J=g(a),B=m(a,"P",{});var Z=w(B);N=k(Z,"I use Tailwind CSS for this project which means that I have to setup postcss. Again, because this is my second time trying Routify and my first time setting up Tailwind CSS specifically for Routify, as expected, I messed up. I have no idea what I was doing until a few hours later but it’s worth it. I learned something new."),Z.forEach(y),q=g(a),K=m(a,"P",{});var _=w(K);M=k(_,"I you’re interested with this app, go ahead and try it yourself ツ"),_.forEach(y),G=g(a),L=m(a,"P",{});var D=w(L);W=k(D,"There’s some inconsistency though, but it’s "),H=m(D,"EM",{});var F=w(H);O=k(F,"rarely"),F.forEach(y),V=k(D," appear. I can’t fix it because it’s quite unpredictable. Basically, it won’t show your score. Just refresh the app if this happen."),D.forEach(y),this.h()},h(){I(p,"href","https://en.wikibooks.org/wiki/JLPT_Guide"),I(p,"rel","nofollow"),I(S,"class","language-json"),I(T,"href","https://nihongodera.com/tools/kana-converter"),I(T,"rel","nofollow")},m(a,l){b(a,t,l),v(t,s),v(s,e),v(t,n),b(a,o,l),b(a,i,l),v(i,r),v(i,p),v(p,h),v(i,c),b(a,u,l),b(a,S,l),S.innerHTML='<code class="language-json"><span class="token punctuation">&#123;</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span>\n      <span class="token property">"hiragana"</span><span class="token operator">:</span> <span class="token string">"たべる"</span><span class="token punctuation">,</span>\n      <span class="token property">"romaji"</span><span class="token operator">:</span> <span class="token string">"taberu"</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span>\n      <span class="token property">"hiragana"</span><span class="token operator">:</span> <span class="token string">"わかる"</span><span class="token punctuation">,</span>\n      <span class="token property">"romaji"</span><span class="token operator">:</span> <span class="token string">"wakaru"</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span></code>',b(a,E,l),b(a,$,l),v($,x),v($,T),v(T,P),v($,R),v($,z),v(z,A),v($,C),b(a,J,l),b(a,B,l),v(B,N),b(a,q,l),b(a,K,l),v(K,M),b(a,G,l),b(a,L,l),v(L,W),v(L,H),v(H,O),v(L,V)},p:j,d(a){a&&y(t),a&&y(o),a&&y(i),a&&y(u),a&&y(S),a&&y(E),a&&y($),a&&y(J),a&&y(B),a&&y(q),a&&y(K),a&&y(G),a&&y(L)}}}function $(a){let t,s;const l=[x];let d={$$slots:{default:[E]},$$scope:{ctx:a}};for(let n=0;n<l.length;n+=1)d=e(d,l[n]);return t=new S({props:d}),{c(){n(t.$$.fragment)},l(a){o(t.$$.fragment,a)},m(a,e){i(t,a,e),s=!0},p(a,[s]){const e=0&s?r(l,[u(x)]):{};1&s&&(e.$$scope={dirty:s,ctx:a}),t.$set(e)},i(a){s||(p(t.$$.fragment,a),s=!0)},o(a){h(t.$$.fragment,a),s=!1},d(a){c(t,a)}}}const x={title:"Kanaizu",date:"2020-09-29T00:00:00.000Z",desc:"A japanese kana quiz app built using Routify and TailwindCSS",demo:"https://kanaizu.vercel.app",source:"https://github.com/elianiva/kanaizu",layout:"project",stack:[["Routify","https://routify.dev"],["TailwindCSS","https://tailwindcss.com"],["Vercel","https://vercel.app"]]};export default class extends a{constructor(a){super(),t(this,a,null,$,s,{})}}export{x as metadata};