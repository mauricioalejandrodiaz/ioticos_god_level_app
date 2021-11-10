<template>
<<<<<<< HEAD
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
=======
  <div class="row"><h3></h3></div>
</template>


<script>
    export default {
        middleware: "authenticated",
        mounted() {
            $nuxt.$router.push("/dashboard");
        }
    }
>>>>>>> 30a34ac528f454914434031526537c411f60b311
</script>