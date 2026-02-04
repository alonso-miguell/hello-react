interface Hero {
    id:number;
    name:string;
    owner:Owner;
}

/**
 * type can be used to represent a contract that a variable must follow kind of like
 * something between an interface and a contract, can be used to represent unions and intersections
 * Union (|) → OR (this or that)*
 * Intersection (&) → AND (this and that)
 */
//type Owner = 'DC' | 'MARVEL';

/**
 * Common pitfall
 *
 * Intersecting incompatible types can result in never:
 * type A = { kind: "A" };
 * type B = { kind: "B" };
 *
 * type C = A & B; // never (impossible)
 */

// enums are used just like in java
enum Owner{
    DC='DC',
    MARVEL='MARVEL',
}

 export const heroes : Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.MARVEL
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.MARVEL
    },
];

//export default heroes;