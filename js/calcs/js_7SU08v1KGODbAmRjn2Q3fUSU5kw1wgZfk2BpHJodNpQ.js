/*
 Copyright (c) 2012 Daniel Trebbien and other contributors
Portions Copyright (c) 2003 STZ-IDA and PTV AG, Karlsruhe, Germany
Portions Copyright (c) 1995-2001 International Business Machines Corporation and others

All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, provided that the above copyright notice(s) and this permission notice appear in all copies of the Software and that both the above copyright notice(s) and this permission notice appear in supporting documentation.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF THIRD PARTY RIGHTS. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR HOLDERS INCLUDED IN THIS NOTICE BE LIABLE FOR ANY CLAIM, OR ANY SPECIAL INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Except as contained in this notice, the name of a copyright holder shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization of the copyright holder.
*/
(function(){var m,k=function(){this.form=this.digits=0;this.lostDigits=!1;this.roundingMode=0;var a=this.DEFAULT_FORM,b=this.DEFAULT_LOSTDIGITS,c=this.DEFAULT_ROUNDINGMODE;if(4==k.arguments.length)a=k.arguments[1],b=k.arguments[2],c=k.arguments[3];else if(3==k.arguments.length)a=k.arguments[1],b=k.arguments[2];else if(2==k.arguments.length)a=k.arguments[1];else if(1!=k.arguments.length)throw"MathContext(): "+k.arguments.length+" arguments given; expected 1 to 4";var d=k.arguments[0];if(d!=this.DEFAULT_DIGITS){if(d<
this.MIN_DIGITS)throw"MathContext(): Digits too small: "+d;if(d>this.MAX_DIGITS)throw"MathContext(): Digits too large: "+d;}if(a!=this.SCIENTIFIC&&a!=this.ENGINEERING&&a!=this.PLAIN)throw"MathContext() Bad form value: "+a;if(!this.isValidRound(c))throw"MathContext(): Bad roundingMode value: "+c;this.digits=d;this.form=a;this.lostDigits=b;this.roundingMode=c};k.prototype.getDigits=function(){return this.digits};k.prototype.getForm=function(){return this.form};k.prototype.getLostDigits=function(){return this.lostDigits};
k.prototype.getRoundingMode=function(){return this.roundingMode};k.prototype.toString=function(){var a=null,b=0,c=null,a=this.form==this.SCIENTIFIC?"SCIENTIFIC":this.form==this.ENGINEERING?"ENGINEERING":"PLAIN",d=this.ROUNDS.length,b=0;a:for(;0<d;d--,b++)if(this.roundingMode==this.ROUNDS[b]){c=this.ROUNDWORDS[b];break a}return"digits="+this.digits+" form="+a+" lostDigits="+(this.lostDigits?"1":"0")+" roundingMode="+c};k.prototype.isValidRound=function(a){var b=0,c=this.ROUNDS.length,b=0;for(;0<c;c--,
b++)if(a==this.ROUNDS[b])return!0;return!1};k.PLAIN=k.prototype.PLAIN=0;k.SCIENTIFIC=k.prototype.SCIENTIFIC=1;k.ENGINEERING=k.prototype.ENGINEERING=2;k.ROUND_CEILING=k.prototype.ROUND_CEILING=2;k.ROUND_DOWN=k.prototype.ROUND_DOWN=1;k.ROUND_FLOOR=k.prototype.ROUND_FLOOR=3;k.ROUND_HALF_DOWN=k.prototype.ROUND_HALF_DOWN=5;k.ROUND_HALF_EVEN=k.prototype.ROUND_HALF_EVEN=6;k.ROUND_HALF_UP=k.prototype.ROUND_HALF_UP=4;k.ROUND_UNNECESSARY=k.prototype.ROUND_UNNECESSARY=7;k.ROUND_UP=k.prototype.ROUND_UP=0;k.prototype.DEFAULT_FORM=
k.prototype.SCIENTIFIC;k.prototype.DEFAULT_DIGITS=9;k.prototype.DEFAULT_LOSTDIGITS=!1;k.prototype.DEFAULT_ROUNDINGMODE=k.prototype.ROUND_HALF_UP;k.prototype.MIN_DIGITS=0;k.prototype.MAX_DIGITS=999999999;k.prototype.ROUNDS=[k.prototype.ROUND_HALF_UP,k.prototype.ROUND_UNNECESSARY,k.prototype.ROUND_CEILING,k.prototype.ROUND_DOWN,k.prototype.ROUND_FLOOR,k.prototype.ROUND_HALF_DOWN,k.prototype.ROUND_HALF_EVEN,k.prototype.ROUND_UP];k.prototype.ROUNDWORDS="ROUND_HALF_UP ROUND_UNNECESSARY ROUND_CEILING ROUND_DOWN ROUND_FLOOR ROUND_HALF_DOWN ROUND_HALF_EVEN ROUND_UP".split(" ");
k.prototype.DEFAULT=new k(k.prototype.DEFAULT_DIGITS,k.prototype.DEFAULT_FORM,k.prototype.DEFAULT_LOSTDIGITS,k.prototype.DEFAULT_ROUNDINGMODE);m=k;var v,G=function(a,b){return(a-a%b)/b},K=function(a){var b=Array(a),c;for(c=0;c<a;++c)b[c]=0;return b},h=function(){this.ind=0;this.form=m.prototype.PLAIN;this.mant=null;this.exp=0;if(0!=h.arguments.length){var a,b,c;1==h.arguments.length?(a=h.arguments[0],b=0,c=a.length):(a=h.arguments[0],b=h.arguments[1],c=h.arguments[2]);"string"==typeof a&&(a=a.split(""));
var d,e,i,f,g,j=0,l=0;e=!1;var k=l=l=j=0,q=0;f=0;0>=c&&this.bad("BigDecimal(): ",a);this.ind=this.ispos;"-"==a[0]?(c--,0==c&&this.bad("BigDecimal(): ",a),this.ind=this.isneg,b++):"+"==a[0]&&(c--,0==c&&this.bad("BigDecimal(): ",a),b++);e=d=!1;i=0;g=f=-1;k=c;j=b;a:for(;0<k;k--,j++){l=a[j];if("0"<=l&&"9">=l){g=j;i++;continue a}if("."==l){0<=f&&this.bad("BigDecimal(): ",a);f=j-b;continue a}if("e"!=l&&"E"!=l){("0">l||"9"<l)&&this.bad("BigDecimal(): ",a);d=!0;g=j;i++;continue a}j-b>c-2&&this.bad("BigDecimal(): ",
a);e=!1;"-"==a[j+1]?(e=!0,j+=2):j="+"==a[j+1]?j+2:j+1;l=c-(j-b);(0==l||9<l)&&this.bad("BigDecimal(): ",a);c=l;l=j;for(;0<c;c--,l++)k=a[l],"0">k&&this.bad("BigDecimal(): ",a),"9"<k?this.bad("BigDecimal(): ",a):q=k-0,this.exp=10*this.exp+q;e&&(this.exp=-this.exp);e=!0;break a}0==i&&this.bad("BigDecimal(): ",a);0<=f&&(this.exp=this.exp+f-i);q=g-1;j=b;a:for(;j<=q;j++)if(l=a[j],"0"==l)b++,f--,i--;else if("."==l)b++,f--;else break a;this.mant=Array(i);l=b;if(d){b=i;j=0;for(;0<b;b--,j++)j==f&&l++,k=a[l],
"9">=k?this.mant[j]=k-0:this.bad("BigDecimal(): ",a),l++}else{b=i;j=0;for(;0<b;b--,j++)j==f&&l++,this.mant[j]=a[l]-0,l++}0==this.mant[0]?(this.ind=this.iszero,0<this.exp&&(this.exp=0),e&&(this.mant=this.ZERO.mant,this.exp=0)):e&&(this.form=m.prototype.SCIENTIFIC,f=this.exp+this.mant.length-1,(f<this.MinExp||f>this.MaxExp)&&this.bad("BigDecimal(): ",a))}},H=function(){var a;if(1==H.arguments.length)a=H.arguments[0];else if(0==H.arguments.length)a=this.plainMC;else throw"abs(): "+H.arguments.length+
" arguments given; expected 0 or 1";return this.ind==this.isneg?this.negate(a):this.plus(a)},w=function(){var a;if(2==w.arguments.length)a=w.arguments[1];else if(1==w.arguments.length)a=this.plainMC;else throw"add(): "+w.arguments.length+" arguments given; expected 1 or 2";var b=w.arguments[0],c,d,e,i,f,g,j,l=0;d=l=0;var l=null,k=l=0,q=0,t=0,s=0,n=0;a.lostDigits&&this.checkdigits(b,a.digits);c=this;if(0==c.ind&&a.form!=m.prototype.PLAIN)return b.plus(a);if(0==b.ind&&a.form!=m.prototype.PLAIN)return c.plus(a);
d=a.digits;0<d&&(c.mant.length>d&&(c=this.clone(c).round(a)),b.mant.length>d&&(b=this.clone(b).round(a)));e=new h;i=c.mant;f=c.mant.length;g=b.mant;j=b.mant.length;if(c.exp==b.exp)e.exp=c.exp;else if(c.exp>b.exp){l=f+c.exp-b.exp;if(l>=j+d+1&&0<d)return e.mant=i,e.exp=c.exp,e.ind=c.ind,f<d&&(e.mant=this.extend(c.mant,d),e.exp-=d-f),e.finish(a,!1);e.exp=b.exp;l>d+1&&0<d&&(l=l-d-1,j-=l,e.exp+=l,l=d+1);l>f&&(f=l)}else{l=j+b.exp-c.exp;if(l>=f+d+1&&0<d)return e.mant=g,e.exp=b.exp,e.ind=b.ind,j<d&&(e.mant=
this.extend(b.mant,d),e.exp-=d-j),e.finish(a,!1);e.exp=c.exp;l>d+1&&0<d&&(l=l-d-1,f-=l,e.exp+=l,l=d+1);l>j&&(j=l)}e.ind=c.ind==this.iszero?this.ispos:c.ind;if((c.ind==this.isneg?1:0)==(b.ind==this.isneg?1:0))d=1;else{do{d=-1;do if(b.ind!=this.iszero)if(f<j||c.ind==this.iszero)l=i,i=g,g=l,l=f,f=j,j=l,e.ind=-e.ind;else if(!(f>j)){k=l=0;q=i.length-1;t=g.length-1;c:for(;;){if(l<=q)s=i[l];else{if(k>t){if(a.form!=m.prototype.PLAIN)return this.ZERO;break c}s=0}n=k<=t?g[k]:0;if(s!=n){s<n&&(l=i,i=g,g=l,l=
f,f=j,j=l,e.ind=-e.ind);break c}l++;k++}}while(0)}while(0)}e.mant=this.byteaddsub(i,f,g,j,d,!1);return e.finish(a,!1)},x=function(){var a;if(2==x.arguments.length)a=x.arguments[1];else if(1==x.arguments.length)a=this.plainMC;else throw"compareTo(): "+x.arguments.length+" arguments given; expected 1 or 2";var b=x.arguments[0],c=0,c=0;a.lostDigits&&this.checkdigits(b,a.digits);if(this.ind==b.ind&&this.exp==b.exp){c=this.mant.length;if(c<b.mant.length)return-this.ind;if(c>b.mant.length)return this.ind;
if(c<=a.digits||0==a.digits){a=c;c=0;for(;0<a;a--,c++){if(this.mant[c]<b.mant[c])return-this.ind;if(this.mant[c]>b.mant[c])return this.ind}return 0}}else{if(this.ind<b.ind)return-1;if(this.ind>b.ind)return 1}b=this.clone(b);b.ind=-b.ind;return this.add(b,a).ind},p=function(){var a,b=-1;if(2==p.arguments.length)a="number"==typeof p.arguments[1]?new m(0,m.prototype.PLAIN,!1,p.arguments[1]):p.arguments[1];else if(3==p.arguments.length){b=p.arguments[1];if(0>b)throw"divide(): Negative scale: "+b;a=new m(0,
m.prototype.PLAIN,!1,p.arguments[2])}else if(1==p.arguments.length)a=this.plainMC;else throw"divide(): "+p.arguments.length+" arguments given; expected between 1 and 3";return this.dodivide("D",p.arguments[0],a,b)},y=function(){var a;if(2==y.arguments.length)a=y.arguments[1];else if(1==y.arguments.length)a=this.plainMC;else throw"divideInteger(): "+y.arguments.length+" arguments given; expected 1 or 2";return this.dodivide("I",y.arguments[0],a,0)},z=function(){var a;if(2==z.arguments.length)a=z.arguments[1];
else if(1==z.arguments.length)a=this.plainMC;else throw"max(): "+z.arguments.length+" arguments given; expected 1 or 2";var b=z.arguments[0];return 0<=this.compareTo(b,a)?this.plus(a):b.plus(a)},A=function(){var a;if(2==A.arguments.length)a=A.arguments[1];else if(1==A.arguments.length)a=this.plainMC;else throw"min(): "+A.arguments.length+" arguments given; expected 1 or 2";var b=A.arguments[0];return 0>=this.compareTo(b,a)?this.plus(a):b.plus(a)},B=function(){var a;if(2==B.arguments.length)a=B.arguments[1];
else if(1==B.arguments.length)a=this.plainMC;else throw"multiply(): "+B.arguments.length+" arguments given; expected 1 or 2";var b=B.arguments[0],c,d,e,i=e=null,f,g=0,j,l=0,k=0;a.lostDigits&&this.checkdigits(b,a.digits);c=this;d=0;e=a.digits;0<e?(c.mant.length>e&&(c=this.clone(c).round(a)),b.mant.length>e&&(b=this.clone(b).round(a))):(0<c.exp&&(d+=c.exp),0<b.exp&&(d+=b.exp));c.mant.length<b.mant.length?(e=c.mant,i=b.mant):(e=b.mant,i=c.mant);f=e.length+i.length-1;g=9<e[0]*i[0]?f+1:f;j=new h;var g=
this.createArrayWithZeros(g),m=e.length,l=0;for(;0<m;m--,l++)k=e[l],0!=k&&(g=this.byteaddsub(g,g.length,i,f,k,!0)),f--;j.ind=c.ind*b.ind;j.exp=c.exp+b.exp-d;j.mant=0==d?g:this.extend(g,g.length+d);return j.finish(a,!1)},I=function(){var a;if(1==I.arguments.length)a=I.arguments[0];else if(0==I.arguments.length)a=this.plainMC;else throw"negate(): "+I.arguments.length+" arguments given; expected 0 or 1";var b;a.lostDigits&&this.checkdigits(null,a.digits);b=this.clone(this);b.ind=-b.ind;return b.finish(a,
!1)},J=function(){var a;if(1==J.arguments.length)a=J.arguments[0];else if(0==J.arguments.length)a=this.plainMC;else throw"plus(): "+J.arguments.length+" arguments given; expected 0 or 1";a.lostDigits&&this.checkdigits(null,a.digits);return a.form==m.prototype.PLAIN&&this.form==m.prototype.PLAIN&&(this.mant.length<=a.digits||0==a.digits)?this:this.clone(this).finish(a,!1)},C=function(){var a;if(2==C.arguments.length)a=C.arguments[1];else if(1==C.arguments.length)a=this.plainMC;else throw"pow(): "+
C.arguments.length+" arguments given; expected 1 or 2";var b=C.arguments[0],c,d,e,i=e=0,f,g=0;a.lostDigits&&this.checkdigits(b,a.digits);c=b.intcheck(this.MinArg,this.MaxArg);d=this;e=a.digits;if(0==e){if(b.ind==this.isneg)throw"pow(): Negative power: "+b.toString();e=0}else{if(b.mant.length+b.exp>e)throw"pow(): Too many digits: "+b.toString();d.mant.length>e&&(d=this.clone(d).round(a));i=b.mant.length+b.exp;e=e+i+1}e=new m(e,a.form,!1,a.roundingMode);i=this.ONE;if(0==c)return i;0>c&&(c=-c);f=!1;
g=1;a:for(;;g++){c<<=1;0>c&&(f=!0,i=i.multiply(d,e));if(31==g)break a;if(!f)continue a;i=i.multiply(i,e)}0>b.ind&&(i=this.ONE.divide(i,e));return i.finish(a,!0)},D=function(){var a;if(2==D.arguments.length)a=D.arguments[1];else if(1==D.arguments.length)a=this.plainMC;else throw"remainder(): "+D.arguments.length+" arguments given; expected 1 or 2";return this.dodivide("R",D.arguments[0],a,-1)},E=function(){var a;if(2==E.arguments.length)a=E.arguments[1];else if(1==E.arguments.length)a=this.plainMC;
else throw"subtract(): "+E.arguments.length+" arguments given; expected 1 or 2";var b=E.arguments[0];a.lostDigits&&this.checkdigits(b,a.digits);b=this.clone(b);b.ind=-b.ind;return this.add(b,a)},r=function(){var a,b,c,d;if(6==r.arguments.length)a=r.arguments[2],b=r.arguments[3],c=r.arguments[4],d=r.arguments[5];else if(2==r.arguments.length)b=a=-1,c=m.prototype.SCIENTIFIC,d=this.ROUND_HALF_UP;else throw"format(): "+r.arguments.length+" arguments given; expected 2 or 6";var e=r.arguments[0],i=r.arguments[1],
f,g=0,g=g=0,j=null,l=j=g=0;f=0;g=null;l=j=0;(-1>e||0==e)&&this.badarg("format",1,e);-1>i&&this.badarg("format",2,i);(-1>a||0==a)&&this.badarg("format",3,a);-1>b&&this.badarg("format",4,b);c!=m.prototype.SCIENTIFIC&&c!=m.prototype.ENGINEERING&&(-1==c?c=m.prototype.SCIENTIFIC:this.badarg("format",5,c));if(d!=this.ROUND_HALF_UP)try{-1==d?d=this.ROUND_HALF_UP:new m(9,m.prototype.SCIENTIFIC,!1,d)}catch(h){this.badarg("format",6,d)}f=this.clone(this);-1==b?f.form=m.prototype.PLAIN:f.ind==this.iszero?f.form=
m.prototype.PLAIN:(g=f.exp+f.mant.length,f.form=g>b?c:-5>g?c:m.prototype.PLAIN);if(0<=i)a:for(;;){f.form==m.prototype.PLAIN?g=-f.exp:f.form==m.prototype.SCIENTIFIC?g=f.mant.length-1:(g=(f.exp+f.mant.length-1)%3,0>g&&(g=3+g),g++,g=g>=f.mant.length?0:f.mant.length-g);if(g==i)break a;if(g<i){j=this.extend(f.mant,f.mant.length+i-g);f.mant=j;f.exp-=i-g;if(f.exp<this.MinExp)throw"format(): Exponent Overflow: "+f.exp;break a}g-=i;if(g>f.mant.length){f.mant=this.ZERO.mant;f.ind=this.iszero;f.exp=0;continue a}j=
f.mant.length-g;l=f.exp;f.round(j,d);if(f.exp-l==g)break a}b=f.layout();if(0<e){c=b.length;f=0;a:for(;0<c;c--,f++){if("."==b[f])break a;if("E"==b[f])break a}f>e&&this.badarg("format",1,e);if(f<e){g=Array(b.length+e-f);e-=f;j=0;for(;0<e;e--,j++)g[j]=" ";this.arraycopy(b,0,g,j,b.length);b=g}}if(0<a){e=b.length-1;f=b.length-1;a:for(;0<e;e--,f--)if("E"==b[f])break a;if(0==f){g=Array(b.length+a+2);this.arraycopy(b,0,g,0,b.length);a+=2;j=b.length;for(;0<a;a--,j++)g[j]=" ";b=g}else if(l=b.length-f-2,l>a&&
this.badarg("format",3,a),l<a){g=Array(b.length+a-l);this.arraycopy(b,0,g,0,f+2);a-=l;j=f+2;for(;0<a;a--,j++)g[j]="0";this.arraycopy(b,f+2,g,j,l);b=g}}return b.join("")},F=function(){var a;if(2==F.arguments.length)a=F.arguments[1];else if(1==F.arguments.length)a=this.ROUND_UNNECESSARY;else throw"setScale(): "+F.arguments.length+" given; expected 1 or 2";var b=F.arguments[0],c,d;c=c=0;c=this.scale();if(c==b&&this.form==m.prototype.PLAIN)return this;d=this.clone(this);if(c<=b)c=0==c?d.exp+b:b-c,d.mant=
this.extend(d.mant,d.mant.length+c),d.exp=-b;else{if(0>b)throw"setScale(): Negative scale: "+b;c=d.mant.length-(c-b);d=d.round(c,a);d.exp!=-b&&(d.mant=this.extend(d.mant,d.mant.length+1),d.exp-=1)}d.form=m.prototype.PLAIN;return d};v=function(){var a,b=0,c=0;a=Array(190);b=0;a:for(;189>=b;b++){c=b-90;if(0<=c){a[b]=c%10;h.prototype.bytecar[b]=G(c,10);continue a}c+=100;a[b]=c%10;h.prototype.bytecar[b]=G(c,10)-10}return a};var u=function(){var a,b;if(2==u.arguments.length)a=u.arguments[0],b=u.arguments[1];
else if(1==u.arguments.length)b=u.arguments[0],a=b.digits,b=b.roundingMode;else throw"round(): "+u.arguments.length+" arguments given; expected 1 or 2";var c,d,e=!1,i=0,f;c=null;c=this.mant.length-a;if(0>=c)return this;this.exp+=c;c=this.ind;d=this.mant;0<a?(this.mant=Array(a),this.arraycopy(d,0,this.mant,0,a),e=!0,i=d[a]):(this.mant=this.ZERO.mant,this.ind=this.iszero,e=!1,i=0==a?d[0]:0);f=0;if(b==this.ROUND_HALF_UP)5<=i&&(f=c);else if(b==this.ROUND_UNNECESSARY){if(!this.allzero(d,a))throw"round(): Rounding necessary";
}else if(b==this.ROUND_HALF_DOWN)5<i?f=c:5==i&&(this.allzero(d,a+1)||(f=c));else if(b==this.ROUND_HALF_EVEN)5<i?f=c:5==i&&(this.allzero(d,a+1)?1==this.mant[this.mant.length-1]%2&&(f=c):f=c);else if(b!=this.ROUND_DOWN)if(b==this.ROUND_UP)this.allzero(d,a)||(f=c);else if(b==this.ROUND_CEILING)0<c&&(this.allzero(d,a)||(f=c));else if(b==this.ROUND_FLOOR)0>c&&(this.allzero(d,a)||(f=c));else throw"round(): Bad round value: "+b;0!=f&&(this.ind==this.iszero?(this.mant=this.ONE.mant,this.ind=f):(this.ind==
this.isneg&&(f=-f),c=this.byteaddsub(this.mant,this.mant.length,this.ONE.mant,1,f,e),c.length>this.mant.length?(this.exp++,this.arraycopy(c,0,this.mant,0,this.mant.length)):this.mant=c));if(this.exp>this.MaxExp)throw"round(): Exponent Overflow: "+this.exp;return this};h.prototype.div=G;h.prototype.arraycopy=function(a,b,c,d,e){var i;if(d>b)for(i=e-1;0<=i;--i)c[i+d]=a[i+b];else for(i=0;i<e;++i)c[i+d]=a[i+b]};h.prototype.createArrayWithZeros=K;h.prototype.abs=H;h.prototype.add=w;h.prototype.compareTo=
x;h.prototype.divide=p;h.prototype.divideInteger=y;h.prototype.max=z;h.prototype.min=A;h.prototype.multiply=B;h.prototype.negate=I;h.prototype.plus=J;h.prototype.pow=C;h.prototype.remainder=D;h.prototype.subtract=E;h.prototype.equals=function(a){var b=0,c=null,d=null;if(null==a||!(a instanceof h)||this.ind!=a.ind)return!1;if(this.mant.length==a.mant.length&&this.exp==a.exp&&this.form==a.form){c=this.mant.length;b=0;for(;0<c;c--,b++)if(this.mant[b]!=a.mant[b])return!1}else{c=this.layout();d=a.layout();
if(c.length!=d.length)return!1;a=c.length;b=0;for(;0<a;a--,b++)if(c[b]!=d[b])return!1}return!0};h.prototype.format=r;h.prototype.intValueExact=function(){var a,b=0,c,d=0;a=0;if(this.ind==this.iszero)return 0;a=this.mant.length-1;if(0>this.exp){a+=this.exp;if(!this.allzero(this.mant,a+1))throw"intValueExact(): Decimal part non-zero: "+this.toString();if(0>a)return 0;b=0}else{if(9<this.exp+a)throw"intValueExact(): Conversion overflow: "+this.toString();b=this.exp}c=0;var e=a+b,d=0;for(;d<=e;d++)c*=
10,d<=a&&(c+=this.mant[d]);if(9==a+b&&(a=G(c,1E9),a!=this.mant[0])){if(-2147483648==c&&this.ind==this.isneg&&2==this.mant[0])return c;throw"intValueExact(): Conversion overflow: "+this.toString();}return this.ind==this.ispos?c:-c};h.prototype.movePointLeft=function(a){var b;b=this.clone(this);b.exp-=a;return b.finish(this.plainMC,!1)};h.prototype.movePointRight=function(a){var b;b=this.clone(this);b.exp+=a;return b.finish(this.plainMC,!1)};h.prototype.scale=function(){return 0<=this.exp?0:-this.exp};
h.prototype.setScale=F;h.prototype.signum=function(){return this.ind};h.prototype.toString=function(){return this.layout().join("")};h.prototype.layout=function(){var a,b=0,b=null,c=0,d=0;a=0;var d=null,e,b=0;a=Array(this.mant.length);c=this.mant.length;b=0;for(;0<c;c--,b++)a[b]=this.mant[b]+"";if(this.form!=m.prototype.PLAIN){b="";this.ind==this.isneg&&(b+="-");c=this.exp+a.length-1;if(this.form==m.prototype.SCIENTIFIC)b+=a[0],1<a.length&&(b+="."),b+=a.slice(1).join("");else if(d=c%3,0>d&&(d=3+d),
c-=d,d++,d>=a.length){b+=a.join("");for(a=d-a.length;0<a;a--)b+="0"}else b+=a.slice(0,d).join(""),b=b+"."+a.slice(d).join("");0!=c&&(0>c?(a="-",c=-c):a="+",b+="E",b+=a,b+=c);return b.split("")}if(0==this.exp){if(0<=this.ind)return a;d=Array(a.length+1);d[0]="-";this.arraycopy(a,0,d,1,a.length);return d}c=this.ind==this.isneg?1:0;e=this.exp+a.length;if(1>e){b=c+2-this.exp;d=Array(b);0!=c&&(d[0]="-");d[c]="0";d[c+1]=".";var i=-e,b=c+2;for(;0<i;i--,b++)d[b]="0";this.arraycopy(a,0,d,c+2-e,a.length);return d}if(e>
a.length){d=Array(c+e);0!=c&&(d[0]="-");this.arraycopy(a,0,d,c,a.length);e-=a.length;b=c+a.length;for(;0<e;e--,b++)d[b]="0";return d}b=c+1+a.length;d=Array(b);0!=c&&(d[0]="-");this.arraycopy(a,0,d,c,e);d[c+e]=".";this.arraycopy(a,e,d,c+e+1,a.length-e);return d};h.prototype.intcheck=function(a,b){var c;c=this.intValueExact();if(c<a||c>b)throw"intcheck(): Conversion overflow: "+c;return c};h.prototype.dodivide=function(a,b,c,d){var e,i,f,g,j,l,k,q,t,s=0,n=0,p=0;i=i=n=n=n=0;e=null;e=e=0;e=null;c.lostDigits&&
this.checkdigits(b,c.digits);e=this;if(0==b.ind)throw"dodivide(): Divide by 0";if(0==e.ind)return c.form!=m.prototype.PLAIN?this.ZERO:-1==d?e:e.setScale(d);i=c.digits;0<i?(e.mant.length>i&&(e=this.clone(e).round(c)),b.mant.length>i&&(b=this.clone(b).round(c))):(-1==d&&(d=e.scale()),i=e.mant.length,d!=-e.exp&&(i=i+d+e.exp),i=i-(b.mant.length-1)-b.exp,i<e.mant.length&&(i=e.mant.length),i<b.mant.length&&(i=b.mant.length));f=e.exp-b.exp+e.mant.length-b.mant.length;if(0>f&&"D"!=a)return"I"==a?this.ZERO:
this.clone(e).finish(c,!1);g=new h;g.ind=e.ind*b.ind;g.exp=f;g.mant=this.createArrayWithZeros(i+1);j=i+i+1;f=this.extend(e.mant,j);l=j;k=b.mant;q=j;t=10*k[0]+1;1<k.length&&(t+=k[1]);j=0;a:for(;;){s=0;b:for(;;){if(l<q)break b;if(l==q){c:do{var r=l,n=0;for(;0<r;r--,n++){p=n<k.length?k[n]:0;if(f[n]<p)break b;if(f[n]>p)break c}s++;g.mant[j]=s;j++;f[0]=0;break a}while(0);n=f[0]}else n=10*f[0],1<l&&(n+=f[1]);n=G(10*n,t);0==n&&(n=1);s+=n;f=this.byteaddsub(f,l,k,q,-n,!0);if(0!=f[0])continue b;p=l-2;n=0;c:for(;n<=
p;n++){if(0!=f[n])break c;l--}if(0==n)continue b;this.arraycopy(f,n,f,0,l)}if(0!=j||0!=s){g.mant[j]=s;j++;if(j==i+1)break a;if(0==f[0])break a}if(0<=d&&-g.exp>d)break a;if("D"!=a&&0>=g.exp)break a;g.exp-=1;q--}0==j&&(j=1);if("I"==a||"R"==a){if(j+g.exp>i)throw"dodivide(): Integer overflow";if("R"==a){do{if(0==g.mant[0])return this.clone(e).finish(c,!1);if(0==f[0])return this.ZERO;g.ind=e.ind;i=i+i+1-e.mant.length;g.exp=g.exp-i+e.exp;i=l;n=i-1;b:for(;1<=n&&g.exp<e.exp&&g.exp<b.exp;n--){if(0!=f[n])break b;
i--;g.exp+=1}i<f.length&&(e=Array(i),this.arraycopy(f,0,e,0,i),f=e);g.mant=f;return g.finish(c,!1)}while(0)}}else 0!=f[0]&&(e=g.mant[j-1],0==e%5&&(g.mant[j-1]=e+1));if(0<=d)return j!=g.mant.length&&(g.exp-=g.mant.length-j),e=g.mant.length-(-g.exp-d),g.round(e,c.roundingMode),g.exp!=-d&&(g.mant=this.extend(g.mant,g.mant.length+1),g.exp-=1),g.finish(c,!0);if(j==g.mant.length)g.round(c);else{if(0==g.mant[0])return this.ZERO;e=Array(j);this.arraycopy(g.mant,0,e,0,j);g.mant=e}return g.finish(c,!0)};h.prototype.bad=
function(a,b){throw a+"Not a number: "+b;};h.prototype.badarg=function(a,b,c){throw"Bad argument "+b+" to "+a+": "+c;};h.prototype.extend=function(a,b){var c;if(a.length==b)return a;c=K(b);this.arraycopy(a,0,c,0,a.length);return c};h.prototype.byteaddsub=function(a,b,c,d,e,i){var f,g,j,h,k,m,p=0;f=m=0;f=a.length;g=c.length;b-=1;h=j=d-1;h<b&&(h=b);d=null;i&&h+1==f&&(d=a);null==d&&(d=this.createArrayWithZeros(h+1));k=!1;1==e?k=!0:-1==e&&(k=!0);m=0;p=h;a:for(;0<=p;p--){0<=b&&(b<f&&(m+=a[b]),b--);0<=
j&&(j<g&&(m=k?0<e?m+c[j]:m-c[j]:m+c[j]*e),j--);if(10>m&&0<=m){do{d[p]=m;m=0;continue a}while(0)}m+=90;d[p]=this.bytedig[m];m=this.bytecar[m]}if(0==m)return d;c=null;i&&h+2==a.length&&(c=a);null==c&&(c=Array(h+2));c[0]=m;a=h+1;f=0;for(;0<a;a--,f++)c[f+1]=d[f];return c};h.prototype.diginit=v;h.prototype.clone=function(a){var b;b=new h;b.ind=a.ind;b.exp=a.exp;b.form=a.form;b.mant=a.mant;return b};h.prototype.checkdigits=function(a,b){if(0!=b){if(this.mant.length>b&&!this.allzero(this.mant,b))throw"Too many digits: "+
this.toString();if(null!=a&&a.mant.length>b&&!this.allzero(a.mant,b))throw"Too many digits: "+a.toString();}};h.prototype.round=u;h.prototype.allzero=function(a,b){var c=0;0>b&&(b=0);var d=a.length-1,c=b;for(;c<=d;c++)if(0!=a[c])return!1;return!0};h.prototype.finish=function(a,b){var c=0,d=0,e=null,c=d=0;0!=a.digits&&this.mant.length>a.digits&&this.round(a);if(b&&a.form!=m.prototype.PLAIN){c=this.mant.length;d=c-1;a:for(;1<=d;d--){if(0!=this.mant[d])break a;c--;this.exp++}c<this.mant.length&&(e=Array(c),
this.arraycopy(this.mant,0,e,0,c),this.mant=e)}this.form=m.prototype.PLAIN;c=this.mant.length;d=0;for(;0<c;c--,d++)if(0!=this.mant[d]){0<d&&(e=Array(this.mant.length-d),this.arraycopy(this.mant,d,e,0,this.mant.length-d),this.mant=e);d=this.exp+this.mant.length;if(0<d){if(d>a.digits&&0!=a.digits&&(this.form=a.form),d-1<=this.MaxExp)return this}else-5>d&&(this.form=a.form);d--;if(d<this.MinExp||d>this.MaxExp){b:do{if(this.form==m.prototype.ENGINEERING&&(c=d%3,0>c&&(c=3+c),d-=c,d>=this.MinExp&&d<=this.MaxExp))break b;
throw"finish(): Exponent Overflow: "+d;}while(0)}return this}this.ind=this.iszero;if(a.form!=m.prototype.PLAIN)this.exp=0;else if(0<this.exp)this.exp=0;else if(this.exp<this.MinExp)throw"finish(): Exponent Overflow: "+this.exp;this.mant=this.ZERO.mant;return this};h.prototype.isGreaterThan=function(a){return 0<this.compareTo(a)};h.prototype.isLessThan=function(a){return 0>this.compareTo(a)};h.prototype.isGreaterThanOrEqualTo=function(a){return 0<=this.compareTo(a)};h.prototype.isLessThanOrEqualTo=
function(a){return 0>=this.compareTo(a)};h.prototype.isPositive=function(){return 0<this.compareTo(h.prototype.ZERO)};h.prototype.isNegative=function(){return 0>this.compareTo(h.prototype.ZERO)};h.prototype.isZero=function(){return this.equals(h.prototype.ZERO)};h.ROUND_CEILING=h.prototype.ROUND_CEILING=m.prototype.ROUND_CEILING;h.ROUND_DOWN=h.prototype.ROUND_DOWN=m.prototype.ROUND_DOWN;h.ROUND_FLOOR=h.prototype.ROUND_FLOOR=m.prototype.ROUND_FLOOR;h.ROUND_HALF_DOWN=h.prototype.ROUND_HALF_DOWN=m.prototype.ROUND_HALF_DOWN;
h.ROUND_HALF_EVEN=h.prototype.ROUND_HALF_EVEN=m.prototype.ROUND_HALF_EVEN;h.ROUND_HALF_UP=h.prototype.ROUND_HALF_UP=m.prototype.ROUND_HALF_UP;h.ROUND_UNNECESSARY=h.prototype.ROUND_UNNECESSARY=m.prototype.ROUND_UNNECESSARY;h.ROUND_UP=h.prototype.ROUND_UP=m.prototype.ROUND_UP;h.prototype.ispos=1;h.prototype.iszero=0;h.prototype.isneg=-1;h.prototype.MinExp=-999999999;h.prototype.MaxExp=999999999;h.prototype.MinArg=-999999999;h.prototype.MaxArg=999999999;h.prototype.plainMC=new m(0,m.prototype.PLAIN);
h.prototype.bytecar=Array(190);h.prototype.bytedig=v();h.ZERO=h.prototype.ZERO=new h("0");h.ONE=h.prototype.ONE=new h("1");h.TEN=h.prototype.TEN=new h("10");v=h;"function"===typeof define&&null!=define.amd?define({BigDecimal:v,MathContext:m}):"object"===typeof this&&(this.BigDecimal=v,this.MathContext=m)}).call(this);

