function chartTop(t){var e=[1881343,45457,11965704],a=t.value.length-1,r=new PIXI.Graphics,o=[];for(o=2==t.value.length?[t.x,t.x+228]:[t.x,t.x+114,t.x+228];a>-1;){r.beginFill(e[a]),r.drawRect(t.x,t.y,228*t.value[a],5);var l=new PIXI.Text(t.text[a],{fontFamily:"Micorsoft YaHei",fontSize:20,fill:e[a]});l.x=a?o[a]-l.width:o[a],1==a&&3==t.value.length&&(l.x=o[a]-l.width/2),l.y=t.y-35,chartTopApp.stage.addChild(l),a--}var n=new PIXI.Text(t.title,{fontFamily:"Micorsoft YaHei",fontSize:20,fill:16777215});n.x=t.x,n.y=t.y-70,chartTopApp.stage.addChild(n),chartTopApp.stage.addChild(r)}function usersChart(){var t=$(".left-chart .bottom"),e=new PIXI.Application(385,t.height(),{backgroundColor:1316387});$(e.view).appendTo(t);for(var a=0;a<13;a++)!function(t){var a=new PIXI.Graphics;a.beginFill(2895418),a.drawRect(0+181*Math.floor(t/7),67+t%7*75,165,6),a.beginFill(2012415),a.drawRect(0+181*Math.floor(t/7),67+t%7*75,105,6),e.stage.addChild(a);var r=new PIXI.Text("会计/金融/保险/银行",{fontFamily:"Micorsoft YaHei",fontSize:14,fill:16777215});r.x=0+181*Math.floor(t/7),r.y=35+t%7*75,e.stage.addChild(r)}(a)}function userChartLeft(){function t(t,e){return t+Math.floor(Math.random()*(e-t+1))}function e(t,e,a){a=a*Math.PI/180;var r={x:0,y:0};return r.x=t.x+e*Math.cos(a),r.y=t.y+e*Math.sin(a),r}function a(){if(0==p)c.clear(),r();else if(1==p){for(var t=0;t<d.length;t++){var a=v[t],o=x[0]+42;2!=t&&7!=t||(o=x[0]+32);var l=e(h,o,d[t]);c.beginFill(a.color,1),c.drawRect(l.x-40,l.y-15,80,30),c.endFill();var i=new PIXI.TextStyle({fontFamily:"Arial",fontSize:20,fill:16777215}),s=new PIXI.Text(a.name,i);s.anchor.set(.5,.5),s.x=l.x,s.y=l.y,n.stage.addChild(s);var u=e(h,a.current+10,d[t]),f=new PIXI.Text(Math.round(13*a.value),new PIXI.TextStyle({fontFamily:"Arial",fontSize:14,fill:16777215}));f.anchor.set(.5,.5),f.x=u.x,f.y=u.y,n.stage.addChild(f)}p=2}}function r(){for(var t=0,e=0;e<v.length;e++){var a=v[e],r=d[e];a.ready&&t++,o(a,r)}t==v.length-1&&(p=1)}function o(t,a){var r=a-2,o=a+2,l=e(h,t.current,r),n=e(h,t.current,o),i={x:(l.x+n.x)/2,y:(l.y+n.y)/2},x=Math.pow((n.x-l.x)*(n.x-l.x)+(n.y-l.y)*(n.y-l.y),.5),d=x/2;c.lineStyle(0),c.beginFill(t.color,.6),c.moveTo(h.x,h.y),c.lineTo(l.x,l.y),c.lineTo(n.x,n.y),c.lineTo(h.x,h.y),c.endFill(),c.beginFill(t.color,.6),c.drawCircle(i.x,i.y,d),c.endFill(),t.ready||(t.current+=8,t.current>=t.value&&(t.ready=!0,t.current=t.value))}var l=document.createElement("canvas");l.className="scene",$(".left-chart .bottom").append(l);var n=new PIXI.Application(936,560,{view:l,transparent:!0,antialias:!1,preserveDrawingBuffer:!1,resolution:1}),i=new PIXI.Graphics;n.stage.addChild(i);var c=new PIXI.Graphics;n.stage.addChild(c),n.ticker.add(function(){a()});var h={x:277,y:294},x=[173,123,108,93],d=[18,54,90,126,162,197,234,270,306,342],v=[{name:"项目A",color:3623124,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目B",color:4856508,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目C",color:15646464,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目D",color:15436544,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目E",color:14178305,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目F",color:12976189,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目G",color:13778069,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目H",color:47609,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目I",color:45712,value:t(.4*x[2],.8*x[0]),current:0},{name:"项目J",color:3846912,value:t(.4*x[2],.8*x[0]),current:0}],p=0;!function(){var t=new PIXI.Sprite.fromImage("/apps/view7/imgs/r1.png");t.anchor.set(.5,.5),t.x=h.x,t.y=h.y,t.scale.set(.75,.75),n.stage.addChild(t);var a=new PIXI.Sprite.fromImage("/apps/view7/imgs/r2.png");a.anchor.set(.5,.5),a.x=h.x,a.y=h.y,a.scale.set(.75,.75),n.stage.addChild(a),i.lineStyle(1,16777215,.3);for(var r=0;r<d.length;r++){var o=e(h,x[0],d[r]);i.moveTo(h.x,h.y),i.lineTo(o.x,o.y)}for(var r=0;r<x.length;r++){for(var l=x[r],c=null,v=0;v<d.length;v++){var o=e(h,l,d[v]);0==v?(i.moveTo(o.x,o.y),c=o):i.lineTo(o.x,o.y)}c&&i.lineTo(c.x,c.y)}}()}var chartRTop=$(".right-chart .top"),canvas=$("<canvas></canvas>");canvas.attr("width",chartRTop.width()),canvas.attr("height",chartRTop.height()),canvas.appendTo(chartRTop);var ctx=canvas.get(0).getContext("2d");barChart(ctx,{x:108,y:97,title:"用户浏览时长",xAis:["0-1小时","1-2小时","2-3小时","3-4小时"],data:[1e4,12563,15896,9654],color:"#3ca7df"}),barChart(ctx,{x:108,y:403,title:"用户浏览时段",xAis:["0-1小时","1-2小时","2-3小时","3-4小时","1-2小时","2-3小时","3-4小时"],data:[1e4,12563,15896,9654,5477,12698,2e4],color:"#12a789"}),chartBottom($(".right-chart .bottom .bar-left"),{title:"用户浏览频度",data:[{text:"经常",value:5,color:3975135},{text:"很少",value:200,color:1222537},{text:"偶尔",value:50,color:6916909}]}),chartBottom($(".right-chart .bottom .bar-right"),{title:"用户下载情况",data:[{text:"高",value:5,color:3975135},{text:"中",value:200,color:1222537},{text:"低",value:50,color:6916909}]});var chartTopObj=$(".left-chart .top"),chartTopApp=new PIXI.Application(chartTopObj.width(),chartTopObj.height(),{backgroundColor:1316387});$(chartTopApp.view).appendTo(chartTopObj);var users=new PIXI.Sprite.fromImage("/apps/view7/imgs/users.jpg");users.x=378,users.y=52,chartTopApp.stage.addChild(users);var graphics=new PIXI.Graphics;graphics.beginFill(1881343),graphics.drawRoundedRect(326,221,288,50,10),chartTopApp.stage.addChild(graphics);var text=new PIXI.Text("个人用户群体画像",{align:"center",fontSize:24,fill:"#fff"});text.x=470-text.width/2,text.y=246-text.height/2,chartTopApp.stage.addChild(text),chartTop({x:40,y:130,title:"性别",text:["男性","中性","女性"],value:[.7,.8,1]}),chartTop({x:40,y:250,title:"国籍",text:["男性","中性","女性"],value:[.7,.8,1]}),chartTop({x:674,y:100,title:"国籍",text:["男性","中性","女性"],value:[.7,.8,1]}),chartTop({x:674,y:192,title:"国籍",text:["男性","中性","女性"],value:[.7,.8,1]}),chartTop({x:674,y:285,title:"国籍",text:["男性","中性","女性"],value:[.7,.8,1]}),usersChart(),userChartLeft();