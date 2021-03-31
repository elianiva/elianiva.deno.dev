import{S as e,i as t,s as a,o,p as s,r,u as i,v as n,x as h,y as l,z as c,w as p,e as f,t as g,a as d,f as m,g as u,k as y,d as b,c as v,h as k,j as I,l as w,n as E}from"../../../chunks/stores-7ca13020.js";import{P as A}from"../../../chunks/post-14e8d485.js";import"../../../chunks/ProgressButton-549bf321.js";import"../../../chunks/theme-0c5a7997.js";function P(e){let t,a,o,s,r,i,n,h,l,c,p,A,P,j,T,x,S,C,H,L,$,q,F,G,M,z,D,W,O,N,B,J,U,Y,R,X,V,Z,K,Q,_,ee,te,ae,oe,se,re,ie,ne,he,le,ce,pe,fe,ge,de,me,ue,ye,be,ve,ke,Ie,we,Ee,Ae,Pe,je,Te,xe,Se,Ce,He,Le,$e,qe,Fe,Ge,Me,ze,De,We,Oe,Ne,Be,Je,Ue,Ye,Re,Xe,Ve,Ze,Ke,Qe,_e,et,tt,at,ot,st,rt,it,nt,ht,lt,ct,pt,ft,gt,dt,mt,ut,yt,bt,vt,kt,It,wt,Et,At,Pt,jt,Tt,xt,St,Ct,Ht,Lt,$t,qt,Ft,Gt,Mt,zt,Dt,Wt,Ot,Nt,Bt,Jt,Ut,Yt,Rt,Xt,Vt,Zt,Kt,Qt,_t,ea,ta,aa,oa,sa,ra,ia,na,ha,la,ca,pa,fa,ga,da,ma,ua,ya,ba,va,ka,Ia,wa,Ea,Aa,Pa,ja,Ta,xa,Sa,Ca,Ha,La,$a,qa,Fa,Ga,Ma,za,Da,Wa,Oa,Na,Ba,Ja,Ua,Ya,Ra,Xa,Va,Za,Ka,Qa,_a,eo,to,ao,oo,so,ro,io,no,ho,lo,co,po,fo,go,mo,uo,yo,bo,vo,ko,Io,wo,Eo,Ao,Po,jo,To,xo,So,Co,Ho,Lo,$o,qo,Fo,Go,Mo,zo,Do,Wo,Oo,No,Bo,Jo,Uo,Yo,Ro,Xo;return{c(){t=f("h1"),a=f("a"),o=g("Table of Content"),s=d(),r=f("ul"),i=f("li"),n=f("p"),h=f("a"),l=g("Introduction"),c=d(),p=f("li"),A=f("p"),P=f("a"),j=g("Preparation"),T=d(),x=f("li"),S=f("p"),C=f("a"),H=g("Coding Session"),L=d(),$=f("ul"),q=f("li"),F=f("a"),G=g("Cleaning Up"),M=d(),z=f("li"),D=f("a"),W=g("Header and Footer"),O=d(),N=f("li"),B=f("a"),J=g("Pages"),U=d(),Y=f("li"),R=f("a"),X=g("Dealing with Images"),V=d(),Z=f("li"),K=f("a"),Q=g("Stylings the page"),_=d(),ee=f("li"),te=f("a"),ae=g("Testing"),oe=d(),se=f("li"),re=f("a"),ie=g("Tags, category, and pagination"),ne=d(),he=f("li"),le=f("a"),ce=g("Making the desktop site"),pe=d(),fe=f("li"),ge=f("a"),de=g("Themes"),me=d(),ue=f("li"),ye=f("p"),be=f("a"),ve=g("Conclusion"),ke=d(),Ie=f("h1"),we=f("a"),Ee=g("Introduction"),Ae=d(),Pe=f("p"),je=g("Hello everyone, I hope you all doing great! Welcome to my second part of my process of creating this blog using Gatsby SSG. Last time, I tell you about the design process in Figma which you can read over "),Te=f("a"),xe=g("Here"),Se=g(". In this part, I will talk about my ‘coding’ process."),Ce=d(),He=f("h1"),Le=f("a"),$e=g("Preparation"),qe=d(),Fe=f("p"),Ge=g("I initialize the Gatsby project using gatsby-cli. To install gatsby-cli is dead simple, you just need to run "),Me=f("code"),ze=g("npm i gatsby-cli -g"),De=g(" and there you have it. Then I initialize gatsby project using "),We=f("code"),Oe=g("gatsby new <project-name>"),Ne=g(" command. After having the project created, I ran "),Be=f("code"),Je=g("gatsby develop"),Ue=g(" to start the development server. Now everything is set up, it’s time to jump to my favorite text editor of all time which is Neovim."),Ye=d(),Re=f("h1"),Xe=f("a"),Ve=g("Coding Session"),Ze=d(),Ke=f("h2"),Qe=f("a"),_e=g("Cleaning Up"),et=d(),tt=f("p"),at=g("First thing first, I make my gatsby project to be a plain project by deleting unnecessary stuff like images, header and footer. After cleaning up, I installed "),ot=f("a"),st=g("PostCSS"),rt=g(" and "),it=f("a"),nt=g("Autoprefixer"),ht=g(". Basically, it adds prefix for browser compatibility to my css so I don’t have to add it manually."),lt=d(),ct=f("h2"),pt=f("a"),ft=g("Header and Footer"),gt=d(),dt=f("p"),mt=g("As per usual, I make the mobile version first. I started by making the fixed navbar. I quite struggle on the hamburger menu since I never make an animated hamburger menu, but thanks to "),ut=f("a"),yt=g("This"),bt=g(" I figure it out. It uses checkbox to decide the hamburger state, I never use that technique before. Props to the author for that pen."),vt=d(),kt=f("p"),It=g("After finishing the navbar, I made the overlay menu when you click the hamburger and gave it a fade effect when opening and closing. Mobile navbar is completed, so I moved to footer. When I first made the footer, I hardcoded the links of my social media to the JSX but after watching videos about Gatsby "),wt=f("a"),Et=g("Here"),At=g(", it is better to use the graphql query to load the links from gatsby-config. I highly recomend checking that out if you don’t know what Gatsby JS is and want to get started"),Pt=d(),jt=f("h2"),Tt=f("a"),xt=g("Pages"),St=d(),Ct=f("p"),Ht=g("After finishing Navbar and Footer, It is time to make the about page because it’s the easiest."),Lt=d(),$t=f("p"),qt=g("I added the slight move up animation when you go to the home page to make it look a bit nice. I didn’t create the posts list yet on home page because I haven’t created any post. I made the archives page after that, just the layout of it so all of the buttons on the navbar have a destination page. Then I make the post page which is the most challenging part for me."),Ft=d(),Gt=f("p"),Mt=g("First of all, I installed gatsby-transformer-remark which will transform my markdown files to html that can be used for the blog post. I made the place holder posts just to make sure that it’s all working also to use it as a placeholder for the latest posts list."),zt=d(),Dt=f("h2"),Wt=f("a"),Ot=g("Dealing with Images"),Nt=d(),Bt=f("p"),Jt=g("I use gatsby-image to display the card image on the card component to improve my website performance. Gatsby-image is just great. It blurs your image when it’s not fully loaded so it doesn’t messed up your dom and you won’t see those grey backgrounds or weird stutter that you usually see when the image isn’t fully loaded."),Ut=d(),Yt=f("p"),Rt=g("The card component that I made contains several stuff that comes from graphql query which takes data from markdown frontmatter. After finishing the card component, I made the page template for each post. When I made it, I changed my mind from being a colorful website to a monochromatic website."),Xt=d(),Vt=f("p"),Zt=g("I hosted the image on "),Kt=f("a"),Qt=g("Cloudinary"),_t=g(" so it doesn’t take my repository space just for images. If you have a better solution, feel free to hit me up!"),ea=d(),ta=f("h2"),aa=f("a"),oa=g("Stylings the page"),sa=d(),ra=f("p"),ia=g("I make the css for my blog page, it was just a simple thing, nothing really special except for the typography. I changed some of my initial mockup design because I think it doesn’t look that good. Who would’ve thought that choosing a font for your website could be so difficult. I went through several iteration to find the one that I like the most."),na=d(),ha=f("p"),la=g("I also added the table of contents to make it easier for the user when navigating through my blog posts."),ca=d(),pa=f("p"),fa=f("img"),da=d(),ma=f("p"),ua=g("After making the TOC, I added the "),ya=f("code"),ba=g("<pre>"),va=g(" tag which I really like from a blog using a plugin called "),ka=f("code"),Ia=g("gatsby-remark-prismjs"),wa=g(". As the name says, it utilize "),Ea=f("a"),Aa=g("Prism JS"),Pa=g(" to highlight my code. When I designing the page, I didn’t think that I could make this feature. But it is so simple, like stupid simple. You just add the plugin and the theme, that’s it. I made the theme on "),ja=f("a"),Ta=g("this site"),xa=g(". It was "),Sa=f("em"),Ca=g("very"),Ha=g(" helpful. Here’s an example of prismjs in action."),La=d(),$a=f("pre"),qa=d(),Fa=f("pre"),Ga=d(),Ma=f("h2"),za=f("a"),Da=g("Testing"),Wa=d(),Oa=f("p"),Na=g("Finally, I can test the page using the real markdown and not stupid placeholder that I made lol. I decided to use my previous post which is the design process in figma. All looks good. I moved to other features."),Ba=d(),Ja=f("h2"),Ua=f("a"),Ya=g("Tags, category, and pagination"),Ra=d(),Xa=f("p"),Va=g("My blogs have tags and category for each of them. So, making a page that index all of the tags and category would be a good idea. It was quite a simple process by utilizing node api that can be configured in "),Za=f("code"),Ka=g("gatsby-node.js"),Qa=g(" file just like when I made the blog page."),_a=d(),eo=f("p"),to=g("As for the pagination, it was a bit tricky. I found a good tutorial that helped me made the pagination. "),ao=f("a"),oo=g("Here it is."),so=d(),ro=f("h2"),io=f("a"),no=g("Making the desktop site"),ho=d(),lo=f("p"),co=g("The mobile version is finished. (Yay!) I can finally make the desktop version. First thing first, I changed to navbar to make it more suitable for the desktop. I removed the hamburger and changed it to text menu that has a hover effect."),po=d(),fo=f("p"),go=f("img"),uo=d(),yo=f("p"),bo=g("After doing that, I made the card component to be side by side. Here’s what I mean."),vo=d(),ko=f("p"),Io=f("img"),Eo=d(),Ao=f("h2"),Po=f("a"),jo=g("Themes"),To=d(),xo=f("p"),So=g("Now this is what I liked the most. Creating another theme brings you to another perspective of your website. Of course I make the light theme that is switchable automatically by default according to the time of the day and manually. Since I didn’t use CSS variables from the start, I have to replace all of the colours in css manually to variables to be able to make the switch for the theme. (Duh, silly me.)"),Co=d(),Ho=f("p"),Lo=g("I utilize react context for storing the colours variables. Big thanks to "),$o=f("a"),qo=g("this article"),Fo=g(" for making the theme toggler possible for me. I changed quite a bit of the colours from my design earlier."),Go=d(),Mo=f("h1"),zo=f("a"),Do=g("Conclusion"),Wo=d(),Oo=f("p"),No=g("The coding process took the longest time to do. According to github, it took around about 17 days. Well, it wouldn’t be that long if I’m not being a lazy person lol. I also got a lot of school stuff (homework, etc). Like, "),Bo=f("em"),Jo=g("a lot"),Uo=g("."),Yo=d(),Ro=f("p"),Xo=g("Alright, let’s end this post since it’s quite a lengthy one. The next part is about deploying to github pages and other stuff. See ya next time!"),this.h()},l(e){t=m(e,"H1",{id:!0});var f=u(t);a=m(f,"A",{href:!0});var g=u(a);o=y(g,"Table of Content"),g.forEach(b),f.forEach(b),s=v(e),r=m(e,"UL",{});var d=u(r);i=m(d,"LI",{});var k=u(i);n=m(k,"P",{});var I=u(n);h=m(I,"A",{href:!0});var w=u(h);l=y(w,"Introduction"),w.forEach(b),I.forEach(b),k.forEach(b),c=v(d),p=m(d,"LI",{});var E=u(p);A=m(E,"P",{});var ga=u(A);P=m(ga,"A",{href:!0});var mo=u(P);j=y(mo,"Preparation"),mo.forEach(b),ga.forEach(b),E.forEach(b),T=v(d),x=m(d,"LI",{});var wo=u(x);S=m(wo,"P",{});var Vo=u(S);C=m(Vo,"A",{href:!0});var Zo=u(C);H=y(Zo,"Coding Session"),Zo.forEach(b),Vo.forEach(b),L=v(wo),$=m(wo,"UL",{});var Ko=u($);q=m(Ko,"LI",{});var Qo=u(q);F=m(Qo,"A",{href:!0});var _o=u(F);G=y(_o,"Cleaning Up"),_o.forEach(b),Qo.forEach(b),M=v(Ko),z=m(Ko,"LI",{});var es=u(z);D=m(es,"A",{href:!0});var ts=u(D);W=y(ts,"Header and Footer"),ts.forEach(b),es.forEach(b),O=v(Ko),N=m(Ko,"LI",{});var as=u(N);B=m(as,"A",{href:!0});var os=u(B);J=y(os,"Pages"),os.forEach(b),as.forEach(b),U=v(Ko),Y=m(Ko,"LI",{});var ss=u(Y);R=m(ss,"A",{href:!0});var rs=u(R);X=y(rs,"Dealing with Images"),rs.forEach(b),ss.forEach(b),V=v(Ko),Z=m(Ko,"LI",{});var is=u(Z);K=m(is,"A",{href:!0});var ns=u(K);Q=y(ns,"Stylings the page"),ns.forEach(b),is.forEach(b),_=v(Ko),ee=m(Ko,"LI",{});var hs=u(ee);te=m(hs,"A",{href:!0});var ls=u(te);ae=y(ls,"Testing"),ls.forEach(b),hs.forEach(b),oe=v(Ko),se=m(Ko,"LI",{});var cs=u(se);re=m(cs,"A",{href:!0});var ps=u(re);ie=y(ps,"Tags, category, and pagination"),ps.forEach(b),cs.forEach(b),ne=v(Ko),he=m(Ko,"LI",{});var fs=u(he);le=m(fs,"A",{href:!0});var gs=u(le);ce=y(gs,"Making the desktop site"),gs.forEach(b),fs.forEach(b),pe=v(Ko),fe=m(Ko,"LI",{});var ds=u(fe);ge=m(ds,"A",{href:!0});var ms=u(ge);de=y(ms,"Themes"),ms.forEach(b),ds.forEach(b),Ko.forEach(b),wo.forEach(b),me=v(d),ue=m(d,"LI",{});var us=u(ue);ye=m(us,"P",{});var ys=u(ye);be=m(ys,"A",{href:!0});var bs=u(be);ve=y(bs,"Conclusion"),bs.forEach(b),ys.forEach(b),us.forEach(b),d.forEach(b),ke=v(e),Ie=m(e,"H1",{id:!0});var vs=u(Ie);we=m(vs,"A",{href:!0});var ks=u(we);Ee=y(ks,"Introduction"),ks.forEach(b),vs.forEach(b),Ae=v(e),Pe=m(e,"P",{});var Is=u(Pe);je=y(Is,"Hello everyone, I hope you all doing great! Welcome to my second part of my process of creating this blog using Gatsby SSG. Last time, I tell you about the design process in Figma which you can read over "),Te=m(Is,"A",{href:!0,rel:!0});var ws=u(Te);xe=y(ws,"Here"),ws.forEach(b),Se=y(Is,". In this part, I will talk about my ‘coding’ process."),Is.forEach(b),Ce=v(e),He=m(e,"H1",{id:!0});var Es=u(He);Le=m(Es,"A",{href:!0});var As=u(Le);$e=y(As,"Preparation"),As.forEach(b),Es.forEach(b),qe=v(e),Fe=m(e,"P",{});var Ps=u(Fe);Ge=y(Ps,"I initialize the Gatsby project using gatsby-cli. To install gatsby-cli is dead simple, you just need to run "),Me=m(Ps,"CODE",{});var js=u(Me);ze=y(js,"npm i gatsby-cli -g"),js.forEach(b),De=y(Ps," and there you have it. Then I initialize gatsby project using "),We=m(Ps,"CODE",{});var Ts=u(We);Oe=y(Ts,"gatsby new <project-name>"),Ts.forEach(b),Ne=y(Ps," command. After having the project created, I ran "),Be=m(Ps,"CODE",{});var xs=u(Be);Je=y(xs,"gatsby develop"),xs.forEach(b),Ue=y(Ps," to start the development server. Now everything is set up, it’s time to jump to my favorite text editor of all time which is Neovim."),Ps.forEach(b),Ye=v(e),Re=m(e,"H1",{id:!0});var Ss=u(Re);Xe=m(Ss,"A",{href:!0});var Cs=u(Xe);Ve=y(Cs,"Coding Session"),Cs.forEach(b),Ss.forEach(b),Ze=v(e),Ke=m(e,"H2",{id:!0});var Hs=u(Ke);Qe=m(Hs,"A",{href:!0});var Ls=u(Qe);_e=y(Ls,"Cleaning Up"),Ls.forEach(b),Hs.forEach(b),et=v(e),tt=m(e,"P",{});var $s=u(tt);at=y($s,"First thing first, I make my gatsby project to be a plain project by deleting unnecessary stuff like images, header and footer. After cleaning up, I installed "),ot=m($s,"A",{href:!0,rel:!0});var qs=u(ot);st=y(qs,"PostCSS"),qs.forEach(b),rt=y($s," and "),it=m($s,"A",{href:!0,rel:!0});var Fs=u(it);nt=y(Fs,"Autoprefixer"),Fs.forEach(b),ht=y($s,". Basically, it adds prefix for browser compatibility to my css so I don’t have to add it manually."),$s.forEach(b),lt=v(e),ct=m(e,"H2",{id:!0});var Gs=u(ct);pt=m(Gs,"A",{href:!0});var Ms=u(pt);ft=y(Ms,"Header and Footer"),Ms.forEach(b),Gs.forEach(b),gt=v(e),dt=m(e,"P",{});var zs=u(dt);mt=y(zs,"As per usual, I make the mobile version first. I started by making the fixed navbar. I quite struggle on the hamburger menu since I never make an animated hamburger menu, but thanks to "),ut=m(zs,"A",{href:!0,rel:!0});var Ds=u(ut);yt=y(Ds,"This"),Ds.forEach(b),bt=y(zs," I figure it out. It uses checkbox to decide the hamburger state, I never use that technique before. Props to the author for that pen."),zs.forEach(b),vt=v(e),kt=m(e,"P",{});var Ws=u(kt);It=y(Ws,"After finishing the navbar, I made the overlay menu when you click the hamburger and gave it a fade effect when opening and closing. Mobile navbar is completed, so I moved to footer. When I first made the footer, I hardcoded the links of my social media to the JSX but after watching videos about Gatsby "),wt=m(Ws,"A",{href:!0,rel:!0});var Os=u(wt);Et=y(Os,"Here"),Os.forEach(b),At=y(Ws,", it is better to use the graphql query to load the links from gatsby-config. I highly recomend checking that out if you don’t know what Gatsby JS is and want to get started"),Ws.forEach(b),Pt=v(e),jt=m(e,"H2",{id:!0});var Ns=u(jt);Tt=m(Ns,"A",{href:!0});var Bs=u(Tt);xt=y(Bs,"Pages"),Bs.forEach(b),Ns.forEach(b),St=v(e),Ct=m(e,"P",{});var Js=u(Ct);Ht=y(Js,"After finishing Navbar and Footer, It is time to make the about page because it’s the easiest."),Js.forEach(b),Lt=v(e),$t=m(e,"P",{});var Us=u($t);qt=y(Us,"I added the slight move up animation when you go to the home page to make it look a bit nice. I didn’t create the posts list yet on home page because I haven’t created any post. I made the archives page after that, just the layout of it so all of the buttons on the navbar have a destination page. Then I make the post page which is the most challenging part for me."),Us.forEach(b),Ft=v(e),Gt=m(e,"P",{});var Ys=u(Gt);Mt=y(Ys,"First of all, I installed gatsby-transformer-remark which will transform my markdown files to html that can be used for the blog post. I made the place holder posts just to make sure that it’s all working also to use it as a placeholder for the latest posts list."),Ys.forEach(b),zt=v(e),Dt=m(e,"H2",{id:!0});var Rs=u(Dt);Wt=m(Rs,"A",{href:!0});var Xs=u(Wt);Ot=y(Xs,"Dealing with Images"),Xs.forEach(b),Rs.forEach(b),Nt=v(e),Bt=m(e,"P",{});var Vs=u(Bt);Jt=y(Vs,"I use gatsby-image to display the card image on the card component to improve my website performance. Gatsby-image is just great. It blurs your image when it’s not fully loaded so it doesn’t messed up your dom and you won’t see those grey backgrounds or weird stutter that you usually see when the image isn’t fully loaded."),Vs.forEach(b),Ut=v(e),Yt=m(e,"P",{});var Zs=u(Yt);Rt=y(Zs,"The card component that I made contains several stuff that comes from graphql query which takes data from markdown frontmatter. After finishing the card component, I made the page template for each post. When I made it, I changed my mind from being a colorful website to a monochromatic website."),Zs.forEach(b),Xt=v(e),Vt=m(e,"P",{});var Ks=u(Vt);Zt=y(Ks,"I hosted the image on "),Kt=m(Ks,"A",{href:!0,rel:!0});var Qs=u(Kt);Qt=y(Qs,"Cloudinary"),Qs.forEach(b),_t=y(Ks," so it doesn’t take my repository space just for images. If you have a better solution, feel free to hit me up!"),Ks.forEach(b),ea=v(e),ta=m(e,"H2",{id:!0});var _s=u(ta);aa=m(_s,"A",{href:!0});var er=u(aa);oa=y(er,"Stylings the page"),er.forEach(b),_s.forEach(b),sa=v(e),ra=m(e,"P",{});var tr=u(ra);ia=y(tr,"I make the css for my blog page, it was just a simple thing, nothing really special except for the typography. I changed some of my initial mockup design because I think it doesn’t look that good. Who would’ve thought that choosing a font for your website could be so difficult. I went through several iteration to find the one that I like the most."),tr.forEach(b),na=v(e),ha=m(e,"P",{});var ar=u(ha);la=y(ar,"I also added the table of contents to make it easier for the user when navigating through my blog posts."),ar.forEach(b),ca=v(e),pa=m(e,"P",{});var or=u(pa);fa=m(or,"IMG",{src:!0,alt:!0}),or.forEach(b),da=v(e),ma=m(e,"P",{});var sr=u(ma);ua=y(sr,"After making the TOC, I added the "),ya=m(sr,"CODE",{});var rr=u(ya);ba=y(rr,"<pre>"),rr.forEach(b),va=y(sr," tag which I really like from a blog using a plugin called "),ka=m(sr,"CODE",{});var ir=u(ka);Ia=y(ir,"gatsby-remark-prismjs"),ir.forEach(b),wa=y(sr,". As the name says, it utilize "),Ea=m(sr,"A",{href:!0,rel:!0});var nr=u(Ea);Aa=y(nr,"Prism JS"),nr.forEach(b),Pa=y(sr," to highlight my code. When I designing the page, I didn’t think that I could make this feature. But it is so simple, like stupid simple. You just add the plugin and the theme, that’s it. I made the theme on "),ja=m(sr,"A",{href:!0,rel:!0});var hr=u(ja);Ta=y(hr,"this site"),hr.forEach(b),xa=y(sr,". It was "),Sa=m(sr,"EM",{});var lr=u(Sa);Ca=y(lr,"very"),lr.forEach(b),Ha=y(sr," helpful. Here’s an example of prismjs in action."),sr.forEach(b),La=v(e),$a=m(e,"PRE",{class:!0}),u($a).forEach(b),qa=v(e),Fa=m(e,"PRE",{class:!0}),u(Fa).forEach(b),Ga=v(e),Ma=m(e,"H2",{id:!0});var cr=u(Ma);za=m(cr,"A",{href:!0});var pr=u(za);Da=y(pr,"Testing"),pr.forEach(b),cr.forEach(b),Wa=v(e),Oa=m(e,"P",{});var fr=u(Oa);Na=y(fr,"Finally, I can test the page using the real markdown and not stupid placeholder that I made lol. I decided to use my previous post which is the design process in figma. All looks good. I moved to other features."),fr.forEach(b),Ba=v(e),Ja=m(e,"H2",{id:!0});var gr=u(Ja);Ua=m(gr,"A",{href:!0});var dr=u(Ua);Ya=y(dr,"Tags, category, and pagination"),dr.forEach(b),gr.forEach(b),Ra=v(e),Xa=m(e,"P",{});var mr=u(Xa);Va=y(mr,"My blogs have tags and category for each of them. So, making a page that index all of the tags and category would be a good idea. It was quite a simple process by utilizing node api that can be configured in "),Za=m(mr,"CODE",{});var ur=u(Za);Ka=y(ur,"gatsby-node.js"),ur.forEach(b),Qa=y(mr," file just like when I made the blog page."),mr.forEach(b),_a=v(e),eo=m(e,"P",{});var yr=u(eo);to=y(yr,"As for the pagination, it was a bit tricky. I found a good tutorial that helped me made the pagination. "),ao=m(yr,"A",{href:!0,rel:!0});var br=u(ao);oo=y(br,"Here it is."),br.forEach(b),yr.forEach(b),so=v(e),ro=m(e,"H2",{id:!0});var vr=u(ro);io=m(vr,"A",{href:!0});var kr=u(io);no=y(kr,"Making the desktop site"),kr.forEach(b),vr.forEach(b),ho=v(e),lo=m(e,"P",{});var Ir=u(lo);co=y(Ir,"The mobile version is finished. (Yay!) I can finally make the desktop version. First thing first, I changed to navbar to make it more suitable for the desktop. I removed the hamburger and changed it to text menu that has a hover effect."),Ir.forEach(b),po=v(e),fo=m(e,"P",{});var wr=u(fo);go=m(wr,"IMG",{src:!0,alt:!0}),wr.forEach(b),uo=v(e),yo=m(e,"P",{});var Er=u(yo);bo=y(Er,"After doing that, I made the card component to be side by side. Here’s what I mean."),Er.forEach(b),vo=v(e),ko=m(e,"P",{});var Ar=u(ko);Io=m(Ar,"IMG",{src:!0,alt:!0}),Ar.forEach(b),Eo=v(e),Ao=m(e,"H2",{id:!0});var Pr=u(Ao);Po=m(Pr,"A",{href:!0});var jr=u(Po);jo=y(jr,"Themes"),jr.forEach(b),Pr.forEach(b),To=v(e),xo=m(e,"P",{});var Tr=u(xo);So=y(Tr,"Now this is what I liked the most. Creating another theme brings you to another perspective of your website. Of course I make the light theme that is switchable automatically by default according to the time of the day and manually. Since I didn’t use CSS variables from the start, I have to replace all of the colours in css manually to variables to be able to make the switch for the theme. (Duh, silly me.)"),Tr.forEach(b),Co=v(e),Ho=m(e,"P",{});var xr=u(Ho);Lo=y(xr,"I utilize react context for storing the colours variables. Big thanks to "),$o=m(xr,"A",{href:!0,rel:!0});var Sr=u($o);qo=y(Sr,"this article"),Sr.forEach(b),Fo=y(xr," for making the theme toggler possible for me. I changed quite a bit of the colours from my design earlier."),xr.forEach(b),Go=v(e),Mo=m(e,"H1",{id:!0});var Cr=u(Mo);zo=m(Cr,"A",{href:!0});var Hr=u(zo);Do=y(Hr,"Conclusion"),Hr.forEach(b),Cr.forEach(b),Wo=v(e),Oo=m(e,"P",{});var Lr=u(Oo);No=y(Lr,"The coding process took the longest time to do. According to github, it took around about 17 days. Well, it wouldn’t be that long if I’m not being a lazy person lol. I also got a lot of school stuff (homework, etc). Like, "),Bo=m(Lr,"EM",{});var $r=u(Bo);Jo=y($r,"a lot"),$r.forEach(b),Uo=y(Lr,"."),Lr.forEach(b),Yo=v(e),Ro=m(e,"P",{});var qr=u(Ro);Xo=y(qr,"Alright, let’s end this post since it’s quite a lengthy one. The next part is about deploying to github pages and other stuff. See ya next time!"),qr.forEach(b),this.h()},h(){k(a,"href","#table-of-content"),k(t,"id","table-of-content"),k(h,"href","#introduction"),k(P,"href","#preparation"),k(C,"href","#coding-session"),k(F,"href","#cleaning-up"),k(D,"href","#header-and-footer"),k(B,"href","#pages"),k(R,"href","#dealing-with-images"),k(K,"href","#stylings-the-page"),k(te,"href","#testing"),k(re,"href","#tags-category-and-pagination"),k(le,"href","#making-the-desktop-site"),k(ge,"href","#themes"),k(be,"href","#conclusion"),k(we,"href","#introduction"),k(Ie,"id","introduction"),k(Te,"href","https://irrellia.github.io/blog/making-of-my-site"),k(Te,"rel","nofollow"),k(Le,"href","#preparation"),k(He,"id","preparation"),k(Xe,"href","#coding-session"),k(Re,"id","coding-session"),k(Qe,"href","#cleaning-up"),k(Ke,"id","cleaning-up"),k(ot,"href","https://postcss.org"),k(ot,"rel","nofollow"),k(it,"href","https://github.com/postcss/autoprefixer"),k(it,"rel","nofollow"),k(pt,"href","#header-and-footer"),k(ct,"id","header-and-footer"),k(ut,"href","https://codepen.io/erikterwan/pen/EVzeRP"),k(ut,"rel","nofollow"),k(wt,"href","https://www.youtube.com/watch?v=8t0vNu2fCCM"),k(wt,"rel","nofollow"),k(Tt,"href","#pages"),k(jt,"id","pages"),k(Wt,"href","#dealing-with-images"),k(Dt,"id","dealing-with-images"),k(Kt,"href","https://cloudinary.com"),k(Kt,"rel","nofollow"),k(aa,"href","#stylings-the-page"),k(ta,"id","stylings-the-page"),fa.src!==(ga="/assets/post/making-of-my-site-2/toc.png")&&k(fa,"src","/assets/post/making-of-my-site-2/toc.png"),k(fa,"alt","table of content"),k(Ea,"href","https://prismjs.com"),k(Ea,"rel","nofollow"),k(ja,"href","http://k88hudson.github.io/syntax-highlighting-theme-generator/www/"),k(ja,"rel","nofollow"),k($a,"class","language-javascript"),k(Fa,"class","language-bash"),k(za,"href","#testing"),k(Ma,"id","testing"),k(Ua,"href","#tags-category-and-pagination"),k(Ja,"id","tags-category-and-pagination"),k(ao,"href","https://nickymeuleman.netlify.com/blog/gatsby-pagination/"),k(ao,"rel","nofollow"),k(io,"href","#making-the-desktop-site"),k(ro,"id","making-the-desktop-site"),go.src!==(mo="/assets/post/making-of-my-site-2/card.png")&&k(go,"src","/assets/post/making-of-my-site-2/card.png"),k(go,"alt","navbar"),Io.src!==(wo="/assets/post/making-of-my-site-2/card.png")&&k(Io,"src","/assets/post/making-of-my-site-2/card.png"),k(Io,"alt","card"),k(Po,"href","#themes"),k(Ao,"id","themes"),k($o,"href","https://medium.com/better-programming/react-context-api-part-1-dark-theme-3f00666cbacb"),k($o,"rel","nofollow"),k(zo,"href","#conclusion"),k(Mo,"id","conclusion")},m(e,f){I(e,t,f),w(t,a),w(a,o),I(e,s,f),I(e,r,f),w(r,i),w(i,n),w(n,h),w(h,l),w(r,c),w(r,p),w(p,A),w(A,P),w(P,j),w(r,T),w(r,x),w(x,S),w(S,C),w(C,H),w(x,L),w(x,$),w($,q),w(q,F),w(F,G),w($,M),w($,z),w(z,D),w(D,W),w($,O),w($,N),w(N,B),w(B,J),w($,U),w($,Y),w(Y,R),w(R,X),w($,V),w($,Z),w(Z,K),w(K,Q),w($,_),w($,ee),w(ee,te),w(te,ae),w($,oe),w($,se),w(se,re),w(re,ie),w($,ne),w($,he),w(he,le),w(le,ce),w($,pe),w($,fe),w(fe,ge),w(ge,de),w(r,me),w(r,ue),w(ue,ye),w(ye,be),w(be,ve),I(e,ke,f),I(e,Ie,f),w(Ie,we),w(we,Ee),I(e,Ae,f),I(e,Pe,f),w(Pe,je),w(Pe,Te),w(Te,xe),w(Pe,Se),I(e,Ce,f),I(e,He,f),w(He,Le),w(Le,$e),I(e,qe,f),I(e,Fe,f),w(Fe,Ge),w(Fe,Me),w(Me,ze),w(Fe,De),w(Fe,We),w(We,Oe),w(Fe,Ne),w(Fe,Be),w(Be,Je),w(Fe,Ue),I(e,Ye,f),I(e,Re,f),w(Re,Xe),w(Xe,Ve),I(e,Ze,f),I(e,Ke,f),w(Ke,Qe),w(Qe,_e),I(e,et,f),I(e,tt,f),w(tt,at),w(tt,ot),w(ot,st),w(tt,rt),w(tt,it),w(it,nt),w(tt,ht),I(e,lt,f),I(e,ct,f),w(ct,pt),w(pt,ft),I(e,gt,f),I(e,dt,f),w(dt,mt),w(dt,ut),w(ut,yt),w(dt,bt),I(e,vt,f),I(e,kt,f),w(kt,It),w(kt,wt),w(wt,Et),w(kt,At),I(e,Pt,f),I(e,jt,f),w(jt,Tt),w(Tt,xt),I(e,St,f),I(e,Ct,f),w(Ct,Ht),I(e,Lt,f),I(e,$t,f),w($t,qt),I(e,Ft,f),I(e,Gt,f),w(Gt,Mt),I(e,zt,f),I(e,Dt,f),w(Dt,Wt),w(Wt,Ot),I(e,Nt,f),I(e,Bt,f),w(Bt,Jt),I(e,Ut,f),I(e,Yt,f),w(Yt,Rt),I(e,Xt,f),I(e,Vt,f),w(Vt,Zt),w(Vt,Kt),w(Kt,Qt),w(Vt,_t),I(e,ea,f),I(e,ta,f),w(ta,aa),w(aa,oa),I(e,sa,f),I(e,ra,f),w(ra,ia),I(e,na,f),I(e,ha,f),w(ha,la),I(e,ca,f),I(e,pa,f),w(pa,fa),I(e,da,f),I(e,ma,f),w(ma,ua),w(ma,ya),w(ya,ba),w(ma,va),w(ma,ka),w(ka,Ia),w(ma,wa),w(ma,Ea),w(Ea,Aa),w(ma,Pa),w(ma,ja),w(ja,Ta),w(ma,xa),w(ma,Sa),w(Sa,Ca),w(ma,Ha),I(e,La,f),I(e,$a,f),$a.innerHTML='<code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">\'this is\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">\'just a\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token string">\'test\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> thing <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>b<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>c<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>thing<span class="token punctuation">)</span><span class="token punctuation">;</span></code>',I(e,qa,f),I(e,Fa,f),Fa.innerHTML='<code class="language-bash">$ <span class="token function">sudo</span> pacman -S neovim</code>',I(e,Ga,f),I(e,Ma,f),w(Ma,za),w(za,Da),I(e,Wa,f),I(e,Oa,f),w(Oa,Na),I(e,Ba,f),I(e,Ja,f),w(Ja,Ua),w(Ua,Ya),I(e,Ra,f),I(e,Xa,f),w(Xa,Va),w(Xa,Za),w(Za,Ka),w(Xa,Qa),I(e,_a,f),I(e,eo,f),w(eo,to),w(eo,ao),w(ao,oo),I(e,so,f),I(e,ro,f),w(ro,io),w(io,no),I(e,ho,f),I(e,lo,f),w(lo,co),I(e,po,f),I(e,fo,f),w(fo,go),I(e,uo,f),I(e,yo,f),w(yo,bo),I(e,vo,f),I(e,ko,f),w(ko,Io),I(e,Eo,f),I(e,Ao,f),w(Ao,Po),w(Po,jo),I(e,To,f),I(e,xo,f),w(xo,So),I(e,Co,f),I(e,Ho,f),w(Ho,Lo),w(Ho,$o),w($o,qo),w(Ho,Fo),I(e,Go,f),I(e,Mo,f),w(Mo,zo),w(zo,Do),I(e,Wo,f),I(e,Oo,f),w(Oo,No),w(Oo,Bo),w(Bo,Jo),w(Oo,Uo),I(e,Yo,f),I(e,Ro,f),w(Ro,Xo)},p:E,d(e){e&&b(t),e&&b(s),e&&b(r),e&&b(ke),e&&b(Ie),e&&b(Ae),e&&b(Pe),e&&b(Ce),e&&b(He),e&&b(qe),e&&b(Fe),e&&b(Ye),e&&b(Re),e&&b(Ze),e&&b(Ke),e&&b(et),e&&b(tt),e&&b(lt),e&&b(ct),e&&b(gt),e&&b(dt),e&&b(vt),e&&b(kt),e&&b(Pt),e&&b(jt),e&&b(St),e&&b(Ct),e&&b(Lt),e&&b($t),e&&b(Ft),e&&b(Gt),e&&b(zt),e&&b(Dt),e&&b(Nt),e&&b(Bt),e&&b(Ut),e&&b(Yt),e&&b(Xt),e&&b(Vt),e&&b(ea),e&&b(ta),e&&b(sa),e&&b(ra),e&&b(na),e&&b(ha),e&&b(ca),e&&b(pa),e&&b(da),e&&b(ma),e&&b(La),e&&b($a),e&&b(qa),e&&b(Fa),e&&b(Ga),e&&b(Ma),e&&b(Wa),e&&b(Oa),e&&b(Ba),e&&b(Ja),e&&b(Ra),e&&b(Xa),e&&b(_a),e&&b(eo),e&&b(so),e&&b(ro),e&&b(ho),e&&b(lo),e&&b(po),e&&b(fo),e&&b(uo),e&&b(yo),e&&b(vo),e&&b(ko),e&&b(Eo),e&&b(Ao),e&&b(To),e&&b(xo),e&&b(Co),e&&b(Ho),e&&b(Go),e&&b(Mo),e&&b(Wo),e&&b(Oo),e&&b(Yo),e&&b(Ro)}}}function j(e){let t,a;const f=[T];let g={$$slots:{default:[P]},$$scope:{ctx:e}};for(let s=0;s<f.length;s+=1)g=o(g,f[s]);return t=new A({props:g}),{c(){s(t.$$.fragment)},l(e){r(t.$$.fragment,e)},m(e,o){i(t,e,o),a=!0},p(e,[a]){const o=0&a?n(f,[p(T)]):{};1&a&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){l(t.$$.fragment,e),a=!1},d(e){c(t,e)}}}const T={title:"The process of making my website (Part 2)",date:"2020-02-13T00:00:00.000Z",desc:"Continuation of my previous post which is me telling my experience about how I made my blog using Gatsby",tags:["react","website"]};export default class extends e{constructor(e){super(),t(this,e,null,j,a,{})}}export{T as metadata};