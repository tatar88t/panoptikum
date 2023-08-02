
const TEST_ENDPOINT = import.meta.env.VITE_TEST_ENDPOINT;

type ValueFromProcessEnv = string | undefined;

interface AppConfig {
    testUrl: ValueFromProcessEnv;
}

export const APP_CONFIG: AppConfig = {
    testUrl: TEST_ENDPOINT,
};