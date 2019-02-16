<template>
    <div id="app">
        <vlider
        :id="'first'"
        :vlider-data="slider"
        :theme="'theme-dark'"
        v-model="inputRange"
        @click="vliderClick()"
        >
            <template slot="bullet" slot-scope="bullet">
                <label>{{ bullet.data.label }}</label>
                <i
                class="em"
                :class="[`em-${bullet.data.extras.icon}`]"
                ></i> 
                <a :href="bullet.data.extras.learnMore">Learn more ?</a>
            </template>
        </vlider>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Vlider from "vlider";

export default {
    name: "app",
    components: {
        HelloWorld,
        Vlider
    },
    data() {
        return {
            inputRange: null,
            slider: [
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
            ]
        };
    },
    watch: {
        inputRange() {
            console.log(this.inputRange)
        }
    },
    methods: {
        vliderClick() {
            console.log(`clicked`)
        }
    }
};
</script>

<style lang="sass">
    @import "assets/styles/global.scss";
</style>
