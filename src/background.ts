const MOBILE_UA =
  'Mozilla/5.0 (Linux; Android 13; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36 EdgA/110.0.1587.41'
const DESKTOP_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.100.0'

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    const { requestHeaders } = details
    if (!requestHeaders) return undefined
    const newHeaders = requestHeaders.map((header) => {
      if (header.name.toLowerCase() === 'user-agent') {
        if (header.value?.toLowerCase().includes('mobile')) header.value = MOBILE_UA
        else header.value = DESKTOP_UA
      }
      return header
    })
    return { requestHeaders: newHeaders }
  },
  { urls: ['*://*.bing.com/*'] },
  ['blocking', 'requestHeaders']
)

chrome.runtime.onInstalled.addListener((object) => {
  let externalUrl = 'http://github.com/anaclumos/bing-chat-for-all-browsers#firefox'
  console.log(object.reason)
  if (object.reason.toLowerCase().includes('install')) {
    chrome.tabs.create({ url: externalUrl })
  }
})
