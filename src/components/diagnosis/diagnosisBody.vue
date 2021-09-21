<template>
  <div class="page_container">
    <div class="goback_icon">
        <GoBack></GoBack>
    </div>
    <div class="add_symptoms">
        <h3>Questions</h3>
        <p>We will ask a series of questions to diagnose your symptoms</p>
    </div>
    <div class="body_symptoms">
        <van-button class="diagnosis-button" type="primary" color="#396CF0">By Body Parts</van-button>
        <van-button class="diagnosis-button" type="primary" color="#6A6A6A">By Department</van-button>
    </div>
    <div class="dropdown-menu">
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
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
            value1: 0,
            message: '',
            option1: [
            { text: 'All body parts', value: 0 },
            { text: 'head', value: 1 },
            { text: 'hand', value: 2 },
      ],
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

.add_symptoms {
    padding: 2em;
}

.add_symptoms p {
    color: #707070;
}

.dropdown-menu {
    padding: 1em;
    width: 100%;
}

.body_symptoms {
    padding: 1em;
    width: 100%;
    height: 8em;
    display: flex;
}

.diagnosis-button {
    width: 50%;
    margin-top: 1em;
}

/* next button */
.next_button {
    margin-top: 20em;
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