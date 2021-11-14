<script lang="ts">
let inputEmail = "";
let inputPassword = "";
</script>

<div class="LoginPage">
  <h1 style="text-align:left">log in</h1>

  <div class="form-floating mb-3">
    <input
      type="email"
      class="form-control"
      id="inputEmail"
      placeholder="name@example.com" />
    <label for="floatingInput">email address</label>
  </div>
  <div class="form-floating">
    <input
      type="password"
      class="form-control"
      id="inputPassword"
      placeholder="Password" />
    <label for="floatingPassword">password</label>
  </div>

  <a href="/"> Login </a>
</div>

<style>
h1 {
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: 90;
}

a:link,
a:visited {
  background-color: #008cba;
  color: white;
  border: none;
  padding: 15px 40px;
  text-align: left;
  text-decoration: none;
  display: block;
  border-radius: 12px;
  margin-left: -10;
}
a:hover,
a:active {
  background-color: #f44336;
}

.LoginPage {
  margin-top: 15rem;
  padding-top: 0rem;
  margin-bottom: 25rem;
  margin-left: 50rem;
  margin-right: 50rem;
}
.form-floating {
  margin-bottom: 2rem;
}

.form-floating {
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: grey;
}
</style>
