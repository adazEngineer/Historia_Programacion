<script lang="ts">
    import { eventosStore, seleccionarEvento } from '../../stores/EventosStore';
</script>


<aside class="timeline-aside">
    <h2 class="txt-subtitulo">Linea Temporal</h2>
    <div class="timeline">
    {#each $eventosStore as evento}
        <div class="timeline-item">
        <button class="timeline-marker" aria-label="Evento" onclick={() => seleccionarEvento(evento.IdEvento)}></button>
        <strong class="timeline-label txt-texto">{evento.Fecha}</strong>
        <p class="timeline-label txt-texto">{evento.Titulo}</p>
        </div>
    {/each}
    </div>
</aside>

<style>
    .timeline-aside {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      width: 20%;
      padding: 1rem;
      border-right: 2px solid #ddd;
      height: 93vh;
      overflow-y: auto;
    }
    
    .timeline {
      border-left: 3px solid #bbb;
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
    }
    
    .timeline-marker {
      position: absolute;
      left: -10px;
      top: 0.3rem;
      width: 1rem;
      height: 1rem;
      background-color: var(--color-secundario);
      border: 2px solid var(--color-principal);
      border-radius: 50%;
    }
    .timeline-marker:hover {
      cursor: pointer;
      width: 1.2rem;
      height: 1.2rem;
      transition: all 0.3s ease;
    }
    
    .timeline-label {
      margin-left: 1rem;
    }
    </style>
    