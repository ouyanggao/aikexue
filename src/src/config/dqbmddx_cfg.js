var ResList = [
    "dqbmddx",
]

for (var i = 0; i < ResList.length; i++) {
    getRes(lhJs, ResList[i])
}

var mainInfo = {
    noShow:true,
    seeList: [
        res.img_see1,
    ],
    doList: [
        res.img_do1,
    ],
    helpFile: res.sysm,
    titleFile: res.title,
    soundFile: res.title_sound,
    mainLoop: [
        res.loop_1,
        res.loop_2,
        res.loop_3,
    ],
    layerList: [
        ["seeExp1", function() {
            return new seeExp1()
        }],
        ["doExp1", function() {
            return new doExp1()
        }],
    ],
    addRes: {
        dqbmddx_seeExp1_json: "res/extra/dqbmddx/dqbmddx_seeExp1.json",
        dqbmddx_doExp1_json: "res/extra/dqbmddx/dqbmddx_doExp1.json",
    }
}