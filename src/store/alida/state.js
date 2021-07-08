export default function () {
  return {
    isDark: false,
    blogs: [
      {
        id: 0,
        imgUrl: 'https://images.pexels.com/photos/5391847/pexels-photo-5391847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Alida School - Training the next generation of tech talent in Africa',
        author: 'Dauda Barry',
        time: new Date(1624921200000).toDateString(),
        content: `
        Alida School is an online coding school. We train our students to become software engineers in just 12 weeks. <br />  <br />


        Africa has 200 million people aged between 15 and 24, which is the largest population of young people below the age of 30 in the world.
        Unfortunately, young people account for 60% of Africa’s jobless population and 85% of Africans live on less than $5.50 per day.  <br /> <br />
        
        Teaching this population tech skills and helping them to get remote tech jobs will help to close the unemployment and poverty gap while training the next generation of tech talent in Africa.  <br /> <br />
        
        Learning how to code can change a person’s life. Coding is essentially the new ABC and is one of the best skills to learn if you want to turn your life around and develop yourself personally and professionally.  <br /> <br />
        
        There’s plenty of good resources and courses online about learning to code however the existing options are fragmented and the process of learning how to code can be lonely and challenging which in part explains why the completion rate of online courses is just 3%-7%.  <br /> <br />
        
        Alida School enables students to learn to code in an environment that is nurturing, motivating and with a supportive community at its core. <br /> <br />
        
        The daily interactions between the students and the instructor build trust and accountability, which makes the learning experience more engaging and exciting.  <br /> <br />
        
        This is a completely different experience from reading content online, doing online courses or watching videos online. <br /> <br />
        
        We believe that the best way to develop a skill is by active involvement in the learning approach hence we are big advocates of learning by doing. <br /> <br />
        
        Students gain hands-on experience in programming through coding tasks, weekly assignments and by building their own portfolio.  <br /> <br />
        
        Our mission is to train the next generation of tech talent in Africa.
        `,
        category: 'tech'
      }
      // { id: 1, imgUrl: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Keeping up with Tech Stack', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'sports' },
      // { id: 2, imgUrl: 'https://images.pexels.com/photos/2881400/pexels-photo-2881400.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', title: 'Where do I go from here?', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'software' }
    ],
    saved_blogs: [
      { id: 0, imgUrl: 'https://images.pexels.com/photos/8566743/pexels-photo-8566743.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', title: 'Grimm Reaper', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'food' },
      { id: 1, imgUrl: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Hunting for A good Job', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'sports' }
    ],
    personal_blog_categories: [],
    // personal_blog_categories: ['all', 'food', 'life', 'tech', 'sports', 'software', 'hardware'],
    blog_categories: ['all', 'food', 'life', 'tech', 'sports', 'software', 'hardware'],
    instructors: [
      {
        id: 0,
        name: 'George Ikwegbu',
        gender: 'Male',
        phone: '+2348101570258',
        email: 'g.ikwegbu@gmail.com',
        editor: true,
        contentWriter: true,
        language: 'English',
        location: 'Umuahia, Abia State Nigeria',
        country: 'Nigeria',
        bankName: 'Access Bank',
        accountName: 'George Ikwegbu Iheanyichukwu',
        accountNumber: '0694516780',
        twitter: 'twitter://gikwegbu',
        linkedIn: '',
        image: '',
        courses: ['Front-End'],
        salary: '50',
        dateJoined: new Date()
      }
    ],
    students: [
      {
        id: 0,
        name: 'Abdul-Raman Lawal',
        gender: 'Male',
        phone: '+2348101570258',
        email: 'g.ikwegbu@gmail.com',
        contentWriter: false,
        language: 'English',
        location: 'Umuahia, Abia State Nigeria',
        country: 'Nigeria',
        twitter: 'twitter://gikwegbu',
        linkedIn: '',
        image: '',
        courses: ['Front-End'],
        dateJoined: new Date()
      }
    ],
    courses: [
      {
        id: 0,
        title: 'Front-End Web Dev',
        price: '180',
        duration: '12wks',
        teachingTime: '7:00pm - 9:00pm',
        dateCreated: new Date()

      },
      {
        id: 1,
        title: 'Back-End Web Dev',
        price: '180',
        duration: '12wks',
        teachingTime: '7:00pm - 9:00pm',
        dateCreated: new Date()
      },
      {
        id: 2,
        title: 'Full-Stack Web Dev',
        price: '250',
        duration: '24wks',
        teachingTime: '7:00pm - 9:00pm',
        dateCreated: new Date()

      },
      {
        id: 3,
        title: 'Android App Dev',
        price: '500',
        duration: '12wks',
        teachingTime: '7:00pm - 9:00pm',
        dateCreated: new Date()

      },
      {
        id: 4,
        title: 'iOS App Dev',
        price: '500',
        duration: '12wks',
        teachingTime: '7:00pm - 9:00pm',
        dateCreated: new Date()

      },
      {
        id: 5,
        title: 'Fundational Data Science',
        price: '500',
        duration: '12wks',
        teachingTime: '7:00pm - 9:00pm',
        dateCreated: new Date()

      },
      {
        id: 6,
        title: 'Advanced Data Science',
        price: '500',
        duration: '12wks',
        teachingTime: '7:00pm - 9:00pm',
        dateCreated: new Date()

      }
    ]
  }
}
