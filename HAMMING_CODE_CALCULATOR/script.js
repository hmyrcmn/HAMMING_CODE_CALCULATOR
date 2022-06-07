
var parıty_array=[]; // parıty bıtlerının knumları decimal cıkısı
//var parıty_lenght;
var fırst=[];
var hatalı_veri_array=[];
function start(a,b){
    var dızı=[];
    var y;
    var veri= document.getElementById("veri_text").value;
    document.getElementById("enter").innerHTML=veri;
    y=document.getElementById("enter").innerHTML.length;
    document.getElementById("enter_lenght").innerHTML=y;
    for(var i=0;i<y;i++){
        dızı.push(veri[i]);
    }
    dızı.reverse();
    console.log("dızı:"+dızı);
   if(y==a){
        fırst= fınd_parıty(a,b,dızı);
        create_tablem(a,b,dızı,y,fırst);
        take_data_wıth_error(a,b);
        console.log("check bıt:"+fırst);
   }else{
       window.alert(a+" bitlik veri giriniz\n HATALI GIRIS YAPTINIZ!");
   }


}
function dort(){
    start(4,3);
}
function sekız(){
   start(8,4)
}
function onaltı(){
   start(16,5);
}
var i;
var j;
var td;
function create_tablem(d,p,data,y,check_bıt){// P: PARİTY COUNT D: DİGİT COUNT
    
    var table=document.createElement("table");
   table.setAttribute("border","2");
   table.setAttribute("id","table");
    table.setAttribute("cellpadding","10");
    table.setAttribute("color","white");
    var sayac=d+p;
    var temp=p-1;
    for(i=0;i<2;i++){
        var tr=document.createElement("tr");
        tr.setAttribute("id",i);
        table.appendChild(tr);
        for(j=sayac;j>0;j--){
            td=document.createElement("td");
            
            if(i==0){// first row
                if(j==1||j==2 || j==4 || j==8 || j==16 || j==32){
                    td.style.backgroundColor="red";
                    td.innerHTML="   P   "+p--;
                }else{
                    td.innerHTML="   D   "+d--;
                }
            }else{// second rows in table
                td.setAttribute("id",sayac-j);
                if(j==1||j==2 || j==4 || j==8 || j==16 || j==32){
                    td.style.backgroundColor="red";
                    td.innerHTML=check_bıt[temp];
                    temp--;
                }else{
                    td.innerHTML=data[y-1];
                    console.log("data[y-1]:"+data[y-1]);
                    y--;
                }
            }
           
            tr.appendChild(td);
        }  
        document.getElementById("hammıng_code_goster").innerHTML="";
        document.getElementById("hammıng_code_goster").appendChild(table);
    }
}
function fınd_parıty(a,b,dızı){
    var check_bıt=[];
    if(a==4) {
        var p1=dızı[0]^dızı[1]^dızı[3]; //357
        var p2=dızı[0]^dızı[2]^dızı[3];
        var p3=dızı[1]^dızı[2]^dızı[3];
         check_bıt.push(p1);
        check_bıt.push(p2);
        check_bıt.push(p3);
        console.log("check_bıt: p1:"+p1);
        console.log("check_bıt: p2"+p2);
        console.log("check_bıt: p3"+p3);
        console.log("check_bıt:"+check_bıt);
        return check_bıt;
    }else if(a==8){
        var p1=dızı[0]^dızı[1]^dızı[3]^dızı[4]^dızı[6];
        var p2=dızı[0]^dızı[2]^dızı[3]^dızı[5]^dızı[6];
        var p3=dızı[1]^dızı[2]^dızı[3]^dızı[7];
        var p4=dızı[4]^dızı[5]^dızı[6]^dızı[7];
        check_bıt.push(p1);
        check_bıt.push(p2);
        check_bıt.push(p3);
        check_bıt.push(p4);
        console.log("check_bıt: p1"+p1);
        console.log("check_bıt: p2"+p2);
        console.log("check_bıt: p3"+p3);
        console.log("check_bıt: p4"+p4);
       
        console.log("check_bıt:"+check_bıt);
        return check_bıt;
    
    }else{//a==16
        var p1=dızı[0]^dızı[1]^dızı[3]^dızı[4]^dızı[6]^dızı[8]^dızı[10]^dızı[11]^dızı[13]^dızı[15];
        var p2=dızı[0]^dızı[2]^dızı[3]^dızı[5]^dızı[6]^dızı[9]^dızı[10]^dızı[12]^dızı[13];
        var p3=dızı[1]^dızı[2]^dızı[3]^dızı[7]^dızı[8]^dızı[9]^dızı[10]^dızı[14]^dızı[15];
        var p4=dızı[4]^dızı[5]^dızı[6]^dızı[7]^dızı[8]^dızı[9]^dızı[10];
        var p5=dızı[11]^dızı[12]^dızı[13]^dızı[14]^dızı[15];
        check_bıt.push(p1);
        check_bıt.push(p2);
        check_bıt.push(p3);
        check_bıt.push(p4);
        check_bıt.push(p5);
        console.log("check_bıt: p1"+p1);
        console.log("check_bıt: p2"+p2);
        console.log("check_bıt: p3"+p3);
        console.log("check_bıt: p4"+p4);
        console.log("check_bıt: p5"+p5);
        console.log("check_bıt:"+check_bıt);
        return check_bıt;
    
    }
    
}

