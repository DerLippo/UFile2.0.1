var PLAYER=PLAYER||{};PLAYER.Playlist=function(e,i,t,o,a,l,s,d,r,p,n,y,v,m,h,c){function u(){V.vimeoStatus.text("paused")}function _(){V.vimeoStatus.text("finished"),V.videoAdPlayed=!1,V.VIDEO.gaVideoEnded(),"Right playlist"==t.playlist||"Bottom playlist"==t.playlist||"Off"==t.playlist?(V.videoid=parseInt(V.videoid)+1,V.videos_array.length==V.videoid&&(V.videoid=0),"Play next video"==t.onFinish?(V.VIDEO.shuffleBtnEnabled?(V.VIDEO.generateRandomNumber(),V.videoid=V.VIDEO.rand,V.VIDEO.setPlaylistItem(V.videoid)):V.VIDEO.setPlaylistItem(V.videoid),V.VIDEO.playVideoById(V.videoid)):"Restart video"==t.onFinish?V.vimeoPlayer.api("play"):"Stop video"==t.onFinish&&""!=t.posterImgOnVideoFinish&&V.VIDEO.showPoster2()):"Restart video"==t.onFinish?V.vimeoPlayer.api("play"):"Stop video"==t.onFinish}function I(e){V.vimeo_time=Math.floor(e.seconds),V.vimeo_duration=Math.floor(e.duration),V.vimeoStatus.text(e.seconds+"s played"),0==V.vimeo_time&&"yes"==V.videos_array[V.videoid].prerollAD&&(V.VIDEO.videoAdStarted=!0,V.videoAdPlayed?V.vimeoPlayer.api("play"):(V.vimeoPlayer.api("pause"),d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(this.canPlay=!0,V.video_pathAD=V.videos_array[V.videoid].preroll_mp4),V.VIDEO.loadAD(V.video_pathAD,"prerollActive"),V.VIDEO.openAD())),V.tim=setInterval(function(){if("HTML5"!=t.videos[V.videoid].videoType&&"HTML5 (self-hosted)"!=t.videoType){if(V.VIDEO.secondsFormat(V.vimeo_time)==V.videos_array[V.videoid].midrollAD_displayTime){if(V.VIDEO.midrollPlayed)return;V.VIDEO.midrollPlayed=!0,"yes"==V.videos_array[V.videoid].midrollAD&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(V.canPlay=!0,V.video_pathAD=V.videos_array[V.videoid].midroll_mp4),V.vimeoPlayer.api("pause"),V.VIDEO.loadAD(V.video_pathAD,"midrollActive"),V.VIDEO.openAD())}if(V.VIDEO.secondsFormat(V.vimeo_time)>=V.VIDEO.secondsFormat(V.vimeo_duration-1)&&V.vimeo_duration>0){if(V.VIDEO.postrollPlayed)return;V.VIDEO.postrollPlayed=!0,"yes"==V.videos_array[V.videoid].postrollAD&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(V.canPlay=!0,V.video_pathAD=V.videos_array[V.videoid].postroll_mp4),V.vimeoPlayer.api("pause"),V.VIDEO.loadAD(V.video_pathAD,"postrollActive"),V.VIDEO.openAD())}}},50),"yes"==V.videos_array[V.videoid].popupAdShow&&V.VIDEO.enablePopup()}function D(){V.vimeoIframe=e(V.vimeoWrapper).find("#"+V.options.instanceName),V.vimeoPlayer=$f(V.vimeoIframe[0]),V.vimeoStatus=e(".status"),V.vimeoPlayer.addEvent("ready",function(){V.vimeoPlayer.addEvent("pause",u),V.vimeoPlayer.addEvent("finish",_),V.vimeoPlayer.addEvent("playProgress",I),y&&"AD 5 sec + Pieces After Effects project"!=V.options.videos[0].title&&"Pieces After Effects project"!=V.options.videos[0].title&&"AD 5 sec + Space Odyssey After Effects Project"!=V.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=V.options.videos[0].title&&"i Create"!=V.options.videos[0].title&&"Swimwear Spring Summer"!=V.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=V.options.youtubePlaylistID&&"Google drive video example"!=V.options.videos[0].title&&"Dropbox video example"!=V.options.videos[0].title&&"Livestream HLS m3u8 video example"!=V.options.videos[0].title&&"Openload video example"!=V.options.videos[0].title&&"Youtube 360 VR video"!=V.options.videos[0].title&&(V.VIDEO.pw(),V.vimeoWrapper.css({zIndex:0}),e("iframe#"+V.options.instanceName).attr("src",""))})}var V=this;switch(this.VIDEO=i,this.element=a,this.youtube_array=h,""==t.youtubePlaylistID&&""==t.youtubeChannelID||(t.videos=V.youtube_array),this.canPlay=r,this.CLICK_EV=p,this.params=n,this.isMobile=c,this.preloader=l,this.preloaderAD=s,this.options=t,this.mainContainer=o,this.videoid="VIDEOID",this.adStartTime="ADSTARTTIME",this.videoAdPlayed=!1,this.rand=Math.floor(Math.random()*t.videos.length+0),this.ytQuality=t.youtubeQuality,this.youtubeSTARTED=!1,this.deviceAgent=v,this.agentID=m,this.YTAPI_onPlayerReady=!1,this.vimeo_time,this.vimeo_duration,this.scrollingIsOn=!1,this.touchmove=!1,this.playlist=e("<div />"),this.playlistContent=e("<div />"),this.playlistContentOverlay=e("<div />").addClass("elite_vp_playlistContentOverlay").hide(),this.playlistBar=e("<div />"),this.playlistBar.addClass("elite_vp_bg elite_vp_elite_vp_"+this.options.instanceTheme),this.playlist.append(this.playlistBar),this.playlist.append(this.playlistContentOverlay),this.playlistBarInside=e("<div />"),this.playlistBarInside.addClass("elite_vp_playlistBarInside"),this.playlistBar.append(this.playlistBarInside),this.lastBtnIcon=e("<span />").attr("aria-hidden","true").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor elite_vp_elite_vp_"+this.options.instanceTheme).addClass("fa-elite-step-forward").attr("id","elite_vp_lastBtn"),this.firstBtnIcon=e("<span />").attr("aria-hidden","true").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor elite_vp_"+this.options.instanceTheme).addClass("fa-elite-step-backward").attr("id","elite_vp_firstBtn"),this.nextBtnIcon=e("<span />").attr("aria-hidden","true").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor elite_vp_"+this.options.instanceTheme).addClass("fa-elite-forward").attr("id","elite_vp_nextBtn"),this.previousBtnIcon=e("<span />").attr("aria-hidden","true").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor elite_vp_"+this.options.instanceTheme).addClass("fa-elite-backward").attr("id","elite_vp_previousBtn"),this.shuffleBtnIcon=e("<span />").attr("aria-hidden","true").attr("id","elite_vp_shuffleBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor elite_vp_"+this.options.instanceTheme).addClass("fa-elite-random").addClass("elite_vp_playerElement"),this.lastBtn=e("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement"),this.lastBtn.append(this.lastBtnIcon),this.firstBtn=e("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement"),this.firstBtn.append(this.firstBtnIcon),this.nextBtn=e("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement"),this.nextBtn.append(this.nextBtnIcon),this.previousBtn=e("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement"),this.previousBtn.append(this.previousBtnIcon),this.shuffleBtn=e("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement"),this.shuffleBtn.append(this.shuffleBtnIcon),this.playlistBarInside.append(this.firstBtn),this.playlistBarInside.append(this.previousBtn),this.playlistBarInside.append(this.shuffleBtn),this.playlistBarInside.append(this.nextBtn),this.playlistBarInside.append(this.lastBtn),this.options.playlist){case"Right playlist":this.playlist.attr("id","elite_vp_playlist"),this.playlist.addClass("elite_vp_playlist elite_vp_"+this.options.instanceTheme),this.playlistContent.attr("id",V.options.instanceName+"elite_vp_playlistContent"),this.playlistBar.addClass("elite_vp_playlistBar");break;case"Bottom playlist":this.playlist.attr("id","elite_vp_playlist_bottom"),this.playlist.addClass("elite_vp_playlist elite_vp_"+this.options.instanceTheme),this.playlistContent.attr("id",V.options.instanceName+"elite_vp_playlistContent_bottom"),this.playlistBar.addClass("elite_vp_playlistBar_bottom")}V.videos_array=new Array,V.item_array=new Array,this.vimeoWrapper=e("<div></div>"),this.vimeoWrapper.attr("id","elite_vp_vimeoWrapper"),V.element&&V.element.append(V.vimeoWrapper),e(this.vimeoWrapper).html('<iframe id="'+V.options.instanceName+'" src="" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');var E=0,O=0;this.onPlayerReady=function(){if(V.YTAPI_onPlayerReady=!0,"youtube"==t.videos[0].videoType||"YouTube"==t.videoType){V.VIDEO.playButtonScreen.hide();var e=!1,i=window.navigator.userAgent,o=i.indexOf("MSIE "),a=i.indexOf("Trident/");(o>-1||a>-1)&&(e=!0),e?"Yes"==t.loadRandomVideoOnStart?V.VIDEO.youtubePlayer.cueVideoById(V.videos_array[V.rand].youtubeID):V.VIDEO.youtubePlayer.cueVideoById(V.videos_array[V.videoid].youtubeID):"Yes"==t.loadRandomVideoOnStart?V.VIDEO.youtubePlayer.cueVideoById(V.videos_array[V.rand].youtubeID):V.VIDEO.youtubePlayer.cueVideoById(V.videos_array[V.videoid].youtubeID),V.VIDEO.youtubePlayer.setPlaybackQuality(V.ytQuality),t.autoplay&&(V.isMobile.any()||V.VIDEO.getViewportStatus()&&V.VIDEO.youtubePlayer.playVideo()),V.VIDEO.resizeAll(),y&&"AD 5 sec + Pieces After Effects project"!=V.options.videos[0].title&&"Pieces After Effects project"!=V.options.videos[0].title&&"AD 5 sec + Space Odyssey After Effects Project"!=V.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=V.options.videos[0].title&&"i Create"!=V.options.videos[0].title&&"Swimwear Spring Summer"!=V.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=V.options.youtubePlaylistID&&"Google drive video example"!=V.options.videos[0].title&&"Dropbox video example"!=V.options.videos[0].title&&"Livestream HLS m3u8 video example"!=V.options.videos[0].title&&"Openload video example"!=V.options.videos[0].title&&"Youtube 360 VR video"!=V.options.videos[0].title&&(V.VIDEO.pw(),void 0!=V.VIDEO.youtubePlayer&&(V.VIDEO.youtubePlayer.stopVideo(),V.VIDEO.youtubePlayer.clearVideo(),V.VIDEO.youtubePlayer.setSize(1,1))),V.popupTimer=setInterval(function(){"yes"==V.videos_array[V.videoid].popupAdShow&&V.VIDEO.enablePopup()},1e3)}},this.onPlayerStateChange=function(e){var o=Math.floor(V.VIDEO.youtubePlayer.getCurrentTime());V.VIDEO.calculateYoutubeTotalTime(V.VIDEO.youtubePlayer.getDuration()),1===e.data&&0==o&&(V.youtubeSTARTED=!0),1===e.data?(V.isMobile.any()&&V.VIDEO.playButtonScreen.addClass("elite_vp_playButtonScreenHide"),a.removeClass("vp_paused"),a.addClass("elite_vp_playing"),i.change("elite_vp_playing"),V.VIDEO.play(),V._timer=setInterval(function(){if("HTML5"!=t.videos[V.videoid].videoType&&"HTML5 (self-hosted)"!=t.videoType){if(V.progressWidth=V.VIDEO.youtubePlayer.getCurrentTime()/V.VIDEO.youtubePlayer.getDuration()*V.VIDEO.videoTrack.width(),V.VIDEO.videoTrackProgress.css("width",V.progressWidth),V.progressIdleWidth=V.VIDEO.youtubePlayer.getCurrentTime()/V.VIDEO.youtubePlayer.getDuration()*V.VIDEO.progressIdleTrack.width(),V.VIDEO.progressIdle.css("width",V.progressIdleWidth),V.VIDEO.calculateYoutubeElapsedTime(V.VIDEO.youtubePlayer.getCurrentTime()),V.buffered=V.VIDEO.youtubePlayer.getVideoLoadedFraction(),V.downloadWidth=V.buffered*V.VIDEO.videoTrack.width(),V.VIDEO.videoTrackDownload.css("width",V.downloadWidth),V.progressIdleDownloadWidth=V.buffered*V.VIDEO.progressIdleTrack.width(),V.VIDEO.progressIdleDownload.css("width",V.progressIdleDownloadWidth),V.VIDEO.secondsFormat(V.VIDEO.youtubePlayer.getCurrentTime())==V.videos_array[V.videoid].midrollAD_displayTime){if(V.VIDEO.midrollPlayed)return;V.VIDEO.midrollPlayed=!0,"yes"==V.videos_array[V.videoid].midrollAD&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(V.canPlay=!0,V.video_pathAD=V.videos_array[V.videoid].midroll_mp4),V.VIDEO.youtubePlayer.pauseVideo(),V.VIDEO.loadAD(V.video_pathAD,"midrollActive"),V.VIDEO.openAD())}if(V.VIDEO.secondsFormat(V.VIDEO.youtubePlayer.getCurrentTime())>=V.VIDEO.secondsFormat(V.VIDEO.youtubePlayer.getDuration()-1)&&V.VIDEO.youtubePlayer.getDuration()>0){if(V.VIDEO.postrollPlayed)return;V.VIDEO.postrollPlayed=!0,"yes"==V.videos_array[V.videoid].postrollAD&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(V.canPlay=!0,V.video_pathAD=V.videos_array[V.videoid].postroll_mp4),V.VIDEO.youtubePlayer.pauseVideo(),V.VIDEO.loadAD(V.video_pathAD,"postrollActive"),V.VIDEO.openAD())}}},50)):2===e.data?(clearInterval(V._timer),a.addClass("vp_paused"),a.removeClass("elite_vp_playing"),i.change("vp_paused"),V.VIDEO.pause()):0===e.data?(V.VIDEO.gaVideoEnded(),V.VIDEO.midrollPlayed=!1,V.VIDEO.postrollPlayed=!1,V.videoAdPlayed=!1,V.videoid=parseInt(V.videoid)+1,V.videos_array.length==V.videoid&&(V.videoid=0),"Play next video"==t.onFinish?(V.VIDEO.shuffleBtnEnabled?(V.VIDEO.generateRandomNumber(),V.videoid=V.VIDEO.rand,V.VIDEO.setPlaylistItem(V.videoid)):V.VIDEO.setPlaylistItem(V.videoid),V.VIDEO.playVideoById(V.videoid)):"Restart video"==t.onFinish?void 0!=V.VIDEO.youtubePlayer&&(V.VIDEO.youtubePlayer.seekTo(0),V.VIDEO.youtubePlayer.playVideo()):"Stop video"==t.onFinish&&(V.VIDEO.youtubePlayer.seekTo(0),V.VIDEO.youtubePlayer.pauseVideo(),V.VIDEO.youtubePlayer.stopVideo(),""!=t.posterImgOnVideoFinish&&(V.VIDEO.resetPlayer(),V.VIDEO.youtubePlayer.seekTo(0),V.VIDEO.youtubePlayer.pauseVideo(),V.VIDEO.showPoster2()))):5===e.data&&(V.VIDEO.resetPlayer(),V.VIDEO.playButtonScreen.hide()),1!==e.data||0!=o||"yes"!=V.videos_array[V.videoid].prerollAD&&!V.options.showGlobalPrerollAds?e.data!=YT.PlayerState.PLAYING&&e.data!=YT.PlayerState.CUED||(V.youtubePLAYING=!0):(V.VIDEO.videoAdStarted=!0,V.videoAdPlayed?V.VIDEO.youtubePlayer.playVideo():(V.VIDEO.youtubePlayer.pauseVideo(),d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(this.canPlay=!0,t.showGlobalPrerollAds?V.video_pathAD=V.VIDEO.globalPrerollAds_arr[V.VIDEO.getGlobalPrerollRandomNumber()]:V.video_pathAD=V.videos_array[V.videoid].preroll_mp4),V.VIDEO.loadAD(V.video_pathAD,"prerollActive"),V.VIDEO.openAD()))};var f=-1;switch(e(t.videos).each(function(){f+=1;var i={id:f,title:this.title,videoType:this.videoType,youtubeID:this.youtubeID,vimeoID:this.vimeoID,video_path_mp4:this.mp4,enable_mp4_download:this.enable_mp4_download,imageUrl:this.imageUrl,imageTimer:this.imageTimer,prerollAD:this.prerollAD,prerollGotoLink:this.prerollGotoLink,preroll_mp4:this.preroll_mp4,prerollSkipTimer:this.prerollSkipTimer,midrollAD:this.midrollAD,midrollAD_displayTime:this.midrollAD_displayTime,midrollGotoLink:this.midrollGotoLink,midroll_mp4:this.midroll_mp4,midrollSkipTimer:this.midrollSkipTimer,postrollAD:this.postrollAD,postrollGotoLink:this.postrollGotoLink,postroll_mp4:this.postroll_mp4,postrollSkipTimer:this.postrollSkipTimer,popupImg:this.popupImg,popupAdShow:this.popupAdShow,popupAdStartTime:this.popupAdStartTime,popupAdEndTime:this.popupAdEndTime,popupAdGoToLink:this.popupAdGoToLink,description:this.description,thumbnail_image:this.thumbImg,info_text:this.info};V.videos_array.push(i),V.nowPlayingThumbnail=e("<div />"),V.nowPlayingThumbnail.addClass("elite_vp_nowPlayingThumbnail"),V.nowPlayingThumbnail.text(V.options.nowPlayingTooltipTxt),V.nowPlayingThumbnail.hide(),V.itemLeft=e("<div />"),V.itemLeft.addClass("elite_vp_itemLeft"),V.i=document.createElement("img"),V.i.onload=function(){V.thumbImageW=this.width,V.thumbImageH=this.height},V.i.src=i.thumbnail_image,"youtube"!=t.videos[f].videoType&&"YouTube"!=t.videoType||"auto"!=i.thumbnail_image&&""!=i.thumbnail_image||(V.i.src="http://img.youtube.com/vi/"+t.videos[f].youtubeID+"/1.jpg"),V.itemLeft.append(V.i),V.itemLeft.append(V.nowPlayingThumbnail),e(V.i).addClass("elite_vp_thumbnail_image elite_vp_themeColorThumbBorder");var o='<div class="elite_vp_itemRight"><div class="elite_vp_title elite_vp_themeColorText">'+i.title+'</div><div class="elite_vp_description elite_vp_controlsColor elite_vp_'+V.options.instanceTheme+'"> '+i.description+"</div></div>",a='<div class="elite_vp_itemRight_bottom"><div class="elite_vp_title elite_vp_themeColorText">'+i.title+'</div><div class="elite_vp_description elite_vp_controlsColor elite_vp_'+V.options.instanceTheme+'"> '+i.description+"</div></div>";switch(t.playlist){case"Right playlist":V.item=e("<div />"),V.item.addClass("elite_vp_item").css("top",String(O)+"px"),V.item_array.push(V.item),V.item.addClass("elite_vp_itemUnselected elite_vp_"+V.options.instanceTheme),V.item.append(V.itemLeft),V.item.append(o),O+=80;break;case"Bottom playlist":V.item=e("<div />"),V.item.addClass("elite_vp_item").css("left",String(E)+"px"),V.item_array.push(V.item),V.item.addClass("elite_vp_itemUnselected elite_vp_"+V.options.instanceTheme),V.item.css("display","inline-flex"),V.item.append(V.itemLeft),V.item.append(a)}V.playlistContent.append(V.item),void 0!=V.item&&V.item.bind(V.CLICK_EV,function(){V.touchmove||V.scrollingIsOn&&V.isMobile.any()||(V.preloader&&V.preloader.stop().animate({opacity:1},0,function(){e(this).show()}),V.videoid=i.id,V.VIDEO.setPlaylistItem(V.videoid),V.VIDEO.resetPlayer(),V.VIDEO.resetPlayerAD(),V.VIDEO.resizeAll(),D(),V.VIDEO.playVideoById(V.videoid),V.youtubeSTARTED=!1,y&&"AD 5 sec + Pieces After Effects project"!=V.options.videos[0].title&&"Pieces After Effects project"!=V.options.videos[0].title&&"AD 5 sec + Space Odyssey After Effects Project"!=V.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=V.options.videos[0].title&&"i Create"!=V.options.videos[0].title&&"Swimwear Spring Summer"!=V.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=V.options.youtubePlaylistID&&"Google drive video example"!=V.options.videos[0].title&&"Dropbox video example"!=V.options.videos[0].title&&"Livestream HLS m3u8 video example"!=V.options.videos[0].title&&"Openload video example"!=V.options.videos[0].title&&"Youtube 360 VR video"!=V.options.videos[0].title&&V.VIDEO.pw())})}),"Yes"==t.loadRandomVideoOnStart?V.videoid=V.rand:V.videoid=0,V.params.id&&(V.videoid=V.rand=parseInt(V.params.id)),V.options.playlist){case"Right playlist":"Yes"==t.loadRandomVideoOnStart?(e(V.item_array[V.rand]).removeClass("elite_vp_itemUnselected elite_vp_"+this.options.instanceTheme).addClass("elite_vp_itemSelected elite_vp_"+this.options.instanceTheme),V.item_array[V.rand].find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected"),V.VIDEO.playedVideos.push(V.rand)):(e(V.item_array[V.videoid]).removeClass("elite_vp_itemUnselected elite_vp_"+this.options.instanceTheme).addClass("elite_vp_itemSelected elite_vp_"+this.options.instanceTheme),V.item_array[V.videoid].find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected"),V.VIDEO.playedVideos.push(V.videoid));break;case"Bottom playlist":"Yes"==t.loadRandomVideoOnStart?(e(V.item_array[V.rand]).removeClass("elite_vp_itemUnselected_bottom elite_vp_"+this.options.instanceTheme).addClass("elite_vp_itemSelected_bottom elite_vp_"+this.options.instanceTheme),V.item_array[V.rand].find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected"),V.VIDEO.playedVideos.push(V.rand)):(e(V.item_array[V.videoid]).removeClass("elite_vp_itemUnselected_bottom elite_vp_"+this.options.instanceTheme).addClass("elite_vp_itemSelected_bottom elite_vp_"+this.options.instanceTheme),V.item_array[V.videoid].find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected"),V.VIDEO.playedVideos.push(V.videoid))}e(V.playlistContent).mCustomScrollbar("scrollTo",V.item_array[V.videoid]),"youtube"==t.videos[V.videoid].videoType||"YouTube"==t.videoType?(V.VIDEO.imageWrapper.css({zIndex:0}),V.VIDEO.imageWrapper.css({visibility:"none"}),V.VIDEO.hideVideoElements(),V.preloader.stop().animate({opacity:0},0,function(){e(this).hide()}),V.VIDEO.ytWrapper.css({zIndex:501}),V.VIDEO.ytWrapper.css({visibility:"visible"}),V.vimeoWrapper.css({zIndex:0})):"HTML5"==t.videos[V.videoid].videoType||"HTML5 (self-hosted)"==t.videoType?(V.VIDEO.imageWrapper.css({zIndex:0}),V.VIDEO.imageWrapper.css({visibility:"none"}),V.VIDEO.ytWrapper.css({zIndex:0}),V.VIDEO.ytWrapper.css({visibility:"hidden"}),V.vimeoWrapper.css({zIndex:0}),d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(this.canPlay=!0,"Yes"==t.loadRandomVideoOnStart?(V.video_path=V.videos_array[V.rand].video_path_mp4,V.video_pathAD=V.videos_array[V.rand].preroll_mp4):(V.video_path=V.videos_array[V.videoid].video_path_mp4,V.video_pathAD=V.videos_array[V.videoid].preroll_mp4)),V.VIDEO.load(V.video_path,"0")):"vimeo"==t.videos[V.videoid].videoType||"Vimeo"==t.videoType?(V.VIDEO.imageWrapper.css({zIndex:0}),V.VIDEO.imageWrapper.css({visibility:"none"}),V.VIDEO.hideCustomControls(),V.VIDEO.hideVideoElements(),V.preloader.stop().animate({opacity:0},700,function(){e(this).hide()}),V.vimeoWrapper.css({zIndex:501}),V.isMobile.any()?"Yes"==t.loadRandomVideoOnStart?e(V.vimeoWrapper).find("#"+V.options.instanceName).attr("src","https://player.vimeo.com/video/"+V.videos_array[V.rand].vimeoID+"?autoplay=0?api=1&player_id="+V.options.instanceName+"&color="+t.vimeoColor):e(V.vimeoWrapper).find("#"+V.options.instanceName).attr("src","https://player.vimeo.com/video/"+V.videos_array[V.videoid].vimeoID+"?autoplay=0?api=1&player_id="+V.options.instanceName+"&color="+t.vimeoColor):t.autoplay?"Yes"==t.loadRandomVideoOnStart?e(V.vimeoWrapper).find("#"+V.options.instanceName).attr("src","https://player.vimeo.com/video/"+V.videos_array[V.rand].vimeoID+"?autoplay=1?api=1&player_id="+V.options.instanceName+"&color="+t.vimeoColor):e(V.vimeoWrapper).find("#"+V.options.instanceName).attr("src","https://player.vimeo.com/video/"+V.videos_array[V.videoid].vimeoID+"?autoplay=1?api=1&player_id="+V.options.instanceName+"&color="+t.vimeoColor):"Yes"==t.loadRandomVideoOnStart?e(V.vimeoWrapper).find("#"+V.options.instanceName).attr("src","https://player.vimeo.com/video/"+V.videos_array[V.rand].vimeoID+"?autoplay=0?api=1&player_id="+V.options.instanceName+"&color="+t.vimeoColor):e(V.vimeoWrapper).find("#"+V.options.instanceName).attr("src","https://player.vimeo.com/video/"+V.videos_array[V.videoid].vimeoID+"?autoplay=0?api=1&player_id="+V.options.instanceName+"&color="+t.vimeoColor),D()):"image"!=t.videos[V.videoid].videoType&&"Image"!=t.videoType||(V.VIDEO.hideCustomControls(),V.VIDEO.hideVideoElements(),V.VIDEO.ytWrapper.css({zIndex:0}),V.VIDEO.ytWrapper.css({visibility:"hidden"}),V.vimeoWrapper.css({zIndex:0}),V.vimeoWrapper.css({visibility:"hidden"}),V.VIDEO.imageWrapper.css({zIndex:502}),V.VIDEO.imageWrapper.css({visibility:"visible"}),V.VIDEO.imageDisplayed.src=V.videos_array[0].imageUrl,e(V.VIDEO.imageDisplayed).on("load",function(){t.autoplay&&V.VIDEO.setImageTimer()})),V.nextBtn.bind(V.CLICK_EV,function(){V.VIDEO.shuffleBtnEnabled?(V.VIDEO.generateRandomNumber(),V.videoid=V.VIDEO.rand,V.VIDEO.setPlaylistItem(V.videoid)):(V.videoid=V.videoid+1,V.videoid>=t.videos.length&&(V.videoid=0),V.VIDEO.setPlaylistItem(V.videoid)),V.VIDEO.playVideoById(V.videoid),D()}),V.previousBtn.bind(V.CLICK_EV,function(){V.VIDEO.shuffleBtnEnabled?(V.VIDEO.generateRandomNumber(),V.videoid=V.VIDEO.rand,V.VIDEO.setPlaylistItem(V.videoid)):(V.videoid=V.videoid-1,V.videoid<0&&(V.videoid=t.videos.length-1),V.VIDEO.setPlaylistItem(V.videoid)),V.VIDEO.playVideoById(V.videoid),D()}),V.shuffleBtn.bind(V.CLICK_EV,function(){V.VIDEO.toggleShuffleBtn()}),V.lastBtn.bind(V.CLICK_EV,function(){e(V.playlistContent).mCustomScrollbar("scrollTo","last")}),V.firstBtn.bind(V.CLICK_EV,function(){e(V.playlistContent).mCustomScrollbar("scrollTo","first")}),V.totalWidth=t.videoPlayerWidth,V.totalHeight=t.videoPlayerHeight,"Right playlist"!=t.playlist&&"Bottom playlist"!=t.playlist||V.element&&(o.append(V.playlist),V.playlist.append(V.playlistContent)),this.playlistW=this.playlist.width(),this.playlistH=this.playlist.height(),"Right playlist"==t.playlist?(V.playlistContent.css("height",String(O)+"px"),V.playerWidth=V.totalWidth-V.playlist.width(),V.playerHeight=V.totalHeight-V.playlist.height(),V.playlist.css({height:"100%",top:0}),V.playlistContent.height(o.height()-50),e(V.playlistContent).mCustomScrollbar({axis:"y",theme:V.options.playlistScrollType,scrollButtons:{enable:!0},snapOffset:50,callbacks:{onScrollStart:function(){V.isMobile.any()&&setTimeout(function(){V.playlistContentOverlay.show(),V.scrollingIsOn=!0},50)},onScroll:function(){V.isMobile.any()&&(V.playlistContentOverlay.hide(),V.scrollingIsOn=!1,V.touchmove=!1)},whileScrolling:function(){}}})):"Bottom playlist"==t.playlist&&(V.playlistContent.css("width",String(E)+"px"),V.playerWidth=V.totalWidth,V.playerHeight=V.totalHeight-V.playlist.height(),V.playlist.css({left:0,width:"100%",bottom:0}),V.playlistContent.width(o.width()),e(V.playlistContent).mCustomScrollbar({axis:"x",theme:V.options.playlistScrollType,scrollButtons:{enable:!0},callbacks:{onScrollStart:function(){V.isMobile.any()&&setTimeout(function(){V.playlistContentOverlay.show(),V.scrollingIsOn=!0},50)},onScroll:function(){V.isMobile.any()&&(V.playlistContentOverlay.hide(),V.scrollingIsOn=!1,V.touchmove=!1)},whileScrolling:function(){}},advanced:{autoExpandHorizontalScroll:!0},setHeight:"auto",setWidth:"auto"})),e(V.playlistContent).mCustomScrollbar("scrollTo",V.item_array[V.videoid]),e("body").bind("touchmove",function(){V.touchmove=!0})},PLAYER.Playlist.prototype={},PLAYER.Playlist.prototype.hidePlaylist=function(){this.playlist.hide()},PLAYER.Playlist.prototype.showPlaylist=function(){this.playlist.show()},PLAYER.Playlist.prototype.resizePlaylist=function(){var e=this;switch(this.options.playlist){case"Right playlist":this.playlist.css({right:0,height:"100%"}),this.playlistContent.css({top:0,height:e.mainContainer.height()-50}),this.playlistContent.height(this.mainContainer.height()-this.playlistBar.height());break;case"Bottom playlist":this.playlist.css({left:0,width:"100%",bottom:0}),this.playlistContent.height(this.playlist.height()-this.playlistBar.height())}this.playlistBarInside.css({left:e.playlistBar.width()/2-this.playlistBarInside.width()/2})},PLAYER.Playlist.prototype.playYoutube=function(e){void 0!=this.VIDEO.youtubePlayer&&(this.VIDEO.youtubePlayer.cueVideoById(this.videos_array[e].youtubeID),this.VIDEO.youtubePlayer.setPlaybackQuality(this.ytQuality),this.preloader.hide(),this.VIDEO.ytWrapper.css({zIndex:501}),this.VIDEO.ytWrapper.css({visibility:"visible"}),this.isMobile.any()||this.VIDEO.youtubePlayer.playVideo()),this.VIDEO.resizeAll()},PLAYER.Playlist.prototype.playVimeo=function(e){this.preloader.hide(),this.vimeoWrapper.css({zIndex:501}),this.isMobile.any()?$(self.vimeoWrapper).find("#"+self.options.instanceName).attr("src","https://player.vimeo.com/video/"+this.videos_array[e].vimeoID+"?autoplay=0?api=1&player_id="+self.options.instanceName+"&color="+this.options.vimeoColor):$(self.vimeoWrapper).find("#"+self.options.instanceName).attr("src","https://player.vimeo.com/video/"+this.videos_array[e].vimeoID+"?autoplay=1?api=1&player_id="+self.options.instanceName+"&color="+this.options.vimeoColor)};