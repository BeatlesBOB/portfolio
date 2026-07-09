import { fetchAPI } from './api';

export async function getHomeHeroContent() {
    const data = await fetchAPI(`
        query getHomeHeroContent {
            allSettings {
                generalSettingsDescription
                generalSettingsTitle
            }
        }
    `);

    console.log({ data });
}