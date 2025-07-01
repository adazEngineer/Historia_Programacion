<script lang="ts">
    import { personajeSeleccionado } from '../../stores/PersonajesStore';
</script>

<section class="cont-personajes">    
    {#each $personajeSeleccionado as personaje}
        <h2 class="txt-subtitulo">{personaje.Nombre}</h2>
        <div class="cont-fechas">
            <p class="txt-texto">{personaje.FechaNacimiento}</p>
            <hr>
            <p class="txt-texto">{personaje.FechaMuerte}</p>
        </div>
        <img src="{personaje.Foto}" alt="{personaje.Nombre}">
        <p class="txt-texto">{personaje.Nacionalidad}</p>
        <p class="txt-texto">{personaje.Biografia}</p>
    {/each}
</section>

<style>
    .cont-personajes {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 35%;
        padding: 1rem;
        border-right: 2px solid #ddd;
        height: 93vh;
        overflow-y: auto;
    }
    .cont-fechas{
        display: flex;
        gap: 1rem;
    }
</style>
