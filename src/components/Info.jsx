import FilipSzkarlat from '../assets/FilipSzkarlat.jpeg'
import emailIcon from '../assets/email-icon.png'

export default function Info() {
    return(
        <section className='info'>
            <img className='info-pic' src={FilipSzkarlat} alt="Filip Szkarlat profile picture" />
            <h1>Filip Szkarlat Szczepaniak</h1>
            <p className='info-title'>Frontend Developer</p>
            <div className='info-buttons'>

                <a href='mailto:filip.szkarlat@gmail.com'>
                    <button><img src={emailIcon} alt="Email icon" /> Email</button>
                </a> 
                <a href="https://filipszkarlatportfolio.netlify.app//" target='_blank'>
                    <button>Portfolio</button>
                </a>
            </div>
        </section>
    )
}