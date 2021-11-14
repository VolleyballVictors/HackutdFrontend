<script>
export let team_id;
export let teammates;
export let description;
export let lookingfor;
export let student_skills;
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
</script>

<Card class="mb-3 card">
  <CardHeader>
    <CardTitle>{team_id}</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle>{teammates.length} members</CardSubtitle>
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
  <CardFooter><Button>Join</Button></CardFooter>
</Card>

<style>
.card {
  margin: 0.5rem 1rem;
}
</style>
