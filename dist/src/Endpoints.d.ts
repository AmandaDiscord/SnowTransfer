declare const _default: {
    BASE_URL: string;
    BASE_HOST: string;
    CDN_URL: string;
    APPLICATION_COMMAND: (appID: string, cmdID: string) => string;
    APPLICATION_COMMAND_PERMISSIONS: (appID: string, guildID: string, cmdID: string) => string;
    APPLICATION_COMMANDS: (appID: string) => string;
    APPLICATION_GUILD_COMMAND: (appID: string, guildID: string, cmdID: string) => string;
    APPLICATION_GUILD_COMMANDS: (appID: string, guildID: string) => string;
    CHANNEL: (chanID: string) => string;
    CHANNEL_BULK_DELETE: (chanID: string) => string;
    CHANNEL_INVITES: (chanID: string) => string;
    CHANNEL_MESSAGE: (chanID: string, msgID: string) => string;
    CHANNEL_MESSAGE_CROSSPOST: (chanID: string, msgID: string) => string;
    CHANNEL_MESSAGE_REACTION: (chanID: string, msgID: string, reaction: string) => string;
    CHANNEL_MESSAGE_REACTION_USER: (chanID: string, msgID: string, reaction: string, userID: string) => string;
    CHANNEL_MESSAGE_REACTIONS: (chanID: string, msgID: string) => string;
    CHANNEL_MESSAGES: (chanID: string) => string;
    CHANNEL_PERMISSION: (chanID: string, overID: string) => string;
    CHANNEL_PERMISSIONS: (chanID: string) => string;
    CHANNEL_PIN: (chanID: string, msgID: string) => string;
    CHANNEL_PINS: (chanID: string) => string;
    CHANNEL_PRIVATE_THREAD: (chanID: string) => string;
    CHANNEL_PUBLIC_THREAD: (chanID: string, msgID: string) => string;
    CHANNEL_RECIPIENT: (groupID: string, userID: string) => string;
    CHANNEL_THREAD_MEMBER: (chanID: string, memberID: string) => string;
    CHANNEL_THREAD_MEMBERS: (chanID: any) => string;
    CHANNEL_THREADS_ACTIVE: (chanID: string) => string;
    CHANNEL_THREADS_ARCHIVED_PRIVATE: (chanID: string) => string;
    CHANNEL_THREADS_ARCHIVED_PRIVATE_USER: (chanID: string) => string;
    CHANNEL_THREADS_ARCHIVED_PUBLIC: (chanID: string) => string;
    CHANNEL_TYPING: (chanID: string) => string;
    CHANNEL_WEBHOOKS: (chanID: string) => string;
    CHANNELS: string;
    GATEWAY: string;
    GATEWAY_BOT: string;
    GUILD: (guildID: string) => string;
    GUILD_APPLICATION_COMMAND_PERMISSIONS: (appID: string, guildID: string) => string;
    GUILD_AUDIT_LOGS: (guildID: string) => string;
    GUILD_BAN: (guildID: string, memberID: string) => string;
    GUILD_BANS: (guildID: string) => string;
    GUILD_CHANNELS: (guildID: string) => string;
    GUILD_EMOJI: (guildID: string, emojiID: string) => string;
    GUILD_EMOJIS: (guildID: string) => string;
    GUILD_INVITES: (guildID: string) => string;
    GUILD_INTEGRATION: (guildID: string, integrationID: string) => string;
    GUILD_INTEGRATIONS: (guildID: string) => string;
    GUILD_MEMBER: (guildID: string, memberID: string) => string;
    GUILD_MEMBER_NICK: (guildID: string, memberID: string) => string;
    GUILD_MEMBER_ROLE: (guildID: string, memberID: string, roleID: string) => string;
    GUILD_MEMBERS: (guildID: string) => string;
    GUILD_MEMBERS_SEARCH: (guildID: string) => string;
    GUILD_PREVIEW: (guildID: string) => string;
    GUILD_PRUNE: (guildID: string) => string;
    GUILD_ROLE: (guildID: string, roleID: string) => string;
    GUILD_ROLES: (guildID: string) => string;
    GUILD_VANITY: (guildID: string) => string;
    GUILD_VOICE_REGIONS: (guildID: string) => string;
    GUILD_VOICE_STATE_USER: (guildID: string, memberID: string) => string;
    GUILD_WEBHOOKS: (guildID: string) => string;
    GUILD_WELCOME_SCREEN: (guildID: string) => string;
    GUILD_WIDGET: (guildID: string) => string;
    GUILD_WIDGET_IMAGE: (guildID: string) => string;
    GUILD_WIDGET_SETTINGS: (guildID: string) => string;
    GUILDS: string;
    INTERACTION_CALLBACK: (interactionID: string, token: string) => string;
    INVITE: (inviteID: string) => string;
    OAUTH2_APPLICATION: (appID: string) => string;
    STAGE_INSTANCE_CHANNEL: (chanID: string) => string;
    STAGE_INSTANCES: string;
    USER: (userID: string) => string;
    USER_CHANNELS: (userID: string) => string;
    USER_GUILD: (userID: string, guildID: string) => string;
    USER_GUILDS: (userID: string) => string;
    USERS: string;
    VOICE_REGIONS: string;
    WEBHOOK: (hookID: string) => string;
    WEBHOOK_TOKEN: (hookID: string, token: string) => string;
    WEBHOOK_TOKEN_GITHUB: (hookID: string, token: string) => string;
    WEBHOOK_TOKEN_MESSAGE: (hookID: string, token: string, msgID: string) => string;
    WEBHOOK_TOKEN_SLACK: (hookID: string, token: string) => string;
};
export = _default;
