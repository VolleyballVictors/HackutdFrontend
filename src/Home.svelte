<script>
import { Button, Icon } from "sveltestrap";
import Card from "./components/Card.svelte";
import ListComponent from "./components/ListComponent.svelte";
import { events } from "./sample/events";

import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "sveltestrap";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap";
let open = false;
const toggle = () => (open = !open);

function getEventID(pin) {
  //events["pin" == pin];
  return "undefined";
}
function addPrivilege(user, eventID) {
  //give user access to the private event
}
function navigateToEvent(eventID) {
  //goto eventID page
  window.location = "/#/event/" + "undefined";
}

function navigateToLogin() {
  window.location = "/#/Login";
}

function navigateToSignup() {
  window.location = "/#/Signup";
}

</script>

<br />

<div class="recommended">
  Recommended
  {#each events as item}
    <ListComponent title={item.title} description={item.description} />
  {/each}
</div>

<br />

<div class="grid-container">
  <div class="grid-item" id="events">
    Events
    {#each events as item}
      <ListComponent title={item.title} description={item.description} />
    {/each}
  </div>

  <div class="grid-item" id="projects">
    Projects
    {#each events as item}
      <ListComponent title={item.title} description={item.description} />
    {/each}
  </div>
</div>

<style>
#topnav {
  overflow: hidden;
  border: black;
}

/* Style the search box inside the navigation bar */
#topnav input[type="text"] {
  float: left;
  border: black;
  font-size: 17px;
  color: black;
}

#events {
  float: left;
  max-width: 50%;
  max-height: 25rem;
  overflow-y: auto;
}
#projects {
  float: right;
  max-width: 50%;
  max-height: 25rem;
  overflow-y: auto;
}

#dropdown {
  float: right;
}

.recommended {
  max-height: 15rem;
  overflow-y: auto;
}
</style>
