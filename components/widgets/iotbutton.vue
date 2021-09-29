<template>
  <card>
    <h4 class="card-title">{{ config.selectedDevice.name }} - {{ config.variableFullname }}</h4>
    <i style="font-size: 34px" class="fa " :class="[config.icon, getIconColorClass()]"></i>
    <base-button @click="sendValue" :type="config.class" class="mb-3 pull-right" size="large">Aceptar</base-button>            
  </card>
</template>
<script>
export default {
  props: ["config"],
  data() {
    return {
      sending: false
    };
  },
  methods: {
    sendValue() {
      this.sending = true;
      setTimeout(() => {
        this.sending = false;
      }, 500);
      const toSend = {
        topic: this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata",
        msg: {
          value: this.config.message
        }
      };
      this.$nuxt.$emit("mqtt-sender", toSend);
    },
    getIconColorClass() {
      if (!this.sending) {return "text-dark";}
      if (this.config.class == "success") { return "text-success";}
      if (this.config.class == "primary") { return "text-primary";}
      if (this.config.class == "warning") { return "text-warning";}
      if (this.config.class == "danger") { return "text-danger";}
    }
  }
};
</script>
