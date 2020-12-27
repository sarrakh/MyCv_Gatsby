const path = require('path');

module.exports = {
    name:"Mojaave.com",
    siteTitle: "sarra khiari ", // Site title.
    siteLogo: `${__dirname}/src/static/images/cc.jpg`,
    siteUrl: "https://mhjadav.github.io/gatsby-starter-bootstrap-cv", // Domain of your website without pathPrefix.
    siteKeyword:"Sarra Khiari 2tudiante en 3 éme année cycle ingénieur",
    siteDescription: "Full stack developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby", // Website description used for RSS feeds/meta description tag.
    googleAnalyticsID: "UA-115817837-3", // GA tracking ID.
    userName: "Sarra Khiari", // Username to display in the author segment.
    userTwitter: "sarrakh", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Tunisie, Tunis, Tunisia", // User location to display in the author segment.
    userAvatar: "./src/static/images/cc.jpg", // User avatar to display in the author segment.
    favicon32:`./src/static/images/cc.jpg`,
    favicon16:`./src/static/images/cc.jpg`,
    ogImage: `./src/static/images/cc.jpg`,
    userDescription:"Développeur full stack, j'ai conçu et développé des applications web rapides et réactives utilisant Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby", 
    userPhone:"55007318",
    userEmail:"Sarrakhiari26@gmail.com",
    skills:[
        {
            name:"AngularJS",
            rating: "8"
        },
        {
            name:"SpringBoot",
            rating: "8"
        },
        {
            name:"NodeJS",
            rating: "6"
        },
        {
            name:"Android",
            rating: "5"
        },
        {
            name:"Java",
            rating: "8"
        }
    ],
    langauges:[
        {
            name:"Francais",
            rating: 8
        },
        {
            name: "Anglais",
            rating: 7
        },
        {
            name: "Arabe",
            rating: 10
        }
    ],
    experience:[
        {
            position:"Stagaire",
            company: "Sotetel.",
            current:false,
            startDate: "Août 2020",
            endDate: "Septembre 2020",
            overview:"Conception et développement d’une application WEB pour la gestion des réclamations"
        },
        {
            position:"Stagaire ",
            company: "Ministère des Affaires Sociales.",
            current:false,
            startDate: "Janvier 2017",
            endDate: "Mai 2017",
            overview:"Conception et développement d’une application WEB pour la gestion des concours internes et externes"
        },
        {
            position:"Stagaire",
            company: "Statistique Tunisie",
            current:false,
            startDate: "Février 2017",
            endDate: "Février 2017",
            overview:"Développement de la maquette de saisie de l’enquête Tic auprès des ménages"
        },
        {
            position:"Stagaire",
            company: "COFICAB.",
            current:false,
            startDate: "Janvier 2015",
            endDate: "Février 2015",
            }
    ],
    education:[
        {
            college:"Institut Supérieur d’Informatique de Tunis",
            degree:"Diplome nationale d'ingeneieur.",
            startDate:"Septembre 2017",
            endDate: "juin 2021",
            current: true,
            overview: "Troisième année cycle d’ingénieur - spécialité IDL (Ingénierie du Développement du Logiciels)"
        },
        {
            college:"Some College of Engineering 2",
            degree:"Licence appliquée en Technologies de l’Informatique ",
            startDate:"Septembre 2014",
            endDate: "juin 2017",
            current: false,
            overview: "spécialité DSI (Développement des Systèmes d’Information)"
        },
        {
            college:"Lycée Imtieze",
            degree:"Diplôme de Baccalauréat Science de l’Informatique",
            startDate:"Septembre 2013",
            endDate: "juin 2014",
            current: false,
             },
        {
            college:"Some College of Engineering 4",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
    ],
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/mhjadav/gatsby-starter-bootstrap-cv",
        iconClassName: "fa fa-github"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/sarrakh",
        iconClassName: "fa fa-twitter"
      },
      {
        label: "Email",
        url: "mailto:sarrakhiari26@.com",
        iconClassName: "fa fa-envelope"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sarra-khiari/",
        iconClassName: "fa fa-linkedin"
      }
    ],
    copyright: "Copyright © 2020. @SarraKhiari", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#5a76b9", // Used for setting manifest and progress theme colors.
    backgroundColor: "#fff" // Used for setting manifest background color.
  };