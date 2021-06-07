import React from 'react';

function App() {
  const embeddedUrl = "https://opensea.io/assets/0x1301566b3cb584e550a02d09562041ddc4989b91/28";
  
  return (
    <>
      <iframe
        id="opensea-iframe"
        title="Embedded OpenSea Marketplace"
        src={embeddedUrl}
        width="100%"
        height="1000px"
        frameBorder="0"
        allowFullScreen></iframe>
    </>
  );
}

export default App;
