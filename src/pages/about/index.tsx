/* About Page */
import ImageGallery from "react-image-gallery";
import Layout from "../../components/global/Layout";
import styles from "../../styles/about.module.css";
const Typewriter = require("typewriter-effect");

const title = "About Me";

export default function About() {
  return (
    <Layout page="about">
      <div className={styles.about}>
        {/* <h3>{title}</h3> */}
        <div>
          {/* <div className={styles.gallery}>
            <img src="/me.jpg" width={300} height={300} />
          </div> */}
          <h3
            style={{ textAlign: "center", fontWeight: "700", fontSize: "30px" }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hey there,")
                  .pauseFor(400)
                  .typeString(" I'm Brent")
                  .start();
              }}
            />
          </h3>
          <div style={{ fontWeight: "400", fontSize: "18px" }}>
            <p>
              I'm a Software Engineer from Toronto, Canada. I graduated from
              Queen's University in 2022 with a degree in Computer Engineering.
              Currently, I get to spend my days building cool stuff in the cloud
              at <a href="https://aws.amazon.com">Amazon Web Services</a>.
            </p>
            <p>
              Despite being primarily focused on Software Engineering, I love
              getting my hands dirty and working on multi-disciplinary projects.
              Throughout my time in school, I had the opportunity to work on
              several awesome <a href="/projects">projects</a> through design
              teams, work and hobby. While I lean towards involving myself in
              the technical side of things, I enjoy taking the lead and helping
              a team work towards a common goal.
            </p>
            <p>
              I'm also a bit of a travel junkie - I love exploring new places
              and experiencing different cultures. I've been lucky enough to
              visit 20+ countries so far, and I'm always looking for new places
              to add to my bucket list. You can read more about my travels on my{" "}
              <a href="/blog">blog</a>.
            </p>
            <p>
              When I'm not coding, you can usually find me on my bike, playing
              music, or hanging out with my dog.
            </p>
          </div>
          <ImageGallery items={images} />
        </div>
      </div>
    </Layout>
  );
}

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
