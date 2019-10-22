// $(document).ready(function() {
//   $("button#hello").click(function() {
//     $("ul#user").prepend("<li>Hello!</li>");
//     $("ul#webpage").prepend("<li>Why hello there!</li>");
//   });
//
//   $("button#goodbye").click(function() {
//     $("ul#user").prepend("<li>Goodbye!</li>");
//     $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
//   });
//
//   $("button#stop").click(function() {
//     $("ul#user").prepend("<li>Stop copying me!</li>");
//     $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//   });
// });

$(document).ready(function() {
  $("#cats").click(function() {
    $("#cats-list").append("<li>Meow!</li>");
    $("#dogs-list").append("<li>Woof!</li>");
    $('<img src="cat.jpg">').appendTo("#empty");

  });

  $("#alt").click(function() {
    $("#cats-list").prepend("<li>Oink!</li>");
    $("#dogs-list").prepend("<li>Ribbit!</li>");

  });

  // $("#cats").click(function() {
  //   $("#above").append("<img src="cat.jpg" alt="picture of a cat">");
  //
  // });
});
