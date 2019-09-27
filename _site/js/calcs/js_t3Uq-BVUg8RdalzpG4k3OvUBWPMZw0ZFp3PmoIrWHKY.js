function resetClick(){
            document.formc.reset();            
            
            recalc_onclick('');
            LoadFromQueryString();
        }

var co = new Object;
function recalc_onclick(ctl) {
  if (true) {


co['xlew_2_11_4']=document.getElementById('xlew_2_11_4').value;co['xlew_2_12_4']=eeparseFloat(document.getElementById('xlew_2_12_4').value);co['xlew_2_13_4']=eeparsePercent(document.getElementById('xlew_2_13_4').value);calc(co);document.getElementById('xlew_2_14_4').value=eedisplayPercentND(co['xlew_2_14_4'],0);document.getElementById('xlew_2_16_3').value=eedatefmt(fmtdate1,co['xlew_2_16_3']);document.getElementById('xlew_2_16_5').value=eedisplayFloatNDTh(co['xlew_2_16_5'],0);document.getElementById('xlew_2_17_3').value=eedatefmt(fmtdate1,co['xlew_2_17_3']);document.getElementById('xlew_2_17_5').value=eedisplayFloatNDTh(co['xlew_2_17_5'],0);document.getElementById('xlew_2_18_3').value=eedatefmt(fmtdate1,co['xlew_2_18_3']);document.getElementById('xlew_2_18_5').value=eedisplayFloatNDTh(co['xlew_2_18_5'],0);
};};
function calc(data){var c2D13=data['xlew_2_13_4'];var c2D12=data['xlew_2_12_4'];var c2D11=data['xlew_2_11_4'];var c2D14=(((1)-(c2D13)));var c2C16=(((((rounddown((((c2D12)/(2))),(0)))*(s2n(substitute((left((c2D11),(find3(("-"),(c2D11),(1))))),("GB-"),(""),(1))))))*(0.893)));var c2E16=(((((c2C16)==(0)))?(0):(((((v2n(((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("SSD")))?(10000):((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("15K SAS")))?(195):(((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("10K SAS")))?(125):((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("7K Sata")))?(80):(""))))))))*(c2D12)))/(((c2D13)+(((2)*(c2D14)))))))));var c2C17=(((((c2D12)<(4)))?(0):((((c2D12)>(23)))?(((((((((((rounddown((((c2D12)/(24))),(0)))*(24)))*(s2n(substitute((left((c2D11),(find3(("-"),(c2D11),(1))))),("GB-"),(""),(1))))))*(((22)/(24)))))*(0.893)))+(((((mod((c2D12),(24)))>(3)))?(((((((mod((c2D12),(24)))-(2)))*(s2n(substitute((left((c2D11),(find3(("-"),(c2D11),(1))))),("GB-"),(""),(1))))))*(0.893))):(0))))):(((((((c2D12)-(2)))*(s2n(substitute((left((c2D11),(find3(("-"),(c2D11),(1))))),("GB-"),(""),(1))))))*(0.893))))));var c2C18=(((((c2D12)<(3)))?(0):((((c2D12)>(9)))?(((((((((((rounddown((((c2D12)/(9))),(0)))*(9)))*(s2n(substitute((left((c2D11),(find3(("-"),(c2D11),(1))))),("GB-"),(""),(1))))))*(((8)/(9)))))*(0.893)))+(((((mod((c2D12),(9)))>(2)))?(((((((mod((c2D12),(9)))-(1)))*(s2n(substitute((left((c2D11),(find3(("-"),(c2D11),(1))))),("GB-"),(""),(1))))))*(0.893))):(0))))):(((((((c2D12)-(1)))*(s2n(substitute((left((c2D11),(find3(("-"),(c2D11),(1))))),("GB-"),(""),(1))))))*(0.893))))));
 var c2E18=(((((c2C18)==(0)))?(0):(((((v2n(((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("SSD")))?(10000):((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("15K SAS")))?(195):(((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("10K SAS")))?(125):((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("7K Sata")))?(80):(""))))))))*(c2D12)))/(((c2D13)+(((4)*(c2D14)))))))));var c2E17=(((((c2C18)==(0)))?(0):(((((v2n(((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("SSD")))?(10000):((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("15K SAS")))?(195):(((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("10K SAS")))?(125):((str_eq((mid((c2D11),(((find3(("-"),(c2D11),(1)))+(1))),(s2n(right((n2s(((find2(("-"),(c2D11)))+(1)))),(1)))))),("7K Sata")))?(80):(""))))))))*(c2D12)))/(((c2D13)+(((6)*(c2D14)))))))));data['xlew_2_18_5']=c2E18;data['xlew_2_18_3']=c2C18;data['xlew_2_17_5']=c2E17;data['xlew_2_17_3']=c2C17;data['xlew_2_16_5']=c2E16;data['xlew_2_16_3']=c2C16;data['xlew_2_14_4']=c2D14;};
function TriggerOnchange(hiddenId)
{
    var e = jQuery.Event('change');
    $('#'+hiddenId).trigger(e);
}
var eeisus=1;var eetrue="TRUE";var eefalse="FALSE";var eedec=".";var eeth=",";var eedecreg=new RegExp("\\.","g");var eethreg=new RegExp(",","g");var eecurrencyreg=new RegExp("[$]","g");var eepercentreg=new RegExp("%","g"); var fmtdaynamesshort=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat"); var fmtdaynameslong=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"); var fmtmonthnamesshort=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); var fmtmonthnameslong=new Array("January","February","March","April","May","June","July","August","September","October","November","December"); var fmtstrings=new Array(" ","GB"); var fmtdate1=[25,0,32,33];
var jsonLocal='{"eeisus":1,"eetrue":"TRUE","eefalse":"FALSE","eedec":".","eeth":",","eedecreg":["\\\\.","g"],"eethreg":[",","g"],"eecurrencyreg":["[$]","g"],"eepercentreg":["%","g"],"fmtdaynamesshort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"fmtdaynameslong":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"fmtmonthnamesshort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"fmtmonthnameslong":["January","February","March","April","May","June","July","August","September","October","November","December"],"fmtstrings":[" ","GB"]}';
function str_eq(x,y){if(isNaN(x)&&isNaN(y))return(x.toLowerCase()==y.toLowerCase());else return x==y;};



