{
    "version": 2,
    "builds": [
      {
        "src": "main.jsx",
        "use": "@now/node"
      }
    ],
    "routes": [
      {
       
        "src": "/(.*)",
        
        "dest": "app.js"
      }
    ]
  }
