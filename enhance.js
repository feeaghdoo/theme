@import url(//fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(//fonts.googleapis.com/css?family=Quicksand:400,700);

#chatsettings {
    display: none;
}

* {
  box-sizing: border-box;
  -webkit-touch-callout: none;
}
.navbar-inverse .navbar-nav>li>a, .navbar-inverse .navbar-text {
    color: #a2a09f8c;
    text-transform: uppercase;
    font-size: 8px;
}
#modflair {
 display:none;   
}
.channel-emote {
    min-width: 70px;
}
body {
    font-size: 1.3em;
    font-family: 'Montserrat', sans-serif;
    color: #e5f1f7e8;
    background-color: rgb(28,31,37);
    text-align: justify;
}
.btn-group-xs>.btn, .btn-xs {
    padding: 7px 12px;
    font-size: 9px;
    line-height: 1.5;
    border-radius: 12px;
}
.btn-default {
    color: #e6e2e5;
    background-color: rgba(18, 18, 20, 0.87);
    border-color: rgba(132, 142, 152, 0);
    background-image: none!important;
}
#videocontrols {
    float: right;
    top: 10px;
    padding-right: 5px;
}
.lel {
    background: rgba(16, 16, 16, 0.21);
    border: 1px solid #191919;
}
/* NanoScroller */
	/** initial setup **/
	.nano {
	  position : relative;
	  /*width    : 100%;
	  height   : 100%;*/
	  overflow : hidden;
	}
	.nano > .nano-content {
	  position      : absolute;
	  overflow      : scroll;
	  overflow-x    : hidden;
	  top           : 0;
	  right         : 0;
	  bottom        : 0;
	  left          : 0;
	  margin-right: 0px!important;
	}
	.nano > .nano-content:focus {
	  outline: thin dotted;
	}
	.has-scrollbar > .nano-content::-webkit-scrollbar!important {
	  display: none;
	}
	.nano > .nano-content::-webkit-scrollbar {
	  display: block;
	}
	.nano > .nano-pane {
	  display: block;
	  background : rgba(0,0,0,.25);
	  position   : absolute;
	  width      : 10px;
	  right      : 0;
	  top        : 0;
	  bottom     : 0;
	  visibility : hidden\9; /* Target only IE7 and IE8 with this hack */
	  opacity    : .01;
	  transition            : .2s;
	  border-radius         : 5px;
	  z-index: 999;
	}
	.nano > .nano-pane > .nano-slider {
	  background: #444;
	  background: rgba(0,0,0,.5);
	  position              : relative;
	  margin                : 0 1px;
	  border-radius         : 3px;
	}
	.nano:hover > .nano-pane, .nano-pane.active, .nano-pane.flashed {
	  visibility : visible\9; /* Target only IE7 and IE8 with this hack */
	  opacity    : 0.99;
	}
	/*nanoscroll video fix*/
	#main::before {
		position: absolute;
		width: 100%;
		height: 100%;
		display: table;
		z-index: 1;
	}
	.disablehover::before {
		display: block !important;
	}

/*Inputs*/
.input-group .form-control, .form-control {
	border-radius: 0;
}
.input-group .input-group-btn, .input-group .input-group-btn button {
	border-radius: 0;
	border: 0;
}
input[type="checkbox"] {
	width: 15px;
	height: 15px;
	margin-bottom: 10px;
	top: -1px;
	background: transparent;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance:none;
}
input[type="checkbox"]:checked:after {
	content: "¦";
	width: 9px;
	height: 9px;
	position: absolute;
	margin-top: 2px;
	margin-left: 2px;
	color: transparent;
	font-size: 0;
}



.alert {
	border-radius: 10px;
	margin-bottom: 9px;
}
.alert-warning {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    color: #fff;
    font-size: 10px;
}
.well {
	padding: 15px;
	border-radius: 0;
	margin-bottom: 9px;
	box-shadow: none;
}


/*Dropdowns and Context Menus*/
	/*Bootstrap Dropdowns*/
	.dropdown-menu, .user-dropdown {
		border-radius: 0;
	}
	.dropdown-menu>li>a:focus, .dropdown-menu button:hover {
		text-decoration: none;
	}
	.dropdown-menu button{
		display: list-item;
		padding: 3px 20px;
		clear: both;
		font-weight: 400;
		font-size: 14px;
		line-height: 1.42857143;
		background: none;
		border: 0;
		border-radius: 0;
		white-space: nowrap;
	}






/*Positioning*/
#wrap{padding: 0;}
#motdrow {
	width: 100%;
	margin: 0;
	overflow: hidden;
}
#motdrow .col-lg-12{
	width: 100%;
	padding: 0;
}
#announcements,.container-fluid .col-md-12,#motd .text-center {
	width: auto;
}
.row:after{
		clear: none;
}
.container-fluid .col-lg-12, .row {
	padding-right: 0;
}
div#videowrap {
	margin-bottom: 9px !important;
	background: black;
height:100%;
width:100%;
}
.video-js.vjs-playing .vjs-tech {
  pointer-events: none;
}
#chatwrap {
	padding: 0;
	overflow: hidden;
}
#mainpage .container-fluid {
	padding: 0;
	margin: 0 !important;
}
#mainpage {
    padding-top: 50px;
}
#footer {
	float: left;
	width: 100%;
}
@media (max-width: 991.9px){
	#mainpage > .nano {
		position: static;
	}
	#mainpage .container-fluid {
		position: relative;
		overflow-y: visible;
		padding-left: 1px;
		padding-right: 1px;
	}
	#mainpage > .nano > .nano-pane {
		display: none;
	}
	.nano .nano-content {
		position: relative;
		overflow: visible;
	}
	#mainpage > .nano .nano-pane {display: none !important; opacity: 0; visibility: hidden;}
}
@media (min-width: 992px){
	/*chat bar is 38 px high*/
	#main {
		position: relative;
	}
	#chatwrap .nano {
		height: calc(100% - 72px) !important;
	}
	#chatwrap .nano #messagebuffer {
		height: 100% !important;
		margin-right: 0px;
		padding-bottom: 20px;
                padding-top: 10px;
		/*width: 100% DO NOT UNCOMMENT FOR COMPATIBILITY WITH NANOSCROLLER*/
	}
	#userlist {
		height: calc(100% - 72px) !important;

	}
	#chatwrap {
		height: calc(100% - 50px) !important;
	}
	#chatwrap {
		float: right;
		display: block;
		position: fixed;
		bottom: 0;
		right: 1px;
		margin-bottom: 0;
	}
	#mainpage > .nano {
		width: 55%;
	}
	#mainpage .container-fluid {
		width: 100%;
		padding: 0 0 0 0;
	}
	.col-md-7 {
		width: 100%;;
	}
	#mainpage > .nano {
		position: fixed;
		overflow-y: visible; /*scroll pre-nano*/
		overflow-x: hidden;
		height: calc(100% - 50px);
		padding: 0 10px 0 9px !important;
	}
	#mainpage > .nano {
		position: fixed;

	}
	#footer .container {
		width: 100%;
	}
	#videowrap {
		padding: 0;
		padding-left: 14px;
		padding-right: 0px;
	}
	#leftpane, #leftpane-inner, #pollwrap {
		width: 100%
	}
	#leftpane-inner {
		margin: 0;
	}
	#pollwrap {
		padding: 0;
	}
}

/*Left Container*/
#videowrap .embed-responsive {
	background: hsl(0,0%,0%); /*fixes transparent videos*/
}



