<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let componentMounted = false;
    onMount(() => (componentMounted = true));
</script>

{#if componentMounted}
    <div class="scroll-hint" in:fade={{ duration: 1000, delay: 1500 }}>
        <div class="point" />
    </div>
{/if}

<style lang="scss">
    @keyframes Bounce {
        0% {
            top: 50%;
            background: white;
            opacity: 1;
        }
        7% {
            top: 0%;
        }
        11% {
            background: gray;
        }
        35% {
            top: 50%;
            color: gray;
            opacity: 20%;
        }
        100% {
            top: 50%;
            color: gray;
            opacity: 20%;
        }
    }

    .scroll-hint {
        height: 2.5em;
        width: 2.5em;
        border: 1px solid gray;
        border-radius: 50%;
        position: relative;

        .point {
            margin: 0.3em auto;
            height: 0.5em;
            width: 0.5em;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: gray;
            border-radius: 50%;
            animation: Bounce 6s cubic-bezier(0.26, 0.62, 0.49, 0.96) 3.5s infinite;
        }
    }

    @media (max-width: 1010px) {
        .scroll-hint {
            height: 2em;
            width: 2em;

            .point {
                height: 0.4em;
                width: 0.4em;
            }
        }
    }
</style>
