const calculate1 = document.querySelector('.calculate')
    calculate1.addEventListener('click', (e) => {
        var entereddate = new Date(document.querySelector('.date').value)

        var inputdate = {
            year: entereddate.getFullYear(),
            month: entereddate.getMonth(),
            day: entereddate.getDay(),
        }

        var date = new Date()
        var d2 = date.getDate()
        var m2 = date.getMonth()
        var y2 = date.getFullYear()
        var month = [31 , 28 , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if(inputdate.day > d2)
        {
            d2 = d2 + month[m2 - 1]
            m2 = m2 - 1
        }

        if(inputdate.month > m2)
        {
            m2 = m2 + 12
            y2 = y2 - 1
        }

        var d = d2 - inputdate.day
        var m = m2 - inputdate.month
        var y = y2 - inputdate.year

        var year = (document.querySelector('.year').innerHTML = y)
        var months = (document.querySelector('.month').innerHTML = m)
        var day = (document.querySelector('.day').innerHTML = d)
    })

// function age() {
//     var entereddate = new Date(document.querySelector('.date').value)

//     var date = new Date();
//     var d2 = entereddate.getDate();
//     var m2 = 1 + entereddate.getMonth();
//     var y2 = entereddate.getFullYear();
//     var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
//     if (d1 > d2) {
//         d2 = d2 + month[m2 - 1];
//         m2 = m2 - 1;
//     }
//     if (m1 > m2) {
//         m2 = m2 + 12;
//         y2 = y2 - 1;
//     }
//     var d = d2 - d1;
//     var m = m2 - m1;
//     var y = y2 - y1;

//     var year = (document.querySelector('.year').innerHTML = y)
//          var months = (document.querySelector('.month').innerHTML = m)
//          var day = (document.querySelector('.day').innerHTML = d)

// //     document.getElementById("age").innerHTML =
// //         "Your Age is " + y + " Years " + m + " Months " + d + " Days";
//  }