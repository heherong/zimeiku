//公共js
/**
 * 验证密码 //必须为字母加数字且长度不小于8位
 * @param {Object} password
 */
function CheckPassWord(password) {//必须为字母加数字且长度不小于8位
   var str = password;
    if (str == null || str.length <8) {
        return false;
    }
    var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
    if (!reg1.test(str)) {
        return false;
    }
    var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}
//内容字条
let contentTest = `<div class="para-title level-2" label-module="para-title">
							<h2 class="title-text"><span class="title-prefix">双十一购物狂欢节</span>交易数据</h2>
							<span class="edit-icon j-edit-link" data-edit-dl="2" href="javascript:;"><em class="cmn-icon wiki-lemma-icons wiki-lemma-icons_edit-lemma"></em>编辑</span>
						</div>
						<div class="para" label-module="para">2009年双十一销售额0.5亿元，共有27个品牌参与。</br><sup class="sup--normal" data-sup="6">
[6]</br>
							<span class="sup-anchor" name="ref_[6]_9691939">&nbsp;</span>
						</div>
						<div class="para" label-module="para">2010年双十一销售额9.36亿元，共有711家店铺参与。</br><sup class="sup--normal" data-sup="6">
[6]</br>
							<span class="sup-anchor" name="ref_[6]_9691939">&nbsp;</span>
							2010年淘宝商城“双十一”全场五折大促销曾创下单日10亿元的销售纪录。2010年淘宝双十一狂欢节光棍节当天共有2100万用户参与了疯狂抢购。零点13分，第一个“100万元店”产生；零点39分，博洋家纺旗舰店成为第一个“500万元店”。一天的集中抢购结束后，淘宝商城总计诞生了181家百万级店铺、11家千万级店铺，其中杰克琼斯、博洋
							<span target=_blank href="/item/%E5%AE%B6%E7%BA%BA">家纺</span>、尚客茶品、名鞋库、PBA等销量尤为突出。</div>
						<div class="para" label-module="para">2011年天猫双十一销售额33.6亿元，淘宝和天猫共52亿，2200家店铺参与。</br><sup class="sup--normal" data-sup="6">
[6]</br>
							<span class="sup-anchor" name="ref_[6]_9691939">&nbsp;</span>
							0点上线，8分钟突破1亿，21分钟突破2个亿，一个小时将近5个亿，10个小时10亿，13个小时15亿，最后单单淘宝商城33.6亿，全网52亿，相当于每一个中国人当天花费了4块钱。 消费者最疯狂省份：第一名浙江，第二名江苏，第三名广东。浙江一个省4.15亿，按城市来讲上海是最疯狂的，超过2个亿，北京和杭州分别排第二和第三。“双十一”购物狂欢节中，支付宝交易笔数高达1.058亿笔，通过无线设备支付订单笔数共有近900万笔，为2011年的5倍，在整体支付中的占比则提高到8%以上。</div>
						<div class="para" label-module="para">2012年双十一，天猫和淘宝总销售额达到191亿元，其中天猫132亿元，淘宝59亿元。</br><sup class="sup--normal" data-sup="6">
[6]</br>
							<span class="sup-anchor" name="ref_[6]_9691939">&nbsp;</span>
							2012年11月11日无线支付的峰值出现在凌晨，5分钟内成交10万6千笔，而2011年无线支付的峰值为5分钟内1万笔。截至2012年11月11日中午12:00前，支付宝无线支付的笔数已经超过400万笔，为2011年11·11当天全部无线支付笔数的2倍。</div>
						<div class="para" label-module="para">2013年双十一销售额350亿元，超过2012年191亿元的销售总额用了13个小时。</br><sup class="sup--normal" data-sup="6">
[6]</br>
							<span class="sup-anchor" name="ref_[6]_9691939">&nbsp;</span>
							2013年11月11日当天，
							<span target=_blank href="/item/%E6%94%AF%E4%BB%98%E5%AE%9D/496859" data-lemmaid="496859">支付宝</span>交易额过百万的手机淘宝卖家数达到76家。排名榜首的jackjones官方旗舰店，当日交易金额达630万元，ochirly官方旗舰店和GXG官方旗舰店分列二三位。而女装、男装、女鞋、内衣家居服和美容化妆品成为了手机淘宝成交最为活跃的类目。从成交的区域分布来看，上海、北京和杭州分列前三位，形成第一集团。成都、宁波、广州、武汉和重庆依次位列四到八名。</div>
						<div class="para" label-module="para">2014年双十一销售额571亿元，作为阿里上市之后的第一个双十一，13个小时就超过2013年350亿元的销售总额。</br><sup class="sup--normal" data-sup="6">
[6]</br>
							<span class="sup-anchor" name="ref_[6]_9691939">&nbsp;</span>
							2014年11月12日凌晨，阿里巴巴公布了“双十一”全天的交易数据：支付宝全天成交金额为571亿元，移动占比42.6%。（主词条：
							<span target=_blank href="/item/2014%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E7%8B%82%E6%AC%A2%E8%8A%82">2014双十一购物狂欢节</span>）</div>
						<div class="para" label-module="para">2015天猫“双十一”全球狂欢节，淘宝天猫平台的在线交易额突破10亿耗时72秒；12分28秒时交易额突破100亿</br><sup class="sup--normal" data-sup="7">
[7]</br>
							<span class="sup-anchor" name="ref_[7]_9691939">&nbsp;</span>
							，全天交易额超912亿元，其中移动端占比68%；累计物流订单4.68亿，累计电子面单生成量1.21亿；全球已成交国家/地区232个。京东公布的数据显示，自11月1日到11日，总下单量过亿，与2014年同期相比增长130%，交易额同比增长超过140%，移动端下单量占比达74%。</br><sup class="sup--normal" data-sup="1">
[1]</br>
							<span class="sup-anchor" name="ref_[1]_9691939">&nbsp;</span>
							2015年11月9日至11月19日，中国联通在联通网上营业厅、手机营业厅、天猫旗舰店及京东商城等多个平台同时开展“11.11沃4G狂欢节”活动。（主词条：
							<span target=_blank href="/item/2015%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E7%8B%82%E6%AC%A2%E8%8A%82">2015双十一购物狂欢节</span>）</div>
						<div class="para" label-module="para">2016年双十一购物狂欢节上，开场52秒钟，淘宝系交易额超过10亿元；6分58秒成交额超过100亿元，6时54分53秒，超571亿，达2014年双十一全天水平；在中午12时整，达807亿；在15时19分13秒，超912亿，破2015年双十一全天交易额纪录。</br><sup class="sup--normal" data-sup="6">
[6]</br>
							<span class="sup-anchor" name="ref_[6]_9691939">&nbsp;</span>
							零点9分39秒，支付宝的支付峰值达到12万笔/秒，前10分钟里，支付宝的移动支付笔数占比达92%；在支付方式的选择上，花呗和余额宝笔数占比分别为29%和18%。</br><sup class="sup--normal" data-sup="7">
[7]</br>
							<span class="sup-anchor" name="ref_[7]_9691939">&nbsp;</span>
							2016“双十一”购物狂欢节天猫交易额达1207亿。</br><sup class="sup--normal" data-sup="2-3">
[2-3]</br>
							<span class="sup-anchor" name="ref_[2-3]_9691939">&nbsp;</span>
							15个小时天猫销售额达到2015年912亿元的销售总额，线上占比为82%。（主词条：
							<span target=_blank href="/item/2016%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E7%8B%82%E6%AC%A2%E8%8A%82">2016双十一购物狂欢节</span>）</div>
						<div class="para" label-module="para">2017年双十一成交额重要节点数据：0:11，天猫双十一成交额破亿元；0分28秒，成交额超过10亿元；3分01秒，成交额超过100亿元，3分13秒，无线成交额超100亿元；6分05秒，成交额超200亿元；11分14秒，成交额破300亿元；40分钟左右，成交额破500亿元；1小时0分49秒，成交额超过571亿元，超过2014年双十一全天成交额；7点22分54秒成交额达912亿元，超过2015年双十一全天；9点00分04秒，成交额超1000亿元，10点40分48秒，无线成交额超1000亿元。10点54分26秒，成交额超过“双十一”亿元，无线占比91%；12点整，成交额1161亿元；13点09分49秒，成交额超1207亿元，已超2016年双十一全天成交额。</br><sup class="sup--normal" data-sup="6-8">
[6-8]</br>
							<span class="sup-anchor" name="ref_[6-8]_9691939">&nbsp;</span>
							16点整，成交额超1307亿元；17点整，成交额超1346亿元；21点12分，成交额超1500亿元。截至24点，第九届天猫双十一全球狂欢节最终成交额1682亿元，无线成交额占比90%。全球消费者通过支付宝完成的支付总笔数达14.8亿笔，比2016年增长41%。全球225个国家和地区加入2017天猫双十一全球狂欢节。</br><sup class="sup--normal" data-sup="9">
[9]</br>
							<span class="sup-anchor" name="ref_[9]_9691939">&nbsp;</span>
						</div>
						<div class="para" label-module="para">其他相关数据：5分22秒，新的支付峰值诞生：25.6万笔/秒，比2016年增长超1.1倍，数据库处理峰值同时诞生，达4200万次/秒；7分23秒，支付宝的支付笔数突破1亿笔，这相当于5年前（2012年）双十一全天的支付总笔数；12分18秒，2017年天猫双十一首单在上海嘉定签收；33分钟，天猫双十一的进口第一单在宁波签收；69分钟，天猫双十一农村地区第一单在贵州签收；9点36分，菜鸟物流订单破4.67亿，超过2015年双十一全天。</br><sup class="sup--normal" data-sup="8">
[8]</br>
							<span class="sup-anchor" name="ref_[8]_9691939">&nbsp;</span>
							18点49分，菜鸟物流订单量突破6.57亿，超越2016年双十一全天。</br><sup class="sup--normal" data-sup="9">
[9]</br>
							<span class="sup-anchor" name="ref_[9]_9691939">&nbsp;</span>
							（主词条：
							<span target=_blank href="/item/2017%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E7%8B%82%E6%AC%A2%E8%8A%82">2017双十一购物狂欢节</span>）</div>
						<div class="para" label-module="para">2018年双十一全球狂欢节，02分05秒，100亿；04分01秒，200亿；09分05秒，300亿；15分00秒，400亿；26分03秒，500亿；28分41秒，520亿，“我爱你”；35分17秒，2018天猫双11总成交额超571亿元，超过2014年天猫双11成交总额。40分31秒，600亿；1小时01分03秒，700亿；1小时04分23秒，800亿；1小时14分33秒，900亿；1小时16分37秒，2018天猫双11成交额超912亿元，已超过2015年天猫双11全天成交额。1小时47分26秒，1000亿；8小时8分52秒，1207亿；15时49分39秒，2018天猫双11成交额超1682亿元，已超过2017年天猫双11全天成交额；22时28分37秒，2018天猫双11成交额超2000亿元</br><sup class="sup--normal" data-sup="10">
[10]</br>
							<span class="sup-anchor" name="ref_[10]_9691939">&nbsp;</span>
							；2018天猫双11全天交易额2135亿元，再创历史新高。</br><sup class="sup--normal" data-sup="11">
[11]</br>
							<span class="sup-anchor" name="ref_[11]_9691939">&nbsp;</span>
							23时18分09秒，2018天猫双11当日物流订单量超过10亿。</br><sup class="sup--normal" data-sup="12">
[12]</br>`;
export { //很关键
 	CheckPassWord,contentTest
}