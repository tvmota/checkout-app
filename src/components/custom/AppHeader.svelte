<script lang="ts">
  import logo from '../../assets/logo.svg';
</script>

<header class="app-header">
  <div class="app-header-container 2xl:justify-between xl:justify-between lg:justify-center md:justify-center sm:justify-center xs:justify-center">
    <div>
      <img class="inline-block w-64 h-10" src={logo} alt="Svelte Logo" />
    </div>
    <nav class="app-header__nav opacity-50 2xl:flex xl:flex hidden">
      <span class="app-header__nav--links"></span>
      <span class="app-header__nav--links"></span>
      <span class="app-header__nav--links"></span>
      <span class="app-header__nav--links"></span>
      <span class="app-header__nav--links"></span>
    </nav>
  </div>
</header>

<style lang="postcss">
  .app-header {
    grid-area: 1 / 1 / 2 / 6;
    border-bottom: 1px solid #B2B2B2;
    @apply flex flex-wrap items-center justify-center w-full;
  }

  .app-header__nav span:not(:last-child) {
    margin-right: 10px;
  }

  .app-header-container {
    width: 1365px;
    @apply flex flex-wrap items-center;
  }

  .app-header__nav--links {
    @apply block;
    width: 100px;
    height: 18px;
    border-radius: 5px;
    background: #3C3C3C 0% 0% no-repeat padding-box;
  }

  @screen xl {
    .app-header-container {
      width: 1038px;
    }
  }
</style>
