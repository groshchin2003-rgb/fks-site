window.onload = () => {
  setTimeout(() => {
    document.querySelector('.left').style.transform = 'translateX(-100%)';
    document.querySelector('.right').style.transform = 'translateX(100%)';
  }, 800);

  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('shop').style.opacity = '1';
  }, 2300);
};

function openProduct(id) {
  window.location.href = `product${id}.html`;
}
