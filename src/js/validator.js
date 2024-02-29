export class Validator {
  validateUsername(name) {
    const body = /([-_A-Za-z\d]+)/;
    const start = /^[^\d_-]/;
    const end = /[^\d_-]$/;
    const limitNumber = /\d{4,}/;

    return body.test(name) &&
      start.test(name) &&
      end.test(name) &&
      !limitNumber.test(name)
      ? true
      : false;
  }
}
