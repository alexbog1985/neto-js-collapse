import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const collapse = document.querySelector('.collapse');

  btn.addEventListener('click', () => {
    if (collapse.classList.contains('show')) {
      collapse.style.maxHeight = `${collapse.scrollHeight}px`;
      // eslint-disable-next-line no-unused-expressions
      collapse.offsetHeight;
      collapse.style.maxHeight = '0';
      collapse.classList.remove('show');
    } else {
      collapse.style.maxHeight = '0';
      collapse.classList.add('show');
      collapse.style.maxHeight = `${collapse.scrollHeight}px`;

      setTimeout(() => {
        if (collapse.classList.contains('show')) {
          collapse.style.maxHeight = 'auto';
        }
      }, 1000);
    }
  });
});
