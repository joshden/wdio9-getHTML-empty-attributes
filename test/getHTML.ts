const html = 
`<main>
    <input type="checkbox" checked>
    <div data-some1thing2else=""></div>
    <div data-one-two-three=""></div>
    <div data-name="value"></div>
</main>`

describe("getHTML with empty attributes", () => {
    it("gets the correct attribute values", async () => {
        await browser.execute(html => document.body.insertAdjacentHTML('beforeend', html), html)

        console.log()
        console.log('getHTML:')
        console.log(await $('main').getHTML())

        console.log()
        console.log('outerHTML:')
        console.log(await browser.execute(() => document.querySelector('main')?.outerHTML))
    })
})