
import Particles from "react-particles-js"
import ParticleConfig from "../config/Particle-config"

export default function ParticleBackground() {
    return (
        <Particles className="particle" params={ParticleConfig}></Particles>
    );
}