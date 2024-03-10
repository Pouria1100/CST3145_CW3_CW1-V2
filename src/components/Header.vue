<template>
         
    <!-- Navbar section with search field and basket icon -->
    <div class="navbar container-fluid  m-0 p-4">
        <!-- <img :src="logoImage" alt="Logo" class="navLogo"> -->
        <div class="webName">
            <h1 class="pageTitle">{{ siteName }}</h1>
        </div>
        
        <div class="basketIcon" @click="switchView">
            <i class="fas fa-shopping-basket"></i>
            <div class="counter">
                <span>{{cartLength}}</span>
            </div>
           
        </div>
    </div>
  
</template>

<script>
export default {
    name: "Header",

    props: [
        "siteName",
        "cartLength",
        "logoImage"
    ],
    methods: {
        switchView() {
            console.log("event triggered");
            this.$emit("switch-view");
        }
    }
}
</script>

<style>

.basketIcon i{
    font-size: 1.5em;
    z-index: 1;
}
/* Navbar Styles */
.navbar {
    background-color: #4CAF50;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

}


.counter{
    padding: 2px 7px 1px 7px ;
    border: none;
    border-radius: 30px;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: absolute;
   top: 28px;
   right: 22px;
   opacity: .8;
}


/* Style for .webName */
.webName {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

/* Style for .navLogo */
.navLogo {
    width: 200px;
    height: 80px;
    margin-right: 10px;
}

/* Style for .pageTitle */
.pageTitle {
    font-size: 24px;
    margin: 0;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px 20px;
    border-radius: 10px;
}
</style>