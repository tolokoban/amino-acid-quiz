if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return f[e]||(a=new Promise(async a=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=a}else importScripts(e),a()})),a.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},a=(a,f)=>{Promise.all(a.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(a)};self.define=(a,d,c)=>{f[a]||(f[a]=Promise.resolve().then(()=>{let f={};const t={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return f;case"module":return t;default:return e(a)}})).then(e=>{const a=c(...e);return f.default||(f.default=a),f})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"auto../dist/App/App.d.ts",revision:"16088b140d24dc27599b6e8b0837ec57"},{url:"auto../dist/App/index.d.ts",revision:"dc269cc22bf272551d7810d6438b2dfe"},{url:"auto../dist/data/data.d.ts",revision:"4c094c5ccbc9242df964c66ad96f43c0"},{url:"auto../dist/data/index.d.ts",revision:"3bbaaebb0d2557e8a3e6ee6156b8266d"},{url:"auto../dist/data/types.d.ts",revision:"0653e907f0770a8f9a4a9941c3670e31"},{url:"auto../dist/index.d.ts",revision:"cec4bd6b06e1295916b6553a2a1ca788"},{url:"auto../dist/setupTests.d.ts",revision:"42473e28bfa4029faa379f80cad12501"},{url:"auto../dist/view/amino-acid/amino-acid-view.d.ts",revision:"75f7a28bf765b9d0c6f56ff32d2df3b3"},{url:"auto../dist/view/amino-acid/formula-parser.d.ts",revision:"6358cb3c5be6fee0a2f324888a96a1ab"},{url:"auto../dist/view/amino-acid/index.d.ts",revision:"7eaaa1640e71f8b4ca270ed3e47e1e4a"},{url:"auto../dist/view/amino-acid/types.d.ts",revision:"cf3986e34f91165bd45d68e815da76e1"},{url:"auto../dist/view/quiz/index.d.ts",revision:"138ae087d0548da67fe4ddbb6377963d"},{url:"auto../dist/view/quiz/quiz-view.d.ts",revision:"99009929e4cba76511d23ff7668633a9"},{url:"autofavicon.ico",revision:"6e1267d9d946b0236cdf6ffd02890894"},{url:"autofnt/014254fbba5232246cbe35607561718f.ttf",revision:"25efaa1731da0fbcaf4a1a6b89eca9b6"},{url:"autofnt/0955ef47ba08077a4e872181c477123c.ttf",revision:"350b451a03728793a2a7da5d4a5aeddc"},{url:"autofnt/0d27bb0ea8d88acb82be7d4914c94835.woff2",revision:"744dce4b44861a12556dfc90c1c6f45e"},{url:"autofnt/165d4bee3526bc102b9268433d22af07.ttf",revision:"195fe20b1907ffaf6f0ad6429997a0d5"},{url:"autofnt/19dce59526bdb47b8e52a4f6e0d8543c.ttf",revision:"0c22b1d8d49f218cb3baeecefd874663"},{url:"autofnt/21e9ee64ee789b4614025d54a29b335a.ttf",revision:"96e5fbad8c2f5b81165ede8b2f08a14b"},{url:"autofnt/38c0202c3cfabe82cc1b1cf576317147.ttf",revision:"cd9fe6b2852b98381b3d205aa45d42e2"},{url:"autofnt/4dc26297cbe00a8bd82985a8d8cc9ef0.ttf",revision:"74bc6165dc68714ccaa88f5c64656b1c"},{url:"autofnt/5b7dd3cbba4fac28d68592341a374242.ttf",revision:"c32e58e7c0c7c3c1c8123cd2631eace1"},{url:"autofnt/7024edd6285560ce880559d97f6add4b.ttf",revision:"f5857476454410f45989723ad9b561f0"},{url:"autofnt/72850fa1bfa65db60ad6bcd91532c9a6.woff2",revision:"4dcf7f9d9350f1d143e3daba510231ca"},{url:"autofnt/83244a96de57b4fbfa70a7e5267ac628.ttf",revision:"0d984acaec916c225c012f27d0c56a91"},{url:"autofnt/867f564a4eb4c84b318150f6cb7d0990.woff2",revision:"7270440b8ddb42ebfe9fba9297a3563d"},{url:"autofnt/8addf18835c6b570e4edf16bc35c891a.ttf",revision:"1a1d2b4fb7fadb4b6ce6322444d4668e"},{url:"autofnt/aa41ac5079dd4825f11cb16a1f975b50.ttf",revision:"29d3974473a21d5e285a441ee83cef68"},{url:"autofnt/bd5a5aa73fbe38673e5fa33ac3f42ea8.ttf",revision:"f80528d6beb02d7dbaec23a39ffbd73c"},{url:"autofnt/c15726f45922bab538878bb30e9554aa.ttf",revision:"e3ae56c788e7327565128e2fce3d0c00"},{url:"autofnt/c356eadda5fbf3e211aba1b094e29958.ttf",revision:"5f09380f2c373cc5584263caecb9b68b"},{url:"autofnt/c631305c8b1ef0b5b979185a8cb641f6.woff2",revision:"04c7e99b2918bcab6bebc7a5c44459c5"},{url:"autofnt/c8eff68a7456cce7e4620aa1a7e12bf1.woff2",revision:"88b9a2da8ccc0c4db39e44c22623b02f"},{url:"autofnt/ca16f2aa892356646e728e6042559b5d.ttf",revision:"0265542c048f7c43e09666b5d6340448"},{url:"autofnt/d8d855e09069ed4811e351625f2ece27.woff2",revision:"760b6f8d136c6ca5668be65b3d645305"},{url:"autofnt/ededb0f1c06d627a59cfa62534f9595d.ttf",revision:"807abe1555908dc0cd41a0d8b02d667d"},{url:"autofnt/ff971242700f520e3f61270f2fb038cb.woff2",revision:"2669249f36607a740d21ff026caca825"},{url:"autoindex.html",revision:"9a56e29994feac9d23a3c7a3f3a103d9"},{url:"autologo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"autologo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"automanifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"autorobots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"autoscr/app.9a530f40054c0bdf9b8a.js",revision:"46598519ae287dafd4ba5102fe44ed3e"},{url:"autoscr/libs.a390a5a46b74526ff130.js",revision:"e0ab9fe5b1bfbd4e86c693dcedf1fccd"},{url:"autoscr/runtime.95b5b6130a090af8c21e.js",revision:"2ab183f555e88e92c92bc0117c8f48ac"}],{})}));
//# sourceMappingURL=service-worker.js.map