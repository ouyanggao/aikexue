//@author mu @14/5/10
var learnLayer = myLayer.extend({
    sprite: null,
    changeDelete: true, //是否退出删除
    load: function() {
        loadPlist("learn_nums")
    },
    ctor:function(){
      this._super()
      this.learnCtor()
      var self = this
      self.initPagegsr({
          imgs:[
            [res.xue1_1]
          ],
          pavedata:[
              {
               offsetx: 40,
               offsety:20,
               jdtpos:cc.p(150,85)
             },
          ],
          btnpos:[
              cc.p(380,593),
          ],
          titlepng:res.studytip,
          titlepos:cc.p(0,10)
      })
     
      return true
    }
})

