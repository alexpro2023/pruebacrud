import { Selector } from 'testcafe';

fixture('Navegacion y Edicion')
    .page('https://pruebacrud.vercel.app/home')
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Test Edit', async t => {
    // Hacer clic en el enlace "Crud_Menu"
    const link = Selector('a').withText('Crud_Menu');
    await t.expect(link.visible).ok('El enlace no está visible').click(link);
    await t.wait(2000);

    // Hacer clic en el botón "Listar"
    const listarButton = Selector('button.btn.btn-info').withText('Listar');
    await t.expect(listarButton.visible).ok('El botón "Listar" no está visible').click(listarButton);
    await t.wait(2000);

    // Hacer clic en el botón "Editar"
    const editarButton = Selector('button.btn.btn-warning').withText('Editar');
    await t.expect(editarButton.visible).ok('El botón "Editar" no está visible').click(editarButton);
    
    // Sobrescribir el contenido del input con 'taco de pollo'
    const inputDescripcion = Selector('input[formcontrolname="descripcion"]');
    await t.expect(inputDescripcion.visible).ok('El input de descripción no está visible').typeText(inputDescripcion, 'taco de pollo', { replace: true });

    // Hacer clic en el botón "Actualizar"
    const actualizarButton = Selector('button.btn.btn-success').withText('Actualizar');

    // Configurar el manejador de diálogo nativo para aceptar automáticamente todas las alertas
    await t.setNativeDialogHandler(() => true);

    await t.expect(actualizarButton.visible).ok('El botón "Actualizar" no está visible').click(actualizarButton);

    // Puedes agregar más aserciones o interacciones después de hacer clic en "Actualizar" si es necesario
}).skipJsErrors();
