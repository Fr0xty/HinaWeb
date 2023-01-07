<script lang="ts">
    import DiscordCanvasContent from './DiscordCanvasContent.svelte';
    import DiscordUserBar from './DiscordUserBar.svelte';
</script>

<div class="discord-canvas">
    <DiscordCanvasContent />
    <DiscordUserBar />
</div>

<style lang="scss">
    .discord-canvas {
        background: #36393f;
        height: 100vh;
        width: 100vw;
        font-family: 'Open Sans', sans-serif;
        display: grid;
        grid-template-columns: 75% 25%;
    }
</style>
