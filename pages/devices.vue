<template>
  <div>
    <!-- FORM ADD DEVICE -->
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card title">
            Agregar dispositivo:
          </h4>
        </div>

        <div class="row">
          <div class="col-4">
            <base-input
              label="Nombre"
              type="text"
              placeholder="Casa... Oficina..."
              v-model="newDevice.name"
            ></base-input>
          </div>

          <div class="col-4">
            <base-input
              label="Dispositivo"
              type="text"
              placeholder="ESP32... Arduino..."
              v-model="newDevice.dId"
            ></base-input>
          </div>

          <div class="col-4">
            <slot name="label">
              <label>Templates</label>
            </slot>
            <el-select
              v-model="selectedIndexTemplate"
              placeholder="Seleccione un template..."
              class="select-primary"
              style="width:100%"
            >
              <el-option
                v-for="(template, index) in templates"
                :key="template.templateId"
                class="text-dark"
                :label="template.name"
                :value="index"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="col-12">
          <base-button
            @click="createNewDevice()"
            type="button"
            class="mb-3"
            size="large"
            >Aceptar</base-button
          >
        </div>
      </card>
    </div>

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
              <el-tooltip
                content="Delete"
                effect="light"
                :open-delay="300"
                placement="top"
                style="padding-top: 15px"
              >
                <base-button
                  type="danger"
                  icon
                  size="sm"
                  class="btn-link"
                  @click="deleteDeviceRow(row.dId)"
                >
                  <i class="tim-icons icon-simple-remove"></i>
                </base-button>
              </el-tooltip>
            </div>
          </el-table-column>
        </el-table>
      </card>
    </div>

    <!-- <Json :value="newDevice.name"></Json> -->
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { Select, Option } from "element-ui";
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
      selectedIndexTemplate: null,
      templates: [],
      newDevice: {
        name: "",
        dId: "",
        templateId: "",
        templateName: ""
      }
    };
  },
  mounted() {
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
      this.newDevice.templateId = this.templates[
        this.selectedIndexTemplate
      ]._id;
      this.newDevice.templateName = this.templates[
        this.selectedIndexTemplate
      ].name;

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
          ) {
            this.$notify({
              type: "warning",
              icon: "tim-icons icon-alert-circle-exc",
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
            return;
          }
        });
    },
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
        if (res.data.status == "success") {
          this.templates = res.data.data;
        }
      } catch (error) {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          message: "Error recuperando lista de templates"
        });
        // console.log(error);
        return;
      }
    }
  }
};
</script>
