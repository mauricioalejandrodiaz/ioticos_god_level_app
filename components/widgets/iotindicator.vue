<template>
  <card>
    <div slot="header">
      <h4 class="card-title">{{ config.selectedDevice.name }} - {{ config.variableFullname }}</h4>
    </div>
    <i style="font-size: 34px" class="fa " :class="[config.icon, getIconColorClass()]"></i>
  </card>
</template>
<script>
export default {
  props: ["config"],
  data() {
    return {
      value: false
    };
  },
  mounted() {
    this.value = this.config.value
    const topic = this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata";
    this.$nuxt.$on(topic, this.processReceivedData);
  },
  beforeDestroy(){
      this.$nuxt.$off(this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata")
  },
  methods: {
    processReceivedData(datas){ 
      this.value = datas.value
    },
    getIconColorClass(){
      if (!this.value) {return "text-dark";}
      if (this.config.class == "success") { return "text-success";}
      if (this.config.class == "primary") { return "text-primary";}
      if (this.config.class == "warning") { return "text-warning";}
      if (this.config.class == "danger") { return "text-danger";}
    }
  }
};
</script>
