import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  await rc.authorize({
    jwt: process.env.RINGCENTRAL_JWT_TOKEN!, // JWT token to login Jupiter
  });

  await rc
    .teamMessaging()
    .v1()
    .chats(process.env.JUPITER_CHAT_ID)
    .posts()
    .post({ text: `hello world from API, ![:Person](${process.env.JUPITER_USER_ID})` });
};

main();
