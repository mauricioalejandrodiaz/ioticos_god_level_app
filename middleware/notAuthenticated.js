//Si el usuario tiene token, lo mandamos a INDEX
export default function({store, redirect}){
    store.dispatch('readToken');
    if (store.state.auth){
        return redirect ('/dashboard');
    }
}