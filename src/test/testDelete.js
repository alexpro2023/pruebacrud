import { Selector } from 'testcafe';

fixture('Navegacion y Eliminacion')
    .page('https://pruebacrud.vercel.app/home')
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Test Delete', async t => {
    // Hacer clic en el enlace "Crud_Menu"
    const link = Selector('a').withText('Crud_Menu');
    await t.expect(link.visible).ok('El enlace no está visible').click(link);
    await t.wait(2000);

    // Hacer clic en el botón "Listar"
    const listarButton = Selector('button.btn.btn-info').withText('Listar');
    await t.expect(listarButton.visible).ok('El botón "Listar" no está visible').click(listarButton);
    await t.wait(2000);

    // Configurar el manejador de diálogo nativo para aceptar automáticamente todas las alertas
    await t.setNativeDialogHandler(() => true);

    // Hacer clic en el botón "Delete"
    const deleteButton = Selector('button.btn.btn-danger').withText('Delete');
    await t.expect(deleteButton.visible).ok('El botón "Delete" no está visible').click(deleteButton);

    // Puedes agregar más aserciones o interacciones después de hacer clic en "Delete" si es necesario
}).skipJsErrors();