/*Chat*/
	#messagebuffer {
		padding: 0;
	}
	#messagebuffer > div {
		padding-left: 5px;
		padding-right: 5px;
	}
	.server-msg-reconnect, .server-msg-disconnect {
		margin-left: 5px;
		margin-right: 5px;
	}
	/*Userlist*/
	#mainpage #userlist {
		border-top: 0;
	}
	#userlist {
		width: 100%;
		overflow: visible;
	}
	#userlist {padding-left: 5px;}
		/*profile boxes*/
		#userlist .profile-box {
			border: 0;
			border-radius: 0;
			padding: 8px;
			padding-top: 0;
		}
		#userlist .profile-box .profile-image {
			border: 0;
			border-radius: 0;
			margin-right: 8px;
		}
		#userlist .profile-box strong {
			margin-right: 8px;
			padding-top: 5px;
			display: inline-block;
		}
			/*Specifially user dropdowns*/
			.user-dropdown {
				padding: 5px 0 3px 0;
			}
			.user-dropdown strong {
				padding-left: 23px;
				font-weight: 100;
				font-size: 11pt;
				margin-right: 20px;
			}
			.user-dropdown .btn-group-vertical {
				padding-top: 5px;
			}
			.user-dropdown .btn-group-vertical .btn {
				text-align: left;
				border-radius: 0 !important;
				border: 0;
				padding: 3px 20px 3px 25px;
				background: none;
			}

	/*Chat header (time and toggles)*/
	#connected {
		width: 100%;
	}
	.navbar-inverse {
    background-image: none!important;
	}
	.navbar {
    background: hsla(0, 0%, 0%, 0.24);
	}
	#chatheader {
		width: 100%;
		border-bottom: 0;
		border-radius: 0;
	}
		#chatheader span {
			border: 0;
			border-radius: 0;
			padding: 4px 7px 5px;
		}
		#clockstaff {
			float: right;
		}
		#emotetoggle, #capturebutton, #jointoggle {
			float: left !important;
		}
	/*Chat bar*/
	#chatline, #guestlogin>input, #guestlogin>.input-group-addon {
		border-radius: 0;
	}

/*Below Video*/
#mainpage .btn:focus {outline: none;}
.textheader {
	font-size: 24px;
}
	p#currenttitle, p.sectionheader {
		font-size: 1.5rem;
		letter-spacing: -0.03em;
		overflow-x: hidden;
		text-align: left;
		height: auto;
		font-family: quicksand;
	}
		.section {
		padding: 12px 15px 5px 15px;
		border-radius: 0;
		margin-bottom: 9px;
		position: relative;
	}
	/*drinkbar*/
	#drinkbarwrap {
		display: block;
		width: 100%;
		height: auto;
		margin-left: 0;
		padding: 0 15 0 15;
	}
	/*Video Description*/
	#currenttitle {
		border: none;
		border-radius: 0;
		background: none;
		position: absolute;
                top: 16px;
	}
#chatheader, #videowrap-header {
	border: 0px solid #ccc!important;
}
#usercount {
    font-family: Quicksand;
    font-size: 15px;
	    display: block;
    color: #a1b3bb;
}
	/*Header right (Time and progbar)*/
	#headright {
		width: 100%;
		height: 2px;
		float: right;
		position: relative;
		margin-top: -7px;
	}
	#progbar {
		width: 0;
		height: 2px;
	}
	#ss7time {
	color: hsla(0, 0%, 100%, 0.65);
	height: 24px;
    position: relative;
    float: right;
    margin-top: 24px;
    vertical-align: bottom;
    font-size: 24px;
    line-height: 0px;
    font-family: quicksand;
	}
	/*headerbuttons*/
	#headbottom {
		height: 34px;
		margin-top: 9px;
		padding: 5px 0 0 0;
	}
	#headbottom .headbtn {
    color: hsla(216, 19%, 84%, 0.74);
    height: 27px;
    background: none;
    border: none;
    border-radius: 0;
    padding: 5px 0 5px 0;
    box-shadow: none;
    font-size: 15px;
    vertical-align: initial;
    FONT-family: quicksand;
    text-transform: uppercase;
    outline: none;
    transition: color .3s;
	}
#headbottom:hover, .headbtn:hover {
color: white!important;
border: 0px;
text-shadow: 0 0 5px #228DFF, 0 0 10px #228DFF, 0 0 15px #228DFF, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
}
	.headbtnleft {
		margin-right: 20px;
	}
	.headbtn span {top:0;}
	.headbtn:before {
		font-family: arial, sans-serif;
		font-weight: bold;
	}
	button#voteskip[title="Voteskip"] {
   vertical-align: initial;
    float: right;
    right: 40px;
    margin-right: 34px;
	}
	#voteskip:before {content: "Voteskip"; font-size: 14px;}
	#voteskip span {top: 0;}
	#voteskip span:before {
		width: 17px !important;
		height: 17px !important;
		margin-left: 6px;
		content: "n";
		display: inline-block;
		color: transparent;
		font-size: 14px;
		line-height: normal;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAALVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt4K88AAAADnRSTlMAABQVF1NUWKeoqa3p6yhFc3sAAABKSURBVHgBhco7EsAgDANRQf6E+P7HjTXjRmrY8s2iNbw7qsgo8V0uEdxUuJlwM+Fmws2FLeU2mQdUng6RHCAyOkTmCYiMDSZVyQ+RGQkPgHXunQAAAABJRU5ErkJggg==);
	}
	#addmedia:after {content: "Add media";}
	#addmedia:before {
		width: 17px !important;
		height: 17px !important;
		margin-right: 6px;
		content: "n";
		color: transparent;
		display:none;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABlJREFUeAFjgAJGRkYoi64ijOiAGJGBdTMAOMcAXg+QicwAAAAASUVORK5CYII=);
	}
	#newpollbtn:before {
		display:none;
		width: 17px;
		height: 17px;
		margin-right: 6px;
		content: "n";
		color: transparent;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMZJREFUeNpiYCAPOAPxZiAWJlM/gxAQPwHi/1DalhxDVkMNgOEdpBqQjGbAWyCWJsUAFSD+jGZIICkGsADxCTQD5pDqjRY0A24DMQ8pBtgA8R8kA34BsSk2hcxAnAPEbGjifEB8H80V1dgMYATi+VAFq6EGwsBSNAMOo8nDwSw0hcugCqPQxN8DsTwuP2cD8T80DWugmpDFoggFXgGaBnS8lNhYKMNhwH1oABMNatEMAHnTl5wM1ohkQBEDBaADGk5EAYAAAwAM71Mk30wOEAAAAABJRU5ErkJggg==);
	}
	#morebtn:after {content: "More";}
	#morebtn:before {
		content: "n";
		display:none;
		color: transparent;
		width: 18px;
		height: 17px;
		margin-right: 6px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAAElBMVEUAAAD///8AAAAAAAAAAAAAAAD+HpTfAAAABXRSTlMAAAFX7J/vCUYAAAAnSURBVHgBY2DEAAMgxMzCwszAgEKxsLKyMDEgU1A2ExKFRSP9XQ8AEJsBtxxU/nIAAAAASUVORK5CYII=);
	}
	#mediarefresh span {display: none;}

	/*Queue*/
	#queue {
		border: none;
	}
	.queue_entry {
		border: none;
	}
		/*plmeta*/
		#upnext #plmeta, #plcount {
			border: none;
			border-radius: 0;
			background: none;
			height: auto;
			font-size: 14px;
			display: inline;
		}
		#queuecontainer > .textheader {
			width: 100%;
			padding-right: 17px;
		}
		#plmeta:before {content: " ("}
		#plmeta:after {content: ")"}
