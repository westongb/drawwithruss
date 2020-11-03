const uriBase = process.env.NODE_ENV !== 'production' ? (
    "http://localhost:3000"
) : (
    ""
)

module.exports.uriBase = uriBase