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

<img width="1920" height="788" alt="image" src="https://github.com/user-attachments/assets/4511d95b-997d-472c-a50d-6a18f6618106" />


***Örnek Etkinlik Detayı***

<img width="1920" height="812" alt="image" src="https://github.com/user-attachments/assets/db63dc7a-d35d-42e7-9dfa-9e803f7953f5" />


***Etkinlik Oluşturma Sayfası***

<img width="1920" height="810" alt="image" src="https://github.com/user-attachments/assets/89a68b4f-d66c-47fd-ba3c-29ac112a3e15" />


***Etkinliklerim Sayfası***

<img width="1920" height="808" alt="image" src="https://github.com/user-attachments/assets/e2ef2330-6729-4167-9613-dcf9022b49e2" />


***Katılınan Etkinlikler Sayfası***

<img width="1920" height="809" alt="image" src="https://github.com/user-attachments/assets/1a6ea56c-8932-443a-9632-6d95dde9be6b" />


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
