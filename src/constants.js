// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import smartleavenLogo from './assets/company_logo/smartleaven.png';

// Education Section Logo's
import vitsLogo from './assets/education_logo/vit_logo.png';
import cshvLogo from './assets/education_logo/cshv_logo.png';
import kotaLogo from './assets/education_logo/kota_logo.png';

// Project Section Logo's
import tomato from './assets/work_logo/tomato.png';
import forever from './assets/work_logo/forever.png';
import malware from './assets/work_logo/malware.png';
import audio from './assets/work_logo/audio.png';
import dsa from './assets/work_logo/dsa.png';
import jivhala from './assets/work_logo/jivhala.png';

// assets for blog thumbnails
import blog1 from './assets/blogs/blog1.png';
import blog2 from './assets/blogs/blog2.png';
import blog3 from './assets/blogs/blog3.png';
import excel_basics from './assets/blogs/excel_basics.png';
import excel_power_query from './assets/blogs/excel_power_query.jpeg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: smartleavenLogo,
      role: "Networking Engineer",
      company: "SmartLeaven Technologies Pvt Ltd",
      date: "August 2023 - October 2023",
      desc: " Collaborated with industry-leading technologies like Modbus TCP/IP and OPC UA to streamline data exchange and real-time monitoring in industrial systems. Created and managed robust communication gateways for fast, bidirectional data transfers between Modbus TCP/IP devices, along with an OPC UA Server connection.",
      skills: [
        "Modbus TCP/IP",
        "OPC UA",
        "TCP/IP",
        "Client-server architecture",
        "IP addressing, ports, sockets",
        "Middleware integration",
        "Industrial IoT",
        "Linux",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: vitsLogo,
      school: "Vellore Institute of Technology-VIT",
      date: "Sept 2021 - April 2025",
      grade: "8.12 CGPA",
      desc: "I have completed my Bachelor's degree in Engineering from Vellore Institute of Technology. During my time at the university, I built a strong foundation in programming, web development, and computer science fundamentals. I studied subjects like Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Web Technologies, and Software Engineering. I actively participated in various technical workshops and hackathons, which helped me sharpen my practical skills. My academic journey at Vellore Institute of Technology played a significant role in developing my technical expertise.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: kotaLogo,
      school: "Kota Junior College of Science- Karad",
      date: "Apr 2020 - March 2021",
      grade: "95.33%",
      desc: "I completed my class 12 education from Kota Junior College of Science, Karad, under the Maharashtra State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Information Technology.",
      degree: "Maharashatra State Board(XII) - HSC",
    },
    {
      id: 2,
      img: cshvLogo,
      school: "Chhatrapati Shivaji Highschool- Vaduj",
      date: "Apr 2018 - March 2019",
      grade: "91.80%",
      desc: "I completed my Class 10 education at Chhatrapati Shivaji High School, Vaduj, under the Maharashtra State Board. It was a valuable and enjoyable learning experience that laid the foundation for my academic growth.",
      degree: "Maharashtra State Board(X) - SSC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Online Food Delivery Web App",
      description:
        "The full-stack food delivery app was developed using the MERN stack, including MongoDB, Express.js, React.js, and Node.js. The app features a responsive front-end, RESTful APIs, secure user authentication, and real-time order tracking. The application was deployed using MongoDB, with payment processing integrated using UPI and geolocation features for delivery tracking.",
      image: tomato,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","MongoDB", "Express", "Node.js"],
      github: "https://github.com/Aditya1517/Online-Food-Delivery-Web-App",
    },
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Stripe, Razorpay Built a full-stack e-commerce platform with user authentication, product management, and cart features. Integrated payments using Cash on Delivery, Stripe, and Razorpay. Used JWT for secure APIs and MongoDB for database.",
      image: forever,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Stripe", "Razorpay"],
      github: "https://github.com/Aditya1517/E-Commerce",
      webapp: "https://e-commerce-frontend-kappa-six.vercel.app/",
    },
    {
      id: 2,
      title: "Malware Detection Using CNN FL and PTQ",
      description:
        "Designed a privacy-preserving malware detection system using CNNs on the MalImg dataset. Implemented Federated Learning via PySyft to train across decentralized clients and applied Post-Training Quantization to optimize the model for edge deployment on IoT devices. Achieved high accuracy with reduced model size, ideal for real-time malware classification.",
      image: malware,
      tags: ["Python", "PyTorch", "Federated Learning", "CNN", "Post-Training Quantization", "Malware Detection"],
      github: "https://github.com/Aditya1517/Optimized-Federated-Learning-Based-Malware-Detection-Using-CNN-and-Post-Training-Quantization",
    },
    {
      id: 3,
      title: "Emotional Analysis of Audio",
      description:
        "Developed a deep learning-based emotion recognition system for audio data, leveraging datasets like RAVDESS, TESS, CREMA-D, and SAVEE. Preprocessed and augmented data to create a balanced dataset, as illustrated by evenly distributed emotions (400 samples each) across seven categories: Neutral, Happy, Sad, Angry, Fearful, Disgusted, and Surprised. Extracted audio features using Librosa and trained an LSTM and CNN model, achieving an overall accuracy of 85.5 percent.",
      image: audio,
      tags: ["Python", "Deep Learning", "Audio Processing", "LSTM", "CNN", "Librosa"],
      github: "https://github.com/Aditya1517/Emotional-Analysis-of-Audio",
    },
    {
      id: 4,
      title: "Java and DSA",
      description:
        "A comprehensive repository of Java programming and Data Structures and Algorithms (DSA) resources. It includes a wide range of Java programs, DSA concepts, and practical examples to help learners understand and implement core programming principles effectively.",
      image: dsa,
      tags: ["Java", "Data Structures", "Algorithms", "Programming"],
      github: "https://github.com/Aditya1517/Java-and-DSA",
    },
    {
      id: 5,
      title: "5TechG Jivhala Motors",
      description:
        "A modern, responsive website for Jivhala Motors, showcasing their services and offerings. Built with React, Javascript, Node, MongoDB, Express Server. It highlights the company's commitment to quality and customer satisfaction.",
      image: jivhala,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aditya1517/5TechG-Jivhala-Motors",
    },
  ];

  export const blogs = [
  {
    id: 0,
    title: "How I Built a Scalable Food Delivery Web App Using the MERN Stack",
    description: "Scalable Food Delivery Web App built with the MERN stack featuring JWT auth, image uploads, Context API, and full deployment. A practical guide with code snippets and tips for real-world devs.",
    image: blog1,
    date: "July 14, 2025",
    link: "https://medium.com/@adityamohiteakm/how-i-built-a-scalable-food-delivery-web-app-using-the-mern-stack-9b8365795fb7"
  },
  {
    id: 1,
    title: "Lessons Learned from Building a Full-Stack E-Commerce App with Razorpay & Stripe Integration",
    description: "A hands-on guide to building a full-stack e-commerce app with secure Razorpay and Stripe payment integration using React, Node.js, and MongoDB.",
    image: blog2,
    date: "July 15, 2025",
    link: "https://medium.com/@adityamohiteakm/lessons-learned-from-building-a-full-stack-e-commerce-app-with-razorpay-stripe-integration-9d4d2ec0a2d7"
  },
  {
    id: 2,
    title: "Getting Started with Emotion Recognition from Audio",
    description: "A hands-on guide to recognizing human emotions from speech using deep learning and Python.",
    image: blog3,
    date: "July 13, 2025",
    link: "https://medium.com/@adityamohiteakm/getting-started-with-emotion-recognition-from-audio-3e2676504b24"
  },
  {
    id: 3,
    title: "Federated Learning with CNN for Edge Malware Detection — A Practical Guide",
    description: "A practical guide to deploying Federated Learning with CNNs on Raspberry Pi for real-time, privacy-preserving malware detection in Industrial IoT systems — highlighting architecture, implementation, and key learnings.",
    image: malware,
    date: "July 21, 2025",
    link: "https://medium.com/@adityamohiteakm/federated-learning-with-cnn-for-edge-malware-detection-a-practical-guide-368a1cffc26e"
  },
  {
    id: 4,
    title: "Excel Basics for Data Analysis: A Beginner’s Guide to Formulas, Functions & Shortcuts",
    description: "A beginner-friendly guide to essential Excel functions, formulas, and shortcuts for effective data analysis — covering math, logic, conditional tools, text functions, and worksheet management.",
    image: excel_basics,
    date: "July 23, 2025",
    link: "https://medium.com/@adityamohiteakm/excel-basics-for-data-analysis-a-beginners-guide-to-formulas-functions-shortcuts-04a8bc94b5df"
  },
  {
    id: 5,
    title: "Mastering Power Query in Excel: From Basics to Advanced Data Transformation",
    description: "A complete beginner-to-advanced guide to Power Query in Excel — learn how to import, clean, transform, and automate data workflows using this powerful no-code ETL tool.",
    image: excel_power_query,
    date: "July 16, 2025",
    link: "https://medium.com/@adityamohiteakm/mastering-power-query-in-excel-from-basics-to-advanced-data-transformation-347c2946b419"
  },
];