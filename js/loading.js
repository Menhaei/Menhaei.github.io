/*
* @Author: Mehaei
* @Date:   2019-12-24 19:10:27
* @Last Modified by:   Mehaei
* @Last Modified time: 2019-12-25 09:51:40
*/

(function($) {
    var _LoadingHtml = `
    <div id="loading">
        <style>
        #loading{
            background-color: #555;
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: 1;
            margin-top: 0px;
            top: 0px;
        }
        #loading-center{
            width: 100%;
            height: 100%;
            position: relative;
            }
        #loading-center-absolute {
            position: absolute;
            left: 50%;
            top: 50%;
            height: 200px;
            width: 200px;
            margin-top: -100px;
            margin-left: -100px;
        }
        .object{
            width: 50px;
            height: 50px;
            background-color: rgba(255,255,255,0);
            margin-right: auto;
            margin-left: auto;
            border: 4px solid #FFF;
            left: 73px;
            top: 73px;
            position: absolute;
        }
        #first_object{
            -webkit-animation: first_object_animate 1s infinite ease-in-out;
            animation: first_object_animate 1s infinite ease-in-out;
        }
        #second_object{
            -webkit-animation: second_object 1s forwards, second_object_animate 1s infinite ease-in-out;
            animation: second_object 1s forwards, second_object_animate 1s infinite ease-in-out;
            }   
        #third_object{
            -webkit-animation: third_object 1s forwards, third_object_animate 1s infinite ease-in-out;
            animation: third_object 1s forwards, third_object_animate 1s infinite ease-in-out;
            }   
        @-webkit-keyframes second_object {
         100% { width: 100px; height:100px; left: 48px; top: 48px; }
        }       
        @keyframes second_object {
        100% { width: 100px; height:100px; left: 48px; top: 48px; }
        }
        @-webkit-keyframes third_object {
         100% { width: 150px; height:150px; left: 23px; top: 23px;}
        }       
        @keyframes third_object {
        100% { width: 150px; height:150px; left: 23px; top: 23px;}
        }
        @-webkit-keyframes first_object_animate {
          0% { -webkit-transform: perspective(100px); }
          50% { -webkit-transform: perspective(100px) rotateY(-180deg); }
          100% { -webkit-transform: perspective(100px) rotateY(-180deg) rotateX(-180deg); }
        }
        @keyframes first_object_animate {
          0% { 
            transform: perspective(100px) rotateX(0deg) rotateY(0deg);
            -webkit-transform: perspective(100px) rotateX(0deg) rotateY(0deg); 
          } 50% { 
            transform: perspective(100px) rotateX(-180deg) rotateY(0deg);
            -webkit-transform: perspective(100px) rotateX(-180deg) rotateY(0deg) ;
          } 100% { 
            transform: perspective(100px) rotateX(-180deg) rotateY(-180deg);
            -webkit-transform: perspective(100px) rotateX(-180deg) rotateY(-180deg);
          }
        }
        @-webkit-keyframes second_object_animate {
          0% { -webkit-transform: perspective(200px); }
          50% { -webkit-transform: perspective(200px) rotateY(180deg); }
          100% { -webkit-transform: perspective(200px) rotateY(180deg) rotateX(180deg); }
        }   
        @keyframes second_object_animate {
          0% { 
            transform: perspective(200px) rotateX(0deg) rotateY(0deg);
            -webkit-transform: perspective(200px) rotateX(0deg) rotateY(0deg); 
          } 50% { 
            transform: perspective(200px) rotateX(180deg) rotateY(0deg);
            -webkit-transform: perspective(200px) rotateX(180deg) rotateY(0deg) ;
          } 100% { 
            transform: perspective(200px) rotateX(180deg) rotateY(180deg);
            -webkit-transform: perspective(200px) rotateX(180deg) rotateY(180deg);
          }
        }
        @-webkit-keyframes third_object_animate {
          0% { -webkit-transform: perspective(300px); }
          50% { -webkit-transform: perspective(300px) rotateY(-180deg); }
          100% { -webkit-transform: perspective(300px) rotateY(-180deg) rotateX(-180deg); }
        }

        @keyframes third_object_animate {
          0% { 
            transform: perspective(300px) rotateX(0deg) rotateY(0deg);
            -webkit-transform: perspective(300px) rotateX(0deg) rotateY(0deg); 
          } 50% { 
            transform: perspective(300px) rotateX(-180deg) rotateY(0deg);
            -webkit-transform: perspective(300px) rotateX(-180deg) rotateY(0deg) ;
          } 100% { 
            transform: perspective(300px) rotateX(-180deg) rotateY(-180deg);
            -webkit-transform: perspective(300px) rotateX(-180deg) rotateY(-180deg);
          }
        }
        </style>
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="object" id="first_object"></div>
                <div class="object" id="second_object"></div>
                <div class="object" id="third_object"></div>
            </div>
        </div>
    </div>
    `;

    //呈现loading效果

    document.write(_LoadingHtml);

    //监听加载状态改变
    document.onreadystatechange = completeLoading;

    //加载状态为complete时移除loading效果
    function completeLoading() {
        if (document.readyState == "complete") {
            var loadingMask = document.getElementById('loading');
            loadingMask.parentNode.removeChild(loadingMask);
        }
    };
})(jQuery);