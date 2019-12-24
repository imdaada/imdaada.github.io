let col = document.getElementById("col");
let num = parseInt(col.innerHTML);
let expon = 0;


let mas;
	let ms;


const btn1Click = () =>{
	expon++;
	col.innerHTML=num*Math.pow(10,expon);
}

const btn2Click = () =>{
	expon--;
	col.innerHTML=num*Math.pow(10,expon);
}


const btnClick = () => {
	let a = document.getElementById('y');
	//alert(a.value);
	ctx.clear;
	let r = a.value;
	let regexp = /\d+|\d-/gi;
	let rg = /\+|-/gi;
	//alert (parseInt(r.match(regexp)[0])+parseInt(r.match(regexp)[1]));
	//var mas;
	//for (let i =0; i<10; i++)
	//{
	//	mas[i]=0;
	//}
	 mas= r.match(regexp);//
	 ms = r.match(rg);//
	let coff = [];
	for (let i =0; i<10; i++)
	{
		if(mas[i]==undefined)
		{
			coff[i]=0;
		}
		else if (ms[i]==='-')
		{
			coff[i] = -1 * parseInt(mas[i]); 
		}
		else {
			coff[i] = parseInt(mas[i]);
		}
	}
	//alert (mas[5]);
	var x, y, p, x1, y1;
p=0;
ctx.beginPath();
ctx.moveTo(0, 0);
while (p<100)
{
	x=1000;
	y=p*100;
	ctx.moveTo(x, y);
	ctx.lineTo(x+10, y);
	ctx.moveTo(x, y);
	ctx.lineTo(x-10, y);
	ctx.moveTo(x, y);
	p=p+0.5;
}
ctx.stroke();


p=0;
ctx.beginPath();
ctx.moveTo(0, 0);
while (p<100)
{
	x=p*100;
	y=1000;
	ctx.moveTo(x, y);
	ctx.lineTo(x, y+10);
	ctx.moveTo(x, y);
	ctx.lineTo(x, y-10);
	ctx.moveTo(x, y);
	p=p+0.5;
}
ctx.stroke();
ctx.font = "16px Verdana";
ctx.fillText("0.5", 1038, 1025);
ctx.fillText("0.5", 1020, 957);

p=0;
ctx.beginPath();
x1=coff[0]*Math.pow(10,expon)*100+1000;
y1=0+1000;
ctx.moveTo(x1, y1);

while (p<1000)
{
	
	x=1*100*num*Math.pow(10,expon)*(Math.pow(p,0)*coff[0]-Math.pow(p,2)*coff[2]+Math.pow(p,4)*coff[4]-Math.pow(p,6)*coff[6]+Math.pow(p,8)*coff[8])+1000;
	y=-1*100*num*Math.pow(10,expon)*(Math.pow(p,1)*coff[1]-Math.pow(p,3)*coff[3]+Math.pow(p,5)*coff[5]-Math.pow(p,7)*coff[7]+Math.pow(p,9)*coff[9]) +1000;
	ctx.lineTo(x, y);
	ctx.moveTo(x, y);
	p=p+0.01;
}
ctx.stroke();
	
}


var example = document.getElementById("example"),
			    ctx = example.getContext('2d');
			ctx.beginPath();
			ctx.moveTo(1000, 0);
			ctx.lineTo(1000, 2000);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(0, 1000);
			ctx.lineTo(2000, 1000);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(2000, 1000);
			ctx.lineTo(1980, 1020);
			ctx.moveTo(2000, 1000);
			ctx.lineTo(1980, 980);
			ctx.stroke();
			ctx.moveTo(1000, 0);
			ctx.lineTo(980, 20);
			ctx.moveTo(1000, 0);
			ctx.lineTo(1020, 20);
			ctx.stroke();
/*var x, y, p, x1, y1;
p=0;
ctx.beginPath();
ctx.moveTo(0, 0);
while (p<100)
{
	x=1000;
	y=p*100;
	ctx.moveTo(x, y);
	ctx.lineTo(x+10, y);
	ctx.moveTo(x, y);
	ctx.lineTo(x-10, y);
	ctx.moveTo(x, y);
	p=p+0.5;
}
ctx.stroke();


p=0;
ctx.beginPath();
ctx.moveTo(0, 0);
while (p<100)
{
	x=p*100;
	y=1000;
	ctx.moveTo(x, y);
	ctx.lineTo(x, y+10);
	ctx.moveTo(x, y);
	ctx.lineTo(x, y-10);
	ctx.moveTo(x, y);
	p=p+0.5;
}
ctx.stroke();
ctx.font = "16px Verdana";
ctx.fillText("0.5", 1038, 1025);
ctx.fillText("0.5", 1020, 957);

p=0;
ctx.beginPath();
x1=100+1000;
y1=0+1000;
ctx.moveTo(x1, y1);
while (p<100)
{
	
	x=100*(3*p*p*p*p - 2*p*p+1)+1000;
	y=-1*100*(2*p*p*p*p*p-4*p*p*p + 3*p) +1000;
	ctx.lineTo(x, y);
	ctx.moveTo(x, y);
	p=p+0.1;
}
ctx.stroke();*/