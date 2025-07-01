<script lang="ts">
  import { eventoSeleccionado } from "../../stores/EventosStore";
</script>

<section class="cont-evento">
    {#if $eventoSeleccionado}
    <div class="cont-titulo">
        <h3 class="txt-subtitulo">{$eventoSeleccionado.Fecha}</h3>
        <hr>
        <h3 class="txt-subtitulo">{$eventoSeleccionado.Titulo}</h3>
    </div>

    <img class="img" src="{$eventoSeleccionado.Imagen}" alt="{$eventoSeleccionado.Titulo}">
    <p class="txt-texto">{$eventoSeleccionado.Descripcion}</p>

    {:else}
        <p class="txt-texto">Selecciona un evento</p>
    {/if}
</section>

<style>
    .cont-evento {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 50%;
        padding: 1rem;
        border-right: 2px solid #ddd;
        height: 93vh;
        overflow-y: auto;
    }

    .img{
        width: 80%;
        border-radius: 8px;
    }

    .cont-titulo{
        display: flex;
        gap: 1rem;        
    }
</style>
