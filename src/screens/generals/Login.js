import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from './../../context/auth'
import { useForm, LOGIN_USER } from './../../utils'

function Login(props){
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: ''
    })

    const [loginUser] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData } } ){
            context.login(userData)
            props.history.push('/dashboard')
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    function loginUserCallback(){
        loginUser()
    }
    
    const medio = {
        /*
        height: '100vh',
        display: 'flex',
        */
        alignItems: 'center',
        marginTop: '100px',
        maxWidth: '500px'
    }
    
    const input1 = 'Usuario'

    return (
        <main role="main">
            <div className="container" style={medio} >
                <div className="card border-dark">
                    <div className="card-header text-center">
                        <h4>Iniciar Sesión</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={onSubmit} noValidate>
                            <p id="message"></p>
                            <div className="input-group mb-3">
                                <input type="text" autoComplete="username" name="username"
                                    className={errors.username ? "form-control is-invalid" : "form-control"}
                                    placeholder={input1}
                                    aria-label="Username" aria-describedby="username"
                                    value={values.username}
                                    onChange={onChange} 
                                    required
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" autoComplete="current-password" name="password"
                                    className={errors.password ? "form-control is-invalid" : "form-control"}
                                    placeholder="Contraseña"
                                    aria-label="Password" aria-describedby="password"
                                    value={values.password}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6 col-xl-5">
                                    <button className="btn btn-primary" type="submit" size="block" variant="success">
                                        Ingresar
                                    </button>
                                </div>
                            </div>

                        </form>

                        {
                            Object.keys(errors).length > 0 && (
                                <div className="ui error message">
                                    <ul className="list">
                                        {
                                            Object.values(errors).map((value) => (
                                                <li key={value}>{value}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                    <div className="card-footer text-muted">
                        <Link to="/">Volver atrás</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login