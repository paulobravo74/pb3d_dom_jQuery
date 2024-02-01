$(document).ready(function() {


    let portfolio = [
        {
            id: 0,
            architect: "SM Architecture",
            local: "Fernão Ferro - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["../img/SM_FF/01_exterior.jpg", "../img/SM_FF/02_exterior.jpg", "../img/SM_FF/03_exterior.jpg", "../img/SM_FF/04_exterior.jpg", "../img/SM_FF/05_exterior.jpg", "../img/SM_FF/06_exterior.jpg"]
           
        },
        {
            id: 1,
            architect: "RA Architecture",
            local: "Azeitão - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["img/ra_az/ra_az_01.jpg", "img/ra_az/ra_az_02.jpg", "../img/RA_Az/RA_Az_03.jpg", "../img/RA_Az/RA_Az_04.jpg", "../img/RA_Az/RA_Az_05.jpg", "../img/RA_Az/RA_Az_06.jpg"]
        },
        {
            id: 2,
            architect: "SM Architecture",
            local: "Cruz de Pau - Portugal",
            software: "3D Studio Max - Vray - Photoshop",
            images: ["../img/SM_CruzPau/SM_CruzPau_01.jpg", "../img/SM_CruzPau/SM_CruzPau_02.jpg", "../img/SM_CruzPau/SM_CruzPau_03.jpg", "../img/SM_CruzPau/SM_CruzPau_04.jpg", "../img/SM_CruzPau/SM_CruzPau_05.jpg", "../img/SM_CruzPau/SM_CruzPau_06.jpg"]
        },
        {
            id: 3,
            architect: "RA Architecture",
            local: "Amadora - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["../img/CrisAmadora/CrisAmad_01_Coz_01.jpg", "../img/CrisAmadora/CrisAmad_01_Coz_02.jpg", "../img/CrisAmadora/CrisAmad_02_Quarto_01.jpg", "../img/CrisAmadora/CrisAmad_02_Quarto_02.jpg", "../img/CrisAmadora/CrisAmad_02_Quarto_03.jpg", "../img/CrisAmadora/CrisAmad_03_Sala_01.jpg", "../img/CrisAmadora/CrisAmad_03_Sala_02.jpg", "../img/CrisAmadora/CrisAmad_03_Sala_03.jpg", "../img/CrisAmadora/CrisAmad_04_WC_01.jpg", "../img/CrisAmadora/CrisAmad_04_WC_02.jpg"]
        },
        {
            id: 4,
            architect: "PA Architecture",
            local: "Charneca - Portugal",
            software: "3D Studio Max - Vray - Photoshop",
            images: ["../img/PA_Mesquita/PA_Mesq_01.jpg", "../img/PA_Mesquita/PA_Mesq_02.jpg", "../img/PA_Mesquita/PA_Mesq_03.jpg", "../img/PA_Mesquita/PA_Mesq_04.jpg", "../img/PA_Mesquita/PA_Mesq_05.jpg", "../img/PA_Mesquita/PA_Mesq_06.jpg", "../img/PA_Mesquita/PA_Mesq_07.jpg"]
        },
        {
            id: 5,
            architect: "SM Architecture",
            local: "Aroeira - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["../img/SM_Cantarelo/SM_Cant_01_Noite_01.jpg", "../img/SM_Cantarelo/SM_Cant_01_Noite_02.jpg", "../img/SM_Cantarelo/SM_Cant_02_Dia_01.jpg", "../img/SM_Cantarelo/SM_Cant_02_Dia_02.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_01.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_02.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_03.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_04.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_05.jpg"]
        }
    ];


    




    let text_array = [2, 3, 5];


    let text = $("#teste");

    let text_number = 1;

    text_array.forEach(function(x) {

        let text_print;
        if (x % 2 !== 0 ) {

            text_print = "<p>The number " + x + " is a odd number.</p>"
        
        } else {
            text_print = "<p>The number " + x + " is an even number.</p>"
        }
        
        $(text_print).appendTo(text);
    })

    let new_text = document.createElement("h3");
    new_text.className = "bg_green"
    new_text.innerHTML = "New Text";
    $(new_text).appendTo(text);

    
    let image_test = $("#teste01");

    let image_test_input = '<img src="' + portfolio[1].images[1] + '" alt="" />'
    $(image_test_input).appendTo(image_test);
    console.log(image_test_input);
    console.log(portfolio[1].images[1])
}); 