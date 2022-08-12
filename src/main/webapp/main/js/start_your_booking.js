
const roomCardBody = $(".room_card_body");

var rommRoomIdArr = sessionStorage.emptyRoomStyleId;
console.log(rommRoomIdArr);
// var dateRange = sessionStorage.dateRange;
var getDateStart = sessionStorage.startDateSS;
var getDateEnd = sessionStorage.endDateSS;
var dateCount = 0;

//存放房型card陣列
var cardArr = [];
///購物車卡片資料 
var carCardArr = [];
//卡片按鈕ID
var card_id;
//選擇幾間房
var select_room_count = 0;
//總共選擇房數
var total_room_count = 0;
//購物車總價
var car_total_price = 0;

//============ init ==============
$(function () {

    //日期顯示
    let start = getDateStart.split('-');
    s_year = start[0];
    s_month = start[1];
    s_day = start[2];
    let end = getDateEnd.split('-');
    e_year = end[0];
    e_month = end[1];
    e_day = end[2];
    var day_list = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

    start = new Date(s_year, (parseInt(s_month) - 1), s_day);
    end = new Date(e_year, (parseInt(e_month) - 1), e_day);

    let startDay = day_list[start.getDay()];
    let endDay = day_list[end.getDay()];
    // dateCount = end.getTime() - start.getTime();
    let difference = Math.abs(end - start);
    dateCount = difference / (1000 * 3600 * 24)
    console.log(dateCount);

    let date_detail = `${s_year}年${s_month}月${s_day}日 (${startDay}) - 
    ${e_year}年${e_month}月${e_day}日 (${endDay})`;
    $('span.date_detail').text(date_detail);
    $('span.date_count').text(`${dateCount} 晚`);

});

//======================== 初始查詢房型種類 =============================
$.ajax({
    url: url + func.Search + mode.RoomCard,
    contentType: "application/json; charset=utf-8",
    type: "POST",
    data: rommRoomIdArr,
    dataType: "json",
    success: function (data) {

        // let obj = eval(data);
        console.log("初始查詢房型種類");
        emptyCardArr();
        roomCardBody.empty();

        var tr_id = 0;

        $.each(data, function (index, content) {

            console.log(content);
            let obj = {};
            obj.roomStyleId = content.roomStyleId;
            obj.roomName = content.roomName;
            obj.roomQuantity = content.roomQuantity;
            obj.bedType = content.bedType;
            obj.roomType = content.roomType;
            obj.orderRoomPrice = content.orderRoomPrice;
            obj.roomDescription = content.roomDescription;
            obj.roomPhoto = content.roomPhoto;
            cardArr.push(obj);

            let item = {};
            item.status = false;
            item.roomStyleId;
            item.people;
            item.roomCount;
            item.price;
            carCardArr.push(item);

            let img_64 = content.roomPhoto;

            // $(".rest_room_section").find(`#no_room${card_id}`).removeClass("hidden_caution");
            // $(".rest_room_section").find(`#rest_room${card_id}`).addClass("hidden_caution");
            // $(`.add_btn${card_id}`).addClass("hidden_caution");
            // $(`.room_count${card_id}`).addClass("hidden_caution");
            // $(`.minus_btn${card_id}`).addClass("hidden_caution");



            let card_html = `<div class="room_card" id="${tr_id}">
                                <div class="room_items">
                                <div class="image-box">
                                    <img src="data:image/png;base64,${img_64}" width="400" height="300">
                                </div>
                    
                                <div class="about">
                                    <h1 class="room_name" id="room_name">${content.roomName}(${content.bedType})</h1>
                                    <p class="room_caption">${content.roomDescription}</p>
                                    <a href="#" class="know_more">了解更多</a>
                                </div>
                    
                                <div class="prices" id="prices">${content.orderRoomPrice}<span> 元</span></div>
                                </div>
                    
                                <div class="count_section" id="${tr_id}">
                                    <div class="rest_room_section">
                                        <div id="rest_room${tr_id}">剩餘 <span class="rest_num" id="rest_num${tr_id}">${content.roomQuantity}</span> 間</div>
                                        <div id="no_room${tr_id}" class="hidden_caution">您已經選完最後一間</div>
                                    </div>
                                    <!-- 需要增加display:none 當已經選完最後一間時 -->
                                    <div class="add_btn" id="${tr_id}">+</div>
                                    <div class="room_count${tr_id}">1</div>
                                    <div class="minus_btn" id="${tr_id}">-</div>
                                    <!-- <div class="add_into_cart_section"></div> -->
                                    <div class="add_into_cart_space"></div>
                                    <button type="button" class="btn" id="${tr_id}" onclick=add_cart(this)>選擇</button>
                                </div>
                        </div>`;


            tr_id++;
            roomCardBody.prepend(card_html);
        });


        sessionStorage.removeItem("emptyRoomStyleId");
    },
    error: function (result) {
        alert("提交失敗！");
        sessionStorage.removeItem("emptyRoomStyleId");
        $('.no_room').css('display', 'block');
        console.log(result);
    }
})

