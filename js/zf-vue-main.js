Vue.component("footer-copy", {
  template:
    "    <footer>\n" +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12 hidden-xs">\n' +
    '                <span class="footerNav">\n' +
    '                    <a href="indexMin.html">回到首页</a>/\n' +
    '                    <a href="origin.html">品牌解读</a>/\n' +
    '                    <a href="food.html">产品展示</a>/\n' +
    '                    <a href="image.html">形象展示</a>/\n' +
    '                    <a href="cooperation.html">合作优势</a>/\n' +
    '                    <a href="news.html">新闻动态</a>/\n' +
    '                    <a href="contactUs.html">加入我们</a>\n' +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    '        <div class="row">\n' +
    '            <div class="col-md-4">\n' +
    '                <div class="footerlogo"></div>\n' +
    '                <div class="footerlogoCenter"></div>\n' +
    "                <p><b></b> 品牌热线：400-9977-258</p>\n" +
    "            </div>\n" +
    '            <div class="col-md-4 text-center">\n' +
    '                <div class="QRcode"></div>\n' +
    "                <h5>生财密旨 码上享受</h5>\n" +
    "            </div>\n" +
    '            <div class="col-md-4">\n' +
    "                <h5>加入我们</h5>\n" +
    '                <div class="line"></div>\n' +
    '                <form id="use_contact">\n' +
    '                    <div class="form-group"><input type="text" id="staticName1" placeholder="姓名:"\n' +
    '                            class="form-control"></div>\n' +
    '                    <div class="form-group phone_text"><input type="text" id="staticPhone1" placeholder="电话:"\n' +
    '                            class="form-control"></div>\n' +
    '                    <button type="submit" onclick="submitMsg1()" class="btn  my_btn btn-danger">提交</button>\n' +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    '          <div class="row">\n' +
    "            <b>安徽尚京品牌管理股份有限公司版权所有 皖ICP备18022821号-2</b>\n" +
    "          </div>\n" +
    "    </div>\n" +
    "</footer>"
});
new Vue({
  el: "#footer-zf"
});
