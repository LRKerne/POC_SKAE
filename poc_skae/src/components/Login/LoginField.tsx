import * as React from "react"
import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import {TextFieldProps} from "@material-ui/core/TextField/TextField";

export const LoginField: React.FC<FieldProps & TextFieldProps> = ({ 
  placeholder, 
  field
}) =>{
  return <TextField placeholder={placeholder} {...field}/>;
};