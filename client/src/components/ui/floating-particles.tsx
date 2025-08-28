export default function FloatingParticles() {
  return (
    <>
      <div className="particle" style={{ top: "10%", left: "10%", animationDelay: "0s" }}></div>
      <div className="particle" style={{ top: "20%", left: "80%", animationDelay: "1s" }}></div>
      <div className="particle" style={{ top: "60%", left: "20%", animationDelay: "2s" }}></div>
      <div className="particle" style={{ top: "80%", left: "70%", animationDelay: "3s" }}></div>
      <div className="particle" style={{ top: "40%", left: "90%", animationDelay: "4s" }}></div>
    </>
  );
}
