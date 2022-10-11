
var post_count = 0;
var element_order;


function postFunction()
{
post_count += 1;
element_order_check();
var comment = document.getElementById(element_order);
var userInput = document.getElementById("text1");
comment.innerHTML = userInput.value;
}

function clearFunction(){
post_count =0;
while(post_count<3){
 clear_inline();
}
post_count = 0;
}

function clear_inline(){
    post_count += 1;
    element_order_check();
    var comment = document.getElementById(element_order);
    var nullInput = "";
    comment.innerHTML = nullInput;
}
function element_order_check(){
    if(post_count == 1){
        element_order = "topic1"
            }
            else if(post_count == 2){
        element_order = "comment1"
            }
            else if(post_count == 3){
        element_order = "comment2"
            }
            else{
                element_order = " ";
            }
}