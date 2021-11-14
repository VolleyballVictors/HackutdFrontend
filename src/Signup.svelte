<script lang="ts">
  import { Card, CardBody } from 'sveltestrap';
  import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  let radioGroup;
  import { Button } from 'sveltestrap';

  const color = 'secondary';

</script>

<h1 style = "text-align:left">
  Sign up
</h1>


<Form>
 <FormGroup>
   <Label for="exampleEmail">Email</Label>
   <Input
     type="email"
     name="email"
     id="exampleEmail"
     placeholder=""
   />
 </FormGroup>

 <FormGroup>
   <Label for="examplePassword">Password</Label>
   <Input
     type="password"
     name="password"
     id="examplePassword"
     placeholder="Password must be 8 characters long."
   />
 </FormGroup>

 <FormGroup>
  <Label for="exampleUsername">Username</Label>
  <Input
    type = "Username"
    name = "Username"
    id = "exampleUser"
    placeHolder = "......"
  />
 </FormGroup>
</Form>

<button type="button" class="btn btn-primary btn-lg disabled">Let's go!</button>