// take hammıng code data with error
var flag=0;
function take_data_wıth_error(d,p){
    var info=document.createElement("p");
    info.innerHTML="HATALI HAMMING KODE GIRISINI  SAGLAYINIZ! (soldan-sağa doğru)";
    document.body.appendChild(info);
    
    var hatalı_veri=document.createElement("input");
    hatalı_veri.setAttribute("id","hata_veri");
    document.body.appendChild(hatalı_veri);
    var gonder_button=document.createElement("button");
    gonder_button.setAttribute("id","button");
    gonder_button.innerHTML="Gönder";
    document.body.appendChild(gonder_button);
    var temp=d+p;
    
    gonder_button.addEventListener("click",function(){
        if(!flag){
        if(temp==hatalı_veri.value.length){
            for(var i=0;i<hatalı_veri.value.length;i++){
                hatalı_veri_array.push(hatalı_veri.value[i]);
            }
           console.log("hatalı gırıs veri array :"+hatalı_veri_array);
           find_parity_send(d,p);
           flag=1;
        }else{
            alert("hatalı boyutta veri gırısi yaptınız\n "+(p+d)+"bıtlık veri gırmenız gerekmekte!");
        }
    }
    })

   
}
var temp=[];
var send_data=[];
function find_parity_send(d,p){
    console.log(hatalı_veri_array);
    var temp=hatalı_veri_array.reverse();
    
    for(var i=0;i<hatalı_veri_array.length;i++){
        if(i==1-1 ||i==2-1 || i==4-1 || i==8-1 || i==16-1 || i==32-1 ){
            temp[i]="*";
        }else{
            send_data.push(temp[i]);
        }
        console.log("hatalı_veri_array[i]:"+temp[i]);
    }
    console.log("temp"+temp);
    console.log("send data: "+send_data);
   var check_bıt= fınd_parıty(d,p,send_data);
    console.log("check_bıt **** : "+check_bıt);
    var y= send_data.length;
    create_tablem(d,p,send_data,y,check_bıt);
    find_error(fırst,check_bıt);
}
function find_error(fırst,second){
    var error_array=[];
    console.log("fırst: "+fırst); 
    console.log("second: "+second);
    for(var i=0;i<fırst.length;i++){
        //error_array.push(cal_exor(decimal_to_binary_array(fırst[i],second[i])));
        if(fırst[i]!=second[i]){
            error_array.push(1);
        }else{
            error_array.push(0);
        }
    }
    console.log("error array:"+error_array);
    var x= (binary_to_decimal(error_array));
   console.log("x: "+x);
   var a=document.getElementById(x);
   console.log("a: "+a);
   if(x==0){
         alert("hatalı gırıs yoktur  veya hatalı bit parity bitlerindedir. !");
   }else{
    window.alert("hatalı veri bıtı: "+x+
        "\n hatalı veri tabloda gösterilmektedir.");
     }
}

// convert decimal to binary 
function decimal_to_binary_array(x){
    var binary=[];
    while(x>0){
        binary.push(x%2);
        x=Math.floor(x/2);
    }
    return binary;
    
}

// convert binary to decimal
function binary_to_decimal(x){
    var decimal=0;
    for(var i=0;i<x.length;i++){
        decimal+=x[i]*Math.pow(2,i);
    }
    return decimal;
}
function cal_exor(x,y){ // decimal exor calculate
    var z=x^y;
    return z;
}


