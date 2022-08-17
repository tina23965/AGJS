<%@ page contentType="text/html; charset=UTF-8" pageEncoding="Big5"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="agjs.bean.restaurant.*"%>


<%
RestaurantBookVO restaurantBookVO = (RestaurantBookVO) request.getAttribute("restaurantBookVO");
%>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>| 美食饗宴 | 訂位 |</title>
<link rel="stylesheet" href="style/AGJS_2.css">
<link rel="icon" href="image/logo.ico" type="image/x-icon" />
</head>

<body>
	<div class="wrapper row0">
		<div id="topbar" class="hoc clear">
			<!-- ################################################################################################ -->
			<div class="fl_left">
				<ul class="nospace">
					<li><a href="user_account.html">會員中心</a></li>
				</ul>
			</div>
			<div class="fl_right">
				<ul class="nospace">
					<li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
					<li><i class="fa fa-envelope-o"></i> info@agjs.com</li>
				</ul>
			</div>
			<!-- ################################################################################################ -->
		</div>
	</div>
	<div class="wrapper row1">
		<header id="header" class="hoc clear">
			<div id="Lheader">
				<div id="LogoImg">
					<img id="LOGO" src="image/logo_v2.png" alt="">
				</div>
				<div id="logo" class="fl_left">
					<h1>
						<a href="context.html">A GooD Journey SySTem </a>
					</h1>
				</div>
			</div>
			<nav id="mainav" class="fl_right">
				<ul class="clear">
					<li class="active"><a href="index.html">最新消息</a></li>

					<li><a class="drop" href="#">關於我們</a> <!-- <ul>
              <li><a href="pages/gallery.html">Gallery</a></li>
              <li><a href="pages/full-width.html">Full Width</a></li>
              <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
              <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
              <li><a href="pages/basic-grid.html">Basic Grid</a></li>
            </ul> --></li>

					<li><a class="drop" href="#">房型介紹</a>
						<ul>
							<li><a href="#">山景標準房</a></li>
							<li><a href="#">山景雅致房</a></li>
							<li><a href="#">海景標準房</a></li>
							<li><a href="#">海景雅致房</a></li>
						</ul></li>

					<li><a href="#">行程介紹</a></li>
					<li><a href="restaurant.html">美食饗宴</a>
						<ul>
							<li><a href="./rest_Intro1.html">Java Steak House</a></li>
							<li><a href="./rest_Intro2.html">Momohiya</a></li>
							<li><a href="./rest_Intro3.html">102 BAR</a></li>
						</ul></li>
					<li><a>聯絡我們</a>
						<ul>
							<li><a href="mail.html">客服表單</a></li>
							<li><a href="messagename.jsp">線上客服</a></li>
						</ul></li>
					<li><a href="#">立即訂房</a></li>
				</ul>
			</nav>
		</header>
	</div>


	<!--///////////////////////////////////////////////////////////////////////////////////////////////////////////-->
	<main>
		<div class="pic_book">
			<div class="picture">
				<img src="image/hotelRSRT-1.png" alt="">
			</div>
			<div class="picture">
				<img src="image/hotelRSRT-2.png" alt="">
			</div>
			<div class="picture">
				<img src="image/hotelRSRT-3.png" alt="">
			</div>
		</div>
		<div class="reservation">
			<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
			<div>
				<p>*為必填</p>
			</div>

			<FORM METHOD="post"
				ACTION="<%=request.getContextPath()%>/main/rest_book" name="form1">
				<div class="elem-group">
					<label for="restaurant-selection">選擇餐廳*</label> <input type="text"
						id="restaurant" placeholder="Java Steak House" required
						class="restaurant" name="REST_ID">
				</div>
				<div class="elem-group">
					<label for="name">姓名*</label> <input type="text" id="name"
						name="USER_NAME" name="visitor_name" placeholder="王小明"
						pattern=[\u4e00-\u9fa5]{2,4} required class="name">
				</div>
				<div class="elem-group">
					<label for="phone">手機號碼*</label> <input type="tel" id="phone"
						name="REST_TEL" placeholder="0912-345-678"
						pattern=(\d{4})-?\s?(\d{3})-?\s?(\d{3}) required class="phone">
				</div>
				<hr>
				<div class="elem-group inlined">
					<label for="people">人數*</label> <input type="number" id="people"
						name="REST_NUM" placeholder="1" min="1" required class="people">
				</div>
				<div class="elem-group inlined">
					<label for="reservation-date">訂位日期*</label> <input type="date"
						id="f_date1" name="REST_DATE" required class="date">
				</div>

				<hr>
				<div class="elem-group">
					<label for="message">特殊備註</label>
					<textarea id="message" name="visitor_message" name="REST_NOTE"
						placeholder="Tell us anything else that might be important."
						class="note"></textarea>
				</div>
				<div class="modal-footer">
					<input type="hidden" name="action" value="insert"> <input
						type="submit" value="確認訂位" class="btn btn-primary">
				</div>
			</Form>
		</div>
	</main>
	<!--///////////////////////////////////////////////////////////////////////////////////////////////////////////-->
	<div class="bgded overlay">
		<!-- ################################################################################################ -->
		<div class="wrapper row4">
			<footer id="footer" class="hoc clear">
				<!-- ################################################################################################ -->
				<div class="one_quarter first">
					<h6 class="heading">FOLLOW US</h6>
					<ul class="faico clear">
						<li><a class="faicon-facebook" href="#"><i
								class="fa fa-facebook"></i></a></li>
						<li><a class="faicon-twitter" href="#"><i
								class="fa fa-twitter"></i></a></li>
						<li><a class="faicon-dribble" href="#"><i
								class="fa fa-dribbble"></i></a></li>
						<li><a class="faicon-linkedin" href="#"><i
								class="fa fa-linkedin"></i></a></li>
					</ul>
					<br>
					<ul class="nospace btmspace-30 linklist contact">
						<li><i class="fa fa-phone"></i> 收到最新消息</li>
						<input class="btmspace-15" type="text" value="" placeholder="Name">
						<button type="submit" value="submit">Submit</button>
					</ul>
				</div>
				<div id="middle" class="one_quarter">
					<img id="f_logo" src="image/logo_v2.png"> <br> <br>
					<ul id="text" class="nospace linklist">
						<li>A GooD Journey SySTem</a></li>
						<li>連絡電話:(02)2222-1122</a></li>
						<li>地址:台北市中山區XX南路XX號</a></li>
					</ul>
				</div>
				<div class="one_quarter">
					<h6 class="heading">交通位置</h6>
					<img src="image/map.png">
				</div>
				<!-- ################################################################################################ -->
			</footer>
		</div>

		<div class="wrapper row5">
			<div id="copyright" class="hoc clear">
				<!-- ################################################################################################ -->
				<p class="fl_left">
					Copyright &copy; 2022 - All Rights Reserved - <a href="#">A
						GooD Journey SySTem, Inc.或其附屬公司</a>
				</p>
				<!-- ################################################################################################ -->
			</div>
		</div>
		<!-- ################################################################################################ -->
	</div>
	<script src="vendors/jquery/jquery-3.6.0.min.js"></script>
	<script src="js/booking.js"></script>

</body>




</html>