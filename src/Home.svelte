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
</script>

<div class="grid-container">
  <div class="grid-item" id="dropdown">
    <ButtonDropdown>
      <DropdownToggle color="primary" caret>Profile</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Login</DropdownItem>
        <DropdownItem>Signup</DropdownItem>
        <DropdownItem>Help</DropdownItem>
        <DropdownItem>Contact</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  </div>
  <div class="grid-item" id="topnav">
    <input type="text" placeholder="Search.." />
  </div>
  <div class="grid-item">
    <Button color="danger" on:click={toggle}>Join Code</Button>
    <Modal isOpen={open} {toggle}>
      <ModalBody>
        <input type="text" placeholder="Search.." />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          on:click={(addPrivilege("", ""), navigateToEvent(getEventID("")))}
          >Join</Button>
        <Button color="secondary" on:click={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
</div>

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
/* Add a black background color to the top navigation bar */
#topnav {
  overflow: hidden;
  border: black;
}

/* Style the search box inside the navigation bar */
#topnav input[type="text"] {
  float: left;
  border: none;
  font-size: 17px;
  color: black;
}

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
  #topnav input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    color: black;
  }
  #topnav input[type="text"] {
    border: 1px solid rgb(14, 13, 13);
  }
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
  margin: 0;
  float: right;
}

.recommended {
  max-height: 15rem;
  overflow-y: auto;
}
</style>
