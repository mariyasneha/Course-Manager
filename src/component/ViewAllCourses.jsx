import React, { useState } from 'react'
import CourseNavBar from './CourseNavBar'

const ViewAllCourses = () => {
  const [courseData,ChangecourseData] = useState(
    [
      {"id": "1","name": "React for Beginners","instructor": "Alice Johnson","duration": "6 weeks","fee": "300","mode": "online","startDate": "2025-08-01","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s"},
      {"id": "2","name": "Fullstack Web Development","instructor": "John Smith","duration": "12 weeks","fee": "800","mode": "offline","startDate": "2025-08-15","image": "https://pskitservices.com/wp-content/uploads/2021/03/full-stack-php-developer.jpg"},
      {"id": "3","name": "Python Programming","instructor": "Mary Williams","duration": "8 weeks","fee": "500","mode": "online","startDate": "2025-09-01","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpE_CJvPxG2BqjyCT73AxhEq5wEUOGVViIg&s"}
    ]
  )
  return (
    <div>
      <div className="container">
        <CourseNavBar />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">Instructor</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Fee</th>
                      <th scope="col">Mode</th>
                      <th scope="col">Start date</th>
                      <th scope="col">image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseData.map(
                      (value,index)=>{
                          return <tr>
                <th scope="row">{value.id}</th>
                <td> {value.name} </td>
                <td> {value.instructor} </td>
                <td> {value.duration} </td>
                <td> {value.fee} </td>
                <td> {value.mode} </td>
                <td> {value.startDate} </td>
                <td> <img src={value.image} alt={value.name} className="img-thumbnail" style={{ width: '80px', height: '80px', objectFit: 'cover' }}/> </td>
    </tr>
                      }
                    )}
      
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllCourses