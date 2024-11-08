const clubs = [
    {
        id: 1,
        name: 'Computer Science Club',
        description: 'Learn more about the world of computer science and programming that goes beyond the course curriculum, covering topics such as Artificial Intelligence, Full-Stack Web Development, and much more.',
        insta: 'https://www.instagram.com/jfss_cs/',
        image: null
    },
    {
        id: 2,
        name: 'Palestinian Student Association',
        description: 'Palestinian Student Association',
        insta: 'https://www.instagram.com/jfsspsa/',
        image: null
    },
    {
        id: 3,
        name: 'Biology Club',
        description: 'The Biology Club aims to spark interest and enhance understanding of the biological sciences through interactive activities, hands-on experiments, and engaging discussions. In the past, the club has organized activities such as scavenger hunts, rat dissections, and microscopy workshops, and will continue to do so. It fosters scientific inquiry, promotes environmental awareness, and provides guidance for students interested in biology-related careers. The club also creates a supportive community for students to collaborate and share their passion for biology.',
        insta: 'https://www.instagram.com/jfssathletics/',
        image: null
    },
    {
        id: 4,
        name: 'HOSA',
        description: 'HOSA is a competition based club for future health professionals. We run under the HOSA Canada chapter to prepare our members to compete in national and international leadership conferences. ',
        insta: 'https://www.instagram.com/jfss.techclub/',
        image: null
    },
    {
        id: 5,
        name: 'Fraser Ace',
        description: 'Fraser Ace act as the bridge between the community and JFSS, hosting events such as Parent Teacher Interview Night, Post-Secondary Night, Co-op Fair, and much more. ',
        insta: 'https://www.instagram.com/jfss.artclub/',
        image: null
    },
    {
        id: 6,
        name: 'The Ladybug (Fashion Society)',
        description: 'We are a fashion magazine club promoting confidence and creativity while providing an outlet for students to express themselves through our magazine and Instagram page, as well as upcoming events.',
        insta: 'https://www.instagram.com/jfss.debate/',
        image: null
    },
    {
        id: 7,
        name: 'The Pinnacle Project ',
        description: 'A youth-led volunteer organization dedicated to improving the GTA community through collaborations with greater NPOs.',
        insta: 'https://www.instagram.com/jfss.ecoclub/',
        image: null
    },
    {
        id: 8,
        name: 'Fraser Chefs ',
        description: 'A space for students to cook delicious food and learn skills such as cutting vegetables and food safety.',
        insta: 'https://www.instagram.com/jfss.chessclub/',
        image: null
    },
    {
        id: 9,
        name: 'Jack.Org',
        description: 'Jack.Org purpose is to reduce the stigma around mental health and promotes overall well-being within the community.',
        insta: 'https://www.instagram.com/jfss.musicclub/',
        image: null
    },
    {
        id: 10,
        name: 'The Fraser Post',
        description: 'To share various kinds of writing with the entire student body, and give creatives a chance to spread their work!',
        insta: 'https://www.instagram.com/jfss.dramaclub/',
        image: null
    },
    {
        id: 11,
        name: 'AP Student Society',
        description: 'To liaise between the AP student body and AP coordinator, ensuring that concerns are voiced and heard.',
        insta: 'https://www.instagram.com/jfss.scienceclub/',
        image: null
    },
    {
        id: 12,
        name: 'FLIQ (Future Leaders Initiative)',
        description: "Partnered with Queens University, FLIQ helps you create your own business with advice from career coaches and world class judges. You'll have the chance to compete in an international pitch competition at Queens, and earn university microcredentials.",
        insta:'google.com',
        image: null
    },
    {
        id: 13,
        name: '3D Printing Club ',
        description: "3D printing club is designed to expose members to the magic of additive manufacturing. We aim to use hands on learning to immerse members down branches of 3d design and printing such as slicers, CAD and design techniques. The software we teach are Fusion 360, Blender, Slic3r and more. We hope to empower students to explore the endless applications of 3D printing technology! ",
        insta:'google.com',
        image: null
    },
    {
        id: 14,
        name: 'Neuropsychology 101',
        description: "uropsychology 101 is dedicated to exploring interdisciplinary topics in neuroscience and psychology with the students of John Fraser. While being a chapter of the IYNA, we provide students with interesting learning oppurtuines to allow them to have a dive further into these fields and promote meaningful understandings of them.",
        insta:'google.com',
        image: null
    },
    {
        id: 15,
        name: 'Fraser eSports',
        description: "To provide a safe, inclusive environment for students to share their passion for competitive and casual gaming!",
        insta:'google.com',
        image: null
    },
    {
        id: 16,
        name: 'Engineering Club',
        description: "Engineering Club aims to educate and involve our members with different branches and aspects of engineering. The club year compromises of learning CAD, circuitry, and working on projects as a group, attempting to tackle problems through an engineering mindset using the design process.",
        insta:'google.com',
        image: null
    },
    {
        id: 17,
        name: 'Muslim Student Assocation',
        description: "To create an environment where everyone feels welcome whether or not they’re Muslim. To share and hear ideas from people with a variety of cultures and backgrounds and discuss and plan events that center key values in Islam and empowering the community. ",
        insta:'google.com',
        image: null
    },
    {
        id: 18,
        name: 'Environmental Club and/or Eco Club',
        description: "John Fraser’s Environmental Club is an open council consisting of dedicated students who wish to create a more sustainable future for their peers, the community, and the world. We host biweekly meetings with open conversations raising awareness to create a greener future. In the past, the club has implemented strong school-wide initiatives, such as the environmental policy including the distribution of compostable utensils, as well as the Jag Closet. We are here to educate and empower.",
        insta:'google.com',
        image: null
    },
    {
        id: 19,
        name: 'Peer Mentoring',
        description: "To provide all students with support as an extension of the guidance department!",
        insta:'google.com',
        image: null
    },
    {
        id: 20,
        name: 'John Fraser Business Society',
        description: "To educate the student body on Business related topics including: Business 💸 , Personal Finance 🗨️  and Investing 📈",
        insta:'google.com',
        image: null
    },
    {
        id: 21,
        name: "Announcement's Club",
        description: "To do the announcements everyday.",
        insta:'google.com',
        image: null
    },
    {
        id: 22,
        name: 'Fraser Scholars',
        description: "Providing acadmic help/ tutoring to JFSS students in a variety of subjects.",
        insta:'google.com',
        image: null
    },
    {
        id: 23,
        name: 'Fraser Dance Crew',
        description: "Fraser Dance Crew's purpose is to increase the presence of dance in our school community as enrollment numbers for the course go down",
        insta:'google.com',
        image: null
    },
    {
        id: 24,
        name: 'Arts Council',
        description: "Our council’s purpose is to represent the Arts department at John Fraser S.S. and to provide a safe space to appreciate & celebrate the Arts.",
        insta:'google.com',
        image: null
    },
    {
        id: 25,
        name: 'Soccer Club',
        description: "To train and have fun playing soccer",
        insta:'google.com',
        image: null
    },
    {
        id: 26,
        name: 'John Fraser Advocacy Society',
        description: "JFAS’s purpose is to promote equality throughout our school community and to create a safe space for students to voice their thoughts and opinions on local and global issues.",
        insta:'google.com',
        image: null
    },
    {
        id: 27,
        name: 'Chapter One',
        description: "Chapter One is JFSS’s book club, where we read books every month and come together to discuss them.",
        insta:'google.com',
        image: null
    },
    {
        id: 28,
        name: 'Astronomy Club',
        description: "The astronomy club aims to introduce the fascinating field of astronomy to all members of the John Fraser community, whether they are aspiring astronomers or simply fascinated by the night sky. Through interactive lessons, workshops, and activities, we hope to offer like-minded students a captivating journey into the world of astronomy.",
        insta:'google.com',
        image: null
    },
    {
        id: 29,
        name: 'iNNOVATE',
        description: "iNNOVATE has the mission to inspire the next generation of dreamers and innovators. We want to offer the opportunity to passionate students at JFSS to present their interests within STEM to middle schools across Mississauga Peel.",
        insta:'google.com',
        image: null
    },
    {
        id: 30,
        name: 'Debate Club',
        description: "Teaching Public Speaking and Argumentation skills, basic rules of debating and preparing for competitions.",
        insta:'google.com',
        image: null
    },
    {
        id: 31,
        name: 'STEAM Innovation Challenge',
        description: "STEAM Innovation Challenge is a competitive club that is set to facilitate innovation in fields of Engineering, Life Sciences and Astronomy respectively. We want students to engage in problem solving and teamwork by building prototypes/models of their innovative solution to modern day problems. Students will be required to excel in the 5 categories of STEAM; Sciences, Technology, Engineering, Art, and Mathematics with incorporating Sustainability. ",
        insta:'google.com',
        image: null
    },
    {
        id: 32,
        name: 'Fraser Athletic Council',
        description: "Promote healthy active living in the Fraser community",
        insta:'google.com',
        image: null
    },
    {
        id: 33,
        name: 'The garden patch',
        description: "The purpose of a school community garden is to provide students with experiential education in sustainability, nutrition, and teamwork while enhancing the school environment.",
        insta:'google.com',
        image: null
    },
    {
        id: 34,
        name: 'Crochet Club',
        description: "To provide a space for crocheters to share a love for the hobby. Additionally, to teach people interested in learning crochet",
        insta:'google.com',
        image: null
    },
    {
        id: 35,
        name: 'Law Club',
        description: "Law Club is designed to allow students to engage with law-related material, ideas, and concepts that are not covered by the school curriculum. In particular, this club aims to achieve the following: a) share and explore legal pathways and what they entail, b) engage and discuss topics not covered by the curriculum in a friendly, respectful, and stress-free environment, and c) practice the necessary skills needed in order to be successful in the law field (ie. mock trials and analyzing cases).",
        insta:'google.com',
        image: null
    },
    {
        id: 36,
        name: 'French Club',
        description: "French Club is designed to provide students an opportunity to enhance their French language skills outside the classroom through discussions, activities, and competitions.",
        insta:'google.com',
        image: null
    },
    {
        id: 37,
        name: 'Dental Club',
        description: "The Dental Club aims to educate the student-body on the field of dentistry and oral health. ",
        insta:'google.com',
        image: null
    },
    {
        id: 38,
        name: 'BSAA (Black Student and Allies Association)',
        description: "We are club made to represent the voice of black, Caribbean and African students in John Fraser Secondary School. We are a group that are consist of students of said ethnicities, but also those who appreciate our opinions in the student body and leadership positions in John Fraser Secondary School. We try to run events that foster inclusion and diversity within the school.",
        insta:'google.com',
        image: null
    },
    {
        id: 39,
        name: 'Tuck Shop',
        description: "Sell food to the school to replace the cafetaria",
        insta:'google.com',
        image: null
    },
    {
        id: 40,
        name: 'Christian Club (Project 153)',
        description: "Religion - Learning and sharing the gospel of Jesus Christ",
        insta:'google.com',
        image: null
    },
    {
        id: 41,
        name: 'Medlife',
        description: "Our club runs various fundraisers and events throughout the year to raise money for the Medlife International organization.",
        insta:'google.com',
        image: null
    },
    {
        id: 42,
        name: 'Christian Club (Project 153)',
        description: "Religion - Learning and sharing the gospel of Jesus Christ",
        insta:'google.com',
        image: null
    },
    {
        id: 43,
        name: 'Data Science Club',
        description: "Teach students about the applications and future of data including analysis, visualization, exploration and more.",
        insta:'google.com',
        image: null
    },
    {
        id: 44,
        name: 'John Fraser DECA',
        description: "Through conferences and competitions, DECA instills professionalism and prepares youth to respond to authentic business cases and market demands. At the core of DECA are our competitive events are sorted by clusters. John Fraser DECA is a chapter of DECA Ontario.",
        insta:'google.com',
        image: null
    },
    {
        id: 45,
        name: 'Model UN ',
        description: "A team of delegates simulating United Nations",
        insta:'google.com',
        image: null
    },
    {
        id: 46,
        name: 'Investment Club',
        description: "The purpose of Investment Club is to educate investing principles and personal finance basics to students in order to strengthen a foundation for making good financial decisions. Our goal is to teach financial literacy and prepare members for future financial independence while encouraging a collaborative environment for sharing ideas and learning from each other.",
        insta:'google.com',
        image: null
    },
    {
        id: 47,
        name: 'JFSS Journaling',
        description: "Our purpose is to offer students at John Fraser a safe and welcoming space to students who have a passion for journaling, creative writing, and personal reflection. ",
        insta:'google.com',
        image: null
    },
    {
        id: 48,
        name: 'Stem club',
        description: "Our club's purpose is to encourage minds to think creatively and explore their interest in the STEM subjects. ",
        insta:'google.com',
        image: null
    },
    {
        id: 49,
        name: 'Chapter One',
        description: "The club's purpose is to provide an oppurtunity for students to engage in discussions regarding books and literature. ",
        insta:'google.com',
        image: null
    },
    {
        id: 50,
        name: 'JFSS Creative Writing CLub',
        description: "Our club's purpose is to provide an environment where we focus on creative writing specifically - encouraging their work, giving tips along with teaching them skills to excel in their intrests",
        insta:'google.com',
        image: null
    },
    {
        id: 51,
        name: 'Positive Space JFSS',
        description: "Our mission is to provide a safe space for members of the 2SLGBTQIA+ community and host events that help engage students at our school and help build knowledge and allies within John Fraser.",
        insta:'google.com',
        image: null
    },
    {
        id: 52,
        name: 'JFSS Psychsociety ',
        description: "Here to explore the various aspects of psychology in our lives!",
        insta:'google.com',
        image: null
    }
    ,{
        id: 53,
        name: 'East Asian Student Association',
        description: "To spread east asian culture and provide an inclusive space for everyone to enjoy our culture.  ",
        insta:'google.com',
        image: null
    } ,{
        id: 54,
        name: 'Rock Band',
        description: "To provide a unique music experience for students of John Fraser who have an interest for performing live and practicing with a group musicians which requires adaptability, teamwork and dedication.",
        insta:'google.com',
        image: null
    } ,{
        id: 55,
        name: 'MINGA',
        description: "Raise awareness and run fundraisers for humanitarian causes, spread positivity around the school",
        insta:'google.com',
        image: null
    } ,{
        id: 56,
        name: 'JFSS FBLA',
        description: "The purpose of an FBLA chapter is to provide students with a solid foundation in fundamental business concepts while allowing them to explore and specialize in specific domains of interest. Students can choose to deepen their knowledge in areas such as accounting, international business, securities and investments, economics, marketing, entrepreneurship, hospitality, and more. This focused approach helps students gain expertise in their chosen niche.  FBLA offers a variety of competitive events to cater to these interests. Some events involve only an exam, testing students' knowledge in their specialized area. Others include a mix of exams and roleplays, where students simulate real-world scenarios, stepping into the shoes of professionals in the industry to provide solutions to client challenges. Additionally, there are competitions where students prepare materials in advance, such as business plans or presentations, and then present their work.  Participating in FBLA competitions allows students to increase their business acumen, gain valuable experience, and compete for prestigious awards. The competitions are hosted in exciting venues, such as downtown Toronto, and those who place in the top three of their event will have the opportunity to compete on an international stage, showcasing their skills and representing their chapter on a global level.",
        insta:'google.com',
        image: null
    } ,{
        id: 57,
        name: 'Sikh Student Association',
        description: "Sikh Student Association",
        insta:'google.com',
        image: null
    } ,{
        id: 58,
        name: 'HSA (Hindu Student Association)',
        description: "  The Hindu Student Association (HSA) aims to create a supportive environment for students interested in Hindu culture and traditions. It fosters cultural appreciation, celebrates Hindu festivals, and provides a space for religious and cultural expression. ",
        insta:'google.com',
        image: null
    } ,{
        id: 60,
        name: 'Physics Club',
        description: "Physics club aims to foster a community of like-minded individuals, ranging from those with a strong interest in physics to those who know nothing about it and are just beginning their journey in the vast field of physics. A community where people may share their enthusiasm and expand their knowledge beyond the classroom curriculum. More specifically this club would apply theory into fun and exciting real world activities/experiments, as physics shouldn’t be limited to a specific course, but be able to be experienced by everyone in order to increase opportunities for students. This club also aims to prepare students who wish to enroll in physics, as having prior knowledge of the field would be quite beneficial.",
        insta:'google.com',
        image: null
    } ,{
        id: 61,
        name: 'MIST (Muslim Interscholastic Tournament)',
        description: "The Muslim Inter-Scholastic Tournament (MIST) is an engaging, educational, and exciting tournament geared towards connecting high school students to develop leadership, communication, and creative skills, all while gaining a deeper understanding of Islam. All students, regardless of their faith, are welcome to and encouraged to join! John Fraser's MIST team regularly competes in MIST and brings home awards, lasting memories, and even make it to Nationals in the USA. MIST has something to offer for everyone: sports teams, rap battles, chant-offs, performances, and more!",
        insta:'google.com',
        image: null
    } ,
];

export default clubs;