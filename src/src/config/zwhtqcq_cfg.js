var ResList = [
    "zwhtqcq",
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
        zwhtqcq_seeExp1_json:"res/extra/zwhtqcq/zwhtqcq_seeExp1.json",
        zwhtqcq_tableNode_json:"res/extra/zwhtqcq/zwhtqcq_tableNode.json",
    }
}