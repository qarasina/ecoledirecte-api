import fetch from 'node-fetch'

export default class Task {
    async getTask(startDate, endDate, token) {
        return (await fetch("https://api.ecoledirecte.com/v3/E/492/emploidutemps.awp?verbe=get&", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://www.ecoledirecte.com/Eleves/492/EmploiDuTemps",
            "referrerPolicy": "no-referrer-when-downgrade",
                "body": "data={\n    \"dateDebut\": \"" + startDate +  "\",\n    \"dateFin\": \"" + endDate + "\",\n    \"avecTrous\": false,\n    \"token\": \"" + token + "\"\n}",
                "method": "POST",
                "mode": "cors"
        })).json()
    }
}