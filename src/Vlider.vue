<template>
    <div
    class="vlider-container"
    :class="[theme, ...classes]"
    :id="id"
    >
        <ul class="vlider-labels">
            <template v-for="(data, index) in vliderData">
                <li
                :key="index"
                @click="selectThumb(index+1)"
                :class="[createName(data.label), {'active' : index+1 == inputRange}]"
                :style="{color: data.color}"
                >
                    <slot name="bullet" :data="data">
                    <!-- fallback content here -->
                    </slot> 
                </li>
            </template>
        </ul>
        <div class="vlider-range">
            <input
            v-model.number="inputRange"
            type="range"
            min="1"
            :max="rangeSteps"
            steps="1"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vliderData: {
            type: [Array, Object],
            default() {
                return [
                    {
                        label: "Data 1",
                        color: "#ffc300",
                        extras: {
                            first: 'test',
                            second: 'test2'
                        }
                    },
                    {
                        label: "Data 3",
                        color: "#ffb0fe",
                        extras: {
                            first: 'test',
                            second: 'test2'
                        }
                    },
                    {
                        label: "Data 3",
                        color: "#ff6bd6",
                        extras: {
                            first: 'test',
                            second: 'test2'
                        }
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
        },
        classes: {
            type: [Array, Object, String],
            default: "extra-classes"
        }
    },
    data() {
        return {
            inputRange: null,
            rangeStyle: ""
        };
    },
    mounted() {
        console.log(this.classes)
    },
    computed: {
        rangeSteps() {
            return this.vliderData.length
        }
    },
    watch: {
        vliderData() {
            this.createCss()
            this.inputRange = null
        },
        inputRange() {
            this.$emit('input', this.inputRange)
        }
    },
    mounted() {
        this.createCss()
    },
    methods: {
        selectThumb(numbers) {
            this.inputRange = numbers
            this.$emit('click', this.inputRange)
            console.log(this.classes)
        },
        createCss() {
            var prevelem = document.getElementById(`rangeStyle${this.id}`)
            if (prevelem) {
                prevelem.remove()
            }
            var head = document.head || document.getElementByTagName("head")[0]
            var css = document.createElement("style")
            css.setAttribute("id", `rangeStyle${this.id}`)
            css.type = "text/css"
            var styles = ""
            var color_stops = this.vliderData.map(val => val.color).join(",")
            var prefix = `#${this.id} .vlider-range input[type=range]`
            var gradient = `
                background: ${this.vliderData[0].color};
                background: -moz-linear-gradient(left, ${color_stops});
                background: -webkit-linear-gradient(left,${color_stops});
                background: linear-gradient(to right, ${color_stops});
                filter: progid:DXprogid:DXImageTransform.Microsoft.gradient(startColorstr='${this.vliderData[0].color}', endColorstr='${this.vliderData[this.rangeSteps - 1].color}',GradientType=1);
            `;
            styles += `
                ${prefix}::-webkit-slider-runnable-track{${gradient}}
                ${prefix}:focus::-webkit-slider-runnable-track {${gradient}}
                ${prefix}::-moz-range-track {${gradient}}
                ${prefix}::-ms-track {background: transparent;}
                ${prefix}::-ms-fill-lower {${gradient}}
                ${prefix}:focus::-ms-fill-lower {${gradient}}
                ${prefix}::-ms-fill-upper {${gradient}}
                ${prefix}:focus::-ms-fill-upper {${gradient}}
            `
            css.appendChild(document.createTextNode(styles))
            head.appendChild(css)
        },
        sluggify(str) {
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
        createName(name) {
            return "rangeBullet" + this.sluggify(name);
        }
    }
};
</script>
