<template>
  <div class="page_container">
      <div class="loading-title">
          <h3>We are using AI analysis based on your symptoms</h3>
          <p>This usually takes 10-20 seconds</p>
      </div>
      <div class="loading-icon">
          <van-loading color="#396CF0" size="80" />
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        created() {
            setTimeout( () => this.$router.push({ path: '/diagnosisResult'}), 5000);
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

.loading-title {
    padding: 3em;
    text-align: center;
    padding-top: 6em;
}

.loading-title p{
    color: #75818F;
    padding-top: 1em;
}

.loading-icon {
    padding-top: 7em;
}
</style>