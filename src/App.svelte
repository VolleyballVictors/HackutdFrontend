<script>
import { Button, Icon } from "sveltestrap";
</script>

<main>
  <Button color="primary">Test</Button>
  <Button color="primary"><Icon name="layout-sidebar-inset-reverse" /></Button>
</main>

<style>
main {
  text-align: center;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>
