"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * Mostly taken from https://github.com/abalabahaha/eris/blob/master/lib/rest/Endpoints.js
 *
 * Removed User-only endpoints
 * @private
 */
const Constants_1 = __importDefault(require("./Constants"));
module.exports = {
    BASE_URL: "/api/v" + Constants_1.default.REST_API_VERSION,
    BASE_HOST: "https://discord.com",
    CDN_URL: "https://cdn.discordapp.com",
    APPLICATION_COMMAND: (appID, cmdID) => `/applications/${appID}/commands/${cmdID}`,
    APPLICATION_COMMAND_PERMISSIONS: (appID, guildID, cmdID) => `/applications/${appID}/guilds/${guildID}/commands/${cmdID}/permissions`,
    APPLICATION_COMMANDS: (appID) => `/applications/${appID}/commands`,
    APPLICATION_GUILD_COMMAND: (appID, guildID, cmdID) => `/applications/${appID}/guilds/${guildID}/commands/${cmdID}`,
    APPLICATION_GUILD_COMMANDS: (appID, guildID) => `/applications/${appID}/guilds/${guildID}/commands`,
    CHANNEL: (chanID) => `/channels/${chanID}`,
    CHANNEL_BULK_DELETE: (chanID) => `/channels/${chanID}/messages/bulk-delete`,
    CHANNEL_INVITES: (chanID) => `/channels/${chanID}/invites`,
    CHANNEL_MESSAGE: (chanID, msgID) => `/channels/${chanID}/messages/${msgID}`,
    CHANNEL_MESSAGE_CROSSPOST: (chanID, msgID) => `/channels/${chanID}/messages/${msgID}/crosspost`,
    CHANNEL_MESSAGE_REACTION: (chanID, msgID, reaction) => `/channels/${chanID}/messages/${msgID}/reactions/${reaction}`,
    CHANNEL_MESSAGE_REACTION_USER: (chanID, msgID, reaction, userID) => `/channels/${chanID}/messages/${msgID}/reactions/${reaction}/${userID}`,
    CHANNEL_MESSAGE_REACTIONS: (chanID, msgID) => `/channels/${chanID}/messages/${msgID}/reactions`,
    CHANNEL_MESSAGES: (chanID) => `/channels/${chanID}/messages`,
    CHANNEL_PERMISSION: (chanID, overID) => `/channels/${chanID}/permissions/${overID}`,
    CHANNEL_PERMISSIONS: (chanID) => `/channels/${chanID}/permissions`,
    CHANNEL_PIN: (chanID, msgID) => `/channels/${chanID}/pins/${msgID}`,
    CHANNEL_PINS: (chanID) => `/channels/${chanID}/pins`,
    CHANNEL_PRIVATE_THREAD: (chanID) => `/channels/${chanID}/threads`,
    CHANNEL_PUBLIC_THREAD: (chanID, msgID) => `/channels/${chanID}/messages/${msgID}/threads`,
    CHANNEL_RECIPIENT: (groupID, userID) => `/channels/${groupID}/recipients/${userID}`,
    CHANNEL_THREAD_MEMBER: (chanID, memberID) => `/channels/${chanID}/thread-members/${memberID}`,
    CHANNEL_THREAD_MEMBERS: (chanID) => `/channels/${chanID}/thread-members`,
    CHANNEL_THREADS_ACTIVE: (chanID) => `/channels/${chanID}/threads/active`,
    CHANNEL_THREADS_ARCHIVED_PRIVATE: (chanID) => `/channels/${chanID}/threads/archived/private`,
    CHANNEL_THREADS_ARCHIVED_PRIVATE_USER: (chanID) => `/channels/${chanID}/users/@me/threads/archived/private`,
    CHANNEL_THREADS_ARCHIVED_PUBLIC: (chanID) => `/channels/${chanID}/threads/archived/public`,
    CHANNEL_TYPING: (chanID) => `/channels/${chanID}/typing`,
    CHANNEL_WEBHOOKS: (chanID) => `/channels/${chanID}/webhooks`,
    CHANNELS: "/channels",
    GATEWAY: "/gateway",
    GATEWAY_BOT: "/gateway/bot",
    GUILD: (guildID) => `/guilds/${guildID}`,
    GUILD_APPLICATION_COMMAND_PERMISSIONS: (appID, guildID) => `/applications/${appID}/guilds/${guildID}/commands/permissions`,
    GUILD_AUDIT_LOGS: (guildID) => `/guilds/${guildID}/audit-logs`,
    GUILD_BAN: (guildID, memberID) => `/guilds/${guildID}/bans/${memberID}`,
    GUILD_BANS: (guildID) => `/guilds/${guildID}/bans`,
    GUILD_CHANNELS: (guildID) => `/guilds/${guildID}/channels`,
    GUILD_EMOJI: (guildID, emojiID) => `/guilds/${guildID}/emojis/${emojiID}`,
    GUILD_EMOJIS: (guildID) => `/guilds/${guildID}/emojis`,
    GUILD_INVITES: (guildID) => `/guilds/${guildID}/invites`,
    GUILD_INTEGRATION: (guildID, integrationID) => `/guilds/${guildID}/integrations/${integrationID}`,
    GUILD_INTEGRATIONS: (guildID) => `/guilds/${guildID}/integrations`,
    GUILD_MEMBER: (guildID, memberID) => `/guilds/${guildID}/members/${memberID}`,
    GUILD_MEMBER_NICK: (guildID, memberID) => `/guilds/${guildID}/members/${memberID}/nick`,
    GUILD_MEMBER_ROLE: (guildID, memberID, roleID) => `/guilds/${guildID}/members/${memberID}/roles/${roleID}`,
    GUILD_MEMBERS: (guildID) => `/guilds/${guildID}/members`,
    GUILD_MEMBERS_SEARCH: (guildID) => `/guilds/${guildID}/members/search`,
    GUILD_PREVIEW: (guildID) => `/guilds/${guildID}/preview`,
    GUILD_PRUNE: (guildID) => `/guilds/${guildID}/prune`,
    GUILD_ROLE: (guildID, roleID) => `/guilds/${guildID}/roles/${roleID}`,
    GUILD_ROLES: (guildID) => `/guilds/${guildID}/roles`,
    GUILD_VANITY: (guildID) => `/guilds/${guildID}/vanity-url`,
    GUILD_VOICE_REGIONS: (guildID) => `/guilds/${guildID}/regions`,
    GUILD_VOICE_STATE_USER: (guildID, memberID) => `/guilds/${guildID}/voice-states/${memberID}`,
    GUILD_WEBHOOKS: (guildID) => `/guilds/${guildID}/webhooks`,
    GUILD_WELCOME_SCREEN: (guildID) => `/guilds/${guildID}/welcome-screen`,
    GUILD_WIDGET: (guildID) => `/guilds/${guildID}/widget.json`,
    GUILD_WIDGET_IMAGE: (guildID) => `/guilds/${guildID}/widget.png`,
    GUILD_WIDGET_SETTINGS: (guildID) => `/guilds/${guildID}/widget`,
    GUILDS: "/guilds",
    INTERACTION_CALLBACK: (interactionID, token) => `/interactions/${interactionID}/${token}/callback`,
    INVITE: (inviteID) => `/invite/${inviteID}`,
    OAUTH2_APPLICATION: (appID) => `/oauth2/applications/${appID}`,
    STAGE_INSTANCE_CHANNEL: (chanID) => `/stage-instances/${chanID}`,
    STAGE_INSTANCES: "/stage-instances",
    USER: (userID) => `/users/${userID}`,
    USER_CHANNELS: (userID) => `/users/${userID}/channels`,
    USER_GUILD: (userID, guildID) => `/users/${userID}/guilds/${guildID}`,
    USER_GUILDS: (userID) => `/users/${userID}/guilds`,
    USERS: "/users",
    VOICE_REGIONS: "/voice/regions",
    WEBHOOK: (hookID) => `/webhooks/${hookID}`,
    WEBHOOK_TOKEN: (hookID, token) => `/webhooks/${hookID}/${token}`,
    WEBHOOK_TOKEN_GITHUB: (hookID, token) => `/webhooks/${hookID}/${token}/github`,
    WEBHOOK_TOKEN_MESSAGE: (hookID, token, msgID) => `/webhooks/${hookID}/${token}/messages/${msgID}`,
    WEBHOOK_TOKEN_SLACK: (hookID, token) => `/webhooks/${hookID}/${token}/slack`,
};
