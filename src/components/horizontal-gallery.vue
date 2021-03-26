<template>
  <div class="root">
    <transition-group name="list-complete" tag="div" class="container">
      <div class="exhibition" v-for="image in filteredImages" :key="image.id">
        <div class="img" @click="$emit('image-selected', image.title)">
          <div :style="{'backgroundImage': `url('${getImageUrl(image)}')`}"></div>
        </div>
        <div class="description">
          <h3 class="title" style="font-size: 24px">{{ image.title }}</h3>
          <p class="description" style="font-size: 20px">{{ image.description }}</p>
        </div>
      </div>
    </transition-group>
    <div class="prev" @click="prev">
      <span>{{ prevCharacter }}</span>
    </div>
    <div class="next" @click="next">
      <span>{{ nextCharacter }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "horizontal-gallery",
  data: function () {
    return {
      startingIndex: 0,
      prevCharacter: "<",
      nextCharacter: ">",
    }
  },
  props: {
    images: Array,
    maximumLength: Number
  },
  computed: {
    filteredImages: function () {
      let result = [], size = this.images.length;
      for (let i = this.startingIndex; i < this.startingIndex + this.maximumLength; i++)
        result.push(this.images[i % size]);
      return result;
    }
  },
  methods: {
    getImageUrl: function (image) {
      let file = image.fileName;
      return require(".././assets/img/" + file);
    },

    next: function () {
      this.startingIndex += 1;
    },

    prev: function () {
      this.startingIndex -= 1;
    }
  }
}
</script>

<style scoped>

.root {
  position: relative;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
}

.list-complete-leave-active {
  position: absolute;
}

.container {
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;

  overflow: hidden;
}

.exhibition {
  height: 100%;
  width: 13vw;
  margin-right: 30px;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  transition: all 0.8s ease;
}

.img {
  display: block;
  width: 100%;
  height: 70%;
  overflow: hidden;

  border: 1px solid gray;
}

.img div {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;

  transition: 0.4s ease-in-out;
}

.img:hover div {
  transform: scale(1.5);
  transition: 0.6s ease-in-out;
}

.description {
  width: 100%;
  height: 30%;

  font-family: Roboto, sans-serif;
}

.prev, .next {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: whitesmoke;
  top: 30%;
}

.prev span, .next span {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  font-style: normal;
  font-size: 20px;
  font-family: Arial, sans-serif;
  font-weight: 200;
  line-height: 40px;
  transition: 0.4s ease;

  transform: scaleY(1.3);
}

.prev span {
  left: -2px;
}

.next span {
  left: 2px;
}

.prev:hover, .next:hover {
  cursor: pointer;
}

.prev:hover span {
  transform: translateX(-5px);
  transition: 0.4s ease;
}

.next:hover span {
  transform: translateX(5px);
  transition: 0.4s ease;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>