<script lang="ts">
    import DiscordCanvasContent from '$lib/components/DiscordCanvasContent.svelte';
    import DiscordUserBar from '$lib/components/DiscordUserBar.svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import ScrollHint from './ScrollHint.svelte';

    let showScrollHint = true;

    onMount(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                showScrollHint = true;
            } else {
                showScrollHint = false;
            }
        });
    });
</script>

<div class="discord-canvas">
    <DiscordCanvasContent />
    <DiscordUserBar />

    {#if showScrollHint}
        <div class="scroll-hint" out:fade={{ duration: 1000 }}>
            <ScrollHint />
        </div>
    {/if}
</div>

<style lang="scss">
    .discord-canvas {
        position: relative;
        background: #36393f;
        min-height: 100%;
        min-width: 100%;
        display: grid;
        grid-template-columns: 75% 25%;

        .scroll-hint {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 8%;
            display: flex;
            justify-content: center;
        }
    }

    @media (max-width: 1200px) {
        .discord-canvas {
            grid-template-columns: 70% 30%;
        }
    }

    @media (max-width: 1010px) {
        .discord-canvas {
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
    }
</style>
