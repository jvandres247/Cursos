import { render, fireEvent } from "@testing-library/react"
import SignUp from "../../pages/SignUp"

describe('Sign up page test', ()=>{

    describe('Layout', ()=> {
        test('La pagina de registro tiene un input para el email', ()=>{
            const rendered = render(<SignUp/>);
            const { container } = rendered;
            const emailInput = container.querySelector('#email');
            expect(emailInput).toBeInTheDocument();
        })

        test('La pagina de registro tiene un input para el password', ()=>{
            const rendered = render(<SignUp/>);
            const { container } = rendered;
            const passwordInput = container.querySelector('#password');
            expect(passwordInput).toBeInTheDocument();
        })

        test('La pagina de registro tiene un boton para enviar el formulario', ()=>{
            const rendered = render(<SignUp/>);
            const { container } = rendered;
            const btnRegisterdInput = container.querySelector('#btnRegister');
            expect(btnRegisterdInput).toBeInTheDocument();
        })

        test('La pagina de registro tiene un label para el email', ()=>{
            const rendered = render(<SignUp/>);
            const { queryByText } = rendered;
            const labelEmail = queryByText('Correo electronico');
            expect(labelEmail).toBeInTheDocument();
        })

        test('La pagina de registro tiene un label para la contraseña', ()=>{
            const rendered = render(<SignUp/>);
            const { queryByText } = rendered;
            const labelPassword = queryByText('Contraseña');
            expect(labelPassword).toBeInTheDocument();
        })

        test('La pagina de registro tiene un titulo de crear cuenta', ()=>{
            const rendered = render(<SignUp/>);
            const { container } = rendered;
            const title = container.querySelector("h3");
            expect(title.textContent).toBe('Crear cuenta');
        })
    })

    describe('Functionality', () => {

        const changeEvent = (value) => {
            return {
                target: {
                    value
                }
            }
        }

        let emailInput, passwordInput, signUpButton;

        const setupForSubmit = (emailValue="test@test.com", passwordValue="P4sswo0rd") => {
            const rendered = render(<SignUp/>);
            const { container } = rendered;
            emailInput = container.querySelector('#email');
            fireEvent.change(emailInput, changeEvent(emailValue));

            passwordInput = container.querySelector('#password');
            fireEvent.change(passwordInput, changeEvent(passwordValue));

            signUpButton = container.querySelector('#btnRegister');

            return rendered;
        }

        test('El input del email tiene el valor del state', ()=> {
            const { container } = render(<SignUp/>);
            const emailInput = container.querySelector('#email');
            fireEvent.change(emailInput, changeEvent("prueba"));
            expect(emailInput).toHaveValue('prueba');
            
        })

        test('El input del password tiene el valor del state', ()=> {
            const { container } = render(<SignUp/>);
            const passwordInput = container.querySelector('#password');
            fireEvent.change(passwordInput, changeEvent("p4ss"));
            expect(passwordInput).toHaveValue('p4ss');
            
        })

        test('Click en signUp y email es invalido, mostrar el error', () => {
            const {queryByText} = setupForSubmit("");
            fireEvent.click(signUpButton);
            const error = queryByText("El correo electronico no es valido");
            expect(error).toBeInTheDocument();
        })

        test('Click en signUp y password es invalido, mostrar el error', () => {
            const {queryByText} = setupForSubmit("andres@andres.com", "");
            fireEvent.click(signUpButton);
            const error = queryByText("El password debe ser entre 6 y 30 caracteres");
            expect(error).toBeInTheDocument();
        })

        test('Click en signUp limpiar errores de validacion', () => {
            const {queryByText} = setupForSubmit("andres@andres.com", "");
            fireEvent.click(signUpButton);
            fireEvent.change(passwordInput, changeEvent("P4ssw0rd"));
            fireEvent.click(signUpButton);
            const error = queryByText("El password debe ser entre 6 y 30 caracteres");
            expect(error).not.toBeInTheDocument();
        })
    })
})