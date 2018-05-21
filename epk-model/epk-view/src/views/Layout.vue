<template>
    <Master>
     <list>
        <li v-for="(item,index) in users.subjects" :key="index">{{item.title}} </li>       
     </list>
       
    </Master>

</template>
<style type="text/css">
.board-bg {
  width: 500px;
  height: 600px;
  background:#f7f7f7;
}
</style>
