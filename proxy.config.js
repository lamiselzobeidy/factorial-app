const PROXY_CONFIG = [
  {
    context: [
      "/maps"
    ],
    target: "https://www.goo.gl/",
    secure: false,
    changeOrigin: true,
  }
]

module.exports = PROXY_CONFIG;
