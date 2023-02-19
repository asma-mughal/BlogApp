import React, { Fragment } from 'react'
import ContactPage from '../components/contact/contact-form'
import Head from 'next/head'
const Contact = () => {
  return (
    
     <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactPage />
      </Fragment>
  )
}

export default Contact
