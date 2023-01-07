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
        gap: 1em;
        padding: 0.3em 0.8em;
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
                height: 3.6em;
                user-select: none;
            }

            .presence-indicator {
                background: #3ba55c;
                height: 0.95em;
                width: 0.95em;
                border-radius: 50%;
                border: 0.35em solid #2f3136;
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
                gap: 0.5em;

                .name-txt {
                    font-size: 1.4em;
                }

                .bot-indicator {
                    color: white;
                    font-size: 0.8em;
                    padding: 0.1em 0.5em;
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
                    color: gray;
                }

                .status-icon {
                    height: 0.8em;
                    margin: auto 0;
                }
            }
        }
    }
</style>
