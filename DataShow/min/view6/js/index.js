function drawChartList(t,a){var e=new PIXI.ticker.Ticker,l=new PIXI.Graphics;l.beginFill(2039344),l.drawRect(240,96+77*a,670,68),l.beginFill(t.color),l.drawRect(243,96+77*a,165,68),e.stop();var i=0;e.add(function(){i+=5,i>=t.value&&e.stop(),l.beginFill(t.color),l.drawRect(406,96+77*a,i,5)}),e.start(),l.beginFill(0),l.fillAlpha=.5,l.drawRect(390,101+77*a,18,63),app.stage.addChild(l);var o=new PIXI.Text(toDub(a+1),{fill:"#fff",fontSize:42});o.x=330,o.y=110+77*a,app.stage.addChild(o);var o=new PIXI.Text(t.title,{fill:"#fff",fontSize:28});o.x=440,o.y=116+77*a,app.stage.addChild(o);var o=new PIXI.Text(t.num,{fill:"#fff",fontSize:22,align:"left"});o.x=880-o.width,o.y=120+77*a,app.stage.addChild(o)}function toDub(t){return t<=9?"0"+t:""+t}var oChartLeft=$(".chart-left"),app=new PIXI.Application(oChartLeft.width(),oChartLeft.height(),{antialias:!0,backgroundColor:1249574});$(app.view).appendTo(oChartLeft);var basicText=new PIXI.Text("重点用户排行  TOP10",{fill:"#fff",fontSize:22,align:"left"});basicText.x=41,basicText.y=42,app.stage.addChild(basicText);var bunny=PIXI.Sprite.fromImage("/apps/view6/imgs/user.jpg");bunny.x=20,bunny.y=370,app.stage.addChild(bunny);for(var data=[{title:"中国网",value:505,num:"10,000",color:47609},{title:"中国网",value:505,num:"10,000",color:45457},{title:"中国网",value:505,num:"10,000",color:3846401},{title:"中国网",value:505,num:"10,000",color:3688404},{title:"中国网",value:505,num:"10,000",color:4856508},{title:"中国网",value:505,num:"10,000",color:15646464},{title:"中国网",value:505,num:"10,000",color:15436545},{title:"中国网",value:505,num:"10,000",color:14243585},{title:"中国网",value:505,num:"10,000",color:12976189},{title:"中国网",value:505,num:"10,000",color:13778070}],i=0;i<data.length;i++)drawChartList(data[i],i);chartBottom($(".chart-right .bottom .left"),{title:"用户浏览频度",data:[{text:"经常",value:5,color:3975135},{text:"很少",value:200,color:1222537},{text:"偶尔",value:50,color:6916909}]}),chartBottom($(".chart-right .bottom .right"),{title:"用户下载情况",data:[{text:"高",value:5,color:3975135},{text:"中",value:200,color:1222537},{text:"低",value:50,color:6916909}]});var chartRTop=$(".chart-right .top"),canvas=$("<canvas></canvas>");canvas.attr("width",chartRTop.width()),canvas.attr("height",chartRTop.height()),canvas.appendTo(chartRTop);var ctx=canvas.get(0).getContext("2d");barChart(ctx,{x:108,y:97,title:"用户浏览时长",xAis:["0-1小时","1-2小时","2-3小时","3-4小时"],data:[1e4,12563,15896,9654],color:"#3ca7df"}),barChart(ctx,{x:108,y:403,title:"用户浏览时段",xAis:["0-1小时","1-2小时","2-3小时","3-4小时","1-2小时","2-3小时","3-4小时"],data:[1e4,12563,15896,9654,5477,12698,2e4],color:"#12a789"});