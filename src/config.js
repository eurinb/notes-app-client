export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-west-1",
        BUCKET: "notes-app-uploads-inb"
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://dnz9ebq9dk.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_7BLA1d5mv",
        APP_CLIENT_ID: "5t47i8r1l39pnviejolvb01pc",
        IDENTITY_POOL_ID: "eu-west-1:b53840ca-747f-4587-8dc1-298f255869b7"
    }
};