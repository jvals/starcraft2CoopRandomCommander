<script lang="ts">
    import Commander from "./Commander";
    import getRandomCommander from "./CommanderUtil";

    let suggestedCommander: Commander | null = null;
    function updateSuggestedCommander() {
        suggestedCommander = getRandomCommander()
    }
</script>

<p>Click the button to get a random commander and a random prestige.</p>
<button on:click={updateSuggestedCommander}>Random!</button>
{#if suggestedCommander !== null}
    <p>{suggestedCommander.name} with prestige {suggestedCommander.suggestedPrestige}</p>
    <p>Get a good build order at <a href={suggestedCommander.getLinkToSC2Coop()}>{suggestedCommander.getLinkToSC2Coop()}</a></p>
{/if}
