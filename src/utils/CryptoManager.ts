import crypto from 'crypto'

/**
 * Uses the crypto module to encrypt a string using sha512
 * @param {string} value value that will be encrypted
 * @returns {string} an encrypted string from the given value
 */
export const encrypt = (value:string): string => {
    return crypto.pbkdf2Sync(value, process.env.CRYPTO_SALT, 1000, 64, `sha512`).toString(`hex`)
}