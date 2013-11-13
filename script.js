
function llamado(){
        datoslaptops();
        datosdesktops();
        datostablets();
        datossmartphones();
}

function datoslaptops(){
/////////////////////////////////LAPTOPS

        var lugar = document.getElementById("LAPTOPS");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"CATEGORIA":"Laptops","DESCRIPCION":"Lo mejor en laptops, en esta sección encontrarás las mas avanzadas computadoras portatiles y a los mas bajos precios del mercado"}';
        var descripcion1 = JSON.parse(datos1);

  

        var nombres=document.createTextNode("CATEGORIA: "+descripcion1.CATEGORIA+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        

        document.getElementById("LAPTOPS").appendChild(nombres);
        document.getElementById("LAPTOPS").appendChild(espacio);
        document.getElementById("LAPTOPS").appendChild(descripcion);
        document.getElementById("LAPTOPS").appendChild(espacio3);
      

}

function datosdesktops(){
/////////////////////////////////DESKTOPS

      var lugar = document.getElementById("DESKTOPS");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }

        var datos1 = '{"CATEGORIA":"Desktops","DESCRIPCION":"Lo mejor en computadoras de escritorio , en esta sección encontrarás las mas grande variedad de desktops para el hogra y a los mejores precios"}';
        var descripcion1 = JSON.parse(datos1);
  

        var nombres=document.createTextNode("CATEGORIA: "+descripcion1.CATEGORIA+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
   

        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
        var espacio3=document.createElement("br");
    
        

        document.getElementById("DESKTOPS").appendChild(nombres);
        document.getElementById("DESKTOPS").appendChild(espacio);
        document.getElementById("DESKTOPS").appendChild(descripcion);
         document.getElementById("DESKTOPS").appendChild(espacio3);
          

  }


function datostablets(){
/////////////////////////////////TABLETS

        var lugar = document.getElementById("TABLETS");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }


        var datos1 = '{"CATEGORIA":"Tablets","DESCRIPCION":"En esta sección podrás encontral una grna variedad de marcas de tablets, Apple, Sammsung, Blackberry"}';
        var descripcion1 = JSON.parse(datos1);
  

        var nombres=document.createTextNode("CATEGORIA: "+descripcion1.CATEGORIA+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        
  

        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
        var espacio3=document.createElement("br");
  

        

        document.getElementById("TABLETS").appendChild(nombres);
        document.getElementById("TABLETS").appendChild(espacio);
        document.getElementById("TABLETS").appendChild(descripcion);
        document.getElementById("TABLETS").appendChild(espacio3);

}

function datossmartphones(){
/////////////////////////////////TABLETS

        var lugar = document.getElementById("SMARTPHONES");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }


        var datos1 = '{"CATEGORIA":"Smartphones","DESCRIPCION":"Esta sección está dedicada a los celulares inteligentes los mejores y mas baratos del mercad salvadoreño"}';
        var descripcion1 = JSON.parse(datos1);
  

        var nombres=document.createTextNode("CATEGORIA: "+descripcion1.CATEGORIA+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        

         
  

        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
            var espacio3=document.createElement("br");
  

        

        document.getElementById("SMARTPHONES").appendChild(nombres);
        document.getElementById("SMARTPHONES").appendChild(espacio);
        document.getElementById("SMARTPHONES").appendChild(descripcion); 
         document.getElementById("SMARTPHONES").appendChild(espacio3);
       
}


