<script lang="ts">
    import { onMount } from 'svelte';

    /**
     * percentage of element shown on viewport before disaplaying element
     */
    export let thresholdPercent: number;

    let unique = {};
    let displaySlot = false;
    let inViewElement: HTMLDivElement;

    onMount(() => {
        document.addEventListener('scroll', function eventListenerFunction() {
            console.log('scroll');

            /**
             * get InView element information
             */
            const boundingClientRect = inViewElement.getBoundingClientRect();

            /**
             * how many pixels left for the middle of InView element to reach the top of the viewport
             */
            const elementMidpointRelativeYCoord = boundingClientRect.y + boundingClientRect.height / 2;

            /**
             * threshold for element to cross in viewport (% to show in the viewport)
             */
            const thresholdYCoord = window.innerHeight * ((100 - thresholdPercent) / 100);

            if (thresholdYCoord > elementMidpointRelativeYCoord) {
                displaySlot = true;
                unique = {}; // run slot animation
                document.removeEventListener('scroll', eventListenerFunction);
            }
        });
    });
</script>

<div class="in-view" bind:this={inViewElement} style={`opacity: ${Number(displaySlot)};`}>
    {#key unique}
        <slot />
    {/key}
</div>

<style lang="scss">
    .in-view {
        width: fit-content;
        height: fit-content;
    }
</style>
