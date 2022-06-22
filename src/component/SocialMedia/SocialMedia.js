import classes from './SocialMedia.module.css';
import DownloadIcon from '../../assets/images/download-icon.svg';
import GithubIcon from '../../assets/images/github-icon.svg';
import LinkedInIcon from '../../assets/images/linkedin-icon.svg';

const SocialMedia = () => {    
    return(
        <nav>
            <ul className={classes.SocialMedia}>
                <a href='https://github.com/aguan47'>
                    <li className={classes.SocMedLink}>
                        <span className={classes.SocMedSpan}>GITHUB</span>
                        <img src={GithubIcon} alt="Logo of Github"/>
                    </li>
                </a>
                <a href='https://www.linkedin.com/in/angelo-guan-62816a208/'>
                    <li className={classes.SocMedLink}>
                        <span className={classes.SocMedSpan}>LINKEDIN</span>
                        <img src={LinkedInIcon} alt="Logo of Github"/>
                    </li>
                </a>
                <a href="#">
                    <li className={classes.SocMedLink}>
                        <span className={classes.SocMedSpan}>DOWNLOAD RESUME</span>
                        <img src={DownloadIcon} alt="Logo of Github"/>
                    </li>
                </a>
            </ul>
        </nav>
    );
}

export default SocialMedia;