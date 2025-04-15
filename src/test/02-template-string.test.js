import { getSaludo } from "../base-pruebas/02-template-string";

//we can omit describe to create extra groups and run all tests at once
describe('Pruebas grupales',() =>{
    test('String function test', () =>{
        const message1='Hola Miguel';
        const message2 = getSaludo('Miguel');
    
        expect(message1).toBe(message2);
        expect()
    });
});