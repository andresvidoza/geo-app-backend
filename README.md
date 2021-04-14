# Geo App Backend In Node
Backend for my geolocation app built in Swift from my [YouTube Video!](http://youtube.com/andresvidoza)

## How to use it
1. Npm install the modules.
2. Create a .env where you will have
  * NODE_ENV = development
  * PORT = 5000
  * MONGO_URI = Your Cluster connection string from Atlas: MongoDB
3. Npm run dev

##  endpoints (GET & POST)
http://localhost:5000/api/v1/user
http://localhost:5000/api/v1/pins

## JSON Format - POST req

### User (example)
```
{
    "userId": "andresvidoza",
    "location": {
        "coordinates": [20.774756, -50.076481]
    }
}
```

### Pins (example)
```
{
    "pinId": "1",
    "location": {
        "coordinates": [20.774756, -50.076481]
    }
}
```

### NOTE 
**You can expand the app by creating an authentication system which will allow you to register users and start reading their real-time location. If time allows it, I will eventually expand this project even more.**
