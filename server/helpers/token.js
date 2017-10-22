const jwt = require('jsonwebtoken');


// encrypts user id and returns token string 
function createToken(userId) {
    return jwt.sign(
        { userId: userId },
        'MY_SECRET_KEY',
        { expiresIn: 60 * 60 }
    );
}

// returns decrypted object with user id 
function verifyToken(token) {
    return jwt.verify(token, 'MY_SECRET_KEY').userId;
}


module.exports = {
    createToken,
    verifyToken
}