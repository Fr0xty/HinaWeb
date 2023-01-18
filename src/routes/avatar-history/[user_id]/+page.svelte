<script lang="ts">
    import type { Data } from './+page.server';

    export let data: Data;
</script>

<div class="avatar-gallery">
    {#if data.status === 404}
        <h1>Invalid user id.</h1>
    {/if}

    {#if data.avatars.length}
        {#each data.avatars as avatar, index}
            <img src={avatar} alt={`avatar ${index}`} class="avatar" />
        {/each}
    {/if}
</div>

<style lang="scss">
    .avatar-gallery {
        display: grid;
        grid-gap: 8px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        padding: 0.5em;

        .avatar {
            width: 100%;
        }
    }
</style>
