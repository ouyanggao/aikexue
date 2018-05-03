var ResList = [
	"wtdcf", //csv文件中定义的实验标签
]

for (var i = 0; i < ResList.length; i++) {
	getRes(ccjJs, ResList[i]) //读取指定开发者资源集中的指定实验资源
}

var mainInfo = { // 命名必须为mainInfo
	//exp:"lsyrs",
	doList: [
		res.do1,
		res.do2,
		res.do3,
	],
	seeList: [
		res.see1,
		res.see2,
	],
	seeNames: [
		"认识沉浮",
		"物体沉浮",
	],
	doNames: [
		"相同体积",
		"相同重量",
		"同种材料"
	],
	helpFile: res.sysm, //帮助图片
	helpScale: 1.0, //帮助缩放值
	titleFile: res.title,
	soundFile: res.title_sound, //标题声音文件
	noShow: true,
	mainLoop: [ //主页轮播图片
		res.loop1,
	],
	layerList: [ //实验入口 必须严格按照格式定义 seeExp%d doExp%d
		["doExp1", function() {
			return new doExp1()
		}],
		["doExp2", function() {
			return new doExp2()
		}],
		["doExp3", function() {
			return new doExp3()
		}],
		["seeExp1", function() {
			return new seeExp1()
		}],
		["seeExp2", function() {
			return new seeExp2()
		}],
	],
	addRes: { //本实验需要引用的额外资源 一般不需要 
		learn_json_bg: "res/extra/wtdcf/wtdcf_learn_bg.json",
		wtdcf_hand: "res/extra/wtdcf/hand.json",
		wtdcf_bg1: "res/extra/wtdcf/wtdcf_bg1.json",
		wtdcf_bg2: "res/extra/wtdcf/wtdcf_bg2.json",
		wtdcf_bg3: "res/extra/wtdcf/wtdcf_bg3.json",
		wtdcf_bg4: "res/extra/wtdcf/wtdcf_bg4.json",
		wtdcf_drop: "res/extra/wtdcf/drop_json.json",
	},
	addItems: [
		"shuigang",
		"boat",
	],
	playMP4: true,
}