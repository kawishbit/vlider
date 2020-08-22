(function(e){function t(t){for(var a,o,s=t[0],i=t[1],c=t[2],x=0,p=[];x<s.length;x++)o=s[x],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],a=!0,s=1;s<l.length;s++){var i=l[s];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=l[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=a,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(l,a,function(t){return e[t]}.bind(null,a));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=i;r.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"56d7":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("f751"),l("097d");var a=l("2b0e"),n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("div",{staticClass:"wrapper"},[l("section",{staticClass:"vlider-first"},[l("div",{staticClass:"site-container"},[e._m(0),l("h2",[e._v("Install Plugin")]),l("div",{staticClass:"code-snippet"},[l("div",{staticClass:"circles"}),l("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[l("code",{staticClass:"js"},[e._v("npm install --save vlider")])])]),l("div",{staticClass:"code-snippet"},[l("div",{staticClass:"circles"}),l("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[l("code",{staticClass:"html",domProps:{innerHTML:e._s(e.firstExample)}})])]),l("h2",[e._v("Component Usage Example")]),l("p",[e._v("Use slot-scope to reiterate the data that you pass to vlider-data.")]),l("div",{staticClass:"code-snippet"},[l("div",{staticClass:"circles"}),l("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[l("code",{staticClass:"html",domProps:{innerHTML:e._s(e.secondExample)}})])]),l("div",{staticClass:"components"},[l("div",{staticClass:"component full light"},[l("h4",[e._v("Light Theme")]),l("vlider",{attrs:{id:"light","vlider-data":e.lightSlider,theme:"theme-light"},on:{click:e.vliderClick},scopedSlots:e._u([{key:"bullet",fn:function(t){return[l("label",[e._v(e._s(t.data.label))]),l("i",{staticClass:"em",class:["em-"+t.data.extras.icon]}),l("a",{attrs:{target:"_blank",href:t.data.extras.learnMore}},[e._v("Learn more ?")])]}}]),model:{value:e.inputRange,callback:function(t){e.inputRange=t},expression:"inputRange"}})],1),l("div",{staticClass:"component full dark"},[l("h4",[e._v("Dark Theme")]),l("vlider",{attrs:{id:"dark","vlider-data":e.darkSlider,theme:"theme-dark"},on:{click:e.vliderClick},scopedSlots:e._u([{key:"bullet",fn:function(t){return[l("label",[e._v(e._s(t.data.label))]),l("i",{staticClass:"em",class:["em-"+t.data.extras.icon]}),l("a",{attrs:{target:"_blank",href:t.data.extras.learnMore}},[e._v("Learn more ?")])]}}]),model:{value:e.inputRange,callback:function(t){e.inputRange=t},expression:"inputRange"}})],1),l("div",{staticClass:"component full purple"},[l("h4",[e._v("Purple Theme")]),l("vlider",{attrs:{id:"purple","vlider-data":e.purpleSlider,theme:"theme-purple"},on:{click:e.vliderClick},scopedSlots:e._u([{key:"bullet",fn:function(t){return[l("label",[e._v(e._s(t.data.label))]),l("i",{staticClass:"em",class:["em-"+t.data.extras.icon]}),l("a",{attrs:{target:"_blank",href:t.data.extras.learnMore}},[e._v("Learn more ?")])]}}]),model:{value:e.inputRange,callback:function(t){e.inputRange=t},expression:"inputRange"}})],1)]),l("h2",[e._v("Params")]),e._m(1),l("h2",[e._v("Events")]),e._m(2)])])])])},r=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"header"},[l("h1",[l("span",{staticClass:"green"},[e._v("V")]),e._v("lider\n\t\t\t\t\t")]),l("h3",[e._v("Input range component based on vue and custom CSS3. Highly customizable, pretty, and easy to use.")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"demo-ul"},[l("li",[l("b",[e._v("id")]),e._v(" => id of the vlider component\n\t\t\t\t\t")]),l("li",[l("b",[e._v("classes")]),e._v(" => to add extra classes to the outer vlider container\n\t\t\t\t\t")]),l("li",[l("b",[e._v("theme")]),e._v(' => there are 3 default themes : ("theme-dark", "theme-light", "theme-purple")\n\t\t\t\t\t')]),l("li",[l("b",[e._v("vlider-data")]),e._v(" => Format : Create an array of objects, and you have to send label, color, and extras in every object, extras can be filled with anything you want and you can use the extras object using slot-scope like the above example\n\t\t\t\t\t")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ul",{staticClass:"demo-ul"},[l("li",[l("b",[e._v("v-model")]),e._v(' => v-model="yourVariable" //same usage like input v-model\n\t\t\t\t\t')]),l("li",[l("b",[e._v("click")]),e._v(' => @click="yourMethodHere(value)" //you can take the clicked element\'s value by using $event or the first parameter of your method\n\t\t\t\t\t')])])}],o=l("d0a1"),s=l("998c"),i=l.n(s);a["a"].use(i.a);var c={name:"app",components:{Vlider:o["a"]},data:function(){return{firstExample:"\n&#x3C;script&#x3E;\n    Import Vlider from &#x22;vlider&#x22;\n\n    ...\n    componenets: {\n        Vlider\n    }\n    ...\n&#x3C;/script&#x3E;\n\n&#x3C;style&#x3E;\n    //import vlider in your CSS or SCSS file or directly in your Vue file\n    \n    @import &#x22;vlider/src/sass/vlider.scss&#x22;;\n    \n    //or\n    \n    @import &#x22;vlider/dist/vlider.min.css&#x22;;\n&#x3C;/style&#x3E;\n            ",secondExample:"\n&#x3C;template&#x3E;\n    &#x3C;vlider\n    :id=&#x22;&#x27;first&#x27;&#x22;\n    :vlider-data=&#x22;slider&#x22;\n    :theme=&#x22;&#x27;theme-dark&#x27;&#x22;\n    v-model=&#x22;inputRange&#x22;\n    @click=&#x22;vliderClick&#x22;\n    &#x3E;\n        &#x3C;template slot=&#x22;bullet&#x22; slot-scope=&#x22;bullet&#x22;&#x3E;\n            &#x3C;label&#x3E;{{ bullet.data.label }}&#x3C;/label&#x3E;\n            &#x3C;i\n            class=&#x22;em&#x22;\n            :class=&#x22;[&#x60;em-${bullet.data.extras.icon}&#x60;]&#x22;\n            &#x3E;&#x3C;/i&#x3E; \n            &#x3C;a target=&#x22;_blank&#x22; :href=&#x22;bullet.data.extras.learnMore&#x22;&#x3E;Learn more ?&#x3C;/a&#x3E;\n        &#x3C;/template&#x3E;\n    &#x3C;/vlider&#x3E;\n&#x3C;/template&#x3E;\n&#x3C;script&#x3E;\n    import Vlider from &#x22;vlider&#x22;;\n\n    export default {\n        name: &#x22;app&#x22;,\n        components: {\n            Vlider\n        },\n        data() {\n            return {\n                inputRange: null,\n                slider: [\n                    {label: &#x22;Angry&#x22;, color: &#x22;#ffc300&#x22;, extras: { icon: &#x27;angry&#x27;, learnMore: &#x27;http://localhost/&#x27;}},\n                    {label: &#x22;Expressionless&#x22;, color: &#x22;#ffb0fe&#x22;, extras: { icon: &#x27;expressionless&#x27;, learnMore: &#x27;http://localhost/&#x27;}},\n                    {label: &#x22;Astonished&#x22;, color: &#x22;#ff6bd6&#x22;, extras: { icon: &#x27;astonished&#x27;, learnMore: &#x27;http://localhost/&#x27;}},\n                    {label: &#x22;Confounded&#x22;, color: &#x22;#ff9d76&#x22;, extras: { icon: &#x27;confounded&#x27;, learnMore: &#x27;http://localhost/&#x27;}},\n                    {label: &#x22;Okay?&#x22;, color: &#x22;#51eaea&#x22;, extras: { icon: &#x27;face_with_raised_eyebrow&#x27;, learnMore: &#x27;http://localhost/&#x27;}},\n                    {label: &#x22;Blush&#x22;, color: &#x22;#fb3569&#x22;, extras: { icon: &#x27;blush&#x27;, learnMore: &#x27;http://localhost/&#x27;}}\n                ]\n            };\n        },\n        watch: {\n            inputRange() {\n                console.log(this.inputRange)\n            }\n        },\n        methods: {\n            vliderClick(value) {\n                console.log(&#x60;clicked&#x60;)\n                console.log(value)\n            }\n        }\n    };\n&#x3C;/script&#x3E;\n&#x3C;style&#x3E;\n    @import &#x22;vlider/src/sass/vlider.scss&#x22;\n&#x3C;/style&#x3E;\n            ",inputRange:null,lightSlider:[{label:"Angry",color:"#3a0088",extras:{icon:"angry",learnMore:"http://localhost/"}},{label:"Expressionless",color:"#ff5733",extras:{icon:"expressionless",learnMore:"http://localhost/"}},{label:"Astonished",color:"#c70039",extras:{icon:"astonished",learnMore:"http://localhost/"}},{label:"Confounded",color:"#ff7657",extras:{icon:"confounded",learnMore:"http://localhost/"}},{label:"Okay?",color:"#ffc60b",extras:{icon:"face_with_raised_eyebrow",learnMore:"http://localhost/"}},{label:"Blush",color:"#6effbf",extras:{icon:"blush",learnMore:"http://localhost/"}}],darkSlider:[{label:"Angry",color:"#ffc300",extras:{icon:"angry",learnMore:"http://localhost/"}},{label:"Expressionless",color:"#ffb0fe",extras:{icon:"expressionless",learnMore:"http://localhost/"}},{label:"Astonished",color:"#ff6bd6",extras:{icon:"astonished",learnMore:"http://localhost/"}},{label:"Confounded",color:"#ff9d76",extras:{icon:"confounded",learnMore:"http://localhost/"}},{label:"Okay?",color:"#51eaea",extras:{icon:"face_with_raised_eyebrow",learnMore:"http://localhost/"}},{label:"Blush",color:"#fb3569",extras:{icon:"blush",learnMore:"http://localhost/"}}],purpleSlider:[{label:"Angry",color:"#ff8000",extras:{icon:"angry",learnMore:"http://localhost/"}},{label:"Expressionless",color:"#ddf516",extras:{icon:"expressionless",learnMore:"http://localhost/"}},{label:"Astonished",color:"#ffe98a",extras:{icon:"astonished",learnMore:"http://localhost/"}},{label:"Confounded",color:"#ffeed0",extras:{icon:"confounded",learnMore:"http://localhost/"}},{label:"Okay?",color:"#dbff3d",extras:{icon:"face_with_raised_eyebrow",learnMore:"http://localhost/"}},{label:"Blush",color:"#7efaff",extras:{icon:"blush",learnMore:"http://localhost/"}}]}},watch:{inputRange:function(){console.log(this.inputRange)}},methods:{vliderClick:function(e){console.log("clicked"),console.log(e)}}},d=c,x=l("2877"),p=Object(x["a"])(d,n,r,!1,null,null,null),u=p.exports;l("c860");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(u)}}).$mount("#app")},c860:function(e,t,l){}});
//# sourceMappingURL=app.837bea11.js.map