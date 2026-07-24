function toggleTheme() {
  var root = document.documentElement;
  var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('sq-theme', next);
}

function handleSubmit(e, okId) {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById(okId).style.display = 'block';
  // To actually submit, replace the above with:
  fetch(e.target.action, { method:'POST', body:new FormData(e.target), headers:{'Accept':'application/json'} })
    .then(() => { e.target.style.display='none'; document.getElementById(okId).style.display='block'; });
}
