export const getPath = (url) => {
    return !url ? null : url.split('api/')[1]
}