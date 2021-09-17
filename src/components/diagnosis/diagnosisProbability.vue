<template>
    <div class="page_container">
        <div class="goback_icon">
            <GoBack></GoBack>
        </div>
        <div class="diagnosis_result">
            <h3>Series Questions</h3>
            <p>Here are the results of your diagnosis of the above symptoms, ranked from highest to lowest probability.</p>
        </div>
        <div class="next_button">
            <router-link to="/diagnosisResult"><button class="next">Next</button></router-link>
        </div>
    </div>


    
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
    name: "diagnosisProbability",
    components: {
        GoBack,
    },
    data() {
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

.diagnosis_result {
    padding: 1em;
    margin-top: 6em;
    height: 30em;
}

.diagnosis_result p {
    text-align: left;
    padding: 2em;
}

/* next button */
.next_button {
  margin-top: 4em;
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