<script>
export let arr;
</script>

{#each arr as a}
  <div class="chip">{a}</div>
{/each}

<style>
.chip {
  display: inline-block;
  background: lightgrey;
  padding: 0 12px;
  border-radius: 32px;
  font-size: 13px;
  margin: 0 2px;
}

.chip:hover {
  background-color: rgb(172, 201, 201);
}
</style>
