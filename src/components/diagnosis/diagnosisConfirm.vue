<template>
  <div class="page_container">
    <div class="goback_icon">
          <GoBack></GoBack>
    </div>

    <div class="confirm_title">
        <h3>Please confirm that the following statement applies to you</h3>
    </div>

    <div class="behaviour_checkbox">
        <van-checkbox-group v-model="result">
          <van-cell-group >
            <van-cell class="cell"
              v-for="(item, index) in list"
              clickable
              :key="item"
              :title="` ${item}`"
              @click="toggle(index)"
            >
              <template #right-icon>
                <van-checkbox :name="item" ref="checkboxes" />
              </template>
            </van-cell>
          </van-cell-group>
      </van-checkbox-group>
    </div>
    <div class="next_button">
         <router-link to="/diagnosisBody"><button class="next">Next</button></router-link>
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
          list: ['I smoke', 'b'],
          result: [],
    };
  },
    methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
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
  height: 3em;
}

/* next button */
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