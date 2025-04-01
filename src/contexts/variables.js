const BACKEND_LOCAL_HOST = 'http://localhost:5000/v1';
const BACKEND_URL = "https://cp-showdown-server.vercel.app";

const STATEVARIABLES = {
 ENTERED :'ENTERED',
 ANALYSING : "ANALYSING",
 SUCCESS:'SUCCESS',
 FAILED:'FAILED',
 LOADING:'LOADING',
 NEUTRAL:"NEUTRAL",
}

const ERRORS = {
    MIN_USER: 'Mininum 1 username is needed!'
}


const COLORS = [
  { 
    border: "#FFD700", 
    background: "rgba(255, 215, 0, 0.3)", 
    point: "#FFD700", 
    activeBackground: "rgba(255, 215, 0, 0.6)" 
  }, // Gold
  { 
    border: "#00FFFF", 
    background: "rgba(0, 255, 255, 0.3)", 
    point: "#00FFFF", 
    activeBackground: "rgba(0, 255, 255, 0.6)" 
  }, // Cyan
  { 
    border: "#DC143C", 
    background: "rgba(220, 20, 60, 0.3)", 
    point: "#DC143C", 
    activeBackground: "rgba(220, 20, 60, 0.6)" 
  }, // Crimson
  { 
    border: "#32CD32", 
    background: "rgba(50, 205, 50, 0.3)", 
    point: "#32CD32", 
    activeBackground: "rgba(50, 205, 50, 0.6)" 
  }, // Lime Green
  { 
    border: "#FF8C00", 
    background: "rgba(255, 140, 0, 0.3)", 
    point: "#FF8C00", 
    activeBackground: "rgba(255, 140, 0, 0.6)" 
  }, // Dark Orange
];


export { BACKEND_LOCAL_HOST, STATEVARIABLES, ERRORS, BACKEND_URL, COLORS };