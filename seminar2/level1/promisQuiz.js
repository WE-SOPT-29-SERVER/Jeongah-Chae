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

const getYB = members =>  {
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

getOnline(members).then(online => getOB(online)).then(console.log);
getYB(members).then(yb => getOffline(yb)).then(console.log);