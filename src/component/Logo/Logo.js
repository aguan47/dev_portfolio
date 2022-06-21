import HTMLLogo from '../../assets/images/html-5.svg';
import CSSLogo from '../../assets/images/css-3.svg';
import TailwindLogo from '../../assets/images/tailwindcss-icon.svg';
import JSLogo from '../../assets/images/javascript.svg';
import ReactLogo from '../../assets/images/react.svg';
import NodeJSLogo from '../../assets/images/nodejs-icon.svg';
import RubyLogo from '../../assets/images/ruby.svg';
import PostgresqlLogo from '../../assets/images/postgresql.svg';
import MySQLLogo from '../../assets/images/mysql-icon.svg';
import MariaDBLogo from '../../assets/images/mariadb-icon.svg';
import KnexLogo from '../../assets/images/knex.svg';
import GitLogo from '../../assets/images/git-icon.svg';
import DockerLogo from '../../assets/images/docker-icon.svg';
import DigitalOceanLogo from '../../assets/images/digital-ocean.svg';
import Tooltip from '../Tooltip/Tooltip';
import classes from './Logo.module.css';



const Logo = ({name, alt}) => {
    let src = "";

    switch(name) {
        case "HTML":
            src = HTMLLogo;
            break;
        case "CSS":
            src = CSSLogo;
            break;
        case "Tailwind":
            src = TailwindLogo;
            break;
        case "Javascript":
            src = JSLogo;
            break;
        case "React":
            src = ReactLogo;
            break;
        case "NodeJS":
            src = NodeJSLogo;
            break;
        case "Ruby on Rails":
            src = RubyLogo;
            break;
        case "PostgreSQL":
            src = PostgresqlLogo;
            break;
        case "MySQL":
            src = MySQLLogo;
            break;
        case "MariaDB":
            src = MariaDBLogo;
            break;
        case "Knex":
            src = KnexLogo;
            break;
        case "Git":
            src = GitLogo;
            break;
        case "Docker":
            src = DockerLogo;
            break;
        case "DigitalOcean":
            src = DigitalOceanLogo;
            break;
        default: 
            src = null;
    }


    return(
        <Tooltip text={name}>
            <img src={src} alt={alt} className={classes.Logo}/>
        </Tooltip>
    );
}

export default Logo;