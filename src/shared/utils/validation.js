"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodSchemas = void 0;
exports.validateData = validateData;
exports.validateOrThrow = validateOrThrow;
const user_1 = require("../schemas/user");
const incident_1 = require("../schemas/incident");
// Re-export schemas with different names to avoid conflicts
exports.zodSchemas = {
    // User schemas
    loginCredentials: user_1.loginCredentialsSchema,
    signupData: user_1.signupDataSchema,
    updateProfile: user_1.updateProfileSchema,
    // Incident schemas
    incident: incident_1.incidentSchema,
    incidentReport: incident_1.incidentReportSchema,
    incidentSearchFilters: incident_1.incidentSearchFiltersSchema,
    mediaFile: incident_1.mediaFileSchema,
};
// Validation helper functions
function validateData(schema, data) {
    const result = schema.safeParse(data);
    if (result.success) {
        return { success: true, data: result.data };
    }
    else {
        return { success: false, errors: result.error };
    }
}
function validateOrThrow(schema, data) {
    return schema.parse(data);
}
//# sourceMappingURL=validation.js.map