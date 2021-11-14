<script>
export let title;
export let description;
export let event_id;
</script>

<div class="ListComponent" />

<div class="card">
  <a href={"/#/event/" + event_id}><h2>{title}</h2></a>
  <p>{description}</p>
</div>

<style>
.card {
  position: relative;
  margin: 0.5em;
  padding: 0.5em 0.5em 0.5em 6em;
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
  font-size: 32px;
}

p {
  text-align: left;
  margin: 0;
  font-size: 14px;
}
</style>
