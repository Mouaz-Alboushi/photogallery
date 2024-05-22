
function upDate(previewPic) {
    document.querySelector("#image").innerHTML = previewPic.alt;
    document.querySelector("#image").style.backgroundImage =
      "url(" + previewPic.src + ")";
  }
  

  function unDo() {
    document.querySelector("#image").style.backgroundImage = "url('')";
    document.querySelector("#image").innerHTML =
      "Hover over an image below to display here.";
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.preview');
    let activeImage = null;

    images.forEach(image => {
      image.addEventListener('click', function(event) {
        // منع الحدث من الفقاعة حتى لا يصل إلى المستمع الوثائقي
        event.stopPropagation();

        // إزالة النمط السابق إن وجد
        if (activeImage) {
          activeImage.classList.remove('focused');
        }

        // تعيين النمط الجديد للصورة الحالية
        image.classList.add('focused');
        activeImage = image;
      });
    });

    // إضافة مستمع للنقر في أي مكان في الوثيقة لإعادة الأنماط الأصلية
    document.addEventListener('click', function() {
      if (activeImage) {
        activeImage.classList.remove('focused');
        activeImage = null;
      }
    });
  });




/*Name this external file gallery.js

function upDate(previewPic){
        
        x=document.getElementById('image').innerHTML;
        document.getElementById("image").style.backgroundImage="url("+previewPic.src+")" ;
        document.getElementById("image").innerHTML = previewPic.alt;
        y=document.getElementById('preview');
        console.log('image alt', y.alt);
        console.log('image src', y.src);}


        const galleryImages = document.querySelectorAll('.preview');
  
        galleryImages.forEach(function(img) {
                img.addEventListener('focus', function() {
            this.style.border = '5px solid red';
          });
    
          img.addEventListener('blur', function() {
            this.style.border = "";
          });
        });



    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       
     
       
   
       function unDo(){
           document.getElementById('image').style.backgroundImage="url('')";
            document.getElementById("image").innerHTML=x;
       }


        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
           
       