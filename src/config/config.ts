import dotenv from 'dotenv';
dotenv.config();
// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT || 50051;
export const host = process.env.HOST || 'localhost';
export const hostUrl = `${host}:${port}`;

export const corsUrl = process.env.CORS_URL;

export const tokenInfo = {
    accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_DAYS),
    refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_DAYS),
    issuer: process.env.TOKEN_ISSUER,
    audience: process.env.TOKEN_AUDIENCE,
};

export const dbConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
};

export const smsGateWayInfo = {
    endpoint: process.env.SSL_SMS_GATEWAY_ENDPOINT,
    smsSid: process.env.SMS_SID,
    smsUser: process.env.SMS_USER,
    smsPassword: process.env.SMS_PASSWD,
    smsCsmId: process.env.SMS_CSMSID,
    smsMsiDn: process.env.SMS_MSISDN
};


export const logDirectory = process.env.LOG_DIR;


