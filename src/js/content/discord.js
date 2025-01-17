const https = require('https')

 const options = {
    hostname: `https://discord.com/api/v6/users/@me/relationships/${member.id}`,
    method: 'PUT',
    headers: {
    "Content-Type": "application/json",
    'Authorization': `Bot ${token}`
  }
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', d => {
        process.stdout.write(d)
    })
})
          
req.on('error', error => {
    console.error(error)
})
