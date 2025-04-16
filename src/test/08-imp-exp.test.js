import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp.mjs";
import { heroes } from "../data/heroes.mjs";

describe("heroes suite", () => {

    test('getHeroesTest', () => {
       const heroe= getHeroeById(1);
       console.log(heroe);

    });

    test('getHeroesByOwner', () => {
        const heroesDC= getHeroesByOwner('DC');
        expect(heroesDC).toHaveLength(3);
        expect(heroesDC).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
              ]
        );

        //Another way to do it is to evaluate the conditions/behavaior
        expect(heroesDC).toEqual( heroes.filter( (element) => element.owner==='DC' ) );


        const heroesMarvel= getHeroesByOwner('Marvel');
        expect(heroesMarvel).toHaveLength(2);
        expect(heroesMarvel).toEqual( heroes.filter( (element) => element.owner==='Marvel' ) );

        console.log(heroesMarvel);


 
     });

     
});