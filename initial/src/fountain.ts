import { ParticleContainer } from "@pixi/particles";
import particles=require('pixi-particles');
import { selectTexture } from "./texture";


export class ParticleAni extends ParticleContainer{
    fountain:particles.Emitter;
    constructor(count:number,info:any){
        super(count,info);
        this.fountain=new particles.Emitter(this, selectTexture('coin'),
        {
            "alpha": {
                "start": 0.5,
                "end": 3.9
            },
            "scale": {
                "start": 0.03,
                "end": 0.13
            },
            "color": {
                "start": "ffffff",
                "end": "ffffff"
            },
            "speed": {
                "start": 1200,
                "end": 600
            },
            "acceleration": {
                "x":0,
                "y": 5600
            },
            "startRotation": {
                "min": 260,
                "max": 280
            },
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 1,
                "max": 1
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0,
            "maxParticles": 5000,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "circle",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 0
            }
        }
            )
    }
    startFountain(){
        this.fountain.emit=true;
    }
    runFountain(counter:number){
        this.fountain.update(counter*0.001);
    }
}