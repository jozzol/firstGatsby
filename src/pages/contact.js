import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
    return (
        <Layout title='Contact us' heading='Contact'>
            <p>information that is not from the layout</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/JXetxQh.jpeg"
            />
        </Layout>
    )
}

export default Contact;