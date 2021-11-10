<template>
  <div class="container login-page">
    <div class="col-lg-4 col-md-6 ml-auto mr-auto">
      <card class="card-login card-white">
        <template slot="header">
          <img src="img//card-primary.png" alt="" />
<<<<<<< HEAD
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
=======
          <h1 class="card-title">IoT GL</h1>
        </template>

        <div>
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
>>>>>>> 30a34ac528f454914434031526537c411f60b311
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
<<<<<<< HEAD
            {{user.buttonText}}
=======
            Register
>>>>>>> 30a34ac528f454914434031526537c411f60b311
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
<<<<<<< HEAD
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
=======
  middleware: 'notAuthenticated',
  layout: "auth",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
>>>>>>> 30a34ac528f454914434031526537c411f60b311
      }
    };
  },
  methods: {
    register() {
<<<<<<< HEAD
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
=======

      this.$axios
        .post("/register", this.user)
        .then(res => {
          //success! - Usuario creado.
          if (res.data.status == "success") {
            this.$notify({
              type: "success",
              icon: "tim-icons icon-check-2",
              message: "Success! Now you can login..."
            });

            this.user.name = "";
            this.user.password = "";
            this.user.email = "";

            return;
          }

        })
        .catch(e => {
          console.log(e.response.data);

          if (e.response.data.error.errors.email.kind == "unique") {
            this.$notify({
              type: "danger",
              icon: "tim-icons icon-alert-circle-exc",
              message: "User already exists :("
            });

            return;

          } else {

            this.$notify({
              type: "danger",
              icon: "tim-icons icon-alert-circle-exc",
              message: "Error creating user..."
            });

            return;
          }



        });


>>>>>>> 30a34ac528f454914434031526537c411f60b311
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
