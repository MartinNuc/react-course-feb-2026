import { useContext } from "react";
import { UserContext } from "./UserContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import React from "react";

const initialValues = {
    username: '',
    password: ''
}

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})

export const LoginForm = React.memo(function LoginForm() {
    const { login } = useContext(UserContext);

    return <Formik onSubmit={(values) => login(values.username, values.password)} validationSchema={schema} initialValues={initialValues}>
        <Form>
            <div>
                <Field name="username" />
                <ErrorMessage name="username" component="div" />
            </div>

            <div>
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Login</button>
        </Form>
    </Formik>
});