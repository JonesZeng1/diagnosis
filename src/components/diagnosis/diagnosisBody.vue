<template>
  <div class="page_container">
    <div class="goback_icon">
        <GoBack></GoBack>
    </div>
    <div class="add_symptoms">
        <h3>Addd symptoms</h3>
    </div>
    <div class="body_symptoms">

    </div>
    <div class="body_symptoms_search_box">
        <van-search v-model="value" placeholder="Input the symptoms keyword" />
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
      value: '',
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
    height: 25em;
}

.body_symptoms_search_box {
    padding: 1em;
    margin-top: 6em;
    width: 100%;
}

/* next button */
.next_button {
  margin-top: 2em;
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