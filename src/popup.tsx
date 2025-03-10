import React from 'react'
import ReactDOM from 'react-dom'
// @ts-ignore
import BingIcon from '../public/icon1024.png'

const Popup = () => {
  return (
    <>
      <a
        href="https://bing.com/chat"
        target="_blank"
        rel="noreferrer noopener nofollow"
        style={{ textDecoration: 'none' }}
      >
        <div style={{ display: 'grid', placeItems: 'center', width: '300px', height: '100px' }}>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid rgb(156 163 175)',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 0 0 1px rgb(156 163 175), 0 1px 3px 0 rgb(156 163 175)',
            }}
          >
            <img src={BingIcon} style={{ width: '1rem', height: '1rem', padding: 'auto', verticalAlign: 'middle' }} />
            <span style={{ margin: 'auto auto auto 5px', fontSize: '0.8rem' }}>Open Bing Chat</span>
          </button>
        </div>
      </a>
      <p
        style={{
          margin: '0 10px',
          width: '300px',
          fontFamily:
            "ui-rounded, 'SF Pro Rounded', 'SF NS Rounded', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, -system-ui, sans-serif",
          fontSize: '0.8rem',
          fontWeight: 400,
          lineHeight: '1.5',
          color: 'rgb(156 163 175)',
        }}
      >
        Found a Bug?{' '}
        <a
          href="https://github.com/anaclumos/bing-chat-for-all-browsers"
          target="_blank"
          rel="noreferrer noopener nofollow"
          style={{ color: 'black', textDecoration: 'underline' }}
        >
          Let me know on GitHub
        </a>
        {'.'}
        <br />
        Leave us a review for{' '}
        <a
          href="https://chrome.google.com/webstore/detail/bing-chat-for-all-browser/jofbglonpbndadajbafmmaklbfbkggpo"
          target="_blank"
          rel="noreferrer noopener nofollow"
          style={{ color: 'black', textDecoration: 'underline' }}
        >
          Chrome
        </a>{' '}
        or{' '}
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/bing-chat-for-all-browsers/"
          target="_blank"
          rel="noreferrer noopener nofollow"
          style={{ color: 'black', textDecoration: 'underline' }}
        >
          Firefox
        </a>
        .
      </p>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('root')
)