function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function toHex2(n){var out=n.toString(16);if(out.length==1){return "0"+out;}else{return out;}};function quoteString(s){var len=s.length;var res="";for(var ii=0;ii<len;ii++){res+="\\x"+toHex2(s.charCodeAt(ii));};return res;};function find3(r,s,n){if(n<1){return Number.NaN}else{var exact_match=quoteString(r);var hit=(s.substr(n-1)).search(exact_match);if(hit==-1){return Number.NaN;}else{return hit+n;}}};

function find2(r,s){return find3(r,s,1);};

function len(s){return s.length;};

function left(s,n){return s.substr(0,n);};

function mid(s,n,l){return s.substr(n-1,l);};

function replace(str,from,length,insert){return left(str,from-1)+insert+mid(str,from+length,str.length);};

function right(str,n){var len=str.length;return str.substring(len-n,len);};

function substitute(str,from,to,n){var current=1;for(var ii=1;ii<=n;ii++){current=find3(from,str,1+current);};if(isNaN(current)){return str;}else{return replace(str,current,from.length,to);}};

function mod(n,d){return n-d*Math.floor(n/d);};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

function roundup(n,nd) { return Math.ceil((n*Math.pow(10, nd)))/Math.pow(10,nd)};

function rounddown(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,(nd<0?Math.ceil(nd):Math.floor(nd)));return sign_n*Math.floor(abs_n*factor)/factor;}else{return NaN;}};

function s2n(str){str=String(str).replace(eedecreg,".");str=str.replace(eethreg,"");str=str.replace(eecurrencyreg,"");var res=parseFloat(str);if(myIsNaN(res))res=0;if(str.search(eepercentreg)>=0)res=res/100;return res;}

function n2s(x){return(x).toString();}

function v2n(v){switch(typeof v){case "number":return v;case "string":return s2n(v);case "boolean":return v?1:0;case "object":if(v.constructor==Number){return v;};if(v.constructor==String){return s2n(v);};if(v.constructor==Boolean){return v?1:0;};return Number.NaN;default:return Number.NaN;}};

function eeparseFloat(str){str=String(str).replace(eedecreg,".");var res=parseFloat(str);if(isNaN(res)){return 0;}else{return res;}};

function eeparsePercent(str){var parts=String(str).split('%');var tmp=String(parts[0]).replace(eedecreg,".");var res=parseFloat(tmp)/100;if(isNaN(res)){return 0;}else{return res;}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x);if(near0RegExp.test(str)){x=round(x,8);str=String(x);}return str.replace(/\./g,eedec);}};

function eedisplayScientific(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x.toExponential(nd));return str.replace(/\./g,eedec);}};

function eedisplayFloatND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}}else{return res;}}};

function eedisplayPercent(x){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloat(x*100)+'%';}};

function eedisplayPercentND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloatND(x*100,nd)+'%';}}

function eedisplayFloatNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');var res2=eeinsertThousand(parts[0].toString());if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(res2+eedec+decimals);}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);}}else{return(eeinsertThousand(res.toString()));}}};

function eedisplayPercentNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloatNDTh(x*100,nd)+'%';}}

function eeinsertThousand(whole){if(whole==""||whole.indexOf("e")>=0){return whole;}else{var minus_sign="";if(whole.charAt(0)=="-"){minus_sign="-";whole=whole.substring(1);};var res="";var str_length=whole.length-1;for(var ii=0;ii<=str_length;ii++){if(ii>0&&ii%3==0){res=eeth+res;};res=whole.charAt(str_length-ii)+res;};return minus_sign+res;}};

 function eedatefmt(fmt,x){if(!isFinite(x))return Number.NaN;var padding=0;var tmp=0;var res="";var len=fmt.length;for(var ii=0;ii<len;ii++){if(fmt[ii]>31){res+=fmtstrings[fmt[ii]-32];}else{switch(fmt[ii]){case 2:res+=eemonth(x);break;case 3:tmp=eemonth(x);if(tmp<10){res+="0";};res+=tmp;break;case 4:res+=fmtmonthnamesshort[eemonth(x)-1];break;case 5:res+=fmtmonthnameslong[eemonth(x)-1];break;case 6:res+=eeday(x);break;case 7:tmp=eeday(x);if(tmp<10){res+="0";};res+=tmp;break;case 8:res+=fmtdaynamesshort[weekday(x,1)-1];break;case 9:res+=fmtdaynameslong[weekday(x,1)-1];break;case 10:tmp=year(x)%100;if(tmp<10){res+="0";};res+=tmp;break;case 11:res+=year(x);break;case 12:res+=hour(x);break;case 13:tmp=hour(x);if(tmp<10){res+="0";};res+=tmp;break;case 14:tmp=hour(x)%12;if(tmp==0){res+="12";}else{res+=tmp%12;};break;case 15:tmp=hour(x)%12;if(tmp==0){res+="12";}else{if(tmp<10){res+="0";};res+=tmp;};break;case 16:res+=minute(x);break;case 17:tmp=minute(x);if(tmp<10){res+="0";};res+=tmp;break;case 18:res+=second(x);break;case 19:tmp=second(x);
 if(tmp<10){res+="0";};res+=tmp;break;case 21:case 22:if(hour(x)<12){res+="AM";}else{res+="PM";};break;case 23:res+=eedisplayFloat(x);break;case 24:tmp=fmt[++ii];res+=eedisplayFloatND(x,tmp);break;case 25:tmp=fmt[++ii];res+=eedisplayFloatNDTh(x,tmp);break;case 26:res+=eedisplayPercent(x);break;case 27:tmp=fmt[++ii];res+=eedisplayPercentND(x,tmp);break;case 28:tmp=fmt[++ii];res+=eedisplayPercentNDTh(x,tmp);break;case 29:tmp=fmt[++ii];res+=eedisplayScientific(x,tmp);break;case 30:padding=fmt[++ii];tmp=hour(x)+Math.floor(x)*24;tmp=tmp.toString();if(tmp.length<padding){res+=('00000000000000').substring(0,padding-tmp.length);}res+=tmp;break;};};};return res;};

 function leap_gregorian(year){return((year%4)==0)&&(!(((year%100)==0)&&((year%400)!=0)));}var GREGORIAN_EPOCH=1721425;function gregorian_to_jd(year,month,day){return(GREGORIAN_EPOCH-0)+(365*(year-1))+Math.floor((year-1)/4)+(-Math.floor((year-1)/100))+Math.floor((year-1)/400)+Math.floor((((367*month)-362)/12)+((month<=2)?0:(leap_gregorian(year)?-1:-2))+day);}function jd_to_gregorian(jd){var wjd,depoch,quadricent,dqc,cent,dcent,quad,dquad,yindex,year,yearday,leapadj;wjd=Math.floor(jd);depoch=wjd-GREGORIAN_EPOCH-1;quadricent=Math.floor(depoch/146097);dqc=mod(depoch,146097);cent=Math.floor(dqc/36524);dcent=mod(dqc,36524);quad=Math.floor(dcent/1461);dquad=mod(dcent,1461);yindex=Math.floor(dquad/365);year=(quadricent*400)+(cent*100)+(quad*4)+yindex;if(!((cent==4)||(yindex==4))){year++;}yearday=wjd-gregorian_to_jd(year,1,1);leapadj=((wjd<gregorian_to_jd(year,3,1))?0:(leap_gregorian(year)?1:2));var month=Math.floor((((yearday+leapadj)*12)+373)/367);var day=(wjd-gregorian_to_jd(year,month,1))+1;
 return new Array(year,month,day);}

