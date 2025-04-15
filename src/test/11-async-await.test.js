import { getImagen } from "../base-pruebas/11-async-await";

describe('async suite', () =>{

    test('url test', async () => {
        const url = await getImagen();
        console.log('my url'+url);
        expect(url).toEqual(expect.any(String));

    });

});