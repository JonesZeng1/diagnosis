<template>
  <div class="page_container">
    <div class="goback_icon">
          <GoBack></GoBack>
    </div>

    <div class="diagnosis_image">
        <img src="../assets/doctor_vector.png" />
    </div>
    <div class="diagnosis_description">
        <h3>Hi there!</h3>
        <p>You will have a 3 minute, safe and anonymous health consultation. Your answer will be analyzed by our AI system and a relatively correct diagnosis result will be obtained</p>
    </div>

    <div class="next_button">
        <router-link to="/diagnosisConfirm"><button class="next">Next</button></router-link>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
    name: "Diagnosis",
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

/* goback_icon */
.goback_icon {
    padding-top: 2em;
}

.page_container {
    width: 100vw;
    height: 100vh;
}

.diagnosis_image {
    width: 100%;
    height: 25em;
    padding-top: 2em;
    text-align: center;
}

.diagnosis_image img {
    width: 100%;
    height: 100%;
    padding: 4em;
}

/* diagnosis description */
.diagnosis_description {
    padding-left: 2em;
    text-align: left;
    padding-right: 2em;
}

.diagnosis_description p  {
    margin-top: 1em;
    color: #707070;
}

.next_button {
  margin-top: 5em;
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