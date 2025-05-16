const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { connectDB } =require("./config/db")



const app = express()
dotenv.config()


connectDB()


app.use(express.json())
app.use(morgan("dev"))
app.use(express.static("public"))


app.use(require("./routes/auth"))
app.use(require("./routes/product"))
app.use(require("./routes/resturantRoutes"))


const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("hi home page")
})

app.listen(PORT , ()=>{
    console.log(`hi QSkipper app is here ${PORT}`)
})


// --- keep-alive ping ---
// For Render deployment - keeps the service awake by pinging itself
const KEEP_ALIVE_INTERVAL = 14 * 60 * 1000;  // 14 minutes (Render free tier has a 15-minute inactivity timeout)
setInterval(async () => {
  try {
    // Dynamically import node-fetch
    const { default: fetch } = await import('node-fetch');
    
    // Determine the URL to ping
    let pingUrl;
    
    // Use ROOT_URL from environment (prioritize this for Render deployment)
    if (process.env.ROOT_URL) {
      pingUrl = process.env.ROOT_URL;
    } 
    // Fallback to localhost if running locally
    else {
      pingUrl = `http://localhost:${PORT}`;
    }
    
    // Ensure the URL has a protocol
    if (!pingUrl.startsWith('http')) {
      pingUrl = `https://${pingUrl}`;
    }
    
    console.log(`Pinging: ${pingUrl}`);
    const res = await fetch(pingUrl);
    console.log(`Self-ping success: ${res.status}`);
  } catch (err) {
    console.error("Self-ping error:", err);
  }
}, KEEP_ALIVE_INTERVAL);