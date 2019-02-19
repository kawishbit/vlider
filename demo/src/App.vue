<template>
    <div id="app">
        <div class="wrapper">
            <section class="vlider-first">
                <div class="site-container">
                    <div class="header">
                        <h1><span class="green">V</span>lider</h1>
                        <h3>Input range component based on vue and custom CSS3. Highly customizable, pretty, and easy to use.</h3>
                    </div>
                    <h2>Install Plugin</h2>
                    <div class="code-snippet">
                        <div class="circles"></div>
                        <pre v-highlightjs><code class="html" v-html="firstExample"></code></pre>
                    </div>
                    <h2>Component Usage Example</h2>
                    <p>Use slot-scope to reiterate the data that you pass to vlider-data.</p>
                    <div class="code-snippet">
                        <div class="circles"></div>
                        <pre v-highlightjs><code class="html" v-html="secondExample"></code></pre>
                    </div>
                    <div class="components">
                        <div class="component full light">
                            <h4>Light Theme</h4>
                            <vlider
                            :id="'light'"
                            :vlider-data="lightSlider"
                            :theme="'theme-light'"
                            v-model="inputRange"
                            @click="vliderClick"
                            >
                                <template slot="bullet" slot-scope="bullet">
                                    <label>{{ bullet.data.label }}</label>
                                    <i
                                    class="em"
                                    :class="[`em-${bullet.data.extras.icon}`]"
                                    ></i> 
                                    <a target="_blank" :href="bullet.data.extras.learnMore">Learn more ?</a>
                                </template>
                            </vlider>
                        </div>
                        <div class="component full dark">
                            <h4>Dark Theme</h4>
                            <vlider
                            :id="'dark'"
                            :vlider-data="darkSlider"
                            :theme="'theme-dark'"
                            v-model="inputRange"
                            @click="vliderClick"
                            >
                                <template slot="bullet" slot-scope="bullet">
                                    <label>{{ bullet.data.label }}</label>
                                    <i
                                    class="em"
                                    :class="[`em-${bullet.data.extras.icon}`]"
                                    ></i> 
                                    <a target="_blank" :href="bullet.data.extras.learnMore">Learn more ?</a>
                                </template>
                            </vlider>
                        </div>
                        <div class="component full purple">
                            <h4>Purple Theme</h4>
                            <vlider
                            :id="'purple'"
                            :vlider-data="purpleSlider"
                            :theme="'theme-purple'"
                            v-model="inputRange"
                            @click="vliderClick"
                            >
                                <template slot="bullet" slot-scope="bullet">
                                    <label>{{ bullet.data.label }}</label>
                                    <i
                                    class="em"
                                    :class="[`em-${bullet.data.extras.icon}`]"
                                    ></i> 
                                    <a target="_blank" :href="bullet.data.extras.learnMore">Learn more ?</a>
                                </template>
                            </vlider>
                        </div>
                    </div>
                    <h2>Params</h2>
                    <ul class="demo-ul">
                        <li><b>id</b> => id of the vlider component</li>
                        <li><b>classes</b> => to add extra classes to the outer vlider container</li>
                        <li><b>theme</b> => there are 3 default themes : ("theme-dark", "theme-light", "theme-purple")</li>
                        <li><b>vlider-data</b> => Format : Create an array of objects, and you have to send label, color, and extras in every object, extras can be filled with anything you want and you can use the extras object using slot-scope like the above example</li>
                    </ul>
                    <h2>Events</h2>
                    <ul class="demo-ul">
                        <li>
                            <b>v-model</b> => v-model="yourVariable" //same usage like input v-model
                        </li>
                        <li>
                            <b>click</b> => @click="yourMethodHere(value)" //you can take the clicked element's value by using $event or the first parameter of your method
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Vlider from "vlider";
import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS)

