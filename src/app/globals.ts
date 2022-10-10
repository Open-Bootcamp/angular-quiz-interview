export const TECHNOLOGIES = [
    {
        name: 'JavaScript',
        imgUrl: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665257981/app-interview-trainer/logo-javascript_nycpre.png',
        status: true,
        levelTraining: 'advanced',
        bgCard: 'bg-[#f7df1e]',
        textColor: 'text-black',
        iconStroke: 'white',
        bgIconContainer: 'bg-black',
    },
    {
        name: 'Angular',
        imgUrl: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665257981/app-interview-trainer/logo-angular_i83opb.png',
        status: false,
        levelTraining: 'advanced',
        bgCard: 'bg-white',
        textColor: 'text-black',
        iconStroke: 'white',
        bgIconContainer: 'bg-black',
    },
    {
        name: 'React',
        imgUrl: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665257981/app-interview-trainer/logo-react_fqlrsq.png',
        status: false,
        levelTraining: 'advanced',
        bgCard: 'bg-[#222222]',
        textColor: 'text-white',
        iconStroke: 'black',
        bgIconContainer: 'bg-white',
    },
    {
        name: 'Typescript',
        imgUrl: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665257981/app-interview-trainer/logo-typescript_yndnim.png',
        status: false,
        levelTraining: 'advanced',
        bgCard: 'bg-[#2B75CB]',
        textColor: 'text-white',
        iconStroke: 'black',
        bgIconContainer: 'bg-white',
    },
    {
        name: 'Python',
        imgUrl: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665257981/app-interview-trainer/logo-python_l9x212.png',
        status: false,
        levelTraining: 'advanced',
        bgCard: 'bg-white',
        textColor: 'text-black',
        iconStroke: 'white',
        bgIconContainer: 'bg-black',
    },
    {
        name: 'Java',
        imgUrl: 'https://res.cloudinary.com/teoisnotdead/image/upload/v1665257981/app-interview-trainer/logo-java_d2p5zh.png',
        status: false,
        levelTraining: 'advanced',
        bgCard: 'bg-white',
        textColor: 'text-black',
        iconStroke: 'white',
        bgIconContainer: 'bg-black',
    }
];

export const SOCIAL_MEDIAS = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/Open_Bootcamp',
    faIcon: 'fa-twitter',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/openbootcamp_/',
    faIcon: 'fa-instagram',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/school/openbootcamp-escuela/',
    faIcon: 'fa-linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Open-Bootcamp/angular-quiz-interview',
    faIcon: 'fa-github',
  },
];

export const OB_LINKS = {
  footerUrl: 'https://bit.ly/3E5AGBt',
};

export const STATEMENTS = [
    {
        id: 1,
        question: '¿Que resultado sale por la consola?',
        code: '\nlet x = 10;\n\nconst byValue = (y) => {\n   y = 20;\n}\n\nbyValue(x);\nconsole.log(x);',
        answer: [
            {
                text: 'Linea 1: false, Linea 2: true',
                correct: true,
            },
            {
                text: 'Linea 1: true, Linea 2: false',
                correct: false,
            },
            {
                text: 'Linea 1: true, Linea 2: false',
                correct: false,
            }
        ]
    }
];

export const MESSAGES = {
    correct: '¡Respuesta correcta! 🎉',
    incorrect: '¡Respuesta incorrecta! 😢',
    finish: '¡Has terminado el entrenamiento! 🎉',
}
