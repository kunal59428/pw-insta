import { test } from '@playwright/test';
import {LoginPage} from '../Page/Login.js';
import {SearchPage} from '../Page/Search.js';
import { MassagePage } from '../Page/massage.js';

test('test', async ({ page }) => {

  const  Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('befamousgaming@gmail.com', 'Deadshot@123' )

  const search = new SearchPage(page)
  await search.Search('kahanhaimihir');

  const massage = new MassagePage(page)
  await massage.Massage('Hello mihir is it ok Bro...??');

});