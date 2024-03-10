<template>
  <div class="lessonContainer">
     
      <div v-for="(lesson, index) in lessons" :key="index" class="lessonCard col-11">
          <i v-bind:class="lesson.icon" class="lessonIcon"></i>
          <h2>{{lesson.subject}}</h2>
          <p>Location: {{lesson.location}}</p>
          <p>Price: £{{lesson.price}}</p>
          <p>Available Spaces: {{lesson.spaces}}</p>
          <button @click="addLessonToCart(lesson)">
              <i v-if="lesson.spaces != 0" class="fa-solid fa-cart-plus cartIcon"></i>
              <i v-else class="fa-solid fa-cart-shopping cartIcon"></i>
          </button>
      </div>
  </div>
  
</template>

<script>
export default {
  name: "LessonView",
    props: ["lessons"],
    methods: {
        addLessonToCart(lesson){
            this.$emit("add-lesson-to-cart", lesson);
        }
    }
   

}
</script>

<style>
.lessonCard {
    background-color: #ffffff;
    border: 3px solid #4CAF50;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    transition: 0.3s;
}

.lessonCard:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}

.lessonCard h2 {
    font-size: 1.8em;
    font-weight: 800;
    color: #4CAF50;
    margin-bottom: 10px;
}

.lessonCard button {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    transform: translateY(0);
}

.lessonCard button:hover {
    background-color: #000000;
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}


.lessonIcon {
    font-size: 70px;
    color: #4CAF50;
    margin-bottom: 20px;
}
</style>

