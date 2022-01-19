export function getBaseUrl() {
    if (process.env.NODE_ENV === 'production') {
        return document.location.protocol + '//' + document.location.host;
    } else {
        return "http://127.0.0.1:10050"
    }
}