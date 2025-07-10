<script lang="ts">
    import { personajeSeleccionado } from '../../stores/PersonajesStore';
</script>

<section class="cont-personajes">    
    {#each $personajeSeleccionado as personaje}
        <h2 class="txt-subtitulo">{personaje.Nombre}</h2>
        <div class="cont-fechas">
            <h3 class="txt-texto">{personaje.FechaNacimiento}</h3>
            <hr>
            <h3 class="txt-texto">{personaje.FechaMuerte}</h3>
        </div>
        <img src="{personaje.Foto}" alt="{personaje.Nombre}" class="img-personaje">
        <h3 class="txt-texto">{personaje.Nacionalidad}</h3>
        <p class="txt-texto">{personaje.Biografia}</p>
        
        {#if $personajeSeleccionado.length > 1}
            <hr>
        {/if}
    {/each}
</section>

<style>
    .cont-personajes {
        display: flex;
        flex-direction: column;
        text-align: justify;
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
    .img-personaje{
        width: 80%;
        max-height: 300px;
        object-fit: contain;
        border-radius: 8px;
    }
</style>
