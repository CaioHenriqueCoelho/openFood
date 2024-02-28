function authentication(req, res, next) {
    const key = req.headers['x-api-key'];
    if (!key) {
        return res.status(401).json({ error: 'Chave de API não fornecida' });
    }

    const isValidKey = verify_key(key);

    if (!isValidKey) {
        return res.status(401).json({ error: 'Chave de API inválida' });
    }

    next();
}

function verify_key(apiKey) {
    return apiKey === 'abc123'; 
}

module.exports = authentication;
