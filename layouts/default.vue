<template>
<!-- TODA LA WEB -->
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">


    <!-- Notificacoiones DERECHA SUPERIOR -->
    <notifications></notifications>


    <!-- SIDEBAR -->
    <side-bar
      :background-color="sidebarBackground"
      short-title="TC"
      title="Tecnocasa"
    >
<<<<<<< HEAD
      <!-- Saque del template esto porque daba error -> slot-scope="props"
      ...en teoria deberia reemplazarse por v-scope="" -->
      <template slot="links">

        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'tim-icons icon-chart-pie-36',
=======
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'tim-icons icon-laptop',
>>>>>>> 30a34ac528f454914434031526537c411f60b311
            path: '/dashboard'
          }"
        >        
        </sidebar-item>

<<<<<<< HEAD
           <sidebar-item
          :link="{
            name: 'Dispositivos',
            icon: 'tim-icons icon-chart-pie-36',
            path: '/devices'
          }"
        >        
=======
        <sidebar-item
          :link="{
            name: 'Devices',
            icon: 'tim-icons icon-light-3',
            path: '/devices'
          }"
        >
>>>>>>> 30a34ac528f454914434031526537c411f60b311
        </sidebar-item>

        <sidebar-item
          :link="{
<<<<<<< HEAD
            name: 'Alarmas',
            icon: 'tim-icons icon-chart-pie-36',
            path: '/alarmas'
          }"
        >
        </sidebar-item>
        
         <sidebar-item
          :link="{
            name: 'Templates',
            icon: 'tim-icons icon-chart-pie-36',
            path: '/templates'
          }"
        > 
        </sidebar-item>
        

        <!-- SOCIAL MEDIA LINKS -->
        <li class="active-pro">
          <a href="https://www.youtube.com/" target="_blank">
            <i class="tim-icons icon-spaceship"></i>
            <p>Youtube</p>
          </a>
        </li>
      </template>
    </side-bar>


    <!--ENGRANAJE PARA CAMBIAR TEMAS-->
=======
            name: 'Alarms',
            icon: 'tim-icons icon-bell-55',
            path: '/alarms'
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Templates',
            icon: 'tim-icons icon-atom',
            path: '/templates'
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>

    <!--Share plugin (for demo purposes). You can remove it if don't plan on using it-->
>>>>>>> 30a34ac528f454914434031526537c411f60b311
    <sidebar-share :background-color.sync="sidebarBackground"> </sidebar-share>

    <div class="main-panel" :data="sidebarBackground">

      
      <!-- BARRA DE NAVEGACION SUPERIOR - TITULO y USER PROFILE -->
      <dashboard-navbar></dashboard-navbar>
      <router-view name="header"></router-view>

<<<<<<< HEAD

      <!-- CONTENIDO PRINCIPAL -->
      <div
        :class="{ content: !isFullScreenRoute }"
        @click="toggleSidebar"
      >
        <zoom-center-transition :duration="200" mode="out-in">         
=======
      <div :class="{ content: !isFullScreenRoute }" @click="toggleSidebar">
        <zoom-center-transition :duration="1000" mode="out-in">
          <!-- your content here -->
>>>>>>> 30a34ac528f454914434031526537c411f60b311
          <nuxt></nuxt>
        </zoom-center-transition>
      </div>


      <!-- FOOTER LINKS DERECHA + LINKS copyright DERECHA -->
      <content-footer v-if="!isFullScreenRoute"></content-footer>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import SidebarShare from "@/components/Layout/SidebarSharePlugin";
