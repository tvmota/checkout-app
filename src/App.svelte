<script lang="ts">
  import TailwindCSS from './TailwindCSS.svelte';
  import AppHeader from './components/custom/AppHeader.svelte';
</script>

<TailwindCSS />

<AppHeader />
<main class="app-main">
  <section>
    <h2>main</h2>
  </section>
</main>

<style>
.app-main {
  background: #f7f7f7;
  height: calc(100vh - 104px);
  grid-area: 2 / 1 / 6 / 6;
  padding: 65px 277px 0px 277px;
}
</style>