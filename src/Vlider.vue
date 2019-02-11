<template>
  <div class="range-container" :id="id">
    <ul class="range-labels">
      <template v-for="(range, index) in rangeData">
        <li @click="selectThumb(index+1)" :class="[createName(range.name), theme, {'active' : index+1 == inputRange}]">
          <p>{{ range.name }}</p>
          <i class="em" :class="['em-'+range.icon]"></i>
        </li>
      </template>
    </ul>
    <div class="range">
      <input v-model.number="inputRange" type="range" min="1" :max="rangeAmount" steps="1"/>
    </div>
  </div>
</template>

<script>
export default {
    props: [`rangeData`, `theme`, `id`],
    data() {
      return {
        inputRange: null,
        rangeStyle: ''
      }
    },
    computed: {
      rangeAmount() {
        return this.rangeData.length
      }
    },
    watch: {
      rangeData() {
        this.createCss()
        this.inputRange = null
      }
    },
    mounted() {
      this.createCss()
    },
    methods: {
      selectThumb(numbers){
        this.inputRange = numbers
      },
      createCss() {
        var prevelem = document.getElementById(`rangeStyle${this.id}`)
        if(prevelem) {
          prevelem.remove()
        }
        var head = document.head || document.getElementByTagName('head')[0]
        var css = document.createElement('style')
        css.setAttribute('id', `rangeStyle${this.id}`)
        css.type = 'text/css'
        var styles = ''
        var color_stops = ''
        var self = this
        var no = 1
        var label = `.range-container .range-labels li.rangeBullet`
        var boxShadow = `0 0 0 3px`
        var boxShadowActive = `0 0 0 6px`
        this.rangeData.forEach((val, index) => {
          styles += `
              ${label}${self.sluggify(val.name)}::after {
                -webkit-box-shadow: ${boxShadow} ${val.color};
                -ms-box-shadow: ${boxShadow} ${val.color};
                -o-box-shadow: ${boxShadow} ${val.color};
                box-shadow: ${boxShadow} ${val.color};
              }

              ${label}${self.sluggify(val.name)}.active::after {
                -webkit-box-shadow: ${boxShadowActive} ${val.color};
                -ms-box-shadow: ${boxShadowActive} ${val.color};
                -o-box-shadow: ${boxShadowActive} ${val.color};
                box-shadow: ${boxShadowActive} ${val.color};
              }
          `
          var comma = this.rangeAmount == no ? '' : ','
          color_stops += val.color + comma
          no++
        })

        var prefix = `#${this.id} .range input[type=range]`
        var gradient = `
          background: ${this.rangeData[0].color};
          background: -moz-linear-gradient(left, ${color_stops});
          background: -webkit-linear-gradient(left,${color_stops});
          background: linear-gradient(to right, ${color_stops});
          filter: progid:DXprogid:DXImageTransform.Microsoft.gradient(startColorstr='${this.rangeData[0].color}', endColorstr='${this.rangeData[this.rangeAmount - 1].color}',GradientType=1);
        `
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
        str = str.replace(/^\s+|\s+$/g, '') // trim
        str = str.toLowerCase()

        // remove accents, swap ñ for n, etc
        var from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
        var to = 'aaaaaeeeeiiiioooouuuunc------'

        for (var i = 0, l = from.length; i < l; i++) {
          str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
        }

        str = str
          .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
          .replace(/\s+/g, '-') // collapse whitespace and replace by -
          .replace(/-+/g, '-') // collapse dashes

        return str
      },
      createName(name) {
        return 'rangeBullet' + this.sluggify(name)
      },
    }
}
</script>
