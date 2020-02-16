import Vue from "vue";


const num = {
  template: "#slider-num",
  props: ["currentWork"]
}

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork", "firstOutIndex", "slidesPerPage"]
}

const btns = {
  template: "#slider-buttons",
  props: ["works", "currentWork", "firstOutIndex", "slidesPerPage", "currentIndex"]
  
}

const display = {
  template: "#slider-display",
  components: {
    thumbs, btns
  },
  props: ["works", "currentWork", "firstOutIndex", "slidesPerPage", "currentIndex"],
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
  props: ["currentWork"],
  computed: {
    tagsArray() {
        return this.currentWork.skills.split(', ');
    }
}

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
      currentIndex: 0,
      slidesPerPage: 3
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    },

    firstOutIndex() {
        if (this.currentIndex + 1 <= this.slidesPerPage)
            return 0;
        else
        // else if (this.currentIndex < 2)
            return this.currentIndex + 1 - this.slidesPerPage;
        // console.log("FOI ="+this.firstOutIndex)       
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
        default:
          this.currentIndex = direction;
          break;
      }
      console.log("FOI ="+this.firstOutIndex);
      console.log("CI ="+this.currentIndex);
      console.log("spp = " + this.slidesPerPage);
      // console.log(direction);
    },
    makeInfiniteLoopForIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;

    },
    makeEndOfLoop(value) {
      // const workQty = this.works.length - (this.slidesPerPage - 1);
      const workQty = this.works.length;
      // console.log(workQty);
      // console.log(value);
      if (value > workQty-1) this.currentIndex = workQty-1;
      if (value < 0) this.currentIndex = 0;
    },
    calcSlidesPerPage() {
      const calc = () => {
        this.slidesPerPage = window.innerWidth <= 1800 ? 3:4;
      }

      calc();

      console.log("spp = " + this.slidesPerPage);

      // window.addEventListener("resize", calc);

      // console.log(this.slidesPerPage);
    }
  },
  watch: {
    currentIndex(value) {
      // this.makeInfiniteLoopForIndex(value)
      this.makeEndOfLoop(value)

    }

  },
  
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
    window.addEventListener("resize", this.calcSlidesPerPage()); 
    window.addEventListener("resize", this.calcSlidesPerPage); 
    console.log(data)
    // this.currentWork = this.works[this.currentIndex];
  }
})