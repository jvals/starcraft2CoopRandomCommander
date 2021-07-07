<script lang="ts">
    import Commander from "./Commander";

    export let commanders: Commander[];
</script>

<h2>Settings</h2>
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
</style>
