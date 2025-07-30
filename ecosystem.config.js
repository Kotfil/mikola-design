module.exports = {
  apps: [
    {
      name: "mikola-design",
      cwd: "/var/www/mikola-design",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3009,
      },
    },
  ],
};
