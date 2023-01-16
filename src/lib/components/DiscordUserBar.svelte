<script lang="ts">
    import DiscordUserCard from '$lib/components/DiscordUserCard.svelte';
    import DiscordUserTabIcon from '$lib/images/discord_user_tab_icon.webp';

    const toggleUserTabBtnOnClick = () => {
        document.querySelector('.discord-user-bar')?.classList.toggle('show-nav');
    };
</script>

<img
    src={DiscordUserTabIcon}
    alt="toggle user side tab"
    class="toggle-user-tab-btn"
    on:click|preventDefault={toggleUserTabBtnOnClick}
/>
<div class="discord-user-bar">
    <div class="content-wrapper">
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
                roleColor="var(--hina-color)"
                isBot={true}
            />
        </div>
    </div>
</div>

<style lang="scss">
    .toggle-user-tab-btn {
        display: none;
    }

    .discord-user-bar {
        background: linear-gradient(to bottom, #2f3136 80%, #36393f);
        width: calc(100% - 4em);
        height: calc(100% - 5em);
        display: block;
        margin: 0 0 0 auto;
        padding: 5em 2em 0;

        .content-wrapper {
            .role-wrapper {
                margin-bottom: 3.2em;
                white-space: nowrap;

                .role-txt {
                    color: #96989d;
                    font-size: 1em;
                    margin: 0 0 0.4em 0.6em;
                    user-select: none;
                }
            }
        }
    }

    @media (max-width: 1350px) {
        .discord-user-bar {
            padding: 5em 1.5em 0;

            .content-wrapper .role-wrapper {
                margin-bottom: 2.7em;

                .role-txt {
                    font-size: 0.9em;
                }
            }
        }
    }

    @media (max-width: 1010px) {
        .toggle-user-tab-btn {
            display: block !important;
            position: absolute;
            height: 3em;
            top: 3em;
            right: 3em;
            border-radius: 50%;
            transition: outline 0.2s;
            z-index: 1;

            &:hover {
                outline: 1px solid white;
            }
        }

        .discord-user-bar {
            position: absolute;
            top: 0;
            right: 0;
            width: 80%;
            transition: transform 0.4s ease-in-out;

            .content-wrapper {
                margin-top: 1.5em;
            }
        }

        .discord-user-bar:not(.show-nav) {
            transform: translateX(100%);
        }
    }
</style>
