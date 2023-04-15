
import Product from "./product"

const form = document.getElementById('form')

form?.addEventListener("submit", (e) => {
    e.preventDefault()

    // const test: HTMLElementTagNameMap 

    const name: string = (<HTMLInputElement>document.getElementById('name')).value
    const amount: number = +(<HTMLInputElement>document.getElementById('amount')).value


    const product = new Product(name, amount)

    console.log(product)

    const table = document.getElementById('table')

    table?.insertAdjacentHTML("beforeend", `
    <tr>
        <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.amount}</td>
    </tr>
    `)

    // console.log('yuborildi')
})







