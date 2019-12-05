<template>
  <div>
    <magnifier
      style="margin: 50px;padding: 50px;"
      :boxSize="400"
      :minImgUrl="require('./components/img/min.jpg')"
      :maxImgUrl="require('./components/img/max.jpg')"
    ></magnifier>
    <router-link style="margin: 30px;" to="/home" tag="button">去首页</router-link>
  </div>
</template> 

<script>
import Magnifier from "./components/magnifier";
export default {
  components: {
    Magnifier
  }
};
</script>
