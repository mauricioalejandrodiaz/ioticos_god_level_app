<template>
    <card>
       <div slot="header">
           <h4 class="card-title">{{config.selectedDevice.name}} - {{config.variableFullname}}</h4>
       </div>

        <i style="font-size: 34px" class="fa " :class="[config.icon, getIconColorClass()]"></i>

    </card>
</template>
<script>
export default {
    // props: ["config"],
    data() {
        return {
            value: true,
            config: {
                userId: "userid",
                selectedDevice:{
                    name: "Home",
                    dId: "8888",
                    templateName: "Power Sensor",
                    templateId: "234242424242342",
                    saverRule: false                    
                },
                variableFullname: "Pump",
                variable: "uniquestr",
                icon: "fa-trash",
                column: "6",
                widget: "indicator",
                class: "success"
            }
        }
    },
    mounted(){
        this.$nuxt.$on('widget-topic', this.processReceivedData)
    },
    methods: {
        processReceivedData(data){
          console.log("recived");
          console.log(data);  
          this.value = data.value;
        },
        getIconColorClass(){
            if (!this.value){
                return "text-dark";
            }            
            if (this.config.class == "success"){
                return "text-success";
            }
            if (this.config.class == "primary"){
                return "text-primary";
            }
            if (this.config.class == "warning"){
                return "text-warning";
            }
            if (this.config.class == "danger"){
                return "text-danger";
            }
            
        }
    }
}
</script>