function generales(){
     

     var ja = document.getElementById('opso').options.selectedIndex;  

      if (ja  == 0){
        

        var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }

         var h1 = document.createElement("h1");
                    var texto = document.createTextNode("TABLETS A LA VENTA");
                    h1.appendChild(texto);



                    var tablet1 = document.createElement('img');
                    tablet1.src="images/tablet1.jpg"
                    tablet1.setAttribute("onclick","tablet1();");
                    tablet1.align="left";
                     
                    var tablet2= document.createElement('img');
                   tablet2.src="images/tablet2.jpg"
                   tablet2.setAttribute("onclick","tablet2();");
                     tablet2.align="right"

                    var tablet3 = document.createElement('img');
                    tablet3.src="images/tablet3.jpg"
                    tablet3.setAttribute("onclick","tablet3();");
                    tablet3.align="left";

                    var tablet4 = document.createElement('img');
                    tablet4.src="images/tablet4.jpg"
                    tablet4.setAttribute("onclick","tablet4();");
                     tablet4.align="right"

                    var tablet5 = document.createElement('img');
                    tablet5.src="images/tablet5.jpg"
                  tablet5.setAttribute("onclick","tablet1();");
                    tablet5.align="left"
         
             

                     var espacio1 = document.createElement("br");
                     var espacio2 = document.createElement("br");
                      var espacio3 = document.createElement("br");


                             

                    document.getElementById("content").appendChild(h1);
                     document.getElementById("content").appendChild(espacio3);
                    document.getElementById("content").appendChild(tablet1);
                    document.getElementById("content").appendChild(tablet2);
                    document.getElementById("content").appendChild(espacio1);
                    document.getElementById("content").appendChild(tablet3);
                    document.getElementById("content").appendChild(tablet4);
                    document.getElementById("content").appendChild(espacio2);
                    document.getElementById("content").appendChild(tablet5);
                 
        


      }
      else{
        if(ja  == 1){
           
        var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }


         var h1 = document.createElement("h1");
                    var texto = document.createTextNode("SMARTPHONES A LA VENTA");
                    h1.appendChild(texto);



                    var desktop1 = document.createElement('img');
                    desktop1.src="images/desktop1.jpg"
                    desktop1.setAttribute("onclick","desktop1();");
                    desktop1.align="left";
                     
                    var desktop2= document.createElement('img');
                   desktop2.src="images/desktop2.jpg"
                   desktop2.setAttribute("onclick","desktop2();");
                     desktop2.align="right"

                    var desktop3 = document.createElement('img');
                    desktop3.src="images/desktop3.jpg"
                    desktop3.setAttribute("onclick","desktop3();");
                    desktop3.align="left";

                    var desktop4 = document.createElement('img');
                    desktop4.src="images/desktop4.jpg"
                    desktop4.setAttribute("onclick","desktop4();");
                     desktop4.align="right"

                    var desktop5 = document.createElement('img');
                    desktop5.src="images/desktop5.jpg"
                  desktop5.setAttribute("onclick","desktop5();");
                    desktop5.align="left"
         
                    var desktop6 = document.createElement('img');
                    desktop6.src="images/desktop6.jpg";
                     desktop6.setAttribute("onclick","desktop6();");
                     desktop6.align="right"

                     var espacio1 = document.createElement("br");
                     var espacio2 = document.createElement("br");
                      var espacio3 = document.createElement("br");


                             

                    document.getElementById("content").appendChild(h1);
                     document.getElementById("content").appendChild(espacio3);
                    document.getElementById("content").appendChild(desktop1);
                    document.getElementById("content").appendChild(desktop2);
                    document.getElementById("content").appendChild(espacio1);
                    document.getElementById("content").appendChild(desktop3);
                    document.getElementById("content").appendChild(desktop4);
                    document.getElementById("content").appendChild(espacio2);
                    document.getElementById("content").appendChild(desktop5);
                    document.getElementById("content").appendChild(desktop6);

         var texto = document.createTextNode("TABLET");
         document.getElementById('page-bgtop').appendChild(texto);
        }
        else{
                if(ja  == 2){
                    var lugar = document.getElementById("content");

                    if ( lugar.hasChildNodes() )
                    {
                    while ( lugar.childNodes.length >= 1 )
                    {
                    lugar.removeChild( lugar.firstChild );
                    }
                    }
                    else{
                        
                    }
                    
                     var h1 = document.createElement("h1");
                    var texto = document.createTextNode("SMARTPHONES A LA VENTA");
                    h1.appendChild(texto);



                    var laptop1 = document.createElement('img');
                    laptop1.src="images/laptop1.jpg"
                    laptop1.setAttribute("onclick","laptop1();");
                    laptop1.align="left";
                     
                    var laptop2= document.createElement('img');
                   laptop2.src="images/laptop2.jpg"
                   laptop2.setAttribute("onclick","laptop2();");
                     laptop2.align="right"

                    var laptop3 = document.createElement('img');
                    laptop3.src="images/laptop3.jpg"
                    laptop3.setAttribute("onclick","laptop3();");
                    laptop3.align="left";

                    var laptop4 = document.createElement('img');
                    laptop4.src="images/laptop4.jpg"
                    laptop4.setAttribute("onclick","laptop4();");
                     laptop4.align="right"

                    var laptop5 = document.createElement('img');
                    laptop5.src="images/laptop5.jpg"
                  laptop5.setAttribute("onclick","laptop5();");
                    laptop5.align="left"
         
                    var laptop6 = document.createElement('img');
                    laptop6.src="images/laptop6.png";
                     laptop6.setAttribute("onclick","laptop6();");
                     laptop6.align="right"

                     var espacio1 = document.createElement("br");
                     var espacio2 = document.createElement("br");
                      var espacio3 = document.createElement("br");


                             

                    document.getElementById("content").appendChild(h1);
                     document.getElementById("content").appendChild(espacio3);
                    document.getElementById("content").appendChild(laptop1);
                    document.getElementById("content").appendChild(laptop2);
                    document.getElementById("content").appendChild(espacio1);
                    document.getElementById("content").appendChild(laptop3);
                    document.getElementById("content").appendChild(laptop4);
                    document.getElementById("content").appendChild(espacio2);
                    document.getElementById("content").appendChild(laptop5);
                    document.getElementById("content").appendChild(laptop6);


                  



                }else{
                        if(ja  == 3){
                                var lugar = document.getElementById("content");

                    if ( lugar.hasChildNodes() )
                    {
                    while ( lugar.childNodes.length >= 1 )
                    {
                    lugar.removeChild( lugar.firstChild );
                    }
                    }
                    else{
                        
                    }
                    
                    var h1 = document.createElement("h1");
                    var texto = document.createTextNode("SMARTPHONES A LA VENTA");
                    h1.appendChild(texto);



                    var fon1 = document.createElement('img');
                    fon1.src="images/galaxys3.jpg"
                    fon1.setAttribute("onclick","fon1();");
                    fon1.align="left";
                     
                    var fon2 = document.createElement('img');
                    fon2.src="images/Sammsunggalaxis4.jpg"
                    fon2.setAttribute("onclick","fon2();");
                     fon2.align="right"

                    var fon3 = document.createElement('img');
                    fon3.src="images/lumia1.jpg"
                    fon3.setAttribute("onclick","fon3();");
                    fon3.align="left";

                    var fon4 = document.createElement('img');
                    fon4.src="images/ifon1.jpg"
                    fon4.setAttribute("onclick","fon4();");
                    fon4.align="right"

                    var fon5 = document.createElement('img');
                    fon5.src="images/ifon5.jpg"
                    fon5.setAttribute("onclick","fon5();");
                   fon5.align="left"
         
                    var fon6 = document.createElement('img');
                    fon6.src="images/Blackberry.jpg";
                     fon6.setAttribute("onclick","fon6();");
                     fon6.align="right"

                     var espacio1 = document.createElement("br");
                     var espacio2 = document.createElement("br");
                      var espacio3 = document.createElement("br");


                             

                    document.getElementById("content").appendChild(h1);
                     document.getElementById("content").appendChild(espacio3);
                    document.getElementById("content").appendChild(fon1);
                    document.getElementById("content").appendChild(fon2);
                    document.getElementById("content").appendChild(espacio1);
                    document.getElementById("content").appendChild(fon3);
                    document.getElementById("content").appendChild(fon4);
                    document.getElementById("content").appendChild(espacio2);
                    document.getElementById("content").appendChild(fon5);
                    document.getElementById("content").appendChild(fon6);
                        }
                }
        }
      }

}

