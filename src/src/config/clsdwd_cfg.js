var ResList = [
	"clsdwd",
]

for (var i = 0; i < ResList.length; i++) {
	getRes(gsrJs, ResList[i])
}

var mainInfo = {
	doList: [
		res.img_do1,
		res.img_do2
	],
	helpFile: res.sysm,
	titleFile: res.title,
	soundFile:res.sound_title,
	noShow:true,
	noSee:true,
	mainLoop: [
        res.img_loop_1,
        res.img_loop_2,
        res.img_loop_3
	],
	layerList: [
		["doExp1", function() {
			return new doExp1()
		}],
		["doExp2", function() {
			return new doExp2()
		}]
	],
	addRes: {
       hot:"res/extra/clsdwd/json/clsdwd_hotAni.json",
       wenduji_res:"res/common/wenduji.json",
	   miaobiao_res:"res/common/miaobiao.json",
	   inshao:"res/extra/clsdwd/json/clsdwd_inshao.json",
	   biao1:"res/extra/clsdwd/json/clsdwd_biao1.json",
	   biao2:"res/extra/clsdwd/json/clsdwd_biao2.json"
	},
	addItems: [
		"tubiao"
	],
}