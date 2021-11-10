<template>
  <div>
    <!-- FORM ADD DEVICE -->
    <div class="row">
      <card>
        <div slot="header">
<<<<<<< HEAD
          <h4 class="card title">
            Agregar dispositivo:
          </h4>
=======
          <h4 class="card-title">Add new Device</h4>
>>>>>>> 30a34ac528f454914434031526537c411f60b311
        </div>

        <div class="row">
          <div class="col-4">
            <base-input
<<<<<<< HEAD
              label="Nombre"
              type="text"
              placeholder="Casa... Oficina..."
              v-model="newDevice.name"
            ></base-input>
=======
              label="Device Name"
              type="text"
              placeholder="Ex: Home, Office..."
              v-model="newDevice.name"
            >
            </base-input>
>>>>>>> 30a34ac528f454914434031526537c411f60b311
          </div>

          <div class="col-4">
            <base-input
<<<<<<< HEAD
              label="Dispositivo"
              type="text"
              placeholder="ESP32... Arduino..."
              v-model="newDevice.dId"
            ></base-input>
=======
              label="Device Id"
              type="text"
              placeholder="Ex: 7777-8888"
              v-model="newDevice.dId"
            >
            </base-input>
>>>>>>> 30a34ac528f454914434031526537c411f60b311
          </div>

          <div class="col-4">
            <slot name="label">
<<<<<<< HEAD
              <label>Templates</label>
            </slot>
            <el-select
              v-model="selectedIndexTemplate"
              placeholder="Seleccione un template..."
=======
              <label> Template </label>
            </slot>

            <el-select
              v-model="selectedIndexTemplate"
              placeholder="Select Template"
>>>>>>> 30a34ac528f454914434031526537c411f60b311
              class="select-primary"
              style="width:100%"
            >
              <el-option
                v-for="(template, index) in templates"
<<<<<<< HEAD
                :key="template.templateId"
                class="text-dark"
                :label="template.name"
                :value="index"
=======
                :key="template._id"
                class="text-dark"
                :value="index"
                :label="template.name"
>>>>>>> 30a34ac528f454914434031526537c411f60b311
              ></el-option>
            </el-select>
          </div>
        </div>

<<<<<<< HEAD
        <div class="col-12">
          <base-button
            @click="createNewDevice()"
            type="button"
            class="mb-3"
            size="large"
            >Aceptar</base-button
          >
=======
        <div class="row pull-right">
          <div class="col-12">
            <base-button
              @click="createNewDevice()"
              type="primary"
              class="mb-3"
              size="lg"
              >Add</base-button
            >
          </div>
>>>>>>> 30a34ac528f454914434031526537c411f60b311
        </div>
      </card>
    </div>

<<<<<<< HEAD
    <!-- TABLA DE DISPOSITIVOS -->
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card title">Dispositivos</h4>
        </div>
        <el-table :data="$store.state.devices">
          <el-table-column label="#" prop="fila" min-width="20">
            <div slot-scope="{ $index }">
              {{ $index + 1 }}
            </div>
          </el-table-column>
          <el-table-column label="Name" prop="name"></el-table-column>
          <el-table-column label="Device ID" prop="dId"></el-table-column>
          <el-table-column
            label="Template"
            prop="templateName"
          ></el-table-column>
          <el-table-column label="Actions" min-width="100">
            <div slot-scope="{ row, $index }">
              <el-tooltip content="DB" style="margin: 15px">
                <i
                  class="fas fa-database "
                  :class="{
                    'text-success': row.saverRule,
                    'text-dark': !row.saverRule
                  }"
                ></i>
              </el-tooltip>
              <el-tooltip content="Save?">
                <base-switch
                  @click="updateSaverRuleStatus($index)"
                  :value="row.saverRule"
                  onText="ON"
                  offText="OFF"
                >
                </base-switch>
              </el-tooltip>
=======
    <!-- DEVICES TABLE -->
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card-title">Devices</h4>
        </div>

        <el-table :data="$store.state.devices">
          <el-table-column label="#" min-width="50" align="center">
            <div slot-scope="{ row, $index }">
              {{ $index + 1 }}
            </div>
          </el-table-column>

          <el-table-column prop="name" label="Name"></el-table-column>

          <el-table-column prop="dId" label="Device Id"></el-table-column>

          <el-table-column prop="password" label="Password"></el-table-column>

          <el-table-column
            prop="templateName"
            label="Template"
          ></el-table-column>

          <el-table-column label="Actions">
            <div slot-scope="{ row, $index }">
              <el-tooltip
                content="Saver Status Indicator"
                style="margin-right:10px"
              >
                <i
                  class="fas fa-database "
                  :class="{
                    'text-success': row.saverRule.status,
                    'text-dark': !row.saverRule.status
                  }"
                ></i>
              </el-tooltip>

              <el-tooltip content="Database Saver">
                <base-switch
                  @click="updateSaverRuleStatus(row.saverRule)"
                  :value="row.saverRule.status"
                  type="primary"
                  on-text="On"
                  off-text="Off"
                ></base-switch>
              </el-tooltip>

