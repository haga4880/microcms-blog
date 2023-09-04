import { createClient } from 'microcms-js-sdk'; //ES6


const client = createClient({
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
});

export default client
