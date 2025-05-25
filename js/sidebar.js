document.querySelectorAll('.group').forEach(title=>{
    title.addEventListener('click',()=>{
      const ul = title.nextElementSibling;
      ul.classList.toggle('hide');
    });
  });
  