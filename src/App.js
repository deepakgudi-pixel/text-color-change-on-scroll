import { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollBar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const scrollBar = ScrollBar.init(document.querySelector(".main"), {
      damping: 0.01,
      delegateTo: document,
      alwaysShowTracks: true,
      speed: 0.2
    });

    ScrollTrigger.defaults({
      scroller: ".main"
    });

    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      }
    });

    scrollBar.addListener(ScrollTrigger.update);

    const sentences = document.querySelectorAll("p");

    sentences.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "top center",
          end: "bottom 40%"
        }
      });
    });
  }, []);

  return (
    <Container>
      <MiniContainer className="main">
        <Section>Scroll To See Effect</Section>
        <Text>
          <p>I'm a Full Stack Developer</p>
          <p>and a recent graduate of the</p>
          <p>Software Program.</p>

          <p>I create project under the notion</p>
          <p>that "less is more" and my work</p>
          <p>reflects my addiction for minimal</p>
          <p>and clean design as well as my</p>
          <p>desire to push boundaries.</p>

          <p>I am currently learning Redux and</p>
          <p>Jest to further my front-end</p>
          <p>focus while developing my concepts on</p>
          <p>FlyBy into native mobile application</p>
          <p>using React Native.</p>
        </Text>
        <Section>Scroll Up</Section>
      </MiniContainer>
    </Container>
  );
}

const Container = styled.div`
  font-size: 100px;
  position: relative;
  background-color: #0f0f0f;
  font-family: monospace;
`;

const MiniContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Section = styled.div`
  height: 70vh;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 100px;
  font-weight: 600;
  padding: 70px 0px;

  p {
    background: linear-gradient(to right, #ec4 50%, #ec4256 50%);
    background-size: 200% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    user-select: none;
  }
`;
