document.addEventListener('DOMContentLoaded', function() {
  var column1Content = document.getElementById('column1-content');
  var column2Content = document.getElementById('column2-content');

  window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Определите условия для каждого варианта фона и содержимого столбцов
    if (scrollPosition < 500) {
      document.body.className = 'variant1';
      column1Content.textContent = 'Содержимое столбца 1 - Вариант 1';
      column2Content.textContent = 'Содержимое столбца 2 - Вариант 1';
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
      document.body.className = 'variant2';
      column1Content.textContent = 'Содержимое столбца 1 - Вариант 2';
      column2Content.textContent = 'Содержимое столбца 2 - Вариант 2';
    } else {
      document.body.className = 'variant3';
      column1Content.textContent = 'Содержимое столбца 1 - Вариант 3';
      column2Content.textContent = 'Содержимое столбца 2 - Вариант 3';
    }
  });
});
