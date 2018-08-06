// std
import { strictEqual } from 'assert';

// 3p
import 'reflect-metadata';

// FoalTS
import { Delete, Get, Patch, Post, Put } from './http-methods';

describe('Get', () => {

  it('should define the metadata httpMethod="GET" on the method class.', () => {
    class Foobar {
      @Get()
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('httpMethod', Foobar.prototype, 'barfoo');
    strictEqual(actual, 'GET');
  });

  it('should define the metadata path=${path} on the method class.', () => {
    class Foobar {
      @Get('/foo')
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('path', Foobar.prototype, 'barfoo');
    strictEqual(actual, '/foo');
  });

});

describe('Post', () => {

  it('should define the metadata httpMethod="POST" on the method class.', () => {
    class Foobar {
      @Post()
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('httpMethod', Foobar.prototype, 'barfoo');
    strictEqual(actual, 'POST');
  });

  it('should define the metadata path=${path} on the method class.', () => {
    class Foobar {
      @Post('/foo')
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('path', Foobar.prototype, 'barfoo');
    strictEqual(actual, '/foo');
  });

});

describe('Put', () => {

  it('should define the metadata httpMethod="PUT" on the method class.', () => {
    class Foobar {
      @Put()
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('httpMethod', Foobar.prototype, 'barfoo');
    strictEqual(actual, 'PUT');
  });

  it('should define the metadata path=${path} on the method class.', () => {
    class Foobar {
      @Put('/foo')
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('path', Foobar.prototype, 'barfoo');
    strictEqual(actual, '/foo');
  });

});

describe('Patch', () => {

  it('should define the metadata httpMethod="PATCH" on the method class.', () => {
    class Foobar {
      @Patch()
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('httpMethod', Foobar.prototype, 'barfoo');
    strictEqual(actual, 'PATCH');
  });

  it('should define the metadata path=${path} on the method class.', () => {
    class Foobar {
      @Patch('/foo')
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('path', Foobar.prototype, 'barfoo');
    strictEqual(actual, '/foo');
  });

});

describe('Delete', () => {

  it('should define the metadata httpMethod="DELETE" on the method class.', () => {
    class Foobar {
      @Delete()
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('httpMethod', Foobar.prototype, 'barfoo');
    strictEqual(actual, 'DELETE');
  });

  it('should define the metadata path=${path} on the method class.', () => {
    class Foobar {
      @Delete('/foo')
      barfoo() {}
    }

    const actual = Reflect.getOwnMetadata('path', Foobar.prototype, 'barfoo');
    strictEqual(actual, '/foo');
  });

});
