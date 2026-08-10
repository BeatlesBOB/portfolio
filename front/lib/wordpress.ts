const WP_API_URL = process.env.WORDPRESS_API_URL;

export async function fetchAPI(query: string, variables: Record<string, unknown> = {}, tags: string[] = []) {

    if (!WP_API_URL) {
        throw new Error('WORDPRESS_URL is not defined');
    }

    const url = new URL(WP_API_URL);

    console.log({ url: url.toString() });

    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
        next: {
            tags: tags,
        },
    });

    const json = await res.json();
    return json.data;
}

export async function getHomeHeroContent() {
    const data = await fetchAPI(`
        query getHomeHeroContent {
            allSettings {
                generalSettingsDescription
                generalSettingsTitle
            }
        }
    `);

    const { allSettings } = data;

    return {
        description: allSettings.generalSettingsDescription,
        title: allSettings.generalSettingsTitle,
    };
}

export async function getHomepagePageId() {
    const data = await fetchAPI(`
       query getHomepagePageId {
            allSettings {
                readingSettingsPageOnFront
            }
        }
    `);

    const { allSettings } = data;

    return {
        description: allSettings.generalSettingsDescription,
        title: allSettings.generalSettingsTitle,
    };

}

export async function getProjectBySlug(slug: string) {
    const data = await fetchAPI(`
        query getProjectBySlug($slug: ID!) {
            project(id: $slug, idType: SLUG) {
                title
                content
                featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
            }
        }
    `, { slug });

    return data?.project ?? null;
}

export async function getRecentProjects() {
    const data = await fetchAPI(`
       query getRecentProjects {
            allSettings {
                readingSettingsPageOnFront
            }
        }
    `);

    const { allSettings } = data;

    return {
        description: allSettings.generalSettingsDescription,
        title: allSettings.generalSettingsTitle,
    };

}