#pllength {
    position: absolute;
    left: 50%;
    right: 50%;
    font-size: 12px;
}
		#pldropdown{
			width: auto;
			height: 17px;
			border: none;
			padding: 0;
			background: none;
			/*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALpJREFUeNpiYKAiUAXiLUDsRKR6kLrNUH1g0ATEP4H4PxB/QJbAAVSg6v5D9TUxAYlPQMwGVcAPxNuAWAiHASDx7VB1DFB9n2CSi6Amw/BeJIMZkDTsRVO3CFkBBxCfQFMwA82QGWjyJ6D6UIA0ED9BU1gIlStAEwepk8EVaOZA/B1J8R8g7oHSMLHvUHV4QSyareg4lth0043DgB5SEh8zNCqRDdgOFScJgNLCTagBN5HSxiigFwAIMAA/nEU9cHe3rAAAAABJRU5ErkJggg==);*/
			background-position: 0 2px;
			float: right;
			margin: 6px 6px 0 6px;
		}
		#pldropdown::before {
			content: "More";
		}
		#ploptions {
			right: -2px;
			left: initial;
			top: 30px;
		}
		#qlockbtn {margin-top: 6px;}
		#qlockbtn, #qlockbtn span {
			background: none;
			width: 17px;
			height: 17px;
			padding: 0;
			color: transparent;
			border: none;
			float: right;
		}
		#qlockbtn span:before {
			width: 13px;
			height: 14px;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAVCAYAAADB5CeuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVlJREFUeNpi/P//PwMIMDIyMpALYGZQDYAMxGGoCxCvB+KXQPwPiJ8D8WogtsVlBqWOg5uBxTBmIJ4LUoMHTwAFLj0d1YvmgPNAvAqIT6GJNxDpKFCIr4GG9G8gfgrEy4HYhlhHqQHxX6ilX4HYD02fExB/gMr/AmJpPI4iO8TRDSvDFhJoIBtJTQYeR03AEeLH0cTrCTkKOeoMcThKD0nNFByO0kAK8Z9AHI5mhiM0JmAhLoXPUUpAvBaIm5CDFQ3oIjlqGg5HVSCpacRhTgGSmnRkc1jQyqd7QBxMaq7BUsbJILG34tC2D82jcMDCQBvAhMT+jqsEQFeP7rk+aNz+JwOD9PVDzWlHSiukYpC+NgakdPMXzXekgr/QUP9NYej/AWJWRixBSS5gpJY5TAyDEIw6atRRtHLUPwrN+YNUNFBsDsxRPdBCkByAXHj2U2hOH8NgBQABBgC1sxw2g3lAvAAAAABJRU5ErkJggg==);
			display: inline-block;
			background-size: 27px;
		}
		#qlockbtn.btn-success span:before {background-position: 0 0}
		#qlockbtn.btn-danger span:before {background-position: -13px 0;}


	/*AddMedia*/
	#rightpane {
		float: none;
		width: auto;
		min-height: 0;
		display: none;
	}
	#rightpane-inner {
		transition: height 0.3s;
	}
	.plcontrol-collapse {
		padding-left: 0;
		float: none;
	}
	#searchcontrol ul {
		width: 100%;
		margin: 0;
	}
	#rightpane-inner .col-md-12 {
		width: 100%;
		padding: 0;
		float: none;
	}
		/*mediabuttons*/
		#mediabuttons .btn {
			height: 28px;
			background: none;
			border: none;
			border-radius: 0;
			padding: 0;
			box-shadow: none;
			margin-right: 20px;
		}
		#mediabuttons .btn span {
			font-family: arial, sans-serif;
			font-size: 15px;
			font-weight: bold;
		}
		#mediabuttons .btn:not(.collapsed) {
			box-sizing: content-box;
		}
		#showmediaurl span:before {content: "Link"}
		#showcustomembed span:before {content: "Embed"}
		#showsearch span:before {content: "Search"}
		#showplaylistmanager span:before {content: "Playlists"}
	/*controls*/
	.form-control {
        border: 0px solid #ccc;
        height: 40px;
	}
	#controlsrow {
		margin: 0;
		padding: 12px 15px;
		border-radius: 0;
		margin-bottom: 9px;
	}
	#controlsrow:after {clear: both;}
	#leftcontrols, #rightcontrols {
		width: auto;

	}
	/*Message of the day*/
	#motdwrap {

	}

/* Divider Dragger */
.mHandle {
	position: absolute;
	width: 15px;
	height: 25px;
	left: 55%; /*default 55%*/
	background: white;
	cursor: col-resize;
	visibility: hidden;
	opacity: 0;
	transition: opacity ease .2s, visibility .05s;/*visibility hidden because opacity: 0 is not the same as display: block. */
	/* Needs to be a delay because moving cursor from scroll would otherwise make mhandle disappear. Display cannot have transitions.*/
}
.scrollHover .mHandle, .mHover #mHandle-mid, .mHover .mHandle {
	opacity: .99;
	visibility: visible;
}
.scrolling .mHandle{
	pointer-events: none;
}
#mHandle-left {
	-webkit-transform: translate(-21px, 0px);
	        transform: translate(-21px, 0px); /*default -21px, 0*/
	border-radius: 3px 0 0 3px;
}
#mHandle-right {
	-webkit-transform: translate(-1px, 0px);
	        transform: translate(-1px, 0px); /*default -1px, 0*/
	border-radius: 0 3px 3px 0;
}
#mHandle-mid {
	width: 5px;
	-webkit-transform: translate(-6px, 0px);
	        transform: translate(-6px, 0px);
	opacity: 0;
	pointer-events: none;
}
/* Dragging */
#dragoverlay {
	position: absolute;
	visibility: hidden;
	width: 100%;
	height: 100%;
	background: none;
	transition: background ease .5s, visibility 1s;
	pointer-events: none;
	z-index: 99999;
}
#dragoverlay.dragging {
	visibility: visible;
	pointer-events: auto;
	background: hsla(0,0%,0%,0.3);
}
#handleWidget {
	visibility: hidden;
	position: absolute;
	width: 35px;
	height: 25px;
	left: 55%; /*default 55%*/
	border-radius: 3px;
	background: white;
	cursor: col-resize;
}
.dragging #handleWidget {
	visibility: visible;
}
div#layout-config-form {
    display: none;
}
div#common-config-form {
    display: none;
}
//scroller

img.kek {
    opacity: 0.3;
    border: 1px solid transparent;
    -webkit-filter: grayscale(80%);
}
img.kek:hover {
    opacity: 1;
    	background: transparent linear-gradient(to bottom left, rgba(249,208,129,.25) 10%, rgba(227,2,62,.25) 30%, rgba(49,128,135,.25) 90%);
	border-bottom: 0px solid transparent;
        border-image: linear-gradient(to bottom left, rgba(249,208,129,1) 10%, rgba(227,2,62,1) 30%, rgba(49,128,135,1) 90%);
	border-image-slice: 1;
        -webkit-filter: grayscale(1%);
}
#responsive-sizing {
  text-align: center;
}

#responsive-sizing .spec {
  display: inline-block;
  margin: 10px 10px 10px 0;
}

#responsive-sizing .breakpoint {
  background-color: #333;
  color: white;
  border-radius: 5px 0 0 5px;
}

#responsive-sizing .vis-image-count {
  border-radius: 0 5px 5px 0;
  background-color: #ddd;
}

#responsive-sizing .breakpoint,
#responsive-sizing .vis-image-count {
  padding: 5px 10px;
}

/* Begin Scroller Rules */
.horiz-scroll {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  overflow: visible;
  position: relative;
}

.horiz-scroll h2 {
  font-weight: 600;
}

.horiz-scroll .scroller {
  max-height: 30vw;
  position: relative;
  display: flex;
  display: -webkit-flex;
  flex: 1;
  -webkit-flex: 1;

}

.horiz-scroll .scroller .left-scroll {
  left: 0;
}

.horiz-scroll .scroller .right-scroll {
  right: 0;
}

.horiz-scroll .scroller .left-scroll,
.horiz-scroll .scroller .right-scroll {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  padding: 0 2vw;
  overflow-x: hidden;
  z-index: 1;
  justify-content: center;
  -webkit-justify-content: center;
  position: absolute;
  height: 100%;
}

.horiz-scroll .scroller .left-scroll p,
.horiz-scroll .scroller .right-scroll p {
  font-size: 8em;
  color: white;
  text-shadow: 0 0 10px #333;
  margin: 0;
  overflow-y: hidden;
}
#addedbyTEXT {
    display: block;
    float: right;
    padding-right: 0px;
    padding-top: 5px;
    font-family: Quicksand;
    opacity: 0.5;
}
@media only screen and (max-width: 480px) {
  .horiz-scroll .scroller .left-scroll p,
  .horiz-scroll .scroller .right-scroll p {
    color: black;
  }
}

.horiz-scroll .scroller .scrollable-x {
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}

.horiz-scroll .scroller .scrollable-x::-webkit-scrollbar {
  display: none;
}

.horiz-scroll .scroller .scrollable-x::-webkit-scrollbar {
  width: .375em;
  max-width: 12px;
}

.horiz-scroll .scroller .scrollable-x::-webkit-scrollbar-track {
  background-color: transparent;
}

