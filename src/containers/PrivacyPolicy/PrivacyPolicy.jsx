import React, { useEffect, useState } from 'react'

import './PrivacyPolicy.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LinkSend from '../../components/LinkSend/LinkSend'
import { Link } from 'react-router-dom'
import { policiesService } from '../../services'
import { resHandler } from '../../../helper'

export default function PrivacyPolicy() {
  const [policyData, setPolicyData] = useState()
  useEffect(() => {
    getPolicyFetch()
  }, [])

  const getPolicyFetch = async () => {
    await policiesService().then(res => {
      // let {status, data, message} = resHandler(res);
      // console.log(res.data, "policy");
      setPolicyData(res.data);
    })
  }
  return (
    <>
      <Header />

      <section className=' pg-privacypolicy pb-4'>
        <div className='container'>
          <div className=' bg-white py-4 shadow'>
            <div className='p-4 pg-privacypolicy-text' dangerouslySetInnerHTML={{ __html: policyData && policyData }} />
            {/* <div className='pg-privacypolicy-title text-center'>
                    <h2>Privacy Policy</h2>
                </div>
                <div className='p-4 pg-privacypolicy-text'>
                    <p>
                    We value the trust you place in us and recognize the importance of secure transactions
                     and information privacy. This Privacy Policy describes how Flipkart Internet Private 
                     Limited and its affiliates (collectively “Flipkart, we, our, us”) collect, use, share
                      or otherwise process your personal information through Flipkart website
                      <Link> www.flipkart.com </Link>, 
                      its mobile application, and m-site (hereinafter referred to as the “Platform”).
                    </p>
                    <p>
                    While you can browse sections of the Platform without the need of sharing any information
                    with us, however, please note we do not offer any product or service under this Platform
                    outside India.. By visiting this Platform, providing your information or availing out product/service,
                    you expressly agree to be bound by the terms and conditions of this Privacy Policy, the
                    <Link>Terms of Use</Link>
                    and the applicable service/product terms and conditions, and agree to be governed by the laws of India
                    including but not limited to the laws applicable to data protection and privacy. If you do not agree
                    please do not use or access our Platform.
                    </p>

                    <p className='fw-bold'>
                    Collection of Your Information
                    </p>
                    <p>
                    When you use our Platform, we collect and store your information which is provided by you from time to time. In general, you can browse the Platform without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service, product or feature on the Platform.
                    </p>

                   <p className='fw-bold'>Use of Demographic / Profile Data / Your Information</p>

                   <p>
                   We use your personal information to provide the product and services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to assist sellers and business partners in handling and fulfilling orders; enhancing customer experience; resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services; inform you about online and offline offers, products, services, and updates; customize and enhance your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection of information.
                   </p>
                   <p className='fw-bold'>Cookies</p>

                   <p>
                   We use data collection devices such as "cookies" on certain pages of the Platform to help analyze our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing our services. Cookies do not contain any of your personal information. We offer certain features that are only available through the use of a "cookie". We also use cookies to allow you to enter your password less frequently during a session.
                   </p>


                  <p className='fw-bold'> Sharing of personal information</p>

                <p>  We may share personal information internally within Flipkart group companies, affiliates, related companies and with other third parties, including Credit Bureaus, for purposes of providing products and services offered by them, such as, personal loans, the deferred payment options, Flipkart PayLater offered by Flipkart Advanz Private Limited through its lending partners. These entities and affiliates may share such information with their affiliates, business partners and other third parties for the purpose of conducting the required checks, namely for the purpose of credit underwriting, providing you their products and services and may market to you as a result of such sharing unless you explicitly opt-out.</p>

              
               <p className='fw-bold'> Links to Other Sites</p>

                <p>Our Platform may provide links to other websites or applications that may collect personal information about you. We are not responsible for the privacy practices or the content of those linked websites.</p>

                <p className='fw-bold'>Security Precautions</p>

                <p>We maintain reasonable physical, electronic and procedural safeguards to protect your information. Whenever you access your account information, we offer the use of a secure server. Once your information is in our possession, we adhere to our security guidelines to protect it against unauthorized access. However, by using the Platform, the users accept the inherent security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform. Users are responsible for ensuring the protection of login and password records for their account.</p>

                <p className='fw-bold'>Choice/Opt-Out</p>

                <p>We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications after setting up an account with us. If you do not wish to receive promotional communications from us, then please login into the  Preference page of Platform [https://www.flipkart.com/communication-preferences/email] to unsubscribe/opt-out.</p>

                <p className='fw-bold'>Advertisements on Platform</p>

                <p>We use third-party advertising companies to serve ads when you visit our Platform. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide personalized advertisements about goods and services of interest to you. You have an option to opt out from tracking of personalized advertising using the “Opt out of Ads Personalization” settings using your device’s settings application. Flipkart will have no access to your GAID once you select this feature.</p>

                <p className='fw-bold'>Children Information</p>

                <p>Use of our Platform is available only to persons who can form a legally binding contract under the Indian Contract Act, 1872. We do not knowingly solicit or collect personal information from children under the age of 18 years. If you have shared any personal information of children under the age of 18 years, you represent that you have the authority to do so and permit us to use the information in accordance with this Privacy Policy.</p>

                <p className='fw-bold'>Data Retention</p>

               <p> We retain your personal information in accordance with applicable laws, for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. However, we may retain data related to you if we believe it may be necessary to prevent fraud or future abuse, to enable Flipkart to exercise its legal rights and/or defend against legal claims or if required by law or for other legitimate purposes. We may continue to retain your data in anonymised form for analytical and research purposes.</p>

               <p className='fw-bold'> Your Rights</p>

                <p>We take every reasonable step to ensure that your personal information that we process is accurate and, where necessary, kept up to date, and any of your personal information that we process that you inform us is inaccurate (having regard to the purposes for which they are processed) is erased or rectified. You may access, correct, and update your personal information directly through the functionalities provided on the Platform. You may delete certain non-mandatory information by logging into our website and visiting Profile and Settings sections. You can also write to us at the contact information provided below to assist you with these requests.</p>

               

                <p className='fw-bold'>Your Consent</p>

                <p>By visiting our Platform or by providing your information, you consent to the collection, use, storage, disclosure and otherwise processing of your information (including sensitive personal information) on the Platform in accordance with this Privacy Policy. If you disclose to us any personal information relating to other people, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy.</p>

               

               <p className='fw-bold'> Changes to this Privacy Policy</p>

                <p>Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices. We will alert you to significant changes by posting the date our policy got last updated, placing a notice on our Platform, or by sending you an email when we are required to do so by applicable law.</p>


                     <p>Mr. Ashish Arora</p>


                </div> */}
          </div>
        </div>
      </section>

      <LinkSend />
      <Footer />
    </>
  )
}
