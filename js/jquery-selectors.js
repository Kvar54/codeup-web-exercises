$(() => {

    // $('#id-container').css('background-color', 'red');
    //
    // document.querySelector('#id-container').style.
    //
    //     // let titleElements= document.querySelectorAll()
    //
    //
    //     // Use jQuery to select an element by id
    //     // Alert the contents
    //     alert($('#links-list').html());
    //
    // const aboutContainerHTML = $('#about-container').html();
    // alert(aboutContainerHTML);
    //
    //
    // $('.codeup').css('border', '1px dotted red');
    //
    // // JS Equivalent
    // const codeUp = document.querySelectorAll(".codeup");
    //
    // // This is obsolete and confusing
    // // Don't use it
    // const codeUpTest = document.getElementsByClassName("codeup");
    //
    // codeUp.forEach(aSingleCodeUp => {
    //     aSingleCodeUp.style.border = '1px dotted red';
    // });
    //
    //
    // $('li').css('fontSize', '20px');
    //
    //
    // $('h1, p, li').css('background-color', 'yellow');
    //
    //
    // // alert($('li').text());
    //
    // document.querySelectorAll('li, p').forEach((element) => {
    //     element.style.color = "blue";
    // });

    function onClickBackground (e){
        $(e.target).css ('background-color', 'red');

    }
    $('h1')
        .on('click', onClickBackground)

    function onClickGetBig (e){
        $(e.target).css ('font-size', '18px');

    }
$('p').on('dblclick',(e) => {
        $('p').css("font-size",'18px')

    // .on('dblclick',onClickGetBig);
    //
    // $(p).on('dblclick')




    $('li').on('mouseenter',(e) => {
       $(e.target).css ('color','red');
    });
    $('li').on('mouseleave',(e)=>{
        $(e.target).css ('color','black');
    });
});
