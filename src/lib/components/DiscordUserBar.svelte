<script lang="ts">
    import DiscordUserCard from './DiscordUserCard.svelte';
</script>

<div class="discord-user-bar">
    <div class="role-wrapper">
        <p class="role-txt">DEVELOPER — 1</p>
        <DiscordUserCard
            profilePic="https://images-ext-2.discordapp.net/external/MAQOOpUvlwGwhGql7x5shQyue0IpNf_RSENNhdOHK-Q/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/395587171601350676/05c5606a642eb2f8224f3fec7a1fac1e.webp"
            name="Fr0xty"
            status="Listening to <b>Spotify</b>"
            statusIcon={true}
            roleColor="#ab8ff7"
        />
    </div>
    <div class="role-wrapper">
        <p class="role-txt">BEEP BOOP — 1</p>
        <DiscordUserCard
            profilePic="https://images-ext-1.discordapp.net/external/RvRYNm4UaZln7oDT4EfWVwGHmP1A2iMfHTzuDfS058w/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/769125937731338290/308fbfb87154687c51e0ecea11f0bed2.webp?width=681&height=681"
            name="Hina"
            status="Playing <b>bot stuff</b>"
            roleColor="#f1bbff"
        />
    </div>
</div>

<style lang="scss">
    .discord-user-bar {
        background: #2f3136;
        width: 30%;
        min-width: 20em;
        height: 100%;
        display: block;
        margin: 0 auto;
        padding: 3em 3em 0;

        .role-wrapper {
            margin-bottom: 3.5em;

            .role-txt {
                color: #96989d;
                font-size: 1.2em;
                margin: 0 0 0.4em 0.6em;
                user-select: none;
            }
        }
    }
</style>
