<template>
  <div>
    <b-form @submit.prevent="appSubmit(test, against)">
      <b-form-group 
        description="Enter a word or a phrase (...or even a sentence) that you want to test"
        label="What do you want to test"
        label-for="test-input"
        :invalid-feedback="invalidFeedback"
        :valid-feedback="validFeedback"
        :state="testInputState" >
        <b-form-input size="lg" id="test-input" :state="testInputState" v-model.trim="test"></b-form-input>
      </b-form-group>
      <b-form-group 
        description="Enter some text that you want to mine for the letters you're looking for."
        label-for="against-input" >
        <b-form-input size="lg" id="against-input" v-model.trim="against"></b-form-input>
      </b-form-group>
      <b-btn type="submit" size="lg">Submit</b-btn>
    </b-form>
  </div>
</template>

<script>

export default {
  props: {
    appSubmit: Function,
  },
  data () {
    return {
      test: '',
      against: '',
    }
  },
  computed: {
    testInputState () {
      return this.test.length >= 3 ? true : false;
    },
    invalidFeedback () {
      if (this.test.length >= 3) {
        return '';
      } else if (this.test.length > 0) {
        return 'You should test something with at least 3 characters.';
      } else {
        return 'Please enter something.'
      }
    },
    validFeedback () {
      return this.testInputState ? 'Thanks!' : '';
    }
  }
}
</script>

<style>

</style>
