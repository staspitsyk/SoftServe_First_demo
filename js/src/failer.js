function failer(reason) {
    const exeption = {
        status: 'failed',
        reason: reason,
    };

    console.log(exeption);
    return exeption;
}

export {
    failer,
};