module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
      accessToken: "<netlify-access-token>",
      siteId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    },
  },
});
