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
            // console.log(error);
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
            .catch(error => {
                // console.log(error);
            })
    } 
}
        