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
</script>

<div class="grid-container">
  <div class="grid-item" id="dropdown">
    <ButtonDropdown>
      <DropdownToggle color="primary" caret>:</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  </div>
  <div class="grid-item" id="topnav">
    <input type="text" placeholder="Search.." />
  </div>
  <div class="grid-item">Home</div>
</div>

<div class="ListContainer">
  {#each events as item}
    <ListComponent title={item.title} description={item.description} />
  {/each}
</div>

<br />

<div class="ListContainer">
  {#each events as item}
    <ListComponent title={item.title} description={item.description} />
  {/each}
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
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
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
    margin: 0;
    padding: 14px;
    color: black;
  }
  #topnav input[type="text"] {
    border: 1px solid rgb(14, 13, 13);
  }
}

.ListContainer {
  max-width: 100%;
  max-height: 30rem;
  overflow-y: auto;
}

#dropdown {
  float: right;
}
</style>
