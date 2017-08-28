interface ServiceConfig {
    baseUrl: string;
    AuthUrl: string;
}

export const SERV_CONFIG: ServiceConfig = {
    baseUrl: 'http://api.circuitperou.com',
    // baseUrl : 'http://localhost:62442'
    AuthUrl: 'http://localhost:5001/api/identity'
};
