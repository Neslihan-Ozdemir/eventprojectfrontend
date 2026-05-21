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


<img width="1920" height="625" alt="image" src="https://github.com/user-attachments/assets/29abeac8-2012-444e-a19f-7f72881be9b2" />




***Örnek Etkinlik Detayı***


<img width="1920" height="808" alt="image" src="https://github.com/user-attachments/assets/89d42a14-c30e-4e5f-b80c-1381e1305880" />



***Etkinlik Oluşturma Sayfası***


<img width="1920" height="812" alt="image" src="https://github.com/user-attachments/assets/1ed86813-2021-446f-a994-5604424373a7" />


***Etkinlik Düzenleme Sayfası***


<img width="1919" height="810" alt="image" src="https://github.com/user-attachments/assets/c23df70c-2df6-43e8-86cd-602ead4bd231" />




***Etkinliklerim Sayfası***


<img width="1919" height="806" alt="image" src="https://github.com/user-attachments/assets/26816e3c-4205-448c-982a-d43fa8babb33" />



***Katılınan Etkinlikler Sayfası***


<img width="1920" height="807" alt="image" src="https://github.com/user-attachments/assets/08889e6b-fc45-40d6-8ea4-0f0bb978a197" />




***Etkinlik Arama Sayfası***


<img width="1918" height="785" alt="image" src="https://github.com/user-attachments/assets/0293da06-2a5d-48b2-9d5a-c13ba3aa346e" />




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
