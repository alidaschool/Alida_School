export default function () {
  return {
    isDark: false,
    blogs: [
      { id: 0, imgUrl: 'https://images.pexels.com/photos/8566743/pexels-photo-8566743.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', title: 'Our Changing Planet', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'food' },
      { id: 1, imgUrl: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Keeping up with Tech Stack', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'sports' },
      { id: 2, imgUrl: 'https://images.pexels.com/photos/2881400/pexels-photo-2881400.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', title: 'Where do I go from here?', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'software' },
      { id: 3, imgUrl: 'https://images.pexels.com/photos/3077096/pexels-photo-3077096.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', title: 'Software or Hardware?', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'hardware' },
      { id: 4, imgUrl: 'https://images.pexels.com/photos/2804038/pexels-photo-2804038.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', title: 'How do I apply for jobs?', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'food' },
      { id: 5, imgUrl: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Getting Started', author: 'Dauda Barry', time: new Date().toDateString(), content: 'lorem ipsum <br> This should be fun.', category: 'life' }
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
