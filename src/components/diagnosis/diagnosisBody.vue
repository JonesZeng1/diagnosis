<template>
  <div class="page_container">
    <div class="goback_icon">
        <GoBack></GoBack>
    </div>
    <div class="add_symptoms">
        <h3>Addd symptoms</h3>
    </div>
    <div class="body_symptoms">
        <img src="@/assets/body.png">
    </div>
    <div class="body_symptoms_search_box">
        <div><p>{{ message }}</p></div>
    </div>
    <div class="next_button">
        <router-link to="/diagnosisProbability"><button class="next">Next</button></router-link>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
    name: "diagnosisBody",
    components: {
        GoBack,
    },
    data() {
        return {
      message: '',
    };
  },
    methods: {
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.page_container {
    width: 100vw;
    height: 100vh;
}

.goback_icon {
    padding-top: 2em;
}

.body_symptoms {
    padding: 1em;
    width: 100%;
    height: 32em;
}

.body_symptoms img {
    width: 60%;
    height: 100%;
    padding: 1em;
}

.body_symptoms_search_box {
    padding: 2em;
    width: 100%;
}

.body_symptoms_search_box div{
    background-color: #e8ecf0;
    width: 100%;
    padding: 2em;
    border-radius: 10px;
    height: 4em;
}

/* next button */
.next_button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.next {
  border: none;
  border-radius: 15px;
  width: 85vw;
  padding: 1.2em;
  color: white;
  font-size: 1em;
  background-color: #396cf0;
  text-decoration: none;
  text-align: center;
}
</style>