<template>
  <div class="flex-header">
    <h1 class="title">To do list</h1>
    <Add @click="showM" />
  </div>
</template>
<script>
import ModalMix from "../../mixins/ModalMix";
import "./header.scss";

export default {
  mixins: [ModalMix],

};
</script>
