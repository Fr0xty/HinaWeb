<script lang="ts">
    import InView from '$lib/components/InView.svelte';
    import AvatarChangeVisual from '$lib/images/avatar_change_visual.webp';
    import AvatarGallery from '$lib/images/avatar_gallery.webp';
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
    <InView thresholdPercent={10}>
        <img src={AvatarGallery} alt="avatar gallery example" class="img-2" in:Zoom={{ duration: 300, delay: 100 }} />
    </InView>
</div>

<style lang="scss">
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
</style>