function eeday(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 0;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[2];};

function hour(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return Math.floor(res/3600);}

function minute(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return Math.floor(res/60)%60;};

function eemonth(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 1;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[1];};

function second(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return res%60;};

 function weekday(serial_number,return_type){if(!isFinite(return_type)||!isFinite(serial_number))return Number.NaN;if(return_type<1||return_type>3)return Number.NaN;var res=Math.floor(serial_number+6)%7;switch(Math.floor(return_type)){case 1:return res+1;case 2:return(res+6)%7+1;case 3:return(res+6)%7;};return "hej";};

function year(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 1900;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[0];};
function submitClick()
        {
		    check_submit('nocaptcha');
		}
        var submitted=false;
        function check_submit(objcaptcha) 
        {
            if (submitted) 
            {
                alert('You have already submitted the form.  Please be patient.');
                submitted = false;
                return false
            } 
            else 
            {
                recalc_onclick('');
                submitted = true;
                document.formc.submit();
                return true
            } 
        }
function printClick(){
           recalc_onclick('');		  
           document.getElementById('printallcss').href='';           
           window.print();
		}
function eequerystring(){
    var variable,key,value,ii,querystring,variables;querystring=document.location.search;
    if(querystring.length>0){
        variables=querystring.substring(1).split('&');
        for(ii=0;ii<variables.length;ii++){
            variable=variables[ii].split('=');
            key=unescape(variable[0])
            value=unescape(variable[1]);
            if(document.formc[key]!=null)
                document.formc[key].value=value;
        }
    }
}
      function LoadFromQueryString(){
    eequerystring();
    recalc_onclick('');}
function navigate(evt)
{
	var key = evt.keyCode | evt.which;
	
	/* handle only Enter (13), arrow down key(40) and arrow up key (38) */
	if(key != 13 && key != 40 && key != 38) return; 
	
	/* IE 8 does not have target so will resolve with srcElement */
	/* thought accessing target is faster than another jquery selector $(':focus'); */
	var cur_elem = $(evt.target || evt.srcElement);

	// implementing textarea logic
	if(cur_elem.is("textarea")) return;
	
	////discarding slider navigation using arrow key.
	//if((cur_elem.hasClass('ui-slider-handle')) && (key == 40 || key == 38)) {return;}
	
	/*{
		
		if(key == 13) return;
		
		var firstNewline = cur_elem.val().indexOf('\n');		
		var lastNewline = cur_elem.val().lastIndexOf('\n');	
		var cursorPos = cur_elem.prop("selectionStart");	
				
		if(firstNewline > -1)
		{	
			// if we are not in first or last line, don't navigate. 
			if (cursorPos > firstNewline && cursorPos <= lastNewline) return;

			// if we are in the first line, but up key was not pressed, don't navigate. 
			if(cursorPos <= firstNewline && key != 38) return;
			
			// if we are in last line, but down key was not pressed, don't navigate. 
			if(cursorPos > lastNewline && key != 40) return;		
		}
		
	}*/
	
	/* getting current field location.. */
	/* here 10 means we want to use decimal number system for parsing */
	var cur_sheet = parseInt(cur_elem.attr('data-sheet'), 10);
	var cur_row = parseInt(cur_elem.attr('data-row'), 10);		
	var cur_col = parseInt(cur_elem.attr('data-col'), 10);
	
	var foundFocus = false;
	
	/* caching the sheet div selector */
	var sheetSelector = $('#sheet-' + cur_sheet + '');
	var inputSelector = 'input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea';
	var next_row = cur_row + 1;	
	var prev_row = cur_row - 1;	
	
	/* assuming next row is the last row */
	var max_row = next_row; 
	var min_row = prev_row;
	
	while((key == 40 && next_row <= max_row) || (key == 38 && prev_row >= min_row))	
	{			
		/* looking for next higher data-row with same data-sheet and data-col.. */
		/* if found, it results in faster navigation */
		var next_focus_elem = sheetSelector.find(inputSelector).filter('[data-sheet='+ cur_sheet +'][data-row='+ (key == 38 ? prev_row  : next_row) + '][data-col='+ cur_col + ']');
		if(next_focus_elem.length > 0)
		{
			next_focus_elem[0].focus();
			foundFocus = true;
			break;
		}			
		else
		{
			var arrRows;
			
			/* if not saved eariler into jquery data store of sheet div  */
			if(sheetSelector.data('col'+ cur_col) == undefined)
			{	
				/* create array of data-row for given data-sheet and data-col */
				arrRows = sheetSelector.find(inputSelector).filter('[data-sheet=' + cur_sheet + '][data-col='+ cur_col + ']').map(					
				function(){
						return parseInt($(this).attr('data-row'), 10);
					}).toArray();
					
				/* store into data-colx data store of sheet div where x is the cur_col */
				sheetSelector.data('col' + cur_col, arrRows);
			}
			else
			{
				/* fetch from jquery data store of sheet div */
				arrRows = sheetSelector.data('col' + cur_col);				
			}
			
			/* assuming array is sorted.. */
			max_row = arrRows[arrRows.length - 1];
			min_row = arrRows[0];
			/* IE 8 does not have indexOf so using jquery method inArray as alternative */
			var rowIndex = ('indexOf' in Array.prototype) ? arrRows.indexOf(cur_row): $.inArray(cur_row, arrRows);
						
			if(key == 40 && cur_row < max_row)
			{
				next_row =  arrRows[rowIndex + 1];
			}
			else if(key == 38 && cur_row > min_row)
			{
				prev_row =  arrRows[rowIndex - 1];
			}
			else
			{ 
				break;				
			}		
		}
	}
	if(!foundFocus) /* navigate to next tab index if not found. */
	{
		var next_idx;
		if(key == 38) next_idx = parseInt(cur_elem.attr('tabindex'), 10) - 1;
		else next_idx = parseInt(cur_elem.attr('tabindex'), 10) + 1;
		
		/* look for next navigable field with higher tab index..*/
		var next_input = sheetSelector.find(inputSelector).filter('[data-sheet][data-row][data-col][tabindex=' + next_idx + ']');
		if(next_input.length > 0)
		{
			next_input.focus();
		}
		else
		{	
			/* move to first tab index as last resort. */
			sheetSelector.find(inputSelector).filter('[data-sheet][data-row][data-col][tabindex]:first').focus(); 
		}
	}
	/* IE lack preventDefault so */
	evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
}
;
/*
	Main Calculator JS
*/

