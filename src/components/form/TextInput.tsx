import React from "react";
import { FieldProps } from "formik";

const TextInput: React.FC<FieldProps> = ({
  field,
  form: { touched, errors },
  meta,
  ...props
}) => {
  return (
    <div>
      <label>Demo</label>
      <input type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default TextInput;
