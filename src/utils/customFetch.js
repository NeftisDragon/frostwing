function customError() {
    throw Error("Failed to get resources.");
}

const customFetch = (time, task) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(task)
            rej(customError);
        }, time)
    })
}

export default customFetch;