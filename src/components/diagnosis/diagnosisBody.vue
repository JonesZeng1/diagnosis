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
        <router-link to="diagnosisBodySelect"><van-button class="diagnosis-button" type="primary" color="#396CF0">By Body Parts</van-button></router-link>
        <van-button class="diagnosis-button" type="primary" color="#6A6A6A">By Department</van-button>
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
}

.diagnosis-button {
    width: 50%;
    margin-top: 1em;
}


/* next button */
.next_button {
  margin-top: 8em;
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