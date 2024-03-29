import BlogRepository from "../repositories/BlogRepository.js";

class BlogController{
  async index(req, res) {
    // res.render("index.ejs");
    const blogs = await BlogRepository.findAll(); // transformando em código assincrono
    res.json(blogs);
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

  store() {

  }

  update() {

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