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
    <a href="/#/Signup">Sign Up!</a>
    <a href="/#/event/HackUTD">HackUTD event page</a>
    <a href="/#/Profile">Profile</a>
  </nav>

  <div class="Router">
    <Router
      routes={{
        "/": Login,
        "/test": Test,
        "/event/:eventid": Event,
        "/signup": Signup,
        "/Profile": Profile,

      }} />
  </div>
</main>

<style>
main {
  text-align: center;
  padding: 0em;
  width: 100%;
}

nav {
  border-bottom: 1px solid grey;
  width:100%;
  margin: 0 0;
  margin-bottom: 0rem;
  padding: 0.5rem 0rem;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}

.Router {
margin-top: 0rem;
padding-top: 0rem;
  //padding: 1rem;
  background-color: white;
}
</style>
