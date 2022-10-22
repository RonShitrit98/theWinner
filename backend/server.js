const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");


const app = express();
const http = require("http").createServer(app);
const session = expressSession({
  secret: "coding is amazing",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
});
app.use(express.json({ limit: "25mb" }));
app.use(session);

const corsOptions = {
  origin: [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

const authRoutes = require("./api/auth/auth.routes");

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3030;
http.listen(port, () => {
    console.log('listening on port', port)
});
