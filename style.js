$('#toogle-ball').click(function () {
    var choose = $(this);
    choose.css(
        {
            transform: 'translateX(40px)'

        }
    )

    var body = $('body')
    $('h1').html('Toggle Onn')
    body.css(
        {
            backgroundColor: 'yellow',

        }
    )
    $(this).click(function () {
        var choose = $(this);
        choose.css(
            {
                transform: 'translateX(-1px)'

            }
        )
    })

}
    //,function()
    // {
    //      var choose2 = $(this)
    //     choose2.css(
    //     {
    //         backgroundColor : 'red'
    //     }
    //     )
    // }
)
// $('#toogle-ball').toggle(function()
// {
//      var choose2 = $(this)
//     choose2.css(
//     {
//         backgroundColor : 'red'
//     }
//     )
// })