<div class="discord-canvas-content">
    <div class="content-wrapper">
        <div class="title-wrapper">
            <h2>This is</h2>
            <h1>Hina<span>Web</span></h1>
        </div>

        <p class="description">
            A powerful Discord Bot, <br />
            feature-packed and reliable.
        </p>
    </div>
</div>

<style lang="scss">
    .discord-canvas-content {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;

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
                    font-size: 6em;
                    margin: 0;
                    margin-left: 0.1em;
                    color: var(--hina-color);
                    text-shadow: rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px,
                        rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px,
                        rgb(0, 0, 0) -0.832294px 1.81859px 0px, rgb(0, 0, 0) -1.60229px 1.19694px 0px,
                        rgb(0, 0, 0) -1.97998px 0.28224px 0px, rgb(0, 0, 0) -1.87291px -0.701566px 0px,
                        rgb(0, 0, 0) -1.30729px -1.5136px 0px, rgb(0, 0, 0) -0.421592px -1.95506px 0px,
                        rgb(0, 0, 0) 0.567324px -1.91785px 0px, rgb(0, 0, 0) 1.41734px -1.41108px 0px,
                        rgb(0, 0, 0) 1.92034px -0.558831px 0px;

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
                    font-size: 5.1em;
                }
            }

            .description {
                font-size: 1.1em;
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

    @media (max-width: 500px) {
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
