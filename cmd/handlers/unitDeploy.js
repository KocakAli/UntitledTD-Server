import addHandler from "#cmd/handlePacket";

addHandler('unitDeploy', (c, data) => {
    console.log("deploy triggered bro")
    c.sendDeploy(data);
});




