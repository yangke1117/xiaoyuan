var timecontrol = document.querySelector(".cd-timeline-img.control"),
	cdtimeline = document.querySelectorAll(".cd-timeline-block"),
	tLen = cdtimeline.length,
	freq=0;
timecontrol.addEventListener("click",function(){
	freq^=1;
	for (var i = 0; i < tLen; i++) {
		if(i<8){continue};
		cdtimeline[i].setAttribute("class",freq?"cd-timeline-block":"cd-timeline-block hidden")
		if(i==tLen-1){cdtimeline[i].setAttribute("class","cd-timeline-block")};
	}
	this.innerHTML = freq?"<span>收起更多</span>":"<span>加载更多</span>"
})