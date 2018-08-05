// std
import { deepStrictEqual, ok, strictEqual } from 'assert';

// FoalTS
import {
  HttpResponse,
  HttpResponseBadRequest,
  HttpResponseClientError,
  HttpResponseConflict,
  HttpResponseCreated,
  HttpResponseForbidden,
  HttpResponseInternalServerError,
  HttpResponseMethodNotAllowed,
  HttpResponseNoContent,
  HttpResponseNotFound,
  HttpResponseNotImplemented,
  HttpResponseOK,
  HttpResponseRedirect,
  HttpResponseRedirection,
  HttpResponseServerError,
  HttpResponseSuccess,
  HttpResponseUnauthorized,
  isHttpResponse,
  isHttpResponseBadRequest,
  isHttpResponseClientError,
  isHttpResponseConflict,
  isHttpResponseCreated,
  isHttpResponseForbidden,
  isHttpResponseInternalServerError,
  isHttpResponseMethodNotAllowed,
  isHttpResponseNoContent,
  isHttpResponseNotFound,
  isHttpResponseNotImplemented,
  isHttpResponseOK,
  isHttpResponseRedirect,
  isHttpResponseRedirection,
  isHttpResponseServerError,
  isHttpResponseSuccess,
  isHttpResponseUnauthorized
} from './http-responses';

describe('HttpResponse', () => {

  it('should have a headers properties.', () => {
    class ConcreteClass extends HttpResponse {
      statusMessage = 'foo';
      statusCode = 0;
    }
    const response = new ConcreteClass();
    deepStrictEqual(response.headers, {});
  });

});

