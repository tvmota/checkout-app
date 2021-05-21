<script lang="ts">
  import Payment from 'payment';
  import { cardStore } from '../../store/CardStore';
  import amex from '../../assets/amex.svg';
  import diners from '../../assets/diners.svg';
  import discover from '../../assets/discover.svg';
  import elo from '../../assets/elo.svg';
  import hiper from '../../assets/hiper.svg';
  import jcb from '../../assets/jcb.svg';
  import laser from '../../assets/laser.svg';
  import maestro from '../../assets/maestro.svg';
  import master from '../../assets/master.svg';
  import visa from '../../assets/visa.svg';
  import unionPay from '../../assets/unionPay.svg';

  const validCardCls = 'card__info__front__valid card__info__front-bkg--valid';
  const invalidCardCls = 'card__info__front__invalid card__info__front-bkg--invalid';

  $:validCard = Payment.fns.validateCardNumber($cardStore.cardNumber);
  $:validCardValidity = Payment.fns.validateCardExpiry($cardStore.cardValidity);
  $:cardType = Payment.fns.cardType($cardStore.cardNumber);
</script>

<div class="card">
  <div class="card__info">
    <div
      class="{`card__info__front ${validCard ? validCardCls : invalidCardCls}`}">
      <div class="card__info__front__valid__brand">
        {#if cardType === 'amex'}
          <img src={amex} alt="amex logo">
        {/if}
        {#if cardType === 'discover'}
          <img src={discover} alt="discover logo">
        {/if}
        {#if cardType === 'dinersclub'}
          <img src={diners} alt="dinersclub logo">
        {/if}
        {#if cardType === 'elo'}
          <img src={elo} alt="elo logo">
        {/if}
        {#if cardType === 'hipercard'}
          <img src={hiper} alt="hipercard logo">
        {/if}
        {#if cardType === 'jcb'}
          <img src={jcb} alt="jcb logo">
        {/if}
        {#if cardType === 'laser'}
          <img src={laser} alt="jcb logo">
        {/if}
        {#if cardType === 'maestro'}
          <img src={maestro} alt="maestro logo">
        {/if}
        {#if cardType === 'mastercard'}
          <img src={master} alt="mastercard logo">
        {/if}
        {#if cardType === 'visa'}
          <img src={visa} alt="visa logo">
        {/if}
        {#if cardType === 'unionpay'}
          <img src={unionPay} alt="unionpay logo">
        {/if}
      </div>
      <div class="{validCard ? 'card__info__front__valid__number' : 'card__info__front__invalid__number'}">
        {#if !validCard}
          <p>
            * * * *&nbsp;&nbsp;
            * * * *&nbsp;&nbsp;
            * * * *&nbsp;&nbsp;
            * * * *
          </p>
        {/if}
        {#if validCard}
          <p>
            {$cardStore.cardNumber}
          </p>
        {/if}
      </div>
      <div class="{validCard ? 'card__info__front__valid__name' : 'card__info__front__invalid__name'}">
        {#if $cardStore.clientName}
          <p>{$cardStore.clientName}</p>
        {/if}
        {#if !$cardStore.clientName}
          <p>Nome do titular</p>
        {/if}
        {#if validCardValidity}
          <p>{$cardStore.cardValidity}</p>
        {/if}
        {#if !validCardValidity}
          <p>00/0000</p>
        {/if}
      </div>
    </div>
    <div class="{`card__info__back ${validCard ? 'card__info__back-bkg--valid' : 'card__info__back-bkg--invalid'}`}">
      {#if $cardStore.cardSecurityCode}
        <p>{$cardStore.cardSecurityCode}</p>
      {:else}
        <p>* * *</p>
      {/if}

    </div>
  </div>
</div>

<style lang="postcss">
  .card {
    margin-top: 31px;
    width: 365px;
    height: 224px;
    @apply cursor-pointer;

    &:hover .card__info{
      transform: rotateY(180deg);
    }

    &__info {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;

      &__front, &__back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      
      &__front {
        &-bkg {
          &--invalid {
            background-image: url("../../assets/frontEmptyCard.svg");
            background-repeat: no-repeat;
            background-position: left top;
            background-size: cover;
          }

          &--valid {
            background-image: url("../../assets/frontValidCard.svg");
            background-repeat: no-repeat;
            background-position: left top;
            background-size: cover;
          }
        }

        &__invalid {
          padding: 0 27px 0 23px;

          &__number {
            margin-top: 104.5px;

            p {
              letter-spacing: .4px;
              text-shadow: 0px 1px 2px #000000B3;
              font-size: 24px;
              line-height: 27px;
              @apply text-white text-justify uppercase;
            }
          }

          &__name {
            margin-top: 34px;
            @apply flex justify-between;

            p {
              text-shadow: 0px 1px 2px #000000B3;
              @apply text-base text-white uppercase;
            }
          }

          .card__info__front__valid__brand {
            @apply hidden;
          }
        }

        &__valid {
          padding: 27px 36px;

          &__brand {
            width: 70px;
            height: 44px;

            img {
              @apply w-full h-full object-contain;
            }
          }

          &__number {
            margin-top: 30px;

            p {
              letter-spacing: 2.8px;
              text-shadow: 0px 1px 2px #000000B3;
              font-size: 22px;
              line-height: 28px;
              @apply text-white text-justify uppercase;
            }
          }

          &__name {
            margin-top: 34px;
            @apply flex justify-between;

            p {
              text-shadow: 0px 1px 2px #000000B3;
              @apply text-base text-white uppercase;
            }
          }
        }
      }

      &__back {
        transform: rotateY(180deg);

        &-bkg {
          &--invalid {
            background-image: url("../../assets/backEmptyCard.svg");
            background-repeat: no-repeat;
            background-position: left top;
            background-size: cover;
          }

          &--valid {
            background-image: url("../../assets/backValidCard.svg");
            background-repeat: no-repeat;
            background-position: left top;
            background-size: cover;
          }
        }

        p {
          position: relative;
          top: 106px;
          left: 50%;
          font: normal normal normal 19px/28px SF Pro Text;
          letter-spacing: -0.57px;
          width: 40px;  
        }
      }

      &--invalid {

      }
    }
  }

  @screen md {
    .card {
      width: 280px;
      height: 172.5px;
      margin-top: 16px;

      &__info {
        &__front {
          padding: 0 14px;

          &__invalid {
            &__number {
              margin-top: 78px;

              p {
                letter-spacing: .6px;
                text-shadow: 0px 1px 2px #000000B3;
                font-size: 19px;
                line-height: 20px;
                @apply text-white text-justify uppercase;
              }
            }

            &__name {
              margin-top: 26px;
              @apply flex justify-between;

              p {
                text-shadow: 0px 1px 2px #000000B3;
                @apply text-xs text-white uppercase;
              }
            }
          }

          &__valid {
            padding: 27px 14px;

            &__brand {
              width: 54px;
              height: 30px;

              img {
                @apply object-contain;
              }
            }

            &__number {
              margin-top: 24px;

              p {
                letter-spacing: 3.52px;
                text-shadow: 0px 1px 2px #000000B3;
                font-size: 19px;
                line-height: 21px;
                @apply text-white text-justify uppercase;
              }
            }

            &__name {
              margin-top: 26px;
              @apply flex justify-between;

              p {
                text-shadow: 0px 1px 2px #000000B3;
                @apply text-xs text-white uppercase;
              }
            }
          }
        }

        &__back {
          p {
            position: relative;
            top: 84px;
            left: 50%;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.57px;
            width: 40px;  
          }
        }
      }
    }
  }

  @screen sm {
    .card {
      width: 280px;
      height: 172.5px;
      margin-top: 16px;

      &__info {
        &__front {
          padding: 0 14px;

          &__invalid {
            &__number {
              margin-top: 78px;

              p {
                letter-spacing: .6px;
                text-shadow: 0px 1px 2px #000000B3;
                font-size: 19px;
                line-height: 20px;
                @apply text-white text-justify uppercase;
              }
            }

            &__name {
              margin-top: 26px;
              @apply flex justify-between;

              p {
                text-shadow: 0px 1px 2px #000000B3;
                @apply text-xs text-white uppercase;
              }
            }
          }

          &__valid {
            padding: 27px 14px;

            &__brand {
              width: 54px;
              height: 30px;

              img {
                @apply object-contain;
              }
            }
            &__number {
              margin-top: 24px;

              p {
                letter-spacing: 3.52px;
                text-shadow: 0px 1px 2px #000000B3;
                font-size: 19px;
                line-height: 21px;
                @apply text-white text-justify uppercase;
              }
            }

            &__name {
              margin-top: 26px;
              @apply flex justify-between;

              p {
                text-shadow: 0px 1px 2px #000000B3;
                @apply text-xs text-white uppercase;
              }
            }
          }
        }

        &__back {
          p {
            position: relative;
            top: 84px;
            left: 50%;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.57px;
            width: 40px;  
          }
        }
      }
    }
  }

  @screen xs {
    .card {
      width: 280px;
      height: 172.5px;
      margin-top: 16px;

      &__info {
        &__front {
          padding: 0 14px;

          &__invalid {
            &__number {
              margin-top: 78px;

              p {
                letter-spacing: .6px;
                text-shadow: 0px 1px 2px #000000B3;
                font-size: 19px;
                line-height: 20px;
                @apply text-white text-justify uppercase;
              }
            }

            &__name {
              margin-top: 26px;
              @apply flex justify-between;

              p {
                text-shadow: 0px 1px 2px #000000B3;
                @apply text-xs text-white uppercase;
              }
            }
          }

          &__valid {
            padding: 27px 14px;

            &__brand {
              width: 54px;
              height: 30px;

              img {
                @apply object-contain;
              }
            }

            &__number {
              margin-top: 24px;

              p {
                letter-spacing: 3.52px;
                text-shadow: 0px 1px 2px #000000B3;
                font-size: 19px;
                line-height: 21px;
                @apply text-white text-justify uppercase;
              }
            }

            &__name {
              margin-top: 26px;
              @apply flex justify-between;

              p {
                text-shadow: 0px 1px 2px #000000B3;
                @apply text-xs text-white uppercase;
              }
            }
          }
        }

        &__back {
          p {
            position: relative;
            top: 84px;
            left: 50%;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.57px;
            width: 40px;  
          }
        }
      }
    }
  }
</style>