(function ($) {
$(document).ready(function() {
    $('.ui-slider-handle').draggable();
  
    window.preventFalseSumbit = 1;
    

  //Prevent Calculator Save when hit enter
  if ($("form[name=calculator] input[type=text]").hasClass("page-calculators")) {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        //console.log("Enter");
        console.log($(this));
        inputvalue = superClean($(this).val(),1);
        slider = $(this).parent().find(".ui-slider");
        slidermax = slider.data().slider.options.max;
        slidermin = slider.data().slider.options.min;  
        
        if (inputvalue > slidermax) {
          $(this).val(slidermax);
          inputvalue = slidermax;
        }
        else if (inputvalue < slidermin) {
          $(this).val(slidermin);
          inputvalue = slidermin;
        }
        slider.slider("value", inputvalue);

        return false;
      }
    });
  }
  
  
  $("form[name=calculator]").submit(function(){
    if($(this).hasClass("OK")) {
      return true;
    }
    else {
      return false;
    }
  });
  
  
  
  $("#save-config").live("click",function(e) {
    e.preventDefault();
    if ($(this).attr("href") == "#") {
      $("form[name=calculator]").addClass("OK").submit();
    }
    //console.log("save clicked");
    //
    //$("form[name=calculator]").addClass("OK").submit();
    
  });
  
  
  $(".jqModal").click(function(e) {
    e.preventDefault();
    $( $(this).attr("href") ).dialog({
      height: 800,
      width: 900,
      modal: true,
      title: "FULL DISCLAIMER",
      show: {
        effect: "transfer",
        duration: 1000
      },
      hide: {
        effect: "transfer",
        duration: 1000
      }
    });
  });
  
  
  
  // Tooltip
  $(".calc-tooltip").hover(
    function () {
      $(this).find("div").stop(true).css("display","none").fadeTo(250,1,function() {});
    },
    function () {
      $(this).find("div").stop(true).css("display","block").fadeTo(100,0,function(){$(this).css("display","none");});
    }
  );
  
	$(".calculator input").click(function() {
	   $(this).select();
	   $(this).attr("autocomplete", "off");
	});
	$(".calculator input").keydown(function(event) {
		// Allow: backspace, delete, tab, escape, and enter
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
			 // Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) || 
			 // Allow: one period (only if input class decimal)
            ($(this).hasClass('decimal') && $(this).val().indexOf('.') === -1 && 
                (event.keyCode == 190 || event.keyCode == 110)
            ) ||
             // Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39)) {

                // If dot, change slider to allow decimal numbers
                if($(this).hasClass('decimal') && $(this).val().indexOf('.') === -1 && 
                 (event.keyCode == 190 || event.keyCode == 110)
                ) {
                    var Slider = $('#' + $(this).attr('id') + '-slider');
                    if(Slider.length > 0) {
                        Slider.slider("option", "step", .01); 
                        var values = Slider.slider("option", "values");
                        Slider.slider("option", "values", values); 

                       console.log(Slider.data('slider'));
                    }
                }
                 
				 // let it happen, don't do anything
				 return;
		}
		else {
			// Ensure that it is a number and stop the keypress
			if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 ))) {
				event.preventDefault(); 
			}   
		}
	});
  $(".calculator .field input").change(function() {
    inputvalue = superClean($(this).val(),1);
    slider = $(this).parent().find(".ui-slider");
    slidermax = slider.data().slider.options.max;
    slidermin = slider.data().slider.options.min;  
    
    if (inputvalue > slidermax) {
      $(this).val(slidermax);
      inputvalue = slidermax;
    }
    else if (inputvalue < slidermin) {
      $(this).val(slidermin);
      inputvalue = slidermin;
    }
    slider.slider("value", inputvalue);
  });
  
	//$(".calculator .field input").attr("readonly","readonly");
	$(".calculator input.total").attr("readonly","readonly");


  /*
  $("#email-friend").click(function(e) {
		e.preventDefault();
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    $('#mask').fadeTo(2000,0.8);
    var winH = $(window).height();
    var winW = $(window).width();
    //$("#modalwindow").css('top',  '20');  
    //$("#modalwindow").css('left', winW/2-$("#modalwindow").width()/2);
    $("#modalwindow").fadeTo(750,1);
    //$('html, body').animate({scrollTop:0}, 1200); 
    
    querystring = "?";
    $("form[name='calculator'] input[type='text']").not($(".total")).each(function( index ) {
      querystring += $(this).attr("name")+'='+superClean($(this).val(), 1)+'&';
    });
    $("form[name='calculator'] select").each(function( index ) {
      querystring += $(this).attr("name")+'='+superClean($(this).val())+'&';
    });
    querystring=querystring.slice(0, - 1);
    var url = [location.protocol, '//', location.host, location.pathname].join('') + querystring;
    $("#sendtofriendurl").val(url);
  })
  
  $("form[name='sendtofriend']").submit(function(e) {
    errors = new Array();
    if($("#yourname").val() == "") {
      errors.push("Please enter your name.");
    }
    if($("#youremail").val() == "") {
      errors.push("Please enter your email address.");
    }
    else if (!isValidEmailAddress($("#youremail").val())) {
      errors.push("Please enter a valid email address.");
    }
    if($("#friendsname").val() == "") {
      errors.push("Please enter your friend's name.");
    }
    if($("#friendsemail").val() == "") {
      errors.push("Please enter your friend's email.");
    }
    else if (!isValidEmailAddress($("#friendsemail").val())) {
      errors.push("Please enter a valid email address for your friend.");
    }
    if (typeof errors[0] !== 'undefined') {
      message ="This form contains errors:\n";
      for(i=0;i<errors.length;i++){
        message += errors[i] + "\n";
      }
      alert(message);
      e.preventDefault();
    }

  });
  */ 
});
})(jQuery);
function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(emailAddress);
};
function superClean(value,mode) {
  mode = typeof mode !== 'undefined' ? mode : 0;
  
  org = value;
  //Get rid of $  
  if (value[0] == "$") {
    value = value.substr(1);
  }
  //Get rid fo Slashed
  value = value.replace(/\//g,'');
  
  if( (mode == 1) || (
        value[0]=="0" ||
        value[0]=="1" || 
        value[0]=="2" ||
        value[0]=="3" ||
        value[0]=="4" ||
        value[0]=="5" ||
        value[0]=="6" ||
        value[0]=="7" ||
        value[0]=="8" ||
        value[0]=="9" 
        )
  ) {
    value = value.replace(/[A-Za-z$-]/g, "");
    if (value[value.length-1] == "%") {
      value=value.slice(0, - 1);
    }
    if (value[value.length-1] == " ") {
      value=value.slice(0, - 1);
    }    
  }
  //console.log(org + " changed to: " + value);
  if (value == "") {
    value = 0;
  }
  return value;
}
roundNum = function(input) {
  output = 0;
  
  if (input < .001) {
    output = "< .001";
  }
  else {
    output = Math.round(input*1000)/1000;
    output = output.toString().split(".");
    output[0] = output[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (typeof output[1] !== 'undefined') {
      output = output[0] + "." + output[1];
    }
    else {
      output = output[0];
    }
  }
  return output;
}
;
jQuery(function($) { $.extend({
    form: function(url, data, method) {
        if (method == null) method = 'POST';
        if (data == null) data = {};

        var form = $('<form>').attr({
            method: method,
            action: url
         }).css({
            display: 'none'
         });

        var addData = function(name, data) {
            if ($.isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                    var value = data[i];
                    addData(name + '[]', value);
                }
            } else if (typeof data === 'object') {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        addData(name + '[' + key + ']', data[key]);
                    }
                }
            } else if (data != null) {
                form.append($('<input>').attr({
                  type: 'hidden',
                  name: String(name),
                  value: String(data)
                }));
            }
        };

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                addData(key, data[key]);
            }
        }

        return form.appendTo('body');
    }
}); });
;
(function ($) {  
  
$(document).ready(function() {
  $("#print-pdf").live("click",function(event) {
    event.preventDefault();
    //console.log(window.printpdf.print());
    pdfname = ((window.location.pathname.split( '/' ))[2].split("."))[0];
        
    
    $.form('/calculators/print-pdf', { 
      html: window.printpdf.print(),
      pdfname : pdfname
    }, 'POST').submit();
        
    
  });
  //Delcare 'Class'
  window.printpdf = [];
  //Implemented by each calc
  window.printpdf.print = function() {};
  
  window.printpdf.generateHTML = function(title, data) {
    //console.log("http://"+document.domain+"/sites/all/modules/calculators/css/print-pdf.css");
    return ""+
        "<html>"+
          "<head>"+
            '<link rel="stylesheet" type="text/css" href="http://'+document.domain+'/sites/all/modules/calculators/css/print-pdf.css">'+
            '<title>' + title + '</title>' +
          "</head>"+
          "<body>"+
          "<img src='http://"+document.domain+"/sites/all/modules/calculators/img/header.jpg'/>"+
            data
          "</body>"+
        "</html>";
  }
  window.printpdf.roundNum = function(input) {
    output = 0;
    
    if (input < .001) {
      output = "&lt; .001";
    }
    else {
      output = Math.round(input*1000)/1000;
      output = output.toString().split(".");
      output[0] = output[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      if (typeof output[1] !== 'undefined') {
        output = output[0] + "." + output[1];
      }
      else {
        output = output[0];
      }
    }
    return output;
  }
  window.printpdf.printCell = function(cell) {
    output = "";
    output += "<div class='label'>";
    output += $(cell).find("label").html();
    output += "</div>";
    output += "<br/>";
    output += "<div class='input'>";
    output += $(cell).find("input").val();
    output += "</div>";
    return output;
  }
  window.printpdf.printSlider = function(id, width) {
    width = typeof width !== 'undefined' ? width : 250;
    
    var slider = $(id);
    var label = slider.parent().find("label").html();
    var input = slider.val();
    var value = window.printpdf.getOffset($(id+"-slider .ui-slider-handle"));
    
    output = "<h3>" + label +"</h3>\n";
    output += window.printpdf.drawTable(
      [[
        //Column 1
        [
          window.printpdf.drawSlider(value, width)
        ],
        //Column 2
        [
          input
        ],
      ]],
      id
      ); 
      
    return output;
  }
  window.printpdf.drawSlider = function(value, width) {
    width = typeof width !== 'undefined' ? width : 250;
    fillwidth = width * value;
  
    var output = ""+
      "<div class='slider' style='width:"+width+"px;'>\n"+   
        "\t<div class='slider-fill' style='width:"+fillwidth+"px;'>\n"+
        "\t</div>\n"+
        "\t<div class='slider-handle' style='left:"+fillwidth+"px;'>\n"+
        "\t</div>\n"+    
      "</div>\n";
    return output;
  }
  
  window.printpdf.drawTable = function(data, idn, classn) {
    idn    = typeof idn !== 'undefined' ? idn : "";
    classn = typeof classn !== 'undefined' ? classn : "";
    cidn   = idn.split("#").join("");
    output = "<table id='"+cidn+"' class='"+classn+"'>\n";
    for (ia = 0; ia < data.length; ia++) {
      output += "\t<tr class='row-"+ia+"'>\n";

      for (ib = 0; ib < data[ia].length; ib++) {
        output += "\t\t<td class='col-"+ib+"'>\n";
        output += data[ia][ib];
        output += "\t\t</td>\n";
      }
      
      output += "\t</tr>\n";
    }
    output += "</table>\n";
    output += "<!-- END TABLE "+ idn +"-->\n";    
    return output;
  }
  window.printpdf.getOffset = function(element) {
      var lft = $(element).css("left")+"";
      if (lft.match("px")) {
          lft = lft.split("px").join("")*1; 
          lft = lft/$(element).parent().width();
      }
      else if (lft.match("%")) {
          lft = lft.split("%").join("")*1;
          lft = lft/100;
      }
      return lft;
  }
  window.printpdf.printOption = function(id) {
    option = $(id + " option:selected").val();
    label  = $(id).parent().find("label").html();
    output = "<h3>" + label + "</h3>";
    output += "<span>"+option+"</span>";
    return output;
  }
  window.printpdf.printTempGauge = function() {
    var value = window.printpdf.getOffset($("#temperature-gauge .thumb"));  
    return window.printpdf.drawTempGauge(value);
  }
  window.printpdf.drawTempGauge = function(value) {
    width = 400;
    fillwidth = width * value;
    
    var output = ""+
      "<div class='temperature-gauge' style='width:"+width+"px;'>\n"+   
        "\t<div class='temp-handle' style='left:"+fillwidth+"px;'>\n"+
        "\t</div>\n"+    
      "</div>\n";
    return output;
  }
  window.printpdf.drawPowerConversion = function(element) {
    wrapper = $(element).clone();
    output = $('<div/>').append($(wrapper).find("h2")).html();
    $(wrapper).find("label").each(function() {
      $(this).replaceWith("<div class='label'>"+ $(this).html() +"</div>");
    });
    $(wrapper).find("input").each(function() {
      $(this).replaceWith("<div class='input'>"+ $(this).val() +"</div>");
    });
    $(wrapper).find("select").each(function() {
      $(this).replaceWith("<div class='select'>"+ $(this).val() +"</div>");
    });    
    $(wrapper).find(".total").remove();
    
    output += window.printpdf.drawTable([
        //Row 1
        [
          //Column 1
          [
            $(wrapper).html()
          ],
          //Column 2
          [
            $('<div/>').append($(element).find(".total").clone()).html()
          ]
        ]
      ]);
      return output;
  }
  
  window.printpdf.isEven = function(n) {  
     return window.printpdf.isNumber(n) && (n % 2 == 0);
  }

  window.printpdf.isOdd = function(n) {
     return window.printpdf.isNumber(n) && (n % 2 == 1);
  }
  window.printpdf.isNumber = function(n){
   return n == parseFloat(n);
  }  
  
});
})(jQuery);
;
/*
	Data Transfer Speed Unit Conversion
*/
(function ($) {
  function commaSeparateNumber(val){
    var val = new String(val);
    if (val.indexOf("e") == -1 ) {
      number = val.split(".");
      while (/(\d+)(\d{3})/.test(number[0].toString())){
        number[0] = number[0].toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
      }
      val = number[0];
      if (typeof(number[1]) !== 'undefined') {
        val = val + "." + number[1];
      } 
    }
    return val;
  }


  $(document).ready(function() {
			var updateto;// = setTimeout(function(){updatevalues()},25);
			function updatevalues(element) {
				id = $(element).attr("ID");
        input = new BigDecimal();
				bits =  new BigDecimal();
				input = getValue($(element).val());
								
	    	switch (id) {
					case "kbits":
						bits = input*1024;
						break;
					case "kbytes":
						bits = input*1024*8;
						break;
					case "mbits":
						bits = input*1024*1024;			
						break;				    	
					case "mbytes":
						bits = input*1024*1024*8;
						break;			
					case "gbits":
						bits = input*1024*1024*1024;
						break;
					case "gbytes":
						bits = input*1024*1024*1024*8;
						break;
					case "tbits":
						bits = input*1024*1024*1024*1024;
						break;
					case "tbytes":
						bits = input*1024*1024*1024*1024*8;
						break;
					case "t1":
					  //T1 = 1.544Mbps
						bits = 1.544*(input*1024*1024);
						break;
					case "t3":
					  //T3 = 44.736Mbps
						bits = 44.736*(input*1024*1024);
						break;
					case "OC3":
					  //OC3 = 155.52Mbps
						bits = 155.52*(input*1024*1024);
						break;
					case "OC12":
					  //OC12 = 622.08Mbps
						bits = 622.08*(input*1024*1024);
						break;
					case "OC24":
					  //OC24 = 1244.16 Mbit/s
						bits = 1244.16*(input*1024*1024);
						break;
					case "OC48":
					  //OC48 = 2.4Gbps
						bits = 2.4*(input*1024*1024*1024);
						break;					
					case "OC192":
					  //OC192 = 9.6Gbps
						bits = 9.6*(input*1024*1024*1024);
						break;
					case "OC768":
					  //OC192 = 40Gbps
						bits = 40*(input*1024*1024*1024);
						break;
					case "etherernet":
					  //etherernet = 10Mb
						bits = 10*(input*1024*1024);
						break;
					case "etherernet1":
					  //etherernet = 100Mb
						bits = 100*(input*1024*1024);
						break;
					case "etherernet2":	
					  //etherernet = 1Gb
						bits = 1*(input*1024*1024*1024);
						break;
				}
				var conversions = new Array();
			  conversions.push(			           
          ['kbits',  bits/1024]
			  );
			  conversions.push(			           
          ['kbytes', bits/1024/8]
			  );				
			  conversions.push(			  
				  ['mbits',  bits/1024/1024]
			  );				
			  conversions.push(
				  ['mbytes', bits/1024/1024/8]
			  );
			  conversions.push(			           
          ['gbits', bits/1024/1024/1024]
			  );
			  conversions.push(			           
          ['gbytes', bits/1024/1024/1024/8]
			  );
			  conversions.push(			           
          ['tbits', bits/1024/1024/1024/1024]
			  );
			  conversions.push(			           
          ['tbytes', bits/1024/1024/1024/1024/8]
			  );
			  conversions.push(			           
          ['t1', bits/1024/1024/1.544]
			  );
			  conversions.push(			           
          ['t3', bits/1024/1024/44.736]
			  );		  
			  conversions.push(			           
          ['OC3', bits/1024/1024/155.52]
			  );				  
			  conversions.push(			           
          ['OC12', bits/1024/1024/622.08]
			  );			  
			  conversions.push(			           
          ['OC12', bits/1024/1024/622.08]
			  );
			  conversions.push(			           
          ['OC24', bits/1024/1024/1244.16]
			  );			  
			  conversions.push(			           
          ['OC24', bits/1024/1024/1244.16]
			  );	
			  conversions.push(			           
          ['OC48', bits/1024/1024/1024/2.4]
			  );	
			  conversions.push(			           
          ['OC192', bits/1024/1024/1024/9.6]
			  );	
			  conversions.push(			           
          ['OC768', bits/1024/1024/1024/40]
			  );
			  conversions.push(			           
          ['etherernet', bits/1024/1024/10]
			  );
			  conversions.push(			           
          ['etherernet1', bits/1024/1024/100]
			  );
			  conversions.push(			           
          ['etherernet2', bits/1024/1024/1024]
			  );				  		  
			  			  			  			  			  
        for (var i=0; i<conversions.length; ++i) {
          $("#"+conversions[i][0]).val( 
            roundNum(
              (conversions[i][1]-0)
            )
          );
        };
				//$("#etherernet2").val((base*0.008388608-0).formatMoney(0, '.', ',') );
				
			}
			
			$(".calculator input").change( function() {
			  updatevalues($(this));
			});
			
			$(".calculator input").keydown(function(event) {
			  //Enter
			  if(event.keyCode == 13) {
			    updatevalues($(this));
			  }
			});			
  });
})(jQuery);
;
(function ($) {
  $(document).ready(function() {
    window.printpdf.print = function() {
      var title = "Print PDF | DATA TRANSFER SPEED UNIT CONVERSION";
      var data = "";
      data += $('<div/>').append($(".body > h1").clone().addClass("main")).html();
      data += $('<div/>').append($(".body p.description").clone()).html();
      data += "<h1>UNIT CONVERSIONS:</h1><br/>";

      // *******************************
      //           Cells
      // *******************************
      //data += "<h2>Selected Values</h2>";
      data += window.printpdf.drawTable([
        //Row 1
        [
          //Column 1
          [
            window.printpdf.printCell($(".quad-field:eq("+0+")"))
          ],
          //Column 2
          [
            window.printpdf.printCell($(".quad-field:eq("+1+")"))
          ],
          //Column 3
          [
            window.printpdf.printCell($(".quad-field:eq("+2+")"))
          ],
          //Column 4
          [
            window.printpdf.printCell($(".quad-field:eq("+3+")"))
          ]
        ],
        //Row 2
        [
          //Column 1
          [
            window.printpdf.printCell($(".quad-field:eq("+4+")"))
          ],
          //Column 2
          [
            window.printpdf.printCell($(".quad-field:eq("+5+")"))
          ],
          //Column 3
          [
            window.printpdf.printCell($(".quad-field:eq("+6+")"))
          ],
          //Column 4
          [
            window.printpdf.printCell($(".quad-field:eq("+7+")"))
          ]
        ],
        //Row 3
        [
          //Column 1
          [
            window.printpdf.printCell($(".quad-field:eq("+8+")"))
          ],
          //Column 2
          [
            window.printpdf.printCell($(".quad-field:eq("+9+")"))
          ],
          //Column 3
          [
            window.printpdf.printCell($(".quad-field:eq("+10+")"))
          ],
          //Column 4
          [
            window.printpdf.printCell($(".quad-field:eq("+11+")"))
          ]
        ],
        //Row 4
        [
          //Column 1
          [
            window.printpdf.printCell($(".quad-field:eq("+12+")"))
          ],
          //Column 2
          [
            window.printpdf.printCell($(".quad-field:eq("+13+")"))
          ],
          //Column 3
          [
            window.printpdf.printCell($(".quad-field:eq("+14+")"))
          ],
          //Column 4
          [
            window.printpdf.printCell($(".quad-field:eq("+15+")"))
          ],
        ],
        //Row 5
        [
          //Column 1
          [
            window.printpdf.printCell($(".quad-field:eq("+16+")"))
          ],
          //Column 2
          [
            window.printpdf.printCell($(".quad-field:eq("+17+")"))
          ],
          //Column 3
          [
            window.printpdf.printCell($(".quad-field:eq("+18+")"))
          ],
          //Column 4
          [
            ""
          ]
        ]
      //Name of Class in PDF output
      ], "#unitconversions");
      
      data += window.printpdf.drawTable([ 
        //Row 1
        [
          //Column 1
          [
            window.printpdf.drawPowerConversion( $(".dual-field:eq(0)") )
          ],
          //Column 2
          [
            window.printpdf.drawPowerConversion( $(".dual-field:eq(1)") )
          ]
        ]
      //Name of Class in PDF output
      ], "#powerconversions");      
      
      return window.printpdf.generateHTML(title,data);
    }
  });
})(jQuery);
;
(function ($) {
  placeStickToolbar = function() {
    if($(window).scrollTop() >= $("body").height()-$("footer.main").height()-$(window).height() - 100 + $("#toolbar").height()) {
      toolbar.css("top",$("body").height()- ($("footer.main").height()+65) - 100 + $("#toolbar").height());
      toolbar.addClass("stop");
    }
    else {
      toolbar.attr("style","");
      toolbar.removeClass("stop");
    }  
  }
  $(document).ready(function() {
    if(!jQuery.browser.mobile && $(window).width() > 640) {
      //SETUP
      toolbar = $(".calculator .toolbar").clone().attr("id","sticky-toolbar");
      $(".calculator .toolbar").css("height",$(".calculator .toolbar").height());
      $(".calculator .toolbar .innerwrap").remove();
      $("body").append(toolbar);
      placeStickToolbar();
      $(window).scroll(function() {
        placeStickToolbar();
      })
    }
  });
})(jQuery);
;
(function ($) {
  $(document).ready(function() {
    //SETUP  
    html = ''+
      '<div id="sendtofriend" class="modalpopup">'+
        '<a href="#" class="close-btn close-x">X</a>'+
        '<div class="innerwrap">'+
          '<h2>Send To a Friend</h2>'+
          '<form name="sendtofriend" action="' + document.URL + '" method="post">'+
          '<input id="sendtofriendurl" type="hidden" name="sendtofriendurl" value=""/>'+
          '<div class="form-item">'+
            '<label>Your Name <span class="form-required">*</span></label>'+
            '<input type="text" name="yourname" id="yourname" class="form-text"/>'+
          '</div>'+
          '<div class="form-item">'+
            '<label>Your Email <span class="form-required">*</span></label>'+
            '<input type="text" name="youremail" id="youremail" class="form-text"/>'+
          '</div>'+
          '<div class="form-item">'+
            '<label>Your Friend\'s Name <span class="form-required">*</span></label>'+
            '<input type="text" name="friendsname" id="friendsname" class="form-text"/>'+
          '</div>'+
          '<div class="form-item">'+
            '<label>Your Friend\'s  Email <span class="form-required">*</span></label>'+
            '<input type="text" name="friendsemail" id="friendsemail" class="form-text"/>'+
          '</div>'+
          '<div class="form-item text-item">'+
            '<label>Message</label>'+
            '<textarea name="message" id="message"> '+
            '</textarea>'+
          '</div>'+
          '<br/><br/>'+
          '<input type="submit" class="button" value="Send"/>'+
          '</form>'+
        '</div>'+
      '</div>';
    $("body").append(html);
    //$("#sendtofriend").draggable();
    
    
    $("#email-friend").click(function(e) {
      var q = $(this).attr("href").split('?')[1];
      if(q != "") {
        q = "?"+q;
      }

      $("#sendtofriend").fadeIn(500);
      $("#sendtofriend #yourname").focus();
      window.overlay.toggleOverlay(100,"on");
      
      
      querystring = "?";
      $("form[name='calculator'] input[type='text']").not($(".total")).each(function( index ) {
        querystring += $(this).attr("name")+'='+superClean($(this).val(), 1)+'&';
      });
      $("form[name='calculator'] select").each(function( index ) {
        querystring += $(this).attr("name")+'='+superClean($(this).val())+'&';
      });
      querystring=querystring.slice(0, - 1);
      var url = [location.protocol, '//', location.host, location.pathname].join('') + querystring;
      $("#sendtofriendurl").val(url);
      
      return false;
    });
    
    $("#sendtofriend .close-btn").click(function() {
      $("#sendtofriend").fadeOut(500);
      window.overlay.toggleOverlay(100,"off");
      return false;
    });
    $("#winoverlay").click(function() {
      $("#sendtofriend").fadeOut(500);
    });
    
    $("form[name='sendtofriend']").submit(function(e) {
      errors = new Array();
      if($("#yourname").val() == "") {
        errors.push("#yourname");
      }
      if($("#youremail").val() == "") {
        errors.push("#youremail");
      }
      else if (!isValidEmailAddress($("#youremail").val())) {
        errors.push("#youremail");
      }
      if($("#friendsname").val() == "") {
        errors.push("#friendsname");
      }
      if($("#friendsemail").val() == "") {
        errors.push("#friendsemail");
      }
      else if (!isValidEmailAddress($("#friendsemail").val())) {
        errors.push("#friendsemail");
      }
      $("form[name='sendtofriend']").find("input,textarea").attr("style","");
      
      if (typeof errors[0] !== 'undefined') {
        message ="This form contains errors:\n";
        for(i=0;i<errors.length;i++){
          //message += errors[i] + "\n";
          $(errors[i]).css("border","2px solid red");
        }
        $("#sendtofriend .innerwrap").effect( "shake" ,10);
        return false;
      }

    });   
    
    
    
  });
})(jQuery);
;
(function ($) {

$(document).ready(function() {

  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      var ga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (ga.trackDomainMode == 2 && isCrossDomain($(this).attr('hostname'), ga.trackCrossDomains)) {
            // Top-level cross domain clicked. document.location is handled by _link internally.
            event.preventDefault();
            _gaq.push(["_link", this.href]);
          }
          else {
            // External link clicked.
            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          }
        }
      }
    });
  });

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
function isCrossDomain(hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
}

})(jQuery);
;
