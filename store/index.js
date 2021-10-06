import { dispatch } from "d3-dispatch";

//VAriables globales = state
export const state = () => ({
    auth: null,
    devices: [],
    test: "testing123"
});

//funcion para poder modificar(mutar) variables globales(states)
//se llama con STORE.COMMIT
export const mutations = {
    setAuth(state, auth) {
        state.auth = auth;
    },
    setDevices(state, devices) {
        state.devices = devices;
    }
};

//funciones que pueden modificar tanto states como mutations
//se llama con STORE.DISPATCH("funcion", variable)
export const actions = {
    readToken() {
        let auth = null;
        try {
            auth = JSON.parse(localStorage.getItem('auth'));
        } catch (error) {
            console.log(error);
        }
        //recuperar auth de localStorage y lo grabamos en STATE
        this.commit('setAuth', auth);
    },

    getDevices() {
        const axiosHeader = {
            headers: {
                // "Content-Type": "application/json",
                token: this.state.auth.token
            }
        };

        this.$axios
            .get('/device', axiosHeader)
            .then(res => {
                this.commit('setDevices', res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    
/*     deleteDeviceRow(context, deviceId) {
        const axiosHeader = {
            headers: {
                // "Content-Type": "application/json",
                token: this.state.auth.token
            }
        };
        // console.log(deviceId);
        this.$axios
            .delete('device?dId=' + deviceId, axiosHeader)
            .then(res => {   
                if (res.data.status == 'success'){
                    this.dispatch('getDevices');
                    this.$notify({
                        type: "danger",
                        icon: "tim-icons icon-alert-circle-exc",
                        message: "Dispositio ID: "+deviceId+" borrado"
                      });
                }})
                //    this.$notify({type: 'warning', message: 'Dispositio ID: ' + deviceId + ' borrado!'});
                // console.log("Se ha borrado " + JSON.stringify(res.data.data.deletedCount) + " dispositivo con el ID: " + deviceId); 
            .catch(function (error) {
                console.log(error);
            });
            
        
    } */

}
        