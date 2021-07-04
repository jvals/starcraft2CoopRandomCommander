import Commander from "./Commander";
import Prestige from "./Prestige";

export default function getRandomCommander() {
    const commanders = [
        new Commander('Raynor',
            [
                new Prestige('Renegade Commander'),
                new Prestige('Backwater Marshal'),
                new Prestige('Rough Rider'),
                new Prestige('Rebel Raider')
            ]
        ),
        new Commander('Kerrigan',
            [
                new Prestige('Queen of Blades'),
                new Prestige('Malevolent Matriarch'),
                new Prestige('Folly of Man'),
                new Prestige('Desolate Queen')
            ]
        ),
        new Commander('Artanis',
            [
                new Prestige('Hierarch of the Daelaam'),
                new Prestige('Valorous Inspirator'),
                new Prestige('Nexus Legate'),
                new Prestige('Arkship Commandant')
            ]
        ),
        new Commander('Swann',
            [
                new Prestige('Chief Engineer'),
                new Prestige('Heavy Weapons Specialist'),
                new Prestige('Grease Monkey'),
                new Prestige('Payload Director')
            ]
        ),
        new Commander('Zagara',
            [
                new Prestige('Swarm Broodmother'),
                new Prestige('Scourge Queen'),
                new Prestige('Mother of Constructs'),
                new Prestige('Apex Predator')
            ]
        ),
        new Commander('Vorazun',
            [
                new Prestige('Matriarch of the Nerazim'),
                new Prestige('Spirit of Respite'),
                new Prestige('Withering Siphon'),
                new Prestige('Keeper of Shadows')
            ]
        ),
        new Commander('Karax',
            [
                new Prestige('Khalai Phase-Smith'),
                new Prestige('Architect of War'),
                new Prestige('Templar Apparent'),
                new Prestige('Solarite Celestial')
            ]
        ),
        new Commander('Abathur',
            [
                new Prestige('Evolution Master'),
                new Prestige('Essence Hoarder'),
                new Prestige('Tunneling Horror'),
                new Prestige('The Limitless')
            ]
        ),
        new Commander('Alarak',
            [
                new Prestige('Highlord of the Tal\'darim'),
                new Prestige('Artificer of Souls'),
                new Prestige('Tyrant Ascendant'),
                new Prestige('Shadow of Death')
            ]
        ),
        new Commander('Nova',
            [
                new Prestige('Dominion Ghost'),
                new Prestige('Soldier of Fortune'),
                new Prestige('Tactical Dispatcher'),
                new Prestige('Infiltration Specialist')
            ]
        ),
        new Commander('Stukov',
            [
                new Prestige('Infested Admiral'),
                new Prestige('Frightful Fleshwelder'),
                new Prestige('Plague Warder'),
                new Prestige('Lord of the Horde')
            ]
        ),
        new Commander('Fenix',
            [
                new Prestige('Purifier Executor'),
                new Prestige('Akhundelar'),
                new Prestige('Network Administrator'),
                new Prestige('Unconquered Spirit')
            ]
        ),
        new Commander('Dehaka',
            [
                new Prestige('Primal Pack Leader'),
                new Prestige('Devouring One'),
                new Prestige('Primal Contender'),
                new Prestige('Broodbrother')
            ]
        ),
        new Commander('Han & Horner',
            [
                new Prestige('Mercenary Leader and Dominion Admiral'),
                new Prestige('Chaotic Power Couple'),
                new Prestige('Wing Commanders'),
                new Prestige('Galactic Gunrunners')],
            'horner'),
        new Commander('Tychus',
            [
                new Prestige('Legendary Outlaw'),
                new Prestige('Technical Recruiter'),
                new Prestige('Lone Wolf'),
                new Prestige('Dutiful Dogwalker')
            ]
        ),
        new Commander('Zeratul',
            [
                new Prestige('Dark Prelate'),
                new Prestige('Anakh Su\'n'),
                new Prestige('Knowledge Seeker'),
                new Prestige('Herald of the Void')
            ]
        ),
        new Commander('Stetmann',
            [
                new Prestige('Hero Genius (Henius)'),
                new Prestige('Signal Savant'),
                new Prestige('Best Buddy'),
                new Prestige('Oil Baron')
            ]
        ),
        new Commander('Mengsk',
            [
                new Prestige('Emperor of the Dominion'),
                new Prestige('Toxic Tyrant'),
                new Prestige('Principal Proletariat'),
                new Prestige('Merchant of Death')
            ]
        )
    ];

    const randomCommanderIdx = Math.floor(Math.random() * commanders.length)
    return commanders[randomCommanderIdx]
}