/**
 * Methods for interacting with Guild Audit Logs
 */
declare class AuditLogMethods {
    requestHandler: import("../RequestHandler");
    /**
     * Create a new Audit Log Method Handler
     *
     * Usually SnowTransfer creates a method handler for you, this is here for completion
     *
     * You can access the methods listed via `client.auditLog.method`, where `client` is an initialized SnowTransfer instance
     * @param requestHandler request handler that calls the rest api
     */
    constructor(requestHandler: import("../RequestHandler"));
    /**
     * Get the audit logs of the specified guild id
     * @param guildId id of a guild
     * @param data optional audit log filter values
     * @returns An object with audit log data
     *
     * | Permissions needed |
     * |--------------------|
     * | VIEW_AUDIT_LOG     |
     */
    getAuditLog(guildId: string, data?: GetAuditLogOptions): Promise<import("@amanda/discordtypings").AuditLogObject>;
}
interface GetAuditLogOptions {
    /**
     * Filter the audit log with the id of a user
     */
    user_id?: string;
    /**
     * [Type](https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events) of the audit log event
     */
    action_type?: import("@amanda/discordtypings").AuditLogEventType;
    /**
     * Filter the audit log before a certain entry id
     */
    before?: string;
    /**
     * How many entries are returned (min 1, max 100)
     */
    limit: number;
}
export = AuditLogMethods;
