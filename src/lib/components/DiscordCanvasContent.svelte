<script lang="ts">
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    let componentMounted = false;
    onMount(() => (componentMounted = true));
</script>

<div class="discord-canvas-content">
    <div class="content-wrapper">
        {#if componentMounted}
            <div class="title-wrapper">
                <h2 transition:fly={{ x: -1000, duration: 3000, easing: quintOut }}>This is</h2>
                <h1 transition:fly={{ x: -1000, duration: 4000, delay: 700, easing: quintOut }}>
                    Hina<span>Web</span>
                </h1>
            </div>

            <p class="description" transition:fly={{ x: -1000, duration: 2500, delay: 2200, easing: quintOut }}>
                A powerful Discord Bot, <br />
                feature-packed and reliable.
            </p>
        {/if}
    </div>
</div>

<style lang="scss">
    .discord-canvas-content {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        user-select: none;

        .content-wrapper {
            display: block;
            margin-left: 13em;

            .title-wrapper {
                margin-top: 5em;

                h2 {
                    font-size: 3.5em;
                    margin: 0;
                    color: #36393f;
                    text-shadow: var(--hina-color) 1px 0px 0px, var(--hina-color) 0.540302px 0.841471px 0px,
                        var(--hina-color) -0.416147px 0.909297px 0px, var(--hina-color) -0.989992px 0.14112px 0px,
                        var(--hina-color) -0.653644px -0.756802px 0px, var(--hina-color) 0.283662px -0.958924px 0px,
                        var(--hina-color) 0.96017px -0.279415px 0px;
                }

                h1 {
                    font-size: 8em;
                    margin: 0;
                    margin-left: 1em;
                    color: var(--hina-color);
                    transform: rotate(-2deg);
                    font-family: 'Rochester', cursive;

                    span {
                        color: rgb(218, 217, 217);
                    }
                }
            }

            .description {
                color: white;
                font-size: 1.3em;
                margin: 5em 0;
            }
        }
    }

    @media (max-width: 1350px) {
        .discord-canvas-content .content-wrapper {
            margin-left: 8em;

            .title-wrapper {
                h2 {
                    font-size: 3em;
                }

                h1 {
                    font-size: 7.5em;
                }
            }

            .description {
                font-size: 1.1em;
                margin-bottom: 8em;
                font-family: 'Karla', sans-serif;
            }
        }
    }

    @media (max-width: 1010px) {
        .discord-canvas-content {
            justify-content: center;

            .content-wrapper {
                margin-left: 0;

                .description {
                    margin-top: 3em;
                }
            }
        }
    }

    @media (max-width: 630px) {
        .discord-canvas-content .content-wrapper {
            .title-wrapper {
                h2 {
                    font-size: 2.6em;
                }

                h1 {
                    font-size: 5em;
                }
            }

            .description {
                font-size: 0.9em;
            }
        }
    }
    @media (max-width: 480px) {
        .discord-canvas-content .content-wrapper {
            .title-wrapper {
                h2 {
                    font-size: 2.3em;
                }

                h1 {
                    font-size: 3.9em;
                }
            }

            .description {
                font-size: 0.8em;
            }
        }
    }
</style>
