module.exports = {
	apps: [
		{
			name: "notification-worker",
			script: "build/src/worker/pushNotification.js",
			watch: true,
			env: {
				NODE_ENV: "development",
			},
			env_production: {
				NODE_ENV: "production",
			},
		},
		{
			script: "build/src/server.js",
			watch: ".",
			instances: 3,
			exec_mode: "cluster",
		},
	],
};
