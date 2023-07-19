$(() => {
    let objImage = document.querySelector('#jojoImage');
    let exit;

    let keypressed = '';
    $(document).on('keyup', (e) => {
        console.log(e.key);
        if (e.keyCode === 37) {
            moveLeft();
        }
        if (e.keyCode === 38) {
            moveUp();
        }
        if (e.keyCode===39){
            moveRight();
        }
            if(e.keyCode === 40) {
                moveDown();
            }
        keypressed += e.key + ",";
        console.log(keypressed)
        let keyPressedArray = keypressed.split(',')
        keyPressedArray.pop()
        console.log(keyPressedArray)
        konamiCode(keyPressedArray);
    });
    function konamiCode(code) {
        if (code[code.length-10] === 'ArrowUp' &&
            code[code.length-9] === 'ArrowUp' &&
            code[code.length-8] === 'ArrowDown' &&
            code[code.length-7] === 'ArrowDown' &&
            code[code.length-6] === 'ArrowLeft' &&
            code[code.length-5] === 'ArrowRight' &&
            code[code.length-4] === 'ArrowLeft' &&
            code[code.length-3] === 'ArrowRight' &&
            code[code.length-2].toLowerCase() === 'b' &&
            code[code.length-1].toLowerCase() === 'a'

            ){
            console.log("i did it");

            $('body').css ('background', 'red');

        }
    }
    $("h1").click(function(){
        $("h1").hide();
        $('#jojoImage').attr("src", "../Img/wlkjoj.gif");
        $("body").css("background-image","url(../Img/bnb,nm.jpeg)")
        $("#pg2").display("block");
    });
    // $('h1')
    //     .on("click",onClickChange)
    // function animatingH1(){



    //let myChar = document.getElementsByTagName("img");

    //document.onkeypress = moveChar;
    // $('document').on('keypress', moveChar())
    // function moveChar(){
    //     //console.log(myChar.offsetLeft);
    //     $('#jojoImage').style.left = $('#jojoImage').offsetLeft + 20 + "px";
    // }

    function moveLeft() {
        console.log("inside moveLeft")
        objImage.style.left = parseFloat(objImage.style.left) - 5 + "px";
    }
    function moveUp() {
        console.log("inside moveUp")
        objImage.style.top = parseFloat(objImage.style.top) - 5 + "px";
    }
    function moveRight() {
        console.log("inside moveRight")
        objImage.style.left = parseFloat(objImage.style.left) + 5 + "px";
    }
    function moveDown() {
        console.log("inside moveDown")
        objImage.style.top = parseFloat(objImage.style.top) + 5 + "px";
    }

    // $(document).ready(function() {
    //     $("#jojoImage").click(function () {
    //         // Change src attribute of image
    //         $(this).attr("src", "../Img/wlkjoj.gif");
    //     });
    // });

    // function onClickChange( event ) {
    //     let target = $( event.target );
    //     if ( target.is( "#jojoImage" ) ) {
    //         target.attr("src", "../Img/wlkjoj.gif");
    //     }
    // }
});