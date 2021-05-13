<script lang="ts">
  import Icon, { ChevronRight, Check } from 'svelte-hero-icons';
  export let steps = [];
  export let activeStep;

  const lastStep = steps.length - 1;
</script>

<ul class="steps">
  {#each steps as step, idx}
    <li class="step__item">
      <div class="{`step__item__number ${activeStep > idx ? 'bg-primary text-white' : 'bg-white text-primary'}`}">
        {#if activeStep > idx}
          <Icon src="{Check}" class="text-wihte"/>
        {:else}
          {idx + 1}
        {/if}
      </div>
      <p class="step__item--text">{step}</p>
      {#if idx < lastStep}
        <div class="step__item--icon">
          <Icon src="{ChevronRight}" class="text-primary" />
        </div>
      {/if}
    </li>
  {/each}
</ul>
<div class="steps__simple">
  <p><strong>Etapa {activeStep+1}</strong> de {steps.length}</p>
</div>

<style lang="postcss">
  .steps {
    height: 22px;
    @apply flex;
  }

  .steps__simple {
    @apply text-white w-full text-center;
  }

  .step__item {
    @apply flex justify-between items-center;
  }

  .step__item--icon {
    width: 16px;
    height: 20px;
    margin-right: 24px;
  }

  .step__item--text {
    margin-right: 24px;
    @apply text-primary;
  }

  .step__item__number {
    height: 22px;
    width: 22px;
    margin-right: 12.4px;
    @apply flex justify-center items-center border border-primary rounded-full font-bold text-sm;
  }

  /* Breakpoints para aplicação das classes */
  @screen 2xl {
    .steps__simple {
      @apply hidden;
    }
  }

  @screen xl {
    .steps__simple {
      @apply hidden;
    }
  }

  @screen lg {
    .steps__simple {
      @apply hidden;
    }
  }

  @screen md {
    .steps {
      @apply hidden;
    }
  }
  
  @screen sm {
    .steps {
      @apply hidden;
    }
  }

  @screen xs {
    .steps {
      @apply hidden;
    }
  }
</style>