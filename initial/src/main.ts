import { Application } from "pixi.js";
import { Game } from "./task";
import '../css/style.css';

const audio=document.createElement("audio");
audio.style.visibility='none';
document.body.append(audio);
document.body.style.background='url("../assets/images/bg.jpg")no-repeat center';
const canvas:HTMLCanvasElement=document.getElementById("canvas")as HTMLCanvasElement;
const app= new Application({
    view:canvas,
    width:innerWidth*0.8,
    height:innerHeight,
    backgroundColor:0xa,
    sharedTicker:true,
    sharedLoader:true
});

const task=new Game(app);
app.ticker.add(task.animate.bind(task));