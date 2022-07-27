import Commander from "./Commander";
import Prestige from "./Prestige";

const commanders = [
    new Commander('Raynor',
        [
            new Prestige('(P0) Renegade Commander'),
            new Prestige('(P1) Backwater Marshal'),
            new Prestige('(P2) Rough Rider'),
            new Prestige('(P3) Rebel Raider')
        ]
    ),
    new Commander('Kerrigan',
        [
            new Prestige('(P0) Queen of Blades'),
            new Prestige('(P1) Malevolent Matriarch'),
            new Prestige('(P2) Folly of Man'),
            new Prestige('(P3) Desolate Queen')
        ]
    ),
    new Commander('Artanis',
        [
            new Prestige('(P0) Hierarch of the Daelaam'),
            new Prestige('(P1) Valorous Inspirator'),
            new Prestige('(P2) Nexus Legate'),
            new Prestige('(P3) Arkship Commandant')
        ]
    ),
    new Commander('Swann',
        [
            new Prestige('(P0) Chief Engineer'),
            new Prestige('(P1) Heavy Weapons Specialist'),
            new Prestige('(P2) Grease Monkey'),
            new Prestige('(P3) Payload Director')
        ]
    ),
    new Commander('Zagara',
        [
            new Prestige('(P0) Swarm Broodmother'),
            new Prestige('(P1) Scourge Queen'),
            new Prestige('(P2) Mother of Constructs'),
            new Prestige('(P3) Apex Predator')
        ]
    ),
    new Commander('Vorazun',
        [
            new Prestige('(P0) Matriarch of the Nerazim'),
            new Prestige('(P1) Spirit of Respite'),
            new Prestige('(P2) Withering Siphon'),
            new Prestige('(P3) Keeper of Shadows')
        ]
    ),
    new Commander('Karax',
        [
            new Prestige('(P0) Khalai Phase-Smith'),
            new Prestige('(P1) Architect of War'),
            new Prestige('(P2) Templar Apparent'),
            new Prestige('(P3) Solarite Celestial')
        ]
    ),
    new Commander('Abathur',
        [
            new Prestige('(P0) Evolution Master'),
            new Prestige('(P1) Essence Hoarder'),
            new Prestige('(P2) Tunneling Horror'),
            new Prestige('(P3) The Limitless')
        ]
    ),
    new Commander('Alarak',
        [
            new Prestige('(P0) Highlord of the Tal\'darim'),
            new Prestige('(P1) Artificer of Souls'),
            new Prestige('(P2) Tyrant Ascendant'),
            new Prestige('(P3) Shadow of Death')
        ]
    ),
    new Commander('Nova',
        [
            new Prestige('(P0) Dominion Ghost'),
            new Prestige('(P1) Soldier of Fortune'),
            new Prestige('(P2) Tactical Dispatcher'),
            new Prestige('(P3) Infiltration Specialist')
        ]
    ),
    new Commander('Stukov',
        [
            new Prestige('(P0) Infested Admiral'),
            new Prestige('(P1) Frightful Fleshwelder'),
            new Prestige('(P2) Plague Warder'),
            new Prestige('(P3) Lord of the Horde')
        ]
    ),
    new Commander('Fenix',
        [
            new Prestige('(P0) Purifier Executor'),
            new Prestige('(P1) Akhundelar'),
            new Prestige('(P2) Network Administrator'),
            new Prestige('(P3) Unconquered Spirit')
        ]
    ),
    new Commander('Dehaka',
        [
            new Prestige('(P0) Primal Pack Leader'),
            new Prestige('(P1) Devouring One'),
            new Prestige('(P2) Primal Contender'),
            new Prestige('(P3) Broodbrother')
        ]
    ),
    new Commander('Han & Horner',
        [
            new Prestige('(P0) Mercenary Leader and Dominion Admiral'),
            new Prestige('(P1) Chaotic Power Couple'),
            new Prestige('(P2) Wing Commanders'),
            new Prestige('(P3) Galactic Gunrunners')],
        'horner'),
    new Commander('Tychus',
        [
            new Prestige('(P0) Legendary Outlaw'),
            new Prestige('(P1) Technical Recruiter'),
            new Prestige('(P2) Lone Wolf'),
            new Prestige('(P3) Dutiful Dogwalker')
        ]
    ),
    new Commander('Zeratul',
        [
            new Prestige('(P0) Dark Prelate'),
            new Prestige('(P1) Anakh Su\'n'),
            new Prestige('(P2) Knowledge Seeker'),
            new Prestige('(P3) Herald of the Void')
        ]
    ),
    new Commander('Stetmann',
        [
            new Prestige('(P0) Hero Genius (Henius)'),
            new Prestige('(P1) Signal Savant'),
            new Prestige('(P2) Best Buddy'),
            new Prestige('(P3) Oil Baron')
        ]
    ),
    new Commander('Mengsk',
        [
            new Prestige('(P0) Emperor of the Dominion'),
            new Prestige('(P1) Toxic Tyrant'),
            new Prestige('(P2) Principal Proletariat'),
            new Prestige('(P3) Merchant of Death')
        ]
    )
];

export default function getRandomCommander() {
    const availableCommanders = commanders.filter(commander => commander.isAvailable)
    const randomCommanderIdx = Math.floor(Math.random() * availableCommanders.length)
    return availableCommanders[randomCommanderIdx]
}

export function getCommanders(): Commander[] {
    return commanders
}
