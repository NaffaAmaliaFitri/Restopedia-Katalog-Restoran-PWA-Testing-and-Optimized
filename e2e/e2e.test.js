Feature('E2E TEST');

Scenario('liking one restaurant', ({ I }) => {
    I.amOnPage("/");
    I.click({ xpath: '(//*[@class="article_resto"]//a)[1]' });
    I.seeElement("#likeButton");
    I.click("#likeButton");
    I.amOnPage("/#/favorite");
    I.seeElement(".article_resto a");
    I.grabTextFrom(".article_resto a");
});

Scenario('unliking one restaurant', ({ I }) => {
    // Buka halaman utama
    I.amOnPage("/");
    // Pilih salah satu resto, misalnya resto pertama
    I.click({ xpath: '(//*[@class="article_resto"]//a)[1]' });
    // Aplikasi membawa user ke halaman detail resto
    I.seeElement("#likeButton");
    // Kita menekan tombol menyukai resto
    I.click("#likeButton");
    // Buka halaman daftar resto yang disukai
    I.amOnPage("/#/favorite");
    // Kita melihat satu resto yang telah disukai
    I.seeElement(".article_resto a");
    I.click(".article_resto a");
    // Aplikasi membawa user ke halaman detail resto
    I.seeElement("#likeButton");
    // Kita menekan tombol batal menyukai resto
    I.click("#likeButton");
    // Buka halaman daftar resto yang disukai
    I.amOnPage("/#/favorite");
    // Kita tidak melihat resto yang disukai lagi
    I.dontSeeElement(".article_resto a");
});

Scenario('Customer review', ({ I }) => {
    // Buka halaman utama
    I.amOnPage("/");
    // Pilih salah satu resto, misalnya resto pertama
    I.click({ xpath: '(//*[@class="article_resto"]//a)[1]' });
    // Aplikasi membawa user ke halaman detail resto
    I.seeElement("#review-name");
    // Mengisi form ulasan
    I.fillField("#review-name", "firman jabar");
    I.fillField("#review-content", "Review from E2E testing");
    // Mengirim ulasan
    I.click("#kirim-ulasan");
    // Menunggu ulasan diproses dan ditampilkan
    I.wait(5);
    // Memastikan bahwa ulasan berhasil ditambah dengan mengecek apakah data yang ditambah sudah tampil atau tidak
    I.see("firman jabar", ".review .nama-ulasan");
    I.see("Review from E2E testing", ".review .hasil-ulasan");
});