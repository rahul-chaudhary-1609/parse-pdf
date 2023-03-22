import fs from "fs";
import PDFParser from "pdf2json";

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./output_check.json", JSON.stringify(pdfData),(readErr)=>{
        if(!readErr){
            console.log("PDF parsing done.")
        }
    });
});

pdfParser.loadPDF("./input_check.pdf");
