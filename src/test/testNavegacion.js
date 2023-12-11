import { Selector } from 'testcafe';

fixture('Navegacion Home - CRUD')
.page('https://pruebacrud.vercel.app/home')
.beforeEach(async t => {
    await t.maximizeWindow();
});


test('Navegar a CRUD', async t => {
    const link = Selector('a').withText('Crud');
    await t.expect(link.visible).ok('El enlace no está visible').click(link);
    await t.wait(10000);
}).skipJsErrors();