import Image from "next/image";
import styles from "./page.module.css";




export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>INDIA</h2>
        <ul className={styles.nav}>
          <li> 🏠Home</li>
          <li>👤About Us</li>
          <li> ⚙ Service</li>
          <li> 🖼Portfolio</li>
          <li>📰News</li>
          <li>📧Contact</li>
        </ul>
        <footer className={styles.footer}>
          <p>© 2025 India</p>
          <p><i>Created by Nikhil Vaishnav</i></p>
        </footer>
      </div>

      <div className={styles.right}>
        <div className={styles.profileImage}>
   <Image 
  src="/pro.jpg" 
  width={250} 
  height={250} 
  alt="profile" 
  className={styles.img}
/>

          
        </div>
        <h1 className={styles.name}>Nikhil Vaishnav</h1>
        <p className={styles.bio}>
          Creative Web Developer based in India, passionate about building elegant, user-friendly websites and applications, Eager to learn, grow and turn ideas into impactful digital experiences,
          Open to global opportunities and collaboration.
        </p>
        <div className={styles.social}>
          <span>🌐</span>
          <span>💻</span>
          <span>📱</span>
          <span>🎮</span>
        </div>
      </div>
    </div>
  
  );
}
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './page.module.css';

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <nav className={styles.left}>
//         <h1>INDIA</h1>
//         <ul className={styles.navList}>
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//           <li><Link href="/service">Service</Link></li>
//           <li><Link href="/portfolio">Portfolio</Link></li>
//           <li><Link href="/news">News</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>
//         <footer className={styles.footer}>
//           <p>© 2025 India</p>
//           <p><i>Created by Nikhil Vaishnav</i></p>
//         </footer>
//       </nav>

//       <main className={styles.main}>
//         <div className={styles.profileImage}>
//           <Image
//             src="/pro.jpg" // Make sure this image exists in the /public folder
//             width={250}
//             height={250}
//             alt="profile"
//             className={styles.img}
//           />
//         </div>
//         <h1 className={styles.name}>Nikhil Vaishnav</h1>
//         <p className={styles.bio}>
//           Creative Web Developer based in India, passionate about building elegant,
//           user-friendly websites and applications. Eager to learn, grow and turn
//           ideas into impactful digital experiences. Open to global opportunities and
//           collaboration.
//         </p>
//         <div className={styles.social}>
//           <span>🌐</span>
//           <span>💻</span>
//           <span>📱</span>
//           <span>🎮</span>
//         </div>
//       </main>
//     </div>
//   );
// }

