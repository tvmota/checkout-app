<script lang="ts">
  import Payment from 'payment';
  import { onMount } from 'svelte';
  import { formSchema } from './formSchema';
  import { cardStore } from '../../../store/CardStore';

  let values = {};
  let errors = {}

  onMount(() => {
    const {
      formatCardNumber,
      formatCardExpiry,
      formatCardCVC,
    } = Payment;

    formatCardNumber(document.getElementById('cardNumber'));
    formatCardExpiry(document.getElementById('cardValidity'));
    formatCardCVC(document.getElementById('cardSecurityCode'));
  });

  const extractErrors = err => {
    return err.inner.reduce((acc, err) => {
      return { ...acc, [err.path]: err.message };
    }, {});
  };

  const submitHandler = () => {
    formSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        cardStore.set(Object.assign(values, {
          cardNumber: Payment.fns.formatCardNumber(values.cardNumber),
        }));
      })
      .catch(err => (errors = extractErrors(err)));
  }

  const clearError = (evt) => {
    if (errors[evt.target.name]) {
      errors[evt.target.name] = null;
    }

    console.log(values, Payment.fns.cardType(values.cardNumber));
    cardStore.set(Object.assign(values, {
      cardNumber: Payment.fns.formatCardNumber(values.cardNumber),
    }));
  }
</script>

<form on:submit|preventDefault={submitHandler} novalidate autocomplete="off">
  <div class="form__control mt-5">
    <input
      bind:value={values.cardNumber}
      type="text"
      name="cardNumber"
      id="cardNumber"
      placeholder=""
      on:blur={clearError}
      class={errors.cardNumber && 'form__control--error'}
      pattern="\d*"/>
    <label for="cardNumber">Número do cartão</label>
    <span class="{`form__control--error-msg ${errors.cardNumber ? 'visible' : 'invisible'}`}">
      {errors.cardNumber}
    </span>
  </div>
  <div class="form__control mt-5">
    <input
      bind:value={values.clientName}
      type="text"
      name="clientName"
      placeholder=""
      on:blur={clearError}
      class={errors.clientName && 'form__control--error'}/>
    <label for="clientName">Nome (Igual ao cartão)</label>
    <span class="{`form__control--error-msg ${errors.clientName ? 'visible' : 'invisible'}`}">
      {errors.clientName}
    </span>
  </div>
  <div class="flex mt-5">
    <div class="form__control w-1/2">
      <input
        bind:value={values.cardValidity}
        type="tel"
        name="cardValidity"
        id="cardValidity"
        placeholder=""
        on:blur={clearError}
        class={errors.cardValidity && 'form__control--error'}
        pattern="\d*"/>
      <label for="cardValidity">Validade</label>
      <span class="{`form__control--error-msg ${errors.cardValidity ? 'visible' : 'invisible'}`}">
        {errors.cardValidity}
      </span>
    </div>
    <div class="form__control w-1/2 ml-4">
      <input
        bind:value={values.cardSecurityCode}
        placeholder=""
        name="cardSecurityCode"
        id="cardSecurityCode"
        type="text"
        maxlength="3"
        on:blur={clearError}
        class={errors.cardSecurityCode && 'form__control--error'}
        pattern="\d*"/>
      <label for="cardSecurityCode">CVV</label>
      <span class="{`form__control--error-msg ${errors.cardSecurityCode ? 'visible' : 'invisible'}`}">
        {errors.cardSecurityCode}
      </span>
    </div>
  </div>
  <div class="form__control mt-5">
    <select
      name="numberParcels"
      bind:value={values.numberParcels}
      class="{`${!values.numberParcels && 'disabled--option'} ${errors.numberParcels && 'form__control--error'}`}">
        <option value="" disabled selected>Número de parcelas</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    <span class="{`form__control--error-msg ${errors.numberParcels ? 'visible' : 'invisible'}`}">
      {errors.numberParcels}
    </span>
  </div>
  <div class="form__submit mt-5">
    <button type="submit">Continuar</button>
  </div>
</form>

<style lang="postcss">
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value='']):valid ~ label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
  }

  input:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    left: 0px;
  }

  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  .disabled--option {
    color: #C9C9C9;
  }

  .form {
    &__control {
      @apply relative z-0 w-full;

      input, select {
        border-color: #C9C9C9;
        padding: 5px 0;
        @apply block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none;

        &:focus {
          @apply outline-none ring-0;
        }
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
        background-color: transparent;
        background-image: url('../../assets/chevronDown.svg');
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: 18px 20px, 100%;
        outline: none;
        cursor: pointer;
      }

      label {
        color: #C9C9C9;
        @apply absolute duration-300 top-3 -z-1 origin-0;
      }

      &--error {
        border-color: rgba(239, 68, 68) !important;

        &-msg {
          @apply text-sm text-red-600;
        }
      }
    }

    &__submit {
      margin-top: 62px;
      @apply text-right;

      button {
        font-size: 17px;
        line-height: 22px;
        padding: 16px 72px;
        @apply bg-primary rounded-xl text-white font-semibold uppercase;
      }
    }
  }
</style>