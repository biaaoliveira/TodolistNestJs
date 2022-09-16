import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  let tarefaId: number

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'Postal0212/',
          database: 'db_todo_teste',
          autoLoadEntities: true,
          synchronize: true,
          logging: false,
          dropSchema: true
        }),
        AppModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('01 - Deve inserir uma Tarefa no Banco', async () => {
    let response = await request(app.getHttpServer())
      .post('/tarefa')
      .send({
        nome: 'Fazer as atividades',
        descricao: 'Minha primeira tarefa do dia',
        responsavel: 'Eu',
        data: '2022-09-15',
        status: true
      })
      .expect(201)

      tarefaId = response.body.id

  })
})
function beforeAll(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

