<template>
  <v-container>
    <svg :width="svgWidth" :height="svgHeight">
      <g>
        <line />
      </g>
      <g>
        <!-- x축 -->
        <text
          v-for="(score, i) in scores"
          :key="`score-${i}`"
          :x="svgWidth / scores.length * i + 50"
          :y="svgHeight - 10"
          fill="#5a5a5a"
        >{{score.score}}</text>
        <!-- y축 -->
        <text
          v-for="(score, i) in scores"
          :key="`count-${i}`"
          :x="20"
          :y="svgHeight - (score.count / maxCount * svgHeight) + 20"
          fill="#5a5a5a"
        >{{score.count}}</text>
      </g>
      <g>
        <rect
          v-for="(score, i) in scores"
          :key="`bar-${i}`"
          class="graph-bar"
          :x="svgWidth / scores.length * i + 45"
          :y="svgHeight - (score.count / maxCount * svgHeight) + 10"
          width="20"
          :height="score.count / maxCount * svgHeight - 40"
          rx="3"
          ry="3"
        />
      </g>
    </svg>
  </v-container>
</template>

<script lang='ts' src='./SummarNoteBarGraph.ts'>
</script>

<style lang="scss" scoped>
@import "./SummarNoteBarGraph.scss";
</style>