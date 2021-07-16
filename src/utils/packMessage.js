export default (event, content) => {
	return JSON.stringify({
		Event: event,
		data: { ...content },
	});
};