.horiz-scroll .scroller .scrollable-x::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 1em;
}

.horiz-scroll .scroller .scroll-images {
  position: relative;
  flex: 8;
  -webkit-flex: 8;
  order: 2;
  -webkit-order: 2;
  z-index: 0;
  font-size: 0;
  overflow: hidden;
  padding: 0% 0;
  margin: 0% 0;
  text-align: center;
    margin-left: 5rem;
    margin-right: 5rem;
    border-radius: 1rem;
}

.horiz-scroll .scroller .scroll-images img {
  width: 20%;
  top: 0;
  z-index: 0;
  -webkit-transition: all 100ms;
  transition: all 100ms;
  position: relative;
  opacity:0.5;
  -webkit-filter: grayscale(90%);
  filter: grayscale(90%);
}
.horiz-scroll .scroller .scroll-images img:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  opacity:1;
  transform: scale(1.10);
}

@media only screen and (max-width: 960px) {
  .horiz-scroll .scroller .scroll-images img {
    width: 33.333%;
  }
}

@media only screen and (max-width: 720px) {
  .horiz-scroll .scroller .scroll-images img {
    width: 50%;
  }
}
#loginform {
    display:none;

}
@media only screen and (max-width: 480px) {
  .horiz-scroll .scroller .scroll-images img {
    width: 50%;
    margin: 0 25%;
  }
}
.server-msg-reconnect {
    width: 100%;
    font-size: 20px;
}
#scroll-feature {
    padding-top: 10px;
    display:block;
    float: left;
}

#scroll-feature:hover {
    opacity:1;
}
.horiz-scroll .scroller .scroll-images img.focused {
  z-index: 2;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  transition: all 250ms ease-in-out, drop-shadow 0.5s;
}

.invisible {
  opacity: 0;
  transition: .5s ease-in-out;
}
#config-wrapper {
    display: none!important;
}
#videowrap, #playlistrow, .well {
    display: block;
}
.OLB {
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
	border: 0;
    font-size: 14px;
    color: rgba(210, 210, 210, 0.84);
    margin-right: 5px;
    margin-left: 5px;
    line-height: 22px;
        display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 4px;
}
.OLB:hover {
  background-color: rgba(0, 0, 0, 0.55)!important;
}
.navbar {
    margin-bottom: 0px;
}
.vjs-error .vjs-error-display:before {
    content: 'X';
    font-size: 0em;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
/*Scrollbars*/
::-webkit-scrollbar {
	width: 11px;
	height: 10px;
	border: 0px solid hsl(0,0%,27%);
	border-top: 0;border-bottom: 0;
}
/*::-webkit-scrollbar-button {background-color:rgba(26,26,26,1);}*/
::-webkit-scrollbar-track {
	background-color: hsla(0, 0%, 27%, 0.01);
}
::-webkit-scrollbar-thumb {
    background-color: hsla(290, 6%, 34%, 0.58);
    border: 0px solid hsl(0,0%,40%);
    border-radius: 10px;
}
::-webkit-scrollbar-corner {background-color:rgba(26,26,26,1);}

.darktheme .nano > .nano-pane > .nano-slider {
    background: hsla(0, 0%, 100%, 0.15);
    width: 10px;
    float: right;
    transition: background ease 1.1s;
}
.mHandle {
    height: 25px;
    background: rgba(82, 82, 82, 0.74);
}
.horiz-scroll .scroller .left-scroll p, .horiz-scroll .scroller .right-scroll p {
    font-size: 340%;
    color: rgba(255, 255, 255, 0.71);
}
.darktheme .nano > .nano-pane > .nano-slider:hover, .darktheme .scrolling .nano-slider {
	background: hsla(0,0%,100%,.56);
}
.darktheme .nano > .nano-pane {
	background: none;
	border-radius: 5px;
}
.navbar-nav>li>a {
    border-right: 0px solid rgba(0,0,0,.2);
    border-left: 0px solid rgba(255,255,255,.1);
    font-size: 10px;
    letter-spacing: 0.01em;
    font-family: Quicksand;
}
.server-msg-reconnect {
    border: 0px solid #3C3C3C;
    line-height: 2;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #87A287;
    text-align: center;
    background-color: rgba(18, 100, 18, 0);
}
/* Inputs */
	/* Text Inputs */
	input.form-control[type="text"], input.form-control[type="password"], input.form-control[type="email"], textarea.form-control {
    background-color: hsla(0, 0%, 0%, 0.57)!important;
    border-top: 0px solid hsl(0, 0%, 29%);
    color: hsl(0, 0%, 63%);
	font-size: 12px;
    -webkit-font-smoothing: antialiased
     border-bottom: 1px solid rgba(177, 157, 157, 0.25);
	}
	input.form-control[type="text"]:focus, input.form-control[type="password"]:focus, input.form-control[type="email"]:focus, textarea.form-control:focus {
		border: 1px solid hsl(0, 0%, 8%);
    border-bottom: 2px solid #3F7A96;
	}

	/* Buttons */
	.input-group .input-group-btn, .input-group .input-group-btn button {
		background: hsl(0, 0%, 24%);
		border: 0;
		box-shadow: none;
		color: hsl(0, 0%, 63%);
		-webkit-font-smoothing: antialiased
	}
	.input-group .input-group-btn > button {
		border: 1px solid hsl(0,0%,31%);
	}
	.input-group .input-group-btn button:hover {
		background: hsl(0, 0%, 14%);
	}
	.input-group > span:first-of-type.input-group-btn > button {
		border-left: 0;
	}
	.input-group > span:last-of-type.input-group-btn > button {
		border-left: 0;
	}
	.btn-default[disabled], .btn.disabled, .btn[disabled], fieldset[disabled] .btn {opacity: 0.63}

	/* Checkboxes */
	input[type="checkbox"] {
		border: 1px solid hsl(0, 0%, 31%);
	}
	input[type="checkbox"]:checked {background: hsl(0,0%,5%)}
	input[type="checkbox"]:checked:after {
		background: hsl(0,0%,31%);
	}
	.checkbox {
		color: hsl(0, 0%, 56%);
	}



/* Dropdowns and Context Menus */
	/* Bootstrap Dropdowns */
	.dropdown-menu, .user-dropdown {
		background: hsl(0,0%,12%);
		border: 1px solid hsl(0,0%,18%);
		box-shadow: 0 0 20px 0 hsl(0,0%,0%);
	}
	.dropdown-menu>li>a:focus, .dropdown-menu button:hover {
		color: hsl(0,0%,100%);
		background: hsl(199,68%,50%);
	}
	.dropdown-menu button{
		color: hsl(0,0%,100%);
	}
.open>.dropdown-menu {
    display: block;
    font-size: 1rem;
}
p#currenttitle {
    width: auto;
    float: left;
    padding: 15px;
    font-family: quicksand;
    font-size: 1.4rem;
}
form#logoutform {
    font-size: 1rem;
    display: none;
}

.navbar-nav {
    float: right;
    margin: 0;
    font-size: 1rem;
}

.navbar {
	background: hsl(0,0%,13%);
	color: hsl(0,0%,53%);
	border: none;
	max-height: 50px;
    //overflow: hidden;
}
@media (max-width: 880px){
	.navbar{
	overflow: hidden;
	}
}
.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover, .navbar-inverse .navbar-nav>li>a:focus, .navbar-inverse .navbar-nav>li>a:hover, .navbar-inverse .navbar-link:hover {
	color: hsl(0,0%,100%);
}
.navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:hover, .navbar-inverse .navbar-nav>.open>a:focus {
	background: hsl(199,68%,50%);
}
.navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover {
	color: hsl(0,0%,100%);
}

.navbar-inverse .navbar-brand {
color: #99a4a9;
}
.navbar-brand {
    margin-left: 35px!important;
    float: left;
    padding: 15px;
    font-size: 19px;
}

body {
	background: hsl(0,0%,6%);
}


