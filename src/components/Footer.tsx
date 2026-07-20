import Reveal from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Reveal as="footer" className="site container" y={12}>
      <span>© {year} Nackl. Dares, Tribes, HypeShouts, SlayCards.</span>
      <div className="flinks">
        <a href="#how">How it works</a>
        <a href="#proof">The Proof</a>
        <a href="#features">Features</a>
        <a href="#privacy">Privacy</a>
      </div>
    </Reveal>
  );
}
