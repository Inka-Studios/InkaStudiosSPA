interface ServiceConfig {
    client: string;
    secret: string;
    scope: string;
    grants: string;
}

export const AUTH_CONFIG: ServiceConfig = {
    client: 'client',
    secret: 'secret',
    scope: 'api1',
    grants: 'client_credentials'
};
