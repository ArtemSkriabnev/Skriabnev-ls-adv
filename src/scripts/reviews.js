import Vue from "vue";

const slheader = {
  template: "#reviews-slider__header",
  props: {
    works: Array,
    currentIndex: Number,
    slidesPerPage: Number
  }
};

new Vue ({
  template: "#reviews-slider",
  el: "#reviews-slider-component",
  // props: {
  //   works: Array
  // },

  components: {
    slheader
  },

  data() {
    return {
      works: [],
      currentIndex: 0,
      slidesPerPage: 2
    };
  },

  computed: {
    currentWork () {
      return this.works[this.currentIndex];
    }
  },

  methods: {
    makeImagesArray(data) {
      return data.map(item =>{
        // console.log(item.authorpic)
        const requiredPic = require(`../images/content/${item.authorpic}`);
        item.authorpic = requiredPic;

        return item;
      }); 
    },
    handleSlide(direction) {
      // console.log(direction);
      switch(direction) {
        case "next":
          this.currentIndex++;
          console.log(this.currentIndex);
          console.log(this.works.length - 1);
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    makeEndOfLoop(value) {
      const workQty = this.works.length - (this.slidesPerPage - 1);
      // console.log(workQty);
      // console.log(value);
      if (value > workQty-1) this.currentIndex = workQty-1;
      if (value < 0) this.currentIndex = 0;
    },
    calcSlidesPerPage() {
      const calc = () => {
        this.slidesPerPage = window.innerWidth <= 480 ? 1:2;
      }

      calc();

      // window.addEventListener("resize", calc);

      console.log(this.slidesPerPage);
    }

  },
  watch: { 
    currentIndex(value) {
      this.makeEndOfLoop(value)
    }

  },

  created() {
    const data = require("../data/reviews.json");
    this.works = this.makeImagesArray(data);
    window.addEventListener("resize", this.calcSlidesPerPage()); 
    window.addEventListener("resize", this.calcSlidesPerPage); 
    // почему, чтобы срабатывало при заргрузке нужно со скобками, а чтобы слушал - без скобок.
  },

  // mounted() {
  //   window.addEventListener("resize", this.calcSlidesPerPage); //я так толком и не понял, как это работает, 
  // }

})