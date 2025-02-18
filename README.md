# Development

1. Correr el proyecto de la máquina local

```
npm run start
```

2. Iniciar el ORM de Prisma para crear el schema de la bd.

```
npx prisma init
```

3. Renombrar .env-tamplate a .env

4. Reemplazar las variables user, password, location db por las credenciales propias dde su bd.

5. realizar la migracion

```
npx prisma migrate dev
```

6. Generar el cliente de Prisma.

```
npx prisma generate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
