<script lang="ts">
    import InView from '$lib/components/InView.svelte';
    import AvatarChangeVisual from '$lib/images/avatar_change_visual.webp';
    import AvatarGallery from '$lib/images/avatar_gallery.webp';
    import Zoom from '$lib/transitions/Zoom';
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

            <div class="avatar-history-section">
                <InView thresholdPercent={10}>
                    <img
                        src={AvatarChangeVisual}
                        alt="avatar change visual"
                        class="img-1"
                        in:Zoom={{ duration: 300 }}
                    />
                </InView>
                <div class="text">
                    <h3>See your avatar change history.</h3>
                    <p>
                        Store up to <b>last 200 avatars</b>. Just be in a mutual server with Hina to start recording
                        your avatar history!
                    </p>
                    <div class="code">
                        <code>/avatarhistory</code>
                    </div>
                </div>
                <InView thresholdPercent={10}>
                    <img
                        src={AvatarGallery}
                        alt="avatar gallery example"
                        class="img-2"
                        in:Zoom={{ duration: 300, delay: 100 }}
                    />
                </InView>
            </div>

            <hr />
        </div>
    </div>
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
                        background-image: url('$lib/images/wave-top.webp');
                        background-size: 50% 100px;
                    }

                    &.wave-middle {
                        background-image: url('$lib/images/wave-mid.webp');
                        background-size: 50% 120px;
                    }

                    &.wave-bottom {
                        background-image: url('$lib/images/wave-bot.webp');
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

                .avatar-history-section {
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
                        }

                        p {
                            font-size: 1.3em;
                            margin-bottom: 0;
                            color: var(--secondary-black);
                        }

                        .code {
                            margin-top: 2em;
                            font-size: 1.1em;
                        }
                    }

                    img {
                        &.img-1 {
                            width: 15em;
                        }

                        &.img-2 {
                            width: 22em;
                            border-radius: 0.8em;
                            transform: rotate(2deg);
                        }
                    }
                }
            }
        }
    }
</style>
