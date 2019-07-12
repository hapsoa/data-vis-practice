import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  private created() {
    console.log('app.ts created()');
  }
}
