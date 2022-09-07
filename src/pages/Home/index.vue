<template>
  <div class="home">
    <TypeNav></TypeNav>
    <ListContainer />
    <TodayRecommend />
    <Like />
    <Rank />
    <Floor />
    <Brand />
    <!--全局注册组件的第二种写法 <TypeNav /> -->
  </div>
</template>

<script>
// import TypeNav from '@/components/TypeNav/index.vue'
import ListContainer from './ListContainer/index.vue'
import TodayRecommend from './TodayRecommend/index.vue'
import Like from './Like/Like.vue'
import Floor from './Floor/Floor.vue'
import Brand from './Brand/Brand.vue'
import Rank from './Rank/Rank.vue'
export default {
  // 组件名
  name: 'Home',
  // 注册组件
  components: { ListContainer, TodayRecommend, Like, Floor, Brand, Rank },
  // 接收父组件数据
  props: {},
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
