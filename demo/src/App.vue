<template>
  <div id="app">
    <vlider :id="'first'" :range-data="slider" :theme="'dark'"></vlider>
  </div>
</template>

<script>
import Vlider from 'vlider'

export default {
  name: "app",
  data() {
    return {
      slider: [
        {
          name: "Angry",
          icon: "angry",
          color: "#ffc300"
        },
        {
          name: "Expressionless",
          icon: "expressionless",
          color: "#ffb0fe"
        },
        {
          name: "Astonished",
          icon: "astonished",
          color: "#ff6bd6"
        },
        {
          name: "Confounded",
          icon: "confounded",
          color: "#cdffeb"
        },
        {
          name: "Okay?",
          icon: "face_with_raised_eyebrow",
          color: "#9fe8fa"
        },
        {
          name: "Blush",
          icon: "blush",
          color: "#1fe5bd"
        }
      ]
    }
  }
};
</script>
