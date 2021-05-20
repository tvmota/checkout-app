<script lang="ts">
  let valueParcels = '';
</script>

<form>
  <div class="form__control">
    <input type="text" name="cardNumber" placeholder="" required/>
    <label for="cardNumber">Número do cartão</label>
    <span class="form__control--error" id="error">Número do cartão inválido</span>
  </div>
  <div class="form__control">
    <input type="text" name="clientName" placeholder="" required/>
    <label for="clientName">Nome (Igual ao cartão)</label>
    <span class="form__control--error" id="error">Insira seu nome completo</span>
  </div>
  <div class="flex">
    <div class="form__control w-1/2">
      <input type="text" name="cardValidity" placeholder="" required/>
      <label for="cardValidity">Validade</label>
      <span class="form__control--error" id="error">Data inválida</span>
    </div>
    <div class="form__control w-1/2 ml-4">
      <input placeholder="" name="cardSecurityCode" type="text" required>
      <label for="cardSecurityCode">CVV</label>
      <span class="form__control--error" id="error">Código inválido</span>
    </div>
  </div>
  <div class="form__control">
    <select bind:value={valueParcels} class="{!valueParcels && 'disabled--option'}">
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
  </div>
  <div class="form__submit">
    <button type="button">Continuar</button>
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
      @apply relative z-0 w-full mb-5;

      input, select {
        border-color: #C9C9C9;
        @apply pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none;

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
        @apply text-sm text-red-600 hidden;
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