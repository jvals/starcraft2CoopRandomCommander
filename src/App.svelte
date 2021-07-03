<script lang="ts">
	interface Commander {
		name: string;
		prestiges: string[];
	}
	const commanders = [
		{name: 'Raynor', prestiges: ['Backwater Marshal', 'Rough Rider', 'Rebel Raider']},
		{name: 'Kerrigan', prestiges: ['Malevolent Matriarch', 'Folly of Man', 'Desolate Queen']},
		{name: 'Artanis', prestiges: ['Valorous Inspirator', 'Nexus Legate', 'Arkship Commandant']},
		{name: 'Swann', prestiges: ['Heavy Weapons Specialist', 'Grease Monkey', 'Payload Director']},
		{name: 'Zagara', prestiges: ['Scourge Queen', 'Mother of Constructs', 'Apex Predator']},
		{name: 'Vorazun', prestiges: ['Spirit of Respite', 'Withering Siphon', 'Keeper of Shadows']},
		{name: 'Karax', prestiges: ['Architect of War', 'Templar Apparent', 'Solarite Celestial']},
		{name: 'Abathur', prestiges: ['Essence Hoarder', 'Tunneling Horror', 'The Limitless']},
		{name: 'Alarak', prestiges: ['Artificer of Souls', 'Tyrant Ascendant', 'Shadow of Death']},
		{name: 'Nova', prestiges: ['Soldier of Fortune', 'Tactical Dispatcher', 'Infiltration Specialist']},
		{name: 'Stukov', prestiges: ['Frightful Fleshwelder', 'Plague Warder', 'Lord of the Horde']},
		{name: 'Fenix', prestiges: ['Akhundelar', 'Network Administrator', 'Unconquered Spirit']},
		{name: 'Dehaka', prestiges: ['Devouring One', 'Primal Contender', 'Broodbrother']},
		{name: 'Han & Honer', prestiges: ['Chaotic Power Couple', 'Wing Commanders', 'Galactic Gunrunners']},
		{name: 'Tychus', prestiges: ['Technical Recruiter', 'Lone Wolf', 'Dutiful Dogwalker']},
		{name: 'Zeratul', prestiges: ['Anakh Su\'n', 'Knowledge Seeker', 'Herald of the Void']},
		{name: 'Stetmann', prestiges: ['Signal Savant', 'Best Buddy', 'Oil Baron']},
		{name: 'Mengsk', prestiges: ['Toxic Tyrant', 'Principal Proletariat', 'Merchant of Death']}
	];

	let suggestedCommander = '';
	let suggestedPrestige = '';

	function updateSuggestion(): void {
		const randomCommander = getRandomCommander()
		suggestedCommander = randomCommander.name
		const randomPrestige = getRandomPrestige(randomCommander)
		suggestedPrestige = randomPrestige
	}

	function getRandomCommander(): Commander {
		const randomCommanderIdx = Math.floor(Math.random()*commanders.length)
		return commanders[randomCommanderIdx]
	}

	function getRandomPrestige(commander: Commander): string {
		const randomPrestigeIdx = Math.floor(Math.random()*commander.prestiges.length)
		return commander.prestiges[randomPrestigeIdx];
	}
</script>

<main>
	<h1>Starcraft 2 Coop Random</h1>
	<p>Click the button to get a random commander and a random prestige.</p>
	<button on:click={updateSuggestion}>Random!</button>
	{#if suggestedCommander !== ''}
		<p>{suggestedCommander} with prestige {suggestedPrestige}</p>
	{/if}
</main>

<style>

</style>