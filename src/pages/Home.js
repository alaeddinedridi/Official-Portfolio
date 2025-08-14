import Card from "../components/Card"
import Grid from "../components/Grid"
import Navbar from "../components/Navbar"
import classes from "../styles/Home.module.scss"
import {education} from '../data/education'
import {experience} from '../data/experience'
import {projects} from '../data/projects'
import {certificates} from '../data/certificates'
import Terminal from 'terminal-in-react';
import { useEffect } from "react"


const Home = () => {

    const showMsg = () => 'Hello World'

    var i = 0;
    var txt = 'Lorem ipsum typing effect!'; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    const typeWriter=() => {
        if (i < txt.length) {
            document.getElementById("typing_text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    useEffect(() => {
        typeWriter()
    })

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={classes.home}>
                    <div className={classes.info}>
                        <div className={classes.picture}><img src={`${process.env.PUBLIC_URL}/images/cv picture.png`} /></div>
                        <h1 id="home">Aladdin Dridi</h1>
                        <h2>QA Engineer</h2>
                        <div>Passionate about technology since a very young age. I deeply believe that we should never stop learning and never settle for anything less than being the best at what we do.</div>
                    </div>
                    <div className={classes.terminal}>
                        <p id="typing_text">aladdin@home:~$ </p>
                        <span id="myspan"></span>
                    </div>
                    
                </section>
                <section className={classes.projects}>
                    <h2 id="projects">Projects</h2>
                    <Grid data={projects}/>
                </section>
                <section className={classes.experience}>
                    <h2 id="experience">Experience</h2>
                    {experience.map((item,index) => <Card key={index} item={item} />)} 
                    
                </section>
                <section className={classes.education}>
                    <h2 id="education">Education</h2>
                    {education.map((item,index) => <Card key={index} item={item} />)}                    
                </section>
                <section className={classes.certificates}>
                    <h2 id="certificates">Certificates</h2>
                    <Grid data={certificates} />
                </section>
            </main>
            <footer>

            </footer>
        </div>
        
    )
}

export default Home