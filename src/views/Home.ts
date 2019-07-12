import { Component, Vue } from 'vue-property-decorator';
import * as d3 from 'd3';
import _ from 'lodash';

@Component({})
export default class Home extends Vue {
  private maxChartWidth: number = 460;
  private maxChartHeight: number = 460;
  private xAxis = {
    x1: 20,
    x2: 480,
    y1: 480,
    y2: 480,
    strokeWidth: 1,
    stroke: '#777',
  };
  private yAxis = {
    x1: 20,
    x2: 20,
    y1: 480,
    y2: 20,
    strokeWidth: 1,
    stroke: '#777',
  };
  private barData: Array<{ label: string; value: number }> = [
    {
      label: 'a',
      value: 10,
    },
    {
      label: 'b',
      value: 40,
    },
    {
      label: 'c',
      value: 30,
    },
    {
      label: 'd',
      value: 20,
    },
    {
      label: 'e',
      value: 50,
    },
  ];
  private biggestValue: number = 0;
  private valueStandards: number[] = [];

  private created() {
    console.log('home created');
    const maxBarData = _.maxBy(this.barData, 'value');
    if (!_.isNil(maxBarData)) {
      this.biggestValue = maxBarData.value;
    }

    for (let i = 10; i <= this.biggestValue; i += 10) {
      this.valueStandards.push(i);
    }
  }
  private mounted() {
    d3.select('#lines')
      .selectAll('line')
      .data([this.xAxis, this.yAxis])
      .enter()
      .append('line')
      .attr('x1', d => d.x1)
      .attr('y1', d => d.y1)
      .attr('x2', d => d.x2)
      .attr('y2', d => d.y2)
      .style('stroke-width', d => d.strokeWidth)
      .style('stroke', d => d.stroke);

    d3.select('#bars')
      .selectAll('rect')
      .data(this.barData)
      .enter()
      .append('rect')
      .attr('x', (d, i) => (this.maxChartWidth / this.barData.length) * i + 20)
      .attr(
        'y',
        d =>
          this.maxChartHeight -
          this.maxChartHeight * (d.value / this.biggestValue) +
          20,
      )
      .attr('width', 10)
      .attr('height', d => this.maxChartHeight * (d.value / this.biggestValue)) // 절대길이 * 현재값/최대값
      .style('fill', 'blue');

    d3.select('#lines')
      .selectAll('text')
      .data(this.barData)
      .enter()
      .append('text')
      .attr('x', (d, i) => (this.maxChartWidth / this.barData.length) * i + 20)
      .attr('y', this.maxChartHeight + 30)
      .attr('fill', 'black')
      .text(d => d.label);

    const newG = d3.select('svg').append('g');
    newG
      .selectAll('text')
      .data(this.valueStandards)
      .enter()
      .append('text')
      .attr('x', 2)
      .attr(
        'y',
        (d, i) =>
          (this.maxChartHeight / this.valueStandards.length) *
            (this.valueStandards.length - i - 1) +
          20,
      )
      .attr('fill', 'black')
      .text(d => d);
  }
}
