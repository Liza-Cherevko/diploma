import React from 'react'
import Header from '../Header'
import  '../../../common/main.css'
import Carousel from '../components/Carousel'

function Main() {
    return (
        <>
                <Header/>
            <section className='inner_content new_index' >            
            <div className='column_wrapper'>
                <div className='content_wrapper wrap'>
                    <div className='title'>
                        <h2>Welcome.</h2>
                        <h3>Millions of movies, series and people. Explore now.</h3>
                    </div>
                </div>
            </div>
            </section>
            <section>
                <Carousel/>
            </section>
    </>
  )
}

export default Main