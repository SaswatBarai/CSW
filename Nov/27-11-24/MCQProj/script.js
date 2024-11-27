    // Fetching the URL of the website
    const pathname = window.location.pathname;
    const fileName = pathname.split('/').pop();
  
    // Accessing the file number using split function, which will split ["", num, ""]
    const parts = fileName.split(/page|\.html/);
    console.log(parts);
    console.log(parts[1]);
  
    // Changing the value into int
    let ans = parseInt(parts[1], 10);
    console.log(ans);
  
    let next = ans + 1;
    console.log(next);
  

$(document).ready(function () {

    $("#Next").click(function (event) {
      event.preventDefault();
      let check = `input[name='Q${ans}']:checked`;
  
      if ($(check).length != 1) {

        alert(`Please answer question ${ans}`);
        window.location.href = `./page${ans}.html`;
      } else {
        window.location.href = `./page${next}.html`;  
      }
    });
  });

  //Separre code for page5
  $(document).ready(function(){
    $("#submit-btn").click(function (event) {
        let check = `input[name='Q${ans}']:checked`;

        if ($(check).length !== 1) {
          // If no answer is selected, show an alert
          alert(`Please answer question ${ans}`);
        } else {
            $(".Thanks").css({
                "display":"flex"
            })
        }
    })
  })
  