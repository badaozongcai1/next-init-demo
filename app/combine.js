const { GifFrame, GifUtil } = require("gifwrap");

// 图片的宽度和高度，这里假设三张PNG图片大小相同
const width = 200,
  height = 100;
const frames = [];

// 为每张图片创建一个GIF帧，并设置延迟时间
for (let i = 1; i <= 3; i++) {
  let frame = new GifFrame(width, height, { delayCentisecs: 10 });
  // 这里需要将PNG图片转换为GifFrame可以处理的格式
  // 例如，可以使用Jimp库来读取PNG图片并转换为GifFrame的bitmap
  frames.push(frame);
}

// 将帧写入GIF文件
GifUtil.write("output.gif", frames, { loops: 0 }).then((gif) => {
  console.log("GIF created successfully");
});
