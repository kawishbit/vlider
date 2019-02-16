import 'sass/vlider.scss';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
    props: {
        vliderData: {
            type: [Array, Object],
            default: function default$1() {
                return [
                    {
                        label: "Data 1",
                        extras: 'unknown',
                        color: "#ffc300"
                    },
                    {
                        label: "Data 3",
                        extras: 'unknown',
                        color: "#ffb0fe"
                    },
                    {
                        label: "Data 3",
                        extras: 'unknown',
                        color: "#ff6bd6"
                    }
                ]
            }
        },
        theme: {
            type: String,
            default: "theme-light"
        },
        id: {
            type: String,
            default: "vlider-1"
        }
    },
    data: function data() {
        return {
            inputRange: null,
            rangeStyle: ""
        };
    },
    computed: {
        rangeAmount: function rangeAmount() {
            return this.vliderData.length;
        }
    },
    watch: {
        vliderData: function vliderData() {
            this.createCss();
            this.inputRange = null;
        }
    },
    mounted: function mounted() {
        this.createCss();
    },
    methods: {
        selectThumb: function selectThumb(numbers) {
            this.inputRange = numbers;
        },
        createCss: function createCss() {
            var prevelem = document.getElementById(("rangeStyle" + (this.id)));
            if (prevelem) {
                prevelem.remove();
            }
            var head = document.head || document.getElementByTagName("head")[0];
            var css = document.createElement("style");
            css.setAttribute("id", ("rangeStyle" + (this.id)));
            css.type = "text/css";
            var styles = "";
            var color_stops = this.vliderData.map(function (val) { return val.color; }).join(",");

            var prefix = "#" + (this.id) + " .range input[type=range]";
            var gradient = "\n                background: " + (this.vliderData[0].color) + ";\n                background: -moz-linear-gradient(left, " + color_stops + ");\n                background: -webkit-linear-gradient(left," + color_stops + ");\n                background: linear-gradient(to right, " + color_stops + ");\n                filter: progid:DXprogid:DXImageTransform.Microsoft.gradient(startColorstr='" + (this.vliderData[0].color) + "', endColorstr='" + (this.vliderData[this.rangeAmount - 1].color) + "',GradientType=1);\n            ";
            styles += "\n                " + prefix + "::-webkit-slider-runnable-track{" + gradient + "}\n                " + prefix + ":focus::-webkit-slider-runnable-track {" + gradient + "}\n                " + prefix + "::-moz-range-track {" + gradient + "}\n                " + prefix + "::-ms-track {background: transparent;}\n                " + prefix + "::-ms-fill-lower {" + gradient + "}\n                " + prefix + ":focus::-ms-fill-lower {" + gradient + "}\n                " + prefix + "::-ms-fill-upper {" + gradient + "}\n                " + prefix + ":focus::-ms-fill-upper {" + gradient + "}\n            ";
            css.appendChild(document.createTextNode(styles));
            head.appendChild(css);
        },
        sluggify: function sluggify(str) {
            str = str.replace(/^\s+|\s+$/g, ""); // trim
            str = str.toLowerCase();

            // remove accents, swap ñ for n, etc
            var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to = "aaaaaeeeeiiiioooouuuunc------";

            for (var i = 0, l = from.length; i < l; i++) {
                str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
            }

            str = str
            .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
            .replace(/\s+/g, "-") // collapse whitespace and replace by -
            .replace(/-+/g, "-"); // collapse dashes

            return str;
        },
        createName: function createName(name) {
            return "rangeBullet" + this.sluggify(name);
        }
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vlider-container",class:[_vm.theme],attrs:{"id":_vm.id}},[_c('ul',{staticClass:"vlider-labels"},[_vm._l((_vm.vliderData),function(data,index){return [_c('li',{class:[_vm.createName(_vm.range.name), {'active' : index+1 == _vm.inputRange}],style:({color: _vm.range.color}),on:{"click":function($event){return _vm.selectThumb(index+1)}}},[_vm._t("bullet",null,{"data":data})],2)]})],2),_vm._v(" "),_c('div',{staticClass:"vlider-range"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.inputRange),expression:"inputRange",modifiers:{"number":true}}],attrs:{"type":"range","min":"1","max":_vm.rangeAmount,"steps":"1"},domProps:{"value":(_vm.inputRange)},on:{"__r":function($event){_vm.inputRange=_vm._n($event.target.value);},"blur":function($event){return _vm.$forceUpdate()}}})])])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Vlider = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('vlider', Vlider);
}

var plugin = {
    install: install,
};

var GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

Vlider.install = install;

export default Vlider;
