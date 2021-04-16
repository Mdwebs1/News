// JavaScript Document

function showTime(){
    var x = new Date();
	
	var h=x.getHours();
	var m=x.getMinutes();
	var s=x.getSeconds();
	
	

	var y="AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        y = "PM";
    }
	
	if(h<10)
		h="0"+h;
		
	if(m<10)
		m="0"+m;
	
	if(s<10)
		s="0"+s;
    
	var months=['يناير','فبراير','مارس','ابريل','مايو','يونيو','يوليو','اغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمبر'];
	
	var days=['الاحد','الاثنين','الثلاثاء','الاربعاء','الخميس','الجمعه','السبت'];
	
	var day=x.getDay();
	var month=x.getMonth();
	   
    var time = h + ":" + m + ":" + s + " " + y;
	var date = "  " + days[day] + " , " +  x.getDate() + " " + months[month] + " , " + x.getFullYear(); 
    /*document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    */
	
	document.getElementById("MyClockDisplay").innerHTML=time + date;
	setTimeout(showTime,1000);
}