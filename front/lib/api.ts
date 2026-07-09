const WP_API_URL = process.env.WORDPRESS_API_URL;

export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {

    if (!WP_API_URL) {
        throw new Error('WORDPRESS_API_URL is not defined');
    }

    const url = new URL(WP_API_URL);
    url.searchParams.append('query', query);

    const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const json = await res.json();
    return json.data;
}