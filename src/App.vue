<template>
  <div id="app">
  <Header 
    :siteName = "siteName"  
    :cartLength = "cart.length" 
    :logoImage="logoImage"
    @switch-view="switchView"
    >
    
  </Header>

  <component 
    :is = "currentView" 
    :lessons = "lessons"
    @add-lesson-to-cart = "addLessonToCart"
    @remove-lesson-from-cart = "removeLessonFromCart"
    :cart = "cart" 
   ></component>

   
  </div>
</template>

<script>
import LessonView from '/src/components/LessonView.vue';
import Header from './components/Header.vue';
import CheckoutView from './components/CheckoutView.vue';

export default {
  name: "App",
  data() {
    return {
      siteName: "After School Club",
      logoImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cart: [],
      lessons: [],
      currentView: LessonView,
    }
  },
  components: {
    Header,
    LessonView,
    CheckoutView
  },
  methods: {
    addLessonToCart(lesson) {
      lesson.spaces -= 1;
      this.cart.push(lesson);
    },
    removeLessonFromCart(lesson) {
      const cartLength = this.cart.length;
      for (let i = 0; i < cartLength; i++) {
        let currentLesson = this.cart[i];
     
        if (JSON.stringify(currentLesson) === JSON.stringify(lesson)) {
              lesson.spaces += 1;
              this.cart.splice(i, 1); 
              break;
        }
      } 
    },
    switchView() {
      if (this.currentView === LessonView) {
        this.currentView = CheckoutView
      } else {
        this.currentView = LessonView
      }
    },
    // Function to fetch lessons from lessons.json file
    fetchLessons() {
      fetch('https://afterschool-env.eba-ri2ffiqw.eu-west-2.elasticbeanstalk.com/lessons')
        .then(response => response.json())
        .then(data => {
          this.lessons = data
        })
        .catch(error => {
          console.error('Error fetching lessons: ', error);
        });
    },
  },
  created() {
    this.fetchLessons(); // Fetch lessons when the Vue instance is created
  },
}

</script>

<style>

</style>
