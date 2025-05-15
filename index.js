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
    
    // Construct the URL - try different approaches in case environment variables aren't set
    let pingUrl;
    
    // First try to use the environment variable
    if (process.env.RENDER_EXTERNAL_URL) {
      pingUrl = process.env.RENDER_EXTERNAL_URL;
    } 
    // Fall back to ROOT_URL if set
    else if (process.env.ROOT_URL) {
      pingUrl = process.env.ROOT_URL;
      if (!pingUrl.startsWith('http')) {
        pingUrl = `https://${pingUrl}`;
      }
    }
    // If we're running locally or don't have a domain set up, use our own server
    else {
      pingUrl = `http://localhost:${PORT}`;
    }
    
    console.log(`Pinging: ${pingUrl}`);
    const res = await fetch(pingUrl);
    console.log(`Self-ping success: ${res.status}`);
  } catch (err) {
    console.error("Self-ping error:", err);
  }
}, KEEP_ALIVE_INTERVAL);