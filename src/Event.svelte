<script>
//Will need to be passed jsom object of event

//export let public;
export let title;
export let description;
export let maxteamsize;
export let maxparticipants;
export let start;
export let end;
export let owner;
export let teams;
export let tags;

import { Button, Icon } from "sveltestrap";
</script>

<div id="join">
  <Button>Join Event</Button>
</div>

<div>
  <h1>{title}</h1>
</div>

<div>
  <p>{description}</p>
</div>

<style>
p {
  font-size: medium;
  text-align: left;
}
h1 {
  text-align: left;
}
#join {
  float: right;
  margin: 2rem;
}
</style>
