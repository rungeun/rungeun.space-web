fetch('./partials/sidebar-nav.html')
  .then(r => r.text())
  .then(html => {
    document.querySelector('#sidebar-nav').innerHTML = html;

    // 접고·펼치기
    document.querySelectorAll('.group').forEach(title => {
      title.addEventListener('click', () =>
        title.nextElementSibling.classList.toggle('hide')
      );
    });
  })
  .catch(console.error);
