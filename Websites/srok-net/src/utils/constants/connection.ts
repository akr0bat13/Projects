/* eslint-disable @typescript-eslint/no-base-to-string */
const getAppHost = () => {
  if (process.env.APP_HOST) return process.env.APP_HOST;
  else return window.location.host;
};

export const ConnectionInstance = {
  HOST: `https://${getAppHost()}:5000`,
  REST_HOST: `https://${getAppHost()}`,
};
