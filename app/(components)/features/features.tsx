import React from 'react'
import css from './features.module.css'
import Image from 'next/image'
import images1 from '@/public/assets/Change MacBook Color (Optional).png'
import images2  from '@/public/assets/Screen Effects.png'
import '@fortawesome/fontawesome-svg-core/styles.css'



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
                        <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                        <div className={css.features4}>


                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}
