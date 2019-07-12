import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';

@Component({})
export default class SummarNoteBarGraph extends Vue {
  private svgWidth: number = 600;
  private svgHeight: number = 600;

  // private scores: number[] = [1, 2, 3, 4, 5];
  private scores: Array<{ score: number; count: number }> = [
    { score: 1, count: 10 },
    { score: 2, count: 50 },
    { score: 3, count: 80 },
    { score: 4, count: 100 },
    { score: 5, count: 50 },
  ];
  private maxCount: number = 100;
}
