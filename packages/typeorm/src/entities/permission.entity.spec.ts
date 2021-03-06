// std
import { fail, notStrictEqual, ok, strictEqual } from 'assert';

// 3p
import { BaseEntity, createConnection, getConnection, getManager, QueryFailedError } from 'typeorm';

// FoalTS
import { Permission } from './permission.entity';

function testSuite(type: 'mysql' | 'mariadb' | 'postgres' | 'sqlite' | 'better-sqlite3') {

  describe(`with ${type}`, () => {

    before(async () => {
      switch (type) {
        case 'mysql':
        case 'mariadb':
          await createConnection({
            database: 'test',
            dropSchema: true,
            entities: [Permission],
            password: 'test',
            port: type === 'mysql' ? 3308 : 3307,
            synchronize: true,
            type,
            username: 'test',
          });
          break;
        case 'postgres':
          await createConnection({
            database: 'test',
            dropSchema: true,
            entities: [Permission],
            password: 'test',
            synchronize: true,
            type,
            username: 'test',
          });
          break;
        case 'sqlite':
        case 'better-sqlite3':
          await createConnection({
            database: 'test_db.sqlite',
            dropSchema: true,
            entities: [Permission],
            synchronize: true,
            type,
          });
          break;
        default:
          break;
      }
    });

    after(() => getConnection().close());

    beforeEach(async () => Permission.delete({}));

    it('should extend BaseEntity.', () => {
      const permission = new Permission();
      strictEqual(permission instanceof BaseEntity, true);
    });

    it('should have a generated primary key "id".', async () => {
      const permission = new Permission();
      permission.name = '';
      permission.codeName = '';
      await getManager().save(permission);
      notStrictEqual(permission.id, undefined);
    });

    it('should have a "name".', () => {
      const permission = new Permission();
      permission.codeName = '';
      return getManager().save(permission)
        .then(() => fail('The promise should be rejected.'))
        .catch(err => {
          ok(err instanceof QueryFailedError);
          ok([
            'SQLITE_CONSTRAINT: NOT NULL constraint failed: permission.name',
            'SqliteError: NOT NULL constraint failed: permission.name',
            'null value in column "name" violates not-null constraint',
            'ER_NO_DEFAULT_FOR_FIELD: Field \'name\' doesn\'t have a default value'
          ].includes(err.message));
        });
    });

    it('should have a "codeName" which is unique and whose length is 100.', async () => {
      const permission = new Permission();
      permission.name = '';

      await getManager().save(permission)
        .then(() => fail('The promise should be rejected.'))
        .catch(err => {
          ok(err instanceof QueryFailedError);
          ok([
            'SQLITE_CONSTRAINT: NOT NULL constraint failed: permission.codeName',
            'SqliteError: NOT NULL constraint failed: permission.codeName',
            'null value in column "codeName" violates not-null constraint',
            'ER_NO_DEFAULT_FOR_FIELD: Field \'codeName\' doesn\'t have a default value'
          ].includes(err.message));
        });

      // SQLite does not impose any length restrictions on the length of strings.
      if (type !== 'sqlite' && type !== 'better-sqlite3') {
        permission.codeName = 'This is a very long long long long long long line.'
          + 'This is a very long long long long long long line.1';

        await getManager().save(permission)
          .then(() => fail('The promise should be rejected.'))
          .catch(err => {
            ok(err instanceof QueryFailedError);
            ok([
              'value too long for type character varying(100)',
              'ER_DATA_TOO_LONG: Data too long for column \'codeName\' at row 1'
            ].includes(err.message));
          });
      }

      permission.codeName = 'foo';
      await getManager().save(permission);

      const permission2 = new Permission();
      permission2.name = '';
      permission2.codeName = 'foo';
      await getManager().save(permission2)
        .then(() => fail('The promise should be rejected.'))
        .catch(err => {
          ok(err instanceof QueryFailedError);
          strictEqual(
            err.message === 'SQLITE_CONSTRAINT: UNIQUE constraint failed: permission.codeName' ||
            err.message === 'SqliteError: UNIQUE constraint failed: permission.codeName' ||
            err.message.startsWith('ER_DUP_ENTRY: Duplicate entry \'foo\' for key ') ||
            err.message.startsWith('duplicate key value violates unique constraint')
            , true);
        });
    });

  });

}

describe('UserWithPermissions', () => {

  testSuite('mysql');
  testSuite('mariadb');
  testSuite('sqlite');
  testSuite('better-sqlite3');
  testSuite('postgres');

});
