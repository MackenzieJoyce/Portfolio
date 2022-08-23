import React from 'react';

const styles = {
    contentEntire: {
        textAlign: 'center',
        border: '1px solid steelblue',
        borderRadius: 5,
        boxShadow: '0 0 3px 3px rgba(33, 203, 243, .3)',
        background: 'rgba(255, 255, 255, 0.16)',
        minHeight: 500,
        marginTop: '2%',
        paddingTop: '2%',
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
                <img className="title" src="../../../Assets/Business Profile" alt="Mackenzie Joyce"></img>
                <h1>
                    Mackenzie Joyce
                </h1>
            </div>
            <div style={styles.contentIndiv}>
                <h2 className="title">
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