"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Ratelimiter_1 = __importDefault(require("./Ratelimiter"));
const RequestHandler_1 = __importDefault(require("./RequestHandler"));
const Channels_1 = __importDefault(require("./methods/Channels"));
const Users_1 = __importDefault(require("./methods/Users"));
const Emojis_1 = __importDefault(require("./methods/Emojis"));
const Webhooks_1 = __importDefault(require("./methods/Webhooks"));
const Guilds_1 = __importDefault(require("./methods/Guilds"));
const GuildTemplate_1 = __importDefault(require("./methods/GuildTemplate"));
const Interactions_1 = __importDefault(require("./methods/Interactions"));
const Invites_1 = __importDefault(require("./methods/Invites"));
const Voices_1 = __importDefault(require("./methods/Voices"));
const Bots_1 = __importDefault(require("./methods/Bots"));
const AuditLog_1 = __importDefault(require("./methods/AuditLog"));
const StageInstance_1 = __importDefault(require("./methods/StageInstance"));
const Endpoints_1 = __importDefault(require("./Endpoints"));
const { version } = require("../package.json");
class SnowTransfer {
    /**
     * Create a new Rest Client
     * @param token Discord Bot token to use
     * @param options options
     */
    constructor(token, options) {
        if (!token || token === "") {
            throw new Error("Missing token");
        }
        if (!token.startsWith("Bot")) {
            token = `Bot ${token}`;
        }
        this.options = { baseHost: Endpoints_1.default.BASE_HOST, disableEveryone: false, sentryOptions: { extra: { snowtransferVersion: version } }, useRedis: false };
        this.token = token;
        Object.assign(this.options, options);
        this.ratelimiter = new Ratelimiter_1.default();
        this.requestHandler = new RequestHandler_1.default(this.ratelimiter, {
            token: this.token,
            baseHost: this.options.baseHost || Endpoints_1.default.BASE_HOST
        });
        this.channel = new Channels_1.default(this.requestHandler, this.options.disableEveryone);
        this.user = new Users_1.default(this.requestHandler);
        this.emoji = new Emojis_1.default(this.requestHandler);
        this.webhook = new Webhooks_1.default(this.requestHandler, this.options.disableEveryone);
        this.guild = new Guilds_1.default(this.requestHandler);
        this.guildTemplate = new GuildTemplate_1.default(this.requestHandler);
        this.interaction = new Interactions_1.default(this.requestHandler, this.webhook);
        this.invite = new Invites_1.default(this.requestHandler);
        this.voice = new Voices_1.default(this.requestHandler);
        this.bot = new Bots_1.default(this.requestHandler);
        this.auditLog = new AuditLog_1.default(this.requestHandler);
        this.stageInstance = new StageInstance_1.default(this.requestHandler);
    }
}
module.exports = SnowTransfer;
