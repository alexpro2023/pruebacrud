import { Selector } from 'testcafe';

fixture('Navegacion y Create')
    .page('https://pruebacrud.vercel.app/home');

test('Test Create', async t => {
    // Selecciona el enlace que contiene el texto "Crud_Menu"
    const link = Selector('a').withText('Crud_Menu');

    // Espera a que el enlace sea visible antes de hacer clic
    await t.expect(link.visible).ok('El enlace no está visible').click(link);

    // Selecciona el botón "Nuevo" dentro de Crud_Menu
    const nuevoButton = Selector('button.btn.btn-info').withText('Nuevo');

    // Espera a que el botón "Nuevo" sea visible antes de hacer clic
    await t.expect(nuevoButton.visible).ok('El botón "Nuevo" no está visible').click(nuevoButton);
    await t.wait(2000);

    // Ingresa datos en los campos
    await t.typeText('input[formcontrolname="nombre"]', 'Molletes');
    await t.typeText('input[formcontrolname="descripcion"]', 'Molletes de pollo con queso y base de frijoles');
    await t.typeText('input[formcontrolname="precio"]', '25');
    await t.typeText('input[formcontrolname="cantidad"]', '20');
    await t.typeText('input[formcontrolname="cantidad_min"]', '5');

    // Selecciona la opción 'Cocina' en el select
    await t
        .click('select[formcontrolname="categorias"]')
        .click(Selector('option').withText('Cocina'));

    // Configurar el manejador de diálogo nativo para aceptar automáticamente todas las alertas
    await t.setNativeDialogHandler(() => true);
    await t.wait(2000);

    // Hacer clic en el botón "Registrar"
    const registrarButton = Selector('button.btn.btn-success').withText('Registrar');
    await t.expect(registrarButton.visible).ok('El botón "Registrar" no está visible').click(registrarButton);
    await t.wait(10000);

    // Puedes agregar más aserciones o interacciones después del clic en "Registrar" si es necesario
}).skipJsErrors();
