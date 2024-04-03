// --- AJUDA DO GPT ---

document.addEventListener("DOMContentLoaded", function() {
  const deleteButtons = document.querySelectorAll('.delete-blog-btn');

  deleteButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();

          const confirmation = confirm("Tem certeza de que deseja excluir este blog?");
          if (confirmation) {
              const blogId = this.getAttribute('data-id');
              fetch(`/blog/delete/${blogId}`, {
                  method: 'DELETE'
              })
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Erro ao excluir o blog');
                  }
                  // Recarregar a página ou atualizar a lista de blogs após a exclusão
                  window.location.reload();
              })
              .catch(error => {
                  console.error('Erro:', error);
                  // Lidar com erros de exclusão, se necessário
              });
          }
      });
  });
});
