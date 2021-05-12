export class MockStore {
  select = jasmine.createSpy('select');
  dispatch = jasmine.createSpy('dispatch');
}
