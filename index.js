const { Client } = require('discord-rpc');

const client = new Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "#EnterTheDreamland",
            assets: {
                large_image: "dark_large",
                large_text: "Join us!",
                small_image: "purple",
                small_text: "Made by Stew#1902"
            },
            buttons: [
                { label: "Join dream!", url: "https://discord.gg/V6fBMJKUS8" },
            ]
        }
    })
    .catch(console.error)
    console.log("Status is ready to use!");
});

client.login({ clientId: "828209406922588170" }).catch(console.error);

