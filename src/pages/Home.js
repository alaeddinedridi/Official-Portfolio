import Card from "../components/Card"
import Grid from "../components/Grid"
import Navbar from "../components/Navbar"
import classes from "../styles/Home.module.scss"
import {education} from '../data/education'
import {experience} from '../data/experience'

const Home = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={classes.home}>
                    <h1 id="home">Aladdin Dridi</h1>
                    <h2>QA Engineer</h2>
                    <div>Passionate about technology since a very young age. I deeply believe that we should never stop learning and never settle for anything less than being the best at what we do.</div>
                </section>
                <section className={classes.projects}>
                    <h2 id="projects">Projects</h2>
                    <Grid />
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
                    <Grid />
                </section>
            </main>
            <footer>

            </footer>
        </div>
        
    )
}

export default Home