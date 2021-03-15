import React from 'react';
import '../Styles/Wallpaper.css';
import homeImag from '../Assets/image1.png';
import accessImg from '../Assets/r1.png';
import accessImg2 from '../Assets/r2.png';
import accessImg3 from '../Assets/r3.png';
import accessImg4 from '../Assets/r4.png';
import accessImg5 from '../Assets/r5.png';
import accessImg6 from '../Assets/r6.png';
import accessImg7 from '../Assets/r7.png';
import accessImg8 from '../Assets/r8.png';






class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
             <div className="Rectangle-1">
                 <div className="cheding">IBOCS</div>
                 <div>
                     <div className="lefthand">
                         <h1 className="mainheading"><b>Full Stack Web Development Internship Program</b></h1>
                         <h5 className="subheading"><b>Build a complete web product and get an Internship Certificate</b></h5>
                         <i class="fas fa-star "><b className="menisubheding">Master HTML5, CSS3, Javascript & MERN Stack</b></i>
                         <i class="fas fa-star "><b className="menisubheding">Learn in Live and Instructor-led online classes by industry experts</b></i>
                         <i class="fas fa-star "><b className="menisubheding">1000 learners like you have already attended the FREE demo session!</b></i>
                         <div className="finalheading">Get Certificate of participation | Last few seats left | Next Demo Plz Contact Adamin</div>
                     </div>
                     <div className="righthand">
                     <img src={homeImag} style={{ width: '100%', height: '100%' }} alt="loding" />
                     </div>
                 </div>
            </div>
            <div className= "Rectangle-2">
                <h2 className="r2mainheading">
                <b>Program Benefits</b>
                </h2>
                <span className="box1">
                    <span className="b1img">
                    <img src={accessImg} style={{ width: '100%', height: '100%' }} alt="loding" />
                    </span>
                    <span className="b1explain">
                        <p className="explainfont">Access Career Services & Job Assistance</p>

                    </span>

                </span>
                <span className="box2">

                <span className="b1img">
                    <img src={accessImg2} style={{ width: '100%', height: '100%' }} alt="loding" />
                    </span>
                    <span className="b1explain">
                        <p className="explainfont">Learn in Live, Instructor-Led Online Sessions</p>

                    </span>




                </span>
                <span className="box3">

                <span className="b1img">
                    <img src={accessImg3} style={{ width: '100%', height: '100%' }} alt="loding" />
                    </span>
                    <span className="b1explain">
                        <p className="explainfont">Get practical experience in building a real-world product from scratch</p>

                    </span>

                </span>
                <div className="subdiv">
                    <h2 className="subdivheding">Technologies You Will learn</h2>
                    <span className="sub1">
                    <img src={accessImg4} style={{ width: '100%', height: '100%' }} alt="loding" />

                    </span>
                    <span className="sub2">
                    <img src={accessImg5} style={{ width: '100%', height: '100%' }} alt="loding" />

                    </span>

                    <span className="sub3">
                    <img src={accessImg6} style={{ width: '100%', height: '100%' }} alt="loding" />

                    </span>

                    <span className="sub4">
                    <img src={accessImg7} style={{ width: '100%', height: '100%' }} alt="loding" />

                    </span>

                    <span className="sub5">
                    <img src={accessImg8} style={{ width: '100%', height: '100%' }} alt="loding" />

                    </span>

                    

                </div>
            </div>

            <div>
                <h3 className="subdivheding2">Curriculum</h3>
            </div>

            <div className ="cheding3">
                <span className="wname">
                    <h4 className="fstyle4"><b>Week 1-3</b></h4>

                </span>
                <span className="wexplain">
                    <p> Build Frontend Interface of Zomato like WebsiteWhat you will learn: HTML5, CSS3, Bootstrap</p>
                    <ul>
                        <li>Build the frontend for the product using HTML5, CSS3, Bootstrap from scratch</li>
                        <li>Front-end interview preparation</li>
                    </ul>


                </span>

                <hr className="brekline" />


                <span className="wname1">
                    <h4 className="fstyle4"><b>Week 4-6</b></h4>

                </span>
                <span className="wexplain1">
                    <p> Add Interactions Using JavaScript What you will learn: JavaScript, Data Structures, Algorithms</p>
                    <ul>
                        <li>Learn about JavaScript, Data Structures and Algorithms from scratch</li>
                        <li>JavaScript interview preparation</li>
                    </ul>


                </span>

                <hr className="brekline1" />



                <span className="wname1">
                    <h4 className="fstyle4"><b>Week 7-9</b></h4>

                </span>
                <span className="wexplain1">
                    <p> Build the Backend of Zomato like Website What you will learn: Express.js, Node.js, MongoDB</p>
                    <ul>
                        <li>Learn about the backend components of the MERN Stack - Express.js, Node.js and MongoDB from scratch</li>
                        <li>Backend interview preparation</li>
                    </ul>


                </span>

                <hr className="brekline1" />


                <span className="wname1">
                    <h4 className="fstyle4"><b>Week 10-12</b></h4>

                </span>
                <span className="wexplain1">
                    <p>Build Frontend Using React What you will learn: React.js</p>
                    <ul>
                        <li>Learn and implement React from scratch to simplify your frontend code and improve the page performance</li>
                        <li>React interview preparation</li>
                    </ul>


                </span>

                <hr className="brekline1" />
          
                
            </div>

            <div className="intreded">

                <h3 className="lasttitle">
                Interested?
                </h3>
                <div className="lastsubclass">
                Register for a Free Demo Session
                </div>
                <hr className="brekline3" />

                <a href="https://forms.gle/sfwL4Ex7v7tUwdjf8" className="linkclass"><b>Register</b></a>

                <h3 className="contact">
                    <h2>Contacts</h2>
                    <ul>
                        <li>Dr.G.R.Bharamagoudar:8310388018</li>
                        <li>Mr Akash Ronad:9740152833</li>
                        <li>Gmail:akashronad48@gmail.com</li>
                    </ul>
                    
                </h3>

            </div>
            </React.Fragment>

           

        )
    }



}

export default Home;
