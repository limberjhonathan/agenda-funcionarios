import func from '../assets/func.png'
import styles from '../styles/HomeStyle.module.css'

export default function Home() {
    return (
        <section className={styles.container_home}>
            <div>     
                <img src={func} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur unde inventore autem ex vero ut corrupti laborum repellat nisi! Veritatis voluptate cum ab? Consectetur modi illo fugit soluta dignissimos qui vero quis dolore dolores eveniet ullam dolor, vel repellat saepe sunt cupiditate, iure exercitationem suscipit inventore dicta laudantium iste. Eos ad cum labore culpa maxime repellat pariatur dicta harum voluptates neque quidem doloremque corporis facere, excepturi quae unde dignissimos incidunt expedita voluptatibus. Earum fugiat ratione, iure nobis repudiandae culpa eius temporibus ipsa expedita libero error accusantium adipisci provident nulla alias minus voluptates aliquid et aperiam quam deserunt assumenda?</p>
            </div>
        </section>
    )
}