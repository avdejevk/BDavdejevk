// Fakturu generavimas
function generateInvoice() {
    // reiksmes
    const creationDate = "Parent group's U�sakymas's Creation Date";
    const orderCreator = "Parent group's U�sakymas's Creator's name Parent group's U�sakymas's Creator's surname";
    const orderStartDate = "Parent group's U�sakymas's U�sakymoPrad�ia";
    const orderEndDate = "Parent group's U�sakymas's U�sakymoPabaiga";
    const orderExecuter = "Parent group's U�sakymas's Atlikejas's name Parent group's U�sakymas's Atlikejas's surname";
    const orderPrice = "Parent group's U�sakymas's Kaina";

    // paslaugu reiksmes
    const services = [
        { name: "Parent group's U�sakymas's Paslaugos:each item's paslaugosPav" },
    ];

    // automobilio reiksme
    const carNumberPlates = ["Parent group's U�sakymas's Automobilis's ValstybinisNr"];
    const carModels = ["Parent group's U�sakymas's Automobilis's Mark?"];
    const carMarks = ["Parent group's U�sakymas's Automobilis's Modelis"];
    const carAges = ["Parent group's U�sakymas's Automobilis's GamybosMetai"];

    // sukuria nauja pdf 
    const doc = new jsPDF();

    // nustatomas stilius, rastas
    doc.setFontSize(12);
    doc.setFontStyle("normal");
    doc.setFont("helvetica");

    // pridedamos fakturos duomenys
    doc.text("Invoice", 20, 20);
    doc.text(`Sukurta: ${creationDate}`, 20, 30);

    doc.text(`U�sakymo savininkas: ${orderCreator}`, 20, 50);
    doc.text(`U�sakymo prad�ia: ${orderStartDate}`, 20, 60);
    doc.text(`U�sakymo pabeiga: ${orderEndDate}`, 20, 70);
    doc.text(`U�sakyma atliko: ${orderExecuter}`, 20, 80);
    doc.text(`U�sakymo kaina: $${orderPrice}`, 20, 90);

    // pridedama paslaugu lentele
    doc.setFontStyle("bold");
    doc.text("Paslaugos", 20, 110);
    doc.setFontStyle("normal");

    // lenteles antraste
    doc.setLineWidth(0.5);
    doc.line(20, 115, 180, 115);
    doc.text("Service Name", 30, 120);
    doc.line(20, 125, 180, 125);

    // lenteles linijos
    let yPos = 130;
    services.forEach((service) => {
        const serviceLines = service.name.split(",");
        serviceLines.forEach((line) => {
            doc.text(line.trim(), 30, yPos);
            yPos += 10;
        });
    });

    // prideti automobilio informacija
    doc.setFontStyle("bold");
    doc.text("Cars", 20, yPos + 10);
    doc.setFontStyle("normal");

    // automobilio lentes antraste
    doc.setLineWidth(0.5);
    doc.line(20, yPos + 15, 180, yPos + 15);
    doc.text("Number Plate", 30, yPos + 20);
    doc.text("Model", 70, yPos + 20);
    doc.text("Mark", 110, yPos + 20);
    doc.text("Age", 150, yPos + 20);
    doc.line(20, yPos + 25, 180, yPos + 25);

    // lenteles linijos
    yPos += 30;
    carNumberPlates.forEach((plate, index) => {
        doc.text(plate, 30, yPos);
        doc.text(carModels[index], 70, yPos);
        doc.text(carMarks[index], 110, yPos);
        doc.text(carAges[index].toString(), 150, yPos);
        yPos += 10;
    });

    //isaugojimas pdf files
    doc.save("invoice.pdf");
}

// kvieciama generavimo funkcija
generateInvoice();