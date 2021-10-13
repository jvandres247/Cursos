import { render, fireEvent } from "@testing-library/react"
import InputComponent from "../../components/InputComponent"

describe('Input component test', () =>{
    describe('Layout', ()=>{
        test('Comprobar que tiene el label', () => {
            const {container} = render(<InputComponent/>);
            const label = container.querySelector('label');
            expect(label).toBeInTheDocument();
        })

        test('Comprobar que tiene el input', () => {
            const {container} = render(<InputComponent/>);
            const input = container.querySelector('input');
            expect(input).toBeInTheDocument();
        })
    })

    describe('Functionality', () => {

        test('Acepta la propiedad type por defecto (test)', () => {
            const {container} = render(<InputComponent/>);
            const input = container.querySelector('input');
            expect(input.type).toBe('text')
        })

        test('Acepta la propiedad type', () => {
            const {container} = render(<InputComponent type="email"/>);
            const input = container.querySelector('input');
            expect(input.type).toBe('email')
        })

        test('Acepta la propiedad label text', () => {
            const {container} = render(<InputComponent labelText="prueba"/>);
            const label = container.querySelector('label');
            expect(label.textContent).toBe('prueba')
        })

        test('Acepta la propiedad id', () => {
            const {container} = render(<InputComponent id="id-de-prueba"/>);
            const input = container.querySelector('input');
            expect(input.id).toBe('id-de-prueba');
        })

        test('Acepta la propiedad del value', () => {
            const {container} = render(<InputComponent value="prueba" onChange={jest.fn()}/>);
            const input = container.querySelector('input');
            expect(input.value).toBe('prueba');
        })

        test('Acepta la propiedad del callback onChange', () => {
            const onChangeCallback = jest.fn();
            const {container} = render(<InputComponent value="prueba" onChange={onChangeCallback}/>);
            const input = container.querySelector('input');
            fireEvent.change(input, {
                target: {
                    value: "1234"
                }
            })
            expect(onChangeCallback).toHaveBeenCalledTimes(1);
        })

        test('Acepta la propiedad error', () => {
            const {container} = render(<InputComponent error='Email incorrecto'/>);
            const errorMessage = container.querySelector('.invalid-feedback');
            expect(errorMessage.textContent).toBe('Email incorrecto')
        })

        
    })
})