>>>>>>> 30a34ac528f454914434031526537c411f60b311
              <el-tooltip
                content="Delete"
                effect="light"
                :open-delay="300"
                placement="top"
<<<<<<< HEAD
                style="padding-top: 15px"
=======
>>>>>>> 30a34ac528f454914434031526537c411f60b311
              >
                <base-button
                  type="danger"
                  icon
                  size="sm"
                  class="btn-link"
<<<<<<< HEAD
                  @click="deleteDeviceRow(row.dId)"
                >
                  <i class="tim-icons icon-simple-remove"></i>
=======
                  @click="deleteDevice(row)"
                >
                  <i class="tim-icons icon-simple-remove "></i>
>>>>>>> 30a34ac528f454914434031526537c411f60b311
                </base-button>
              </el-tooltip>
            </div>
          </el-table-column>
        </el-table>
      </card>
    </div>
<<<<<<< HEAD

    <!-- <Json :value="newDevice.name"></Json> -->
=======
>>>>>>> 30a34ac528f454914434031526537c411f60b311
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { Select, Option } from "element-ui";
<<<<<<< HEAD
=======

>>>>>>> 30a34ac528f454914434031526537c411f60b311
export default {
  middleware: "authenticated",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Option.name]: Option,
    [Select.name]: Select
  },
  data() {
    return {
<<<<<<< HEAD
      selectedIndexTemplate: null,
      templates: [],
=======
      templates: [],
      selectedIndexTemplate: null,
>>>>>>> 30a34ac528f454914434031526537c411f60b311
      newDevice: {
        name: "",
        dId: "",
        templateId: "",
        templateName: ""
      }
    };
  },
  mounted() {
<<<<<<< HEAD
    this.$store.dispatch("getDevices");
    this.getTemplates();
  },
  methods: {
    createNewDevice() {
      if (this.newDevice.name == "") {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          message: "Debe tener un nombre"
        });
        return;
      }
      if (this.newDevice.dId == "") {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          message: "Debe tener un ID"
        });
        return;
      }
      if (this.selectedIndexTemplate == null) {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          message: "Debe seleccionar un template"
        });
        return;
      }
      const axiosHeaders = {
        headers: { token: this.$store.state.auth.token }
      };
      const toSend = {
        newDevice: this.newDevice
      };

      //ESCRBIMOS EL NOMBRE Y EL ID DEL TEMPLATE SELECCIONADO EN EL OBJETO newDeice
