// Update these four variables with values from your B2C tenant in the Azure portal
const clientID = "2ac16961-5c7c-4c93-a055-6d5e90778a8a";//"93733604-cc77-4a3c-a604-87084dd55348"; // Application (client) ID of your API's application registration
const b2cDomainHost = "edson0320201b2c.b2clogin.com";//"fabrikamb2c.b2clogin.com";
const tenantId = "edson0320201b2c.onmicrosoft.com";//"fabrikamb2c.onmicrosoft.com"; // Alternatively, you can use your Directory (tenant) ID (a GUID)
const policyName = "B2C_1A_signup_signin";
//const policyName = "b2c_1_susi";

const config = {
    identityMetadata: "https://" + b2cDomainHost + "/" + tenantId + "/" + policyName + "/v2.0/.well-known/openid-configuration/",
    clientID: clientID,
    policyName: policyName,
    isB2C: true,
    validateIssuer: false,
    loggingLevel: 'info',
    loggingNoPII: false,
    passReqToCallback: false
}

module.exports = config;
