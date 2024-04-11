const express = require('express');
const googleOAuth = require('../utils/googleOAuth');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const code = req.body.credentials;
    const profileInfo = await googleOAuth.getProfileInfo(code);
    
    const user = profileInfo.payload

    res.send({ user })
  }catch(err){
    console.log('Error with signing in with Google');
    res.status(401).send();
  }
});

module.exports = router;
