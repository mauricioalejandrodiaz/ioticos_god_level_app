<template>
  <div class="row">
    <div class="col-4" @click="sendData1()">
        <iotindicator :config = "config1"></iotindicator>
    </div>
    <div class="col-4" @click="sendData2()">
        <iotindicator :config = "config2"></iotindicator>
    </div>
    <div class="col-4" @click="sendData3()">
        <iotindicator :config = "config3"></iotindicator>
    </div>
    <button @click="sendData1()">Send to -> userid/8888/var1/sdata</button>
    <button @click="sendData2()">Send to -> userid/8888/var2/sdata</button>
    <button @click="sendData3()">Send to -> userid/8888/var3/sdata</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config1: {
        value: true,
        userId: "userid",
        selectedDevice: {
          name: "Casa",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "234242424242342",
          saverRule: false
        },
        variableFullname: "CACA",
        variable: "var1",
        icon: "fa-trash",
        column: "6",
        widget: "indicator",
        class: "success"
      },
        config2: {
            value: true,
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "234242424242342",
          saverRule: false
        },
        variableFullname: "Light",
        variable: "var2",
        icon: "fa-trash",
        column: "6",
        widget: "indicator",
        class: "success"
      },
        config3: {
            value: false,
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "234242424242342",
          saverRule: false
        },
        variableFullname: "Fun",
        variable: "var3",
        icon: "fa-trash",
        column: "6",
        widget: "indicator",
        class: "success"
      }
    };
  },
  mounted(){

  },
  methods: {
    sendData1() {
      this.config1.value = !this.config1.value;      
      const toSend = {
        value: this.config1.value       
      };      
      this.$nuxt.$emit("userid/8888/var1/sdata", toSend);      
    },
    sendData2() {
      this.config2.value = !this.config2.value;      
      const toSend = {
        value: this.config2.value       
      };      
      this.$nuxt.$emit("userid/8888/var2/sdata", toSend);      
    },
    sendData3() {
      this.config3.value = !this.config3.value;      
      const toSend = {
        value: this.config3.value       
      };      
      this.$nuxt.$emit("userid/8888/var3/sdata", toSend);      
    }
  }
};
</script>
