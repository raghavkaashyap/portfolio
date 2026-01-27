export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
      id:3,
      name: 'Projects',
      href: '#projects',
    },
    {
        id: 4,
        name: 'Work',
        href: '#work',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [

    {
        "title": "NutriNavigator",
        "desc": "Nutri Navigator is a crowd-sourced calorie-tracking mobile application developed to assist users in managing their nutrition and making informed dietary decisions. Built with a backend powered by Spring Boot, a front-end in Android Studio, and a MySQL database, this app offers a wide range of features to support users in tracking their daily calorie intake, creating personalized meal plans, and exploring a recipe database with detailed nutritional information. The app also fosters community engagement through messaging and enables users to connect, share recipes, and interact with others based on dietary preferences.\n" +
            "\n" +
            "A central feature of Nutri Navigator is calorie tracking, which allows users to log their meals and track their progress towards their nutritional goals. Meal planning tools further support users by letting them organize their daily meals, while dietary restrictions ensure that users can find recipes that fit their specific needs. Push notifications, enabled via WebSockets, keep users engaged by providing reminders and real-time updates about their meal plans and recipe suggestions.",
        "subdesc": "The app features an extensive recipe search, where users can browse a curated database of recipes and filter based on specific dietary restrictions or allergens. Users can also rate recipes and save their favorites for easy access. The messaging feature allows users to communicate with others, share meal tips, and create communities for group meal planning. The app is designed with multiple user roles (user, moderator, admin) to provide flexibility in managing content and interactions within the platform.",
        "href": "https://github.com/raghavkaashyap/NutriNavigator",
        "texture": "/textures/project/project1.mp4",
        "logo": "/assets/NutriNavigator.png",
        "logoStyle": {
            "backgroundColor": "white",
            "border": "0.2px solid rgba(208, 213, 221, 1)",
            "boxShadow": "0px 0px 60px 0px rgba(237, 149, 36, 0.3)"
        },
        "spotlight": "/assets/spotlight1.png",
        "tags": [
            {
                "id": 1,
                "name": "Spring Boot",
                "path": "/assets/spring.png"
            },
            {
                "id": 2,
                "name": "Android Studio",
                "path": "/assets/androidstudio.png"
            },
            {
                "id": 3,
                "name": "MySQL",
                "path": "/assets/MySQL-Logo.png"
            }
        ]
    },
    {
        "title": "Utilities Spend Tracker",
        "desc": "Utilities Spend Tracker is a full-stack web application designed to simplify the management of monthly utility expenses, including Water, Electricity, Gas, and Internet. Built using React for the frontend, Spring Boot for the backend, and MySQL for data storage, the application streamlines the process of tracking and analyzing utility spending. Users can upload their utility bills in PDF format, and the app employs Apache Tika to automatically parse and extract relevant data from these documents, eliminating the need for manual entry.\n" +
            "\n" +
            "To enhance user experience, the application offers dynamic visualizations, enabling users to view their spending trends through interactive graphs and charts. This feature provides actionable insights into monthly expenses, helping users identify patterns and make informed financial decisions. The intuitive interface and robust functionality make the Utilities Spend Tracker a practical tool for effective expense management.",
        "subdesc": "The application's key features include PDF bill uploads, automated data parsing with Apache Tika, and the ability to categorize expenses into predefined categories. The visualizations present data in an easily digestible format, such as bar charts and line graphs, ensuring users can quickly grasp their spending trends. The seamless integration of the frontend, backend, and database provides a smooth and efficient user experience, making expense tracking both accessible and engaging.",
        "href": "https://github.com/raghavkaashyap/utilities-spend-tracker",
        "texture": "/textures/project/project1.mp4",
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        "tags": [
            {
                "id": 1,
                "name": "Spring Boot",
                "path": "/assets/spring.png"
            },
            {
                "id": 2,
                "name": "ReactJS",
                "path": "/assets/react.svg"
            },
            {
                "id": 3,
                "name": "MySQL",
                "path": "/assets/MySQL-Logo.png"
            }
        ]
    },
    {
        "title": "Night Out",
        "desc": "Night Out is an interactive mobile application developed with React Native and Expo, designed to help users plan their night out by providing information on nearby bars and restaurants. The app's main function is to allow users to discover venues based on their current location, displaying a list of nearby bars and restaurants. When a user selects a venue, the app presents key statistics such as ratings, hours of operation, and other relevant details to assist in making decisions.\n" +
            "\n" +
            "The app features a scrollable map with clickable markers indicating the locations of bars and restaurants, enabling users to explore options visually. In addition to the map, there is a dropdown menu that provides easy access to a list of bars and restaurants, allowing users to quickly choose a venue and view its details.",
        "subdesc": "The Night Out app emphasizes simplicity and interactivity, making it easy for users to find nearby places to visit. The combination of a map and dropdown menu ensures smooth navigation, while the ability to view detailed statistics about each venue helps users make better-informed decisions. Future updates are expected to introduce more personalized features, such as tracking user preferences and integrating real-time data on bar and restaurant capacity.",
        "href": "https://github.com/raghavkaashyap/Night-Out",
        "texture": "/textures/project/project3.mp4",
        "logo": "/assets/nightout.png",
        "logoStyle": {
            "backgroundColor": "#6699CC",
            "border": "0.2px solid rgba(208, 213, 221, 1)",
            "boxShadow": "0px 0px 60px 0px rgba(35, 131, 96, 0.3)"
        },
        "spotlight": "/assets/spotlight3.png",
        "tags": [
            {
                "id": 1,
                "name": "React Native",
                "path": "/assets/react.svg"
            },
            {
                "id": 2,
                "name": "Expo",
                "path": "/assets/expo-icon.png"
            }
        ]
    },
    {
        "title": "Task Manager",
        "desc": "This Task Manager is an efficient tool for organizing and managing weekly schedules. Developed using Python and the Tkinter library, the application provides a clear and interactive interface for users to manage their tasks with ease. Users can input task details such as the task name, the time required to complete it, and the deadline. The program then automatically generates a structured schedule, visually representing how time is allocated throughout the week. This helps users stay focused and ensures that all tasks are completed within their set deadlines.\n" +
            "\n" +
            "One of the program's notable features is its ability to send email reminders about upcoming tasks. This ensures that users are consistently aware of their responsibilities and can plan their time effectively without relying solely on memory. With its intuitive design and helpful features, this Task Manager is a practical solution for anyone looking to improve their productivity and time management.",
        "subdesc": "This tool transforms weekly task management into a seamless experience, leveraging Python's capabilities to balance functionality and simplicity. The interactive GUI fosters effortless task creation, while automated schedules and reminders enhance productivity.",
        "href": "https://github.com/raghavkaashyap/Task-manager",
        "texture": "/textures/project/project4.mp4",
        "logo": "/assets/project-logo4.png",
        "logoStyle": {
            "backgroundColor": "#a4bfff",
            "border": "0.2px solid rgba(208, 213, 221, 1)",
            "boxShadow": "0px 0px 60px 0px rgba(102, 131, 237, 0.3)"
        },
        "spotlight": "/assets/spotlight4.png",
        "tags": [
            {
                "id": 1,
                "name": "Python",
                "path": "/assets/python-icon.png"
            },
            {
                "id": 2,
                "name": "MySQL",
                "path": "/assets/MySQL-Logo.png"
            }
        ]
    },
    {
        "title": "Ames Cinema",
        "desc": "Ames Cinema is a movie theater website built to provide users with an intuitive platform for exploring movie showtimes and booking tickets. The project utilizes React.js for a responsive and dynamic frontend, MySQL for managing movie and user data, and Express.js/Node.js for creating a robust backend API. This combination of technologies ensures seamless functionality and efficient data handling, delivering a smooth user experience.\n" +
            "\n" +
            "The website features a user-friendly interface with interactive elements, allowing visitors to browse a curated list of movies, view detailed showtime schedules, and make informed decisions about their moviegoing plans. The integration of backend services with the frontend enables real-time updates and secure data transactions, ensuring reliability and consistency.",
        "subdesc": "Key features include a visually appealing homepage displaying current movie listings, a database-driven showtime schedule, and streamlined ticket booking functionality. The backend handles user requests efficiently, while the database maintains up-to-date information about movies, schedules, and bookings. The use of React.js enhances interactivity and responsiveness, providing users with an engaging browsing experience.",
        "href": "https://github.com/raghavkaashyap/Ames-Cinema",
        "texture": "/textures/project/project4.mp4",
        "logo": "/assets/amescinema.png",
        "logoStyle": {
            "backgroundColor": "white",
            "border": "0.2px solid rgba(208, 213, 221, 1)",
            "boxShadow": "0px 0px 60px 0px rgba(102, 131, 237, 0.3)"
        },
        "spotlight": "/assets/spotlight4.png",
        "tags": [
            {
                "id": 1,
                "name": "Node.js",
                "path": "/assets/nodejs-icon.png"
            },
            {
                "id": 2,
                "name": "ReactJS",
                "path": "/assets/react.svg"
            },
            {
                "id": 3,
                "name": "MySQL",
                "path": "/assets/MySQL-Logo.png"
            }
        ]
    },
    {
        "title": "Bomb Detection Robot",
        "desc": "An autonomous bomb detection robot programmed in C, designed to identify hazardous objects using onboard sensors, simulate response actions, and navigate a physical test environment. It uses sensor polling, motor control logic, and decision-making algorithms to enable dynamic obstacle avoidance and real-time threat localization. The project emphasizes embedded systems development and physical system integration.",
        "subdesc": "Built for a constrained embedded environment with tight control loops and deterministic behavior. Features modular sensor drivers, debounced digital inputs, PWM-based motor control, and a finite-state machine for threat scanning, approach, and avoidance routines. Logged telemetry was used to tune thresholds and improve path stability.",
        "href": "",
        "texture": "/textures/project/project4.mp4",
        "logo": "/assets/roomba.png",
        "logoStyle": {
            "backgroundColor": "white",
            "border": "0.2px solid rgba(208, 213, 221, 1)",
            "boxShadow": "0px 0px 60px 0px rgba(102, 131, 237, 0.3)"
        },
        "spotlight": "/assets/spotlight4.png",
        "tags": [
            {
                "id": 1,
                "name": "C",
                "path": "/assets/c-icon.png"
            },
            {
                "id": 2,
                "name": "Python",
                "path": "/assets/python-icon.png"
            }
        ]
    },
    {
        "title": "Memory Game",
        "desc": "The Memory Game is a console-based challenge that tests players' memory and reaction skills. Built using the C programming language, this game presents a fun and engaging way to exercise cognitive abilities. Players are presented with a series of randomly selected shapes, such as triangles, squares, diamonds, and X's, each displayed within a circle. The objective is simple: memorize and replicate the sequence of shapes presented by the game. As the game progresses, the sequences grow longer, increasing the challenge.\n" +
            "\n" +
            "To make the game more competitive and engaging, the Memory Game features a highscore system that records and displays the top scores in a leaderboard. The leaderboard is stored in a file, tracking the best players and their scores. Players who achieve one of the top 10 scores will have their names and scores added to this leaderboard, offering an incentive to improve and compete against others.",
        "subdesc": "This game provides a dynamic way to hone memory skills by gradually increasing the sequence length. The leaderboard feature adds a competitive element, allowing players to track their progress and compare their performance with others. The simplicity of the console interface and the randomness of the shape sequences keep each round fresh and exciting.",
        "href": "https://github.com/raghavkaashyap/Memory-Game",
        "texture": "/textures/project/project5.mp4",
        "logo": "/assets/project-logo5.png",
        "logoStyle": {
            "backgroundColor": "#ffe066",
            "border": "0.2px solid rgba(208, 213, 221, 1)",
            "boxShadow": "0px 0px 60px 0px rgba(255, 193, 7, 0.3)"
        },
        "spotlight": "/assets/spotlight5.png",
        "tags": [
            {
                "id": 1,
                "name": "C",
                "path": "/assets/c-icon.png"
            }
        ]
    }
]


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'John Deere',
        pos: 'Student Software Engineer',
        duration: 'August 2025 - Present',
        title: "Cloud Security",
        icon: '/assets/JD_logo.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Iowa State University - College of Liberal Arts and Sciences (D4 NRT)',
        pos: 'Undergraduate Research Assistant',
        duration: 'August 2025 - Present',
        title: "AI/ML & Data Science",
        icon: '/assets/iowastatelogo.png',
        animation: 'victory',
    },
    {
        id: 3,
        name: 'Principal Financial Group',
        pos: 'Software Engineer Intern',
        duration: 'May 2025 - August 2025',
        title: "Workspace Services - SID (Full-Stack Development)",
        icon: '/assets/principal_logo.png',
        animation: 'victory',
    },
    {
        id: 4,
        name: 'Iowa State University - Center for Experience in Learning and Teaching (CELT)',
        pos: 'Session Editor and Recorder III',
        duration: 'January 2024 - May 2025',
        title: "Collaborated with the media production team to edit over 100 audio and visual recordings of lectures, ensuring they met university standards for course delivery. I also recorded 30+ lectures, working closely with instructors to ensure smooth content flow and high-quality recordings. This role involved effective communication, technical editing, and process improvement to enhance the overall production efficiency.",
        icon: '/assets/iowastatelogo.png',
        animation: 'victory',
    },

];