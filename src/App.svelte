<script>
import Router, { location, link } from "svelte-spa-router";
import Home from "./Home.svelte";
import Test from "./Test.svelte";
import Event from "./Event.svelte";
import Login from "./Login.svelte";
import Signup from "./Signup.svelte";
import Profile from "./Profile.svelte";
</script>



<main>
  <nav>
    <a href="/">Home</a>
    <a href="/#/Test">Test</a>
    <a href="/#/event/HackUTD">HackUTD event page</a>
  </nav>
  outside the router
  <div class="Router">
    <Router
      routes={{
        "/": Signup,
        "/test": Test,
        "/event/:eventid": Event,

      }} />
  </div>
</main>

<style>
main {
  text-align: center;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
  background-color: darkgrey;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}

.Router {
  border: 1px solid black;
  padding: 1rem;
  background-color: white;
}
</style>