function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "@/components/Layout/DashboardNavbar.vue";
import ContentFooter from "@/components/Layout/ContentFooter.vue";
import DashboardContent from "@/components/Layout/Content.vue";
import { SlideYDownTransition, ZoomCenterTransition } from "vue2-transitions";
import mqtt from "mqtt";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    SlideYDownTransition,
    ZoomCenterTransition,
    SidebarShare
  },
  data() {
    return {
      sidebarBackground: "primary", //vue|blue|orange|green|red|primary
      client: null,
      options: {
        host: process.env.mqtt_host,
        port: process.env.mqtt_port,
        endpoint: "/mqtt",
        clean: true,
        connectTimeout: 5000,
        reconnectPeriod: 5000,

        // Certification Information
        clientId:
          "web_" +
          this.$store.state.auth.userData.name +
          "_" +
          Math.floor(Math.random() * 1000000 + 1),
        username: "",
        password: ""
      }
    };
  },
  computed: {
    isFullScreenRoute() {
      return this.$route.path === "/maps/full-screen";
    }
  },
  mounted() {
    this.$store.dispatch("getNotifications");
    this.initScrollbar();

<<<<<<< HEAD
  import DashboardNavbar from '@/components/Layout/DashboardNavbar.vue';
  import ContentFooter from '@/components/Layout/ContentFooter.vue';
  import DashboardContent from '@/components/Layout/Content.vue';
  import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      DashboardContent,
      SlideYDownTransition,
      ZoomCenterTransition,
      SidebarShare
    },
    data() {
      return {
        sidebarBackground: 'blue' //vue|blue|orange|green|red|primary
      };
    },
    computed: {
      isFullScreenRoute() {
        return this.$route.path === '/maps/full-screen'
=======
    setTimeout(() => {
      this.startMqttClient();
    }, 2000);
  },
  beforeDestroy() {
    this.$nuxt.$off("mqtt-sender");
  },
  methods: {
    async getMqttCredentials() {
      try {
        const axiosHeaders = {
          headers: {
            token: this.$store.state.auth.token
          }
        };

        const credentials = await this.$axios.post(
          "/getmqttcredentials",
          null,
          axiosHeaders
        );
        console.log(credentials.data);

        if (credentials.data.status == "success") {
          this.options.username = credentials.data.username;
          this.options.password = credentials.data.password;
        }
      } catch (error) {
        console.log(error);

        if (error.response.status == 401) {
          console.log("NO VALID TOKEN");
          localStorage.clear();

          const auth = {};
          this.$store.commit("setAuth", auth);

          window.location.href = "/login";
        }
>>>>>>> 30a34ac528f454914434031526537c411f60b311
      }
    },

    async getMqttCredentialsForReconnection() {
      try {
        const axiosHeaders = {
          headers: {
            token: this.$store.state.auth.token
          }
        };

        const credentials = await this.$axios.post(
          "/getmqttcredentialsforreconnection",
          null,
          axiosHeaders
        );
        console.log(credentials.data);

        if (credentials.data.status == "success") {
          this.client.options.username = credentials.data.username;
          this.client.options.password = credentials.data.password;
        }
      } catch (error) {

        console.log(error);


        if (error.response.status == 401) {
          console.log("NO VALID TOKEN");
          localStorage.clear();

          const auth = {};
          this.$store.commit("setAuth", auth);

          window.location.href = "/login";
        }
        
      }
    },

    async startMqttClient() {
      await this.getMqttCredentials();

      //ex topic: "userid/did/variableId/sdata"
      const deviceSubscribeTopic =
        this.$store.state.auth.userData._id + "/+/+/sdata";
      const notifSubscribeTopic =
        this.$store.state.auth.userData._id + "/+/+/notif";

      const connectUrl =
        process.env.mqtt_prefix + 
        this.options.host +
        ":" +
        this.options.port +
        this.options.endpoint;

        

      try {
        this.client = mqtt.connect(connectUrl, this.options);
      } catch (error) {
        console.log(error);
      }

      //MQTT CONNECTION SUCCESS
      this.client.on("connect", () => {
        console.log(this.client);

        console.log("Connection succeeded!");

        //SDATA SUBSCRIBE
        this.client.subscribe(deviceSubscribeTopic, { qos: 0 }, err => {
          if (err) {
            console.log("Error in DeviceSubscription");
            return;
          }
          console.log("Device subscription Success");
          console.log(deviceSubscribeTopic);
        });

        //NOTIF SUBSCRIBE
        this.client.subscribe(notifSubscribeTopic, { qos: 0 }, err => {
          if (err) {
            console.log("Error in NotifSubscription");
            return;
          }
          console.log("Notif subscription Success");
          console.log(notifSubscribeTopic);
        });
      });

      this.client.on("error", error => {
        console.log("Connection failed", error);
      });

      this.client.on("reconnect", error => {
        console.log("reconnecting:", error);
        this.getMqttCredentialsForReconnection();
      });

      this.client.on("disconnect", error => {
        console.log("MQTT disconnect EVENT FIRED:", error);
      });

      this.client.on("message", (topic, message) => {
        console.log("Message from topic " + topic + " -> ");
        console.log(message.toString());

        try {
          const splittedTopic = topic.split("/");
          const msgType = splittedTopic[3];

          if (msgType == "notif") {
            this.$notify({
              type: "danger",
              icon: "tim-icons icon-alert-circle-exc",
              message: message.toString()
            });
            this.$store.dispatch("getNotifications");
            return;
          } else if (msgType == "sdata") {
            $nuxt.$emit(topic, JSON.parse(message.toString()));
            return;
          }
        } catch (error) {
          console.log(error);
        }
      });

      $nuxt.$on("mqtt-sender", toSend => {
        this.client.publish(toSend.topic, JSON.stringify(toSend.msg));
      });
    },

    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    initScrollbar() {
      let docClasses = document.body.classList;
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        initScrollbar("sidebar");
        initScrollbar("main-panel");
        initScrollbar("sidebar-wrapper");

        docClasses.add("perfect-scrollbar-on");
      } else {
        docClasses.add("perfect-scrollbar-off");
      }
    }
  }
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}

.main-panel .zoomIn {
  animation-name: zoomIn95;
}

@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
