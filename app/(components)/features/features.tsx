import React from 'react'
import css from './features.module.css'
import Image from 'next/image'
import images1 from '@/public/assets/Change MacBook Color (Optional).png'
import images2 from '@/public/assets/Screen Effects.png'
import iconBox from '@/public/assets/fa-commenting-o.png'
import iconGem from '@/public/assets/fa-commenting-gem.png'


export default function Features() {
    return (
        <div className={css.features}>
            <div className={css.features1}>
                <div className={css.features2}>
                    <Image
                        src={images1}
                        alt='img does not show'
                        className={css.image1}
                    />
                    <Image
                        src={images2}
                        alt='img does not show'
                        className={css.image2}
                    />
                    <div className={css.features3}>
                        <h1>We Create Something New</h1>
                        <p id={css.para1}>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                        <div className={css.features4}>
                            <div className={css.boxes}>
                                <Image
                                    src={iconBox}
                                    alt='img does not show'
                                    className={css.imgBox}
                                />
                                <h3>30 New feature pages</h3>
                                <p>Startup Framework contains components and complex blocks which can easily. </p>
                            </div>
                            <div className={css.gem}>
                                <Image
                                    src={iconGem}
                                    alt='img does not show'
                                    className={css.imgBox}
                                />
                                <h3>Useful Symbol Components</h3>
                                <p>Samples will show you the feeling on how to play around using the components.</p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}
