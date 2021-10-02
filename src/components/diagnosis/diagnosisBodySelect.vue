<template>
  <div class="page_container">
    <div class="goback_icon">
        <GoBack></GoBack>
    </div>
    <div class="add_symptoms">
        <h3>Questions</h3>
        <p>We will ask a series of questions to diagnose your symptoms</p>
    </div>

    <div class="dropdown-menu">
        <van-dropdown-menu class="dropdown-menu">
          <van-dropdown-item v-model.number="value" :options="option" />
        </van-dropdown-menu>
    </div>

    <div v-if="value === 0" class="related-symtoms" id="head">
    </div>

    <div v-if="value === 10" class="related-symtoms" id="head">
      <div class="related-symtom" v-for="symptom in head.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 1" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in physiological.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 2" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in limbs.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 3" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in leg.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
       </div>
    </div>

    <div v-if="value === 4" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in neck.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 5" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in abdomen.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 6" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in wholebody.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 7" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in buttocks.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 8" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in back.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 9" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in chest.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div v-if="value === 11" class="related-symtoms">
      <div class="related-symtom" v-for="symptom in skin.symptoms" v-bind:key="symptom.id">
        <label :for="symptom.name">{{ symptom.name }}</label>
        <input type="checkbox" v-model="checkedNames" :id="symptom.name" :value="symptom.name">
      </div>
    </div>

    <div class="selected-symtoms">
      <h4>Selected:</h4>
      <span>{{ checkedNames }}</span>
    </div>
    <div class="next_button">
        <p>We recommend adding 3-5 symptoms</p>
        <button  @click="showPopup" class="next">Finish</button>
          <van-popup position="bottom" round v-model="show" :style="{ height: '40%' }">
            <div class="selected-popup">
              <h3>Selected symptoms</h3>
              <span>{{ checkedNames }}</span>
            </div>
            <div class="next_button">
              <router-link to="/diagnosisLoading"><button @click="created" class="next">Submit</button></router-link>
            </div>
          </van-popup>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack";
import axios from "axios";

