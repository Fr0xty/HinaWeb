<script lang="ts">
    import AvatarHistoryFeature from '$lib/components/AvatarHistoryFeature.svelte';
    import InView from '$lib/components/InView.svelte';
    import MusicFeature from '$lib/components/MusicFeature.svelte';
    import TranslateFeature from '$lib/components/TranslateFeature.svelte';
    import { fade } from 'svelte/transition';
</script>

<div class="features">
    <div class="wave-wrapper wave-animation">
        <div class="wave-wrapper-inner bg-top">
            <div class="wave wave-top" />
        </div>
        <div class="wave-wrapper-inner bg-middle">
            <div class="wave wave-middle" />
        </div>
        <div class="wave-wrapper-inner bg-bottom">
            <div class="wave wave-bottom" />
        </div>
    </div>

    <div class="outer-content-wrapper">
        <InView thresholdPercent={10}>
            <h2 class="title" in:fade={{ duration: 800 }}>WHAT <br />CAN I <br />DO?</h2>
        </InView>

        <div class="inner-content-wrapper">
            <hr />
            <AvatarHistoryFeature />
            <hr />
            <TranslateFeature />
            <hr />
            <MusicFeature />
            <hr />
            <h3 class="and-more-txt">And more...</h3>
        </div>
    </div>

    <div class="bottom-transition" />
</div>

<style lang="scss">
    @keyframes MoveWave {
        0% {
            transform: translateX(0) translateZ(0) scaleY(1);
        }
        50% {
            transform: translateX(-25%) translateZ(0) scaleY(0.55);
        }
        100% {
            transform: translateX(-50%) translateZ(0) scaleY(1);
        }
    }

    .features {
        min-height: 100vh;
        background: rgba($color: var(--hina-color-rgb), $alpha: 0.7);
        background: linear-gradient(to bottom, pink 30%, var(--hina-color) 60%);
        position: relative;
        padding: 2em;

        .wave-wrapper {
            overflow: hidden;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 10em;

            .wave-wrapper-inner {
                position: absolute;
                min-width: 100%;
                overflow: hidden;
                height: 100%;
                bottom: 0px;

                &.bg-top {
                    z-index: 15;
                    opacity: 0.5;
                }

                &.bg-middle {
                    z-index: 10;
                    opacity: 0.75;
                }

                &.bg-bottom {
                    z-index: 5;
                }

                .wave {
                    position: absolute;
                    left: 0;
                    width: 200%;
                    height: 100%;
                    background-repeat: repeat no-repeat;
                    background-position: 0 top;
                    transform-origin: center top;

                    &.wave-top {
                        background-image: url('$lib/assets/images/wave-top.webp');
                        background-size: 50% 100px;
                    }

                    &.wave-middle {
                        background-image: url('$lib/assets/images/wave-mid.webp');
                        background-size: 50% 120px;
                    }

                    &.wave-bottom {
                        background-image: url('$lib/assets/images/wave-bot.webp');
                        background-size: 50% 100px;
                    }
                }
            }
        }

        .wave-animation {
            .wave-top {
                animation: move-wave 3s;
                -webkit-animation: move-wave 3s;
                -webkit-animation-delay: 1s;
                animation-delay: 1s;
            }
            .wave-middle {
                animation: MoveWave 10s linear infinite;
            }
            .wave-bottom {
                animation: MoveWave 15s linear infinite;
            }
        }

        .outer-content-wrapper {
            display: grid;
            grid-template-columns: 20% 80%;

            .title {
                font-size: 4em;
                margin: 2.5em 0 0 0.8em;
                color: #b03765;
                display: inline-block;
            }

            .inner-content-wrapper {
                padding-top: 20em;

                hr {
                    background: #b03765;
                    height: 1px;
                    margin: 1em 0;
                    border: none;
                }

                .and-more-txt {
                    font-size: 1.5em;
                    margin: 3em 0;
                    text-align: center;
                    color: #520020;
                }
            }
        }

        .bottom-transition {
            position: absolute;
            left: 0;
            right: 0;
            height: 8em;
            background: var(--hina-color);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 36%);
        }
    }
</style>
