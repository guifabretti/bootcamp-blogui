import BlogRepository from "../repositories/BlogRepository.js";

class BlogController{
  async index(req, res) {
    res.render("index.ejs");
    // const blogs = await BlogRepository.findAll(); // transformando em código assincrono
    // res.json(blogs);
  }

  async show(req, res) {

    const { id } = req.params;
    const blog = await BlogRepository.findById(id)
    if(!blog){
      //404 = Not Found
      return res.status(404).json({ error: 'Blog not found' })
    }
    res.json(blog)
  }

  async store(req, res) {
    const { titulo, texto, imgURL } = req.body;
    
    if (!titulo || !texto || !imgURL) {
      return res.status(400).json({ error: 'Há algo faltando...' }) //da para fazer separado mas to com preguiça kkk
    }

    //verifica se existe um titulo ja cadastrado
    const tituloExists = await BlogRepository.findByTitulo(titulo)

    if (tituloExists) {
      return res.status(400).json({ error: 'Este título ja existe' })
    }
    const blog = await BlogRepository.create({
      titulo, texto, imgURL,
    })
    res.json(blog)
  }

  async update(req, res) {
    const { id } = req.params;
    const { titulo, texto, imgURL } = req.body;

    const blogExists = await BlogRepository.findById(id)
    if(!blogExists){
      return res.status(404).json({ error: 'Blog not found' })
    }
    
    if (!titulo || !texto || !imgURL) {
      return res.status(400).json({ error: 'Há algo faltando...' }) //da para fazer separado mas to com preguiça kkk
    }

    const tituloExists = await BlogRepository.findByTitulo(titulo)
    if (tituloExists && tituloExists !== id) {
      return res.status(400).json({ error: 'Este título ja existe' })
    }

    const blog = await BlogRepository.update(id, { titulo, texto, imgURL })
    res.json(blog)
  }

  async delete(req, res) {
    const { id } = req.params;
    const blog = await BlogRepository.findById(id)
    if(!blog){
      //404 = Not Found
      return res.status(404).json({ error: 'User not found' })
    }

    await BlogRepository.delete(id);
    // 204 = No content
    res.sendStatus(204)
  }
}

export default new BlogController();