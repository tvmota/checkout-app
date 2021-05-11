<script lang="ts">
  import logo from '../../assets/logo.svg';
</script>

<header class="app-header xl:justify-between lg:justify-center md:justify-center sm:justify-center xs:justify-center">
  <div>
    <img class="inline-block w-64 h-10" src={logo} alt="Svelte Logo" />
  </div>
  <nav class="app-header__nav opacity-50 xl:flex hidden">
    <span class="app-header__nav--links"></span>
    <span class="app-header__nav--links"></span>
    <span class="app-header__nav--links"></span>
    <span class="app-header__nav--links"></span>
    <span class="app-header__nav--links"></span>
  </nav>
</header>

<style lang="postcss">
  .app-header {
    grid-area: 1 / 1 / 2 / 6;
    border-bottom: 1px solid #B2B2B2;
    @apply flex flex-wrap items-center w-full;
  }

  .app-header__nav span:not(:last-child) {
    margin-right: 10px;
  }

  .app-header__nav--links {
    @apply block;
    width: 100px;
    height: 18px;
    border-radius: 5px;
    background: #3C3C3C 0% 0% no-repeat padding-box;
  }

  @screen xl {
    .app-header {
      padding: 0 277px;
    }
  }

  @screen lg {
    .app-header {
      padding: 0 180px;
    }
  }

  @screen md {
    .app-header {
      padding: 0 180px;
    }
  }
  
  @screen sm {
    .app-header {
      padding: 0 180px;
    }
  }

  @screen xs {
    .app-header {
      padding: 0 140px;
    }
  }
</style>
