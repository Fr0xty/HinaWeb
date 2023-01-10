<script lang="ts">
    import DiscordCanvasContent from '$lib/components/DiscordCanvasContent.svelte';
    import DiscordUserBar from '$lib/components/DiscordUserBar.svelte';
</script>

<div class="discord-canvas">
    <DiscordCanvasContent />
    <DiscordUserBar />
</div>

<style lang="scss">
    .discord-canvas {
        background: #36393f;
        min-height: 100%;
        min-width: 100%;
        display: grid;
        grid-template-columns: 75% 25%;
    }

    @media (max-width: 1090px) {
        .discord-canvas {
            grid-template-columns: 72% 28%;
        }
    }
</style>
