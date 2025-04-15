import { retornaArreglo } from "../base-pruebas/07-deses-arr";

describe('test 07', () => {

    test('type equality', () => {

        const[ letters, numbers ] =retornaArreglo();

        //Old style js
        expect( typeof letters).toBe('string');
        expect( typeof numbers).toBe('number');

        //Prefer this, more similar to java
        expect( letters ).toEqual( expect.any(String));
        expect( numbers ).toEqual( expect.any(Number));

    });

});