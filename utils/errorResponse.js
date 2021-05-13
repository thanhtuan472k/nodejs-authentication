class ErrorResponse extends Error {
    constructor(massage, statusCode) {
        super(message);
        this.statusCode = statusCode
    }
}

module.exports = ErrorResponse;