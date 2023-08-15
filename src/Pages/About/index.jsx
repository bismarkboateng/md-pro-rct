import styles from "./index.module.scss";
import { Navbar, Buttons } from "../../components";
import { style, wrap, iconColor} from "./inlinStyle";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <section className={styles.about}>
      <Navbar bg={style} wrap={wrap} iconColor={iconColor}>
        <Buttons 
          signInClassName={styles.signIn}
          signUpClassName={styles.signUp}
        />
      </Navbar>

      <h1 className={styles.title}>
        Everyone has a <br />
        story to tell.
      </h1>

      <article>
        <p>
        Medium is a home for human stories and ideas. Here, anyone can share<br />
        insightful perspectives, useful knowledge, and life wisdom with the<br />
        world—without building a mailing list or a following first. The internet is<br />
        noisy and chaotic; Medium is quiet yet full of insight. It's simple,<br />
        beautiful, collaborative, and helps you find the right audience for<br />
        whatever you have to say.
        </p>
        <br />
        <p>
        We believe that what you read and write matters. Words can divide or<br />
        empower us, inspire or discourage us. In a world where the most<br />
        sensational and surface-level stories often win, we're building a system<br />
        that rewards depth, nuance, and time well spent. A space for thoughtful<br />
        conversation more than drive-by takes, and substance over packaging.
        </p>

        
        <div>
        Ultimately, our goal is to deepen our collective<br />
        understanding of the world through the power of<br />
        writing.
        </div>

        <p>
        Over 100 million people connect and share their wisdom on Medium<br />
        every month. Many are professional writers, but just as many aren't —<br />
        they're CEOs, computer scientists, U.S. presidents, amateur novelists,<br />
        and anyone burning with a story they need to get out into the world. They<br />
        write about what they're working on, what's keeping them up at night,<br />
        what they've lived through, and what they've learned that the rest of us<br />
        might want to know too.
        </p>
        <br />
        <p>
        Instead of selling ads or selling your data, we're supported by a growing<br />
        community of <Link to="/Membership" style={{ color: "rgba(255, 255, 255, 0.95)"}}>Medium members</Link> who align with our mission. If you're<br />
        new here, <Link to="/" style={{ color: "rgba(255, 255, 255, 0.95)"}}>start exploring</Link>. Dive deeper into whatever matters to you. Find<br />
        a post that helps you learn something new, or reconsider something<br />
        familiar—and then <Link to="/new-story" style={{ color: "rgba(255, 255, 255, 0.95)"}}>share your own story</Link>.
        </p>


      </article>
    </section>
  )
}
