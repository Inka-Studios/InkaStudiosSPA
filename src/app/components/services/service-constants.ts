interface ServiceConfig {
    baseUrl: string;
    tokenEndpointUrl: string;
}

export const SERV_CONFIG: ServiceConfig = {
    baseUrl: 'http://api.circuitperou.com',
    // baseUrl : 'http://localhost:62442'
    tokenEndpointUrl: 'http://localhost:5000/connect/token'
};
