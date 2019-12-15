export default {
  inserted(el, binding) {
    const {
      src,
      text,
      opacity = 0.3,
      rotate = 20,
      fontSize = 20,
      type = "repeat"
    } = binding.value;
    el.src = src;
    el.addEventListener("load", e => {
      const canvas1 = document.createElement("canvas");
      const ctx1 = canvas1.getContext("2d");
      const canvas2 = document.createElement("canvas");
      const ctx2 = canvas2.getContext("2d");
      const width = e.target.width;
      const height = e.target.height;

      canvas1.width = width;
      canvas1.height = height;
      canvas2.width = width;
      canvas2.height = height;

      ctx2.font = `${fontSize}px Arial`;
      ctx2.fillStyle = `rgba(0,0,0,${opacity})`;
      ctx2.textBaseLine = "middle";
      const textWidth = ctx2.measureText(text).width + 50;
      if (type === "repeat") {
        ctx2.rotate((-rotate * Math.PI) / 180);
        const xN = Math.ceil(width / textWidth) + 15;
        const yN = Math.ceil(height / textWidth) + 15;
        for (let i = 0; i < xN; i++) {
          for (let j = 0; j < yN; j++) {
            ctx2.fillText(
              text,
              i * textWidth - Math.min(rotate, 90) - textWidth * 3,
              j * (textWidth / 2) - Math.min(rotate, 90) - textWidth * 3
            );
          }
        }
      } else if (type === "left-top") {
        ctx2.fillText(text, 30, 30 + fontSize);
      } else if (type === "right-top") {
        ctx2.fillText(text, width - 30 - textWidth, 30 + fontSize);
      } else if (type === "right-bottom") {
        ctx2.fillText(text, width - 30 - textWidth, height - 30);
      } else if (type === "left-bottom") {
        ctx2.fillText(text, 30, height - 30);
      }

      ctx1.clearRect(0, 0, width, height);
      ctx1.drawImage(el, 0, 0, width, height);
      ctx1.drawImage(canvas2, 0, 0, width, height);
      el.parentNode.appendChild(canvas1);

      setTimeout(() => {
        el.parentNode.removeChild(el);
      }, 0);
    });
  }
}