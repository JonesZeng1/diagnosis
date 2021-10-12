<template>
  <div class="page_container">
        <div class="goback_icon">
            <GoBack></GoBack>
        </div>
        <div class="diagnosis_Result">
            <div>
                <h3>Result</h3>
                <p>Here are the results of your diagnosis of the above symptoms, ranked from highest to lowest probability.</p>
            </div>
            <div class="ill_probability" id="value-result">
                <div v-for="result in diagnosisResult" :key="result.diseaseName" class="ill_section">
                    <div class="ill_title">
                        <h3>{{ result.diseaseName }}</h3>                
                        <van-icon @click="showPopup" class="more_detail" name="ellipsis" />
                        <van-popup position="bottom" round v-model="show" :style="{ height: '80%' }">
                            <div class="popUp_title">
                                <h3>{{ result.diseaseName }}</h3>
                                <div class="evidence">
                                <h6>Probability</h6>
                                <van-progress :percentage="result.probability" stroke-width="8" />
                                <div class="pop-up-recommendation-department">
                                    <h3>Recommend department:</h3>
                                    <div>{{ result.department }}</div>
                                </div>
                                
                                <div class="pop-up-description">
                                    <h3>Disease description:</h3>
                                    <p>{{ result.diseaseDescription }}</p>
                                </div>
                                
                            </div>
                            </div>

                        </van-popup>
                    </div>
                    <van-progress :percentage="result.probability" stroke-width="8" />
                </div>
            </div>
        </div>
        <div class="next_button">
            <div @click="backToHome" class="next">Back to home</div>
        </div>
  </div>
</template>

<script scoped>
import GoBack from "@/components/GoBack";

export default {
    name: "diagnosisResult",
    components: {
        GoBack,
    },
    data() {
        return {
      show: false,
      diagnosisResult: [],
    };
    
  },
    created: function () {
        this.diagnosisResult = this.$store.getters.getDisgnosisResult.diagnosisResult.data;
    },
    methods: {
        showPopup() {
        this.show = true;
    },
        backToHome() {
            window.location.href = 'http://deco.logfox.xyz/servlet_project/jumperServlet?target=home.html';
        }
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

.diagnosis_Result {
    padding: 2em;
    margin-top: 2em;
    text-align: left;
}

.diagnosis_Result p {
    color: #707070;
    margin-top: 1em;
}

.ill_probability {
    margin-top: 3em;
    height: 25em;
}

.ill_section {
    margin-top: 3em;
}

.ill_title {
    display: flex;;
}

.ill_title h3{
    width: 90%;
    margin-bottom: 1.5em;
}

.more_detail {
    width: 10%;
    text-align: right;
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

/* pop up window detail */
.popUp_title {
    padding: 2em;
    margin-top: 2em;
}
.popUp_title h6 {
    margin-bottom: 1em;
}

.pop-up-recommendation-department, .pop-up-description {
    padding-top: 2em;
}
</style>