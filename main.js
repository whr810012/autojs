"ui";
var storage = storages.create("ABC");
const zuobiao = storage.get("zuobiao")
if(zuobiao){
console.log('-=-=-=-',zuobiao);
ui.layout(
    <vertical padding="16">
        {/* 居中对齐 */}
        <text gravity="center" textSize="16sp" textColor="black" text="检测到已有坐标点，是否修改？"/>
        <text gravity="center" textSize="16sp" textColor="black" id="myText"/>
        <input  id="zuobiao" text=""/>
        <button id="nook" text="不修改"/>
        <button id="ok" text="确定修改"/>
        {/* <button id="delete" text="删除坐标点"/> */}
    </vertical> 
);
ui.myText.setText('当前坐标为：'+zuobiao);
ui.delete.click(function(){
    var storage = storages.create("ABC");
    storage.remove('zuobiao')
    toast("坐标点已删除")
})
ui.ok.click(function(){
    var storage = storages.create("ABC");
    storage.remove('zuobiao')
    const zuobiao = ui.zuobiao.text()
    storage.put("zuobiao", zuobiao);
    toast("坐标点已保存",storage.get("zuobiao"))
    // 关闭ui模式
    ui.finish();
    startgame()
})
ui.nook.click(function(){
    ui.finish();
    startgame()
}); 
}else{
    ui.layout(
        <vertical padding="16">
            <text gravity="center" textSize="16sp" textColor="black" text="请输入识别坐标点"/>
            <input  id="zuobiao" text=""/>
            <button id="ok" text="确定"/>
        </vertical>
    );
    ui.ok.click(function(){
        const zuobiao = ui.zuobiao.text()
        var storage = storages.create("ABC");
        storage.put("zuobiao", zuobiao);
        toast("坐标点已保存",storage.get("zuobiao"))
        // 关闭ui模式
        ui.finish();
        startgame()
    }); 
}

function startgame () {
    const appName = "暗区突围"
    launchApp(appName)
    // const time2 = setInterval(() => {
    //     className("android.widget.LinearLayout").depth(1).findOne().click()
    // }, 0);
    // sleep(3000)
    // 识别x，点击，进入主页
    // 搞到所有的钱
    // 点击商城
    // 开始循环
    // const timer =  setInterval(() => {
    //     // 点击选中的商品
    //     // 识别价格
    //     const money = 1
    //     if(money<800){
    //         // 买了
    //     }else{
    //         //x后，再点进来循环 
    //     }
    // }, 0);
}