@media (min-width: 992px){
	/*chat bar is 38 px high*/
	#messagebuffer{
		    margin-right: 0px!important;
	}
}
.pagination>li>a, .pagination>li>span {
    background-image: none!important;
}
.pagination>li>a, .pagination>li>span {
    background-color: rgba(21, 21, 21, 0.26);
    border: 1px solid rgba(0, 0, 0, 0.46);
}
.emotelist-table {
    margin: auto;
    border-radius: 10px;
    width: 100%;
    padding: 5px;
}
/* Left Container */
#videowrap .embed-responsive {
	background: hsl(0,0%,0%); /*fixes transparent videos*/
}

.queue_entry {
    border-color: #000;
    background-color: rgba(37, 38, 39, 0.4);
}
.queue_entry {
    line-height: 35px;
    padding: 5px;
    font-size: calc(100% + ((0.4vw - .41rem) * 1.189));
}
.timestamp {
     font-size: 6pt;
    float: left;
    display: block;
    opacity: 0;
    left: 0;
    margin-top: 0px;
    width: 52px;
    position: absolute;
    color: rgba(197, 196, 175, 0.8);
    background: rgba(0, 0, 0, 0.84);
    padding: 1px 4px;
    text-decoration: none;
    border-radius: 5px;
    transition: all 3s ease;
    -webkit-transition: all 3s ease;
    text-overflow: clip;
    white-space: nowrap;
    z-index: 1000;
    overflow: hidden;
}
.fadeout{
  opacity: 1 !important;
}

#pllength {
    opacity:0;
    transition: opacity 0.7s, visibility 0.7s;

}
/* Chat */
	div#messagebuffer, div#userlist {
border: 0px solid hsl(0, 0%, 18%);
background: #060606d1;
	}
	.nick-hover {
		background: hsla(0, 0%, 6%, 0.03);
	}

	/* Userlist*/
		/* profile boxes */
		#userlist .profile-box {
			background: hsl(0,0%,12%);
			box-shadow: 0 0 20px 0 hsl(0,0%,0%);
		}
		#userlist .profile-box .profile-image {
			box-shadow: 0 0 5px 0 hsl(0,0%,0%);
		}
			/* Specifially user dropdowns */
			.user-dropdown .btn-group-vertical {
				border-top: 1px solid hsl(0,0%,18%);
			}
	.user-dropdown .btn-group-vertical .btn:hover {
		background: hsl(199, 68%, 50%);
	}
	/* Chat header (time and toggles) */
#chatheader {
    background-color: hsla(0, 0%, 12%, 0.14);
    border-bottom: 2px solid hsla(0, 0%, 0%, 0.39);
    border-top: none;
    border-left: none;
    border-right: none;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.33);
    max-height: 31px;
	}
		#chatheader span {
			background: hsl(0,0%,31%);
		}
		#chatheader > .label, #chatheader > .label-default, #chatheader > .label-success, #chatheader i, #chatheader .custom-label {
    float: left;
    display: block;
    padding: 12.8px 0;
    padding: .8rem 0;
    width: 33%;
    outline: 0;
    cursor: pointer;
    text-align: center;
    font-size: 24px;
    font-size: 1.4rem;
    position: relative;
		}
		#chatheader span.label-success {
			border-bottom: 2px solid hsl(358, 79%, 45%);
			background: hsl(0,0%,31%);
		}
		#clockstaff {
			border-bottom: 1px solid hsl(0,0%,100%);
		}
		#chatheader i:hover {
   
		}
	/* Chat bar */
	#chatline, #guestlogin>input, #guestlogin>.input-group-addon {
	}

/* Below Video */
#mainpage .btn:focus {outline: none;}

	p#currenttitle, p.sectionheader {
	color: hsla(0, 0%, 100%, 0.74);
	}
	p#currenttitle {
	max-width: 500px;
    overflow: hidden;
    overflow-wrap: break-word;	
    max-height: 35px;
	}
	.section, .well, #controlsrow {
    padding: 4rem;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 3rem;
    border-radius: 1rem;
    background: #131315c9;
	}
	/* Video Description* /
	/* Header right (Time and progbar) */
	#headright {
		    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(59,173,227,1)), color-stop(25%, rgba(87,111,230,1)), color-stop(51%, rgba(152,68,183,1)), color-stop(100%, rgba(255,53,127,1)));
    background: -webkit-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
    background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3bade3 ', endColorstr='#ff357f ', GradientType=1 );
	}
	#progbar {
		background: hsla(167, 100%, 50%, 0.68);
	}
	/* headerbuttons */
	#headbottom {
		border-top: 1px solid hsl(0, 0%, 20%);
	}
	.headbtnleft {
		margin-right: 20px;
	}
	.headbtn:before {
		filter: invert(63%) !important;
		-webkit-filter: invert(63%) !important;
		color: hsl(0,0%,63%);
	}
	button#voteskip[title="Voteskip"] {
	}
	#voteskip:before {content: "Voteskip"; font-size: 14px;}
	#voteskip span {top: 0;}
	.headbtn span, #voteskip span {top: 0;}
	#voteskip span:before {
		filter: invert(63%) !important;
		-webkit-filter: invert(63%) !important;
	}

	/* Queue */
		/* plmeta */
		#upnext #plmeta, #plcount {
			color: hsl(0,0%,78%);
		}
		#qlockbtn span:before/*, #pldropdown*/ {
			-webkit-filter: invert(63%);
			        filter: invert(63%);
		}
		#pldropdown {
			color: hsl(0,0%,63%);
			font-weight: bold;
		}


	/* AddMedia */
		/* mediabuttons */
		#mediabuttons {
			border-bottom: 1px solid hsl(0,0%,20%);
		}
		#mediabuttons .btn {
			color: hsl(0,0%,50%);
		}
		#mediabuttons .btn span {
			color: hsl(0,0%,50%);
		}
		#mediabuttons .btn:not(.collapsed) span {
			color: hsl(0,0%,69%);
		}
		#mediabuttons .btn:not(.collapsed) {
			border-bottom: 2px solid hsl(358, 79%, 45%);
		}
