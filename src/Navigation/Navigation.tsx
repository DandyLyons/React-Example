import styles from './Navigation.module.scss'
function Navigation(): JSX.Element {
    return(
        <>
        <div className={styles.Navigation}>
            <div className={styles.leftContent}>
                <div className={styles.BeehiveLogo}>
                    <img className={styles.logo} src="public/Subtract.png" alt='beehive logo'/>
                    <span className={styles.name}>Name</span>
                </div>
                <ul className={styles.navbarMenu}>
                    <li className={styles.navbarMenuItem}>Portfolio</li>
                    <li className={styles.navbarMenuItem}>Story</li>
                    <li className={styles.navbarMenuItem}>Contact</li>
                    <li className={styles.navbarMenuItem}>Career</li>
                    <li className={styles.navbarMenuItem}>Skillset</li>
                </ul>
            </div>
            <ul className={styles.topIcons}>
                <li>
                    <img className={styles.topIconsItem} src="public/Facebook Alt.png" alt="facebookLogo" />
                </li>
                <li>
                    <img className={styles.topIconsItem} src="public/Instagram Alt.png" alt="insLogo" />
                </li>
                <li>
                    <img className={styles.topIconsItem} src="public/Twitter Alt.png" alt="twitterLogo" />
                </li>
            </ul>
        </div>
        </>

    )
}
export default Navigation
