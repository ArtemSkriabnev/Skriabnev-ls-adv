import Vue from "vue";


const num = {
  template: "#slider-num",
  props: ["currentWork"]
}

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork"]
}

const btns = {
  template: "#slider-buttons",
  
}

const display = {
  template: "#slider-display",
  components: {
    thumbs, btns
  },
  props: ["works", "currentWork"],
  computed: {
    reversedWorks() {
      return [...this.works].reverse();
    }
  }
  // methods: {

  // }
}
const tags = {
  template: "#slider-tags",
  props: ["tags"]
}

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"]

}


new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, info, num
  },
  data() {
    return {
      works: [],
      // currentWork: {},
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }

  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
        return item;
      })
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
      // console.log(direction);
    },
    makeInfiniteLoopForIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;

    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value)

    }

  },
  
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
    // this.currentWork = this.works[this.currentIndex];
  }
})