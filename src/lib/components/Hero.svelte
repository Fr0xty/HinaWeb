<script lang="ts">
    import DiscordCanvas from '$lib/components/DiscordCanvas.svelte';
</script>

<div class="hero">
    <DiscordCanvas />
</div>

<style lang="scss">
    .hero {
        height: 100vh;
        min-height: fit-content;
        width: 100vw;
        font-family: 'Open Sans', sans-serif;
    }
</style>
