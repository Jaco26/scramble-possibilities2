<template>
  <div id="app">
    
    <app-header></app-header>
    <!-- <app-result :result="result"></app-result> -->
    <app-input :appSubmit="final" ></app-input>
    <snack-bar :result="result" ></snack-bar>
   
  </div>
</template>

<script>
import Header from '@/components/Header';
import Input from '@/components/Input';
import Result from '@/components/Result';
import SnackBar from '@/components/Snackbar';
import {eventBus} from '@/main';
export default {
  name: 'App',
  data () {
    return {
      result: null,
      isComputing: false,
    } 
  },
  components: {
    appHeader: Header,
    appInput: Input,
    appResult: Result,
    snackBar: SnackBar,
  },
  methods: {
    canYouMakeThisWithThat(test, against) {
      let testStringObjArray = [test, against].reduce((a, b) => {
        a.push(b.toLowerCase().replace(' ', '').split('')
          .reduce((accum, item) => {
            accum[item] ? accum[item] += 1 : accum[item] = 1;
            return accum;
          }, {}));
        return a
      }, []);
      let testObj = testStringObjArray[0];
      let againstObj = testStringObjArray[1];
      let result = [];
      let testKeys = Object.keys(testObj);
      for (let prop in againstObj) {
        if (testObj[prop] <= againstObj[prop]) {
          result.push(prop);
        }
      }
      let vm = this
      setTimeout(function () {
        vm.result = result.length == testKeys.length;
        vm.isComputing = false;
        eventBus.showResultAlert();
      }, 200)
    },
    final(test, against) {      
      this.isComputing = true;
      try {
         this.canYouMakeThisWithThat(test, against);
      } catch (err) {
        console.error(err);
      }
    },

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: aliceblue; */
  display: block;
  height: 100%;
  /* margin-top: 60px; */
}
</style>
