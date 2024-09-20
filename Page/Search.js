exports.SearchPage = class SearchPage {

    constructor(page) {

        this.page = page
        this.search_button = page.locator(".x9f619 ").getByRole('link',{name:'Search'})

        // this.userid = page.
        this.search_field = page.getByLabel('Search input')
        this.search_name = page.getByText('kahanhaimihir')


        // this.login_button = page.locator('button._acan._acap._acas._aj1-._ap30'); 
    }

    async Search(search_name){
        await this.search_button.click();
        await this.search_field.pressSequentially(search_name,{delay: 100});
        await this.search_name.click();
    }

}
