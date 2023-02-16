<script lang="ts">
    import InView from '$lib/components/InView.svelte';
    import AvatarChangeVisual from '$lib/assets/images/avatar_change_visual.webp';
    import AvatarGallery from '$lib/assets/images/avatar_gallery.webp';
    import Zoom from '$lib/transitions/Zoom';
</script>

<div class="avatar-history-section">
    <InView thresholdPercent={10}>
        <img src={AvatarChangeVisual} alt="avatar change visual" class="img-1" in:Zoom={{ duration: 300 }} />
    </InView>
    <div class="text">
        <h3>See your avatar change history.</h3>
        <p>
            Store up to <b>last 200 avatars</b>. Just be in a mutual server with Hina to start recording your avatar
            history!
        </p>
        <div class="code">
            <code>/avatarhistory</code>
        </div>
    </div>
    <div class="in-view-2">
        <InView thresholdPercent={10}>
            <img
                src={AvatarGallery}
                alt="avatar gallery example"
                class="img-2"
                in:Zoom={{ duration: 300, delay: 100 }}
            />
        </InView>
    </div>
</div>

<style lang="scss">
    .avatar-history-section {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 2em;
        gap: 3em;

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

    @media (max-width: 1490px) {
        .avatar-history-section {
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
                &.img-1 {
                    width: 12em;
                }
                &.img-2 {
                    width: 17.6em;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        .avatar-history-section {
            display: block;

            .text {
                width: 80%;
                margin: 1em auto;
            }

            img {
                &.img-1 {
                    width: 12em;
                    margin-left: 2em;
                }

                &.img-2 {
                    width: 17.6em;
                    margin-right: 2em;
                    margin-top: 2em;
                }
            }

            .in-view-2 {
                display: flex;
                justify-content: right;
            }
        }
    }
</style>
