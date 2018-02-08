const config = {
	development: {
		app: {
			port: process.env.PORT || 3000
		},
		database: {
			url:
				'mongodb://socialserver:socialserver@ds229468.mlab.com:29468/social-server'
		}
	},
	production: {
		app: {
			port: process.env.PORT || 3000
		},
		database: {
			url: 'mongodb://localhost:27017/social'
		}
	}
};

export default config[process.env.NODE_ENV];
