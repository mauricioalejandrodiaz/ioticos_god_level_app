<template>
    <div>
        <h3>
            Cargando...
        </h3>
    </div>
</template>
<script>
export default {
    mounted(){
        $nuxt.$router.push("/dashboard");
    }
}
</script>