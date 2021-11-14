<script lang="ts">

  let inputEmail = '';
  let inputPassword = '';

</script>

<h1 style = "text-align:left">
  log in
</h1>

<style>
h1{
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: 90;


}
</style>

<div class="form-floating mb-3">
  <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com">
  <label for="floatingInput">email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="inputPassword" placeholder="Password">
  <label for="floatingPassword">password</label>
</div>

<button type="button" class="btn btn-primary btn-lg disabled">Log in! </button>
