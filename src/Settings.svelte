<script lang="ts">
    import Commander from "./Commander";

    export let commanders: Commander[];

    function handleReset() {
        localStorage.clear()
        commanders.forEach(commander => {
            commander.reset()
            commander.prestiges.forEach(prestige => {
                prestige.reset()
            })
        })
        commanders = commanders
    }
</script>

<h2>Settings</h2>
<p class="notice">Settings are saved in the browser local storage. Click <button class="reset-button" on:click={handleReset}>here</button> to reset.</p>
{#each commanders as commander}
    <div class="commander-settings">
        <input type="checkbox" id={commander.name} bind:checked={commander.isAvailable}>
        <label for={commander.name}>{commander.name}</label>
        <div class="prestige-settings">
            {#each commander.prestiges as prestige}
                <div>
                    <input type="checkbox" id={prestige.name} bind:checked={prestige.isAvailable} disabled={!commander.isAvailable}>
                    <label for={prestige.name}>{prestige.name}</label>
                </div>
            {/each}
        </div>
    </div>
{/each}

<style>
 .commander-settings {
     margin-left: 16px;
 }
 .prestige-settings {
     margin-left: 32px;
 }
 .notice {
     font-size: x-small;
 }
 .reset-button {
     background: none!important;
     border: none;
     padding: 0!important;
     /*optional*/
     font-family: arial, sans-serif;
     /*input has OS specific font-family*/
     color: #069;
     text-decoration: underline;
     cursor: pointer;
 }
</style>
