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