;
(function ($) {
  homepageslider = new Object();
  /********************************
               Properties
   ********************************/
  homepageslider.timeout = 0;
  homepageslider.slides  = 0;
  homepageslider.selectedindex = 0;
  homepageslider.running = false;
  homepageslider.blocked = false;
  homepageslider.images = [];
  
  
  /********************************
               Methods
   ********************************/
  homepageslider.loadSlide    = function(index) {};
  homepageslider.setUp        = function(){};
  homepageslider.resetSlide   = function(index){};
  homepageslider.hideSlide    = function(index,direction,time,callback){};
  homepageslider.queueSlide   = function(index,direction,time,callback){};
  homepageslider.showSlide    = function(index,time,callback){};
  homepageslider.rotateSlides = function(direction){};
  homepageslider.getSlideNum  = function(index){};
  homepageslider.getOWidth    = function(img){};
  homepageslider.resetTimer   = function(img){};
  homepageslider.imgScale     = function(){};
  
  
  /********************************
               Implementation
   ********************************/  
  homepageslider.resetTimer = function() {
    window.clearTimeout(homepageslider.timeout)
    
    homepageslider.timeout = window.setInterval(function() {
      if(!homepageslider.blocked && !homepageslider.running) {
        homepageslider.rotateSlides('right');
      }
    },8000);
    
  }
  homepageslider.resetSlide = function(index) {
    var slide = $(".homepageslider-slide:eq("+index+")");
    $(slide).attr("style","");
    $(slide).find("div").attr("style","");
    $(".homepageslider-slide").attr("style","");
  }
  homepageslider.getSlideNum = function(index) {
    correctedindex = index;
    
    
    if (index < 0) {
      correctedindex = homepageslider.slides + (index+1);
    }
    else if (index > homepageslider.slides) {
      correctedindex = (index) - homepageslider.slides - 1;
    }
    /*
    if (index == 0) {
      correctedindex = homepageslider.slides;
    }
    else if (index < 0) {
      correctedindex = homepageslider.slides - (index+1);
    }
    else if (index == homepageslider.slides) {
      correctedindex = 0;
    }
    else if (index > homepageslider.slides) {
      correctedindex = index - homepageslider.slides;
    }
    */  
    //console.log(index + " to " + correctedindex + " out of " + homepageslider.slides);
    return correctedindex;
  }
  homepageslider.getOWidth = function(image) {
    src = $(image).attr("src");
    /*
    var img = new Image();
    var width = -1;
    img.onload = function() {
      return this.width; 
    }
    img.src = $(image).attr('src');
    */
    for (i =0; i < homepageslider.images.length; i++) {
      if (homepageslider.images[i][0] == src) {
        return homepageslider.images[i][1];
      }
    }
  }
  homepageslider.imgScale = function() {
    width = $(window).width();
    if (width >= 1400) {
      return .7;
    }
    else if (width < 1400 && width > 1024) {
      scale = 1400-1024;
      percentage = (width-1024)/scale;
      percentage = (1-percentage) * .5;
      //console.log(.7 - percentage);
      return .7 - percentage;
    }
    else {
      return .2;
    }
    
  }
  homepageslider.queueSlide = function(index,direction,time,callback) {
    var slide           = $(".homepageslider-slide:eq("+index+")");
    var slideGraphic    = $(slide).find(".graphic");
    var slideGraphicImg = $(slideGraphic).find("img");
    var slideContent    = $(slide).find(".content");
    var callback = typeof callback !== 'undefined' ? callback : function(){};
    
    //$(slide).fadeIn(0);
    $(slide).css("z-index","2");
    if (direction == "left") {
      $(slide).animate({
        left: 0 + $(slideGraphic).width()/1.25
      },time);
      
      $(slideContent).animate({
        left : 0,
        opacity: 0
      },time*.5)
      
      $(slideGraphic).animate({
        left : 0,
        opacity : .4
      },time)      
    }
    else {
      $(slide).animate({
        left: $(window).width() - $(slideGraphic).width()/1.25
      },time);
      
      $(slideGraphic).animate({
          left : $(slide).width() - $(slideGraphic).width(),
          opacity : .4
      },time);
      
      $(slideContent).animate({
        opacity: 0
      },time*.5)    
    }
    
    //Shared Animations
    $(slideGraphicImg).animate({
        width: homepageslider.getOWidth(slideGraphicImg) *homepageslider.imgScale()
    },time);
    
    window.setTimeout(function() {
      $(slideGraphicImg).addClass("clickable").click(function() {
        homepageslider.resetTimer();
        homepageslider.rotateSlides(direction);
      });
      
      callback();
    },time)
  }
  homepageslider.hideSlide = function(index,direction,time,callback) {
    var slide           = $(".homepageslider-slide:eq("+index+")");
    var slideGraphic    = $(slide).find(".graphic");
    var slideGraphicImg = $(slideGraphic).find("img");
    var slideContent    = $(slide).find(".content");
    var callback = typeof callback !== 'undefined' ? callback : function(){};
    
    $(slide).css("z-index","1");
    $(slideGraphicImg).removeClass("clickable").unbind("click");
    $(slideGraphic).css({
      opacity: .4
    });
    $(slideGraphicImg).css({
      width : homepageslider.getOWidth(slideGraphicImg)*homepageslider.imgScale()
    });
    $(slideContent).stop().css({
      left: $(slideGraphic).width()
    });
    
    if (direction == "left") {
      $(slide).animate({
        left: 0 - $(slideGraphic).width() - 600 //FUDGE
      },time);
      
      $(slideContent).animate({
        left : 0,
        opacity: 0
      },time)
    }
    else {
      $(slide).animate({
        left: $(window).width() + 600 //FUDGE
      },time);
      
      $(slideGraphic).animate({
          left : $(slide).width() - $(slideGraphic).width()
      },time);      
      $(slideContent).animate({
        opacity: 0
      },time)
      //$(slideContent).fadeOut(time);
    }
    
    window.setTimeout(function() {
      callback();
    },time)
  }
  
  homepageslider.showSlide = function(index,time,callback) {
    var slide           = $(".homepageslider-slide:eq("+index+")");
    var slideGraphic    = $(slide).find(".graphic");
    var slideGraphicImg = $(slideGraphic).find("img");
    var slideContent    = $(slide).find(".content");
    var callback = typeof callback !== 'undefined' ? callback : function(){};
    
    //console.log(homepageslider.getOWidth(slideGraphicImg));
    $(slideGraphicImg).removeClass("clickable").unbind("click");
    
    //Cpanel
    $("#homepageslider-cpanel ul li").removeClass("on");
    $("#homepageslider-cpanel ul li:eq("+index+")").addClass("on");
    
    $(slide).css("z-index","5");
    $(slide).animate({
      left: $(window).width()/2
    },time);
    
    $(slideContent).animate({
      left : $(slideGraphic).width(),
      opacity: 1
    },time)
    
    $(slideGraphic).animate({
        left:0,
        opacity : 1
    },time);
    
    $(slideGraphicImg).animate({
        width: homepageslider.getOWidth(slideGraphicImg)
    },time);
    
    
    window.setTimeout(function() {
      callback();
    },time)
  }
  
  
  homepageslider.loadSlide = function(index) {
    if (!this.running) {
      //Block
      this.running = true;
      homepageslider.resetTimer();
      
      $(".homepageslider-slide").removeClass("clickable").unbind("click");
       //console.log(index);
            
      //Cpanel
      $("#homepageslider-cpanel ul li").removeClass("on");
      $("#homepageslider-cpanel ul li:eq("+index+")").addClass("on");
      
      //Slides
      
      //$(".homepageslider-slide").stop(true).fadeOut();
      $("#homepageslider-slides").fadeOut(500);
      window.setTimeout(function() {
        
        //Reset
        //$("#homepageslider-slides").attr("style","").find("div").attr("style","");
        
        $("#homepageslider-slide").clearQueue();
        for(i =0; i <= homepageslider.slides; i++) {
           homepageslider.hideSlide(i,"left",0);
           //console.log("slide " + i);
        }
        
        //
        if (index == 0) {
          homepageslider.queueSlide(homepageslider.slides, "left", 0, function() {
  
          });
        }
        else {
          homepageslider.queueSlide(index-1, "left", 0, function() {

          });
        }
        
        if (index == homepageslider.slides) {
          homepageslider.queueSlide(0, "right", 0, function() {

          });
        }
        else {
          homepageslider.queueSlide(index + 1, "right", 0, function() {
          });
        }
        
        //$(".homepageslider-slide:eq("+(index)+")").fadeTo(500,1);
        homepageslider.showSlide(index,0,function() {
              //$(".homepageslider-slide:eq("+index+")").fadeOut(0).fadeIn(1000);
        });
        
        $("#homepageslider-slides").fadeIn(500);
        
        //Unblock
        window.setTimeout(function() { 
          homepageslider.selectedindex = index;
          homepageslider.running = false; 
        },0)        
        
      },500)
    }
  }
  
  homepageslider.rotateSlides = function(direction){
    if (!this.running) {
      this.running = true;
      
      if (direction == "right") {
        //Incrmenting the slide
        if (homepageslider.selectedindex == homepageslider.slides) {
          homepageslider.selectedindex = 0;
        }
        else {
          homepageslider.selectedindex++;
        }
        
        //Place Extra to right        
        homepageslider.hideSlide(
          homepageslider.getSlideNum(homepageslider.selectedindex - 2),
          "left",
          2000)
          
        homepageslider.queueSlide(
          homepageslider.getSlideNum(homepageslider.selectedindex - 1),
           "left",
           2000);
        homepageslider.showSlide(
          homepageslider.getSlideNum(homepageslider.selectedindex),
          2000)
          
        homepageslider.hideSlide(
          homepageslider.getSlideNum(homepageslider.selectedindex + 1),
          "right",
          0,
          function() {
            newindex = homepageslider.getSlideNum(homepageslider.selectedindex + 1);
                      homepageslider.queueSlide(newindex,"right", 2000);       
          });
        }
        if (direction == "left") {
          //Incrmenting the slide
          if (homepageslider.selectedindex == 0) {
            homepageslider.selectedindex = homepageslider.slides;
          }
          else {
            homepageslider.selectedindex--;
          }
          
          //Place Extra to right        
          homepageslider.hideSlide(
            homepageslider.getSlideNum(homepageslider.selectedindex + 2),
            "right",
            2000)
            
          homepageslider.queueSlide(
            homepageslider.getSlideNum(homepageslider.selectedindex + 1),
             "right",
             2000);
          homepageslider.showSlide(
            homepageslider.getSlideNum(homepageslider.selectedindex),
            2000)
            
          homepageslider.hideSlide(
            homepageslider.getSlideNum(homepageslider.selectedindex - 1),
            "left",
            0,
            function() {
              newindex = homepageslider.getSlideNum(homepageslider.selectedindex - 1);
                        homepageslider.queueSlide(newindex,"left", 2000);       
            });
        }        

        //Unblock
        window.setTimeout(function() { 
          homepageslider.running = false; 
        },2000)       
  };
}
  
  
  homepageslider.setUp = function() {
    homepageslider.slides = $(".homepageslider-slide").length - 1;
    $(".homepageslider-slide").fadeIn(0).addClass("hideslides");
    $(".homepageslider-slide:eq("+(homepageslider.slides)+")").fadeIn(0);
    
    homepageslider.queueSlide(homepageslider.slides,'left',0,function() {
      $(".homepageslider-slide:eq("+homepageslider.slides+")");
    });
    homepageslider.showSlide(0,0,function() { 
      $(".homepageslider-slide:eq("+0+")");
    });
    
    homepageslider.queueSlide(1,'right',0, function() {
      $(".homepageslider-slide:eq("+1+")");
    })
    
    /*
    window.setTimeout(function() {
      homepageslider.rotateSlides('right');
    },4100);
    window.setTimeout(function() {
      homepageslider.rotateSlides('right');
    },6200);    
    */
      //homepageslider.rotateSlides();
  }  
  
  //ON LOAD
  $(document).ready(function() {
    //Save img's original dimensions
    $(".homepageslider-slide .graphic img").each(function() {
      homepageslider.images.push([
        $(this).attr("src"),
        $(this).width()
      ]);
    });
  
    $("#homepageslider-cpanel ul li a").click(function(e) {
      e.preventDefault();
      homepageslider.loadSlide($(this).parent().index());
    });
    
    $(".homepageslider-slide .content").hover(function() {
       homepageslider.blocked = true;
       //console.log("blocked");
    },function() {
       homepageslider.blocked = false;
       //console.log("unblocked");
    });
    
    $(window).resize(function() {
      var index = $("#homepageslider-cpanel ul li.on").index();
      if($(window).width() > 640) {
        homepageslider.loadSlide(index);
      }
    });
    
    if($(window).width() > 640) {
      homepageslider.setUp();
      homepageslider.resetTimer();
    }
    
  });
})(jQuery);

;
