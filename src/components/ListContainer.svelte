<script>
import ListComponent from "./ListComponent.svelte";
export let eventItems;
</script>

<div class="ListContainer">
  {JSON.stringify(eventItems)}
  {#each eventItems as item}
    <ListComponent title={item.title} description={item.description} />
  {/each}
</div>

<style>
.ListContainer {
  max-width: 100%;
  max-height: 30rem;
  overflow-y: auto;
}
</style>
