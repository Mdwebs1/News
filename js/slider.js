// JavaScript Document
//opacity 


 var imgopacity=1;
 var titleopacity=0;
 var slideimgs=document.getElementsByName("slide");
 var imgCounter=0;
 
 function fade(){
	var i=0;
	for(i=0;i<slideimgs.length;i++)slideimgs[i].style.display="none";
	
	
	slideimgs[imgCounter].style.display="block";
	slideimgs[imgCounter].style.opacity=imgopacity;
	setTimeout(titlefadein,1000);
	setTimeout(fadeout,6000);
}

function fadeout(){
	imgopacity=imgopacity-0.009;
	if(imgopacity<=0)
	{
		slideimgs[imgCounter].style.display="none";
		
		imgopacity=0;
		imgCounter++;
		if(imgCounter>=slideimgs.length)
		{
			slideimgs[0].style.display="block";
			imgCounter=0;
		}
		else
			slideimgs[imgCounter].style.display="block";
		
		
		fadein();
	}
	else
	{
		slideimgs[imgCounter].style.opacity=imgopacity;
		setTimeout(fadeout,10);
	}
}

function fadein(){
	imgopacity=imgopacity+0.009;
	if(imgopacity>=1)
	{
		imgopacity=1;
		setTimeout(titlefadein,500);
		setTimeout(fadeout,6000);
	}
	else
	{
		slideimgs[imgCounter].style.opacity=imgopacity;
		setTimeout(fadein,10);
	}
}




function titlefadein(){
	document.getElementById("slideTitle").innerText=slideimgs[imgCounter].title;
	titleopacity=titleopacity+0.009;
	if(titleopacity>=1)
	{
		titleopacity=1;
		setTimeout(titlefadeout,2000);
	}
	else
	{
		document.getElementById("slideTitle").style.opacity=titleopacity;
		setTimeout(titlefadein,10);
	}
}

function titlefadeout(){
	titleopacity=titleopacity-0.009;
	if(titleopacity<=0)
	{
		titleopacity=0;
		
	}
	else
	{
		document.getElementById("slideTitle").style.opacity=titleopacity;
		setTimeout(titlefadeout,10);
	}
}