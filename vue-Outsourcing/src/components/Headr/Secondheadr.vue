<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="12">
        <div class="secondheader-nav-first">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index" :to="{name:item}">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="secondheader-nav-second">
          <el-menu :default-active="activeIndex" class="" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <router-link :to="{name:'任务总览'}" replace>任务</router-link>
            </el-menu-item>
           
            <el-menu-item index="3">
              <router-link :to="{name:'人员'} " replace>人员</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link :to="{name:'考勤'}" replace>考勤</router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link :to="{name:'考勤'}" replace>概况</router-link>
            </el-menu-item>
            <el-menu-item index="6">
              <router-link :to="{name:'记录图表'}">任务记录图表</router-link>
            </el-menu-item>
        
             <el-submenu index="7">
              <template slot="title">设置</template>
              <el-menu-item index="2-1"><router-link :to="{name:'项目计划'}">项目计划</router-link></el-menu-item>
              <el-menu-item index="2-2"><router-link :to="{name:'项目权限'}">项目权限</router-link></el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">kao</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.secondheader-nav-first {
  padding: 20px;
}


.ss {
  display: flex;
  align-items: center;
}

.ss>div {
  margin-left: 2vh;
}

.ivu-icon-person-stalker {
  font-size: 20px;
}

.el-icon-view {
  font-size: 20px;
}

.test2 {
  display: flex;
  border-bottom: 1px solid pink;
}

</style>
<script>
import Prodesp from '../Prodesp/prodesp.vue'
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{
    Prodesp
  }
}

</script>
