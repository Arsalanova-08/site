window.addEventListener("DOMContentLoaded", function () {
    const SiteGeneral = document.querySelector("#SiteGeneral"); // Elementni tanlash
    if (SiteGeneral) {
        LoadData(); // Ma'lumotlarni yuklash
    }

    function LoadData() {
        fetch("json/app.json") // JSON faylini yuklash
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ma'lumot kelishda xatolik bor");
                }
                return response.json(); // JSON ma'lumotini qaytarish
            })
            .then(data => {
                data.forEach((item, index) => {
                    const card = `
                        <div class="fanar__card">
                            <img src="${item.img}" class="fanar__img" alt="Fan rasmi">
                            <div class="InnerBox">
                            <h3>${item.title}</h3>
                            <p class"fanar__text">${item.text}</p>
                            <div/>
                        </div>
                    `;
                    SiteGeneral.innerHTML += card; // HTML ichiga qo'shish
                });
            })
            .catch(error => {
                console.error("Xatolik yuz berdi:", error.message); // Xatolikni konsolga chiqarish
            });
    }
});
