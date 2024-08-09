import RestaurantSource from '../data/data-resto';

const addTesti = async (dataUlasan) => {
  const boxUlasan = document.querySelector('#UlasanPengunjung');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const tambahUlasan = `
    <li class="review">
        <div class="nama-ulasan">${dataUlasan.name}</div>
        <div class="hasil-ulasan">"${dataUlasan.review}"</div>
        <div class="tanggal-ulasan">${date}</div>
    </li>
  `;

  await RestaurantSource.addTesti(dataUlasan);
  boxUlasan.innerHTML += tambahUlasan;
};

export default addTesti;