.queue_active {
    background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0.12),rgba(255, 255, 255, 0.12));
    background-image: linear-gradient(rgba(255, 255, 255, 0.12),rgba(255, 255, 255, 0.12));
    background-repeat: no-repeat;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.79);
}
	/* Footer */
	#footer {
    background: hsla(0, 0%, 0%, 0.9) !important;
    font-size: 11px;
}
.vjs-error-display div {
background-color: rgb(0, 0, 0);
font-size: 2.4em;
}
img.chat-avatar.chat-avatar_small {
    border-radius: 100%;
    height: 35px;
    width: 35px;
    padding: 1px;
    margin-right: 5px;
    margin-left: 10px;
    position: absolute;
    transform: scale(1);
    left: 0;
    -webkit-transition: .4s;
    transition: .4s;
    box-shadow: 2px 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 1s cubic-bezier(1, -0.565, 0.075, 1.495);
    transition: all 1s cubic-bezier(1, -0.565, 0.075, 1.495);
}
img.chat-avatar.chat-avatar_small:hover {
     cursor: pointer;
     transform: scale(1.9);
  -webkit-animation: anti-wiggle 0s ease-in-out;
          animation: anti-wiggle 0s ease-in-out; 
}
img.chat-avatar.chat-avatar_small:hover:after {
     cursor: pointer;
  -webkit-animation: wiggle 0s ease-in-out;
          animation: wiggle 0s ease-in-out; 
}
@-webkit-keyframes wiggle {
  20% {
    box-shadow: inset -5px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(7deg);
            transform: rotate(7deg);
  }
  40% {
    box-shadow: inset -11px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(-14deg);
            transform: rotate(-14deg);
  }
  60% {
    box-shadow: inset -5px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  80% {
    box-shadow: inset -8px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  100% {
    box-shadow: inset -7px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

@keyframes wiggle {
  20% {
    box-shadow: inset -5px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(7deg);
            transform: rotate(7deg);
  }
  40% {
    box-shadow: inset -11px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(-14deg);
            transform: rotate(-14deg);
  }
  60% {
    box-shadow: inset -5px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  80% {
    box-shadow: inset -8px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  100% {
    box-shadow: inset -7px 0 5px 0 rgba(0, 0, 0, 0.4);
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes anti-wiggle {
  20% {
    -webkit-transform: translateX(4px) rotate(-7deg);
            transform: translateX(4px) rotate(-7deg);
  }
  40% {
    -webkit-transform: translateX(-8px) rotate(14deg);
            transform: translateX(-8px) rotate(14deg);
  }
  60% {
    -webkit-transform: translateX(2px) rotate(-4deg);
            transform: translateX(2px) rotate(-4deg);
  }
  80% {
    -webkit-transform: translateX(-1px) rotate(2deg);
            transform: translateX(-1px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(0px) rotate(0deg);
            transform: translateX(0px) rotate(0deg);
  }
}
@keyframes anti-wiggle {
  20% {
    -webkit-transform: translateX(4px) rotate(-7deg);
            transform: translateX(4px) rotate(-7deg);
  }
  40% {
    -webkit-transform: translateX(-8px) rotate(14deg);
            transform: translateX(-8px) rotate(14deg);
  }
  60% {
    -webkit-transform: translateX(2px) rotate(-4deg);
            transform: translateX(2px) rotate(-4deg);
  }
  80% {
    -webkit-transform: translateX(-1px) rotate(2deg);
            transform: translateX(-1px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(0px) rotate(0deg);
            transform: translateX(0px) rotate(0deg);
  }
}
.channel-emote {
    max-width: 100px;
    max-height: 90px;
    display: inline-block;
    border-radius: 8px;
    transform: scale(0.7);
    box-shadow: 0 20px 25px -20px #131313d1;
}
.channel-emote:hover {
    transform: scale(1.2);
      cursor: pointer;
  -webkit-transform-style: preserve-3d;
  -webkit-transition: all 1s cubic-bezier(1, -0.565, 0.075, 1.495);
  transition: all 1s cubic-bezier(1, -0.565, 0.075, 1.495);
}
strong.username {
    word-wrap: break-word;
    display: block;
    font-size: 1.3rem;
    line-height: 1.2;
    font-weight: 700;
    color: #6d98abe3;
    cursor: cell;
    padding-top: 0px;
    letter-spacing: 1.5px;
}
	.ch {
	float: left;
    padding: 8.5px 0px;
    width: 33%;
    border: 0;
    outline: 0;
    min-height: 31px;
    cursor: pointer;
    text-align: center;
    position: relative;   
    border-bottom: 1px solid rgba(117, 161, 206, 0.5);
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
        -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
	}
	.ch:hover {
	color: rgba(236, 236, 243, 0.97);
    border-bottom: solid 1px rgba(9, 255, 243, 0.62)!important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
	}
	#wrap {
	-webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 4s; /* Firefox < 16 */
    -ms-animation: fadein 4s; /* Internet Explorer */
    -o-animation: fadein 4s; /* Opera < 12.1 */
    animation: fadein 4s;
    background-color: rgb(0, 0, 0);
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
	}
	.navbar {
    background: hsla(0, 0%, 13%, 0.54);
	}
	.btn-default.active, .btn-default.focus, .btn-default:active, .btn-default:focus, .btn-default:hover, .open>.dropdown-toggle.btn-default {
    color: #fff;
    background-color: rgba(19, 18, 18, 0.81);
    border-color: rgba(30, 32, 35, 0);
    border-bottom: 0px solid black;
	text-shadow: 0 0 5px #228DFF, 0 0 10px #228DFF, 0 0 15px #228DFF, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
}
#userlist {
    display: none;
}
a.qe_title {
    text-overflow: ellipsis;
    max-width: 45ch;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
}
[class*="chat-msg"] .username .chatAvatar{
    width:auto;
    max-height:initial;
}
#userlist {
    text-align: center;
    font-size: 14px;
    line-height: 33px;
}
[class*="chat-msg"]:not(.drink):not(.consecutive):before,
.poll-notify + [class*="chat-msg"].consecutive:before,
.poll-notify:before {
    content:"";
    display:block;
    border-top: 0px solid rgba(187, 187, 187, 0.49);
    opacity:0.3;
    margin: auto;
    margin-top:1px;
    margin-bottom:1px;
    position:absolute;

}
[class*="chat-msg"]:not(.drink):not(.consecutive) {
    margin-top: 1px;
    margin-left: 48px;
    margin-right: 20px;
    margin-bottom: 2px;
}
img.chat-avatar.chat-avatar_big {
    height: 55px;
    padding: 3px;
    border-radius: 100%;
    position: absolute;
    left: 0;
}
#controlsrow {
    display: none;
}
img.chat-picture {
    max-height: 155px;
    max-width: 100px;
    border-radius: 5px;
}
.video-js .vjs-control-bar {
    background: linear-gradient(rgba(29, 28, 28, 0), rgba(14, 14, 14, 0.22))!important;
    font-size: 13px;
}
button#mediarefresh {
    float: right;
}

button.vjs-fullscreen-control.vjs-control.vjs-button {
    display: none;
}
.pm-buffer.linewrap {
display: block;
    float: right;
    position: relative;
    padding-left: 50px;
    width: 100%;
}
.panel {
    margin-bottom: 20px;
    background-color: rgba(16, 16, 16, 0.92);
    border: 0px solid transparent;
    transition: 0.5s all;
-webkit-transition: 0.5s all;
-moz-transition: 0.5s all;
-o-transition: 0.5s all;
}
.panel-default>.panel-heading {
    color: #DCE4E8;
    font-size: 16px;
    background-color: #2B2B2F;
    border-color: rgba(0,0,0,.6);
    border-top-left-radius: 0.7em!important;
    -webkit-border-top-left-radius: 0.7em!important;
    -o-border-top-left-radius: 0.7em!important;
    -moz-border-top-left-radius: 0.7em!important;
    border-top-right-radius: 0.7em!important;
    -webkit-border-top-right-radius: 0.7em!important;
    -o-border-top-right-radius: 0.7em!important;
    -moz-border-top-left-radius: 0.7em!important;
    transition: 0.5s all;
-webkit-transition: 0.5s all;
-moz-transition: 0.5s all;
-o-transition: 0.5s all;
}
ul#queue {
    list-style: decimal;
    padding-left: 8px;
    position: inherit;
    padding-right: 8px;
    position: inherit;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgba(146, 148, 154, 0.79);}
.queue_sortable li {
  counter-increment: index; 
  display: flex;
  align-items: center;
}
.queue_sortable li::before {
  content: counters(index, ".", decimal-leading-zero);
  font-size: 1.5rem;
  text-align: right;
  min-width: 50px;
  padding-right: 12px;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  background-image: linear-gradient(to bottom, aquamarine, orangered);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.panel-primary>.panel-heading {
    color: #BFBFBF;
    background-color: rgba(122, 130, 136, 0);
    border-color: rgba(0,0,0,.6);
}
.panel-heading:hover {
    transform: scale(1.01);
    -webkit-transform: scale(1.01);
    -moz-transform: scale(1.01);
    -o-transform: scale(1.01);
    -ms-transform: scale(1.01);
    z-index: 1;
    border: none;
}
.btn-group, .btn-group-vertical {
    vertical-align: middle;
    float: right;
    right: 40px;
}
.qe_time {
	font-size: 13px;
padding-left: 20px;
    float: right;
    margin-right: 1%;
    font-family: inherit;
}
.queue_sortable li:hover {border-bottom: #2b2b2b 2px solid;}

.alert-info {
    background-color: rgba(0, 0, 0, 0.48);
    border-color: #3dced8;
    color: #fff;
    padding: 20px;
    margin-left: 50px;
    margin-right: 50px;
}

input:focus + .line-left,
input:focus + .line-right {
  transition: width .5s ease;
}
input::-webkit-input-placeholder {
  color: #fff;
  /*fallback*/
  color: rgba(0, 0, 0, .4);
  font-style: italic;
  transition: color .5s ease;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}
table {
    background-color: rgba(0, 0, 0, 0.24);
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.14);
    border: 1px solid #1c1e22;
    border-bottom-color: transparent;
    cursor: default;
}
.nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.29);
}
.pagination>li.disabled>a, .pagination>li.disabled>a:hover, .pagination>li.disabled>span, .pagination>li.disabled>span:hover {
    background-color: transparent;
    background-image: -webkit-linear-gradient(#484e55,#3a3f44 60%,#313539);
    background-image: -o-linear-gradient(#484e55,#3a3f44 60%,#313539);
    background-image: -webkit-gradient(linear,left top,left bottom,from(#484e55),color-stop(60%,#3a3f44),to(#313539));
    background-image: linear-gradient(rgba(0, 0, 0, 0.12),rgba(0, 0, 0, 0.16) 60%,rgba(0, 0, 0, 0.15));
    background-repeat: no-repeat;
    -webkit-filter: none;
    filter: none;
}
#mediabuttons:hover {
    color: hsl(0, 0%, 89%);
}
#AudioNoticeSqueeToggle {
    font-size: 16px;
    padding: 7px;
    float: right;
    right: 10px;
    bottom: 45px;
    position: absolute;
    color: rgb(255, 255, 255);
    border-radius: 50%;
    -ms-transform: scale(0.7, 0.7);
    -webkit-transform: scale(0.7, 0.7);
    transform: scale(0.7, 0.7);
    opacity: 0.4;
}
#AudioNoticeSqueeToggle:hover {
    opacity: 0.9;
        -ms-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
}
.label-info {
    background-color: rgba(74, 72, 78, 0.63);
}
.modal-content {
    background: rgba(27, 28, 31, 0.97);
}
.nav-tabs {
    border-bottom: 1px solid #4b4e52;
}
.video-js .vjs-slider {
background-color: rgba(133, 115, 159, 0.25);
}
.video-js .vjs-load-progress div {
    display:none!important;
}
.vjs-polyzor-skin .vjs-control:before, .vjs-polyzor-skin .vjs-control:active {
    text-shadow: 0 0 1em #000000 !important;
}
.vjs-polyzor-skin .vjs-control::before, .vjs-polyzor-skin .vjs-control:active {
    text-shadow: 0 0 1em rgba(0, 0, 0, 0) !important;
}
.headbtn span {
    top: 4px;
    font-size: 15px;
    padding: 2px;
}
.qe_blame {
    float: right;
    font-size: 11px;
    margin-right: 6px;
}
.pm-panel, .pm-panel-placeholder {
    min-width: 440px;
    border-top-left-radius: 0.7em!important;
    -webkit-border-top-left-radius: 0.7em!important;
    -o-border-top-left-radius: 0.7em!important;
    -moz-border-top-left-radius: 0.7em!important;
    border-top-right-radius: 0.7em!important;
    -webkit-border-top-right-radius: 0.7em!important;
    -o-border-top-right-radius: 0.7em!important;
    -moz-border-top-left-radius: 0.7em!important;
}
#customSettingsStaging {
    padding: 30px;
}
#quickQuality {
    display: none;
}
.label.label-info.col-sm-2 {
    padding: 9px;
    font-size: 12px;
}
.btn:hover {
    text-shadow: 0 0 5px #228DFF, 0 0 10px #228DFF, 0 0 15px #228DFF, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
    border-color: rgb(16, 16, 16);
    background: #2323234a;
    transition: left 0.9s 0s, background .2s;
}

#VideoOverlay {
  -moz-transition: opacity 1000ms ease;
  transition: opacity 1000ms ease;
    top: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 50px;
    padding: 10px;
    z-index:1000000;
}

.drink {
    margin: 10px 10px;
    padding: 12px 0px;
    background: rgba(177, 187, 184, 0.08);
    border: 0px solid;
    border-radius: 13px;
    left: 20px;
    right: 20px;
    margin-left: 50px;
}
.chat-msg-\$server\$ {
    font-style: italic;
    color: hsla(305, 13%, 34%, 0.84);
    font-size: 8pt;
    position: relative;
    border-radius: 1000px;
    background: rgba(255, 255, 255, 0.07);
    height: 10px;
    line-height: 12px;
    width: 0;
    margin: 0px auto;
    padding: 5px 10px;
    overflow: hidden;
    transition: bottom 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0);
}
.nick-highlight {
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    padding: 3px;
    transition: bottom 0.5s cubic-bezier(0.42, 0.0, 0.58, 1.0);
}
#prompt-install-drive-userscript {
    padding: 100px;
    margin-top: 10%;
    margin-left: 100px;
    width: 80%;
    position: absolute;
    font-size: 16px;
    background: rgba(39, 38, 38, 0.18);
}
.server-whisper {
    text-align: center;
    display: inline-block;
    width: 100%;
}
.vjs-volume-menu-button {
    bottom: 20px;
}
#drinkcount {
    background-color: rgba(82, 82, 82, 0.16);
    font-size: 21px;
    padding: 15px;
    font-family: 'Montserrat', sans-serif;
}
#drinkbarwrap {
    width: 130px;
    height: auto;
    margin-left: 0px;
    margin-right: 0px;
    float: left;
    left: 0;
    right: 0;
    top: 45px;
    position: absolute;
    opacity: 0.5;
}
.spoiler {
    color: #a2a2a2;
    background: rgba(0, 0, 0, 0.08);
    filter: blur(5px);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='5');
}
.spoiler:hover {
    color: #a2a2a2;
    background: rgba(0, 0, 0, 0.05);
    filter: blur(0px);
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
}
.dropdown-menu {
min-width: 50px;
}
.btn-default.disabled, .btn-default.disabled.active, .btn-default.disabled.focus, .btn-default.disabled:active, .btn-default.disabled:focus, .btn-default.disabled:hover, .btn-default[disabled], .btn-default[disabled].active, .btn-default[disabled].focus, .btn-default[disabled]:active, .btn-default[disabled]:focus, .btn-default[disabled]:hover, fieldset[disabled] .btn-default, fieldset[disabled] .btn-default.active, fieldset[disabled] .btn-default.focus, fieldset[disabled] .btn-default:active, fieldset[disabled] .btn-default:focus, fieldset[disabled] .btn-default:hover {
    background-color: rgba(42, 45, 47, 0.18);
}
.btn-default[disabled], .btn.disabled, .btn[disabled], fieldset[disabled] .btn {
    opacity: 0.53;
}
#leftcontrols {
    display: none;
}
#playlistmanagerwrap {
    display: none;
}
#bg-wrapper {

}
.well {
    border: 0px solid #0c0d0e;
}
.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form{
    background: #131315c9;
}
.bg-wrapper, #backg {
    opacity:0.70;
    overflow: hidden;
    background-size: cover!important;
    background-position: center center!important;
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
  -webkit-filter: blur(8px);
  filter: url('#blur'); /*Firefox Support for Blur*/
  filter: blur(8px);

}

