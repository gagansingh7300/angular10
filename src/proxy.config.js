// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
var endpoints = {
  platform: {
    port: 3535,
  },
  platform_scripts: {
    port: 7011,
    fromlocal: true,
  }
};

const fromlocal = false;

const commonDomain = 'http://localhost:3000/';

/**
 * getTarget for proxy
 * @param {string} endpoint
 */

function getTarget(endpoint) {
  let isfromlocal = fromlocal;
  let domain = commonDomain;
  console.log("---getTarget--endpoint---", endpoint);

  try {
    if (endpoints[endpoint].hasOwnProperty('fromlocal')) {
      isfromlocal = endpoints[endpoint].fromlocal;
    }
    if (endpoints[endpoint].hasOwnProperty('domain')) {
      domain = endpoints[endpoint].domain;
    }
  } catch (err) {}

  if (isfromlocal) {
    console.log("-------endpoints--------", endpoints);
    return `https://localhost:${endpoints[endpoint].port}/`;
  } else {
    return domain;
  }
}

const PROXY_CONFIG = {
  '/gld/*': {
    target: getTarget('platform_scripts'),
    pathRewrite: {
      '^/gld': '',
    },
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  }
};

module.exports = PROXY_CONFIG;
