const members = require("./members");

const getOnline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = members.filter(member => member.location === "online");
            resolve(result);
        }, 500);
    });
};

const getOffline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = members.filter(member => member.location === "offline");
            resolve(result);
        }, 500);
    });
};

const getYB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = members.filter(member => member.group === "YB");
            resolve(result);
        }, 500);
    });
};

const getOB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = members.filter(member => member.group === "OB");
            resolve(result);
        }, 500);
    });
};

const functionAsync = async (members) => {
    const online = await getOnline(members);
    const onlineOB =  await getOB(online);
    console.log(onlineOB);
    const offline = await getOffline(members);
    const offlineYB = await getYB(offline);
    console.log(offlineYB);
};

functionAsync(members);