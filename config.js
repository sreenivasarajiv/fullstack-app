const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export function logStars(message) {
    console.log('**********************************************');
    console.log(message);
    console.log('**********************************************');
}

export default {
    port: env.PORT || 8000,
    host: env.HOST || '192.168.0.129',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
}