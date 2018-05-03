var ResList = [
	"rzls",
]

for (var i = 0; i < ResList.length; i++) {
	getRes(gsrJs1, ResList[i])
}

var mainInfo = {
	seeList: [
		res.img_see1
	],
	doList: [
		res.img_do1,
		res.img_do2,
		res.img_do3
	],
	helpFile: res.sysm,
	titleFile: res.title,
	soundFile:res.sound_title,
	playMP4:true,
	noShow:true,
	mainLoop: [
		res.img_loop_1
	],
	layerList: [
	    ["seeExp1", function() {
			return new seeExp1()
		}],
		["doExp1", function() {
			return new doExp1()
		}],
		["doExp2", function() {
			return new doExp2()
		}],
		["doExp3", function() {
			return new doExp3()
		}]
	],
	addRes: {
		cartoonJson:"res/extra/rzls/json/cartoonJson.json",
	    learnJson:"res/extra/rzls/json/learnJson.json",
	    reCup:"res/extra/rzls/json/reCup.json"
	},
	addItems: [
	]
}