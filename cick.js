// const paddle = require('paddle');

// if(!requestScreenCapture()){
    requestScreenCapture(true);
// }
function shop() {
    press(100, 550, 1)
    sleep(300)
    // 进入后
    //请求横屏截图
    click()
}
function click(){
    press(500, 550, 1)
    sleep(1000)
// 截取整个屏幕
var img = captureScreen();

// 检查captureScreen是否成功
if (!img) {
    throw new Error("截屏失败，请确保已授予必要权限。");
}

// 尝试截取特定区域
try {
    // 假设这段代码会导致错误
    var cropRect = {x: 1700, y: 800, width: 120, height: 100};
    var croppedImg = images.clip(img, cropRect.x, cropRect.y, cropRect.width, cropRect.height);

    // 保存裁剪的图片
    images.save(croppedImg, "/sdcard/cropped_screenshot1.png");

    // 确保图片保存成功
    // toast("区域截取成功！");
    try {
        // 加载裁剪后的图片
        var croppedImg = images.read("/sdcard/cropped_screenshot1.png");
    
        // 使用 Paddle.js OCR 识别图片中的文字
        // 参数解释：
        // croppedImg 是图片对象
        // cpuThreadNum 表示使用的 CPU 核心数量，默认值为 4
        // useSlim 表示是否使用快速模型，默认为 true
        var results = paddle.ocr(croppedImg, 8, true);
        let text = ''
        // 遍历识别结果并输出
        console.log("识别出的文字：", results);
        for (var i = 0; i < results.length; i++) {
             text = results[i].text;
            console.log("识别出的文字：", text);
        }
        if(+text === 7590){
            buy()
        }else{
            close()
        }
        deleteimage()
    } catch (error) {
        console.error("文字识别时出错：", error);
        // toast("文字识别失败，请检查代码或参数。");
        deleteimage()
    }
    // 识别照片
} catch (error) {
    console.error("截取屏幕区域时出错：", error);
    // toast("截取屏幕区域失败，请检查代码或版本。");
}
}
function buy () {
    press(1800, 850, 1)
    // toast('购买');
    sleep(300)
    twoclose()
}
function deleteimage () {
    var filePath = "/sdcard/cropped_screenshot1.png";

    // 检查文件是否存在
    if(files.exists(filePath)){
        // 删除文件
        files.remove(filePath);
        // toast("文件删除成功！");
    } else {
        // toast("文件不存在，无需删除。");
    }
}
function close(){
    press(2000, 150, 1)
    // toast('关闭');
    sleep(200)
    click()
}
function twoclose(){
    press(2000, 150, 1)
    sleep(200)
    press(2000, 150, 1)
    sleep(200)
    click()
}

shop()
// close()
