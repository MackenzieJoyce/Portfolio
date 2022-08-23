import React from 'react';

const styles = {
    contentEntire: {
        textAlign: 'center',
        border: '2px solid lightblue',
        borderRadius: 5,
        background: 'grey',
        minHeight: 500,
        margin: '0 30px',
        width: '80%'
    },
    contentIndiv: { 
        width: '30%'
    }
}

const About = () => { 
    return ( 
        <div className="content" style={styles.contentEntire}>
            <div style={styles.contentIndiv}>
                {/* <img></img> */}
                <h1>
                    Mackenzie Joyce
                </h1>
            </div>
            <div style={styles.contentIndiv}>
                <h2>
                    Front-End Web Developer
                </h2>
                <p>
                    I am now and always have been a front-end web developer and no one can tell me otherwise
                </p>
            </div>
        </div>
    )
}

export default About 