export default {
    name: "app",
    components: {
        Vlider
    },
    data() {
        return {
            firstExample: `
&#x3C;script&#x3E;
    Import Vlider from &#x22;vlider&#x22;

    ...
    componenets: {
        Vlider
    }
    ...
&#x3C;/script&#x3E;

&#x3C;style&#x3E;
    //import vlider in your CSS or SCSS file or directly in your Vue file
    
    @import &#x22;vlider/src/sass/vlider.scss&#x22;;
    
    //or
    
    @import &#x22;vlider/dist/vlider.min.css&#x22;;
&#x3C;/style&#x3E;
            ` ,
            secondExample: `
&#x3C;template&#x3E;
    &#x3C;vlider
    :id=&#x22;&#x27;first&#x27;&#x22;
    :vlider-data=&#x22;slider&#x22;
    :theme=&#x22;&#x27;theme-dark&#x27;&#x22;
    v-model=&#x22;inputRange&#x22;
    @click=&#x22;vliderClick&#x22;
    &#x3E;
        &#x3C;template&#x3E; slot=&#x22;bullet&#x22; slot-scope=&#x22;bullet&#x22;
            &#x3C;label&#x3E;{{ bullet.data.label }}&#x3C;/label&#x3E;
            &#x3C;i
            class=&#x22;em&#x22;
            :class=&#x22;[\&#x60;em-\${bullet.data.extras.icon}\&#x60;]&#x22;
            &#x3E;&#x3C;/i&#x3E; 
            &#x3C;a target=&#x22;_blank&#x22; :href=&#x22;bullet.data.extras.learnMore&#x22;&#x3E;Learn more ?&#x3C;/a&#x3E;
        &#x3C;/template&#x3E;
    &#x3C;/vlider&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
    import Vlider from &#x22;vlider&#x22;;

    export default {
        name: &#x22;app&#x22;,
        components: {
            Vlider
        },
        data() {
            return {
                inputRange: null,
                slider: [
                    {label: &#x22;Angry&#x22;, color: &#x22;#ffc300&#x22;, extras: { icon: &#x27;angry&#x27;, learnMore: &#x27;http://localhost/&#x27;}},
                    {label: &#x22;Expressionless&#x22;, color: &#x22;#ffb0fe&#x22;, extras: { icon: &#x27;expressionless&#x27;, learnMore: &#x27;http://localhost/&#x27;}},
                    {label: &#x22;Astonished&#x22;, color: &#x22;#ff6bd6&#x22;, extras: { icon: &#x27;astonished&#x27;, learnMore: &#x27;http://localhost/&#x27;}},
                    {label: &#x22;Confounded&#x22;, color: &#x22;#ff9d76&#x22;, extras: { icon: &#x27;confounded&#x27;, learnMore: &#x27;http://localhost/&#x27;}},
                    {label: &#x22;Okay?&#x22;, color: &#x22;#51eaea&#x22;, extras: { icon: &#x27;face_with_raised_eyebrow&#x27;, learnMore: &#x27;http://localhost/&#x27;}},
                    {label: &#x22;Blush&#x22;, color: &#x22;#fb3569&#x22;, extras: { icon: &#x27;blush&#x27;, learnMore: &#x27;http://localhost/&#x27;}}
                ]
            };
        },
        watch: {
            inputRange() {
                console.log(this.inputRange)
            }
        },
        methods: {
            vliderClick(value) {
                console.log(&#x60;clicked&#x60;)
                console.log(value)
            }
        }
    };
&#x3C;/script&#x3E;
&#x3C;style&#x3E;
    @import &#x22;vlider/src/sass/vlider.scss&#x22;
&#x3C;/style&#x3E;
            `,
            inputRange: null,
            lightSlider: [
                {
                    label: "Angry",
                    color: "#3a0088",
                    extras: {
                        icon: 'angry',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Expressionless",
                    color: "#ff5733",
                    extras: {
                        icon: 'expressionless',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Astonished",
                    color: "#c70039",
                    extras: {
                        icon: 'astonished',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Confounded",
                    color: "#ff7657",
                    extras: {
                        icon: 'confounded',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Okay?",
                    color: "#ffc60b",
                    extras: {
                        icon: 'face_with_raised_eyebrow',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Blush",
                    color: "#6effbf",
                    extras: {
                        icon: 'blush',
                        learnMore: 'http://localhost/'
                    }
                }
            ],
            darkSlider: [
                {
                    label: "Angry",
                    color: "#ffc300",
                    extras: {
                        icon: 'angry',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Expressionless",
                    color: "#ffb0fe",
                    extras: {
                        icon: 'expressionless',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Astonished",
                    color: "#ff6bd6",
                    extras: {
                        icon: 'astonished',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Confounded",
                    color: "#ff9d76",
                    extras: {
                        icon: 'confounded',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Okay?",
                    color: "#51eaea",
                    extras: {
                        icon: 'face_with_raised_eyebrow',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Blush",
                    color: "#fb3569",
                    extras: {
                        icon: 'blush',
                        learnMore: 'http://localhost/'
                    }
                }
            ],
            purpleSlider: [
                {
                    label: "Angry",
                    color: "#ff8000",
                    extras: {
                        icon: 'angry',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Expressionless",
                    color: "#ddf516",
                    extras: {
                        icon: 'expressionless',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Astonished",
                    color: "#ffe98a",
                    extras: {
                        icon: 'astonished',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Confounded",
                    color: "#ffeed0",
                    extras: {
                        icon: 'confounded',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Okay?",
                    color: "#dbff3d",
                    extras: {
                        icon: 'face_with_raised_eyebrow',
                        learnMore: 'http://localhost/'
                    }
                },
                {
                    label: "Blush",
                    color: "#7efaff",
                    extras: {
                        icon: 'blush',
                        learnMore: 'http://localhost/'
                    }
                }
            ],
        };
    },
    watch: {
        inputRange() {
            console.log(this.inputRange)
        }
    },
    methods: {
        vliderClick(value) {
            console.log(`clicked`)
            console.log(value)
        }
    }
};
</script>

<style lang="sass">
    @import "assets/styles/global.scss";
</style>
