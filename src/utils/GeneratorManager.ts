/**
 * Generates a random token with max length of 12 chars
 * @returns {string} a randomly generated token
 */
export const generateRandomToken = ():string => {
    return Math.random().toString(36).slice(2)
}