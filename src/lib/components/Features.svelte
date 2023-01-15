<script>
    import InView from '$lib/components/InView.svelte';
    import { fade } from 'svelte/transition';
</script>

<div class="features">
    <InView thresholdPercent={10}>
        <h2 class="title" in:fade={{ duration: 800 }}>WHAT <br />CAN I <br />DO?</h2>
    </InView>
</div>

<style lang="scss">
    .features {
        min-height: 100vh;
        background: rgba($color: var(--hina-color-rgb), $alpha: 0.7);
        position: relative;
        padding: 1em;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba($color: #000, $alpha: 0.08);
        }

        .title {
            font-size: 4em;
            margin: 1.5em 1em;
            color: rgb(92, 6, 149);
        }
    }
</style>
