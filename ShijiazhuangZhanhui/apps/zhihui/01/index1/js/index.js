$(function(){
	var data = {
		data1:{
			name:'地区01',
			numbe: '01 STREET',
			url: 'img/jd01.png',
			val:['1.2', '0.4', '1.4'],
			form:[
				['1', '街道01', '7200', '5122', '1500' ,'578', '42', '20'],
				['2', '街道02', '3252', '1652', '452' ,'1148', '12', '2'],
				['3', '街道03', '11452', '9625', '615' ,'1212', '120', '32'],
				['4', '街道04', '25121', '12342', '4250' ,'3109', '205', '74'],
				['5', '街道05', '5232', '1254', '2301' ,'1677', '10', '0'],
				['6', '街道06', '7722', '4411', '220' ,'3091', '12', '7'],
				['7', '街道07', '6112', '3200', '1242' ,'1670', '5', '2'],
				['8', '街道08', '14521', '7520', '3015' ,'3986', '75', '24']
			]
		},
		data2:{
			name:'地区02',
			numbe: '02 STREET',
			url: 'img/map-02.jpg',
			val:['0.9', '0.8', '1.6'],
			form:[
				['1', '街道01', '5622', '4545', '302' ,'54', '25', '4'],
				['2', '街道02', '12454', '8544', '1005' ,'782', '77', '25'],
				['3', '街道03', '2124', '800', '105' ,'872', '5', '0'],
				['4', '街道04', '1225', '700', '455' ,'52', '4', '0'],
				['5', '街道05', '42435', '45052', '520' ,'211', '45', '52'],
				['6', '街道06', '21452', '15244', '1525' ,'4534', '52', '55'],
				['7', '街道07', '2051', '1025', '300' ,'254', '2', '1'],
				['8', '街道08', '5475', '4242', '200' ,'120', '5', '8']
			]
		},
		data3:{
			name:'地区03',
			numbe: '03 STREET',
			url: 'img/map-03.jpg',
			val:['0.5', '0.7', '1.45'],
			form:[
				['1', '街道01', '7800', '1212', '4545' ,'454', '31', '70'],
				['2', '街道02', '9588', '7501', '1201' ,'1148', '44', '25'],
				['3', '街道03', '14750', '5402', '4521' ,'1475', '50', '65'],
				['4', '街道04', '3252', '1201', '540' ,'350', '14', '2'],
				['5', '街道05', '5847', '2544', '1201' ,'1254', '5', '7'],
				['6', '街道06', '96741', '54787', '32454' ,'8501', '450', '70'],
				['7', '街道07', '14545', '7824', '2305' ,'450', '12', '8'],
				['8', '街道08', '4564', '2555', '1025' ,'50', '5', '7']
			]
		}
	}
	var id = setInterval(box, 3000);
	var dataArr = ['data1', 'data2', 'data3'];
	var index = 1;
	function box () {
		if (index < dataArr.length) {
			switchDta(data[dataArr[index]]);
			index ++;
		}else {
			switchDta(data.data1);
			index = 1;
		}
	}
	function switchDta (data) {
		$('.left').find('.img img').attr('src', data.url);
		$('.left').find('.title-left').html(data.name);
		$('.left').find('.title-right').html(data.numbe);
		for ( var i = 0; i < data.val.length; i++) {
			$('.left').find('.val .text-val').eq(i).html(data.val[i]);
		}
		for ( var i = 0; i < data.form.length; i++) {
			for ( var j = 0; j < data.form[i].length; j++) {
				var tr = $('.right').find('tr').eq(i + 1);
				tr.find('td').eq(j).html(data.form[i][j]);
			}
		}
	}
})

