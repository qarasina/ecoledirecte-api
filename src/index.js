import dotenv from 'dotenv'
import Authentification from './auth'
import Task from './task'
import fastify from 'fastify'

async function main() {
    dotenv.config()

    const auth = new Authentification()

    const { code, token } = await auth.login()

    if (code !== 200) {
        throw "Error on login"
    }

    const tasks = new Task()

    const server = fastify({
        logger: true 
    })

    server.post('/getTask', async (req, res) => {
        const { startDate, endDate } = req.body
        const task = await tasks.getTask(startDate, endDate, token)
        return task 
    })

    server.listen(process.env.PORT)
} 

main()