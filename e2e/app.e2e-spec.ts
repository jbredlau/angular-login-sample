import { AngularLoginSampleExercisePage } from './app.po';

describe('angular-login-sample-exercise App', () => {
  let page: AngularLoginSampleExercisePage;

  beforeEach(() => {
    page = new AngularLoginSampleExercisePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to s(a|i)mple LoginApp'))
      .then(done, done.fail);
  });
});
