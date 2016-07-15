<template>
  <span></span>
</template>

<script>
import Peity from './lib/peity'

const types = ['line', 'bar', 'pie', 'donut']

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => types.indexOf(value) > -1
    },
    data: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  ready () {
    this.chart = new Peity(this.$el, this.type, this.data, this.options)
    this.chart.draw()
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    data (val) {
      this.$nextTick(() => {
        this.chart.raw = val
        this.chart.draw()
      })
    }
  }
}
</script>
