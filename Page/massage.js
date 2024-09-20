exports.MassagePage = class MassagePage {

    constructor(page) {

        this.page = page
        // this.massage_button = page.locator(".x1n2onr6").getByRole('button',{name:'Message'})
        // this.massage_box = page.locator(".x6s0dn4").getByPlaceholder('Message...');
        // this.massage_send = page.locator(".x6s0dn4").getByRole('button',{name:'Send'})

        this.massage_button = page.locator("._aagv")
        this.massage_box = page.locator(".x5ur3kl").getByPlaceholder('Add a comment…');
        this.massage_send = page.locator(".x1i64zmx").getByRole('button',{name:'Post'})

        // this.userid = page.
        // this.search_field = page.getByLabel('Search input')
        // this.search_name = page.getByText('kunal_sharma592')


    }

    async Massage(Msg){
        await this.massage_button.first().click();
        await this.massage_box.pressSequentially(Msg,{delay: 100});
        await this.massage_send.click();
    }

}