////////////////////tablets

function tablet1(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$400.00","DESCRIPCION":"La tablet Titan 7010, es una de las mejores tabletas genéricas, con impresionantes prestaciones y muy económica. Corriendo Android 4.0, con un dual.core ARM Cortex A8 a 1.0GHz, acompañada de 512 MB de memoria Ram DRR3. Con una impecable pantalla multi-touch capasitiva de 7 pulgadas con una resolucion a 800×480 pixel, 2 cámaras, una de 2 MP, y otra frontal de 0,3 MP para videollamadas."}';
        var descripcion1 = JSON.parse(datos1);

  
        var tablet1 = document.createElement('img');
        tablet1.src="images/tablet1.jpg"
        tablet1.setAttribute("onclick","tablet1();");
        tablet1.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(tablet1);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function tablet2(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$800.00","DESCRIPCION":"La plataforma Android te ofrece mayor libertad, originalidad y flexibilidad para acceder a todas tus aplicaciones móviles. La pantalla capacitiva completamente táctil con luz de fondo contiene íconos, fantásticas aplicaciones y ¡el mejor entretenimiento digital de alta definición!. La ranura para tarjeta de memoria micro-SD de 32GB te ofrece un sinnúmero de opciones de almacenamiento, como llevar contigo tu colección completa de música, fotos y archivos importantes...¡donde quiera que vayas!. Conéctate al internet en forma inalámbrica y navega por la web a velocidades impresionantes...en cualquier lugar del mundo."}';
        var descripcion1 = JSON.parse(datos1);
        var jaja = descripcion1.DESCRIPCION;

  
        var tablet1 = document.createElement('img');
        tablet1.src="images/tablet2.jpg"
        tablet1.setAttribute("onclick","tablet2();");
        tablet1.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(tablet1);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}

function tablet3(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1400.00","DESCRIPCION":"El Huawei IDEOS S7 Slim es un tablet Android, sucesor del tablet IDEOS S7, que mantiene casi todas las mismas características pero esta vez tiene una pantalla capacitiva en lugar de resistiva, corre Android 2.2 Froyo y posee un diseño mas estilizado. Entre las especificaciones encontramos la pantalla capacitiva de 7 pulgadas, Wi-Fi, GPS, Bluetooth, puerto HDMI, cámara principal, cámara frontal para video llamadas y soporte 3G, con solo 12.5mm de espesor."}';
        var descripcion1 = JSON.parse(datos1);
        var jaja = descripcion1.DESCRIPCION;

  
        var tablet1 = document.createElement('img');
        tablet1.src="images/tablet3.jpg"
        tablet1.setAttribute("onclick","tablet1();");
        tablet1.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(tablet1);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function tablet4(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$2000.00","DESCRIPCION":"El Huawei MediaPad es el primer tablet de 7 pulgadas en correr Android 3.2 Honeycomb. El MediaPad posee una pantalla IPS con una resolución de 1280 x 800 pixels, procesador Qualcomm de doble núcleo a 1.2GHz, Wi-Fi b/g/n, Bluetooth, GPS, puerto HDMI, 8 GB de memoria interna expandible a través de tarjetas microSD, cámara trasera de 5 megapixels, cámara frontal de 1.3 megapixels y conectividad HSPA+."}';
        var descripcion1 = JSON.parse(datos1);
        var jaja = descripcion1.DESCRIPCION;

  
        var tablet1 = document.createElement('img');
        tablet1.src="images/tablet5.jpg"
        tablet1.setAttribute("onclick","tablet5();");
        tablet1.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(tablet1);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}

//////////////////desktops

function desktop1(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$2000.00","DESCRIPCION":"Para que un All In One sea efectivo, tiene que tener varias características. Su peso debe ser lo más liviano posible, una pantalla táctil de fácil utilización y que incluya tanto la posibilidad de teclado en pantalla como de teclado externo. Su tamaño queda limitado por el tamaño de monitor que necesites y el uso que le quieras dar. La posibilidad de tener un control remoto, si quieres usarlo como media center o equipo multimedia, siempre es una gran ayuda."}';
        var descripcion1 = JSON.parse(datos1);

  
        var desktop1 = document.createElement('img');
        desktop1.src="images/desktop1.jpg"
        desktop1.setAttribute("onclick","desktop1();");
        desktop1.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(desktop1);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function desktop2(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"HP Compaq Pro 4300 Desktop PC - 3rd Gen. Intel Core i5-3470S 2.90GHz, 4GB DDR3, 500GB HDD, DVDRW, Windows 7/8 Pro 64-bit, Keyboard & Mouse, (D8C85UT#ABA)"}';
        var descripcion1 = JSON.parse(datos1);

  
        var desktop2 = document.createElement('img');
        desktop2.src="images/desktop2.jpg"
        desktop2.setAttribute("onclick","desktop2();");
        desktop2.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(desktop2);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function desktop3(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"La computadora InspironTM  580s Delgada le brinda la potencia que necesita en un diseño delgado y compacto. Diseño elegante con cubierta frontal color negro piano, borde circular cromado y diseño gráfico plateado exclusivoOpciones de procesador Intel® CoreTM i3 para obtener la potencia que necesitaColoque la en posición vertical u horizontal como centro multimedia"}';
        var descripcion1 = JSON.parse(datos1);

  
        var desktop3 = document.createElement('img');
        desktop3.src="images/desktop3.jpg"
        desktop3.setAttribute("onclick","desktop3();");
        desktop3.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(desktop3);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function desktop4(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"Pantalla panorámica brillante retroiluminada por LED de 13,3 pulgadas (en diagonal) compatible con millones de colores Resoluciones compatibles: 1.280 por 800 (nativa), 1.152 por 720, 1.024 por 640 y 800 por 500 píxeles con una relación dimensional de 16:10; 1.024 por 768, 800 por 600 y 640 por 480 píxeles con una relación dimensional de 4:3; 1.024 por 768, 800 por 600 y 640 por 480 con una relación dimensional de 4:3 ampliada; 720 por 480 píxeles con una relación dimensional de 3:2; 720 por 480 píxeles con una relación dimensional de 3:2 ampliada."}';
        var descripcion1 = JSON.parse(datos1);

  
        var desktop4 = document.createElement('img');
        desktop4.src="images/desktop4.jpg"
        desktop4.setAttribute("onclick","desktop4();");
        desktop4.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(desktop4);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}

function desktop5(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"La computadora InspironTM  580s Delgada le brinda la potencia que necesita en un diseño delgado y compacto. Diseño elegante con cubierta frontal color negro piano, borde circular cromado y diseño gráfico plateado exclusivoOpciones de procesador Intel® CoreTM i3 para obtener la potencia que necesitaColoque la en posición vertical u horizontal como centro multimedia"}';
        var descripcion1 = JSON.parse(datos1);

  
        var desktop5 = document.createElement('img');
        desktop5.src="images/desktop5.jpg"
        desktop5.setAttribute("onclick","desktop5();");
        desktop5.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(desktop5);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function desktop6(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"Pantalla panorámica brillante retroiluminada por LED de 13,3 pulgadas (en diagonal) compatible con millones de colores Resoluciones compatibles: 1.280 por 800 (nativa), 1.152 por 720, 1.024 por 640 y 800 por 500 píxeles con una relación dimensional de 16:10; 1.024 por 768, 800 por 600 y 640 por 480 píxeles con una relación dimensional de 4:3; 1.024 por 768, 800 por 600 y 640 por 480 con una relación dimensional de 4:3 ampliada; 720 por 480 píxeles con una relación dimensional de 3:2; 720 por 480 píxeles con una relación dimensional de 3:2 ampliada."}';
        var descripcion1 = JSON.parse(datos1);

  
        var desktop6 = document.createElement('img');
        desktop6.src="images/desktop6.jpg"
        desktop6.setAttribute("onclick","desktop6();");
        desktop6.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(desktop6);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}

///////////////////////laptops

function laptop1(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"HP Compaq Pro 4300 Desktop PC - 3rd Gen. Intel Core i5-3470S 2.90GHz, 4GB DDR3, 500GB HDD, DVDRW, Windows 7/8 Pro 64-bit, Keyboard & Mouse, (D8C85UT#ABA)"}';
        var descripcion1 = JSON.parse(datos1);

  
        var laptop1 = document.createElement('img');
        laptop1.src="images/laptop1.jpg"
        laptop1.setAttribute("onclick","laptop1();");
        laptop1.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(laptop1);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function laptop2(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"- 3rd Gen. Intel Core i5-3470S 2.90GHz, 4GB DDR3, 500GB HDD, DVDRW, Windows 7/8 Pro 64-bit, Keyboard & Mouse, (D8C85UT#ABA)"}';
        var descripcion1 = JSON.parse(datos1);

  
        var laptop2 = document.createElement('img');
        laptop2.src="images/laptop2.jpg"
        laptop2.setAttribute("onclick","laptop2();");
        laptop2.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(laptop2);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function laptop3(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"Brinda la potencia que necesita en un diseño delgado y compacto. Diseño elegante con cubierta frontal color negro piano, borde circular cromado y diseño gráfico plateado exclusivoOpciones de procesador Intel® CoreTM i3 para obtener la potencia que necesitaColoque la en posición vertical u horizontal como centro multimedia"}';
        var descripcion1 = JSON.parse(datos1);

  
        var laptop3 = document.createElement('img');
       laptop3.src="images/laptop3.jpg"
        laptop3.setAttribute("onclick","laptop3();");
        laptop3.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(laptop3);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function laptop4(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"Pantalla panorámica brillante retroiluminada por LED de 13,3 pulgadas (en diagonal) compatible con millones de colores Resoluciones compatibles: 1.280 por 800 (nativa), 1.152 por 720, 1.024 por 640 y 800 por 500 píxeles con una relación dimensional de 16:10; 1.024 por 768, 800 por 600 y 640 por 480 píxeles con una relación dimensional de 4:3; 1.024 por 768, 800 por 600 y 640 por 480 con una relación dimensional de 4:3 ampliada; 720 por 480 píxeles con una relación dimensional de 3:2; 720 por 480 píxeles con una relación dimensional de 3:2 ampliada."}';
        var descripcion1 = JSON.parse(datos1);

  
        var laptop4 = document.createElement('img');
        laptop4.src="images/laptop4.jpg"
        laptop4.setAttribute("onclick","laptop4();");
        laptop4.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(laptop4);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}

