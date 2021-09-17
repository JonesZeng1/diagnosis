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
            <div class="ill_probability">
                <div class="ill_section">
                    <div class="ill_title">
                        <h3>Cerebral hemorrhage</h3>
                        <van-icon @click="showPopup" class="more_detail" name="ellipsis" />
                        <van-popup position="bottom" round v-model="show" :style="{ height: '80%' }">
                            <div class="popUp_title">
                                <h3>Cerebral hemorrhage</h3>
                                <div class="evidence">
                                <h6>Strong evdience</h6>
                                <van-progress :percentage="90" stroke-width="8" />
                            </div>
                            </div>
                            
                            <div class="popup_symptom">
                                <h3>Cerebral haemorrhage symptom:</h3>
                                <div>
                                    <p>Fever</p>
                                    <van-icon class="tick" size="1em" color="blue" name="success" />
                                </div>
                                <div>
                                    <p>Diagnosed diabetes</p>
                                    <van-icon class="tick" color="blue" name="success" />
                                </div>
                                <div>
                                    <p><van-icon name="ellipsis" /></p>
                                    <van-icon class="cross" color="red" name="cross" />
                                </div>
                                <div>
                                    <p><van-icon name="ellipsis" /></p>
                                    <van-icon class="cross" color="red" name="cross" />
                                </div>
                            </div>
                        </van-popup>
                    </div>
                    <van-progress :percentage="80" stroke-width="8" />
                </div>
                <div class="ill_section">
                    <div class="ill_title">
                        <h3>Cold</h3>
                        <van-icon @click="showPopup" class="more_detail" name="ellipsis" />
                    </div>
                    <van-progress :percentage="40" stroke-width="8" />
                </div>
                <div class="ill_section">
                    <div class="ill_title">
                        <h3>Increased intracranial pressure</h3>
                        <van-icon @click="showPopup" class="more_detail" name="ellipsis" />
                    </div>
                    <van-progress :percentage="15" stroke-width="8" />
                </div>
            </div>
        </div>
        <div class="next_button">
            <router-link to="/"><button class="next">Back to home</button></router-link>
        </div>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
    name: "diagnosisResult",
    components: {
        GoBack,
    },
    data() {
        return {
      show: false,
    };
  },
    methods: {
        showPopup() {
      this.show = true;
    },
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

.popup_symptom {
    padding: 2em;
}

.popup_symptom div {
    display: flex;
    height: 3em;
    width: 100%;
}

.popup_symptom p {
    width: 80%;
    font-size: 1em;
}

.tick, .cross {
    width: 20%;
    text-align: center;
    margin-top: 10px;
}
</style>