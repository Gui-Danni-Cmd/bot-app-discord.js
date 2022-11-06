const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')


client.on("ready", () => {
    console.log(`Bot foi inicializado por ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores. `)
    client.user.setGame(`Estou somente em ${guilds.size} `)
})

client.on("guildCreate", guilds => {
    console.log(`O bot entrou nos servidor: ${guilds.name}  (id: ${guilds.id}). população: ${guilds.memberCount} membros! `)
    client.user.setActivity(`Estou em ${client.guilds.size} servidores `)
})

client.on("guildDelete", guilds =>{
    console.log(`O servidor foi deletado: ${guilds.name} id: (${guilds.id})`)
    client.user.setActivity(`Servi ${client.guilds.size} servi`)
})

client.on("message", async message => {

})

client.login(config.token)