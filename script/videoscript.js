$(document).ready(function(){
	"use strict";
	var vid = $('video');
	var vid_w_orig = 1280;
	var vid_h_orig = 720;
	
	$(window).resize(function(){
	
	var container_w = vid.parent().width();
	var container_h = vid.parent().height();
	
	var scale_w = container_w / vid_w_orig;
	var scale_h = container_h / vid_h_orig;
	var scale = scale_w > scale_h ? scale_w : scale_h;
		
	vid.width(scale * vid_w_orig);
	vid.height(scale * vid_h_orig);
			
	});
	
	$(window).trigger('resize');
});