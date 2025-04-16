import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones.mjs";

describe('tests for functions file', ()=> { 

    test('getUser',() => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user= getUser();

        expect(testUser).toEqual(user);    
    });

    test('getUsuarioActivo',() => {

        const testUser = {
            uid: 'ABC567',
            username: 'Miguel'
        };

        const user= getUsuarioActivo('Miguel');

        expect(testUser).toEqual(user);
        expect(testUser.uid).toBe('ABC567');
        expect(testUser.username).toBe('Miguel');
         
        //we can also use
        expect(testUser).toStrictEqual({
             uid: 'ABC567',
            username: 'Miguel'
        });
    });


});