.container {
    width: 100%;
}
@media (min-width: 992px)
.container {
    width: 100%;
}
@media (min-width: 768px)
.container {
    width: 100%;
}
.vjs-loading-spinner {
    display: none!important;
    opacity:0;
}
.fullvideo {
    width: 100%!important;
}
#showchat {
    display: none;
}
.showchat {
   display: inline!important;
}
.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover, .navbar-inverse .navbar-nav>li>a:focus, .navbar-inverse .navbar-nav>li>a:hover {
    background-color: rgba(93, 99, 104, 0.2)!important;
    background-image: linear-gradient(rgba(2, 2, 2, 0.12),rgba(16, 17, 18, 0.12) 40%,rgba(25, 27, 29, 0.42))!important;
}

	/* Tired of yo shit right now */
#newmessages-indicator-bghack {
    background: rgba(0, 0, 0, 0.86);
    z-index: 1000;
    display: none;
    position: absolute;
    left: 0px;
    right: 0px;
    border-top: 1px solid #4d5b90;
    color: #9fa4a7;
    font-size: 11px;
}
.wrapper-content {
  display: table-cell;
  width: 50%;
  vertical-align: top;
}
.filter, .transformation {
  display: table;
  width: 100%;
  text-align: center;
}
.wrapper.filter {
    width: 20%;
    left: 16px;
    top: 70px;
    right: 0;
    display: block;
    font-size: 10px;
    position: absolute;
}


