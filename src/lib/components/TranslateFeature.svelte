<script lang="ts">
    import InView from '$lib/components/InView.svelte';
    import HinaTranslateExample from '$lib/assets/videos/hina_translate_example.webp';
    import Zoom from '$lib/transitions/Zoom';
</script>

<div class="translate-section">
    <InView thresholdPercent={10}>
        <img src={HinaTranslateExample} alt="translate example" in:Zoom={{ duration: 300 }} />
    </InView>
    <div class="text">
        <h3>Translate messages to and from any language.</h3>
        <p>No more out-of-the-way translating; Hina helps remove language barriers!</p>
        <div class="code">
            <code>/translate</code>
        </div>
    </div>
</div>

<style lang="scss">
    .translate-section {
        position: relative;
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 2em;
        gap: 4em;

        .text {
            display: block;
            align-items: center;

            h3 {
                font-size: 2em;
                margin: 0;
                color: #520020;
            }

            p {
                font-size: 1.3em;
                margin: 0.8em 0 0;
            }

            .code {
                margin-top: 2em;
                font-size: 1.1em;
            }
        }

        img {
            border-radius: 0.2em;
        }
    }
</style>
