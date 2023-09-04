import { createClient } from 'microcms-js-sdk'; //ES6

const ctx = useRuntimeConfig();

const client = createClient({
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
});

export default client