function laptop5(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"La computadora InspironTM  580s Delgada le brinda la potencia que necesita en un diseño delgado y compacto. Diseño elegante con cubierta frontal color negro piano, borde circular cromado y diseño gráfico plateado exclusivoOpciones de procesador Intel® CoreTM i3 para obtener la potencia que necesitaColoque la en posición vertical u horizontal como centro multimedia"}';
        var descripcion1 = JSON.parse(datos1);

  
        var laptop5 = document.createElement('img');
        laptop5.src="images/laptop5.jpg"
        laptop5.setAttribute("onclick","laptop5();");
        laptop5.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(laptop5);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function laptop6(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"Pantalla panorámica brillante retroiluminada por LED de 13,3 pulgadas (en diagonal) compatible con millones de colores Resoluciones compatibles: 1.280 por 800 (nativa), 1.152 por 720, 1.024 por 640 y 800 por 500 píxeles con una relación dimensional de 16:10; 1.024 por 768, 800 por 600 y 640 por 480 píxeles con una relación dimensional de 4:3; 1.024 por 768, 800 por 600 y 640 por 480 con una relación dimensional de 4:3 ampliada; 720 por 480 píxeles con una relación dimensional de 3:2; 720 por 480 píxeles con una relación dimensional de 3:2 ampliada."}';
        var descripcion1 = JSON.parse(datos1);

  
        var laptop6 = document.createElement('img');
        laptop6.src="images/laptop6.png"
        laptop6.setAttribute("onclick","laptop6();");
        laptop6.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(laptop6);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}

