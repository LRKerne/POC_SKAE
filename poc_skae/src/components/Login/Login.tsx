import { Button } from "@material-ui/core";
import { LoginField } from "./LoginField";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { LoginForm} from "./Login.styles";
import * as Yup from "yup";

interface Values {
  password: string;
  username: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const Login: React.FC<Props> = () => {
  let navigate = useNavigate();
  // function handleClick() {
  //   navigate("/quiz");
  // }
  return (
    <LoginForm>
      <h1>Login</h1>
      
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .required("Required"),

            password: Yup.string()
            .required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            if (
              values.password && values.username === "admin"
            ){navigate("/quiz");}

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          dirty,
          handleReset,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <Field
                name="username"
                placeholder="Usuario"
                component={LoginField}
              />
            </div>
            <div>
              <Field
                name="password"
                placeholder="Senha"
                component={LoginField}
              />
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <Button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Submit
              </Button>
          </Form>
        )}
      </Formik>
    </LoginForm>
  );
};

export default Login;