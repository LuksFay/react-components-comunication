import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('pruebas en 02-template-string.02', () => {
    test('getSaludo debe retornar Hola Lucas', () => {
        const nombre = 'Lucas';
        const saludo = getSaludo( nombre );
        // console.log(saludo);
        expect (saludo ).toBe('Hola ' + nombre);
    })

    test('getSaludo debe de retornar Hola Carlos si no hay argumentos nombre', () =>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })
})

//getSaludo debe de retornar Hola Carlos si no hay argumentos nombre