//////////////////////////////smartphones

function fon1(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"HP Compaq Pro 4300 Desktop PC - 3rd Gen. Intel Core i5-3470S 2.90GHz, 4GB DDR3, 500GB HDD, DVDRW, Windows 7/8 Pro 64-bit, Keyboard & Mouse, (D8C85UT#ABA)"}';
        var descripcion1 = JSON.parse(datos1);

  
        var fon1 = document.createElement('img');
        fon1.src="images/ifon5.jpg"
        fon1.setAttribute("onclick","fon1();");
        fon1.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(fon1);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function fon2(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"- 3rd Gen. Intel Core i5-3470S 2.90GHz, 4GB DDR3, 500GB HDD, DVDRW, Windows 7/8 Pro 64-bit, Keyboard & Mouse, (D8C85UT#ABA)"}';
        var descripcion1 = JSON.parse(datos1);

  
        var fon2 = document.createElement('img');
        fon2.src="images/ifon1.jpg"
        fon2.setAttribute("onclick","fon2();");
        fon2.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(fon2);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function fon3(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"Brinda la potencia que necesita en un diseño delgado y compacto. Diseño elegante con cubierta frontal color negro piano, borde circular cromado y diseño gráfico plateado exclusivoOpciones de procesador Intel® CoreTM i3 para obtener la potencia que necesitaColoque la en posición vertical u horizontal como centro multimedia"}';
        var descripcion1 = JSON.parse(datos1);

  
        var fon3 = document.createElement('img');
       fon3.src="images/Blackberry.jpg"
        fon3.setAttribute("onclick","fon3();");
        fon3.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(fon3);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function fon4(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"Pantalla panorámica brillante retroiluminada por LED de 13,3 pulgadas (en diagonal) compatible con millones de colores Resoluciones compatibles: 1.280 por 800 (nativa), 1.152 por 720, 1.024 por 640 y 800 por 500 píxeles con una relación dimensional de 16:10; 1.024 por 768, 800 por 600 y 640 por 480 píxeles con una relación dimensional de 4:3; 1.024 por 768, 800 por 600 y 640 por 480 con una relación dimensional de 4:3 ampliada; 720 por 480 píxeles con una relación dimensional de 3:2; 720 por 480 píxeles con una relación dimensional de 3:2 ampliada."}';
        var descripcion1 = JSON.parse(datos1);

  
        var fon4 = document.createElement('img');
        fon4.src="images/galaxys3.jpg"
        fon4.setAttribute("onclick","laptop4();");
        fon4.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(fon4);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}

