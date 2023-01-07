const botaoCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const mensagem = document.querySelector("[data-mensagem]");
const canvas = document.querySelector("[data-video-canvas]");
const botaoTirarFt = document.querySelector("[data-tirar-foto]");
const botaoEnviar = document.querySelector("[data-enviar]");

let imagemUrl = "";


botaoCamera.addEventListener("click",async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false });
    botaoCamera.style.display = "none";
    campoCamera.style.display = "block"
    video.srcObject = iniciarVideo;
})

botaoTirarFt.addEventListener("click", () => {
    console.log("a");
    canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);
    imagemUrl = canvas.toDataURL("imagem.jpeg");
    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

botaoEnviar.addEventListener("click",() =>{
    const dadosSalvos = localStorage.getItem("cadastro");
    const dadosConvertidos = JSON.parse(dadosSalvos)
    dadosConvertidos.imagem = imagemUrl;

    localStorage.setItem("cadastro", JSON.stringify(dadosConvertidos));
    window.location.href = "./abrir-conta-form-3.html"
})