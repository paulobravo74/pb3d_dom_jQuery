$(document).ready(function() {


    let portfolio = [
        {
            id: 0,
            architect: "SM Architecture",
            local: "Fernão Ferro - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["./img/SM_FF/01_exterior.jpg", "./img/SM_FF/02_exterior.jpg", "./img/SM_FF/03_exterior.jpg", "./img/SM_FF/04_exterior.jpg", "./img/SM_FF/05_exterior.jpg", "./img/SM_FF/06_exterior.jpg"]
           
        },
        {
            id: 1,
            architect: "RA Architecture",
            local: "Azeitão - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["./img/RA_Az/RA_Az_01.jpg", "./img/RA_Az/RA_Az_02.jpg", "./img/RA_Az/RA_Az_03.jpg", "./img/RA_Az/RA_Az_04.jpg", "./img/RA_Az/RA_Az_05.jpg", "./img/RA_Az/RA_Az_06.jpg"]
        },
        {
            id: 2,
            architect: "SM Architecture",
            local: "Cruz de Pau - Portugal",
            software: "3D Studio Max - Vray - Photoshop",
            images: ["./img/SM_CruzPau/SM_CruzPau_01.jpg", "./img/SM_CruzPau/SM_CruzPau_02.jpg", "./img/SM_CruzPau/SM_CruzPau_03.jpg", "./img/SM_CruzPau/SM_CruzPau_04.jpg", "./img/SM_CruzPau/SM_CruzPau_05.jpg", "./img/SM_CruzPau/SM_CruzPau_06.jpg"]
        },
        {
            id: 3,
            architect: "RA Architecture",
            local: "Amadora - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["./img/CrisAmadora/CrisAmad_01_Coz_01.jpg", "./img/CrisAmadora/CrisAmad_01_Coz_02.jpg", "./img/CrisAmadora/CrisAmad_02_Quarto_01.jpg", "./img/CrisAmadora/CrisAmad_02_Quarto_02.jpg", "./img/CrisAmadora/CrisAmad_02_Quarto_03.jpg", "./img/CrisAmadora/CrisAmad_03_Sala_01.jpg", "./img/CrisAmadora/CrisAmad_03_Sala_02.jpg", "./img/CrisAmadora/CrisAmad_03_Sala_03.jpg", "./img/CrisAmadora/CrisAmad_04_WC_01.jpg", "./img/CrisAmadora/CrisAmad_04_WC_02.jpg"]
        },
        {
            id: 4,
            architect: "PA Architecture",
            local: "Charneca - Portugal",
            software: "3D Studio Max - Vray - Photoshop",
            images: ["./img/PA_Mesquita/PA_Mesq_01.jpg", "./img/PA_Mesquita/PA_Mesq_02.jpg", "./img/PA_Mesquita/PA_Mesq_03.jpg", "./img/PA_Mesquita/PA_Mesq_04.jpg", "./img/PA_Mesquita/PA_Mesq_05.jpg", "./img/PA_Mesquita/PA_Mesq_06.jpg", "./img/PA_Mesquita/PA_Mesq_07.jpg"]
        },
        {
            id: 5,
            architect: "SM Architecture",
            local: "Aroeira - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["./img/SM_Cantarelo/SM_Cant_01_Noite_01.jpg", "./img/SM_Cantarelo/SM_Cant_01_Noite_02.jpg", "./img/SM_Cantarelo/SM_Cant_02_Dia_01.jpg", "./img/SM_Cantarelo/SM_Cant_02_Dia_02.jpg", "./img/SM_Cantarelo/SM_Cant_03_Sala_01.jpg", "./img/SM_Cantarelo/SM_Cant_03_Sala_02.jpg", "./img/SM_Cantarelo/SM_Cant_03_Sala_03.jpg", "./img/SM_Cantarelo/SM_Cant_03_Sala_04.jpg", "./img/SM_Cantarelo/SM_Cant_03_Sala_05.jpg"]
        }
    ];


    
    //---------------------------------------------------//
    //-------------------- Slides -----------------------//
    //---------------------------------------------------//

    
    let album_slider_random_array = [];
    let album_slider_image_random_array = [];
    let number_Of_Slides = portfolio.length;
    
    
    
    // --------- Selection albuns ---------------
    for (let i = 0; i < number_Of_Slides; i++) {
        
        const album_slider_random = Math.floor(Math.random() * portfolio.length);
        
        album_slider_random_array.push(album_slider_random);
        
        album_slider_image_random_array.push(Math.floor(Math.random() * portfolio[album_slider_random_array[i]].images.length))
        
        console.log("album- " + album_slider_random_array);
        console.log("imagem- " + album_slider_image_random_array);
        
    }
    


    let album_repeat = album_slider_random_array;
    let repeat = false

    for (let i = 0; i < album_repeat.length; i++) {

        let count_repeat = 0;

        console.log(album_repeat[i]);


        for (let j = 0; j < album_slider_random_array.length; j++) {
            
            console.log(album_slider_random_array[j]);
            
            if (album_repeat[i] === album_slider_random_array[j]) {
                count_repeat++;
                //console.log("Repetition - " + count_repeat);
            }
            
        }
        
        
        count_repeat > 1 ? repeat=true : repeat=false;
        console.log(repeat); 
            
    }


    let slider_img_Select = 0;

    
    let Slider_input_Img = function() {
        
        let slider_link_arch = portfolio[album_slider_random_array[slider_img_Select]].architect;
        let slider_link_local = portfolio[album_slider_random_array[slider_img_Select]].local;
        let slider_link_image = portfolio[album_slider_random_array[slider_img_Select]].images[album_slider_image_random_array[slider_img_Select]];


        // ----------------- Images -----------------------
        let slider_images = $("#slider_Images");
        $(slider_images).empty();
        let slider_image_input = '<img class="slider_img" src="' + slider_link_image + '" alt=""></img>';
        $(slider_image_input).appendTo(slider_images);


        // ------------------ Text -----------------------
        let slider_Text = $("#slider_text_ID");
        $(slider_Text).empty();
        let slider_arch_input = '<h3 class="slider_text">' + slider_link_arch + '<br>' +
                                slider_link_local + '</h3>'; 
        $(slider_arch_input).appendTo(slider_Text);
        



        if (slider_img_Select < album_slider_random_array.length - 1) {
            slider_img_Select++
        } else {
            slider_img_Select = 0
        }

        console.log(slider_img_Select);


        setTimeout(Slider_input_Img, 3000);
    }

    Slider_input_Img();


/*
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
    

    let image_test_input = '<img src="' + portfolio[1].images[0] + '" alt="" />';
    $(image_test).className = "image";
    $(image_test_input).appendTo(image_test);
    console.log(image_test_input);
    console.log(portfolio[1].images[0])

*/


}); 