input[type="range"] {
    -webkit-appearance: none !important;
    width: 100%;
    height: 15px;
    background-color: #0a0a0a;
    border: 0px solid #97c68b;
    border-radius: 10px;
    margin: auto;
    transition: all 0.3s ease;
}
input[type="range"]:hover {
  background-color: #b2d5aa;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  width: 20px;
  height: 20px;
  background-color: #579E81;
  border-radius: 30px;
  box-shadow: 0px 0px 3px #3c6d59;
  transition: all 0.5s ease;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background-color: #457d66;
}
input[type="range"]::-webkit-slider-thumb:active {
  box-shadow: 0px 0px 1px #3c6d59;
}
.navbar-nav>li:first-child { 
    display:none
}
#userlist {
 overflow: scroll;
}
.spooky {
    display: none;
    height: 100%;
    position: absolute;
    float: left;
    left:20px;
}
.vision {
    display: none;
    height: 100%;
    position: absolute;
    float: right;
    right: 35px;
}
.halloweens {
    font-size: 18px;
    font-family: 'Montserrat';
    font-weight: 400;
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    background: #c75b1a;
    color: #fff;
    border-radius: 3px;
    width: 100%;
    text-align: center;
}
#resize-video-larger, #resize-video-smaller { Display:none;}

.discordoverlay{
  width: 100%;
  height: 130px;
  position: relative;
  padding-left: 15px;
  overflow: hidden;
}

.discord {
  display: inline-block;
  height: 60px;
  vertical-align: middle;
  margin-right: 2.5px;
}

.discordmain {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: sans-serif;
}
.discordmain h1, .discordmain h2 {
  font-family: 'Montserrat';
}
.discordmain h1 {
    color: #e91e5e;
    font-weight: 400;
    line-height: 12px;
    margin-top: 2px;
    font-size: 23px;
}
.discordmain h2 {
    color: #e91e5e;
    font-size: 22px;
    line-height: 0px;
    font-weight: 700;
}

.discordtext {
  display: inline-block;
  vertical-align: middle;
}

.Darrows {
  position: absolute;
  top: 50%;
  left: calc(100% + 40px);
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
}
.Darrows:before, .Darrows:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  border-left-width: 16.66667px;
  border-bottom-width: 16.66667px;
  border-left-style: solid;
  border-bottom-style: solid;
  opacity: 0;
}

.Darrows-1:before {
  animation: arrows-red 4s linear infinite 4s;
}
@keyframes arrows-red {
  0% {
    border-left-width: 16.66667px;
    border-bottom-width: 16.66667px;
    transform: translate(150px, -50%) rotate(45deg);
    opacity: 0;
  }
  10%, 46% {
    border-left-width: 16.66667px;
    border-bottom-width: 16.66667px;
    opacity: 0;
  }
  40% {
    border-left-color: #E91E63;
    border-bottom-color: #E91E63;
    transform: translate(0px, -50%) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translate(50px, -50%) rotate(45deg);
    opacity: 0;
  }
}
.arrows-1:after {
  animation: arrows-blue 4s linear infinite 2s;
}
@keyframes arrows-blue {
  0% {
    border-left-width: 16.66667px;
    border-bottom-width: 16.66667px;
    transform: translate(150px, -50%) rotate(45deg);
    opacity: 0;
  }
  10%, 46% {
    border-left-width: 16.66667px;
    border-bottom-width: 16.66667px;
    opacity: 0;
  }
  40% {
    border-left-color: #03A9F4;
    border-bottom-color: #03A9F4;
    transform: translate(0px, -50%) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translate(50px, -50%) rotate(45deg);
    opacity: 0;
  }
}
.arrows-2:before {
  animation: arrows-green 4s linear infinite 1s;
}
@keyframes arrows-green {
  0% {
    border-left-width: 16.66667px;
    border-bottom-width: 16.66667px;
    transform: translate(150px, -50%) rotate(45deg);
    opacity: 0;
  }
  10%, 46% {
    border-left-width: 16.66667px;
    border-bottom-width: 16.66667px;
    opacity: 0;
  }
  40% {
    border-left-color: #00C853;
    border-bottom-color: #00C853;
    transform: translate(0px, -50%) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translate(50px, -50%) rotate(45deg);
    opacity: 0;
  }
}
.arrows-2:after {
  animation: arrows-yellow 4s linear infinite -1s;
}
@keyframes arrows-yellow {
  0% {
    border-left-width: 16.66667px;
    border-bottom-width: 16.66667px;
    transform: translate(150px, -50%) rotate(45deg);
    opacity: 0;
  }
  10%, 46% {
    border-left-width: 16.66667px;
    border-bottom-width: 16.66667px;
    opacity: 0;
  }
  40% {
    border-left-color: #FDD835;
    border-bottom-color: #FDD835;
    transform: translate(0px, -50%) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translate(50px, -50%) rotate(45deg);
    opacity: 0;
  }
}
.indicator {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translate(-50%, -50%) scale(2);
}
.indicator svg polyline {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.indicator svg polyline#back {
  stroke: rgba(59,211,171,0.3);
}
.indicator svg polyline#front {
  stroke: #3bd3ab;
  stroke-dasharray: 12, 36;
  stroke-dashoffset: 48;
  animation: dash 1s linear infinite;
}
.cta {
  position: fixed;
  bottom: 20px;
  right: 30px;
  color: #222;
  font-weight: bold;
}
@-moz-keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-o-keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
.navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse {
    max-height: 50px!important;
	width: 100%;
}
.vjs-menu-button.vjs-menu-button-popup.vjs-control.vjs-button.vjs-resolution-button {
    left: 110px;
    margin-right: 30px;
    float: right;
    bottom: 5px;
}
@keyframes flickering {
  0% {
    border-color: transparent;
    opacity: 0.2;
  }
  
  2% {
    border-color: #1FFFFF;
    opacity: 1;
  }
  
  4% {
    border-color: transparent;
    opacity: 0.2;
  }
  
  8% {
    border-color: #1FFFFF;
    opacity: 1;
  }
  
  28% {
    border-color: #1FFFFF;
    opacity: 1;
  }
  
  30% {
    border-color: transparent;
    opacity: 0.2;
  }
  
  36% {
    border-color: #1FFFFF;
    opacity: 1;
  }
  
  100% {
    border-color: #1FFFFF;
    opacity: 1;
  }
}
.poll-notify {
    color: #f00;
    font-weight: 100;
    animation: flickering 5s infinite;
}
.close {
    float: right;
    margin-left: 10px;
    font-size: 26px;
    font-weight: 100;
    line-height: 1;
    color: #fff;
    text-shadow: 0 2px 0 #3a3a3a;
    opacity: .2;
    filter: alpha(opacity=20);
}
.close:focus, .close:hover {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
    filter: alpha(opacity=50);
}
.timestamp:hover {opacity:1;}
.fa.pull-right {
    margin-left: 0em!important;
}
.well>input.form-control[type="text"], input.form-control[type="password"], input.form-control[type="email"], textarea.form-control {
    border-bottom: #ffffff40 solid 1px;
    border-radius: 6px;
}
@media (max-width: 767px) {
  #currenttitle {
    display: none;}
  #motdwrap, .well, #controlsrow { padding: 0rem;}
	.channel-emote {
    max-width: 60px;
		max-height: 60px;}
	.bg-wrapper, #backg {
    background-position: center center!important;
		position: fixed;}
	.section, .well, #controlsrow {
    padding: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
	}
  }
.vjs-subtitles-button.vjs-menu-button.vjs-menu-button-popup.vjs-control.vjs-button {
    right: 66px;
    text-align: right;
    position: absolute;
    bottom: 26px;
}
.leftchat {
float:left!important;
left:0!important;
width: 23%!important;
}
.leftchatvideo {
float: right!important;
right: 0!important;
}
.darkerbg {opacity: 0.10!important;
    -webkit-transition: all 100ms;
    transition: all 100ms;}
.overlayfix {
    position: inherit!important;
    background: #2121212b;
}
.RatioFill {object-fit: fill;}
.RatioCover {object-fit: cover;}
.Buffer {content: 'buffering...';}

.videolist > .queue_entry > .btn-group { position: initial;}
#queue > .queue_entry > .btn-group {position:absolute;}