function fon5(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"La computadora InspironTM  580s Delgada le brinda la potencia que necesita en un diseño delgado y compacto. Diseño elegante con cubierta frontal color negro piano, borde circular cromado y diseño gráfico plateado exclusivoOpciones de procesador Intel® CoreTM i3 para obtener la potencia que necesitaColoque la en posición vertical u horizontal como centro multimedia"}';
        var descripcion1 = JSON.parse(datos1);

  
        var fon5 = document.createElement('img');
        fon5.src="images/fon.jpg"
        fon5.setAttribute("onclick","fon5();");
        fon5.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(fon5);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}


function fon6(){
      var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
        var datos1 = '{"PRECIO":"$1000.00","DESCRIPCION":"Pantalla panorámica brillante retroiluminada por LED de 13,3 pulgadas (en diagonal) compatible con millones de colores Resoluciones compatibles: 1.280 por 800 (nativa), 1.152 por 720, 1.024 por 640 y 800 por 500 píxeles con una relación dimensional de 16:10; 1.024 por 768, 800 por 600 y 640 por 480 píxeles con una relación dimensional de 4:3; 1.024 por 768, 800 por 600 y 640 por 480 con una relación dimensional de 4:3 ampliada; 720 por 480 píxeles con una relación dimensional de 3:2; 720 por 480 píxeles con una relación dimensional de 3:2 ampliada."}';
        var descripcion1 = JSON.parse(datos1);

  
        var fon6 = document.createElement('img');
        fon6.src="images/Sammsunggalaxis4.png"
        fon6.setAttribute("onclick","fon6();");
        fon6.align="left";

        var PRECIO=document.createTextNode("PRECIO: "+descripcion1.PRECIO+"");
        var descripcion=document.createTextNode("DESCRIPCION: "+descripcion1.DESCRIPCION+"");
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
       
        
        
        document.getElementById("content").appendChild(fon6);
        document.getElementById("content").appendChild(espacio);
        document.getElementById("content").appendChild(descripcion);
        document.getElementById("content").appendChild(espacio3);
        document.getElementById("content").appendChild(PRECIO);
}

