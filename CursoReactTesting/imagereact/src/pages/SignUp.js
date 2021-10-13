import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import { signUpFirebase } from "../firebase/auth/functions";
import { SignUpValidation } from "../validations/validation";


const SignUp = ({ signUp = signUpFirebase  }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})

    const createAccount = (e) => {
        e.preventDefault();
        console.log({Email: email, Password: password});

        setErrors({});

        try {
            const validation = SignUpValidation(email, password);
            if(!validation.isValid){
                setErrors(validation.errors)
                return;
            }

            signUp(email, password)
            // enviar la peticion para registro
        } catch (error) {
            console.log("Error!");
        }
    }

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-m6 col-sm-10 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h3>Crear cuenta</h3> <hr />
                            <form onSubmit={createAccount}>
                                <InputComponent 
                                    id="email" 
                                    labelText="Correo electronico" 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={errors.email}
                                />

                                <InputComponent 
                                    id="password" 
                                    labelText="Contraseña" 
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={errors.password}
                                />

                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary" id="btnRegister">Crear Cuenta</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
