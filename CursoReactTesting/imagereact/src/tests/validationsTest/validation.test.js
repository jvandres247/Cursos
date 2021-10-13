import { SignUpValidation } from "../../validations/validation";

describe('Validation test', ()=> {

    describe('SignUp Validation', () => {
        test('Valida un correo electronico invalido', () => {
            const validation = SignUpValidation("test@gmail");
            expect(Object.keys(validation.errors)).toContain('email');
        })

        test('Valida un correo electronico valido', () => {
            const validation = SignUpValidation("test@gmail.com");
            expect(Object.keys(validation.errors)).not.toContain('email');
        })

        test('Valida una contraseña incorrecta', () => {
            const validation = SignUpValidation("12345");
            expect(Object.keys(validation.errors)).toContain('password');
        })

        test('Valida una contraseña correcta', () => {
            const validation = SignUpValidation("", "123456789");
            expect(Object.keys(validation.errors)).not.toContain('password');
        })

        test('La validacion retorna un objeto con los errores', () => {
            const validation = SignUpValidation();
            expect(Object.keys(validation.errors).length).toBe(2);
        })

        test('La validacion retorna un objeto con los errores', () => {
            const validation = SignUpValidation();
            expect(Object.keys(validation.errors).length).toBe(2);
        })

        test('La validacion falla cuando el email es incorrecto', () => {
            const validation = SignUpValidation("test@gmail", "123456789");
            expect(validation.isValid).toBe(false);
        })

        test('La validacion falla cuando el password es incorrecto', () => {
            const validation = SignUpValidation("test@gmail.com", "1234");
            expect(validation.isValid).toBe(false);
        })

        test('La validacion pasa cuando el email y el password son correctos', () => {
            const validation = SignUpValidation("test@gmail.com", "12345678");
            expect(validation.isValid).toBe(true);
        })
    })

});