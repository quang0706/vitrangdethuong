
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='c';
a[2]='h';
a[3]='o';
a[4]=' ';
a[5]='c';
a[6]='h';
a[7]='ú';
a[8]=' ';
a[9]='m';
a[10]='ộ';
a[11]='t';
a[12]=' ';
a[13]='c';
a[14]='ơ';
a[15]=' ';
a[16]='h';
a[17]='ộ';
a[18]='i';


function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2> Chú biết ngày mà Vi Trang sẽ tha cho chú mà <img src='http://website1gia.com/files/assets/3.png'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Nếu mà tha rồi thì cho chú 1 cơ hội luôn đi chứ đúng không .<img src='http://website1gia.com/files/assets/4.png'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p> Hãy để chú bù đắp cho cháu nhá đừng né lần này chú nói thật lòng đấy hicc  <img src='http://website1gia.com/files/assets/5.png'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				