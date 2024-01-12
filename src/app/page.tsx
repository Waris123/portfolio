"use client"
// src/app/pages/index.js
import Head from 'next/head';
import styles from '@/app/styles/Home.module.css'; // Update the path
import Image from 'next/image';
import Navbar from "@/app/pages/Navbar.js";
import { Yesteryear } from 'next/font/google';
export default function Home() {
  return (
    <div>
      <div className="header">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Muhammad Waris Anjum</title>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </div>

      {/* Your existing HTML content here */}
      <header className={styles.header}>
        <div className={styles.overlay}>
          <div className="container">
            <div className="flex justify-between menu">

              <div className=''>
                {/*<img src="https://placekitten.com/200/200" alt="Your Image" />*/}
                <Image
                  src="/images/logo.jpg"
                  alt="Description of the image"
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%' }}
                />
              </div>
              <div>
                <h1>Muhammad Waris Anjum</h1>
                <p className="lead">Software Engineer</p>
              </div>

              <div>
                &nbsp;
              </div>

            </div>

          </div>
        </div>
      </header>

      <div className="nav navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">My Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <Navbar />
      </div>


      <section id="home" className="py-5">
        <div className="container">
          <h2 className="text-center">Welcome to My Profile</h2>
          <p className="lead text-center">Accomplished professional with more then 10 years of experience in Software/Web Application
            Development, An efficient communicator and learner combining sound coordination, interpersonal, problem
            solving & mentoring skills with analytical, decision making and leadership capabilities to achieve
            organizational performance.</p>
        </div>
      </section>

      <section id="portfolio" className="py-5">
        <div className="container">
          <h2 className="text-center">My Portfolio</h2>
          <p className="lead text-center"></p>

          {/*  */}


          <div className="container grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
            <div className="item">
              <Image alt="State_Bank_of_Pakistan_logo" src="/images/State_Bank_of_Pakistan_logo.png" width={200} height={100} />
              <div>
                <h4>State Bank of Pakistan</h4>
                <p> Developed a web portal for investors of government securities</p>
                <a href="#">Read more</a>
              </div>
            </div>


            <div className="item">
              <Image alt="sbca_logo" src="/images/sbca_logo.jpg" width={200} height={100} />
              <div>
                <h4>Sindh Building Control Authority (SBCA)</h4>
                <p>The Web Application is provide the construction permit to contruct the towns, apartments and houses. </p>
                <a href="#">Read more</a>
              </div>
            </div>


            <div className="item">
              <Image alt="sindh_logo" src="/images/sindh_logo.jpg" width={200} height={100} />
              <div>
                <h4>Sindh Health Department</h4>
                <p> A Sindh Govt web Application created on Codeignitor MVC framework 3.0</p>
                <a href="#">Read more</a>
              </div>
            </div>


          </div>















        </div>
      </section>














      <div className="container py-5">
        <h2 className="text-center">Some Amazing Journey</h2>
      </div>



      <section className="grid lg:grid-cols-4 gap-8">
        <div className="violet lg:col-span-2">
          <h3>
            I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
          </h3>
          <p>
            “I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.”
          </p>
        </div>
        <div className="gray">
          <h3>
            The team was very supportive and kept me motivated
          </h3>
          <p>
            “I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.”
          </p>
        </div>
        <div className="white lg:row-start-2">
          <h3>
            An overall wonderful and rewarding experience
          </h3>
          <p>
            “Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.”
          </p>
        </div>
        <div className="dark lg:col-span-2">
          <h3>
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
          </h3>
          <p>
            “The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.”
          </p>
        </div>
        <div className="white-long lg:row-start-1 lg:row-span-2 lg:col-start-4">
          <h3>
            Such a life-changing experience. Highly recommended!
          </h3>
          <p>
            “Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!”
          </p>
        </div>
      </section>











      <br />
      <br />
      <br />

      <div id="services" className="container py-5">
        <h2 className="text-center">Services Offered</h2>
      </div>



      <section className="grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-x-10 gap-y-16">



        <div className="service flex">
          <i className="fas fa-rocket"></i>
          <div className="service-body">
            <h5>Business strategy</h5>
            <p>Based on my experience working with fast growing startups I can offer ideas for your business strategy</p>
          </div>
        </div>
        <div className="service flex">
          <i className="fas fa-bullhorn"></i>
          <div className="service-body">
            <h5>Marketing planning</h5>
            <p>While trying to build my personal brand and sell my copywriting services I've learned a few marketing tricks</p>
          </div>
        </div>
        <div className="service flex">
          <i className="fas fa-font"></i>
          <div className="service-body">
            <h5>Copywriting services</h5>
            <p>I can create marketing copy, sales literature even blog posts so don't hesitate to get in touch for a quote</p>
          </div>
        </div>
        <div className="service flex">
          <i className="fas fa-keyboard"></i>
          <div className="service-body">
            <h5>Tech writing services</h5>
            <p>You've built a software product and now you need to create your documentation? I am here to help with that</p>
          </div>
        </div>
        <div className="service flex">
          <i className="fas fa-photo-video"></i>
          <div className="service-body">
            <h5>Teaching videos</h5>
            <p>The easiest way to help someone learn how to use your product is with video tutorials. I can create them for you</p>
          </div>
        </div>
        <div className="service flex">
          <i className="fas fa-users"></i>
          <div className="service-body">
            <h5>Conference speaking</h5>
            <p>I can speak at your conference about writing, teaching and how to create a successful business based on skills</p>
          </div>
        </div>
      </section>






      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center">About Me</h2>
          <p className="lead text-center">

            As a Software Engineer of the digital world, utilizing my expertise to craft solutions that transcend code and impact the way interact with technology. With a passion for problem-solving and innovation, In a dynamic environment where creativity meets logical precision.
            My toolkit spans languages, frameworks, and methodologies, allowing me to build robust, scalable applications that drive efficiency and elevate user experiences.I fluent in the language of algorithms and data structures, leveraging these principles to optimize performance and tackle complex challenges.
            Collaboration is at the core of my approach, working closely with multidisciplinary teams to transform ideas into reality.I possess a keen eye for detail, ensuring not only functionality but also the elegance and maintainability of codebase.
            Beyond technical prowess, I embodies adaptability, continuously learning and evolving alongside the ever-changing landscape of technology, desire to innovate, to push boundaries, and to create solutions that shape the future.</p>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center">Contact Me</h2>
          <p className="lead text-center">lets create some amazing.</p>


          <div className="mx-auto bg-white p-8 rounded-md shadow-md">


            <form>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium">Message</label>
                <textarea id="message" name="message" className="mt-1 p-2 w-full border rounded-md"></textarea>
              </div>

              <button type="submit" className="float-right ml-2 bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>

        <div className="flex">
          <div className="w-1/3 p-4 m-2">
            <div className={`flex space-x-4 ${styles.icons}`}>
              <i className="fab fa-laravel text-2xl"></i>
              <i className="fab fa-react text-2xl"></i>
              <i className="fab fa-js text-2xl"></i>
            </div>
          </div>
          <div className="w-1/3 p-4 m-2">
            <p>&copy; 2024 All Rights Reserved</p>
          </div>
          <div className="w-1/3 p-4 m-2">
            <div className={`flex space-x-4 justify-end ${styles.socialIcons}`}>
              <a href="https://www.linkedin.com/in/muhammad-waris-shaikh-a175615b/" target="_blank">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://www.facebook.com/waris.anjum" target="_blank">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://twitter.com/waris_anjum" target="_blank">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>


      </footer>
    </div>
  );
}
