module.exports = {
	devServer: {
		overlay: false,
		proxy: {
            '^/api': {
				target: 'http://localhost:28080/',
				changeOrigin: true,
				logLevel: 'debug',
			  },
        }
	},
};
