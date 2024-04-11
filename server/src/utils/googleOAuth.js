const { OAuth2Client } = require('google-auth-library');

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

const getProfileInfo = async (code) => {
  const response = await oAuth2Client.verifyIdToken({
    idToken: code.credential,
    audience: code.clientId
  })

  return response;
};

module.exports = { getProfileInfo };