<template>
  <b-row align-h="center" id="result-alert">
    <b-col class="position-fixed" cols="12">
      <b-alert :show="dismissCountDown"
        dismissible
        fade
        :variant="result ? `success` : `danger`"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        <span v-if="result">
          <h1>True</h1>
        </span>
        <span v-else>
          <h1>False</h1>
        </span>
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
// import {eventBus} from '../main';
// export default {
//   props: {
//     result: Boolean,
//   },
//   data () {
//     return {
//       dismissSecs: 3,
//       dismissCountDown: 0,
//     }
//   },
//   methods: {
//     countDownChanged (dismissCountDown) {
//       this.dismissCountDown = dismissCountDown
//     },
//     showAlert () {
//       this.dismissCountDown = this.dismissSecs
//     }
//   },
//   created () {
//     eventBus.$on('showAlert', () => {
//       this.showAlert();
//     })
//   }
// }
</script>

<style>

</style>
