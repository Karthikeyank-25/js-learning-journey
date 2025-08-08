// Adding Js to websites :
//          Adding javascript into the websites in three way as like CSS.
//                  -Inline js
//                  -Internal js
//                  -External js

// Inline Example :
                <html>
                    <body onload="alert('Hi I am Karthi')">
                        <h1>Hi Karthi!!</h1>
                    </body>
                </html>

// Internal Example :
                    <h1 id="kk">Hi Karthi!!</h1>
                    <script>
                        window.onload = function() {
                        let heading = document.getElementById("kk"); // select the tag
                        heading.style.color = "red";                 // change color
                        heading.onclick = function() {               // add click action
                            alert("You clicked on the heading!");
                                                };
                        };
                    </script>

// External Example :
                    <html>
                        <head>
                            <h1 id="kk">Hi Karthi!!</h1>
                        </head>
                        <body>
                            <script src="index.js" charSet="utf-8"></script>
                        </body>
                    </html>
