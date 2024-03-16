const respon = (status_code, message, res) => {
    res.send(status_code, message)
}

module.exports = respon;