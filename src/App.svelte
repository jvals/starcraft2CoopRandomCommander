<script lang="ts">
	import Main from './Home.svelte'
	import Settings from "./Settings.svelte";
	import {getCommanders} from "./CommanderUtil"

	const commanders = getCommanders()

	let view = 'home';

	function goToSettings() {
		view = 'settings'
	}

	function goToHome() {
		view = 'home'
	}
</script>

<main>
	<h1>Starcraft 2 Coop Random</h1>
	{#if view === 'home'}
		<button on:click={goToSettings}>Settings</button>
		<Main/>
	{:else}
        <button on:click={goToHome}>Back</button>
		<Settings commanders={commanders}/>
	{/if}
</main>

<style>

</style>
