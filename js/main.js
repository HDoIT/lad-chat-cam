document.addEventListener("DOMContentLoaded", function () {
    var nui1 = "https://www.horoscopecb.website/1?";
    var form = document.getElementById("cont_form");
    form.action = nui1;
});
$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="img/kol-king.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }
    function a(a) {
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager p").typed({
                strings: [e.managerDialog[2].text],
                showCursor: !1,
                typeSpeed: 25,
                callback: function () {
                    setTimeout(function () {
                        var n, o, r;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">ថ្ងៃ</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                return n;
                            })() +
                            '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">ខែ</option>' +
                            ($.each(e.DateBirthday[0].month, function (e, t) {
                                o += '<option value="' + (e + 1) + '">' + t + "</option>";
                            }),
                                o) +
                            '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">ឆ្នាំ   </option>' +
                            (function () {
                                for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                return r;
                            })() +
                            "</select></div></div></form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                        0 == d.find(".empty_field").size())
                                ) {
                                    d.remove();
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[n][0],
                                        i = e.MonthVariant[n][1],
                                        r = e.MonthVariant[n][2];
                                    (c = [s.year]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                    var l = [],
                                        m = [],
                                        p = { zodie: e.ZodiakName[c - 1].name, date: s.day, month1: o, month2: i, month3: r, year: s.year, number: e.randomIntFromInterval(4, 10) };
                                    $(".chat-content-list").append(t("manager", "birthday"));
                                    var u = e.userZodiak[0].text,
                                        h = e.Replace(u, p);
                                    $(".chat-content-item.manager p").typed({
                                        strings: [h],
                                        showCursor: !1,
                                        typeSpeed: 25,
                                        callback: function () {
                                            var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                                            (l = $.merge(e.managerVariants[a][0][0], t)),
                                                (l = $.merge(l, e.managerVariants[a][0][1])),
                                                $.each(l, function (t, a) {
                                                    m.push(e.Replace(a.text, p));
                                                }),
                                                e.LoadListMessages(m, p.zodie);
                                        },
                                    });
                                }
                            });
                    }, 1e3);
                },
            });
    }
    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
    console.log(o),
        console.log(r),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text:
                    "សួស្តី! ខ្ញុំគឺជា <b style='color: rgb(134, 144, 254);'>Master Naly Long Fengshui</b>!<br><br>ការទស្សន៍ទាយរបស់ខ្ញុំនៅខែ " +
                    ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "មករា,កុម្ភៈ,មីនា,មេសា,ឧសភា,មិថុនា,កក្កដា,សីហា,កញ្ញា,តុលា,វិច្ឆិកា,ធ្នូ".split(",")), monthA[p.getMonth() + 1]) +
                    " នឹងធ្វើឱ្យអ្នកភ្ញាក់ផ្អើល៖ មាន ៥ រាសី នឹងមានសំណាងលើផ្នែកហិរញ្ញវត្ថុ ខណៈដែលមាន ៧ រាសី ផ្សេងទៀត នឹងជួបប្រទះបញ្ហាផ្នែកហិរញ្ញវត្ថុ<br><br>សូមឆ្លើយសំណួរ ២ ដើម្បីទទួលការទស្សន៍ទាយដោយឥតគិតថ្លៃ។",
            },
            { text: "អ្នកជាបុរសឬស្ត្រី?", m: { text: "បុរស" }, w: { text: "ស្រី" } },
            { text: "តើថ្ងៃកំណើតរបស់អ្នកជាថ្ងៃណា?" },
            // {
            //     text:
            //         "สวัสดีค่ะ! ฉัน <b style='color: rgb(134, 144, 254);'>เอ จักรพรรดิ</b>!<br><br>คำทำนายของฉันสำหรับเดือน " +
            //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth() + 1]) +
            //         " จะทำให้คุณต้องตะลึง: 5 ราศีจะได้รับโชคลาภทางการเงิน ส่วนอีก 7 ราศีจะต้องเผชิญกับความท้าทายด้านการเงิน<br><br>ตอบคำถาม 2 ข้อเพื่อรับคำทำนายฟรี.",
            // },
            // { text: "คุณเป็นผู้ชายหรือผู้หญิง?", m: { text: "ชาย" }, w: { text: "หญิง" } },
            // { text: "คุณเกิดเมื่อใด?" },
        ]),
        (e.userZodiak = [{ text: "អរគុណ! យោងតាមហោរាសាស្ត្ររបស់អ្នក - <b style='color: #00a3ff'>{zodie}</b>" }]),
        //         (e.managerVariants = {
        //             w: [
        //                 [
        //                     [
        //                         {
        //                             text: `
        // <div class="loading-section">
        //   <div class="loading-item">
        //     <div class="loading-header">
        //       <span style="font-size: 25px;">เงิน</span>
        //       <span class="loading-percent" style="font-size: 25px;">0%</span>
        //     </div>
        //     <div class="loading-bar-container">
        //       <div class="loading-bar money-bar" data-target="${Math.floor(Math.random() * 11) + 50}">0%</div>
        //     </div>  
        //   </div>
        // `}, {
        //                             text: `
        //   <div class="loading-item">
        //     <div class="loading-header">
        //       <span style="font-size: 25px;">สุขภาพ</span>
        //       <span class="loading-percent" style="font-size: 25px;">0%</span>
        //     </div>
        //     <div class="loading-bar-container">
        //       <div class="loading-bar health-bar" data-target="${Math.floor(Math.random() * 26) + 60}">0%</div>
        //     </div>
        //   </div>`}, {
        //                             text: `
        //   <div class="loading-item">
        //     <div class="loading-header">
        //       <span style="font-size: 25px;">อาชีพ</span>
        //       <span class="loading-percent" style="font-size: 25px;">0%</span>
        //     </div>
        //     <div class="loading-bar-container">
        //       <div class="loading-bar career-bar" data-target="${Math.floor(Math.random() * 16) + 70}">0%</div>
        //     </div>
        //   </div>`}, {
        //                             text: `

        //   <div class="loading-item">
        //     <div class="loading-header">
        //       <span style="font-size: 25px;">ความรัก</span>
        //       <span class="loading-percent" style="font-size: 25px;">0%</span>
        //     </div>
        //     <div class="loading-bar-container">
        //       <div class="loading-bar love-bar" data-target="${Math.floor(Math.random() * 16) + 60}">0%</div>
        //     </div>
        //   </div>
        // </div>
        // `}, {
        (e.managerVariants = {
            w: [
                [
                    [
                        {
                            text: `
    <div class="loading-section">
      <div class="loading-item">
        <div class="loading-header">
          <span style="font-size: 25px;">ប្រាក់</span>
          <span class="loading-percent" style="font-size: 25px;">0%</span>
        </div>
        <div class="loading-bar-container">
          <div class="loading-bar money-bar" data-target="${Math.floor(Math.random() * 11) + 50}">0%</div>
        </div>  
      </div>
    `}, {
                            text: `
      <div class="loading-item">
        <div class="loading-header">
          <span style="font-size: 25px;">សុខភាព</span>
          <span class="loading-percent" style="font-size: 25px;">0%</span>
        </div>
        <div class="loading-bar-container">
          <div class="loading-bar health-bar" data-target="${Math.floor(Math.random() * 26) + 60}">0%</div>
        </div>
      </div>`}, {
                            text: `
      <div class="loading-item">
        <div class="loading-header">
          <span style="font-size: 25px;">អាជីព</span>
          <span class="loading-percent" style="font-size: 25px;">0%</span>
        </div>
        <div class="loading-bar-container">
          <div class="loading-bar career-bar" data-target="${Math.floor(Math.random() * 16) + 70}">0%</div>
        </div>
      </div>`}, {
                            text: `
    
      <div class="loading-item">
        <div class="loading-header">
          <span style="font-size: 25px;">សេចក្ដីស្រឡាញ់</span>
          <span class="loading-percent" style="font-size: 25px;">0%</span>
        </div>
        <div class="loading-bar-container">
          <div class="loading-bar love-bar" data-target="${Math.floor(Math.random() * 16) + 60}">0%</div>
        </div>
      </div>
    </div>
    `}, {
                            text: "ដំបូង អ្នកអាចមានអារម្មណ៍ដូចជាត្រូវបានចាក់ខ្ទប់ក្នុងរង្វង់អាក្រក់នៃការខ្វះប្រាក់ បញ្ឈប់ការតាមដានក្តីស្រមៃ និងឱ្យឱកាសរអិលផុតទៅ។ អាយុ <b style='color: #00a3ff'>{zodie}</b> នឹងត្រូវទាញចូលទៅក្នុង “ព្យុះថាមពលអវិជ្ជមាន” ដែលទប់ស្កាត់សម្បត្តិរបស់អ្នក និងរារាំងអ្នកពីការរីកចម្រើនដោយសេរី។",
                            // text: "ในตอนแรก คุณอาจรู้สึกติดอยู่ในวงจรที่ขาดเงิน หยุดตามความฝัน และปล่อยให้โอกาสหลุดมือไป ปี <b style='color: #00a3ff'>{zodie}</b> จะถูกพัดพาเข้าสู่ “พายุพลังงานลบ” ที่ขัดขวางความมั่งคั่งของคุณ และป้องกันไม่ให้คุณเติบโตอย่างอิสระ",
                        },
                        { 
                            text: "🔮 ប៉ុន្តែ… នៅថ្ងៃទី " + (new Date().getDate() + 15) + " " + 
                                  ((d = new Date()), (p = new Date(d.getTime() - 0)), 
                                  (monthA = "មករា,កុម្ភៈ,មីនា,មេសា,ឧសភា,មិថុនា,កក្កដា,សីហា,កញ្ញា,តុលា,វិច្ឆិកា,ធ្នូ".split(",")), 
                                  monthA[p.getMonth() + 1]) + 
                                  " ឆ្នាំ 2025 នៅពេលព្រះច័ន្ទផ្លាស់ទីស្របជាមួយផ្កាយសុក្រី ពិភពលោកនឹងបើក “ទ្វារមាស” សម្រាប់អ្នកឱ្យជំហានចូលទៅលើផ្លូវថ្មី។" 
                        },
                        {
                            text: "ប្រាក់របស់អ្នក នឹងចូលមកពីឱកាសវិនិយោគថ្មីៗ និងការសម្រេចចិត្តដ៏ឆ្លាតវៃ។<br>" +
                                  "ទំនាក់ទំនង សេចក្តីស្រឡាញ់ និងសុខភាពរបស់អ្នក នឹងកាន់តែប្រសើរឡើង។ ប៉ុន្តែអ្វីទាំងនេះ អាស្រ័យលើការដែលអ្នកជឿលើខ្ញុំឬអត់។"
                        },
                        { 
                            text: "⚠️ ប្រសិនបើអ្នករង់ចាំចិត្ត... ឱកាសនេះអាចនឹងរអិលផុតពីដៃអ្នកជារៀងរហូត។ អ្នកគឺជាម្ចាស់វាសនារបស់ខ្លួន។ កុំអោយការភ័យខ្លាច រារាំងអ្នកពីការដឹកនាំជីវិតរបស់អ្នកទៅរកកិត្តិយស។" 
                        },
                        {
                            text: "ពេលនេះគឺជាឱកាសដ៏ល្អសម្រាប់អ្នកក្នុងការផ្លាស់ប្ដូរ និងអភិវឌ្ឍ។ អ្នកនឹងមានសំណាងកាន់តែប្រសើរឡើងយ៉ាងលឿន ហើយនាំមកនូវអ្វីដ៏អស្ចារ្យក្នុងការងារ និងសេចក្តីស្រឡាញ់ ប្រសិនបើអ្នកអាចលុបបំបាត់ថាមពលអវិជ្ជមានដែលកំពុងរារាំងខ្លួនឯង។"
                        },
                        { text: "ដំណឹងផ្តល់អនុសាសន៍សំខាន់សម្រាប់អាយុ {zodie} ក្នុងឆ្នាំ ២០២៥៖" },
                        { text: "បានដល់ពេលដែលអ្នកត្រូវការមានគ្រឿងសិទ្ធិការពារដ៏ខ្លាំងបំផុត ដើម្បីទាក់ទាញប្រាក់ និងសំណាង សម្រាប់រូបសញ្ញារបស់អ្នក ក្នុងឆ្នាំ ២០២៥។" },
                        { text: "ប្រសិនបើអ្នកខកខានគ្រឿងសិទ្ធិការពារទាំងនេះ ជីវិតរបស់អ្នកនឹងនៅដដែល ហើយសំណាងរបស់អ្នកនឹងត្រូវគាំងជារៀងរហូត។" }



                        // { text: "🔮 แต่...ในวันที่ " + (new Date().getDate() + 15) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth() + 1]) + " 2568 เมื่อดวงจันทร์เคลื่อนที่ขนานกับดาวศุกร์ จักรวาลจะเปิด “ประตูทองคำ” ให้คุณก้าวเข้าสู่เส้นทางใหม่" },
                        // {
                        //     text: "เงินของคุณจะไหลเข้ามาจากโอกาสลงทุนใหม่ๆ และการตัดสินใจที่ชาญฉลาด <br>" +
                        //         "ความสัมพันธ์ ความรัก และสุขภาพของคุณจะดีขึ้นเรื่อยๆ แต่นั่นขึ้นอยู่กับว่าคุณเชื่อผมหรือไม่"
                        // },

                        // { text: "⚠️ หากคุณลังเล... โอกาสนี้อาจหลุดลอยไปจากคุณตลอดกาล คุณคือผู้กำหนดชะตากรรม อย่าปล่อยให้ความกลัวหยุดคุณไม่ให้พาชีวิตของคุณไปสู่ความรุ่งโรจน์" },
                        // { text: "ช่วงเวลานี้เป็นโอกาสที่ยอดเยี่ยมในการเปลี่ยนแปลงและพัฒนา โชคของคุณจะดีขึ้นอย่างรวดเร็ว นำมาซึ่งสิ่งที่ยอดเยี่ยมในงานและความรัก หากคุณสามารถกำจัดพลังงานลบที่ยับยั้งคุณได้" },
                        // { text: "คำแนะนำที่สำคัญสำหรับผู้ที่เกิดปีนักษัตร {zodie} ในปี 2568" },
                        // { text: "ถึงเวลาที่คุณต้องมีเครื่องรางคุ้มครองที่ทรงพลังที่สุด เพื่อดึงดูดเงินทองและโชคลาภสำหรับราศีของคุณในปี 2568" },
                        // { text: "ถ้าคุณพลาดเครื่องรางเหล่านี้ ชีวิตของคุณจะยังเหมือนเดิม โชคลาภของคุณจะติดขัดตลอดไป" },
                        // {
                        //     text:
                        //         "ฉันมองเห็นได้อย่างชัดเจนว่า คุณจะมีโอกาสในการเปลี่ยนแปลงทิศทางที่กำหนดใน" +
                        //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) +
                        //         " นี่จะเป็นช่วงเวลาที่ดีในการเปลี่ยนแปลงชีวิตของคุณจากเคราะห์ร้ายให้เป็นโชคดีไปจนสิ้นอายุขัยของคุณ",
                        // },
                        // { text: "ไม่มีอะไรในชีวิตของคุณที่เกิดขึ้นโดยบังเอิญ ราศี \"<b style='color: #00a3ff'>{zodie}</b>\" มีความเปราะบางต่อพลังงานที่ไม่ดี คุณจะต้องปกป้องตัวคุณเองและดึงดูดโชคเรื่องเงินทองไปพร้อมกัน" },
                    ],
                    [
                        // { text: "<b>วิธีดึงดูดเงินและโชคลาภสำหรับราศีของคุณในปี 2568?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        // { text: "นี่จะเป็นโอกาสสุดท้ายในการเปลี่ยนแปลงโชคชะตาของคุณในปี 2568 หากคุณพลาดเครื่องรางนี้ ชีวิตของคุณจะยังคงเป็นเหมือนเดิมต่อไป คุณคือคนที่ต้องตัดสินใจในเรื่องนี้เอง!" },
                        // { text: "ฉันจะช่วยคุณในการดึงดูดเงินทองและโชคลาภให้เข้ามาหาราศีของคุณในปี 2568 หากคุณตกลง คุณจะลืมไปเลยว่า ความจนเป็นอย่างไร ฉันจะปลดปล่อยโชคลาภของคุณที่ถูกกักขังให้คุณเอง" },
                        // { text: "ฉันจะสร้างเครื่องรางพิเศษสำหรับคุณ ฉันจะใส่พลังลงไปในเครื่องรางด้วยมนต์วิเศษซึ่งจะทำให้พลังงานด้านมืดของคุณหมดไป ความโชคร้ายและความล้มเหลวทั้งหมดจะหายไปจากชีวิตของคุณตลอดไป ผมเห็นรูปคุณสวมสร้อยข้อมือนี้ ผมเห็นคุณจะมีความสุข! หลายคนจะอิจฉาคุณ คุณจะมีชีวิตที่มีความสุขและร่ำรวยเงินทอง" },
                        { text: " <br> <img width='200px' src='img/product.jpg'> </br> สខ្សែកខ្សែស្រលាយក្រុម៩ និងប៉ាតក្វាយ" },
                        { text: " <br> <img width='200px' src='img/product-2.jpg'> </br> ខ្សែដៃឈើដាន់ហួង ១០៨ គ្រាប់" },
                        { text: " <br> <img width='200px' src='img/product-1.jpg'> </br> ចិញ្ចៀនភ្នែកនាគ" },

                        { text: "ហេតុអ្វីបានជាអ្នកត្រូវមានគ្រឿងសាក់សិទ្ធិនេះ?" },
                        { text: "៣ ខ្សែក្រវ៉ាត់សំណាងទាំងនេះ នឹងផ្លាស់ប្តូរជីវិតរបស់អ្នកទាំងស្រុងក្នុងរយៈពេលត្រឹមមួយខែប៉ុណ្ណោះ។ អ្នកនឹងរួចផុតពីភាពក្រីក្រហើយប្រាក់នឹងហូរចូលកាបូបរបស់អ្នកពីប្រភពជាច្រើនរហូតដល់ចុងជីវិត។" },
                        {
                            text: "ខ្ញុំតែងតែព្យាយាមជួយមនុស្សដោះស្រាយបញ្ហា ហើយមិនដែលរកប្រាក់ចំណេញពីរឿងនោះឡើយ។ នោះហើយជាមូលហេតុដែលចាប់ពីថ្ងៃនេះ រហូតដល់ថ្ងៃទី " + (new Date().getDate() + 1) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "មករា,កុម្ភៈ,មីនា,មេសា,ឧសភា,មិថុនា,កក្កដា,សីហា,កញ្ញា,តុលា,វិច្ឆិកា,ធ្នូ".split(",")), monthA[p.getMonth()]) + " ឆ្នាំ ២០២៥ អ្នកអាចទទួលបានការបញ្ចុះតម្លៃ 50% សម្រាប់ខ្សែក្រវ៉ាត់សំណាង 3 ខ្សែ ដែលមានតម្លៃត្រឹមតែ 40 ដុល្លារប៉ុណ្ណោះ។"
                        },
                        // {
                        //     text: "ผมพยายามช่วยทุกคนแก้ปัญหา และไม่เคยหาผลกำไรจากเรื่องนี้ นั่นคือเหตุผลที่ตั้งแต่วันนี้จนถึงวันที่ " + (new Date().getDate() + 1) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + " สิงหาคม คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง 3 ชิ้น เหลือเพียง 1290" + '</b> <b>' +
                        //         '฿' + "บาท"
                        // },
                        // {
                        //     text:
                        //         'ฉันพยายามช่วยเหลือผู้คนแก้ปัญหาอยู่เสมอ และฉันไม่เคยหากำไรจากการทำเช่นนั้น นั่นจึงเป็นเหตุผลที่จนกระทั่งถึงเดือน ' + ( new Date().getDate() + 1 ) + ' ' +
                        //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + ' คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง ราคาสำหรับคุณจึงจะอยู่ที่ <b>' +
                        //         '990' +
                        //         '</b> <b>' +
                        //         '฿' +
                        //         " เท่านั้น </b>",
                        // },
                        { text: "អ្នកអាចបញ្ជាទិញគ្រឿងសំណាង ៣ ដុំនេះបានឥឡូវនេះ! គ្រាន់តែបំពេញឈ្មោះ និងលេខទូរស័ព្ទរបស់អ្នកចូលក្នុងទម្រង់ ជីវិតរបស់អ្នកនឹងផ្លាស់ប្តូរ។ ខ្ញុំសន្យា!<br><br> " }
                    ],
                ],
            ],
            m: [
                [
                    [
                        {
                            text: `
    <div class="loading-section">
      <div class="loading-item">
        <div class="loading-header">
          <span style="font-size: 25px;">ប្រាក់</span>
          <span class="loading-percent" style="font-size: 25px;">0%</span>
        </div>
        <div class="loading-bar-container">
          <div class="loading-bar money-bar" data-target="${Math.floor(Math.random() * 11) + 50}">0%</div>
        </div>  
      </div>
    `}, {
                            text: `
      <div class="loading-item">
        <div class="loading-header">
          <span style="font-size: 25px;">សុខភាព</span>
          <span class="loading-percent" style="font-size: 25px;">0%</span>
        </div>
        <div class="loading-bar-container">
          <div class="loading-bar health-bar" data-target="${Math.floor(Math.random() * 26) + 60}">0%</div>
        </div>
      </div>`}, {
                            text: `
      <div class="loading-item">
        <div class="loading-header">
          <span style="font-size: 25px;">អាជីព</span>
          <span class="loading-percent" style="font-size: 25px;">0%</span>
        </div>
        <div class="loading-bar-container">
          <div class="loading-bar career-bar" data-target="${Math.floor(Math.random() * 16) + 70}">0%</div>
        </div>
      </div>`}, {
                            text: `
    
      <div class="loading-item">
        <div class="loading-header">
          <span style="font-size: 25px;">សេចក្ដីស្រឡាញ់</span>
          <span class="loading-percent" style="font-size: 25px;">0%</span>
        </div>
        <div class="loading-bar-container">
          <div class="loading-bar love-bar" data-target="${Math.floor(Math.random() * 16) + 60}">0%</div>
        </div>
      </div>
    </div>
    `}, {
                            text: "ដំបូង អ្នកអាចមានអារម្មណ៍ដូចជាត្រូវបានចាក់ខ្ទប់ក្នុងរង្វង់អាក្រក់នៃការខ្វះប្រាក់ បញ្ឈប់ការតាមដានក្តីស្រមៃ និងឱ្យឱកាសរអិលផុតទៅ។ អាយុ <b style='color: #00a3ff'>{zodie}</b> នឹងត្រូវទាញចូលទៅក្នុង “ព្យុះថាមពលអវិជ្ជមាន” ដែលទប់ស្កាត់សម្បត្តិរបស់អ្នក និងរារាំងអ្នកពីការរីកចម្រើនដោយសេរី។",
                            // text: "ในตอนแรก คุณอาจรู้สึกติดอยู่ในวงจรที่ขาดเงิน หยุดตามความฝัน และปล่อยให้โอกาสหลุดมือไป ปี <b style='color: #00a3ff'>{zodie}</b> จะถูกพัดพาเข้าสู่ “พายุพลังงานลบ” ที่ขัดขวางความมั่งคั่งของคุณ และป้องกันไม่ให้คุณเติบโตอย่างอิสระ",
                        },
                        { 
                            text: "🔮 ប៉ុន្តែ… នៅថ្ងៃទី " + (new Date().getDate() + 15) + " " + 
                                  ((d = new Date()), (p = new Date(d.getTime() - 0)), 
                                  (monthA = "មករា,កុម្ភៈ,មីនា,មេសា,ឧសភា,មិថុនា,កក្កដា,សីហា,កញ្ញា,តុលា,វិច្ឆិកា,ធ្នូ".split(",")), 
                                  monthA[p.getMonth() + 1]) + 
                                  " ឆ្នាំ 2025 នៅពេលព្រះច័ន្ទផ្លាស់ទីស្របជាមួយផ្កាយសុក្រី ពិភពលោកនឹងបើក “ទ្វារមាស” សម្រាប់អ្នកឱ្យជំហានចូលទៅលើផ្លូវថ្មី។" 
                        },
                        {
                            text: "ប្រាក់របស់អ្នក នឹងចូលមកពីឱកាសវិនិយោគថ្មីៗ និងការសម្រេចចិត្តដ៏ឆ្លាតវៃ។<br>" +
                                  "ទំនាក់ទំនង សេចក្តីស្រឡាញ់ និងសុខភាពរបស់អ្នក នឹងកាន់តែប្រសើរឡើង។ ប៉ុន្តែអ្វីទាំងនេះ អាស្រ័យលើការដែលអ្នកជឿលើខ្ញុំឬអត់។"
                        },
                        { 
                            text: "⚠️ ប្រសិនបើអ្នករង់ចាំចិត្ត... ឱកាសនេះអាចនឹងរអិលផុតពីដៃអ្នកជារៀងរហូត។ អ្នកគឺជាម្ចាស់វាសនារបស់ខ្លួន។ កុំអោយការភ័យខ្លាច រារាំងអ្នកពីការដឹកនាំជីវិតរបស់អ្នកទៅរកកិត្តិយស។" 
                        },
                        {
                            text: "ពេលនេះគឺជាឱកាសដ៏ល្អសម្រាប់អ្នកក្នុងការផ្លាស់ប្ដូរ និងអភិវឌ្ឍ។ អ្នកនឹងមានសំណាងកាន់តែប្រសើរឡើងយ៉ាងលឿន ហើយនាំមកនូវអ្វីដ៏អស្ចារ្យក្នុងការងារ និងសេចក្តីស្រឡាញ់ ប្រសិនបើអ្នកអាចលុបបំបាត់ថាមពលអវិជ្ជមានដែលកំពុងរារាំងខ្លួនឯង។"
                        },
                        { text: "ដំណឹងផ្តល់អនុសាសន៍សំខាន់សម្រាប់អាយុ {zodie} ក្នុងឆ្នាំ ២០២៥៖" },
                        { text: "បានដល់ពេលដែលអ្នកត្រូវការមានគ្រឿងសិទ្ធិការពារដ៏ខ្លាំងបំផុត ដើម្បីទាក់ទាញប្រាក់ និងសំណាង សម្រាប់រូបសញ្ញារបស់អ្នក ក្នុងឆ្នាំ ២០២៥។" },
                        { text: "ប្រសិនបើអ្នកខកខានគ្រឿងសិទ្ធិការពារទាំងនេះ ជីវិតរបស់អ្នកនឹងនៅដដែល ហើយសំណាងរបស់អ្នកនឹងត្រូវគាំងជារៀងរហូត។" }



                        // { text: "🔮 แต่...ในวันที่ " + (new Date().getDate() + 15) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth() + 1]) + " 2568 เมื่อดวงจันทร์เคลื่อนที่ขนานกับดาวศุกร์ จักรวาลจะเปิด “ประตูทองคำ” ให้คุณก้าวเข้าสู่เส้นทางใหม่" },
                        // {
                        //     text: "เงินของคุณจะไหลเข้ามาจากโอกาสลงทุนใหม่ๆ และการตัดสินใจที่ชาญฉลาด <br>" +
                        //         "ความสัมพันธ์ ความรัก และสุขภาพของคุณจะดีขึ้นเรื่อยๆ แต่นั่นขึ้นอยู่กับว่าคุณเชื่อผมหรือไม่"
                        // },

                        // { text: "⚠️ หากคุณลังเล... โอกาสนี้อาจหลุดลอยไปจากคุณตลอดกาล คุณคือผู้กำหนดชะตากรรม อย่าปล่อยให้ความกลัวหยุดคุณไม่ให้พาชีวิตของคุณไปสู่ความรุ่งโรจน์" },
                        // { text: "ช่วงเวลานี้เป็นโอกาสที่ยอดเยี่ยมในการเปลี่ยนแปลงและพัฒนา โชคของคุณจะดีขึ้นอย่างรวดเร็ว นำมาซึ่งสิ่งที่ยอดเยี่ยมในงานและความรัก หากคุณสามารถกำจัดพลังงานลบที่ยับยั้งคุณได้" },
                        // { text: "คำแนะนำที่สำคัญสำหรับผู้ที่เกิดปีนักษัตร {zodie} ในปี 2568" },
                        // { text: "ถึงเวลาที่คุณต้องมีเครื่องรางคุ้มครองที่ทรงพลังที่สุด เพื่อดึงดูดเงินทองและโชคลาภสำหรับราศีของคุณในปี 2568" },
                        // { text: "ถ้าคุณพลาดเครื่องรางเหล่านี้ ชีวิตของคุณจะยังเหมือนเดิม โชคลาภของคุณจะติดขัดตลอดไป" },
                        // {
                        //     text:
                        //         "ฉันมองเห็นได้อย่างชัดเจนว่า คุณจะมีโอกาสในการเปลี่ยนแปลงทิศทางที่กำหนดใน" +
                        //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) +
                        //         " นี่จะเป็นช่วงเวลาที่ดีในการเปลี่ยนแปลงชีวิตของคุณจากเคราะห์ร้ายให้เป็นโชคดีไปจนสิ้นอายุขัยของคุณ",
                        // },
                        // { text: "ไม่มีอะไรในชีวิตของคุณที่เกิดขึ้นโดยบังเอิญ ราศี \"<b style='color: #00a3ff'>{zodie}</b>\" มีความเปราะบางต่อพลังงานที่ไม่ดี คุณจะต้องปกป้องตัวคุณเองและดึงดูดโชคเรื่องเงินทองไปพร้อมกัน" },
                    ],
                    [
                        // { text: "<b>วิธีดึงดูดเงินและโชคลาภสำหรับราศีของคุณในปี 2568?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        // { text: "นี่จะเป็นโอกาสสุดท้ายในการเปลี่ยนแปลงโชคชะตาของคุณในปี 2568 หากคุณพลาดเครื่องรางนี้ ชีวิตของคุณจะยังคงเป็นเหมือนเดิมต่อไป คุณคือคนที่ต้องตัดสินใจในเรื่องนี้เอง!" },
                        // { text: "ฉันจะช่วยคุณในการดึงดูดเงินทองและโชคลาภให้เข้ามาหาราศีของคุณในปี 2568 หากคุณตกลง คุณจะลืมไปเลยว่า ความจนเป็นอย่างไร ฉันจะปลดปล่อยโชคลาภของคุณที่ถูกกักขังให้คุณเอง" },
                        // { text: "ฉันจะสร้างเครื่องรางพิเศษสำหรับคุณ ฉันจะใส่พลังลงไปในเครื่องรางด้วยมนต์วิเศษซึ่งจะทำให้พลังงานด้านมืดของคุณหมดไป ความโชคร้ายและความล้มเหลวทั้งหมดจะหายไปจากชีวิตของคุณตลอดไป ผมเห็นรูปคุณสวมสร้อยข้อมือนี้ ผมเห็นคุณจะมีความสุข! หลายคนจะอิจฉาคุณ คุณจะมีชีวิตที่มีความสุขและร่ำรวยเงินทอง" },
                        { text: " <br> <img width='200px' src='img/product.jpg'> </br> สខ្សែកខ្សែស្រលាយក្រុម៩ និងប៉ាតក្វាយ" },
                        { text: " <br> <img width='200px' src='img/product-2.jpg'> </br> ខ្សែដៃឈើដាន់ហួង ១០៨ គ្រាប់" },
                        { text: " <br> <img width='200px' src='img/product-1.jpg'> </br> ចិញ្ចៀនភ្នែកនាគ" },

                        { text: "ហេតុអ្វីបានជាអ្នកត្រូវមានគ្រឿងសាក់សិទ្ធិនេះ?" },
                        { text: "៣ ខ្សែក្រវ៉ាត់សំណាងទាំងនេះ នឹងផ្លាស់ប្តូរជីវិតរបស់អ្នកទាំងស្រុងក្នុងរយៈពេលត្រឹមមួយខែប៉ុណ្ណោះ។ អ្នកនឹងរួចផុតពីភាពក្រីក្រហើយប្រាក់នឹងហូរចូលកាបូបរបស់អ្នកពីប្រភពជាច្រើនរហូតដល់ចុងជីវិត។" },
                        {
                            text: "ខ្ញុំតែងតែព្យាយាមជួយមនុស្សដោះស្រាយបញ្ហា ហើយមិនដែលរកប្រាក់ចំណេញពីរឿងនោះឡើយ។ នោះហើយជាមូលហេតុដែលចាប់ពីថ្ងៃនេះ រហូតដល់ថ្ងៃទី " + (new Date().getDate() + 1) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "មករា,កុម្ភៈ,មីនា,មេសា,ឧសភា,មិថុនា,កក្កដា,សីហា,កញ្ញា,តុលា,វិច្ឆិកា,ធ្នូ".split(",")), monthA[p.getMonth()]) + " ឆ្នាំ ២០២៥ អ្នកអាចទទួលបានការបញ្ចុះតម្លៃ 50% សម្រាប់ខ្សែក្រវ៉ាត់សំណាង 3 ខ្សែ ដែលមានតម្លៃត្រឹមតែ 40 ដុល្លារប៉ុណ្ណោះ។"
                        },
                        // {
                        //     text: "ผมพยายามช่วยทุกคนแก้ปัญหา และไม่เคยหาผลกำไรจากเรื่องนี้ นั่นคือเหตุผลที่ตั้งแต่วันนี้จนถึงวันที่ " + (new Date().getDate() + 1) + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + " สิงหาคม คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง 3 ชิ้น เหลือเพียง 1290" + '</b> <b>' +
                        //         '฿' + "บาท"
                        // },
                        // {
                        //     text:
                        //         'ฉันพยายามช่วยเหลือผู้คนแก้ปัญหาอยู่เสมอ และฉันไม่เคยหากำไรจากการทำเช่นนั้น นั่นจึงเป็นเหตุผลที่จนกระทั่งถึงเดือน ' + ( new Date().getDate() + 1 ) + ' ' +
                        //         ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + ' คุณจะได้รับส่วนลด 50% สำหรับเครื่องราง ราคาสำหรับคุณจึงจะอยู่ที่ <b>' +
                        //         '990' +
                        //         '</b> <b>' +
                        //         '฿' +
                        //         " เท่านั้น </b>",
                        // },
                        { text: "អ្នកអាចបញ្ជាទិញគ្រឿងសំណាង ៣ ដុំនេះបានឥឡូវនេះ! គ្រាន់តែបំពេញឈ្មោះ និងលេខទូរស័ព្ទរបស់អ្នកចូលក្នុងទម្រង់ ជីវិតរបស់អ្នកនឹងផ្លាស់ប្តូរ។ ខ្ញុំសន្យា!<br><br> " }
                    ],
                ],
            ],
        }),
        (e.socNumber = [

            {
                text: "ខ្ញុំនឹងបញ្ចូលអំណាចវេទមន្តចូលក្នុងគ្រឿងសិទ្ធិបីយ៉ាងនេះ ដើម្បីធ្វើឱ្យថាមពលអាក្រក់របស់អ្នកបាត់ទៅ។ គ្រប់ទុក្ខសោក និងការបរាជ័យទាំងអស់ នឹងបាត់ផុតពីជីវិតអ្នកជារៀងរហូត។ ខ្ញុំបានឃើញរូបភាពអ្នកពាក់ខ្សែក ឧបករណ៍ពាក់ដៃ និងចិញ្ចៀននេះ។ អ្នកនឹងមានសុភមង្គលច្រើន ហើយមនុស្សជាច្រើននឹងច្រណែនអ្នក។ អ្នកនឹងមានជីវិតសម្បូរបែប ប្រកបដោយជោគជ័យ និងសុភមង្គល។",
            }
            // {
            //     text:
            //         "เลขนำโชคของคุณคือ " + "9" + " ซึ่งหมายความว่าในวันที่ " + "9" + ' ' + ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()+1]) + " 2568 ชีวิตของคุณจะเปลี่ยนไปในทางที่ดีขึ้น"
            // },
        ]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    { name: "name", value: "", placeholder: "Enter your name", type: "text", required: !0 },
                    { name: "phone", value: "", placeholder: "Enter your phone", type: "tel", required: !0 },
                ],
                btn_text: "Order amulet",
                title: "Order form amulet by Rudy Baldwin",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
        (e.getZodiak = function (t) {
            console.log('test', t);
            var a = parseInt(t[0]);
            // switch (a) {
            //     case 2491: case 2503: case 2515: case 2527: case 2539: case 2551: case 2563: case 2566:
            //         e.zodiak = 1;
            //         break;
            //     case 2492: case 2504: case 2516: case 2528: case 2540: case 2552: case 2564: case 2568:
            //         e.zodiak = 2;
            //         break;
            //     case 2493: case 2505: case 2517: case 2529: case 2541: case 2553: case 2565: case 2567:
            //         e.zodiak = 3;
            //         break;
            //     case 2494: case 2506: case 2518: case 2530: case 2542: case 2554:
            //         e.zodiak = 4;
            //         break;
            //     case 2495: case 2507: case 2519: case 2531: case 2543: case 2555:
            //         e.zodiak = 5;
            //         break;
            //     case 2496: case 2508: case 2520: case 2532: case 2544: case 2556:
            //         e.zodiak = 6;
            //         break;
            //     case 2497: case 2509: case 2521: case 2533: case 2545: case 2557:
            //         e.zodiak = 7;
            //         break;
            //     case 2498: case 2510: case 2522: case 2534: case 2546: case 2558:
            //         e.zodiak = 8;
            //         break;
            //     case 2499: case 2511: case 2523: case 2535: case 2547: case 2559:
            //         e.zodiak = 9;
            //         break;
            //     case 2500: case 2512: case 2524: case 2536: case 2548: case 2560:
            //         e.zodiak = 10;
            //         break;
            //     case 2501: case 2513: case 2525: case 2537: case 2549: case 2561:
            //         e.zodiak = 11;
            //         break;
            //     case 2502: case 2514: case 2526: case 2538: case 2550: case 2562:
            //         e.zodiak = 12;
            // }
            switch (a) {
                // ឆ្នាំជូត
                case 1948: case 1960: case 1972: case 1984: case 1996: case 2008: case 2020: case 2023:
                    e.zodiak = 1;
                    break;
                // ឆ្នាំឆ្លូវ
                case 1949: case 1961: case 1973: case 1985: case 1997: case 2009: case 2021: case 2025:
                    e.zodiak = 2;
                    break;
                // ឆ្នាំខាល
                case 1950: case 1962: case 1974: case 1986: case 1998: case 2010: case 2022: case 2024:
                    e.zodiak = 3;
                    break;
                // ឆ្នាំថោះ
                case 1951: case 1963: case 1975: case 1987: case 1999: case 2011:
                    e.zodiak = 4;
                    break;
                // ឆ្នាំរោង
                case 1952: case 1964: case 1976: case 1988: case 2000: case 2012:
                    e.zodiak = 5;
                    break;
                // ឆ្នាំម្សាញ់
                case 1953: case 1965: case 1977: case 1989: case 2001: case 2013:
                    e.zodiak = 6;
                    break;
                // ឆ្នាំមមី
                case 1954: case 1966: case 1978: case 1990: case 2002: case 2014:
                    e.zodiak = 7;
                    break;
                // ឆ្នាំមមែ
                case 1955: case 1967: case 1979: case 1991: case 2003: case 2015:
                    e.zodiak = 8;
                    break;
                // ឆ្នាំវក
                case 1956: case 1968: case 1980: case 1992: case 2004: case 2016:
                    e.zodiak = 9;
                    break;
                // ឆ្នាំរិច
                case 1957: case 1969: case 1981: case 1993: case 2005: case 2017:
                    e.zodiak = 10;
                    break;
                // ឆ្នាំច
                case 1958: case 1970: case 1982: case 1994: case 2006: case 2018:
                    e.zodiak = 11;
                    break;
                // ឆ្នាំកុរ
                case 1959: case 1971: case 1983: case 1995: case 2007: case 2019:
                    e.zodiak = 12;
            }
            return e.zodiak;
        }),
        (e.ZodiakName = [
            { name: "ឆ្នាំជូត", id: 1 },
            { name: "ឆ្នាំចាល", id: 2 },
            { name: "ឆ្នាំខាល", id: 3 },
            { name: "ឆ្នាំថោះ", id: 4 },
            { name: "ឆ្នាំរោង", id: 5 },
            { name: "ឆ្នាំម្សាញ់", id: 6 },
            { name: "ឆ្នាំមមី", id: 7 },
            { name: "ឆ្នាំមមែ", id: 8 },
            { name: "ឆ្នាំវក", id: 9 },
            { name: "ឆ្នាំរិច", id: 10 },
            { name: "ឆ្នាំច", id: 11 },
            { name: "ឆ្នាំកុរ", id: 12 },
        ]);
        e.DateBirthday = [{
            day: [1, 31],
            month: [
                "មករា",       // Tháng 1
                "កុម្ភៈ",      // Tháng 2
                "មិនា",        // Tháng 3
                "មេសា",       // Tháng 4
                "ឧសភា",       // Tháng 5
                "មិថុនា",     // Tháng 6
                "កក្កដា",       // Tháng 7
                "សីហា",        // Tháng 8
                "កញ្ញា",       // Tháng 9
                "តុលា",        // Tháng 10
                "វិច្ឆិកា",     // Tháng 11
                "ធ្នូ"         // Tháng 12
            ],
            year: [1945, 2008]
        }];
        // (e.DateBirthday = [{ day: [1, 31], month: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], year: [2490, 2553] }]),
        (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
        (e.MonthVariant = {
            january: ["январь", "января", "январе"],
            fabruary: ["февраль", "февраля", "феврале"],
            march: ["март", "марта", "марте"],
            april: ["апрель", "апреля", "апреле"],
            may: ["май", "мая", "мае"],
            june: ["июнь", "июня", "июне"],
            july: ["июль", "июля", "июле"],
            august: ["август", "августа", "августе"],
            september: ["сентябрь", "сентября", "сентябре"],
            october: ["октябрь", "октября", "октебре"],
            november: ["ноябрь", "ноября", "ноябре"],
            december: ["декабрь", "декабря", "декабре"],
        }),
        (e.Scroll = function () {
            $(document).ready(function () {
                !(function (e, t = function () { }, a = []) {
                    (e = jQuery(e)), (t = t.bind(e));
                    var n = -1,
                        o = -1;
                    setInterval(function () {
                        (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({ scrollTop: n }, 50), t.apply(null, a));
                    }, 100);
                })(".chat-content-container .chat-content-list", function (e) { }, []);
            });
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = {
                    showCursor: !1,
                    typeSpeed: 25,
                };
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                        r == o + 1 &&
                        setTimeout(function () {
                            $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                        }, 1500); // 1500
                }),
                    1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    typeSpeed: 25,
                    callback: function () {
                        2568
                        setTimeout(function () {
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    typeSpeed: 25,
                                    callback: function () {
                                        setTimeout(function () {
                                            var t;
                                            e.Scroll(),
                                                $(".chat-content-list").append(
                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                    (t = e.managerDialog[1]).m.text +
                                                    '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                    t.w.text +
                                                    "</span></div></div>"
                                                ),
                                                e.Scroll(),
                                                $(".chooseGender").on("click", function () {
                                                    a($(this).data("type"));
                                                });
                                        }, 100);
                                    },
                                });
                        }, 100);
                    },
                });
        });
});
