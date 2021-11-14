<script>
import { Button, Icon } from "sveltestrap";

export let title;
export let description;
export let event_id;
</script>

<div class="ListComponent" />
<div class="card">
  <div class="grid-container">
    <div class="grid-item" id="title">
      <a href={"/#/event/" + event_id}><h2>{title}</h2></a>
    </div>

    <div class="grid-item" id="joinButton">
      <Button>Join</Button>
    </div>
  </div>
  <p>{description}</p>
</div>

<style>
.card {
  position: relative;
  margin: 0.5em;
  padding: 0;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 5em;
}

.card::after {
  clear: both;
  display: block;
}

h2 {
  text-align: left;
  margin: 0 0 0.5em 0;
  font-size: 24px;
  font-weight: 400;
}

p {
  text-align: left;
  margin: 0;
  font-size: 14px;
}

a {
  text-decoration: none;
}

#title {
  float: left;
}

#joinButton {
  margin-right: 2rem;
  margin-top: 1rem;
  width: 2rem;
  height: 2rem;
  float: right;
}
</style>
