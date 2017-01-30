module.exports = function (mod){
	require('./shared/shared')(mod);
	require('./browse/browse')(mod);
	require('./playlist/playlists')(mod);
	require('./search/search')(mod);
};
