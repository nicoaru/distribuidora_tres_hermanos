import jsPDF from "jspdf";
import "jspdf-autotable";
import { createElement } from "react";
import imgAux from '../../img/iconos/cart-icon.png'
import { getDataUri, toDataURL } from './getImgDownloads'

export const createPDF = (list) => {

    // define date Obj
    const fecha = new Date();
    //create PDF Obj
    const doc = new jsPDF();
    // define an empty array of rows
    const tableRows = [];
    //Iterate array and create new array with correct data
    list.forEach(producto => {
        if (producto.__EMPTY_3 !== 'id') {
            const ticketData = [
                producto.__EMPTY_3,
                //imgTest, // space for image
                producto.__EMPTY_4,
                `$ ${producto.__EMPTY_7} / ${producto.__EMPTY_6}`,
                producto.__EMPTY_5,
                producto.__EMPTY_8,


            ];
            // push each tickcet's info into a row
            tableRows.push(ticketData);
        }
    })
    console.log(tableRows)
    doc.text(`Lista de precios ${fecha.getDate()}/${fecha.getMonth() + 1}`, 115, 10);
    //create tabel 
    doc.autoTable({
        styles: {},
        startY: 20, // top margin
        columnStyles: { 0: { valign: 'middle', halign: 'center' } }, // header styles
        bodyStyles: { cellPadding: { top: 4, bottom: 4 } },
        alternateRowStyles: {}, // we could modify alternate row
        head: [["ID", "Nombre", "Precio", "Categoria", "Descripcion"]], // define header
        body: tableRows, // array with content we want
    })


    // rest is to open new tab and show pdf to be downloaded
    let string = doc.output('datauristring');
    let embed = "<embed width='100%' height='100%' src='" + string + "'/>"
    let x = window.open();
    x.document.open();
    x.document.write(embed);
    x.document.close();

}

