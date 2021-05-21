<script lang="ts">
  import TailwindCSS from './TailwindCSS.svelte';
  import AppHeader from './components/custom/AppHeader.svelte';
  import Step from './components/common/Step.svelte';
  import CardInfo from './components/custom/CardInfo.svelte';
  import CardForm from './components/custom/form/CardForm.svelte';
  import Icon, { ChevronLeft } from 'svelte-hero-icons';
  import addCard from './assets/addCard.svg';
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
    <div class="checkout__content__body">
      <div class="checkout__content__body__card">
        <div class="checkout__content__body__card__title">
          <img alt="add card logo" src={addCard}>
          <p>Adicione um novo cartão de crédito</p>
        </div>
        <CardInfo />
      </div>
      <div class="checkout__content__body__form">
        <CardForm />
      </div>
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

    &__header {
      @apply flex;

      &__link {
        @apply text-white text-sm flex items-center;

        &--icon {
          width: 16px;
          height: 20px;
          @apply mr-2;
        }
      }
    }

    &__body {
      margin-top: 54px;
      @apply flex;

      &__card {
        &__title {
          @apply flex;

          img {
            width: 50px;
            height: 50px;
            @apply mr-4;
          }

          p {
            width: 207px;
            line-height: 24px;
            letter-spacing: -0.01px;
            font-size: 20px;
            @apply text-white font-bold;
          }
        }
      }

      &__form {
        margin-left: 92px;
        width: 440px;
      }
    }
  }

  /* Breakpoints para aplicação das classes */
  @screen 2xl {
    .checkout__content {
      margin-right: 14px;
      background: linear-gradient(90deg, #DE4B4B 0%, #DE4B4B 352px, #FFFFFF 353px, #FFFFFF 100%);
      padding: 50px 64px;

      &__header {
        @apply justify-between;
      }
    }

    .checkout__product {
      @apply flex;
    }
  }

  @screen xl {
    .checkout__content {
      margin-right: 14px;
      background: linear-gradient(90deg, #DE4B4B 0%, #DE4B4B 352px, #FFFFFF 353px, #FFFFFF 100%);
      padding: 50px 64px;

      &__header {
        @apply justify-between;
      }
    }
  }

  @screen lg {
    .checkout__content {
      background: linear-gradient(90deg, #DE4B4B 0%, #DE4B4B 352px, #FFFFFF 353px, #FFFFFF 100%);
      padding: 50px 64px;

      &__header {
        @apply justify-between;
      }

      &__body {
        @apply flex-wrap;
      }
    }
  }

  @screen md {
    .checkout__content {
      background: linear-gradient(180deg, #DE4B4B 0%, #DE4B4B 239px, #FFFFFF 240px, #FFFFFF 100%);
      width: 360px;
      padding: 38px 14px;

      &__header {
        &__link {
          &--txt {
            @apply hidden;      
          }
        }

        &__steps {
          @apply w-full;
        }
      }

      &__body {
        margin-top: 30px;
        @apply w-full flex-wrap;

        &__card {
          @apply flex flex-wrap justify-center;

          &__title {
            @apply flex justify-center items-center;

            p {
              width: 165px;
              @apply text-base leading-5;
            }

            img {
              width: 40px;
              height: 40px;
              @apply mr-4;
            }
          }
        }
      }
    }
  }
  
  @screen sm {
    .checkout__content {
      background: linear-gradient(180deg, #DE4B4B 0%, #DE4B4B 239px, #FFFFFF 240px, #FFFFFF 100%);
      width: 360px;
      padding: 38px 14px;

      &__header {
        &__link {
          &--txt {
            @apply hidden;
          }
        }

        &__steps {
          @apply w-full;
        }
      }

      &__body {
        margin-top: 30px;
        @apply w-full flex-wrap;

        &__card {
          @apply flex flex-wrap justify-center;

          &__title {
            @apply flex justify-center items-center;

            p {
              width: 165px;
              @apply text-base leading-5;
            }

            img {
              width: 40px;
              height: 40px;
              @apply mr-4;
            }
          }
        }
      }
    }
  }

  @screen xs {
    .checkout__content {
      background: linear-gradient(180deg, #DE4B4B 0%, #DE4B4B 239px, #FFFFFF 240px, #FFFFFF 100%);
      width: 360px;
      padding: 38px 14px;

      &__header {
        &__link {
          &--txt {
            @apply hidden;      
          }
        }

        &__steps {
          @apply w-full;
        }
      }

      &__body {
        margin-top: 30px;
        @apply w-full flex-wrap;

        &__card {
          @apply flex flex-wrap justify-center;

          &__title {
            @apply flex justify-center items-center;

            p {
              width: 165px;
              @apply text-base leading-5;
            }

            img {
              width: 40px;
              height: 40px;
              @apply mr-4;
            }
          }
        }
      }
    }
  }
</style>