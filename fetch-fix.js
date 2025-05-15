/**
 * This file contains a replacement for the keep-alive ping functionality
 * that was causing fetch issues in the index.js file.
 * 
 * To use this, you should:
 * 1. Comment out the keep-alive ping code in index.js
 * 2. Run this file separately with: node fetch-fix.js
 */

const KEEP_ALIVE_INTERVAL = 1 * 60 * 1000;  // 1 minute

const keepAlivePing = async () => {
  try {
    // Using dynamic import for node-fetch
    const { default: fetch } = await import('node-fetch');
    const url = process.env.ROOT_URL || 'https://www.google.com';
    
    const res = await fetch(url);
    console.log(`Self-ping success: ${res.status}`);
  } catch (err) {
    console.error("Self-ping error:", err);
  }
};

// Run initially
keepAlivePing();

// Set interval for future pings
setInterval(keepAlivePing, KEEP_ALIVE_INTERVAL);

console.log("Keep-alive ping service started!"); 