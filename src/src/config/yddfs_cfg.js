var ResList = [
    "yddfs",
]

for (var i = 0; i < ResList.length; i++) {
    getRes(lhJs, ResList[i])
}

var mainInfo = {
    noShow:true,
    noSee:true,
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
        ["doExp1", function() {
            return new doExp1()
        }],
    ],
    addRes: {
        yddfs_learn_json:"res/extra/yddfs/yddfs_learn.json",
        yddfs_doExp1_json:"res/extra/yddfs/yddfs_doExp1.json",
        yddfs_tableNode_json:"res/extra/yddfs/yddfs_tableNode.json",
    }
}