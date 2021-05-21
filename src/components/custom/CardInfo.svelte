<script lang="ts">
  import { cardStore } from '../../store/CardStore';
</script>

<div class="card">
  <div class="card__info">
    <div class="card__info__front card__info__front__valid card__info__front-bkg--valid">
      <div class="card__info__front__valid__brand">
        <img src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/f2ceac03475fe15d3fe2bf007eb634b9fc6460fd/logo-border/visa.svg" alt="visa logo">
      </div>
      <div class="card__info__front__valid__number">
        <!--p>
          * * * *&nbsp;&nbsp;
          * * * *&nbsp;&nbsp;
          * * * *&nbsp;&nbsp;
          * * * *
        </p-->
        <p>
          {$cardStore.cardNumber}
        </p>
      </div>
      <div class="card__info__front__valid__name">
        <p>FELIPE B A PIO NT</p>
        <p>06/26</p>
      </div>
    </div>
    <div class="card__info__back card__info__back-bkg--valid">
      <p>* * *</p>
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
            height: 22px;
          }

          &__number {
            margin-top: 48px;

            p {
              letter-spacing: 4.1px;
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
          top: 108px;
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
              height: 18px;
            }

            &__number {
              margin-top: 34px;

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
              height: 18px;
            }

            &__number {
              margin-top: 34px;

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
              height: 18px;
            }

            &__number {
              margin-top: 34px;

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