describe('isHttpResponse', () => {

  it('should return true if the given object is an instance of HttpResponse.', () => {
    const response = new HttpResponseCreated();
    strictEqual(isHttpResponse(response), true);
  });

  it('should return true if the given object has an isHttpResponse property equal to true.', () => {
    const response = { isHttpResponse: true };
    strictEqual(isHttpResponse(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponse and if it '
      + 'has no property isHttpResponse.', () => {
    const response = {};
    strictEqual(isHttpResponse(response), false);
    strictEqual(isHttpResponse(undefined), false);
    strictEqual(isHttpResponse(null), false);
  });

});

describe('isHttpResponseSuccess', () => {

  it('should return true if the given object is an instance of HttpResponseSuccess.', () => {
    const response = new HttpResponseCreated();
    strictEqual(isHttpResponseSuccess(response), true);
  });

  it('should return true if the given object has an isHttpResponseSuccess property equal to true.', () => {
    const response = { isHttpResponseSuccess: true };
    strictEqual(isHttpResponseSuccess(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseSuccess and if it '
      + 'has no property isHttpResponseSuccess.', () => {
    const response = {};
    strictEqual(isHttpResponseSuccess(response), false);
    strictEqual(isHttpResponseSuccess(undefined), false);
    strictEqual(isHttpResponseSuccess(null), false);
  });

});

describe('HttpResponseOK', () => {

  it('should inherit from HttpResponseSuccess and HttpResponse', () => {
    const httpResponse = new HttpResponseOK();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseSuccess);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseOK();
    strictEqual(httpResponse.statusCode, 200);
    strictEqual(httpResponse.statusMessage, 'OK');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseOK();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseOK(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseOK', () => {

  it('should return true if the given object is an instance of HttpResponseOK.', () => {
    const response = new HttpResponseOK();
    strictEqual(isHttpResponseOK(response), true);
  });

  it('should return true if the given object has an isHttpResponseOK property equal to true.', () => {
    const response = { isHttpResponseOK: true };
    strictEqual(isHttpResponseOK(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseOK and if it '
      + 'has no property isHttpResponseOK.', () => {
    const response = {};
    strictEqual(isHttpResponseOK(response), false);
    strictEqual(isHttpResponseOK(undefined), false);
    strictEqual(isHttpResponseOK(null), false);
  });

});

describe('HttpResponseCreated', () => {

  it('should inherit from HttpResponseSuccess and HttpResponse', () => {
    const httpResponse = new HttpResponseCreated();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseSuccess);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseCreated();
    strictEqual(httpResponse.statusCode, 201);
    strictEqual(httpResponse.statusMessage, 'CREATED');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseCreated();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseCreated(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseCreated', () => {

  it('should return true if the given object is an instance of HttpResponseCreated.', () => {
    const response = new HttpResponseCreated();
    strictEqual(isHttpResponseCreated(response), true);
  });

  it('should return true if the given object has an isHttpResponseCreated property equal to true.', () => {
    const response = { isHttpResponseCreated: true };
    strictEqual(isHttpResponseCreated(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseCreated and if it '
      + 'has no property isHttpResponseCreated.', () => {
    const response = {};
    strictEqual(isHttpResponseCreated(response), false);
    strictEqual(isHttpResponseCreated(undefined), false);
    strictEqual(isHttpResponseCreated(null), false);
  });

});

describe('HttpResponseNoContent', () => {

  it('should inherit from HttpResponseSuccess and HttpResponse', () => {
    const httpResponse = new HttpResponseNoContent();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseSuccess);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseNoContent();
    strictEqual(httpResponse.statusCode, 204);
    strictEqual(httpResponse.statusMessage, 'NO CONTENT');
  });

});

describe('isHttpResponseNoContent', () => {

  it('should return true if the given object is an instance of HttpResponseNoContent.', () => {
    const response = new HttpResponseNoContent();
    strictEqual(isHttpResponseNoContent(response), true);
  });

  it('should return true if the given object has an isHttpResponseNoContent property equal to true.', () => {
    const response = { isHttpResponseNoContent: true };
    strictEqual(isHttpResponseNoContent(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseNoContent and if it '
      + 'has no property isHttpResponseNoContent.', () => {
    const response = {};
    strictEqual(isHttpResponseNoContent(response), false);
    strictEqual(isHttpResponseNoContent(undefined), false);
    strictEqual(isHttpResponseNoContent(null), false);
  });

});

describe('isHttpResponseRedirection', () => {

  it('should return true if the given object is an instance of HttpResponseRedirection.', () => {
    const response = new HttpResponseRedirect('/foo');
    strictEqual(isHttpResponseRedirection(response), true);
  });

  it('should return true if the given object has an isHttpResponseRedirection property equal to true.', () => {
    const response = { isHttpResponseRedirection: true };
    strictEqual(isHttpResponseRedirection(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseRedirection and if it '
      + 'has no property isHttpResponseRedirection.', () => {
    const response = {};
    strictEqual(isHttpResponseRedirection(response), false);
    strictEqual(isHttpResponseRedirection(undefined), false);
    strictEqual(isHttpResponseRedirection(null), false);
  });

});

describe('HttpResponseRedirect', () => {

  it('should inherit from HttpResponseRedirection and HttpResponse', () => {
    const httpResponse = new HttpResponseRedirect('/foo');
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseRedirection);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseRedirect('/foo');
    strictEqual(httpResponse.statusCode, 302);
    strictEqual(httpResponse.statusMessage, 'FOUND');
  });

  it('should accept a mandatory path and an optional content.', () => {
    let httpResponse = new HttpResponseRedirect('/foo');
    strictEqual(httpResponse.path, '/foo');
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseRedirect('/foo', content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseRedirect', () => {

  it('should return true if the given object is an instance of HttpResponseRedirect.', () => {
    const response = new HttpResponseRedirect('/foo');
    strictEqual(isHttpResponseRedirect(response), true);
  });

  it('should return true if the given object has an isHttpResponseRedirect property equal to true.', () => {
    const response = { isHttpResponseRedirect: true };
    strictEqual(isHttpResponseRedirect(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseRedirect and if it '
      + 'has no property isHttpResponseRedirect.', () => {
    const response = {};
    strictEqual(isHttpResponseRedirect(response), false);
    strictEqual(isHttpResponseRedirect(undefined), false);
    strictEqual(isHttpResponseRedirect(null), false);
  });

});

describe('isHttpResponseClientError', () => {

  it('should return true if the given object is an instance of HttpResponseClientError.', () => {
    const response = new HttpResponseBadRequest();
    strictEqual(isHttpResponseClientError(response), true);
  });

  it('should return true if the given object has an isHttpResponseClientError property equal to true.', () => {
    const response = { isHttpResponseClientError: true };
    strictEqual(isHttpResponseClientError(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseClientError and if it '
      + 'has no property isHttpResponseClientError.', () => {
    const response = {};
    strictEqual(isHttpResponseClientError(response), false);
    strictEqual(isHttpResponseClientError(undefined), false);
    strictEqual(isHttpResponseClientError(null), false);
  });

});

describe('HttpResponseBadRequest', () => {

  it('should inherit from HttpResponseClientError and HttpResponse', () => {
    const httpResponse = new HttpResponseBadRequest();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseClientError);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseBadRequest();
    strictEqual(httpResponse.statusCode, 400);
    strictEqual(httpResponse.statusMessage, 'BAD REQUEST');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseBadRequest();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseBadRequest(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseBadRequest', () => {

  it('should return true if the given object is an instance of HttpResponseBadRequest.', () => {
    const response = new HttpResponseBadRequest();
    strictEqual(isHttpResponseBadRequest(response), true);
  });

  it('should return true if the given object has an isHttpResponseBadRequest property equal to true.', () => {
    const response = { isHttpResponseBadRequest: true };
    strictEqual(isHttpResponseBadRequest(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseBadRequest and if it '
      + 'has no property isHttpResponseBadRequest.', () => {
    const response = {};
    strictEqual(isHttpResponseBadRequest(response), false);
    strictEqual(isHttpResponseBadRequest(undefined), false);
    strictEqual(isHttpResponseBadRequest(null), false);
  });

});

describe('HttpResponseUnauthorized', () => {

  it('should inherit from HttpResponseClientError and HttpResponse', () => {
    const httpResponse = new HttpResponseUnauthorized();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseClientError);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseUnauthorized();
    strictEqual(httpResponse.statusCode, 401);
    strictEqual(httpResponse.statusMessage, 'UNAUTHORIZED');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseUnauthorized();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseUnauthorized(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseUnauthorized', () => {

  it('should return true if the given object is an instance of HttpResponseUnauthorized.', () => {
    const response = new HttpResponseUnauthorized();
    strictEqual(isHttpResponseUnauthorized(response), true);
  });

  it('should return true if the given object has an isHttpResponseUnauthorized property equal to true.', () => {
    const response = { isHttpResponseUnauthorized: true };
    strictEqual(isHttpResponseUnauthorized(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseUnauthorized and if it '
      + 'has no property isHttpResponseUnauthorized.', () => {
    const response = {};
    strictEqual(isHttpResponseUnauthorized(response), false);
    strictEqual(isHttpResponseUnauthorized(undefined), false);
    strictEqual(isHttpResponseUnauthorized(null), false);
  });

});

describe('HttpResponseForbidden', () => {

  it('should inherit from HttpResponseClientError and HttpResponse', () => {
    const httpResponse = new HttpResponseForbidden();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseClientError);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseForbidden();
    strictEqual(httpResponse.statusCode, 403);
    strictEqual(httpResponse.statusMessage, 'FORBIDDEN');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseForbidden();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseForbidden(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseForbidden', () => {

  it('should return true if the given object is an instance of HttpResponseForbidden.', () => {
    const response = new HttpResponseForbidden();
    strictEqual(isHttpResponseForbidden(response), true);
  });

  it('should return true if the given object has an isHttpResponseForbidden property equal to true.', () => {
    const response = { isHttpResponseForbidden: true };
    strictEqual(isHttpResponseForbidden(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseForbidden and if it '
      + 'has no property isHttpResponseForbidden.', () => {
    const response = {};
    strictEqual(isHttpResponseForbidden(response), false);
    strictEqual(isHttpResponseForbidden(undefined), false);
    strictEqual(isHttpResponseForbidden(null), false);
  });

});

describe('HttpResponseNotFound', () => {

  it('should inherit from HttpResponseClientError and HttpResponse', () => {
    const httpResponse = new HttpResponseNotFound();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseClientError);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseNotFound();
    strictEqual(httpResponse.statusCode, 404);
    strictEqual(httpResponse.statusMessage, 'NOT FOUND');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseNotFound();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseNotFound(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseNotFound', () => {

  it('should return true if the given object is an instance of HttpResponseNotFound.', () => {
    const response = new HttpResponseNotFound();
    strictEqual(isHttpResponseNotFound(response), true);
  });

  it('should return true if the given object has an isHttpResponseNotFound property equal to true.', () => {
    const response = { isHttpResponseNotFound: true };
    strictEqual(isHttpResponseNotFound(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseNotFound and if it '
      + 'has no property isHttpResponseNotFound.', () => {
    const response = {};
    strictEqual(isHttpResponseNotFound(response), false);
    strictEqual(isHttpResponseNotFound(undefined), false);
    strictEqual(isHttpResponseNotFound(null), false);
  });

});

describe('HttpResponseMethodNotAllowed', () => {

  it('should inherit from HttpResponseClientError and HttpResponse', () => {
    const httpResponse = new HttpResponseMethodNotAllowed();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseClientError);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseMethodNotAllowed();
    strictEqual(httpResponse.statusCode, 405);
    strictEqual(httpResponse.statusMessage, 'METHOD NOT ALLOWED');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseMethodNotAllowed();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseMethodNotAllowed(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseMethodNotAllowed', () => {

  it('should return true if the given object is an instance of HttpResponseMethodNotAllowed.', () => {
    const response = new HttpResponseMethodNotAllowed();
    strictEqual(isHttpResponseMethodNotAllowed(response), true);
  });

  it('should return true if the given object has an isHttpResponseMethodNotAllowed property equal to true.', () => {
    const response = { isHttpResponseMethodNotAllowed: true };
    strictEqual(isHttpResponseMethodNotAllowed(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseMethodNotAllowed and if it '
      + 'has no property isHttpResponseMethodNotAllowed.', () => {
    const response = {};
    strictEqual(isHttpResponseMethodNotAllowed(response), false);
    strictEqual(isHttpResponseMethodNotAllowed(undefined), false);
    strictEqual(isHttpResponseMethodNotAllowed(null), false);
  });

});

describe('HttpResponseConflict', () => {

  it('should inherit from HttpResponseClientError and HttpResponse', () => {
    const httpResponse = new HttpResponseConflict();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseClientError);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseConflict();
    strictEqual(httpResponse.statusCode, 409);
    strictEqual(httpResponse.statusMessage, 'CONFLICT');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseConflict();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseConflict(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseConflict', () => {

  it('should return true if the given object is an instance of HttpResponseConflict.', () => {
    const response = new HttpResponseConflict();
    strictEqual(isHttpResponseConflict(response), true);
  });

  it('should return true if the given object has an isHttpResponseConflict property equal to true.', () => {
    const response = { isHttpResponseConflict: true };
    strictEqual(isHttpResponseConflict(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseConflict and if it '
      + 'has no property isHttpResponseConflict.', () => {
    const response = {};
    strictEqual(isHttpResponseConflict(response), false);
    strictEqual(isHttpResponseConflict(undefined), false);
    strictEqual(isHttpResponseConflict(null), false);
  });

});

describe('isHttpResponseServerError', () => {

  it('should return true if the given object is an instance of HttpResponseServerError.', () => {
    const response = new HttpResponseInternalServerError();
    strictEqual(isHttpResponseServerError(response), true);
  });

  it('should return true if the given object has an isHttpResponseServerError property equal to true.', () => {
    const response = { isHttpResponseServerError: true };
    strictEqual(isHttpResponseServerError(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseServerError and if it '
      + 'has no property isHttpResponseServerError.', () => {
    const response = {};
    strictEqual(isHttpResponseServerError(response), false);
    strictEqual(isHttpResponseServerError(undefined), false);
    strictEqual(isHttpResponseServerError(null), false);
  });

});

describe('HttpResponseInternalServerError', () => {

  it('should inherit from HttpResponseServerError and HttpResponse', () => {
    const httpResponse = new HttpResponseInternalServerError();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseServerError);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseInternalServerError();
    strictEqual(httpResponse.statusCode, 500);
    strictEqual(httpResponse.statusMessage, 'INTERNAL SERVER ERROR');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseInternalServerError();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseInternalServerError(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseInternalServerError', () => {

  it('should return true if the given object is an instance of HttpResponseInternalServerError.', () => {
    const response = new HttpResponseInternalServerError();
    strictEqual(isHttpResponseInternalServerError(response), true);
  });

  it('should return true if the given object has an isHttpResponseInternalServerError property equal to true.', () => {
    const response = { isHttpResponseInternalServerError: true };
    strictEqual(isHttpResponseInternalServerError(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseInternalServerError and if it '
      + 'has no property isHttpResponseInternalServerError.', () => {
    const response = {};
    strictEqual(isHttpResponseInternalServerError(response), false);
    strictEqual(isHttpResponseInternalServerError(undefined), false);
    strictEqual(isHttpResponseInternalServerError(null), false);
  });

});

describe('HttpResponseNotImplemented', () => {

  it('should inherit from HttpResponseServerError and HttpResponse', () => {
    const httpResponse = new HttpResponseNotImplemented();
    ok(httpResponse instanceof HttpResponse);
    ok(httpResponse instanceof HttpResponseServerError);
  });

  it('should have the correct status.', () => {
    const httpResponse = new HttpResponseNotImplemented();
    strictEqual(httpResponse.statusCode, 501);
    strictEqual(httpResponse.statusMessage, 'NOT IMPLEMENTED');
  });

  it('should accept an optional content.', () => {
    let httpResponse = new HttpResponseNotImplemented();
    strictEqual(httpResponse.content, undefined);

    const content = { foo: 'bar' };
    httpResponse = new HttpResponseNotImplemented(content);
    strictEqual(httpResponse.content, content);
  });

});

describe('isHttpResponseNotImplemented', () => {

  it('should return true if the given object is an instance of HttpResponseNotImplemented.', () => {
    const response = new HttpResponseNotImplemented();
    strictEqual(isHttpResponseNotImplemented(response), true);
  });

  it('should return true if the given object has an isHttpResponseNotImplemented property equal to true.', () => {
    const response = { isHttpResponseNotImplemented: true };
    strictEqual(isHttpResponseNotImplemented(response), true);
  });

  it('should return false if the given object is not an instance of HttpResponseNotImplemented and if it '
      + 'has no property isHttpResponseNotImplemented.', () => {
    const response = {};
    strictEqual(isHttpResponseNotImplemented(response), false);
    strictEqual(isHttpResponseNotImplemented(undefined), false);
    strictEqual(isHttpResponseNotImplemented(null), false);
  });

});
