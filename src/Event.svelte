<script>
//Will need to be passed jsom object of event

//export let public;
let event = {};
export let params;
import { Button, Icon } from "sveltestrap";
import { onMount } from "svelte";
import { getEvent } from "./helper/API";
import { getDateString } from "./helper/date";
import Project from "./components/Project.svelte";
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

{#if event.start && event.end}
  <div>
    {getDateString(event.start)}
    -
    {getDateString(event.end)}
  </div>
{/if}

{#if event.teams && event.teams.length > 0}
  <div class="cardcontainer">
    {#each event.teams as team}
      <Project
        team_id={team.team_id}
        teammates={team.teammates}
        description={team.description}
        lookingfor={team.looking_for}
        student_skills={team.student_skills}
        maxteamsize={event.maxteamsize} />
    {/each}
  </div>
{/if}

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

.cardcontainer {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
}
</style>
