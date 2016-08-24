# Peity

A Vue version of an excellent [peity](https://github.com/benpickles/peity) library for beautiful mini <svg> graphs.

## Usage

```vue
<template>
  <peity :type="'pie'" :options="{ 'fill': ['red', '#eeeeee'], width: 50, height:50,  'innerRadius': 10, 'radius': 40 }" :data="pieData"></peity>
</template>

<script>
import Peity from 'vue-peity'

export default {
  components: {
    Peity
  },

  computed: {
    pieData () {
      return this.data.toString()
    }
  },

  data () {
    return {
      data: [1, 2, 3, 2, 2]
    }
  },

  created () {
    setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      this.data.unshift(this.data.pop())
    }, 377)
  }
}
</script>
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [fundon.me](https://fundon.me) &nbsp;&middot;&nbsp;
> GitHub [@fundon](https://github.com/fundon) &nbsp;&middot;&nbsp;
> Twitter [@_fundon](https://twitter.com/_fundon)
