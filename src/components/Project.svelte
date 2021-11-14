<script>
export let team_id;
export let teammates;
export let description;
export let lookingfor;
export let student_skills;
export let maxteamsize = -1;
export let eventid;
import { ListGroup, ListGroupItem } from "sveltestrap";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
} from "sveltestrap";
import Chips from "./chips.svelte";

function joinTeam() {
  window.location = "/#/event/" + eventid + "/team/" + team_id;
}
</script>

<Card class="mb-3 card">
  <CardHeader>
    <CardTitle>{team_id}</CardTitle>
  </CardHeader>
  <CardBody>
    {#if maxteamsize && maxteamsize > -1}
      <CardSubtitle>{teammates.length}/{maxteamsize} members</CardSubtitle>
    {:else}
      <CardSubtitle>{teammates.length} members</CardSubtitle>
    {/if}

    <CardText>
      {description}
    </CardText>
    <CardText>
      Looking for: <Chips arr={[...lookingfor]} />
    </CardText>
    <ListGroup>
      {#each teammates as teammate}
        <ListGroupItem>
          <a href={"mailto: " + teammate}>{teammate}</a><br />
          Skills: <Chips arr={student_skills[teammate]} />
        </ListGroupItem>
      {/each}
    </ListGroup>
  </CardBody>
  <CardFooter
    ><Button
      disabled={teammates.length / maxteamsize === 1}
      on:click|once={joinTeam}>Join</Button
    ></CardFooter>
</Card>

<style>
.card {
  margin: 0.5rem 1rem;
  max-width: 360px;
}
</style>
