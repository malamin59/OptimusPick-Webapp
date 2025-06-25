export const myRecommendedPromise = (email, accessToken) => {
    // console.log("Access Token:", accessToken);

    return fetch(`${import.meta.env.VITE_API_URL}/getMyReCommendation/${email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
    }).then(res => res.json());
};
