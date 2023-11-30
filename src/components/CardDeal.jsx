import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () =>  (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>

    <h2 className={styles.heading2}> Find a better card <br className='sm:block hidden'/> deal 
     in few easy steps.</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Altynym menin en algashy ta tat atat atat at
    bmw dausyna uksap ketti ne zhazyp jatkanyndy bilesin be altyynym
    menin eket ebrdyn amalym jok kala berdim jyregim keudeme syimaidy
     oi sol menin juregimdi kyinaidy oi</p>
    <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg} >
    <img src={card} alt='card' className='w-[100%] h-[100%]'/>
    </div>
    </section>
  )


export default CardDeal