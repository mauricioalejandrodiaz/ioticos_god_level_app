<<<<<<< HEAD
//Si el usuario tiene token, lo mandamos a INDEX
export default function({store, redirect}){
    store.dispatch('readToken');
    if (store.state.auth){
        return redirect ('/dashboard');
    }
}
=======
//If the user has a token, we send it to index
//Si el usuario tiene token lo enviamos a index
export default function({ store, redirect }) {
    store.dispatch('readToken');
    
    if (store.state.auth) {
        return redirect('/dashboard')
    }
} 
>>>>>>> 30a34ac528f454914434031526537c411f60b311
