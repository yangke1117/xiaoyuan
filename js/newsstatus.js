 //轮播
 var mySwiper = new Swiper(".swiper-container",{  
    direction:"horizontal",
    loop:true,
    autoplayDisableOnInteraction:false, 
    pagination:".swiper-pagination",
    paginationClickable:true,
    prevButton:".swiper-button-prev", 
    nextButton:".swiper-button-next",
    autoplay:3000,
    speed:1000
})
 //新闻

 //
 var news_select = document.getElementById('news_select'),
	news_selectli = news_select.getElementsByTagName('a'),
	selectLen = news_selectli.length;
for (var i = 0; i < selectLen; i++) {
	news_selectli[i].index = i;
	news_selectli[i].addEventListener("click",function(){
		for (var i = 0; i < selectLen; i++) {
			news_selectli[i].setAttribute("class","")
		}
		this.setAttribute("class","onclick")
	},false)
}

//
var news_data1 = [
	{
		href:"newsartical.html",
		time:"2016年10月20日",
		title:"企业级云通讯服务爆发 信析宝欲撬动10亿智能终端",
		txt:"2016年6月底，Twilio这家名不见经传的PaaS云通讯公司在近期表现温和的美股市场中掀起轩然大波，异军突起成为今年美股最大的IPO科技独角兽，上市首日就暴涨92%，市值突破20亿美金，从Twilio股价的上涨让大家看到企业级云服务市场的",
		img:"./images/img/news01.png"
	},
	{
		href:"newsartical.html",
		time:"2016年10月20日",
		title:"罗永浩的“妥协” M系列或成改变锤子命运之作",
		txt:"10月18日，锤子科技在上海梅赛德斯奔驰文化中心开了一场有史以来人数最多的新品发布会。作为一家不大的公司，能够在每一次的产品发布会上得到如此高度的关注，也算是老罗魅力的究极展现。",
		img:"./images/img/news02.png"
	},
	{
		href:"newsartical.html",
		time:"2016年09月07日",
		title:"魅蓝Max发力商务场景 信析宝助力高效服务",
		txt:"魅族又双叒叕开手机发布会了！魅族如今对机海战术贯彻得十分彻底，2016年已经连续发布了PRO 5、MX6、魅蓝Note 3、魅蓝3、魅蓝3S、魅蓝E、魅蓝U10、魅蓝U20等八款不同产品。9月5日发布魅蓝新品发布会，带来了全新机型大屏机魅蓝",
		img:"./images/img/news03.png"
	},
	{
		href:"newsartical.html",
		time:"2016年08月29日",
		title:"三星Note7中国版发布 本土化策略更接地气",
		txt:"8月26日，三星Galaxy Note7在北京召开中国发布会。国行版的三星Galaxy Note7预装了最新的Note UX版本的TouchWiz UI，在系统上面会比旧机型更接地气，除了手机本身在设计、制造、工艺上的继续提升和改造之外",
		img:"./images/img/news04.png"
	},
	{
		href:"newsartical.html",
		time:"2016年08月16日",
		title:"乐视超30亿购酷派 ivvi携信析宝升级场景服务",
		txt:"近日，乐视正式完成对酷派的收购，成为酷派第一大股东。酷派总裁李斌表示：“通过引入和整合乐视生态模式，让酷派转型升级为以硬件为用户入口及节点的互联网生态公司，与乐视共同打造极致的产品及服务，不断为用户创造全新的体系。多余的文本超出就只能显示省略号了。",
		img:"./images/img/news05.png"
	}
];
var news_data2 = [
	{
		href:"newsartical.html",
		time:"2016年10月20日",
		title:"罗永浩的“妥协” M系列或成改变锤子命运之作",
		txt:"10月18日，锤子科技在上海梅赛德斯奔驰文化中心开了一场有史以来人数最多的新品发布会。作为一家不大的公司，能够在每一次的产品发",
		img:"./images/img/news02.png"
	},
	{
		href:"newsartical.html",
		time:"2016年08月29日",
		title:"三星Note7中国版发布 本土化策略更接地气",
		txt:"8月26日，三星Galaxy Note7在北京召开中国发布会。国行版的三星Galaxy Note7预装了最新的Note UX版",
		img:"./images/img/news04.png"
	},
	{
		href:"newsartical.html",
		time:"2016年09月07日",
		title:"魅蓝Max发力商务场景 信析宝助力高效服务",
		txt:"魅族又双叒叕开手机发布会了！魅族如今对机海战术贯彻得十分彻底，2016年已经连续发布了PRO 5、MX6、魅蓝Note 3、魅",
		img:"./images/img/news03.png"
	},
	{
		href:"newsartical.html",
		time:"2016年10月20日",
		title:"企业级云通讯服务爆发 信析宝欲撬动10亿智能终端",
		txt:"2016年6月底，Twilio这家名不见经传的PaaS云通讯公司在近期表现温和的美股市场中掀起轩然大波，异军突起成为今年美股最",
		img:"./images/img/news01.png"
	},
	{
		href:"newsartical.html",
		time:"2016年08月16日",
		title:"乐视超30亿购酷派 ivvi携信析宝升级场景服务",
		txt:"近日，乐视正式完成对酷派的收购，成为酷派第一大股东。酷派总裁李斌表示：“通过引入和整合乐视生态模式，让酷派转型升级为以硬件为用",
		img:"./images/img/news05.png"
	}
];
function createNews(option){
	var li = document.createElement('li');
	li.innerHTML = ["<a href=\"",
					option.href,
					"\"><div class=\"div1 col-sm-2\"><p>",
					option.time.split(/[^\d]/g)[1]+"-"+option.time.split(/[^\d]/g)[2],
					"</p><i></i><span>",
					option.time.split(/[^\d]/g)[0],
					"</span><em></em></div><div class=\"div2 col-sm-7\"><h3>",
					option.title,
					"</h3><p>",
					option.txt,
					"</p></div><img class=\"col-sm-3 responsive img-responsive\" src=\"",
					option.img,
					"\" /></a>"].join("");
	return li;
}
var News = function(){
	var news_content = document.getElementById('news_content');
	return function(data){
		news_content.innerText = "";
		var fragment_news = document.createDocumentFragment();
		data.forEach(function(item){
			fragment_news.appendChild(createNews(item))
		})
		news_content.appendChild(fragment_news);
	}
}()
News(news_data1);
news_selectli[0].addEventListener("focus",function(){
	News(news_data1);
},false)
news_selectli[1].addEventListener("focus",function(){
	News(news_data2);
},false)