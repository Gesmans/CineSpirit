// Loading Screen
        var myVar;
        
        function myLoading() {
            myVar = setTimeout(showPage, 1500);
            
        }
   
        function showPage() {
            document.getElementById("loader-wrapper").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
        }