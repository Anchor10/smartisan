// 封装通过className获取节点(兼容写法)
function elementsByClassName(parent, className){
	//1、现将parent所有节点获取
	var nodes = parent.getElementsByTagName("*");
	//2、筛选
	var res = [];
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].className == className){
			res.push(nodes[i]);
		}
	}
	return res;
}

/*
	【注】选择器写法进行传参
	getElementById 			#id
	getElementsByTagName    tagName
	getElementsByName       name=hello
	getElementsByClassName  .box
*/
// 获取元素节点
function $(vArg){
	switch(vArg[0]){
		case "#":
			return document.getElementById(vArg.substring(1));
			break;
		case ".":
			return elementsByClassName(document, vArg.substring(1));
			break;
		default:
			//取出前面五个字符
			var subStr = vArg.substring(0, 5);
			if(subStr == "name="){
				//name
				return document.getElementsByName(vArg.substring(5));
			}else{
				//tagName
				return document.getElementsByTagName(vArg);
			}
			break;
	}
}

//n天后的日期:
function getNumOfDate(n){
	var d = new Date();
	var date = d.getDate();
	d.setDate(date + n);
	return d;
}


// 获取样式的兼容写法
function getStyle(elem, attr){
	return elem.currentStyle ? elem.currentStyle[attr] : getComputedStyle(elem)[attr];
}

// 产生随机颜色
function randomColor(){
	var color = "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ",1)";
	return color;
}


/*
	创建一个带文本节点的元素节点
*/
function createElementWithText(tagName, txtStr){
	var node = document.createElement(tagName);
	var oTxt = document.createTextNode(txtStr);
	node.appendChild(oTxt);
	return node;
}


// 将一个节点插到另一个节点后面
function insertAfter(newNode, oldNode){
	//判断oldNode是否是最后一个
	if(oldNode == oldNode.parentNode.lastChild){
		oldNode.parentNode.appendChild(newNode)
	}else{
		oldNode.parentNode.insertBefore(newNode, oldNode.nextSibling);
	}
}

//取消冒泡
function stopBubble(e){
	if(e.cancelBubble){
		e.cancelBubble = true;
	}else{
		e.stopPropagation();
	}
}

// 拖拽
function drag(node){
	var offsetX = 0;
	var offsetY = 0
	//<1>记录相对位置
	node.onmousedown = function(ev){
		var e = ev || window.event;
		offsetX = e.clientX - this.offsetLeft;
		offsetY = e.clientY - this.offsetTop;
		//2、鼠标移动，保持相对位置
		document.onmousemove = function(ev){
			var e = ev || window.event;
			node.style.left = e.clientX - offsetX + "px";
			node.style.top = e.clientY - offsetY + "px";
		}
	}
	//3、鼠标抬起，
	document.onmouseup = function(){
		document.onmousemove = null;
	}
}

//跨浏览器添加事件
function addEvent(obj, eventType, func){
	if(obj.addEventListener){
		obj.addEventListener(eventType, func, false);
	}else if(obj.attachEvent){
		obj.attachEvent("on" + eventType, func);
	}
}

//跨浏览器删除事件
function removeEvent(obj, eventType, func){
	if(obj.removeEventListener){
		obj.removeEventListener(eventType, func);
	}else if(obj.detachEvent){
		obj.detachEvent("on" + eventType,func);
	}
}


function setCookie(name, value, expires, path, domain,secure){
	var cookieStr = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if(expires){
		cookieStr += ";expires=" + expires;
	}
	if(path){
		cookieStr += ";path=" + path;
	}
	if(domain){
		cookieStr += ";domain=" + domain;
	}
	if(secure){
		cookieStr += ";secure=";
	}
	document.cookie = cookieStr;
}
//得到cookie
function getCookie(name){
	var cookieStr = decodeURIComponent(document.cookie);
	//<1>查找键的位置
	var start = cookieStr.indexOf(name);
	if(start){ //start != 0
		//【注】需要重新去找 这个键加上空格去找
		start = cookieStr.indexOf(" " + name);
	}

	if(start == -1){
		return null;
	}
	//<2>查找键值对结束位置
	var end = cookieStr.indexOf(";", start);
	if(end == -1){
		//最后一项
		end = cookieStr.length;
	}
	var subStr = cookieStr.substring(start, end);
	// alert(subStr);
	//<4>通过字符串分割将值提取
	var arr = subStr.split("=");
	return arr[1];
}
//删除cookie
function removeCookie(name){
	document.cookie = decodeURIComponent(name) + "=;expires=" + new Date(-1);
}








