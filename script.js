// Изменение содержимого при прокрутке страницы
    window.addEventListener('scroll', function() {
      var textGenerationQuery = document.getElementById('text-generation-query');
      var imageGenerationQuery = document.getElementById('image-generation-query');
      
      // Примеры текста
      if (window.scrollY < 500) {
        textGenerationQuery.textContent = 'Пример запроса для генерации текста';
        imageGenerationQuery.textContent = '...';
      }
      
      // Примеры изображений
      else {
        textGenerationQuery.textContent = '...';
        imageGenerationQuery.textContent = 'Пример запроса для генерации изображений';
      }
    });
