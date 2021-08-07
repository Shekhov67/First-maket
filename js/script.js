'use strict';

let buttonGet = document.querySelector('.header__button');

buttonGet.addEventListener('click', function () {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: 'Вы нажали на кнопку GET STARTED.'
  })
});

let logoIcon = document.querySelector('.header__logo-icon');

logoIcon.addEventListener('click', function () {
  Swal.fire({
    title: 'Login Form',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`)
      }
      return { login: login, password: password }
    }
  }).then((result) => {
    Swal.fire(`
      Login: ${result.value.login}
      Password: ${result.value.password}
    `.trim())
  })
});

let buttonLoad = document.querySelector('.projects__btn');

buttonLoad.addEventListener('click', function () {
  Swal.fire({
    title: 'Сохранить все ваши действия?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Сохранить`,
    denyButtonText: `Не сохранять`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Сохранено!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Вы не сохранили!', '', 'info')
    }
  })
});

let readMore = document.querySelector('.footer__link');

readMore.addEventListener('click', function () {
  let timerInterval
  Swal.fire({
    title: 'Автозакрытие сообщения!',
    html: 'Сообщение будет закрыто через <b></b> милисекунд.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getHtmlContainer()
        if (content) {
          const b = content.querySelector('b')
          if (b) {
            b.textContent = Swal.getTimerLeft()
          }
        }
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
});
