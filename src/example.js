import React from 'react'

function Example() {

const Data = [
    {
      id: 1,
      name: "arun",
      gender: "Male",
      physics: 88,
      maths: 87,
      english: 78,
      checked: false
    },
    {
      id: 2,
      name: "rajesh",
      gender: "Male",
      physics: 96,
      maths: 100,
      english: 95,
      checked: false
    },
    {
      id: 3,
      name: "moorthy",
      gender: "Male",
      physics: 89,
      maths: 90,
      english: 70,
      checked: false
    },
    {
      id: 4,
      name: "raja",
      gender: "Male",
      physics: 30,
      maths: 25,
      english: 40,
      checked: false
    },
    {
      id: 5,
      name: "usha",
      gender: "Female",
      physics: 67,
      maths: 45,
      english: 78,
      checked: false
    },
    {
      id: 6,
      name: "priya",
      gender: "Female",
      physics: 56,
      maths: 46,
      english: 78,
      checked: false
    },
    {
      id: 7,
      name: "Sundar",
      gender: "Male",
      physics: 12,
      maths: 67,
      english: 67,
      checked: false
    },
    {
      id: 8,
      name: "Kavitha",
      gender: "Female",
      physics: 78,
      maths: 71,
      english: 67,
      checked: false
    },
    {
      id: 9,
      name: "Dinesh",
      gender: "Male",
      physics: 56,
      maths: 45,
      english: 67,
      checked: false
    },
    {
      id: 10,
      name: "Hema",
      gender: "Female",
      physics: 71,
      maths: 90,
      english: 23,
      checked: false
    },
    {
      id: 11,
      name: "Gowri",
      gender: "Female",
      physics: 100,
      maths: 100,
      english: 100,
      checked: false
    },
    {
      id: 12,
      name: "Ram",
      gender: "Male",
      physics: 78,
      maths: 55,
      english: 47,
      checked: false
    },
    {
      id: 13,
      name: "Murugan",
      gender: "Male",
      physics: 34,
      maths: 89,
      english: 78,
      checked: false
    },
    {
      id: 14,
      name: "Jenifer",
      gender: "Female",
      physics: 67,
      maths: 88,
      english: 90,
      checked: false
    },
    {
      id: 15,
      name: "selva",
      gender: "Male",
      physics: 36,
      maths: 70,
      english: 94,
      checked: false
    },
    {
      id: 16,
      name: "rahul",
      gender: "Male",
      physics: 57,
      maths: 94,
      english: 54,
      checked: false
    },
    {
      id: 17,
      name: "shankar",
      gender: "Male",
      physics: 40,
      maths: 60,
      english: 70,
      checked: false
    },
    {
      id: 18,
      name: "bharathi",
      gender: "Female",
      physics: 80,
      maths: 80,
      english: 80,
      checked: false
    },
    {
      id: 19,
      name: "preethi",
      gender: "Female",
      physics: 67,
      maths: 84,
      english: 91,
      checked: false
    },
    {
      id: 20,
      name: "yuva",
      gender: "Female",
      physics: 87,
      maths: 94,
      english: 100,
      checked: false
    }
  ];
   const filtered =()=>{
    Data.filter((item)=>{
        item.name== 'kavitha';
    })
   }
  return (
    <div>
      
    </div>
  )
}

export default Example