function neww(item) {

    console.log('newwwwwww');
    let obj = {};
    obj.roomStyleId = '111';
    obj.roomName = 'namee';
    obj.roomQuantity = '7';
    obj.bedType = '(big)';
    obj.roomType = 'type';
    obj.orderRoomPrice = '1500'
    obj.roomDescription = 'descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn';
    obj.roomPhoto = '';
    cardArr.push(obj);

    let img_64 = '';

    let card_html = `<div class="room_card" id="0">
                        <div class="room_items">
                        <div class="image-box">
                            <img src="data:image/png;base64," width="400" height="300">
                        </div>

                        <div class="about">
                            <h1 class="room_name" id="room_name">name(big)</h1>
                            <p class="room_caption">這是介紹介紹這是介紹這是介紹這是介紹這是介紹這是介紹這是介紹這是介紹這是介紹這是介紹這是介紹</p>
                            <a href="#" class="know_more">了解更多</a>
                        </div>

                        <div class="prices" id="prices">1500<span> 元</span></div>
                        </div>

                        <div class="count_section" id="0">
                            <div class="rest_room_section">
                                <div id="rest_room">剩餘 <span class="rest_num" id="rest_num0">7</span> 間</div>
                                <div id="no_room" class="hidden_caution">您已經選完最後一間</div>
                            </div>
                            <!-- 需要增加display:none 當已經選完最後一間時 -->
                            <div class="add_btn" id="0">+</div>
                            <div class="room_count0">1</div>
                            <div class="minus_btn">-</div>
                            <!-- <div class="add_into_cart_section"></div> -->
                            <div class="add_into_cart_space"></div>
                            <button type="button" class="btn" id="0" onclick=add_cart(this)>選擇</button>
                        </div>

                    </div>`;
    roomCardBody.prepend(card_html);


}

// ======================== 加入購物車 =============================
function add_cart(item) {

    console.log("add_cart");
    card_id = $(item).attr('id');
    console.log('card_id=' + card_id);

    //房型房間總量
    let type_room_total = parseInt(cardArr[card_id].roomQuantity);
    console.log('type_room_total=' + type_room_total);
    //選的房數
    select_room_count = parseInt($(`.room_count${card_id}`).text());
    let price = parseInt(cardArr[card_id].orderRoomPrice);
    let cart_item_price = select_room_count * price;
    let check = false;

    console.log('carStatus=' + carCardArr[card_id].status);
    if (carCardArr[card_id].status) {
        alert('此房型已在購物車');
    } else {
        check = true;
    }

    if (check) {
        $("div.cart_items").append(
            `<li style="list-style-type: none" class="card_li" id="card_li${card_id}">
                    <div class="cart_room">
                        <div class="cart_room_name">${cardArr[card_id].roomName}(${cardArr[card_id].roomType})</div>
                        <div><span>2</span> 位賓客，<span>${cardArr[card_id].roomName}</span>晚</div>
                        <div class="select_num"><span>數量:</span><span id="select_count">${select_room_count}</span></div>
                        <div class="cart_caution">將收取取消費用</div>
                    </div>
                        <div class="cart_remove_price">
                            <div class="Action" id="${card_id}" onclick=remove_car_cart(this) >x</div>
                        </div>
                        <div class="cart_item_price">${cart_item_price}元</div>
                    </div>
              </li>`
        );

        carCardArr[card_id].status = true;
        carCardArr[card_id].roomStyleId = cardArr[card_id].roomStyleId;
        carCardArr[card_id].people = '2';
        carCardArr[card_id].roomCount = select_room_count;
        carCardArr[card_id].price = cart_item_price;
        carCardArr.push(item);

        let rest_count = type_room_total - select_room_count;
        console.log("type_room_total - select_room_count ===" + rest_count);
        if (rest_count === 0) {
            console.log("empty");
            /* 顯示最後一間被選完 */
            $(".rest_room_section").find(`#no_room${card_id}`).removeClass("hidden_caution");
            $(".rest_room_section").find(`#rest_room${card_id}`).addClass("hidden_caution");
            $(`.add_btn#${card_id}`).addClass("hidden_caution");
            $(`.room_count${card_id}`).addClass("hidden_caution");
            $(`.minus_btn#${card_id}`).addClass("hidden_caution");
        } else {
            /* 更新房卡 剩餘房數 */
            console.log('rest_count=' + rest_count);
            $(`#rest_num${card_id}`).text(rest_count);
        }


        total_room_count += select_room_count
        console.log('總訂房' + total_room_count);
        //更新總訂房數
        $("span.num_of_people_detail").text(total_room_count + " 個房間");

        //更新總價
        car_total_price += cart_item_price;
        console.log('car_total_price=' + car_total_price);
        $("span#price_all").text(car_total_price);

        /* +- room count 回歸為1*/
        $(this).siblings(".room_count").text("1");
    }


}

