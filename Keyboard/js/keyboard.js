/**
 * Created by KelipuTe on 2017/8/7.
 */
$(document).ready(function () {
    var secret = [38,38,40,40,37,37,39,39,66,65,66,65];
    var keyLocation = 0;
    $(document).keydown(function(event){
        if(event.keyCode == secret[keyLocation]){
            console.log("right continue");
            ++keyLocation;
            if(keyLocation == 12){
                console.log("success");
                $("#secret").hasClass('secret');
                $("#secret").removeClass('secret');
                $("#secret").addClass('show');
            }
        }else{
            keyLocation = 0;
            console.log("wrong,please again");
        }
    });
});