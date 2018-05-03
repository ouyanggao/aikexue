var learnLayer = myLayer.extend({
    sprite: null,
    changeDelete: true,
    load: function() {
        loadPlist("learn_nums")
    },
    ctor: function() {
        this._super();
        this.learnCtor()
        this.load()
        var self = this
        self.initPageBtns([{
            btn: [res.learn_btn1_normal, res.learn_btn1_select,res.learn_btn1_act],
            modify: cc.p(10, 0),
            pics: [res.study_1],
        }, {
            btn: [res.learn_btn2_normal, res.learn_btn2_select,res.learn_btn2_act],
            modify: cc.p(-20, 0),
            pics: [res.study_2],
        }, {
            btn: [res.learn_btn3_normal, res.learn_btn3_select,res.learn_btn3_act],
            modify: cc.p(-20, 0),
            pics: [res.study_3],
        }])
        return true
    },
})