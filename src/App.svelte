<script lang="ts">
  import TailwindCSS from './TailwindCSS.svelte';
  import AppHeader from './components/custom/AppHeader.svelte';
  import Step from './components/common/Step.svelte';
  import Icon, { ChevronLeft } from 'svelte-hero-icons';
  import addCard from './assets/addCard.svg';
  import emptyCard from './assets/emptyCard.svg';
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
        <div class="checkout__content__body__card__info checkout__content__body__card__info--invalid">
          <div class="checkout__content__body__card__info__brand">
            <p>Visa</p>
          </div>
          <div class="checkout__content__body__card__info__number">
            <p>
              ****&nbsp;
              ****&nbsp;
              ****&nbsp;
              ****
            </p>
          </div>
          <div class="checkout__content__body__card__info__name">
            <p>Nome do Fulano</p>
            <p>06/26</p>
          </div>
        </div>
      </div>
      <div class="checkout__content__body__form">
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
      @apply flex flex-wrap;

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

        &__info {
          margin-top: 31px;
          width: 365px;
          height: 224px;
          padding: 35.5px 27px 37.5px 33.5px;

          &--invalid {
            background-image: url("./assets/emptyCard.svg");
            background-repeat: no-repeat;
            background-position: center top;

            .checkout__content__body__card__info__brand {
              @apply hidden;
            }

            .checkout__content__body__card__info__number {
              margin-top: 48.7px;

              p {
                letter-spacing: 5.2px;
                text-shadow: 0px 1px 2px #000000B3;
                font-size: 24px;
                line-height: 27px;
                @apply text-white text-justify uppercase;
              }
            }

            .checkout__content__body__card__info__name {
              margin-top: 34px;
              @apply flex justify-between;

              p {
                text-shadow: 0px 1px 2px #000000B3;
                @apply text-base text-white uppercase;
              }
            }
          }
        }
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
        @apply w-full;

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

          &__info {
            width: 280px;
            height: 172.5px;
            margin-top: 16px;
            padding: 0px 14px;

            &--invalid {
              background-size: cover;

              .checkout__content__body__card__info__number {
                margin-top: 78px;

                p {
                  letter-spacing: 4.6px;
                  text-shadow: 0px 1px 2px #000000B3;
                  font-size: 19px;
                  line-height: 20px;
                  @apply text-white text-justify uppercase;
                }
              }

              .checkout__content__body__card__info__name {
                margin-top: 34px;
                @apply flex justify-between;

                p {
                  text-shadow: 0px 1px 2px #000000B3;
                  @apply text-xs text-white uppercase;
                }
              }
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
        @apply w-full;

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

          &__info {
            width: 280px;
            height: 172.5px;
            margin-top: 16px;
            padding: 0px 14px;

            &--invalid {
              background-size: cover;

              .checkout__content__body__card__info__number {
                margin-top: 78px;

                p {
                  letter-spacing: 4.6px;
                  text-shadow: 0px 1px 2px #000000B3;
                  font-size: 19px;
                  line-height: 20px;
                  @apply text-white text-justify uppercase;
                }
              }

              .checkout__content__body__card__info__name {
                margin-top: 34px;
                @apply flex justify-between;

                p {
                  text-shadow: 0px 1px 2px #000000B3;
                  @apply text-xs text-white uppercase;
                }
              }
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
        @apply w-full;

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

          &__info {
            width: 280px;
            height: 172.5px;
            margin-top: 16px;
            padding: 0px 14px;

            &--invalid {
              background-size: cover;

              .checkout__content__body__card__info__number {
                margin-top: 78px;

                p {
                  letter-spacing: 4.6px;
                  text-shadow: 0px 1px 2px #000000B3;
                  font-size: 19px;
                  line-height: 20px;
                  @apply text-white text-justify uppercase;
                }
              }

              .checkout__content__body__card__info__name {
                margin-top: 34px;
                @apply flex justify-between;

                p {
                  text-shadow: 0px 1px 2px #000000B3;
                  @apply text-xs text-white uppercase;
                }
              }
            }
          }
        }
      }
    }
  }
</style>