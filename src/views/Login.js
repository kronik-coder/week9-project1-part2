import React, { Component } from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router';

const formSchema = Yup.object().shape({
    "email": Yup.string().email("Must be valid e-mail format").required("Required"),
    "password": Yup.string().required("Required")
})

const initialValues = {
    email: '',
    password: ''
}

export default class Login extends Component {

    constructor(){
        super();
        this.state={
            error: '',
            redirect: false
        };
    }



    render() {
        const styles={
            error:{color: 'red'}
        }
        return (
            <div>
                {this.state.redirect ? <Navigate to={{pathname:'/'}}/> : ''}
                <Formik
                    initialValues={initialValues}
                    validationSchema={formSchema}
                    onSubmit={(values)=>{console.log(values); this.handleSubmit(values)}}
                >
                        {
                            ({errors, touched})=>(
                                <Form>
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field name="email" className="form-control" />
                                    {errors.email && touched.email ? (<div style={styles.error}>{errors.email}</div>) : null}

                                    <label htmlFor="password" className="form-label">Password</label>
                                    <Field name="password" className="form-control" type="password" />
                                    {errors.password && touched.password ? (<div style={styles.error}>{errors.password}</div>) : null}
                                    <small style={styles.error}>{this.state.error}</small>
                                    <br/>
                                    <Button type="submit">Login</Button>
                                </Form>
                            )
                        }

                    </Formik>
            </div>
        )
    }
}
