const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const sessionSeed = [

    {
        session_name: "What's new in Visual Studio and C# 7",
        session_time: "09:00",
        location: "Room 2205",
        descr: "Visual Studio is a consistently great tool for developing applications on the Windows platform. In this talk we will discuss the productivity improvements added to Visual Studio 2017 that make it even better. Along with the improvements to Visual Studio, C# was also improved. We will also talk about the new language features introduced in C# 7. Starting in December of 2015, C# 7 was developed in the open with involvement from the community. We will talk about the results of that process.",
        speaker: "Doug Mair",
        track: ".NET/ C#/ .NET Core",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "Intro to Kanban",
        session_time: "09:00",
        location: "Room 2207",
        descr: "This session will cover the history of Kanban, what Kanban is, types of Kanban boards/teams and where Kanban woks best verses Scrum. The speaker will also share a number of helpful resources..",
        speaker: "Karam Labban",
        track: "Agile/ Soft Skills",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "Introduction to Big Compute in Azure",
        session_time: "09:00",
        location: "Room 4208",
        descr: "Wondered on how SETI@Home or Folding@Home work? and interested on making your own private one? We will take a look on what is High-Performance Computing (HPC), various forms of HPC, what they can do for us and then, we will start building our own in Azure using Azure Batch or Azure HPC Pack.",
        speaker: "John Wang",
        track: "Azure/ Cloud",
        audience: "Prior knowledge needed",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "An Intro to Git",
        session_time: "09:00",
        location: "Room 2103",
        descr: "Want to learn git but don't know where to start or are you simply afraid of the command line? Then this session is for you. We will focus on the high level core concepts to give you a foundation to start using git today. Furthermore, we won't be using ANY command line interface to do it. As an added bonus we'll wrap up the session with an established workflow to make your journey to using git more beneficial.",
        speaker: "Daniel Shrader",
        track: "Coding Skills",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "Creating A Generic Repository in .NET Core w/ Entity Framework Core 2",
        session_time: "09:00",
        location: "Room 4206",
        descr: "Are you using Entity Framework or some other ORM? Do you have a direct dependency on that ORM? Maybe you've created one or more repositories to abstract away all of the EF stuff. We will explore the Repository pattern and then create our own version of it that is fully compatible with Entity Framework Core 2. While we are at it we will talk about Generics in C#, hopefully demystifying covariance and contravariance. We will then configure the application to use a single implementation Repository<T> to service all of our EF request. Lastly, we will show how using the suggested repository pattern can help when doing TDD (Test Driven Development).",
        speaker: "Clayton Hunt",
        track: "Data",
        audience: "Prior knowledge needed",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "'Doing DevOps' as a politically-powerless developer",
        session_time: "09:00",
        location: "Room 2206",
        descr: "This talk looks at the realities of implementing DevOps in an organization that is resistant to change. We'll discuss the levels of technical and cultural change that you absolutely need, the barriers that commonly get in the way, and some techniques to get around them. Expect subtle and possibly even underhanded tips to get things moving in an environment that just wants to use the word 'DevOps' without making the necessary changes",
        speaker: "Damian Brady",
        track: "DevOps",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "Explore Microsoft Azure IoT DevKit, create our own Flight Simulator Environment",
        session_time: "09:00",
        location: "Room 4104",
        descr: "This session will demonstrate actual IOT devices sending data to Azure. It will review the steps and processes in Azure to process data from an actual device.",
        speaker: "Blain Barton",
        track: "Coding Skills",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "IoT and Azure",
        session_time: "09:00",
        location: "Room 4104",
        descr: "Want to learn git but don't know where to start or are you simply afraid of the command line? Then this session is for you. We will focus on the high level core concepts to give you a foundation to start using git today. Furthermore, we won't be using ANY command line interface to do it. As an added bonus we'll wrap up the session with an established workflow to make your journey to using git more beneficial.",
        speaker: "Steven Fowler",
        track: "IoT",
        audience: "Prior knowlwdge needed",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "Deliberate Practive for Programmers",
        session_time: "10:00",
        location: "Room 2103",
        descr: "In this talk I'll be discussing the modern science of deliberate practice, popularized in recent books like 'Peak', 'Practice Perfect', and 'Outliers'. I'll highlight the best lessons from these sources and from other professions, and then I'll focus on how they can be applied to software engineering. After introducing the topic, I'll go over some concrete and easily measurable examples of how to improve. Then I'll spend the rest of the time looking at how other professions cope with skills that are not so easy to measure, and show how we can adapt those practices for software engineering.",
        speaker: "Joe Zack",
        track: "Coding Skills",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "VS Code Can Do That!",
        session_time: "10:00",
        location: "Room 1206 A&B",
        descr: "How do you debug so easily in VS Code? What's are those key combinations to edit code so quickly? What extensions are the ones I shouldn't code without? Get ready to hit the ground running in this fast-paced, demo-heavy talk that takes you through some of the best and most effective tips and tricks in VS Code. Learn how to setup your environment and customize it the way you like it. You'll walk out with several tips on how to be more efficient with one of the hottest tools on the Web today!",
        speaker: "John Papa",
        track: "Javascript/Front-end",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "Getting things done... with Cortana!",
        session_time: "10:00",
        location: "Room 4106",
        descr: "People doubt the relevance of digital personal assistants, but at the end of the day their utility cannot be denied. Done right, the custom Skills they employ can save us from the otherwise required context switching. Those that code for a living know that “switching gears” can easily eat up 30 minutes to an hour... each and every time. We will 'live code' a Cortana Skill from scratch, publish it to the beta environment and use it on at least 3 different consumers. When we’re done you’ll never doubt their usefulness again AND be inspired enough to create your own.",
        speaker: "Kelvin McDaniel",
        track: "ML/ AI/ Smart Assistants",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "Serverless Architecture Shootout",
        session_time: "10:00",
        location: "Room 4205",
        descr: "Serverless architecture is a way of computing that allows you to build/run applications and services without thinking about servers. Join Brian McKeiver as he compares & contrasts two of the most popular serverless platforms, Microsoft Azure and Amazon AWS, to find out which platform reigns supreme. The session will detail out how you can build a modern web site or web application that leverages a series of microservices as the main architecture. The microservices that will be compared and contrasted fall into the groups of Functions as a Service, Storage as a Service, Search as a Service, and even Headless CMS.",
        speaker: "Brian McKeiver",
        track: "Serverless/ Containers",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    },
    {
        session_name: "Building More Secure Apps with Two-Factor Authentication",
        session_time: "10:00",
        location: "Room 2104",
        descr: "Still using only user names and passwords to secure access to your apps by authorized users? If you think a strong password policy is enough then think again. Recent security breaches against large companies underscore the need for a stronger authentication process. Attend this session to understand the different options available for adding a second factor to your authentication process then see how straightforward it is to implement that extra layer of security in your application right now..",
        speaker: "Will Adams",
        track: "Open Topics",
        audience: "All skill levels",
        speaker_photo: "",
        presentation: ""
    }


];

db.Session
.remove({})
.then(() => db.Session.collection.insertMany(sessionSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
