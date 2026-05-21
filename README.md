# Etkinlik Planlama Uygulaması - Frontend

## Proje Açıklaması
Kullanıcıların etkinlik oluşturabildiği, diğer kullanıcıların etkinlikleri görüntüleyip katılım sağlayabildiği web uygulamasının frontend projesidir.

## Kullanılan Teknolojiler
- Angular 21
- Bootstrap 5.3
- TypeScript
- HTML / CSS

## Proje Yapısı

<pre>
src/app/
├── layout/
│   ├── navbar/
│   └── main-layout/
├── pages/
│   ├── event-list/
│   ├── event-detail/
│   ├── event-create/
│   ├── event-edit/
│   ├── event-search/
│   └── my-events/
├── login/
├── register/
├── auth-guard.ts
├── not-auth-guard.ts
├── app.routes.ts
└── app.config.ts
</pre>

## Sayfalar

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Giriş Yap | / | Kullanıcı girişi |
| Kayıt Ol | /register | Kullanıcı kaydı |
| Etkinlikler | /event-list | Yayındaki etkinlikler |
| Etkinlik Detay | /event-detail/:id | Etkinlik detayı ve katılım |
| Etkinlik Oluştur | /event-create | Yeni etkinlik oluşturma |
| Etkinlik Düzenle | /event-edit/:id | Etkinlik düzenleme |
| Etkinlik Ara | /event-search | Etkinlik arama |
| Etkinliklerim | /my-events | Kendi etkinlikleri ve katıldıkları |



***Giriş Yap Sayfası***


<img width="546" height="464" alt="image" src="https://github.com/user-attachments/assets/e038d149-44dc-4399-95ec-efd7d34c693a" />



***Kayıt Ol Sayfası***


<img width="575" height="570" alt="image" src="https://github.com/user-attachments/assets/cefd7a09-3b86-49c8-b80d-9850b8d46f4a" />



***Etkinlik Listeleme Sayfası***


<img width="1907" height="676" alt="image" src="https://github.com/user-attachments/assets/102e8059-66b9-4959-b3dc-58049e103279" />





***Örnek Etkinlik Detayı***


<img width="1920" height="795" alt="image" src="https://github.com/user-attachments/assets/b56b4e7a-fe67-4784-bc8b-eaa25911449d" />




***Etkinlik Oluşturma Sayfası***


<img width="1920" height="803" alt="image" src="https://github.com/user-attachments/assets/a5bfcf36-3181-486d-9c14-84844f2cf19d" />




***Etkinlik Düzenleme Sayfası***


<img width="1920" height="804" alt="image" src="https://github.com/user-attachments/assets/240d4631-f44b-432d-92c0-4b67ed5f2f81" />





***Etkinliklerim Sayfası***


<img width="1920" height="817" alt="image" src="https://github.com/user-attachments/assets/af39f7c5-bd2d-42ab-a302-025ced83cb07" />




***Katılınan Etkinlikler Sayfası***


<img width="1920" height="806" alt="image" src="https://github.com/user-attachments/assets/24068579-2cee-4035-b50c-38831022c010" />





***Etkinlik Arama Sayfası***


<img width="1920" height="808" alt="image" src="https://github.com/user-attachments/assets/fe50efcb-bbbb-4a33-8c00-8c38f2add00e" />





## Kurulum Adımları

### Gereksinimler
- Node.js
- Angular CLI

### Frontend Çalıştırma
```bash
git clone https://github.com/Neslihan-Ozdemir/eventprojectfrontend.git
cd eventprojectfrontend
npm install
ng serve
```

Uygulama `http://localhost:4200` adresinde çalışacaktır.

## Backend
Backend projesine buradan ulaşabilirsiniz: [eventprojectbackend](https://github.com/Neslihan-Ozdemir/eventprojectbackend)

---
