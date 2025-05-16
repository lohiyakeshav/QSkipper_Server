// Quick test script for ping functionality
require('dotenv').config();

async function testPing() {
  try {
    // Dynamically import node-fetch
    const { default: fetch } = await import('node-fetch');
    
    // Use ROOT_URL from environment
    let pingUrl = process.env.ROOT_URL || 'https://qskipper-server.onrender.com';
    
    // Ensure the URL has a protocol
    if (!pingUrl.startsWith('http')) {
      pingUrl = `https://${pingUrl}`;
    }
    
    console.log(`Testing ping to: ${pingUrl}`);
    const res = await fetch(pingUrl);
    console.log(`Ping test successful: ${res.status}`);
    console.log(`Response: ${await res.text()}`);
  } catch (err) {
    console.error("Ping test error:", err);
  }
}

testPing(); 