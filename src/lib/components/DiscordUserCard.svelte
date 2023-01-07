<script lang="ts">
    import DiscordPresenceIcon from '$lib/images/discord_presence_icon.webp';

    export let profilePic: string;
    export let name: string;
    export let status: string;
    export let statusIcon: boolean = false;
    export let roleColor: string;
    export let isBot: boolean = false;
</script>

<div class="discord-user-card">
    <div class="avatar">
        <img src={profilePic} alt="user avatar" />
        <div class="presence-indicator" />
    </div>
    <div class="text-box">
        <div class="name">
            <p class="name-txt" style="color: {roleColor};">{name}</p>
            {#if isBot}
                <span class="bot-indicator">BOT</span>
            {/if}
        </div>
        <div class="status">
            <p class="status-txt">{@html status}</p>
            {#if statusIcon}
                <img src={DiscordPresenceIcon} alt="discord presence icon" class="status-icon" />
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .discord-user-card {
        display: flex;
        gap: 1.5em;
        padding: 0.2em 1em;
        border-radius: 0.5em;
        cursor: pointer;

        &:hover {
            background: #3c3f45;

            .avatar .presence-indicator {
                border-color: #3c3f45;
            }
        }

        .avatar {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                border-radius: 50%;
                height: 3.8em;
                user-select: none;
            }

            .presence-indicator {
                background: #3ba55c;
                height: 1.1em;
                width: 1.1em;
                border-radius: 50%;
                border: 0.4em solid #2f3136;
                position: absolute;
                right: -9%;
                bottom: -3%;
            }
        }

        .text-box {
            display: block;
            padding: 0.2em 0;
            user-select: none;

            .name-txt,
            .status-txt {
                margin: 0;
            }

            .name {
                display: flex;
                align-items: center;
                justify-content: left;
                gap: 0.6em;

                .name-txt {
                    font-size: 1.6em;
                }

                .bot-indicator {
                    color: white;
                    font-size: 0.9em;
                    padding: 0.3em 0.6em;
                    border-radius: 0.3em;
                    background: #5865f2;
                    letter-spacing: -0.05em;
                }
            }

            .status {
                display: flex;
                justify-content: left;
                gap: 0.5em;

                .status-txt {
                    font-size: 1.2em;
                    color: gray;
                }

                .status-icon {
                    height: 1em;
                    margin: auto 0;
                }
            }
        }
    }
</style>
