// Click an operand or operator button to append its corresponding text to the screen.

// $document.ready(function(){
//   event.preventDefault();
//
//   var clear = $("#clear");
//   var theScreen = $("#screen");
//   var buttons $(".buttons");
//
// $("#buttons").button.click(function(event){}
//   theScreen.append

$(document).ready(function() {

        var buttons = $(".buttons");
        var Screen = $("#screen");
        var clear = $("#clear");
        var Op = $(".operator").text();
        console.log(Op);
        var data = Screen.text();



        function clear(event) {
            buttons.click(function clear(event) {
                event.preventDefault();
                Screen.text('');
            })
        };



        var Span = $('.buttons').children().click(function() {
            event.preventDefault();
            // if(event.target.innerText){
            //     // data.split('').
            //     data.eval(event.target.Screen)
            // }
            // console.log(this.innerText);
            // console.log(this);
            switch (event.target.innerText) {
                case 'x':
                    Screen.append('*');
                    break;
                case 'C':
                    Screen.text('');
                    break;
                case '=':
                    calculate();
                    break;
                case '÷':
                    Screen.append('/');
                    break;
                default:
                    Screen.append(this.innerText);
            }


        })

        function calculate() {
            var data = Screen.text();
            data = eval(data)
            Screen.append(data)

            // console.log(data.split());
            //   console.log(Screen.text());


        }

    })
    //
    //
    // }
