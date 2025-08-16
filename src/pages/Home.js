import Card from "../components/Card"
import Grid from "../components/Grid"
import Navbar from "../components/Navbar"
import classes from "../styles/Home.module.scss"
import {education} from '../data/education'
import {experience} from '../data/experience'
import {projects} from '../data/projects'
import {certificates} from '../data/certificates'

import { useEffect, useRef, useState  } from "react"

const Home = () => {

    const typingRef = useRef(null);
    const timeoutsRef = useRef([]);
    const cancelledRef = useRef(false);
    
    const delay = (ms) =>
      new Promise((res) => {
        const id = setTimeout(res, ms);
        timeoutsRef.current.push(id);
      });
  
    async function typeWriter(el, textToType, speed, { append = false, prompt = "aladdin@home:~$ " } = {}) {
      if (!el) return;
      if (!append) el.textContent = prompt;
  
      for (let i = 0; i < textToType.length; i++) {
        if (cancelledRef.current) return; // stop if unmounted
        el.textContent += textToType.charAt(i);
        await delay(speed);
      }
    }
  
    useEffect(() => {
      
      cancelledRef.current = false;
  
      const run = async () => {
        const el = typingRef.current;
        await typeWriter(el, "Show skills", 80);       // first line
        el.textContent += "\naladdin@home:~$ ";                        // new line
        await delay(800);                              // pause
        await typeWriter(el, "done()", 80, { append: true }); // second line, no reset
      };
  
      run();
  
      return () => {
        // cleanup so Strict Mode’s test unmount doesn’t leave timers running
        cancelledRef.current = true;
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        
      };
    }, []);

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
                        <p id="typing_text" ref={typingRef} style={{ whiteSpace: "pre-wrap", margin: 0 }}>aladdin@home:~$ </p>
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