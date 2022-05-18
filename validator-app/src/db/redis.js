const {createClient} = require('redis');

  const client = createClient({
      url: process.env.REDIS_URL
    })

  client.on('error', (err) => console.log('Redis Client Error', err))

  client.connect()
console.log('redis connect');
module.exports = client 