export default {
    name: "diagnosisBodySelect",
    components: {
        GoBack,
    },
    data() {
        return {
            show: false,
            value: 0,
            message: '',
            option: [
            { text: 'Select body part', value: 0 },
            { text: 'physiological', value: 1 },
            { text: 'limbs', value: 2 },
            { text: 'leg', value: 3 },

            { text: 'neck', value: 4 },
            { text: 'abdomen', value: 5 },
            { text: 'whole body', value: 6 },
            { text: 'buttocks', value: 7 },
            { text: 'back', value: 8 },

            { text: 'chest', value: 9 },
            { text: 'head', value: 10 },
            { text: 'skin', value: 11 },
      ],
      checkedNames: [],
      ishead: true,
      head: {
      symptoms: [
      { name: 'headach' },
      { name: 'acidity' },
      { name: 'lethargy' },
      { name: 'visual disturbances' },
      { name: 'lack of concentration' },
      { name: 'depression' },
      { name: 'loss of smell' },
      { name: 'sunken eyes' },
      { name: 'rusty sputum' },
      { name: 'mucoid sputum' },
      { name: 'watering from eyes' },
      { name: 'slurred speech' },
      { name: 'drying and tingling lips' },
      { name: 'dizziness' },
      { name: 'yellowing of eyes' },
      { name: 'pain behind the eyes' },
      { name: 'cough' },
      { name: 'ulcers on tongue' },
      { name: 'toxic look' },
      { name: 'puffy face and eyes' },
      { name: 'runny nose' },
      { name: 'blurred and distorted vision' },
      { name: 'mild fever' },
      ]
      },

      chest: {
      symptoms: [
      { name: 'chest pain' },
      { name: 'silver like dusting' },
      { name: 'blister' },
      { name: 'palpitations' },
      { name: 'breathlessness' },
      { name: 'abnormal menstruation' },
      { name: 'continuous feel of urine' },
      { name: 'spotting urination' },
      { name: 'burning micturition' },
      ]
      },

      limbs: {
      symptoms: [
      { name: 'weakness in limbs' },
      { name: 'inflammatory nails' },
      { name: 'small dents in nails' },
      { name: 'hip joint pain' },
      { name: 'knee pain' },
      { name: 'joint pain' },
      { name: 'cramps' },
      { name: 'movement stiffness' },
      { name: 'swelling joints' },
      { name: 'swollen extremeties' },
      { name: 'brittle nails' },
      { name: 'cold hands and feets' },
      { name: 'spinning movements' },
      ]
      },

      leg: {
      symptoms: [
      { name: 'prominent veins on calf' },
      { name: 'swollen legs' },
      ]
      },

      neck: {
      symptoms: [
      { name: 'enlarged thyroid' },
      { name: 'neck pain' },
      { name: 'patches in throat' },
      { name: 'swelled lymph nodes' },
      { name: 'stiff neck' },
      { name: 'throat irritation' },
      ]
      },

      buttocks: {
      symptoms: [
      { name: 'constipation' },
      { name: 'irritation in anus' },
      { name: 'pain during bowel movements' },
      { name: 'pain in anal region' },
      ]
      },

      back: {
      symptoms: [
      { name: 'constipation' },
      { name: 'back pain' },
      { name: 'irregular sugar level' },
      ]
      },

      physiological: {
      symptoms: [
      { name: 'abnormal menstruation' },
      { name: 'burning micturition' },
      { name: 'continuous feel of urine' },
      { name: 'dark urine' },
      { name: 'foul smell of urine' },
      { name: 'polyuria' },
      { name: 'spotting urination' },
      { name: 'yellow urine' },
      ]
      },

      skin: {
      symptoms: [
      { name: 'blackheads' },
      { name: 'dischromic patches' },
      { name: 'foul smell ofurine' },
      { name: 'itching' },
      { name: 'nodal skin eruptions' },
      { name: 'pus filled pimples' },
      { name: 'red sore around nose' },
      { name: 'red spots over body' },
      { name: 'skin peeling' },
      { name: 'skin rash' },
      { name: 'yellow crust ooze' },
      { name: 'yellowish skin' },
      ]
      },

      abdomen: {
      symptoms: [
      { name: 'diarrhoea' },
      { name: 'acute liver failure' },
      { name: 'stomach bleeding' },
      { name: 'stomach pain' },
      { name: 'vomiting' },
      { name: 'indigestion' },
      { name: 'nausea' },
      { name: 'increased appetite' },
      { name: 'loss of appetite' },
      { name: 'abdominal pain' },
      { name: 'excessive hunger' },
      { name: 'bladder discomfort' },
      { name: 'belly pain' },
      { name: 'distention of abdomen' },
      { name: 'swelling of stomach' },
      ]
      },

      wholebody: {
      symptoms: [
      { name: 'altered sensorium' },
      { name: 'chills' },
      { name: 'coma' },
      { name: 'dehydration' },
      { name: 'fatigue' },
      { name: 'fluid overload' },
      { name: 'history of alcohol consumption' },
      { name: 'internal itching' },
      { name: 'irritability' },
      { name: 'loss of balance' },
      { name: 'malaise' },
      { name: 'mood swings' },
      { name: 'muscle pain' },
      { name: 'muscle wasting' },
      { name: 'muscle weakness' },
      { name: 'obesity' },
      { name: 'painful walking' },
      { name: 'prognosis' },
      { name: 'receiving blood transfusion' },
      { name: 'receiving unsterile injections' },
      { name: 'restlessness' },
      { name: 'scurring' },
      { name: 'shivering' },
      { name: 'sinus pressure' },
      { name: 'sweating' },
      { name: 'swollen blood vessels' },
      { name: 'unsteadiness' },
      { name: 'weight loss' },
      ]
      },
    };
  },
    methods: {
      showPopup() {
      this.show = true;

    },
      created() {
      setTimeout( () => this.$router.push({ path: '/diagnosisResult'}), 10000);
      this.$store.state.checkedNames = this.$data.checkedNames;
      let checkedNames = this.$data.checkedNames;
      let result = JSON.stringify({symptoms: checkedNames});
      console.log(result)
      axios({
        method: "post",
        url: "http://deco.logfox.xyz/servlet_project/diagnosisServlet",
        data: result,
      });
    }
  }
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
    border-radius: 10%;
}

.related-symtoms {
  height: 10em;
  max-width: 100%;
  padding: 1em;
  text-align: left;
  display: flex;
  overflow: auto;
}

.related-symtom {
  height: 2em;
  width: 6em;
  margin-left: 1em;
  border-radius: 10%;
  text-align: center;
}

.related-symtoms input {
  display: none;
}

.related-symtoms label {
  display: inline-block;
  font-size: 12px;
  padding: 1em;
  background-color: #F4F5F6;
}

.selected-symtoms {
  padding: 1em;
  width: 100%;
  height: 2em;
}

.selected-popup {
  padding: 1em;
}

.selected-popup span {
  padding-top: 2em;
}

/* next button */
.next_button {
  margin-top: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.next_button p{
  color: #898A8F;
  font-size: 15px;
  margin-bottom: 10px;
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