<template>
  <div class="page_container">
    <div class="goback_icon">
          <GoBack></GoBack>
    </div>

    <div class="confirm_title">
        <h3>Please confirm that the following statement applies to you</h3>
    </div>

    <div class="behaviour_checkbox">
        <!-- this code is refer to https://codepen.io/FlorinCornea/pen/poNBrzm -->
        <article class="feature1">
          <input type="checkbox" id="feature1" value="smoke" v-model="smoke"/>
          <div>
            <span class="statement-description">
              <p class="statement-title">I smoke</p>
              <p class="statement-detail">I have no plenty of time and energy</p>
            </span>
            <span class="statement-tick"><van-icon class="tick" size="3em" color="white" name="success" /></span>
          </div>
        </article>
        
        <article class="feature2">
          <input type="checkbox" id="feature2" value="hypertension" v-model="hypertension"/>
          <div class="statement-select">
            <span class="statement-description">
              <p class="statement-title">I have hypertension</p>
              <p class="statement-detail">Medium intensity is better for me</p>
            </span>
            <span class="statement-tick"><van-icon class="tick" size="3em" color="white" name="success" /></span>
          </div>
        </article>
        
        <article class="feature3">
          <input type="checkbox" id="feature3" value="overweight" v-model="overweight"/>
          <div>
            <span class="statement-description">
              <p class="statement-title">I’m overweight</p>
              <p class="statement-detail"> I have plenty of time and energy</p>
            </span>
            <span class="statement-tick"><van-icon class="tick" size="3em" color="white" name="success" /></span>
          </div>
        </article>
        
        <article class="feature4">
          <input type="checkbox" id="feature4" value="drink" v-model="drink"/>
          <div>
            <span class="statement-description">
              <p class="statement-title">I drink</p>
              <p class="statement-detail">I have plenty of time and energy</p>
            </span>
            <span class="statement-tick"><van-icon class="tick" size="3em" color="white" name="success" /></span>
          </div>
        </article>
    </div>
    
    <div class="next_button">
         <router-link to="/diagnosisBodySelect"><button class="next">Next</button></router-link>
    </div>
    
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
    name: "diagnosisConfirm",
    components: {
        GoBack,
    },
    data() {
        return {
          smoke:"",
          hypertension:"",
          overweight:"",
          drink:"",
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

/* goback_icon */
.goback_icon {
    padding-top: 2em;
}

.confirm_title {
    text-align: left;
    margin-top: 2em;
    padding: 2em;
    width: 100%;
    height: 5em;
}

/* checkbox */
.behaviour_checkbox {
    margin-top: 2em;
    padding: 1em;
    width: 100%;
    height: 25em;
}

.cell {
  height: 5em;
  text-align: left;
  padding: 1.5em 0;
  font-weight: bold;
}

/* next button */
.next_button {
  margin-top: 6em;
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

/* this code is refer to https://codepen.io/FlorinCornea/pen/poNBrzm */
article {
  position: relative;
  width: 100%;
  height: 5em;
  margin: 5px;
  float: left;
  border: 2px solid #F2F4F6;
  box-sizing: border-box;
  border-radius: 10px;
}

article div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  line-height: 25px;
  transition: .5s ease;
}

article span {
  width: 100%;
}

article input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

input[type=checkbox]:checked ~ div {
  background-color: #396CF0;
  color: white;
  border-radius: 10px;
}

.statement-title {
  font-size: 1em;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px
}

.statement-description {
  width: 80%;
}

.statement-detail {
  margin-top: 0;
  font-size: 12px;
  margin-left: 20px;
}

.statement-tick  {
  width: 20%;
}
</style>