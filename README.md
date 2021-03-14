# SETUP BACKEND APPLICATION

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

- Install Docker

- Running Command "npm install typeorm pg", for install dependency of typeorm for working with postgres database.

```sh
$ npm install typeorm pg
```

- Initialized Typescript in project, run the command "npx tsc --init"

```sh
$ npx tsc --init
```

### Setup DB

- run the command "npm run typeorm migration:create -n CreateClient"

```sh
$ npm run typeorm migration:create -n CreateClient
```

- Após a criação das migrations que ficam na pasta:

`src/database/migration`

- abra o arquivo criado com o nome de (nome-criado-automaticamente)-CreateClient.ts.

1. E no trecho do código citado abaixo copie a palavra **Table**, exemplo:

Era assim:

```
import { MigrationInterface, QueryRunner} from 'typeorm';
```

Fica assim:

```
import { MigrationInterface, QueryRunner, Table } from 'typeorm';
```

2. E no trecho do código citado abaixo copie a palavra **default**, exemplo:

Era assim:

```
export class
```

Fica assim:

```
export default class
```

3. Copie o trecho do código citado abaixo:

```
await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'public_place',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'complement',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'district',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'locality',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'uf',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
```

4. Copie o código abaixo e cole no local indicado

```
await queryRunner.dropTable('clients');
```

Cole aqui:

```
 public async down(queryRunner: QueryRunner): Promise<void> {
    aqui .... await queryRunner.dropTable('clients');
  }
```

- O arquivo final deve ficar mais ou menos assim:

```
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClient1615493149783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'public_place',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'complement',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'district',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'locality',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'uf',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients');
  }
}

```

- run the command "npm run typeorm migration:run"

```
npm run typeorm migration:run
```