<script lang="ts">
    import InView from '$lib/components/InView.svelte';
    import VoiceChannelWithHinaVisual from '$lib/assets/images/vc_with_hina.webp';
    import Zoom from '$lib/transitions/Zoom';
</script>

<div class="music-section">
    <div class="text">
        <h3>Unwind and jam out with friends in the voice channel!</h3>
        <p>
            Kick back, relax and enjoy some tunes with friends in the voice channel. Let the music flow and create a
            chill atmosphere.
        </p>
        <div class="code">
            <code>/clearqueue</code>
            <code>/join</code>
            <code>/leave</code>
            <code>/loop</code>
            <code>/nowplaying</code>
            <code>/pause</code>
            <code>/play</code>
            <code>/queue</code>
            <code>/resume</code>
            <code>/shuffle</code>
            <code>/skip</code>
        </div>
    </div>
    <div class="in-view">
        <InView thresholdPercent={10}>
            <img src={VoiceChannelWithHinaVisual} alt="being in the same vc as hina" in:Zoom={{ duration: 300 }} />
        </InView>
    </div>
</div>

<style lang="scss">
    .music-section {
        position: relative;
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 2em 3.5em;
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
                display: flex;
                flex-wrap: wrap;
                gap: 0.5em;
            }
        }

        img {
            border-radius: 0.4em;
            height: 18em;
            transform: rotate(-3deg);
        }
    }

    @media (max-width: 1490px) {
        .music-section {
            gap: 2.2em;

            .text {
                h3 {
                    font-size: 1.7em;
                }

                p {
                    font-size: 1.2em;
                }

                .code {
                    font-size: 1em;
                }
            }

            img {
                height: 14.5em;
            }
        }
    }

    @media (max-width: 1000px) {
        .music-section {
            display: block;

            .text {
                width: 90%;
                margin: 0 auto 3em;
            }

            .in-view {
                display: flex;
                justify-content: center;
            }
        }
    }
</style>
