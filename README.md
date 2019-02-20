# Vlider

Input range component based on vue and custom CSS3. Highly customizable, pretty, and easy to use. 
(Demo: https://kawisphoenix.github.io/vlider/)

![Demo](https://github.com/kawisphoenix/vlider/blob/master/vlider.gif "Demo")

## Install Plugin

```js
npm install --save vlider
```

```html
<script>
    Import Vlider from "vlider"

    ...
    componenets: {
        Vlider
    }
    ...
</script>

<style>
    //import vlider in your CSS or SCSS file or directly in your Vue file
    
    @import "vlider/src/sass/vlider.scss";
    
    //or
    
    @import "vlider/dist/vlider.min.css";
</style>
```

## Component Usage Example

```html
<template>
    <vlider
    :id="'first'"
    :vlider-data="slider"
    :theme="'theme-dark'"
    v-model="inputRange"
    @click="vliderClick"
    >
        <template> slot="bullet" slot-scope="bullet"
            <label>{{ bullet.data.label }}</label>
            <i
            class="em"
            :class="[`em-${bullet.data.extras.icon}`]"
            ></i> 
            <a target="_blank" :href="bullet.data.extras.learnMore">Learn more ?</a>
        </template>
    </vlider>
</template>
<script>
    import Vlider from "vlider";

    export default {
        name: "app",
        components: {
            Vlider
        },
        data() {
            return {
                inputRange: null,
                slider: [
                    {label: "Angry", color: "#ffc300", extras: { icon: 'angry', learnMore: 'http://localhost/'}},
                    {label: "Expressionless", color: "#ffb0fe", extras: { icon: 'expressionless', learnMore: 'http://localhost/'}},
                    {label: "Astonished", color: "#ff6bd6", extras: { icon: 'astonished', learnMore: 'http://localhost/'}},
                    {label: "Confounded", color: "#ff9d76", extras: { icon: 'confounded', learnMore: 'http://localhost/'}},
                    {label: "Okay?", color: "#51eaea", extras: { icon: 'face_with_raised_eyebrow', learnMore: 'http://localhost/'}},
                    {label: "Blush", color: "#fb3569", extras: { icon: 'blush', learnMore: 'http://localhost/'}}
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
                console.log(`clicked`)
                console.log(value)
            }
        }
    };
</script>
<style>
    @import "vlider/src/sass/vlider.scss"
</style>
```

## Params

Param | Description 
--- | ---
**id** | id of the vlider component
**classes** | to add extra classes to the outer vlider container
**theme** | there are 3 default themes : ("theme-dark", "theme-light", "theme-purple")
**vlider-data** | Format : Create an array of objects, and you have to send label, color, and extras in every object, extras can be filled with anything you want and you can use the extras object using slot-scope like the above example


## Events

Event | Description
--- | ---
**v-model** | v-model="yourVariable" //same usage like input v-model
**click** | @click="yourMethodHere(value)" //you can take the clicked element's value by using $event or the first parameter of your method


