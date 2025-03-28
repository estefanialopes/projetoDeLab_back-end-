import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const { HOST, DB_PORT, DB_USER, PASSWORD, DB_NAME } = process.env

async function createDatabaseIfNotExists() {
  // Conecta ao banco padrão "postgres" para verificar/criar o banco alvo
  const tempDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: 5432,
    username: DB_USER,
    password: PASSWORD,
    database: "postgres", // Banco padrão do PostgreSQL
  });

  await tempDataSource.initialize();

  // Verifica se o banco já existe
  const result = await tempDataSource.query(
    `SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'`
  );

  if (result.length === 0) {
    console.log(`Criando banco de dados '${DB_NAME}'...`);
    await tempDataSource.query(`CREATE DATABASE ${DB_NAME}`);
  }

  await tempDataSource.destroy();
  
}


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: HOST,
  port: Number(DB_PORT),
  username: DB_USER, 
  password: PASSWORD,
  database: DB_NAME,
  logging: true,
  migrations: ['dist/shared/db/migrations/*.js'],
  entities: ["dist/modules/**/entities/*.js"]
})


async function initializeDatabase() {
  try {
    await createDatabaseIfNotExists();
    await AppDataSource.initialize();
    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
  }
}

export default initializeDatabase;