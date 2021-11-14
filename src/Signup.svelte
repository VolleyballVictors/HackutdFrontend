<script lang="ts">
  import { Card, CardBody } from 'sveltestrap';
  import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  let radioGroup;
  import { Button } from 'sveltestrap';

  const color = 'secondary';

</script>



<style>

body{
  margin-left: 25rem;
  margin-right: 10rem;
  height: 100%;
  margin: 0;
}

h3{
  text-align: left;
  font-size: 1.5em;
  margin-top: 2em;
}

h1{
  font-size: 4em;

}

a:link, a:visited {
  background-color: #008CBA;
  color: white;
  border: none;
  padding: 15px 40px;
  text-align: left;
  text-decoration: none;
  display: block;
  position: absolute;
  justify-content: flex-start;
  border-radius:12px;
}
a:hover, a:active {
  background-color: #f44336;
}

.SignupPage{
margin-top: 10rem;
padding-top: 0rem;
margin-bottom:10rem;
margin-left: 20rem;
margin-right: 20rem;
}

.form-floating{
  margin-top: 3rem;
  margin-bottom:3rem;
  color: grey;
    //height: 100px;
}

</style>

<div class="SignupPage">

<h1 style = "text-align:left">
  create your account
</h1>


<div class="form-floating">
  <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com">
  <label for="floatingInput">email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="inputPassword" placeholder="Password">
  <label for="floatingPassword">password</label>
</div>

<div class="form-floating">
  <input type="Username" class="form-control" id="inputUsername" placeholder="Username">
    <label for="floatingInput">username</label>
</div>

<a href="/#/">
  Let's go!
</a>

</div>
