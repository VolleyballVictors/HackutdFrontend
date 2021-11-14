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
    <a href="/#/Login">Login</a>
    <a href="/#/Signup">Sign Up!</a>
    <a href="/#/event/hackutd">HackUTD event page</a>
    <a href="/#/Profile">Profile</a>
  </nav>
  <div class="Router">
    <Router
      routes={{
        "/": Home,
        "/test": Test,
        "/event/:eventid": Event,
        "/login": Login,
        "/signup": Signup,
        "/profile": Profile,
      }} />
  </div>
</main>

<style>
main {
  text-align: center;
  max-width: none;
}

nav {
  margin: 50;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>
