import React from "react";
import { Formik, Field, Form } from "formik";
import { TextInput } from  "../form";

const validateForm = (values: FormField) => {
  let errors: FormField = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  return errors;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{ name: "" }}
      validate={validateForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addTodo(values.name)
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form>
        <Field name="name" component={TextInput} />
        <button type="submit">Add Todo</button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
