         var modal = document.getElementById("mymodel");
         var btn = document.getElementById("CV-btn");
         var blur = document.getElementById("myDiv");

         btn.onclick = function () {
             modal.classList.add('show');
             blur.setAttribute('class', 'blur');

         }
         window.onclick = function (event) {
             if (event.target == modal) {
                 modal.classList.remove('show');
                 blur.setAttribute('class', null);

             }
         }