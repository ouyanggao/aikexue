var seeExp1 = myLayer.extend({
    sprite: null,
    needSet:false,
    changeDelete: true, //是否退出删除
    layerName: "seeExp1", //必要！ 用于判定各种按钮的返回和进入
    preLayer: "seeLayer", //必要！ 用来判定返回的上一个页面
    ctor: function() { //创建时调用 未删除不会重复调用
        this._super();
        this.expCtor({btnOff:cc.p(150,0)})
        this.initPeople()
        this.initUI()
        return true
    },

    initUI:function(){
        var self = this
        self.nodebs.show(function(){
            self.nodebs.say({key:"see_sound1"})
        })
        var dataControl = self.dataControl
        var uiList = [
            "btn_answer", "btn_upload", "judge1", "judge2",
            "btn_phe"
        ]
        var bg = loadNode(res.gshzz_see1_json, uiList, "bg")
        bg.setPosition(getMiddle(0, 20))
        safeAdd(self.inside_node, bg)
        var judge1 = bg.judge1
        var judge2 = bg.judge2
        var wzdrj_Result = [
            [0, 1, 2],
            [3, 4, 5 , 6, 7 ,8],
        ]
        var judgeAnswer = function() {
            var judge = this
            if (judge.list) {
                var list = judge.list
                var temp = []
                for (var i = 0; i < list.length; i++) {
                    temp.push(list[i].judgeIndex)
                }
                var contain = function(src) {
                    var answer = judge.answer
                    for (var i = 0; i < answer.length; i++) {
                        if (answer[i] == src) {
                            return true
                        }
                    }
                    return false
                }
                temp = listOrder(temp)
                if (temp.length > 0) {
                    for (var i = 0; i < temp.length; i++) {
                        if (!contain(temp[i])) {
                            return false
                        }
                    }
                    return true
                } else {
                    return null
                }
            }
            return null
        }
        var judgeItem = function(data) {
            var judge = this
            var pos = data.pos
            var item = data.item
            var result = judgeInside({
                item: judge,
                pos: pos,
            })
            if (!result) {
                return false
            }
            var index = data.index
            if (!judge.list) {
                judge.list = []
            }
            if (result) {
                item.father = judge
                judge.list.push(item)
                judge.sort()
                return true
            }
        }
        var clear = function() {
            var judge = this
            if (judge.list) {
                var list = judge.list
                for (var i = 0; i < list.length; i++) {
                    list[i].removeFromParent(true)
                    list[i] = null
                }
                judge.list = null
            }
        }
        var del = function(item) {
            var judge = this
            if (judge.list) {
                var list = judge.list
                for (var i = 0; i < list.length; i++) {
                    if (list[i].index == item.index) {
                        list.splice(i, 1)
                        judge.sort()
                        return
                    }
                }
            }
        }
        var sort = function() {
            var judge = this
            var info = [{
                judge: 4,
                devidex: 120,
            }, {
                judge: 5,
                devidex: 90,
            }, {
                judge: 6,
                devidex: 70,
            }, {
                judge: 7,
                devidex: 60,
            }, {
                judge: 8,
                devidex: 55,
            }]
            if (judge.list) {
                var count = 0
                var list = judge.list
                var judgeInfo = null
                for (var i = 0; i < info.length; i++) {
                    if (list.length <= info[i].judge) {
                        judgeInfo = info[i]
                        break
                    }
                }
                if (judgeInfo) {
                    var devidex = judgeInfo.devidex
                    var nums = judgeInfo.judge
                    for (var i = 0; i < list.length; i++) {
                        if (list[i]) {
                            var item = list[i]
                            list[i].setPosition(cc.p(140 + count % nums * devidex, 130))
                            safeAdd(judge, item)
                            count++
                        }
                    }
                }
            } else {
                return
            }
        }
        judge1.judgeItem = judgeItem
        judge2.judgeItem = judgeItem
        judge1.sort = sort
        judge2.sort = sort
        judge1.del = del
        judge2.del = del
        judge1.answer = wzdrj_Result[0]
        judge2.answer = wzdrj_Result[1]
        judge1.clear = clear
        judge2.clear = clear
        judge1.judgeAnswer = judgeAnswer
        judge2.judgeAnswer = judgeAnswer
        var judgeAll = function(data) {
            var pos = data.pos
            var item = data.item
            var index = data.index
            var judgeList = [
                judge1,
                judge2
            ]
            var temp = false
            for (var i = 0; i < judgeList.length; i++) {
                var result = judgeList[i].judgeItem({
                    pos: pos,
                    item: item,
                    index: item.judgeIndex,
                })
                if (result) {
                    temp = true
                    createTouchEvent({
                        item: item,
                        autoMove: true,
                        begin: function(data) {
                            var item = data.item
                            var pos = data.pos
                            if (item.father) {
                                item.father.del(item)
                            }
                            item.setPosition(bg.convertToNodeSpace(pos))
                            safeAdd(bg, item)
                            return true
                        },
                        end: function(data) {
                            var item = data.item
                            var pos = data.pos
                            judgeAll({
                                item: item,
                                pos: pos,
                                index: item.index,
                            })
                        }
                    })
                    break
                }
            }
            if (!temp) {
                dataControl.showList.judgeIndex(index, false)
                item.removeFromParent(true)
            }
        }
        var showList = createList({
            scale: 0.9,
            list: self.getRand(),
            pos: getMiddle(340, -20),
            num: 3,
            size: cc.size(170, 570),
            mix: 20,
            arrow: "white",
            color: "yellow",
            pageScale:0.7,
            imgScale: 0.8,
            modify: cc.p(0, -30),
            arrOff: cc.p(20, -20),
            ifPage: true,
            getFun: function(data) {
                var index = data.index
                var pos = data.pos
                var tex = data.tex
                var sp = new cc.Sprite(tex)
                sp.setPosition(bg.convertToNodeSpace(pos))
                sp.setScale(1)
                safeAdd(bg, sp)
                sp.index = index
                sp.judgeIndex = dataControl.curRand[index]
                return sp
            },
            outFun: function(data) {
                var item = data.item
                var pos = data.pos
                var index = data.index
                judgeAll({
                    item: item,
                    pos: pos,
                    index: index,
                })
            }
        })
        bg.addChild(showList)
        dataControl.showList = showList
        
        
        bg.btn_answer.addClickEventListener(function() {
            self.answerImg.show()
        })


        bg.btn_phe.addClickEventListener(function(){
            self.nodebs.say({
                key: "result",
            })
        })
        bg.btn_upload.addClickEventListener(function(){
            var one = judge1.judgeAnswer()
            var two = judge2.judgeAnswer()
            var result = ((one && two) || (one && two == null) || (one == null && two))
            self.nodebs.say({
                key: result ? "right" : "fault",
                force: true,
            })
             AddDialog("Judge", {
                judge: result,
                fun:function(){
                    if(judgeMusic()){
                        stopMusic()
                    }
                }
             })
        })
    },

    getRand: function() {
        loadPlist("seeFruit_plist")
        var self = this
        var dataControl = self.dataControl
        var list = []
        var rand = getRand(9)
        dataControl.curRand = rand
        for (var i = 0; i < 9; i++) {
            list.push(sprintf("#see_fruit%02d.png", rand[i]))
        }
        return list
    },

    dataControl:{},

    initPeople: function() {
        this.nodebs = addPeople({
            id: "boshi",
            pos: cc.p(1000, 130)
        })
        this.addChild(this.nodebs)
        
        addContent({
            people: this.nodebs,
            key: "result",
            img: res.see_pheImg,
            sound: res.see_pheSound,
            id: "result",
        })
        this.answerImg = createShowImg({
            img:res.see_answerImg,
        })
        safeAdd(this, this.answerImg)
        addContent({
            people: this.nodebs,
            key: "see_sound1",
            sound: res.see_sound1,
        })
        addContent({
            people: this.nodebs,
            key: "right",
            sound: res.sound_right_bs_1,
        })
        addContent({
            people: this.nodebs,
            key: "fault",
            sound: res.sound_fault_bs_1,
        })
        this.nodebs.setVisible(false)
    }
})