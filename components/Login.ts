import { Button, HStack, Input } from "@chakra-ui/react";
import { addDoc, collection, query } from "firebase/firestore";
import { Formik } from "formik";
import { FormEventHandler, useState } from "react";
import { Task } from "../../types"
import { db } from "../../util/firebase"

const Login = () => {
  const [input, setInput] = useState("");

  const login: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setInput("");
  };

  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Formik
      initialValues= {{ name: "Sasuke" }
}
onSubmit = {(values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
}}
    >
  {(props) => (
    <Form>
    <Field name= "name" validate = { validateName } >
      {({ field, form }) => (
        <FormControl isInvalid= { form.errors.name && form.touched.name } >
        <FormLabel htmlFor="name" > First name < /FormLabel>
          < Input {...field } id = "name" placeholder = "name" />
            <FormErrorMessage>{ form.errors.name } < /FormErrorMessage>
            < /FormControl>
            )}
</Field>
  < Button
mt = { 4}
colorScheme = "teal"
isLoading = { props.isSubmitting }
type = "submit"
  >
  Submit
  < /Button>
  < /Form>
      )}
</Formik>
  );
};

export default Login;
