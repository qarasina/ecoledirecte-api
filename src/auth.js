import fetch from 'node-fetch' 

export default class Authentification {
    async login() {
        return (await fetch("https://api.ecoledirecte.com/v3/login.awp", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://www.ecoledirecte.com/login",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "data={\n    \"identifiant\": \"" + process.env.USERNAME + "\",\n    \"motdepasse\": \"" + process.env.PASSWORD + "\"\n}",
            "method": "POST",
            "mode": "cors"
        })).json()
    }
}