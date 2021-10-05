<template>
  <div class="container login-page">
    <div class="col-lg-4 col-md-6 ml-auto mr-auto">
      <card class="card-login card-white">
        <template slot="header">
          <img src="img//card-primary.png" alt="" />
          <h1 class="card-title">Tecnocasa</h1>
        </template>

        <div>
          <div :class="user.form">
            <base-input
              name="name"
              v-model="user.name"
              placeholder="Name"
              addon-left-icon="tim-icons icon-badge"
            >
            </base-input>

            <base-input
              name="email"
              v-model="user.email"
              placeholder="Email"
              addon-left-icon="tim-icons icon-email-85"
            >
            </base-input>

            <base-input
              name="password"
              v-model="user.password"
              type="password"
              placeholder="Password"
              addon-left-icon="tim-icons icon-lock-circle"
            >
            </base-input>
          </div>
          <div :class="user.validatorInput">
          <base-input
            name="validator"
            v-model="user.validateText"
            placeholder="ingrese el codigo enviado"
            addon-left-icon="tim-icons icon-lock-circle"
          >
          </base-input>
          </div>
        </div>

        <div slot="footer">
          <base-button
            native-type="submit"
            type="primary"
            class="mb-3"
            size="lg"
            @click="register()"
            block
          >
            {{user.buttonText}}
          </base-button>

          <div class="pull-left">
            <h6>
              <nuxt-link class="link footer-link" to="/login">
                login
              </nuxt-link>
            </h6>
          </div>

          <div class="pull-right">
            <h6><a href="#help!!!" class="link footer-link">Need Help?</a></h6>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'notAuthenticated',    
  layout: "auth",
  data() {
    return {
      campos:{

      },
      user: {
        name: "",
        email: "",
        password: "",
        validatorInput: "d-none",
        form: "d-block",
        validate: "",
        buttonText: "Registrar"
      }
    };
  },
  methods: {
    register() {
      this.$axios
        .post("/register", this.user)
        .then(res => {
          console.log(res.data);
          if (res.data.status == "success") {
            // this.user.validatorInput = "d-block";
            // this.user.form = "d-none";
            // this.user.buttonText = "Verificar";
            this.$notify({
              type: "success",
              icon: "tim.icons icon-check-2",
              message: "Success! Now you can login..."              
            });
            
            return;
          }
        })
        .catch(err => {
          console.log(err.response.data);
          if (err.response.data.error.errors.email.kind == "unique") {
            this.$notify({
              type: "danger",
              icon: "tim.icons icon-alert-circle-exc",
              message: "Warning! User already exist..."
            });
            return;
          } else {
            this.$notify({
              type: "danger",
              icon: "tim.icons icon-alert-circle-exc",
              message: "Warning! Error creando usuario..."
            });
            return;
          }
        });
    }
  }
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
</style>
