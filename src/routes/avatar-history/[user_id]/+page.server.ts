import type { PageServerLoad } from './$types';
import { HINA_SERVER_API_KEY, HINA_SERVER_ENDPOINT } from '$env/static/private';

export const load: PageServerLoad = async ({ params, fetch }) => {
    const fetchAvatarHistory = async () => {
        const res = await fetch(`${HINA_SERVER_ENDPOINT}/api/avatar-history/${params.user_id}`, {
            headers: {
                Authorization: HINA_SERVER_API_KEY,
            },
        });

        if (res.status === 404) {
            return { status: 404, avatars: [] };
        }

        return { status: 200, avatars: await res.json() };
    };

    return fetchAvatarHistory();
};

export interface Data {
    status: 404 | 200;
    avatars: string[];
}