=======
    
    this.getTemplates();
  },
  methods: {
    updateSaverRuleStatus(rule) {
      
      var ruleCopy = JSON.parse(JSON.stringify(rule));

      ruleCopy.status = !ruleCopy.status;

      const toSend = { 
        rule: ruleCopy 
      };

      const axiosHeaders = {
        headers: {
          token: this.$store.state.auth.token
        }
      };

      this.$axios
        .put("/saver-rule", toSend, axiosHeaders)
        .then(res => {


          if (res.data.status == "success") {

            this.$store.dispatch("getDevices");

            this.$notify({
              type: "success",
              icon: "tim-icons icon-check-2",
              message: " Device Saver Status Updated"
            });

          }

          return;
        })
        .catch(e => {
          console.log(e);
          this.$notify({
            type: "danger",
            icon: "tim-icons icon-alert-circle-exc",
            message: " Error updating saver rule status"
          });
          return;
        });
    },

    deleteDevice(device) {
      const axiosHeaders = {
        headers: {
          token: this.$store.state.auth.accessToken
        },
        params: {
          dId: device.dId
        }
      };

      this.$axios
        .delete("/device", axiosHeaders)
        .then(res => {
          if (res.data.status == "success") {
            this.$notify({
              type: "success",
              icon: "tim-icons icon-check-2",
              message: device.name + " deleted!"
            });
          }

          $nuxt.$emit("time-to-get-devices");

          return;
        })
        .catch(e => {
          console.log(e);
          this.$notify({
            type: "danger",
            icon: "tim-icons icon-alert-circle-exc",
            message: " Error deleting " + device.name
          });
          return;
        });
    },
    //new device
    createNewDevice() {
      if (this.newDevice.name == "") {
        this.$notify({
          type: "warning",
          icon: "tim-icons icon-alert-circle-exc",
          message: " Device Name is Empty :("
        });
        return;
      }

      if (this.newDevice.dId == "") {
        this.$notify({
          type: "warning",
          icon: "tim-icons icon-alert-circle-exc",
          message: " Device ID is Empty :("
        });
        return;
      }

      if (this.selectedIndexTemplate == null) {
        this.$notify({
          type: "warning",
          icon: "tim-icons icon-alert-circle-exc",
          message: " Tempalte must be selected"
        });
        return;
      }

      const axiosHeaders = {
        headers: {
          token: this.$store.state.auth.token
        }
      };

      //ESCRIBIMOS EL NOMBRE Y EL ID DEL TEMPLATE SELECCIONADO EN EL OBJETO newDevice
>>>>>>> 30a34ac528f454914434031526537c411f60b311
      this.newDevice.templateId = this.templates[
        this.selectedIndexTemplate
      ]._id;
      this.newDevice.templateName = this.templates[
        this.selectedIndexTemplate
      ].name;

<<<<<<< HEAD
      this.$axios
        .post("/device", toSend, axiosHeaders)
        .then(res => {
          // console.log(res.data);
          if (res.data.status == "success") {
            this.newDevice.name = "";
            this.newDevice.dId = "";
            this.selectedIndexTemplate = null;
            this.$notify({
              type: "success",
              icon: "tim-icons icon-alert-circle-exc",
              message: "Agregado correctamente!"
            });
            this.$store.dispatch("getDevices");
            return;
          }
        })
        .catch(error => {
          if (
            error.response.data.status == "error" &&
            error.response.data.error.errors.dId.kind == "unique"
=======
      const toSend = {
        newDevice: this.newDevice
      };

      this.$axios
        .post("/device", toSend, axiosHeaders)
        .then(res => {
          if (res.data.status == "success") {
            this.$store.dispatch("getDevices");

            this.newDevice.name = "";
            this.newDevice.dId = "";
            this.selectedIndexTemplate = null;

            this.$notify({
              type: "success",
              icon: "tim-icons icon-check-2",
              message: "Success! Device was added"
            });

            return;
          }
        })
        .catch(e => {
          if (
            e.response.data.status == "error" &&
            e.response.data.error.errors.dId.kind == "unique"
>>>>>>> 30a34ac528f454914434031526537c411f60b311
          ) {
            this.$notify({
              type: "warning",
              icon: "tim-icons icon-alert-circle-exc",
<<<<<<< HEAD
              message: "El dispositivo ya existe"
            });
            return;
          } else {
            this.$notify({
              type: "warning",
              icon: "tim-icons icon-alert-circle-exc",
              message: "Un error grave ha ocurrido!"
            });
            // console.log(error);
=======
              message:
                "The device is already registered in the system. Try another device"
            });
            return;
          } else {
            this.showNotify("danger", "Error");
>>>>>>> 30a34ac528f454914434031526537c411f60b311
            return;
          }
        });
    },
<<<<<<< HEAD
    deleteDeviceRow(deviceId) {
      const axiosHeaders = {
        headers: { token: this.$store.state.auth.token }
      };
      this.$axios
        .delete("device?dId=" + deviceId, axiosHeaders)
        .then(res => {
          if (res.data.status == "success") {
            this.$store.dispatch("getDevices");
            this.$notify({
              type: "success",
              icon: "tim-icons icon-alert-circle-exc",
              message: "Dispositio ID: " + deviceId + " borrado"
            });
          } else {
            this.$notify({
              type: "warning",
              icon: "tim-icons icon-alert-circle-exc",
              message: error
            });
          }
        })
        .catch(error => {
          // console.log(error);
        });
    },

    updateSaverRuleStatus(index) {
      this.devices[index].saverRule = !this.devices[index].saverRule;
    },
    async getTemplates() {
      const axiosHeaders = {
        headers: { token: this.$store.state.auth.token }
      };
      try {
        const res = await this.$axios.get("/template", axiosHeaders);
        // console.log(res.data);
=======

    //Get Templates
    async getTemplates() {
      const axiosHeaders = {
        headers: {
          token: this.$store.state.auth.token
        }
      };

      try {
        const res = await this.$axios.get("/template", axiosHeaders);
        console.log(res.data);

>>>>>>> 30a34ac528f454914434031526537c411f60b311
        if (res.data.status == "success") {
          this.templates = res.data.data;
        }
      } catch (error) {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
<<<<<<< HEAD
          message: "Error recuperando lista de templates"
        });
        // console.log(error);
        return;
      }
    }
=======
          message: "Error getting templates..."
        });
        console.log(error);
        return;
      }
    },

    deleteDevice(device) {
      const axiosHeader = {
        headers: {
          token: this.$store.state.auth.token
        },
        params: {
          dId: device.dId
        }
      };

      this.$axios
        .delete("/device", axiosHeader)
        .then(res => {
          if (res.data.status == "success") {
            this.$notify({
              type: "success",
              icon: "tim-icons icon-check-2",
              message: device.name + " deleted!"
            });
            this.$store.dispatch("getDevices");
          }
        })
        .catch(e => {
          console.log(e);
          this.$notify({
            type: "danger",
            icon: "tim-icons icon-alert-circle-exc",
            message: " Error deleting " + device.name
          });
        });
    },

>>>>>>> 30a34ac528f454914434031526537c411f60b311
  }
};
</script>