/* +- room number*/
$(document).on("click", ".add_btn", function () {

    console.log('adddd');
    let num = parseInt($(this).next().text());
    card_id = $(this).attr('id');


    let quantity = cardArr[card_id].roomQuantity;
    console.log(quantity);
    console.log($(this).next().text());

    if (num < quantity) {
        num++;
        $(this).next().text(num);
    }
});

$(document).on("click", ".minus_btn", function () {

    let num = parseInt($(this).prev().text());
    if (num > 1) {
        num--;
        $(this).prev().text(num);
    }
});

//=========================== 清空陣列資料 ===========================
function emptyCardArr() {

    while (cardArr.length) {
        cardArr.pop();
    }
    console.log('清空JrnArr');
}
//====================== 移除購物車卡片 ========================


function remove_car_cart(item) {

    console.log("移除購物車卡片");
    card_id = $(item).attr('id');
    console.log('card_id' + card_id);

    $(`.cart_items>li#card_li${card_id}`).remove();
    // $(`.cart_items>li#card_li0`).remove();

    carCardArr[card_id].status = false;

    //恢復房卡 剩餘房數
    $(`#rest_num${card_id}`).text(cardArr[card_id].roomQuantity);

    //更新購物車總額
    car_total_price -= carCardArr[card_id].price;
    console.log('car_total_price=' + car_total_price);
    $("span#price_all").text(car_total_price);

    //更新總房數
    total_room_count -= carCardArr[card_id].roomCount;
    $("span.num_of_people_detail").text(total_room_count + " 個房間");


    $(".rest_room_section").find(`#no_room${card_id}`).addClass("hidden_caution");
    $(".rest_room_section").find(`#rest_room${card_id}`).removeClass("hidden_caution");
    $(`.add_btn#${card_id}`).removeClass("hidden_caution");
    $(`.room_count${card_id}`).removeClass("hidden_caution");
    $(`.minus_btn#${card_id}`).removeClass("hidden_caution");

}

// ============================ 下一步 加購行程 =============================
function add_journey(item) {

    // carCardArr[card_id].status = true;
    // carCardArr[card_id].roomStyleId = cardArr[card_id].roomStyleId;
    // carCardArr[card_id].people = '2';
    // carCardArr[card_id].roomCount = select_room_count;
    // carCardArr[card_id].price = cart_item_price;
    // carCardArr.push(item);

    console.log('跳轉 加購行程');

    var soiList = [];
    if (total_room_count === 0) {

        alert("您尚未選擇房型");
    } else {

        for (var i = 0; i < carCardArr.length; i++) {
            if (carCardArr[i].status) {

                let item = {}
                item.roomStyleId = carCardArr[i].roomStyleId;
                item.orderRoomQuantity = carCardArr[i].roomCount;
                soiList.push(item);
            }
        }


        console.log(soiList);
        console.log(JSON.stringify(soiList));
        sessionStorage.removeItem("order_item");
        sessionStorage.setItem('order_item', JSON.stringify(soiList));

        let soh = {};
        soh.orderStartDate = getDateStart;
        soh.orderEndDate = getDateEnd;
        soh.roomPrice = car_total_price;
        console.log(JSON.stringify(soh));
        sessionStorage.removeItem("soh");
        sessionStorage.setItem('soh', JSON.stringify(soh));

        console.log('跳轉 加購行程');

        var gat = sessionStorage.order_item;
        console.log(gat);

        var jgat = $.parseJSON(gat);
        console.log(jgat.type());
        console.log(jgat.length);
        for (var i = 0; i < jgat.length; i++) {
            console.log(i + ":" + jgat[i]);
            console.log(i + ":" + jgat[i].roomStyleId);
            console.log(i + ":" + jgat[i].orderRoomQuantity);
        }
        $.each(jgat, function (i, item) {

            console.log(item['roomStyleId']);
            console.log(item['orderRoomQuantity']);
        });

        // location.href = "./for_your_journey.html";

    }

}
