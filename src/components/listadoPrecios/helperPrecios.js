import jsPDF from "jspdf";
import "jspdf-autotable";

export const createPDF = (list, imagenes) => {
    // define date Obj
    const fecha = new Date();
    //create PDF Obj
    const doc = new jsPDF();
    // define an empty array of rows
    const tableRows = [];
    //Iterate array and create new array with correct data
    list.forEach(producto => {
        const ticketData = [
            producto.id,
            "", // space for image
            producto.nombre,
            producto.precio,
            producto.descripcion,

        ];
        // push each tickcet's info into a row
        tableRows.push(ticketData);
    })
    //create tabel 
    doc.autoTable({
        styles: {},
        startY: 20, // top margin
        columnStyles: { 0: { valign: 'middle', halign: 'center' } }, // header styles
        bodyStyles: { cellPadding: { top: 8, bottom: 8 } },
        alternateRowStyles: {}, // we could modify alternate row
        head: [["ID", "Imagen", "Nombre", "Precio", "Descripcion"]], // define header
        body: tableRows, // array with content we want
        didDrawCell: (data) => { // adding images on every row on column indexes we want
            if (data.section === 'body' && data.column.index === 1) {
                doc.addImage(imagenes[data.row.index], 'JPEG', data.cell.x + 1, data.cell.y + 3, 15, 15)
            }
        }
    })
    //document Title
    doc.text(`Lista de precios ${fecha.getDate()}/${fecha.getMonth() + 1}`, 14, 15);
    // rest is to open new tab and show pdf to be downloaded
    let string = doc.output('datauristring');
    let embed = "<embed width='100%' height='100%' src='" + string + "'/>"
    let x = window.open();
    x.document.open();
    x.document.write(embed);
    x.document.close();

    //doc.save(`Lista de Precios ${fecha.getDate()}-${fecha.getMonth() + 1}.pdf`);
}

