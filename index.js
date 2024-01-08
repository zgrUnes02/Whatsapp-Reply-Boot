
const { default: axios } = require('axios');
const qrcode = require('qrcode-terminal');

const { Client , LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});
 

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    const content = message.body ;
	if(content != 'salam') {
        for(let i=0 ; i<1000000 ; i++)
        {
            message.reply('i am busy !') ;
        }
	}
});


client.initialize();
console.log('Hello world !') ;
