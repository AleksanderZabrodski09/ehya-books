// $(document).ready(function () {
//   $('.modal__form').validate({
//     messages: {
//       name: {
//         required: "Please specify your name",
//         minlength: jQuery.validator.format("Your name must have at least 2&nbsp;letter!"),
//       },
//       email: {
//         required: "We need your email address to contact you",
//         email: "Your email address must be in the format of name@domain.com",
//       },
//       phone: {
//         required: "Your phone is required",
//         minlength: jQuery.validator.format("You mast have at least 12 digits required!"),
//       },
//     },
//   });
// });
$(document).ready(function () {
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: jQuery.validator.format("Your name must have at least 2&nbsp;letter!"),
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Your phone is required",
          minlength: jQuery.validator.format("You mast have at least 11 digits required!"),
        },
      },
    });
  });
  $(".phone").mask("+99 999 999 999");
  // $(function () {
  //2. Получить элемент, к которому необходимо добавить маску
  // $(".phone").mask("+99 999 999 999");
  // });
});