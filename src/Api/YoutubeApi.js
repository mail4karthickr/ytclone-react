import axios from './AxiosApi.js';

const HttpMethod = Object.freeze({
    Get: 'Get',
    Post: 'Post'
});

class YoutubeApi {
    async getLanguages() {
        return this.makeApiRequest(
            'i18nLanguages', {
                params: {
                    part: 'snippet', h1: 'en' 
                }
            }
        )
    }

    async getRegions() {
        return this.makeApiRequest('i18nRegions', {
            params: {
                part: 'snippet', h1: 'en'
            } 
        })
    }

    async getUserInfo(accessToken) {
        return this.makeApiRequest('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            }
        )
    }
    
    async getUserSubscriptions(accessToken) {
        return this.makeApiRequest('subscriptions', {
            params: {
                "part": "snippet,contentDetails",
                "chart": "mostPopular",
                "mine": "true",
                "maxResults": "50"
            },
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
    }

    async getVideoCategories(accessToken) {
        return this.makeApiRequest('videoCategories', { 
            params: {
                "part": "snippet",
                "hl": "en",
                "regionCode": "IN"
            },
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
    }

    async getPlaylists(accessToken) {
        return this.makeApiRequest('playlists', {
            params: {
                "part": "snippet,contentDetails",
                "chart": "mostPopular",
                "mine": "true",
                "maxResults": "50"
            },
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
    }

    async getMostPopularVideos(regionCode, categoryId) {
        return this.makeApiRequest('videos', {
            params: {
                "part": `snippet,contentDetails,statistics,status,topicDetails,player`,
                "chart": "mostPopular",
                "h1": "en",
                "maxResults": "50",
                "regionCode": regionCode,
                "videoCategoryId": categoryId
            }
        })
    }

    async makeApiRequest(path, {method = HttpMethod.Get, params = {}, headers = {}} = {}) {
        switch (method) {
            case HttpMethod.Get:
                console.log("Request started - Path and Params", path, params);
                return axios({
                    url: path,
                    params: params,
                    headers: headers
                })
                .then((values) =>  { 
                    const data = values.data;
                    console.log("Request completed", data);
                    return data;
                })
                .catch((error) =>  {
                    console.log("Request failed", error.response);
                    throw error
                });
            case HttpMethod.Post:
                break;
            default: 
                break;
        }
    }
}

export default YoutubeApi;