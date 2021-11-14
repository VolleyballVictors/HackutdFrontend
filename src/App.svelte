<script>
import Router, { location, link } from "svelte-spa-router";
import Home from "./Home.svelte";
import Test from "./Test.svelte";
import Event from "./Event.svelte";
</script>

<main>
  <div class="Router">
    <Router
      routes={{
        "/": Home,
        "/test": Test,
        "/event/:eventid": Event,
      }} />
  </div>
</main>

<style>
main {
  text-align: center;
  max-width: none;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>
