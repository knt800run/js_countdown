(()	=>	{
	const	time	=	()	=>	{
		let	today	=	new	Date();
		let	olympicDay	=	new	Date('2021/07/23	20:00');
		let	dif	=	olympicDay.getTime()	-	today.getTime();
		let	difDay	=	Math.floor(dif/(24*60*60*1000));
		let	difHours	=	Math.floor((dif/(60*60*1000))%24);
		let	difMinutes	=	Math.floor((dif/(60*1000))%60);
		let	difSeconds	=	Math.floor((dif/1000)%60);
		difDay	=	(`0${difDay}`).slice(-2);
		difMinutes	=	(`0${difMinutes}`).slice(-2);
		difSeconds	=	(`0${difSeconds}`).slice(-2);
		if(difDay	>	0){
			document.getElementById('day').textContent	=	`${difDay}日`;
			document.getElementById('hours').textContent	=	`${difHours}時間`;
			document.getElementById('minutes').textContent	=	`${difMinutes}分`;
			document.getElementById('seconds').textContent	=	`${difSeconds}秒`;
		}
	}
	time();
	setInterval(time,1000);
})();
