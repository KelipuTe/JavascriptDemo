let biaoQianLieBiao = [];
let biaoQianYeLieBiao = [];

let eleTuPianZhanShi = {};

window.onload = function () {
    // 图片展示
    eleTuPianZhanShi = document.getElementById('tu-pian-zhan-shi');
    eleTuPianZhanShi.onload = jiSuanPianYiLiang;
    eleTuPianZhanShi.src = 'ZiYuan/TuPian/lie_ke_xin_dun.jpg';
    // 初始化标签页切换
    biaoQianLieBiao = document.getElementById('biao-qian-lie-biao').children;
    biaoQianYeLieBiao = document.getElementById('biao-qian-yei-lie-biao').children;
    for (let i = 0; i < biaoQianLieBiao.length; i++) {
        biaoQianLieBiao[i].id = 'biao-qian-' + i;
        biaoQianLieBiao[i].onclick = qieHuanBiaoQianYe;
    }
}

// 图片加载的时候计算偏移量，让图片居中
function jiSuanPianYiLiang() {
    // 获取图片原始大小
    let tuPianKuanDuMax = 900;
    let tuPianGaoDuMax = 800;
    let imgWidth = this.naturalWidth;
    let imgHeight = this.naturalHeight;
    let imgMarginLeft = 0;
    let imgMarginTop = 0;
    console.log(imgWidth, imgHeight);
    if (imgWidth <= tuPianKuanDuMax && imgHeight <= tuPianGaoDuMax) {
        // 宽高都小于限制，直接计算偏移量
        imgMarginLeft = Math.round((tuPianKuanDuMax - imgWidth) / 2 * 100) / 100;
        imgMarginTop = Math.round((tuPianGaoDuMax - imgHeight) / 2 * 100) / 100;
    } else if (imgWidth <= tuPianKuanDuMax && imgHeight > tuPianGaoDuMax) {
        // 只有宽度超过限制，单独计算高度偏移量
        imgWidth = Math.round(imgWidth * (tuPianGaoDuMax / imgHeight));
        imgMarginLeft = Math.round((tuPianKuanDuMax - imgWidth) / 2 * 100) / 100;
    } else if (imgWidth > tuPianKuanDuMax && imgHeight <= tuPianGaoDuMax) {
        // 只有高度超过限制，单独计算宽度偏移量
        imgHeight = Math.round(imgHeight * (tuPianKuanDuMax / imgWidth));
        imgMarginTop = Math.round((tuPianGaoDuMax - imgHeight) / 2 * 100) / 100;
    } else if (imgWidth > tuPianKuanDuMax && imgHeight > tuPianGaoDuMax) {
        // 只有宽高都超过限制，判断哪个超的更多，需要同比压缩
        if ((imgWidth / tuPianKuanDuMax) >= (imgHeight / tuPianGaoDuMax)) {
            imgHeight = Math.round(imgHeight * (tuPianKuanDuMax / imgWidth));
            imgMarginTop = Math.round((tuPianGaoDuMax - imgHeight) / 2 * 100) / 100;
            console.log(tuPianGaoDuMax, imgHeight);
            console.log(tuPianGaoDuMax - imgHeight);
        } else {
            imgWidth = Math.round(imgWidth * (tuPianGaoDuMax / imgHeight));
            imgMarginLeft = Math.round((tuPianKuanDuMax - imgWidth) / 2 * 100) / 100;
            console.log(2);
        }
    }
    this.setAttribute('style', 'margin-left: ' + imgMarginLeft + 'px; margin-top: ' + imgMarginTop + 'px');
}

// 切换标签页
function qieHuanBiaoQianYe() {
    for (let j = 0; j < biaoQianLieBiao.length; j++) {
        biaoQianLieBiao[j].className = 'biao-qian-an-niu';
        biaoQianYeLieBiao[j].style.display = 'none';
    }
    let idIndex = this.id.replace('biao-qian-', '');
    biaoQianLieBiao[idIndex].className = 'biao-qian-xuan-zhong';
    biaoQianYeLieBiao[idIndex].style.display = 'block';
}