module.exports.handler = async (evt, ctx) => {
	console.log(evt);
	console.log('context ', ctx);
	return {
		statusCode: 200,
		body: JSON.stringify({
			name: 'Nodejs dev',
			evt
		})
	};
};
