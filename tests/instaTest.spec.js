import { test } from '@playwright/test';
import {LoginPage} from '../Page/Login.js';
import {SearchPage} from '../Page/Search.js';
import { MassagePage } from '../Page/massage.js';

test('test', async ({ page }) => {

  const  Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('studds991', 'Ks@1234560' )

  const search = new SearchPage(page)
  await search.Search('innocent_abhi_0215');

  const massage = new MassagePage(page)
  await massage.Massage('Hello Sir is it ok...??');

});