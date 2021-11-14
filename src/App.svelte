<script>
import Router, { location, link } from "svelte-spa-router";
import Home from "./Home.svelte";
import Test from "./Test.svelte";
import Event from "./Event.svelte";
import Login from "./Login.svelte";
import Signup from "./Signup.svelte";
import { wrap } from "svelte-spa-router/wrap";
import Profile from "./Profile.svelte";
import Team from "./Team.svelte";

import { User } from "./store/User.js";

let user = {};

User.subscribe((value) => {
  user = value;
});

async function isLoggedIn() {
  if (user.email && user.email != "") {
    return true;
  } else {
    return false;
  }
}
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
        "/login": Login,
        "/signup": Signup,
        "/profile": Profile,
        "/event/:eventid/team/:teamid": wrap({
          component: Team,
          conditions: [
            async (detail) => {
              const response = await isLoggedIn();
              if (!response) {
                window.location = "/#/login";
                return false;
              } else {
                return true;
              }
            },
          ],
        }),
        "/event/:eventid": Event,
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
