(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(t,e,n){var content=n(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6570a8f6",content,!0,{sourceMap:!1})},205:function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("644d4ef5",content,!0,{sourceMap:!1})},233:function(t,e,n){"use strict";var o=n(0).a.extend({data:function(){return{items:[{title:"Home",to:"/"},{title:"About",to:"/about"}]}},computed:{isMobile:function(){return this.$vuetify.breakpoint.smAndDown}}}),r=(n(275),n(50)),c=n(51),l=n.n(c),v=n(347),d=n(354),f=n(349),m=n(350),h=n(351),_=n(167),w=n(106),x=n(128),k=n(352),y=n(353),V=n(348),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.isMobile?n("v-app-bar",{attrs:{color:"white",flat:"",absolute:"",dense:""}},[n("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-app-bar-nav-icon",t._g(t._b({},"v-app-bar-nav-icon",r,!1),o))]}}],null,!1,1620504925)},[t._v(" "),n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,staticClass:"menu-item",attrs:{to:e.to}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1):t._e(),t._v(" "),t.isMobile?n("div",{staticStyle:{height:"36px"}}):t._e(),t._v(" "),n("v-row",{attrs:{id:"main"}},[t.isMobile?t._e():n("v-col",{attrs:{cols:"3"}},[n("the-sidebar")],1),t._v(" "),t.isMobile?t._e():n("v-divider",{attrs:{vertical:"",light:""}}),t._v(" "),n("v-col",[n("v-main",[n("nuxt")],1)],1)],1)],1)}),[],!1,null,"320c3c36",null);e.a=component.exports;l()(component,{TheSidebar:n(338).default}),l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:f.a,VCol:m.a,VDivider:h.a,VList:_.a,VListItem:w.a,VListItemTitle:x.a,VMain:k.a,VMenu:y.a,VRow:V.a})},237:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({data:function(){return{contactList:[{link:"mailto:tuanna.hsp@gmail.com",icon:"mdi-email-outline"},{link:"https://github.com/tuanna-hsp",icon:"mdi-github"},{link:"https://twitter.com/anhtuan__",icon:"mdi-twitter"},{link:"https://www.facebook.com/tuanna.hsp/",icon:"mdi-facebook"},{link:"https://www.goodreads.com/user/show/62827416",icon:"mdi-goodreads"},{link:"https://www.linkedin.com/in/nguyen-anh-tuan-hsp/",icon:"mdi-linkedin"}]}}}),r=n(50),c=n(51),l=n.n(c),v=n(234),d=n(166),f=n(348),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8"},[n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Tuan")])]),t._v(" "),n("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[t._v(" Coder. Dreamer. ")]),t._v(" "),n("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},t._l(t.contactList,(function(e){return n("v-btn",{key:e.icon,attrs:{href:e.link,icon:"",target:"_blank"}},[n("v-icon",[t._v(t._s(e.icon))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VIcon:d.a,VRow:f.a})},240:function(t,e,n){n(241),t.exports=n(242)},265:function(t,e,n){"use strict";n(203)},266:function(t,e,n){(e=n(10)(!1)).push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=e},271:function(t,e,n){var content=n(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2998b330",content,!0,{sourceMap:!1})},272:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-application a{text-decoration:none;color:inherit!important;border-bottom:2px solid green}.v-application time{color:grey}.nuxt-content img{width:100%}",""]),t.exports=e},275:function(t,e,n){"use strict";n(205)},276:function(t,e,n){(e=n(10)(!1)).push([t.i,".menu-item[data-v-320c3c36]{border-bottom:0!important}",""]),t.exports=e},338:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({}),r=n(50),c=n(51),l=n.n(c),v=n(348),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-8"},[e("the-profile"),this._v(" "),e("v-row",{staticClass:"mt-16",attrs:{justify:"center"}},[e("h3",[e("nuxt-link",{attrs:{to:"/"}},[this._v("Home")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{TheProfile:n(237).default}),l()(component,{VRow:v.a})},65:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(265),n(50)),c=n(51),l=n.n(c),v=n(347),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[240,5,1,6]]]);