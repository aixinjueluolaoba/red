
auto.waitFor();
function tiaozhuan(roomid) {

    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "bilibili://live/" + roomid,
        //packageName: "com.tencent.mobileqq", 
    });

}
function httpp(url) {
    var res = http.get(url)
    
    log(res.statusCode)
    if (res.statusCode >= 200) {
        toast("请求成功");
        return res.body.json()[0]
    } else  toast("页面没找到哦...");
    }
        




function canyu(pid) {
    toast('0.3')
    var r= httpp('http://106.55.45.245:3000/todos/' + pid);
    if (r) {
        var roomid = r.roomid
        var aa = r.aa
    } else toast('无数据');
    if (aa && aa == 2) {
        tiaozhuan(roomid);
        if(id("iv_popular_rp_lottery").findOne(8000)) {
            var weight = id("iv_popular_rp_lottery").findOne().bounds();
            click(weight.centerX(),weight.centerY())
            if (textContains('发的红包').findOne(10000)) {
                if (textEndsWith('参与').findOne(5000)) {

                    textEndsWith('参与').findOne(5000).click();

                    if (textEndsWith('已参与').findOne(5000)) {
                        toast('参与成功')
                        httpp("http://106.55.45.245:3000/patch/" + pid);//参与成功
                    } else { toast('参与失败'); httpp('http://106.55.45.245:3000/patch1/' + pid); }
                } else { toast('没有找到该控件'); httpp('http://106.55.45.245:3000/patch1/' + pid); }
            } else { toast('没有找到该控件'); httpp('http://106.55.45.245:3000/patch1/' + pid); }
        } else { toast('没有找到该控件'); httpp('http://106.55.45.245:3000/patch1/' + pid); }

    }
    //setTimeout(() => { canyu() }, 1000)

    
}


// events.on("exit", function(){
//     toast(engines.myEngine().cwd())
//     engines.execScript("hello world", "toast('hello world')"
// });
// events.on("exit", function(){
//     toast('失败，重启中')
//     sleep(5000)
//     engines.execScriptFile("/storage/emulated/0/脚本/wwq.js");
// });
module.exports = canyu;
