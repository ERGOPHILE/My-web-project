           //  图片滚动
			onload=function(){
				 
			    var header_box1 = document.getElementById("header_box1");
			    var img = document.getElementById("img");
			    var header_box2_box1 = document.getElementById("header_box2_box1");
			    var header_box2_box2 = document.getElementById("header_box2_box2");
			    var header_box2_box3 = document.getElementById("header_box2_box3");
			    var arr = new Array();
			           arr[0]= "img/pos_1-1.png";
			           arr[1]= "img/pos_1-2.png";
			           arr[2]= "img/pos_1-3.png";
			            var index = 0;
                        var timer = null; 
			    //通过按钮单击改变图片
                    header_box2_box1.onclick=function(){
                   	           img.src="img/pos_1-1.png";
                    	       header_box2_box1.style.background="pink";
                    	       header_box2_box2.style.background="white";
                    	       header_box2_box3.style.background="white";
                    	
                    }
                   header_box2_box2.onclick=function(){
                      	 	   img.src="img/pos_1-2.png";
                    	       header_box2_box2.style.background="pink";
                    	       header_box2_box1.style.background="white";
                    	       header_box2_box3.style.background="white";
                    }
                   header_box2_box3.onclick=function(){
                      	       img.src="img/pos_1-3.png";
                    	       header_box2_box3.style.background="pink";
                    	       header_box2_box2.style.background="white";
                    	       header_box2_box1.style.background="white";
                    }
                      //图片自动

                   	 timer=setInterval(image,2000);
                      function image(){
                          if(index>2)
                            index=0;
                            img.src=arr[index];
                            switch(index){
                            	case 0: header_box2_box1.style.background="pink";
                    	                header_box2_box2.style.background="white";
                    	                header_box2_box3.style.background="white";
                    	                break;
                    	        case 1: header_box2_box1.style.background="white";
                    	                header_box2_box2.style.background="pink";
                    	                header_box2_box3.style.background="white";
                    	                break;
                    	        case 2: header_box2_box1.style.background="white";
                    	                header_box2_box2.style.background="white";
                    	                header_box2_box3.style.background="pink";
                    	                break;
                            }
                               index++;
                               
                     }    
                           
                      	header_box1.onmouseover=function(){
                      		clearInterval(timer);
                      	}
                      	header_box1.onmouseout=function(){
                      		timer=setInterval(image,2000);
                      	}
                     
//                       上一页下一页

			  	   var yema=1;
			  	   var ye1 = document.getElementById("ye1");
			  	   var ye2 = document.getElementById("ye2");
			  	   
			  	   var bt1 = document.getElementById("bt1");
			  	   var bt2 = document.getElementById("bt2");
			  	   
			  	   var shouye = document.getElementById("shouye");
			  	   var sye = document.getElementById("shangye");
			  	   var xye = document.getElementById("xxiaye");
			  	   var weiye = document.getElementById("weiye");
			  	     function abt1(){
			  	    	    bt1.style.backgroundColor="pink";
			  	   	        bt2.style.backgroundColor="white";
			  	   	        ye1.style.display="block";
			  	   	        ye2.style.display="none";
			  	    }
			  	    function abt2(){
			  	    	    bt1.style.backgroundColor="white";
			  	   	        bt2.style.backgroundColor="pink";
			  	   	        ye2.style.display="block";
			  	   	        ye1.style.display="none";
			  	    }
			  	   bt1.onclick=function (){
			  	   	        abt1(); 
			  	   	        yema =1;
			  	   	        xye.style.display="block";
			  	   	        sye.style.display="none";

			  	   }
			  	    bt2.onclick=function(){
			  	    	     abt2();
			  	   	         yema =2;
			  	   	         sye.style.display="block";
			  	   	         xye.style.display="none";
			  	   }
			  	     shouye.onclick=function(){
			  	   	       abt1();
			  	   }
			  	     
			  	    weiye.onclick=function(){
			  	     	   abt2();
			  	   }
			  	    sye.onclick=function(){
			  	    	 xye.style.display="block";
			  	    	 if(yema==1){
			  	            sye.style.display="none";
			  	         }
			  	    	 else
			  	    	  if(yema==2){
			  	    	    abt1();
			  	    	    yema--;
			  	             }
			  	       }
			  	    xye.onclick=function(){
			  	    	  sye.style.display="block";
			  	    	if(yema==1){
			  	    	    abt2();
			  	    	    yema++;
			  	         }
			  	    	 else
			  	    	  if(yema==2){
			  	    	  xye.style.display="none";
			  	              }
			  	      }	   

               }