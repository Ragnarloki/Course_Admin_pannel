import StudentDetails from './StudentDetails';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png"
import person from "../../assets/images/profileimg.jpg";
const Current = () => {

  const users = [
    { id: 1, name: 'Ashok',img: person, email: 'ABCDEFG123@gmail.com' ,Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View" , link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },]
      ,tasks : [
       {TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]} 
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ],Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
        { Title: "Plan Starts", Data: "16.07.2024" },
        { Title: "Plan ends", Data: "16.12.2024" },
        { Title: "Payment", Data: "xxxxx" },
        { Title: "Completion", Data: "1 Course" },]},
    { id: 2, name: 'Deepak kumar',img: person, email: 'thgfrg434@gmail.com' ,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
      { Title: "Plan Starts", Data: "16.07.2024" },
      { Title: "Plan ends", Data: "16.12.2024" },
      { Title: "Payment", Data: "xxxxx" },
      { Title: "Completion", Data: "1 Course" },],Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View" , link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [{TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    { id: 3, name: 'Ashok', email: 'ABCDEFG123@gmail.com' ,img: person,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
      { Title: "Plan Starts", Data: "16.07.2024" },
      { Title: "Plan ends", Data: "16.12.2024" },
      { Title: "Payment", Data: "xxxxx" },
      { Title: "Completion", Data: "1 Course" },],Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View", link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [{TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    { id: 4, name: 'Deepak kumar', email: 'thgfrg434@gmail.com',img: person,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
      { Title: "Plan Starts", Data: "16.07.2024" },
      { Title: "Plan ends", Data: "16.12.2024" },
      { Title: "Payment", Data: "xxxxx" },
      { Title: "Completion", Data: "1 Course" },] ,Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View" , link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [{TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    { id: 5, name: 'Ashok', email: 'ABCDEFG123@gmail.com' ,img: person,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
      { Title: "Plan Starts", Data: "16.07.2024" },
      { Title: "Plan ends", Data: "16.12.2024" },
      { Title: "Payment", Data: "xxxxx" },
      { Title: "Completion", Data: "1 Course" },],Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View" , link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [{TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    { id: 6, name: 'Deepak kumar', email: 'thgfrg434@gmail.com',img: person,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
      { Title: "Plan Starts", Data: "16.07.2024" },
      { Title: "Plan ends", Data: "16.12.2024" },
      { Title: "Payment", Data: "xxxxx" },
      { Title: "Completion", Data: "1 Course" },] ,Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View" , link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [{TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    { id: 7, name: 'Ashok', email: 'ABCDEFG123@gmail.com' ,img: person ,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
      { Title: "Plan Starts", Data: "16.07.2024" },
      { Title: "Plan ends", Data: "16.12.2024" },
      { Title: "Payment", Data: "xxxxx" },
      { Title: "Completion", Data: "1 Course" },],Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View", link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [{TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    { id: 8, name: 'Deepak kumar', email: 'thgfrg434@gmail.com',img: person ,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
      { Title: "Plan Starts", Data: "16.07.2024" },
      { Title: "Plan ends", Data: "16.12.2024" },
      { Title: "Payment", Data: "xxxxx" },
      { Title: "Completion", Data: "1 Course" },],Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View", link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [{TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    { id: 9, name: 'Ashok', email: 'ABCDEFG123@gmail.com' ,img: person ,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
      { Title: "Plan Starts", Data: "16.07.2024" },
      { Title: "Plan ends", Data: "16.12.2024" },
      { Title: "Payment", Data: "xxxxx" },
      { Title: "Completion", Data: "1 Course" },],Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View", link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [{TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    { id: 10, name: 'Deepak kumar', email: 'thgfrg434@gmail.com' ,img: person ,Subscription:[     { Title: "Plan Name", Data: "Advance plan" },
        { Title: "Plan Starts", Data: "16.07.2024" },
        { Title: "Plan ends", Data: "16.12.2024" },
        { Title: "Payment", Data: "xxxxx" },
        { Title: "Completion", Data: "1 Course" },],Details:[  { id: 1, Title: "Domain", Data: "UI / UX" },
      { id: 2, Title: "Internship Period", Data: "2 Months" },
      { id: 3, Title: "Currently work on", Data: "Day 10" },
      { id: 4, Title: "Joined Date", Data: "10.7.2024" },
      { id: 5, Title: "End Date", Data: "10.8.2024" },
      { id: 6, Title: "Subscription", Data: "1 Month", Button: "View" , link: "/Subscription"},
      { id: 7, Title: "Assignment", Data: "5 / 5", Button: "View", link: "/Profileattribute" },
      { id: 8, Title: "Task", Data: "30 / 30", Button: "View", link: "/Profileattribute" },
      { id: 9, Title: "Project", Data: "1 / 3", Button: "View", link: "/Profileattribute" },],
      tasks : [
        {TaskComplete:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]}
      ,{Assignment:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},{Project:[{
        id: 1,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 2,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Link",
      },
      {
        id: 3,
        name: "Design pattern",
        date: "14 / 8 / 2024",
        fileLink: "Not yet",
      },]},
        {
          id: 1,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 2,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Link",
        },
        {
          id: 3,
          name: "Design pattern",
          date: "14 / 8 / 2024",
          fileLink: "Not yet",
        },
      ],graphData : [
        {
          id: 1,
          name: "Task analysis",
          color: ["lightgreen", "lightgray"],
          details: [
            { id: 1, label: "Task", value: "60%" },
            { id: 2, label: "No.of.Task", value: "30" },
            { id: 3, label: "Completed", value: "156" },
          ],
        },
        {
          id: 2,
          name: "Project analysis",
          color: ["#ff0000", "lightgray"],
          details: [
            { id: 1, label: "Project", value: "30%" },
            { id: 2, label: "No.of.Project", value: "3" },
            { id: 3, label: "Completed", value: "1" },
          ],
        },
        {
          id: 3,
          name: "Assignment analysis",
          color: ["#000000", "lightgray"],
          details: [
            { id: 1, label: "Assignment", value: "20%" },
            { id: 2, label: "No.of.Assignment", value: "10" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
        {
          id: 4,
          name: "Course analysis",
          color: ["blue", "lightgray"],
          details: [
            { id: 1, label: "Course", value: "20%" },
            { id: 2, label: "No.of.Modules", value: "30" },
            { id: 3, label: "Completed", value: "2" },
          ],
        },
      ]},
    
    // ... add other users as needed
  ];

  
  const { id } = useParams();

  return (
    <div>
          <div className="w-full text-dark-blue text-2xl pl-2 md:pl-4 flex justify-between h-fit bg-white h-[100px]">
            <div className="flex items-center">
              <Link to={`/MainPage`}><h1 className="flex items-center">{'<'} Back </h1></Link>
            </div>
      <h1  className="flex items-center">welcome to admin pannel</h1>
      <img src={logo} alt="logo" className="h-20 w-30 "></img>
    </div>
    <div className="flex flex-row w-full h-full  mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col min-h-full items-center bg-dark-blue w-[300px] mx-auto pt-10">
        <nav>
          <div className='flex justify-center items-center text-light-yellow text-2xl lg:pb-8 font-TimesNewRoman'>Menu</div>
          <ul className="flex flex-col space-y-5 mb-[50px] text-white justify-center items-center">
            <li className="flex items-center text-lg">
               Dashboard
            </li>
            <li className="flex items-center text-lg">
              Job & Intern
            </li>
            <li className="flex items-center text-lg">
               Community
            </li>
            <li className="flex items-center text-lg">
               Subscription
            </li>
            <li className="flex items-center text-lg">
               Admin Access
            </li>
            <li className="flex items-center text-lg">
               Event
            </li>
            <li className="flex items-center text-lg">
             Challenges
            </li>
            <li className="flex items-center text-lg">
             Offer Include
            </li>
            <li className="flex items-center text-lg">
             Log Out
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="bg-[#FAF2BE] w-full h-full pl-5 pr-5 pt-5 pb-5">
        <header className="flex justify-between items-center mb-8 bg-dark-blue w-full mx-auto rounded-lg lg:pl-5 lg:pr-5 lg:pt-5 lg:pb-5">
          <div className="flex space-x-4">
            <button className="bg-dark-blue text-white py-2 px-4 rounded">
              Internship
            </button>
            <button className="bg-light-yellow text-black py-2 px-4 rounded">
              Courses
            </button>
            <button className="bg-dark-blue text-white py-2 px-4 rounded">
              Training
            </button>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search here"
              className="py-2 px-4 rounded border border-gray-400"
            ></input>
            <span className="mt-1 mx-auto bg-light-yellow p-2 rounded-full">
              <IoSearchOutline size="20" />
            </span>
          </div>
        </header>

         {/* User Table */}
         <table className="w-full bg-white rounded-lg mx-auto">
         <thead>
           <tr className="bg-gray-800 text-white">
             <th className="py-2 px-4">User Id</th>
             <th className="py-2 px-4">Name</th>
             <th className="py-2 px-4">Email Id</th>
             <th className="py-2 px-4">Operation</th>
           </tr>
         </thead>
         <tbody>
           {users.map((user) => (
             <tr key={user.id} className="text-center border-b">
               <td className="py-2 px-4">{user.id}</td>
               <td className="py-2 px-4">{user.name}</td>
               <td className="py-2 px-4">{user.email}</td>
               <td className="py-2 px-4">
                 <Link   to={`/StudentDetails/${user.id}`} state={{ user }} > 
                  <button className="bg-green-500 text-white my-2 px-4 py-1 rounded mx-1">View</button>
                 </Link>
                 <button className="bg-red-500 text-white px-4 py-1 rounded mx-1">Delete</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
      </div>
    </div>
    </div>
  );
};

export default Current;