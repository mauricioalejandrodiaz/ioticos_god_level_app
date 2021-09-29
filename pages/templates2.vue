<template>
  <div class="row">
    <div class="col-4"><iotbutton :config="configButton"></iotbutton></div>
    <div class="col-4"><iotbutton :config="configButton"></iotbutton></div>      
    <div class="col-4"><iotbutton :config="configButton"></iotbutton></div>      
  </div>
</template>


<script>
export default {
  data() {
    return {
      value: false,
      configButton: {
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
        column: "col-4",
        widget: "indicator",
        class: "primary"
      }
    };
  },
  mounted(){

  },
  methods: {
  }
};
</script>
