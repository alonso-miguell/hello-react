/**
 * Interfaces are used to enforce the type of variables and structure used
 * when creating an object, these don't define behavior, just types
 *
 * It helps to prvent type issues
 */

interface Summon {
    name: string;
    level: number;
    power: string;
    exp: number;
    details?: SummonDetails;
}

interface SummonDetails {
    location: string;
    cd: number;
}

const bahamut: Summon = {
    exp: 9999,
    level: 3,
    power: "Megaflare",
    name: 'Bahamut'
}

const ifrit: Summon = {
    exp: 6666,
    level: 2,
    power: "Hellfire",
    name: 'Ifrit',
    details: {
        location: 'ancient forest',
        cd: 1
    }
}