//////////////////////GUARDAR PRODUCTO
function guardarpro(){
   var lugar = document.getElementById("kjd");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
  var name=prompt("Nombre del producto: ");
  var desc=prompt("Descripcion del producto: ");
    var pre=prompt("Precio del producto: ");
  localStorage['Nombre']=name;
  localStorage['Descripcion']=desc;
    localStorage['Precio']=pre;
  alert("PRODUCTO GUARDADO" + localStorage['Nombre']+ "CON LA DESCRIPCION: " + localStorage['Descripcion'] +""+"CON PRECIO DE :" +localStorage['Precio']+"");

        var datos1 = localStorage['Nombre'];
        var datos2 = localStorage['Descripcion'];
        var datos3 = localStorage['Precio'];
        var d1 = document.createTextNode("Producto:  "+datos1+"");
        var d2 = document.createTextNode("Descripcion :"+datos2+"");
        var d3 = document.createTextNode("Precio :"+datos3+"");
  
        var fon1 = document.createElement('img');
        fon1.src="images/nuevo.jpg"
        fon1.align="left";
        


        var espacio=document.createElement("br");
        var espacio2=document.createElement("br");
         var espacio3=document.createElement("br");
         var espacio10=document.createElement("br");
           var espacio11=document.createElement("br");
         
        document.getElementById("kjd").appendChild(fon1);
        document.getElementById("kjd").appendChild(espacio2);
        document.getElementById("kjd").appendChild(d1);
        document.getElementById("kjd").appendChild(espacio);
        document.getElementById("kjd").appendChild(d2);
        document.getElementById("kjd").appendChild(espacio3);
        document.getElementById("kjd").appendChild(d3);
        document.getElementById("kjd").appendChild(espacio10);
        document.getElementById("kjd").appendChild(espacio11);

}


