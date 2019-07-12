import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import * as d3 from 'd3';

interface Coordinate {
  x: number;
  y: number;
}

const line = d3
  .line<Coordinate>()
  .x(d => d.x)
  .y(d => d.y)
  .curve(d3.curveCardinal);
// interpolation으로 검색하면 curve의 다양한 종류가 있음을 알 수 있다.

@Component({})
export default class Editor extends Vue {
  private coords: Coordinate[] = [];
  private d: string | null = '';

  private mounted() {
    this.coords.push({
      x: 50,
      y: 50,
    });
    this.coords.push({
      x: 100,
      y: 100,
    });
    this.coords.push({
      x: 150,
      y: 50,
    });
    this.coords.push({
      x: 200,
      y: 200,
    });

    this.d = line(this.coords);
  }
}
