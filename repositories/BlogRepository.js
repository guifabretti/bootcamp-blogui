import { v4 as uuidv4 } from 'uuid';

// Mock => Array dentro da memória, não utilizando um Banco de Dados
let blogs = [
  {
    id: uuidv4(), // uuid -> hashes, id não sequencial
    titulo: 'Inteligencia Artificial e seus malefícios',
    texto: 'Nos últimos anos, a inteligência artificial (IA) tem avançado a passos largos, penetrando em quase todos os aspectos de nossas vidas. Desde assistentes virtuais até algoritmos de recomendação, a IA tornou-se uma parte onipresente de nossa sociedade. \n\n No entanto, enquanto celebramos suas conquistas e avanços, é crucial reconhecer e confrontar os potenciais malefícios que essa tecnologia também pode trazer. Uma das preocupações mais urgentes é a substituição de empregos por automação inteligente. À medida que os algoritmos se tornam mais sofisticados, funções anteriormente realizadas por humanos estão sendo automatizadas, deixando muitos trabalhadores desempregados e enfrentando incertezas econômicas. \n\n Além disso, a automação exacerbou as disparidades de renda, já que os benefícios econômicos tendem a se concentrar nas mãos de poucos enquanto muitos outros lutam para encontrar trabalho. Outra questão preocupante é o viés algorítmico. Os sistemas de IA são treinados com base em conjuntos de dados fornecidos pelos humanos, o que significa que podem perpetuar preconceitos existentes. Isso pode levar a decisões discriminatórias em áreas como contratação, empréstimos e justiça criminal, ampliando as disparidades sociais e a injustiça. Além disso, há preocupações éticas em torno da privacidade e segurança dos dados. Com a coleta massiva de informações pessoais, as empresas de tecnologia têm um poder sem precedentes sobre nossas vidas. \n\n A falta de regulamentação adequada pode resultar em abusos de poder, vigilância invasiva e até mesmo manipulação de comportamento. No entanto, reconhecer esses malefícios não significa rejeitar a inteligência artificial. Em vez disso, devemos abordar essas preocupações de forma proativa, implementando políticas e regulamentações que garantam o uso ético e responsável da IA. Isso inclui a transparência nos algoritmos, proteção da privacidade do usuário e programas de reciclagem e reconversão para trabalhadores afetados pela automação. \n\n A inteligência artificial tem o potencial de transformar nosso mundo para melhor, mas só alcançaremos esse objetivo se enfrentarmos os desafios que ela apresenta. Ao reconhecer e mitigar seus malefícios, podemos aproveitar todo o seu potencial de maneira ética e equitativa, construindo assim um futuro onde a IA trabalhe para o bem de todos.',
    imgURL: 'https://midias.correiobraziliense.com.br/_midias/jpg/2023/07/24/1200x801/1_foto_da_ia-28557316.jpg'
  },
  {
    id: uuidv4(), // uuid -> hashes, id não sequencial
    titulo: 'DApps, o futuro da internet',
    texto: 'À medida que a tecnologia blockchain continua a evoluir, um conceito que está ganhando cada vez mais destaque é o das Aplicações Descentralizadas, ou DApps. Essas plataformas, construídas sobre a infraestrutura descentralizada da blockchain, têm o potencial de revolucionar a maneira como interagimos com a internet e uns com os outros. \n\n A principal característica que define as DApps é sua natureza descentralizada. Ao contrário das aplicações tradicionais, que dependem de servidores centralizados, as DApps são executadas em uma rede distribuída de computadores, tornando-as mais resistentes à censura e à manipulação. Isso significa que as DApps oferecem maior segurança e transparência, reduzindo a dependência de intermediários e criando um ambiente mais justo e inclusivo. \n\n Um dos setores mais promissores para as DApps é o financeiro. Plataformas como o Ethereum permitiram o desenvolvimento de contratos inteligentes, que são programas autoexecutáveis que automatizam transações financeiras. Isso possibilita a criação de serviços financeiros descentralizados, como empréstimos peer-to-peer, trocas descentralizadas e até mesmo sistemas de previdência.',
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

  findByTitulo(titulo){
    return new Promise((resolve) => resolve(
      blogs.find((blog) => blog.titulo === titulo)
    ));
  }

  delete(id){
    return new Promise((resolve) => {
      blogs = blogs.filter((blog) => blog.id !== id)
      resolve()
    });
  }
  
  create({ titulo, texto, imgURL }) {
    return new Promise((resolve) => {
      const newBlog = {
        id: uuidv4(),
        titulo,
        texto,
        imgURL,
      };
      blogs.push(newBlog);
      resolve(newBlog);
    });
  }


  update(id, { titulo, texto, imgURL }){
    return new Promise((resolve) => {
      const updatedBlog = {
        id,
        titulo,
        texto,
        imgURL,
      }
      blogs = blogs.map((blog) => (
        blog.id === id ? updatedBlog : blog
      ))
      resolve(updatedBlog)
    });
  }
}

export default new BlogRepository();
