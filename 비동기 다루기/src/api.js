export function request(url, successCallback, fallCallback) {
    const xhr = new XMLHttpRequest() //요즘은 fetch사용
    xhr.addEventListener("load", (e) => {
if(xhr.readyState === 4) {
    if(xhr.status === 200) {
    successCallback(JSON.parse(xhr.responseText))
} else {
    fallCallback(xhr.statusText)
    }
}
})
xhr.addEventListener('error', (e) => fallCallback(xhr.statusText))

xhr.open('GET', url)
xhr.send()
}
