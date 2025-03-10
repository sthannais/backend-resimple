# Instalación y Configuración de MongoDB

## En macOS
```sh
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
mongosh
```

## En Windows
1. Descarga MongoDB desde [aquí](https://www.mongodb.com/try/download/community) e instálalo.
2. Para iniciar MongoDB:
```sh
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
```
3. Para conectarte:
```sh
"C:\Program Files\MongoDB\Server\7.0\bin\mongosh.exe"
```

## Importar Datos
### macOS:
```sh
mongoimport --db resimple --collection companies --type csv --file /Users/thannaissuperlano/origen-datos-junior.csv --headerline
```
### Windows:
```sh
"C:\Program Files\MongoDB\Server\7.0\bin\mongoimport.exe" --db resimple --collection companies --type csv --file C:\Users\thannaissuperlano\origen-datos-junior.csv --headerline
```

 ¡MongoDB instalado y listo para usar!

