import sextouImg from '../../assets/projects/sextou.png';
import gitfavImg from '../../assets/projects/gitfav.png';
import gobarberImg from '../../assets/projects/gobarber.png';
import gitcompareImg from '../../assets/projects/gitcompare.png';
import flexblogImg from '../../assets/projects/flexblog.png';
import instagramImg from '../../assets/projects/instagram-front.png';
import apiImg from '../../assets/projects/api.jpg';
import yeepLogo2 from '../../assets/projects/yeep-logo-2.png';
import yeepLogo1 from '../../assets/projects/yeep-logo-1.png';

const portfolioDB = [
  {
    title: "Yeep mobile",
    description: "Mobile version of the yeep app, which is an event management app.",
    techs: "React Native, Redux",
    background: yeepLogo1,
    link: "https://github.com/rayoack/yeep-mobile"
  },
  {
    title: "Yeep API",
    description: "Yeep application API, which is an event management application.",
    techs: "Node.js, Express.js, AWS, PostgresSQL",
    background: yeepLogo2,
    link: "https://github.com/rayoack/yeep-mobile"
  },
  {
    title: "Sextou",
    description: "Este site era uma tarefa do curso Recode Pro, e o objetivo era desenvolver um site onde você pode encontrar lugares para se divertir que estejam próximos a você",
    techs: "HTML, CSS, Vanilla",
    background: sextouImg,
    link: "https://github.com/rayoack/sextouV1"
  },
  {
    title: "GitFav",
    description: "GitFav é um app web desenvolvido com ReactJs e Redux, com o objetivo de exibir algumas inormações de respositórios do Github.",
    techs: "React.js, Redux, Axios, Styled Components",
    background: gitfavImg,
    link: "https://github.com/rayoack/gitfav"
  },
  {
    title: "Go Barber Versão 2 - API",
    description: "Uma API de um sistema de agendamento para cortes de cabelo online utilizando Node.js e Express.",
    techs: "Node.js, MySQL, Sequelize",
    background: apiImg,
    link: "https://github.com/rayoack/gobarber-v2"
  },
  {
    title: "Go Barber",
    description: "O objetivo era desenvolver um simples sistema de agendamento para cortes de cabelo online utilizando Node.js e Nunjucks.",
    techs: "Node.js, Express, MySQL, Nunjucks, Sequelize, Multer",
    background: gobarberImg,
    link: "https://github.com/rayoack/gobarber"
  },
  {
    title: "Git Compare",
    description: "Uma tela inicial com um formulário onde o usuário pode pesquisar por repositórios, digitando o nome de usuário do dono e o nome do repositório.",
    techs: "React.js, Styled Components, Axios",
    background: gitcompareImg,
    link: "https://github.com/rayoack/git-compare"
  },
  {
    title: "FlexBlog",
    description: "Um simples blog totalmente estilizado com o flexbox do CSS",
    techs: "HTML, CSS",
    background: flexblogImg,
    link: "#"
  },
  {
    title: "React Instagram (Front-end)",
    description: "O objetivo era desenvolver um clone da interface do aplicativo web do Instagram com o React.js, cronsumindo uma API construida com Node.Js.",
    techs: "React.js, React Router, CSS, Axios",
    background: instagramImg,
    link: "https://github.com/rayoack/react-instagram-front"
  },
  {
    title: "API Ecommerce",
    description: "Uma API para um sistema de ecommerce similar ao mercado livre, O projeto foi criado utilizando o Node.js.",
    techs: "Node.js, Express, MongoDB, Nodemailer, Docker, Redis",
    background: apiImg,
    link: "https://github.com/rayoack/api-ecommerce"
  },
  {
    title: "API React Instagram",
    description: "Uma API construida com Node.js para ser consumida pelo clone do aplicativo web do Instagram criado com React.js.",
    techs: "Node.js, Express, MongoDB, Socket.io, Multer",
    background: apiImg,
    link: "https://github.com/rayoack/React-Instagram-Clone"
  },
]

export default portfolioDB;