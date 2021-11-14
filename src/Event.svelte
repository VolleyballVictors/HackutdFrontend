<script>
//Will need to be passed jsom object of event

//export let public;
let event = {};
export let params;
import { Button, Icon } from "sveltestrap";
import { onMount } from "svelte";
import { getEvent } from "./helper/API";
onMount(async () => {
  if (params.eventid) {
    event = await getEvent(params.eventid);
    console.log(event);
  }
});
</script>

<div id="join">
  <Button>Join Event</Button>
</div>

<div>
  <h1>{event?.title}</h1>
</div>

<div>
  <p>{event?.description}</p>
</div>

<div>
  {JSON.stringify(event)}
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
