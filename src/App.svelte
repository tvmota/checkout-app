<script lang="ts">
  import TailwindCSS from './TailwindCSS.svelte';
  import AppHeader from './components/custom/AppHeader.svelte';
  import Step from './components/common/Step.svelte';
  import Icon, { ChevronLeft } from 'svelte-hero-icons'
</script>

<TailwindCSS />

<AppHeader />
<main class="app-main">
  <div class="checkout__content">
    <div class="checkout__content__header">
      <div class="checkout__content__header__link">
        <div class="checkout__content__header__link--icon">
          <Icon src="{ChevronLeft}" class="text-white" />
        </div>
        <p class="checkout__content__header__link--txt">Alterar forma de pagamento</p>
      </div>
      <div class="checkout__content__header__steps">
        <Step steps={['Carrinho', 'Pagamento', 'Confirmação']} activeStep={1}/>
      </div>
    </div>
    <div>
      <div><!-- cartao --></div>
      <div><!-- form --></div>
    </div>
  </div>

  <div class="checkout__product"></div>
</main>

<style lang="postcss">
  .app-main {
    background: #f7f7f7;
    height: calc(100vh - 104px);
    grid-area: 2 / 1 / 6 / 6;
    padding-top: 65px;
    @apply flex flex-wrap justify-center w-full;
  }

  .checkout__product {
    width: 327px;
    height: 285px;
    @apply block bg-white hidden;
  }

  .checkout__content {
    width: 1024px;
    height: 596px;
    @apply block;
  }

  .checkout__content__header {
    @apply flex;
  }

  .checkout__content__header__link {
    @apply text-white text-sm flex items-center;
  }

  .checkout__content__header__link--icon {
    width: 16px;
    height: 20px;
    @apply mr-2;
  }

  /* Breakpoints para aplicação das classes */
  @screen 2xl {
    .checkout__content {
      margin-right: 14px;
      background: linear-gradient(90deg, #DE4B4B 0%, #DE4B4B 352px, #FFFFFF 353px, #FFFFFF 100%);
      padding: 50px 64px;
    }

    .checkout__product {
      @apply flex;
    }

    .checkout__content__header {
      @apply justify-between;
    }
  }

  @screen xl {
    .checkout__content {
      margin-right: 14px;
      background: linear-gradient(90deg, #DE4B4B 0%, #DE4B4B 352px, #FFFFFF 353px, #FFFFFF 100%);
      padding: 50px 64px;
    }

    .checkout__content__header {
      @apply justify-between;
    }
  }

  @screen lg {
    .checkout__content {
      background: linear-gradient(90deg, #DE4B4B 0%, #DE4B4B 352px, #FFFFFF 353px, #FFFFFF 100%);
      padding: 50px 64px;
    }

    .checkout__content__header {
      @apply justify-between;
    }
  }

  @screen md {
    .checkout__content {
      background: linear-gradient(180deg, #DE4B4B 0%, #DE4B4B 239px, #FFFFFF 240px, #FFFFFF 100%);
      width: 360px;
      padding: 38px 14px;
    }

    .checkout__content__header__link--txt {
      @apply hidden;
    }

    .checkout__content__header__steps {
      @apply w-full;
    }
  }
  
  @screen sm {
    .checkout__content {
      background: linear-gradient(180deg, #DE4B4B 0%, #DE4B4B 239px, #FFFFFF 240px, #FFFFFF 100%);
      width: 360px;
      padding: 38px 14px;
    }

    .checkout__content__header__link--txt {
      @apply hidden;
    }

    .checkout__content__header__steps {
      @apply w-full;
    }
  }

  @screen xs {
    .checkout__content {
      background: linear-gradient(180deg, #DE4B4B 0%, #DE4B4B 239px, #FFFFFF 240px, #FFFFFF 100%);
      width: 360px;
      padding: 38px 14px;
    }

    .checkout__content__header__link--txt {
      @apply hidden;
    }

    .checkout__content__header__steps {
      @apply w-full;
    }
  }
</style>