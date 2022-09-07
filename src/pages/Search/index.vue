<template>
  <div class="">
    <h1>search组件</h1>
    <h3>{{ $route.params.keyword }}</h3>
    <h3>{{ $route.query.keyword2 }}</h3>
    <h3>props.keyword:{{ keyword3 }}</h3>
    <h3>props.keyword:{{ keyword4 }}</h3>
  </div>
</template>

<script>
export default {
  // 组件名
  name: 'Search',
  props: ['keyword3', 'keyword4'],
  // 注册组件
  components: {},
  // 接收父组件数据
  // props: {},
  // 组件数据
  data() {
    return {}
  },
  // 计算属性
  computed: {},
  // 监听属性
  watch: {},
  // 生命周期钩子函数
  created() {},
  mounted() {},
  // 组件方法
  methods: {}
}
</script>

<style scoped lang="less"></style>
