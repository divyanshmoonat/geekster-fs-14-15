const jwt = require("jsonwebtoken");
const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const UserModel = require("../models/user");

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtSecretKey;

const strategy = new JwtStrategy(opts, async function (jwt_payload, done) {
  const userId = jwt_payload.userId;
  const user = await UserModel.findById(userId);
  if (!user) {
    return done("Invalid user", false);
  }
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
    // or you could create a new account
  }
});

passport.use(strategy);

module.exports = passport;
