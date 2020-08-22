import "./sass/vlider.scss";
import Vlider from "./Vlider.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("vlider", Vlider);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

Vlider.install = install;

// Export component by default
export default Vlider;
