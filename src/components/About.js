import React from 'react';

const About = (props) => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] z-[transparent] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            {props.lang ? 'обо мне' : ' About'}
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>{props.lang ? 'Привет. Я Ghadi, приятно С Вами познакомиться. Пожалуйста, оглянитесь вокруг.' : `Hi.I'm Ghadi, nice to meet you. Please take a look around.`}</p>
                    </div>
                    <div>
                        {!props.lang ? <p>I am passionate about building excellent web apps that improves
                            the lives of those around me. I specialize in creating websites
                            for clients ranging from individuals and small-businesses all the
                            way to mid enterprise corporations. What would you do if you had
                            a passionate workaholic Full-stack  developper available at your fingertips?</p> :

                            <p>Я увлечен созданием отличного программного обеспечения, которое улучшает
                                жизнь тех, кто меня окружает. Я специализируюсь на создании сайтов
                                для клиентов, начиная от частных лиц и малых предприятий
                                путь к корпорациям среднего бизнеса. Что бы вы сделали, если бы у вас есть
                                страстный трудоголик Full-stack  разработчик, доступный у вас под рукой?</p>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
