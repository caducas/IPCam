
function hasEvent() {
	return false;
}

function execute(opts) {
}

function listenEvent(eventId, opts) {
}

function getFrontpageItem(item, callback) {
	var frontpageItemContent = "<img style='-webkit-user-select: none' id='IPcam_view_screenshot' width='"+item.params.width+"' height='"+item.params.height+"' src='http://"+item.params.ip+"/snapshot.cgi?user="+item.params.username+"&amp;pwd="+item.params.password+"' />";
		// frontpageItemContent += "test";
	frontpageItemContent += "<button type='button' class='btn btn-default' style='margin-top: 69px;margin-left: 50px;' onclick=top.dummy.location.href='http://"+item.params.username+":"+item.params.password+"@"+item.params.ip+"/decoder_control.cgi?command=2&onestep=1'><span class='glyphicon glyphicon-arrow-down'></span></button>";
	frontpageItemContent += "<button type='button' class='btn btn-default' style='margin-left: -40px; margin-top: -68px;' onclick=top.dummy.location.href='http://"+item.params.username+":"+item.params.password+"@"+item.params.ip+"/decoder_control.cgi?command=0&onestep=1'><span class='glyphicon glyphicon-arrow-up'></span></button>";
	frontpageItemContent += "<button type='button' class='btn btn-default' style='margin-left: -80px;' button-video-control-left' onclick=top.dummy.location.href='http://"+item.params.username+":"+item.params.password+"@"+item.params.ip+"/decoder_control.cgi?command=4&onestep=1'><span class='glyphicon glyphicon-arrow-left'></span></button>";
	frontpageItemContent += "<button type='button' class='btn btn-default' style='margin-left: 40px;' onclick=top.dummy.location.href='http://"+item.params.username+":"+item.params.password+"@"+item.params.ip+"/decoder_control.cgi?command=6&onestep=1'><span class='glyphicon glyphicon-arrow-right'></span></button>";
	frontpageItemContent += "<iframe src='' height='0' width='0' name='dummy' frameborder='0' style='margin-top: 100px; margin-left: -50px;'></iframe>";
	callback(frontpageItemContent);
}

function getEmptyConfigParams() {
	var params = {
		ip : "172.0.0.1",
		username : "",
		password : "",
		width : 320,
		height : 240,
		refresh : 0
	}
	return params;
}


// If we're running under Node, 
if(typeof exports !== 'undefined') {
	exports.getFrontpageItem = getFrontpageItem;
	exports.hasEvent = hasEvent;
	exports.getEmptyConfigParams = getEmptyConfigParams;
}