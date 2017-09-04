interface ServiceConfig {
    baseUrl: string;
    AuthUrl: string;
    ClientId: string;
}

export const SERV_CONFIG: ServiceConfig = {
    baseUrl: 'http://api.inkastudios.com',
    // baseUrl : 'http://localhost:62442'
    AuthUrl: 'http://localhost:5000/remoteLogin',
    ClientId: 'ro.client'
};
