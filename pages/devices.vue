<template>
  <div>
    <!-- FORM ADD DEVICE -->
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card title">Agregar dispositivo...</h4>
        </div>

        <div class="row">
          <div class="col-4">
            <base-input
              label="Nombre"
              type="text"
              placeholder="Casa... Oficina..."
            ></base-input>
          </div>

          <div class="col-4">
            <base-input
              label="Dispositivo"
              type="text"
              placeholder="ESP32... Arduino..."
            ></base-input>
          </div>

          <div class="col-4">
            <slot name="label">
              <label>Template</label>
            </slot>
            <el-select
              label="Seleccion"
              type="text"
              placeholder="Selecciona un template"
              value=""
              style="width:100%"
            >
              <el-option
                class="text-dark"
                label="Template 1"
                value="Template1"
              ></el-option>
              <el-option
                class="text-dark"
                label="Template 2"
                value="Template2"
              ></el-option>
              <el-option
                class="text-dark"
                label="Template 3"
                value="Template3"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="col-12">
          <base-button type="button" class="mb-3" size="large"
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

    <Json :value="$store.state.devices"></Json>
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
    return {};
  },
  mounted() {
    this.$store.dispatch("getDevices");
  },
  methods: {
    deleteDeviceRow(deviceId) {
      this.$store.dispatch("deleteDeviceRow", deviceId);
      this.$notify({type: 'warning', message: 'Dispositio ID: ' + deviceId + ' borrado!'});
      // this.$notify('Dispositio ID: ' + deviceId + ' borrado!')
    },

    updateSaverRuleStatus(index) {
      this.devices[index].saverRule = !this.devices[index].saverRule;
    }
  }
};
</script>


    