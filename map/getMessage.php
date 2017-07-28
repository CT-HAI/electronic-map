<?php

	$name = $_POST['name'];

	switch ($name) {
		case '广知楼勤工':
			$height = 20;
			$text = "广C622&emsp;信息学院";
			$img = null;
			break;

		case '健行楼勤工':
			$height = 300;
			$text = "健A109&emsp;海洋学院<br>
					健A110&emsp;生物学院<br>
					健B301&emsp;环境学院<br>
					健B407&emsp;药学院<br>
					健B411&emsp;机械学院<br>
					健B505-1&emsp;国际学院<br>
					健B508&emsp;建工学院<br>
					健A409&emsp;网络中心教学区<br>
					健B一楼大厅&emsp;教师事务大厅<br>
					健B212&emsp;计算机中心<br>
					健B400&emsp;学生处<br>
					健B405&emsp;教务处<br>
					健B409&emsp;后勤管理处<br>
					健B419&emsp;计财处<br>
					健B507&emsp;社科院";
			$img = null;
			break;

		case '语林楼勤工':
			$height = 20;
			$text = "511&emsp;外国语学院";
			$img = null;
			break;

		case '致远楼勤工':
			$height = 20;
			$text = "204&emsp;健行学院";
			$img = null;
			break;

		case '理学楼勤工':
			$height = 20;
			$text = "理A201&emsp;理学院";
			$img = null;
			break;

		case '博易楼勤工':
			$height = 80;
			$text = "博A205&emsp;经贸学院<br>
					博B103&emsp;多媒体教辅岗<br>
					博B105&emsp;中小企业<br>
					博B110&emsp;浙商信息中心";
			$img = null;
			break;

		case '畅远楼勤工':
			$height = 20;
			$text = "416&emsp;教科学院";
			$img = null;
			break;

		case '仁和楼勤工':
			$height = 20;
			$text = "308&emsp;政管学院";
			$img = null;
			break;

		case '郁文楼勤工':
			$height = 40;
			$text = "郁A309&emsp;人文学院<br>
					郁B403&emsp;计算机学院<br>";
			$img = null;
			break;

		case '法学楼勤工':
			$height = 40;
			$text = "法A309&emsp;艺术学院<br>
					法A402&emsp;法学院";
			$img = null;
			break;

		case '图书馆勤工':
			$height = 160;
			$text = "<table>
						<tr>
							<td>二楼</td>
							<td rowspan='4'>读者服务部</td>
						</tr>
						<tr>
							<td>三楼</td>
						</tr>
						<tr>
							<td>四楼</td>
						</tr>
						<tr>
							<td>现刊物阅览室</td>
						</tr>
						<tr>
							<td>601</td>
							<td>编目部</td>
						</tr>
						<tr>
							<td>608</td>
							<td>资源建设部</td>
						</tr>
						<tr>
							<td>620</td>
							<td>校区办(综合)</td>
						</tr>
					</table>";
			$img = null;
			break;

		case '家和四楼勤工':
			$height = 40;
			$text = "<table>
						<tr>
							<td rowspan='2'>饮服办公室1</td>
							<td>大堂副理</td>
						</tr>
						<tr>
							<td>磁盘收银员</td>
						</tr>
					</table>";
			$img = null;
			break;

		case '东十六勤工':
			$height = 40;
			$text = "<table>
						<tr>
							<td rowspan='2'>104</td>
							<td>保卫办(户籍)</td>
						</tr>
						<tr>
							<td>保卫办(综合)</td>
						</tr>
					</table>";
			$img = null;
			break;

		default:
			$height = 40;
			$text = "无法获取信息，请点击重试";
			$img = null;
			break;
	}

	$content = array('height' => $height, 'text' => $text, 'img' => $img);
	$content = json_encode($content);
	print_r($content);

?>