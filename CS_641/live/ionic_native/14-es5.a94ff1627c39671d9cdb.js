(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8cDG":function(n,l,u){"use strict";u.r(l);var a=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),b=u("oBZk"),e=u("ZZ/e"),i=u("Ip0R"),r=u("Pn9U"),c=function(){function n(n){this.camera=n}return n.prototype.onClickCamera=function(){var n=this;this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then((function(l){n.imageData=l,console.log("######################"),console.log(l);var u="data:image/jpeg;base64,"+l;n.imageData=u,console.log(u)}),(function(n){}))},n}(),s=a.qb({encapsulation:0,styles:[[""]],data:{}});function p(n){return a.Ib(0,[(n()(),a.sb(0,0,null,null,1,"ion-img",[],null,null,null,b.x,b.h)),a.rb(1,49152,null,0,e.A,[a.h,a.k,a.z],{src:[0,"src"]},null)],(function(n,l){n(l,1,0,l.component.imageData)}),null)}function f(n){return a.Ib(0,[(n()(),a.sb(0,0,null,null,6,"ion-header",[],null,null,null,b.v,b.f)),a.rb(1,49152,null,0,e.y,[a.h,a.k,a.z],null,null),(n()(),a.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,b.F,b.p)),a.rb(3,49152,null,0,e.zb,[a.h,a.k,a.z],null,null),(n()(),a.sb(4,0,null,0,2,"ion-title",[],null,null,null,b.E,b.o)),a.rb(5,49152,null,0,e.xb,[a.h,a.k,a.z],null,null),(n()(),a.Hb(-1,0,[" Tab Two "])),(n()(),a.sb(7,0,null,null,6,"ion-content",[],null,null,null,b.u,b.e)),a.rb(8,49152,null,0,e.r,[a.h,a.k,a.z],null,null),(n()(),a.sb(9,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(n,l,u){var a=!0;return"click"===l&&(a=!1!==n.component.onClickCamera()&&a),a}),b.r,b.b)),a.rb(10,49152,null,0,e.h,[a.h,a.k,a.z],null,null),(n()(),a.Hb(-1,0,[" Take Photo "])),(n()(),a.hb(16777216,null,0,1,null,p)),a.rb(13,16384,null,0,i.h,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,13,0,l.component.imageData)}),null)}function g(n){return a.Ib(0,[(n()(),a.sb(0,0,null,null,1,"app-tab2",[],null,null,null,f,s)),a.rb(1,49152,null,0,c,[r.a],null,null)],null,null)}var h=a.ob("app-tab2",c,g,{},{},[]),m=u("gIcY"),B=u("ZYCi");u.d(l,"Tab2PageModuleNgFactory",(function(){return k}));var k=a.pb(t,[],(function(n){return a.Ab([a.Bb(512,a.j,a.ab,[[8,[o.a,h]],[3,a.j],a.x]),a.Bb(4608,i.j,i.i,[a.u,[2,i.p]]),a.Bb(4608,e.a,e.a,[a.z,a.g]),a.Bb(4608,e.Db,e.Db,[e.a,a.j,a.q]),a.Bb(4608,e.Gb,e.Gb,[e.a,a.j,a.q]),a.Bb(4608,m.g,m.g,[]),a.Bb(1073742336,i.b,i.b,[]),a.Bb(1073742336,e.Bb,e.Bb,[]),a.Bb(1073742336,m.f,m.f,[]),a.Bb(1073742336,m.a,m.a,[]),a.Bb(1073742336,B.n,B.n,[[2,B.s],[2,B.m]]),a.Bb(1073742336,t,t,[]),a.Bb(1024,B.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);