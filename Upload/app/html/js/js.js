// JavaScript Document

// Document Ready Functions
function loadPage() {
	attachColorbox();
	diableRightClick();
	attachDropdown();
}

function pageName() {
	var pathName, index;
	pathName = window.location.pathname;
	index = pathName.lastIndexOf("/") + 1;
	return pathName.substr(index);
}

function attachColorbox() {
	$(".iframe").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"450px"});
}
function diableRightClick() {
	$(".remove").bind("contextmenu",function(e){return false;}); 
}
function attachDropdown() {
	$(".chzn-select").chosen();
}