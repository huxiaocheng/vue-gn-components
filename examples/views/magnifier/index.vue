<template>
  <div>
    <magnifier
      style="padding: 50px; margin: 50px;"
      :boxSize="400"
      :minImgUrl="require('./img/min.jpg')"
      :maxImgUrl="require('./img/max.jpg')"
    ></magnifier>

    <router-link style="margin: 30px;" to="/home" tag="button">去首页</router-link>
  </div>
</template> 

<script>
export default {};
</script>
