const userData = {
  "firstName": "Айзат", 
  "lastName": "Мухамметжанов",
  "fullName": "Мухамметжанов Айзат Аманжолович", // Полное имя для отображения
  "company": "SMILE CENTER",
  "jobTitle": "Стоматолог",
  "phone": "+77016110009",
  "instagram": "dr._mukhametzhanov"
};

document.addEventListener("DOMContentLoaded", () => {
  
  // АВТОМАТИЧЕСКОЕ ЗАПОЛНЕНИЕ ТЕКСТА НА СТРАНИЦЕ
  document.getElementById("personName").textContent = userData.fullName;
  document.getElementById("userName").textContent = userData.company;
  document.getElementById("userJob").textContent = userData.jobTitle;

  // 1. Кнопка WhatsApp
  const btnWa = document.getElementById("btnWhatsapp");
  const waNumber = userData.phone.replace(/[^0-9]/g, '');
  btnWa.href = `https://wa.me/${waNumber}`;

// ДОБАВЬТЕ ЭТОТ БЛОК, ЧТОБЫ КНОПКА ЗАРАБОТАЛА
  const btnInsta = document.getElementById("btnInstagram");
  if (btnInsta) {
    // Скрипт сам подставит ник в ссылку
    btnInsta.href = `https://www.instagram.com/${userData.instagram}`;
  }
  
  // ... код для сохранения контакта ...
  // 3. Сохранение контакта (исправленный формат)
  const btnSave = document.getElementById("btnSave");
  btnSave.addEventListener("click", function(e) {
    e.preventDefault();
    
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${userData.fullName}
N:${userData.lastName};${userData.firstName};;;
ORG:${userData.company}
TITLE:${userData.jobTitle}
TEL;TYPE=CELL,VOICE:${userData.phone}
EMAIL;TYPE=WORK,INTERNET:${userData.email}
END:VCARD`;

    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${userData.firstName}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
});