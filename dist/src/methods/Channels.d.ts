/// <reference types="node" />
/**
 * Methods for interacting with Channels and Messages
 */
declare class ChannelMethods {
    requestHandler: import("../RequestHandler");
    disableEveryone: boolean;
    /**
     * Create a new Channel Method handler
     *
     * Usually SnowTransfer creates a method handler for you, this is here for completion
     *
     * You can access the methods listed via `client.channel.method`, where `client` is an initialized SnowTransfer instance
     * @param requestHandler request handler that calls the rest api
     * @param disableEveryone Disable [at]everyone/[at]here on outgoing messages
     */
    constructor(requestHandler: import("../RequestHandler"), disableEveryone: boolean);
    /**
     * Get a channel via Id
     * @param channelId Id of the channel
     * @returns [discord channel](https://discord.com/developers/docs/resources/channel#channel-object) object
     *
     * @example
     * let client = new SnowTransfer('TOKEN')
     * let channel = await client.channel.getChannel('channel id')
     */
    getChannel(channelId: string): Promise<import("@amanda/discordtypings").ChannelData>;
    /**
     * Update a channel or thread
     * @param channelId Id of the channel
     * @param data Data to send
     * @returns [discord channel](https://discord.com/developers/docs/resources/channel#channel-object) object
     *
     * | Permissions needed | Condition                                                                                                       |
     * |--------------------|-----------------------------------------------------------------------------------------------------------------|
     * | MANAGE_CHANNELS    | always                                                                                                          |
     * | READ_MESSAGES      | When editing a Thread to set archived to false                                                                  |
     * | MANAGE_THREADS     | When editing a Thread to change the name, archived, auto_archive_duration, rate_limit_per_user or locked fields |
     *
     * @example
     * // This example updates a channel with the passed id to use "New Name" as it's name and "Look at this cool topic" as the topic
     * let client = new SnowTransfer('TOKEN')
     * let updateData = {
     *   name: 'New Name',
     *   topic: 'Look at this cool topic'
     * }
     * client.channel.updateChannel('channel id', updateData)
     */
    updateChannel(channelId: string, data: EditChannelData): Promise<import("@amanda/discordtypings").ChannelData>;
    /**
     * Delete a channel or thread via Id
     *
     * This either **deletes** a Guild Channel or **closes** a Direct Message Channel
     *
     * **Be careful with deleting Guild Channels as this can not be undone!**
     *
     * When deleting a category, this does **not** delete the child channels of a category. They will just have their `parent_id` removed.
     * @param channelId - Id of the channel
     * @returns [discord channel](https://discord.com/developers/docs/resources/channel#channel-object) object
     *
     * | Permissions needed | Condition                        |
     * |--------------------|----------------------------------|
     * | MANAGE_CHANNELS    | When deleting a Guild Channel    |
     * | MANAGE_THREADS     | When channelId is a Thread's ID  |
     */
    deleteChannel(channelId: string): Promise<import("@amanda/discordtypings").ChannelData>;
    /**
     * Get a list of messages from a channel
     * @param channelId Id of the channel
     * @returns Array of [discord message](https://discord.com/developers/docs/resources/channel#message-object) objects
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | READ_MESSAGES      | always    |
     *
     * @example
     * // Fetch the last 20 messages from a channel
     * let client = new SnowTransfer('TOKEN')
     * let options = {
     *   limit: 20
     * }
     * let messages = await client.channel.getChannelMessages('channel id', options);
     */
    getChannelMessages(channelId: string, options?: GetMessageOptions): Promise<Array<import("@amanda/discordtypings").MessageData>>;
    /**
     * Get a single message via Id
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @returns [discord message](https://discord.com/developers/docs/resources/channel#message-object) object
     *
     * | Permissions needed   | Condition |
     * |----------------------|-----------|
     * | READ_MESSAGE_HISTORY | always    |
     *
     * @example
     * // Get a single message from a channel via id
     * let client = new SnowTransfer('TOKEN')
     * let message = await client.channel.getChannelMessage('channel id', 'message id')
     */
    getChannelMessage(channelId: string, messageId: string): Promise<import("@amanda/discordtypings").MessageData>;
    /**
     * Creates a new Message within a channel
     *
     * **Make sure to use a filename with a proper extension (e.g. png, jpeg, etc.) when you want to upload files**
     * @param channelId Id of the Channel to sent a message to
     * @param data Data to send, if data is a string it will be used as the content of the message,
     * if data is not a string you should take a look at the properties below to know what you may send
     * @returns [discord message](https://discord.com/developers/docs/resources/channel#message-object) object
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | SEND_MESSAGES      | always    |
     *
     * @example
     * // Make a bot say "hi" within a channel
     * // createMessage sends the passed data as content, when you give it a string
     * let client = new SnowTransfer('TOKEN')
     * client.channel.createMessage('channel id', 'hi')
     *
     * @example
     * // Send a rich embed object
     * let client = new SnowTransfer('TOKEN')
     * let embedData = {
     *   title: 'This is a nice embed',
     *   description: 'But winter is so cold',
     *   fields: [
     *       {name: 'Brr', value: 'Insert snowflake emoji here'}
     *     ]
     * }
     * client.channel.createMessage('channel id', {embed: embedData})
     *
     * @example
     * // Send a file with a comment
     * let client = new SnowTransfer('TOKEN')
     * // fileData will be a buffer with the data of the png image.
     * let fileData = fs.readFileSync('nice_picture.png') // You should probably use fs.readFile, since it's asynchronous, synchronous methods may lag your bot.
     * client.channel.createMessage('channel id', {content: 'This is a nice picture', file: {name: 'Optional Filename.png', file: fileData}})
     */
    createMessage(channelId: string, data: string | CreateMessageData, options?: {
        disableEveryone?: boolean;
    }): Promise<import("@amanda/discordtypings").MessageData>;
    /**
     * Edit a message sent by the current user
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @param data Data to send
     * @returns [discord message](https://discord.com/developers/docs/resources/channel#message-object) object
     *
     * @example
     * // Simple ping response
     * let client = new SnowTransfer('TOKEN')
     * let time = Date.now()
     * let message = await client.channel.createMessage('channel id', 'pong')
     * client.channel.editMessage('channel id', message.id, `pong ${Date.now() - time}ms`)
     */
    editMessage(channelId: string, messageId: string, data: string | EditMessageData, options?: {
        disableEveryone?: boolean;
    }): Promise<import("@amanda/discordtypings").MessageData>;
    /**
     * Delete a message
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition                                    |
     * |--------------------|----------------------------------------------|
     * | MANAGE_MESSAGES    | When the bot isn't the author of the message |
     *
     * @example
     * // Delete a message
     * let client = new SnowTransfer('TOKEN')
     * client.channel.deleteMessage('channel id', 'message id')
     */
    deleteMessage(channelId: string, messageId: string): Promise<void>;
    /**
     * Bulk delete messages, messages may not be older than 2 weeks
     * @param channelId Id of the channel
     * @param messages array of message ids to delete
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | MANAGE_MESSAGES    | always    |
     */
    bulkDeleteMessages(channelId: string, messages: Array<string>): Promise<void>;
    /**
     * Adds a reaction to a message
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @param emoji uri encoded reaction emoji to add,
     * you may either use a discord emoji in the format `:emoji_name:emoji_id` or a unicode emoji,
     * which can be found [here](http://www.unicode.org/emoji/charts/full-emoji-list.html)
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed   | Condition                                          |
     * |----------------------|----------------------------------------------------|
     * | READ_MESSAGE_HISTORY | always                                             |
     * | ADD_REACTIONS        | When no other user has reacted with the emoji used |
     *
     * @example
     * // This example uses a discord emoji
     * let client = new SnowTransfer('TOKEN');
     * client.channel.createReaction('channel Id', 'message Id', encodeURIComponent(':awooo:322522663304036352'));
     *
     * @example
     * // using a utf-8 emoji
     * let client = new SnowTransfer('TOKEN');
     * client.channel.createReaction('channel Id', 'message Id', encodeURIComponent('😀'));
     */
    createReaction(channelId: string, messageId: string, emoji: string): Promise<void>;
    /**
     * Delete a reaction added by the current user from a message
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @param emoji reaction emoji
     * @returns Resolves the Promise on successful execution
     *
     * @example
     * // This example uses a discord emoji
     * let client = new SnowTransfer('TOKEN');
     * client.channel.deleteReactionSelf('channel Id', 'message Id', encodeURIComponent(':awooo:322522663304036352'));
     *
     * @example
     * // using a utf-8 emoji
     * let client = new SnowTransfer('TOKEN');
     * client.channel.deleteReactionSelf('channel Id', 'message Id', encodeURIComponent('😀'));
     */
    deleteReactionSelf(channelId: string, messageId: string, emoji: string): Promise<void>;
    /**
     * Delete a reaction from a message
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @param emoji reaction emoji
     * @param userId Id of the user
     * @returns Resolves the Promise on successful execution
     *
     * | Permission        | Condition |
     * |-------------------|-----------|
     * | MANAGE_MESSAGES   | always    |
     *
     * @example
     * // This example uses a discord emoji
     * let client = new SnowTransfer('TOKEN');
     * client.channel.deleteReaction('channel Id', 'message Id', encodeURIComponent(':awooo:322522663304036352'), 'user Id');
     *
     * @example
     * // using a utf-8 emoji
     * let client = new SnowTransfer('TOKEN');
     * client.channel.deleteReaction('channel Id', 'message Id', encodeURIComponent('😀'), 'user Id');
     */
    deleteReaction(channelId: string, messageId: string, emoji: string, userId?: string): Promise<void>;
    /**
     * Get a list of users that reacted with a certain emoji on a certain message
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @param emoji reaction emoji
     * @returns Array of [user objects](https://discord.com/developers/docs/resources/user#user-object)
     *
     * @example
     * // This example uses a discord emoji
     * let client = new SnowTransfer('TOKEN');
     * let reactions = await client.channel.getReactions('channel Id', 'message Id', encodeURIComponent(':awooo:322522663304036352'));
     */
    getReactions(channelId: string, messageId: string, emoji: string): Promise<Array<import("@amanda/discordtypings").UserData>>;
    /**
     * Delete all reactions from a message
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | MANAGE_MESSAGES    | always    |
     */
    deleteAllReactions(channelId: string, messageId: string): Promise<void>;
    /**
     * Modify the permission overwrites of a channel
     * @param channelId Id of the channel
     * @param permissionId Id of the permission overwrite
     * @param data modified [permission overwrite](https://discord.com/developers/docs/resources/channel#edit-channel-permissions-json-params) object
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | MANAGE_ROLES       | always    |
     */
    editChannelPermission(channelId: string, permissionId: string, data: Partial<import("@amanda/discordtypings").PermissionOverwriteData>): Promise<void>;
    /**
     * Delete a permission overwrite from a channel
     * @param channelId Id of the channel
     * @param permissionId Id of the permission overwrite
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | MANAGE_ROLES       | always    |
     */
    deleteChannelPermission(channelId: string, permissionId: string): Promise<void>;
    /**
     * Get a list of invites for a channel
     * @param channelId Id of the channel
     * @returns Array of [invite objects](https://discord.com/developers/docs/resources/invite#invite-object) (with metadata)
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | MANAGE_CHANNELS    | always    |
     */
    getChannelInvites(channelId: string): Promise<Array<import("@amanda/discordtypings").InviteData>>;
    /**
     * Create an invite for a channel
     *
     * If no data argument is passed, the invite will be created with the defaults listed below
     * @param channelId - Id of the channel
     * @param data invite data (optional)
     * @returns [Invite object](https://discord.com/developers/docs/resources/invite#invite-object) (with metadata)
     *
     * | Permissions needed    | Condition |
     * |-----------------------|-----------|
     * | CREATE_INSTANT_INVITE | always    |
     */
    createChannelInvite(channelId: string, data?: CreateInviteData): Promise<import("@amanda/discordtypings").InviteData>;
    /**
     * Send an indicator that the current user is typing within a channel.
     *
     * **You should generally avoid this method unless used for longer computations (>1s)**
     * @param channelId Id of the channel
     * @returns Resolves the Promise on successful execution
     */
    startChannelTyping(channelId: string): Promise<void>;
    /**
     * Get a list of pinned messages for a channel
     * @param channelId Id of the channel
     * @returns Array of [message objects](https://discord.com/developers/docs/resources/channel#message-object)
     */
    getChannelPinnedMessages(channelId: string): Promise<Array<import("@amanda/discordtypings").MessageData>>;
    /**
     * Pin a message within a channel
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | MANAGE_MESSAGES    | always    |
     */
    addChannelPinnedMessage(channelId: string, messageId: string): Promise<void>;
    /**
     * Remove a pinned message from a channel
     * @param channelId - Id of the channel
     * @param messageId - Id of the message
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | MANAGE_MESSAGES    | always    |
     */
    removeChannelPinnedMessage(channelId: string, messageId: string): Promise<void>;
    /**
     * Add a user to a group dm
     * @param channelId Id of the channel
     * @param userId Id of the user to be removed
     * @param data Data to send to this endpoint
     * @param data.access_token access token of the user that granted the app the gdm.join scope
     * @param data.nick nickname of the user being added
     * @returns Resolves the Promise on successful execution
     *
     * | OAUTH2 Scopes |
     * |---------------|
     * | gdm.join      |
     */
    addDmChannelRecipient(channelId: string, userId: string, data: {
        access_token: string;
        nick?: string;
    }): Promise<void>;
    /**
     * Remove a recipient from a group dm
     * @param channelId Id of the channel
     * @param userId Id of the user to be removed
     * @returns Resolves the Promise on successful execution
     */
    removeDmChannelRecipient(channelId: string, userId: string): Promise<void>;
    /**
     * Creates a public thread off a message in a channel
     * @param channelId Id of the channel
     * @param messageId Id of the message
     * @param options Thread meta data
     * @returns [thread channel](https://discord.com/developers/docs/resources/channel#channel-object) object
     */
    createPublicThread(channelId: string, messageId: string, options: {
        name: string;
        auto_archive_duration: 60 | 1440 | 4320 | 10080;
    }): Promise<import("@amanda/discordtypings").ThreadChannelData>;
    /**
     * Creates a private thread under a channel
     * @param channelId Id of the channel
     * @param options Thread meta data
     * @returns [thread channel](https://discord.com/developers/docs/resources/channel#channel-object) object
     */
    createPrivateThread(channelId: string, options: {
        name: string;
        auto_archive_duration: 60 | 1440 | 4320 | 10080;
    }): Promise<import("@amanda/discordtypings").ThreadChannelData>;
    /**
     * Join a thread
     * @param channelId Id of the channel
     * @returns Resolves the Promise on successful execution
     */
    joinThread(channelId: string): Promise<void>;
    /**
     * Add a user to a thread
     * @param channelId Id of the channel
     * @param userId Id of the user to add
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition |
     * |--------------------|-----------|
     * | SEND_MESSAGES      | always    |
     */
    addThreadMember(channelId: string, userId: string): Promise<void>;
    /**
     * Leave a thread
     * @param channelId Id of the channel
     * @returns Resolves the Promise on successful execution
     */
    leaveThread(channelId: string): Promise<void>;
    /**
     * Remove a user from a thread
     * @param channelId Id of the channel
     * @param userId Id of the user to remove
     * @returns Resolves the Promise on successful execution
     *
     * | Permissions needed | Condition                                            |
     * |--------------------|------------------------------------------------------|
     * | MANAGE_THREADS     | if the current user is not the creator of the thread |
     */
    removeThreadMember(channelId: string, userId: string): Promise<void>;
    /**
     * Gets all members within a thread
     * @param channelId Id of the Thread
     * @returns Array of [thread member objects](https://discord.com/developers/docs/resources/channel#thread-member-object)
     *
     * | Permissions needed                | Condition |
     * |-----------------------------------|-----------|
     * | GUILD_MEMBERS gateway intent      | always    |
     */
    getChannelThreadMembers(channelId: string): Promise<Array<import("@amanda/discordtypings").ThreadMemberData>>;
    /**
     * Gets all threads that are active within a GuildChannel (inclusive of public and private threads)
     * @param channelId Id of the Channel
     * @returns Array of [channel objects with message_count, member_count, thread_metadata and optional member fields](https://discord.com/developers/docs/resources/channel#channel-object)
     *
     * | Permissions needed                | Condition                                  |
     * |-----------------------------------|--------------------------------------------|
     * | CurrentUser added to Thread       | if CurrentUser doesn't have MANAGE_THREADS |
     * | MANAGE_THREADS                    | if CurrentUser isn't added to Thread       |
     */
    getChannelActiveThreads(channelId: string): Promise<Array<import("@amanda/discordtypings").ThreadChannelData>>;
    /**
     * Gets all threads that are private and archived within a GuildChannel
     * @param channelId Id of the Channel
     * @returns Array of [channel objects with message_count, member_count, thread_metadata and optional member fields](https://discord.com/developers/docs/resources/channel#channel-object)
     *
     * | Permissions needed                | Condition                                  |
     * |-----------------------------------|--------------------------------------------|
     * | CurrentUser added to Thread       | if CurrentUser doesn't have MANAGE_THREADS |
     * | MANAGE_THREADS                    | if CurrentUser isn't added to Thread       |
     */
    getChannelArchivedPrivateThreads(channelId: string): Promise<Array<import("@amanda/discordtypings").ThreadChannelData>>;
    /**
     * Gets all threads that are private and archived within a GuildChannel that the CurrentUser is apart of
     * @param channelId Id of the Channel
     * @returns Array of [channel objects with message_count, member_count, thread_metadata and optional member fields](https://discord.com/developers/docs/resources/channel#channel-object)
     *
     * | Permissions needed                | Condition                                  |
     * |-----------------------------------|--------------------------------------------|
     * | CurrentUser added to Thread       | if CurrentUser doesn't have MANAGE_THREADS |
     * | MANAGE_THREADS                    | if CurrentUser isn't added to Thread       |
     */
    getChannelArchivedPrivateThreadsUser(channelId: string): Promise<Array<import("@amanda/discordtypings").ThreadChannelData>>;
    /**
     * Gets all threads that are public and archived within a GuildChannel
     * @param channelId Id of the Channel
     * @returns Array of [channel objects with message_count, member_count, thread_metadata and optional member fields](https://discord.com/developers/docs/resources/channel#channel-object)
     *
     * | Permissions needed                | Condition                                  |
     * |-----------------------------------|--------------------------------------------|
     * | CurrentUser added to Thread       | if CurrentUser doesn't have MANAGE_THREADS |
     * | MANAGE_THREADS                    | if CurrentUser isn't added to Thread       |
     */
    getChannelArchivedPublicThreads(channelId: string): Promise<Array<import("@amanda/discordtypings").ThreadChannelData>>;
}
interface EditChannelData {
    /**
     * New name of the channel
     */
    name?: string;
    /**
     * New position of the channel
     */
    position?: number;
    /**
     * New topic of the channel
     */
    topic?: string;
    /**
     * Update nsfw type of the channel
     */
    nsfw?: boolean;
    /**
     * Update bitrate of the channel
     */
    bitrate?: number;
    /**
     * Update the limit of users that are allowed to be in a channel
     */
    user_limit?: number;
    /**
     * Update the permission overwrites
     */
    permission_overwrites?: Array<import("@amanda/discordtypings").PermissionOverwriteData>;
    /**
     * Id of the parent category of the channel
     */
    parent_id?: string;
    /**
     * Update whether or not a thread is archived
     */
    archived?: boolean;
    /**
     * Update how long it takes for a thread to become stale and archived automatically
     */
    auto_archive_duration?: number;
    /**
     * Update whether or not a thread is locked
     */
    locked?: boolean;
    /**
     * Update if slowmode is enabled and how long slow mode should last
     */
    rate_limit_per_user?: number;
}
interface GetMessageOptions {
    /**
     * Get's messages around the Id of the passed snowflake
     */
    around?: string;
    /**
     * Get's messages before the Id of the passed snowflake
     */
    before?: string;
    /**
     * Get's messages after the Id of the passed snowflake
     */
    after?: string;
    /**
     * Number of messages to get, values between 1-100 allowed
     */
    limit?: number;
}
interface CreateMessageData {
    /**
     * [Embed](https://discord.com/developers/docs/resources/channel#embed-object) to send
     */
    embed?: import("@amanda/discordtypings").EmbedData;
    /**
     * Content of the message
     */
    content?: string | null;
    /**
     * "a nonce that can be used for optimistic message sending"
     */
    nonce?: string | number;
    /**
     * if this message is text-to-speech
     */
    tts?: boolean | null;
    /**
     * File that should be uploaded
     */
    file?: {
        /**
         * Name of the file
         */
        name?: string;
        /**
         * Buffer with file contents
         */
        file: Buffer;
    };
    allowed_mentions?: {
        parse?: Array<"roles" | "users" | "everyone">;
        roles?: Array<string>;
        users?: Array<string>;
        replied_user?: boolean;
    };
    message_reference?: {
        message_id?: string;
        channel_id?: string;
        guild_id?: string;
        fail_if_not_exists?: boolean;
    };
}
interface EditMessageData {
    /**
     * Content of the message
     */
    content?: string | null;
    /**
     * [Embed](https://discord.com/developers/docs/resources/channel#embed-object) to send
     */
    embed?: import("@amanda/discordtypings").EmbedData;
    allowed_mentions?: {
        parse?: Array<"roles" | "users" | "everyone">;
        roles?: Array<string>;
        users?: Array<string>;
        replied_user?: boolean;
    };
}
interface CreateInviteData {
    /**
     * max age of the invite in seconds
     */
    max_age?: number;
    /**
     * max uses of the invite
     */
    max_uses?: number;
    /**
     * if this invite only allows temporary membership
     */
    temporary?: boolean;
    /**
     * does not try to re-use similar invites when true (useful for creating many one-time invites)
     */
    unique?: boolean;
}
export = ChannelMethods;
