import './sass/main.scss'
import Vlider from './Vlider.vue'

export default {
    install: function (Vue, options) {
        Vue.component('vlider', Vlider)
    },
}