function validar(){
     var correo= /^[a-zA-Z0-9]{2,}@([a-zA-Z0-9])/;
     var nombre= /^([a-zA-Z\s])*$/;
     var apellido= /^([a-zA-Z\s])*$/;
     var telefono = /[0-9]{8}/;

     var mail = document.getElementById("correo").value;
     var nombres = document.getElementById("nombre").value;
     var apellidos = document.getElementById("apellido").value;
     var telefonos = document.getElementById("telefono").value;

     var name = document.createTextNode("Nombres :"+nombres+"");
     var name2 = document.createTextNode("Apellidos :"+apellidos+"");
     var name3 = document.createTextNode("Telefonos :"+telefonos+"");
     var name4 = document.createTextNode("Correo : "+mail+"");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");

var estado1 = 0;
var estado2 = 0;
var estado3 = 0;
var estado4 = 0;

    if(nombre.test(nombres)){
    estado1 = 1;
  }else{
    alert("el nombre solo debe tener letras ejemplo: Albino");
    estado1=0;
   
  }

  if(apellido.test(apellidos)){
  	estado2=1;
  }else{
    alert("apellido esta mal");
    estado2=0;
  }

  if(telefono.test(telefonos)){
  	estado3=1;
  }else{
    alert("El telefono debe tener este formato 00000000");
    estado3=0;
  }

  if(correo.test(mail)){
  estado4=1;
  }else{
    alert("el correo debe tener este formato: yurname@domino.com");
    estado4=0;
  }

if(estado1==1 && estado2==1 && estado3==1 && estado4==1){
    var lugar = document.getElementById("content");

         if ( lugar.hasChildNodes() )
         {
         while ( lugar.childNodes.length >= 1 )
         {
         lugar.removeChild( lugar.firstChild );
         }
         }
         else{
             
         }
 document.getElementById("content").appendChild(br1);
 document.getElementById("content").appendChild(name);
 document.getElementById("content").appendChild(br2);
 document.getElementById("content").appendChild(name2);
 document.getElementById("content").appendChild(br3);
 document.getElementById("content").appendChild(name3);
 document.getElementById("content").appendChild(br4);
 document.getElementById("content").appendChild(name4);
}else{
    alert("No se pueden desplegar los datos");
}

}