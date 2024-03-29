import { v4 as uuidv4 } from 'uuid';

// Mock => Array dentro da memória, não utilizando um Banco de Dados
let blogs = [
  {
    id: uuidv4(), // uuid -> hashes, id não sequencial
    titulo: 'Inteligencia Artificial e seus malefícios',
    texto: 'teste de texto',
    imgURL: 'https://midias.correiobraziliense.com.br/_midias/jpg/2023/07/24/1200x801/1_foto_da_ia-28557316.jpg'
  },
  {
    id: uuidv4(), // uuid -> hashes, id não sequencial
    titulo: 'DApps, o futuro da internet',
    texto: 'teste de texto',
    imgURL: 'https://media.licdn.com/dms/image/C4D12AQGCRq3ovzK7mg/article-cover_image-shrink_600_2000/0/1644281983613?e=2147483647&v=beta&t=UJgXoJln6HvyY4rpKp5YcqfFqyvRXnguXRbuQEvI6wo',
  },
]

class BlogRepository{
  findAll(){
    return new Promise((resolve) => resolve(blogs));
  }

  findById(id){
    return new Promise((resolve) => resolve(
      blogs.find((blog) => blog.id === id)
    ));
  }


  delete(id){
    return new Promise((resolve) => {
      blogs = blogs.filter((blog) => blog.id !== id)
      resolve()
    });
  }
}

export default new BlogRepository();
