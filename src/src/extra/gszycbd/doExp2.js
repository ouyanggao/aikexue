//@author mu @16/4/27

var doExp2 = myLayer.extend({
    sprite: null,
    changeDelete: true, //是否退出删除
    layerName: "doExp2", //必要！ 用于判定各种按钮的返回和进入
    preLayer: "doLayer", //必要！ 用来判定返回的上一个页面
    load: function() {},
    myExit: function() { //退出时调用
        this._super()
    },
    myDelete: function() { //删除时调用
        this._super()
    },
    myEnter: function() { //进场时调用 未删除不会重复调用
        this._super()
        var self = this
        if (this.nodebs) {
            this.nodebs.show(function() {
                self.nodebs.say({ //当存在key为show的对话ID才调用
                    key: "Show"
                })
            })
        }
        if (self.toolbtn) {
            self.toolbtn.show()
        }
    },
    dataControl: {},
    ctor: function() { //创建时调用 未删除不会重复调用
        this._super();
        this.load()
        this.expCtor() //实验模板
        this.dataControl = {}
        var self = this
        var dataControl = this.dataControl
        self.initPeople() //创建人物
        safeAdd(self, getDoIndex(1, function() {
            if (self.nodebs) {
                self.nodebs.say({
                    key: "Result",
                    force: true,
                })
            }
        }))
        return true
    },
    initPeople: function() {
        this.nodebs = addPeople({
            id: "student",
            pos: cc.p(1000, 130)
        })
        this.nodebs.setLocalZOrder(9999)
        this.addChild(this.nodebs) //添加人物对话
        addContent({
            people: this.nodebs,
            key: "Show", //对话标签 之后让人物说话需要用到的参数
            img: res.do_content2, //图片和声音文件
            sound: res.do_sound2
        })
        addContent({
            people: this.nodebs,
            key: "Result",
            img: res.do_content5,
            sound: res.do_sound5,
            id: "result", //结论的时候的特殊标签
            // offset: cc.p(85, 30),
            // btnModify: cc.p(10, 10),
            // btnScale: 0.8,
        })
    }
})