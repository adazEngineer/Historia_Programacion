<script lang="ts">
import Encabezado from "./lib/components/Encabezado.svelte";
import LineaTiempo from "./lib/components/LineaTiempo.svelte";
import Personajes from "./lib/components/Personajes.svelte";
import Evento from "./lib/components/Evento.svelte";
</script>

<Encabezado />
<section>  
  <LineaTiempo />  
  <Evento />
  <Personajes />
</section>

<style>
  section {
    display: flex;
    height: 90vh;
    flex-direction: row;
    flex: 1;
    
  }
</style>
