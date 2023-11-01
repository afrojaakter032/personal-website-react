import React from 'react'

export default function Home() {
  return (
    <>
    <main>
        <section className='hero' style={{height:700, background: 'url(./assets/images/banner_bg2.png)', backgroundSize:"cover"}}>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 hero-image'>
                  <div className='hero-content'>
                    <div className='hero-item'>
                        <p className='h1 hero-header'>Hi, I'M ZYAN!</p>
                        <p className='h1 hero-sub-header'>CREATIVE CODER</p>
                    </div>

                    <div className='hero-item'>
                      <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                    </div>


                  </div>

                </div>

            </div>


        </div>


        </section>


    </main>
    <footer>

    </footer>


    </>

  );
}
