import { useEffect, useState } from 'react';

import styles from './Profile.module.css';

const Profile = ({ username }) => {
    const [github, setGithub] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(resJson => setGithub(resJson))
    }, [username]);

    const { avatar_url, name } = github;

    return (
        <>
            <header className={styles.header}>
                <img className={styles.avatar} src={avatar_url} />
                <h1 className={styles.name}>{name}</h1>
            </header>
        </>
    )
}

export default Profile;