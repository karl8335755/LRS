$(document).ready(function(){
  $('.characters img').click(function(){
  // 	if(this.src.indexOf('langren')>=0)
  // 	{
		// $('div').fadeTo('fast',.4);
		// $('#langren').addClass('popup');
	 //  	$('#langren').css('z-index',"100");
	 //  	$('#langren').fadeTo('fast',1);  		
  // 	}
    //var character = document.getElementById('characters');

    var x = $(this).index();
    $('.pop').css('z-index','0');
    $('.pop > div:nth-child('+(x+1)+')').css('display','inline-block')
    .animate({opacity:1},50,function(){
    });

  });
  $('.pop div span img').click(function(){
    $('.pop > div').css('display','none');
    $('.pop').css('z-index','-1');
  });
 //  	if(this.src.indexOf('bailang')>=0)
 //  	{
	// 	$('div').fadeTo('fast',.4);
	// 	$('#bailang').addClass('popup');
	//   	$('#bailang').css('z-index',"100");
	//   	$('#bailang').fadeTo('fast',1);  		
 //  	}
 //  	if(this.src.indexOf('folks')>=0)
 //  	{
	// 	$('div').fadeTo('fast',.4);
	//   	$('#folks').css('z-index',"100");
	//   	$('#folks').fadeTo('fast',1);  		
 //  	}
 //  	if(this.src.indexOf('idiot')>=0)
 //  	{
	// 	$('div').fadeTo('fast',.4);
	//   	$('#idiot').css('z-index',"100");
	//   	$('#idiot').fadeTo('fast',1);  		
 //  	}
 //  	if(this.src.indexOf('hunter')>=0)
 //  	{
	// 	$('div').fadeTo('fast',.4);
	//   	$('#hunter').css('z-index',"100");
	//   	$('#hunter').fadeTo('fast',1);  		
 //  	}
 //  	if(this.src.indexOf('seer')>=0)
 //  	{
	// 	$('div').fadeTo('fast',.4);
	//   	$('#seer').css('z-index',"100");
	//   	$('#seer').fadeTo('fast',1);  		
 //  	}
 //  	if(this.src.indexOf('guard')>=0)
 //  	{
	// 	$('div').fadeTo('fast',.4);
	//   	$('#guard').css('z-index',"100");
	//   	$('#guard').fadeTo('fast',1);  		
 //  	}
 //  	if(this.src.indexOf('witch')>=0)
 //  	{
	// 	$('div').fadeTo('fast',.4);
	//   	$('#witch').css('z-index',"100");
	//   	$('#witch').fadeTo('fast',1);  		
 //  	}
 //  });
 //  $('span img').click(function(){
	// $('#langren').removeClass('popup');
 //   	$('div').fadeTo('fast',1);
 //  	$('#langren').css('z-index',"-1");
 //  	$('#langren').fadeTo('fast',0); 	
 //  })
});