#  Guía completa Express + Sequelize + TypeScript

## 1. Crear proyecto
```bash
mkdir sqlize && cd sqlize
npm init -y
```
 Se crea carpeta y se inicializa `package.json`.

---

## 2. Instalar dependencias
```bash
# Dependencias principales
npm install express sequelize mysql2

# Dependencias de desarrollo

--- typescript → el compilador de TS.
--- ts-node-dev → ejecutar TS directamente en desarrollo (con autoreload).
--- @types/express → tipados para que TypeScript y el IDE no den errores.

npm install --save-dev typescript ts-node-dev @types/express
```
 `express`: servidor.  
 `sequelize`: ORM.  
 `mysql2`: driver MySQL.  
 `typescript`: soporte TS.  
 `ts-node-dev`: recarga automática.  
 `@types/express`: tipados.
 `@types/bcrypt`: tipados.
 

---

## 3. Configuración de TypeScript
Crear archivo `tsconfig.json` en la raíz:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "outDir": "dist",
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

## 4. Scripts en package.json
```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

---

## 5. Estructura de carpetas
```
src/
 ├─ config/
 │   └─ db.ts
 ├─ models/
 │   └─ User.ts
 ├─ controllers/
 │   └─ userController.ts
 ├─ routes/
 │   └─ userRoutes.ts
 └─ index.ts
```

---


