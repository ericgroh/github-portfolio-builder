require('dotenv').config();
var request = require('request-promise');
const USERNAME = process.env.USERNAME;
const BASE_URL = `https://api.github.com`;

module.exports.getRepos = async () => {
    var options = {
        uri: `${BASE_URL}/users/${USERNAME}/repos`,
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': `${USERNAME}`
        },
        json: true // Automatically parses the JSON string in the response
    };
    try {
        let repos = await request(options);
        
        repos = repos.map( repo => {
            return { 
                name: repo.name, 
                description: repo.description,
                updated_at: repo.updated_at,
                created_at: repo.created_at
            };
        })

        console.log(repos);
        
        return repos;
    } catch (error) {
        console.log("caught error: ", error);
        
    }
    
}
