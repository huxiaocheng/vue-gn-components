<template>
  <div>
    <div style="padding: 50px; border: 10px solid green; padding: 50px;">
      <div style="padding: 50px; border: 10px solid red; padding: 50px;">
        <magnifier
          :boxSize="300"
          :minImgUrl="require('./components/img/min.jpg')"
          :maxImgUrl="require('./components/img/max.jpg')"
        ></magnifier>
      </div>
    </div>
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
