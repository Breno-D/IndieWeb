import cover from '../Components/RightBar/Images/emulate.gif'

export default {
  id: "post-001",
  title: "Meu primeir post",
  date: "2026-06-01",
  summary: "sem blog escrito aindar",
  content: [
    { type: "text", value: "Primeiro parágrafo do post aqui." },
    { type: "image", src: cover, alt: "Descrição da imagem" },
    { type: "text", value: "Segundo parágrafo, depois da imagem." },
    { type: "image", src: cover, alt: "Outra imagem" },
    { type: "text", value: "Parágrafo final." },
  ],
  cover
};