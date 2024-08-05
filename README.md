# GERÇEK README DOSYASI


## İŞİMİN DÜŞECEĞİ DOSYALAR

-  validators/handlePacket.js
-  validators/sendStuff.js

## SERVERDAN DATA ALMA

-  *handlers* klaösrü içinde *custom.js* dosyası içerisindeki örneklere benzer şekilde verileri karşılayabiliyoruz ya da
-  *validators/handlePacket.js* içerisinde switch case kısmında event adıyla gelen veriyi karşılayabiliyoruz 

- Ayrıca veri alma işlemlerinin hepsi *validators/handlePacket.js* içerisinde tanımlanmış



## SERVERA DATA GÖNDERME

- *senders* klasörü içinden template'e benzer ekleyerek ya da  
- *validator/sendStuff.js* içerisinde basic wrapperlar tanımlayarak gönderebiliyoruz.

- Ayrıca gönderme işlemlerinin hepsi *validators/sendStuff.js* içerisinde tanımlanmış


