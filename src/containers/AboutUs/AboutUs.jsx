import React, { useEffect, useState } from 'react'
import { aboutUsService } from '../../services';
import { resHandler } from '../../../helper';
import Header from '../../components/Header/Header';
import LinkSend from '../../components/LinkSend/LinkSend';
import Footer from '../../components/Footer/Footer';

export default function AboutUs() {
    const [aboutData, setAboutData] = useState();
    useEffect(() => {
        getAboutFetch()
    }, [])

    const getAboutFetch = async () => {
        await aboutUsService().then(res => {
            let { data, status, message } = resHandler(res);
            console.log(res, "aboutUs")
            setAboutData(res.data);
        })
    }
    return (
        <>
            <Header />
            <section className='pg-privacypolicy pb-4'>
                <div className='container'>
                    <div className='bg-white py-4 shadow'>
                        <div className='p-4 pg-privacypolicy-text' dangerouslySetInnerHTML={{ __html: aboutData && aboutData }} />
                    </div>
                </div>
            </section>
            <LinkSend />
            <Footer />
        </>
    )
}
