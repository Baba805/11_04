//1. Bir eded daxil olunur. Eger bu eded 7-ye bolunurse ekrana "7 ye bolunur" yazilsin. Eks halda daxil olunan edede en yaxin 7-ye bolunen eded ekranda yazilsin(Meselen: 17 yazilibsa ekrana  21 yox 14 cixsin, 19 yazilibsa 21 cixsin)


// const emeliyyat = function(eded){
//     if(eded %7 == 0){
//         console.log("eded 7e bolunur");
//     } else{
//         for(let i = eded-3 ; i<eded+4 ; i++){
//             if(i %7 == 0){
//                 console.log(i);
//             }
//         }
//     }
// }

// emeliyyat(7);

// function emeliyyat(eded){
//     if(eded %7 == 0){
//                 console.log("eded 7e bolunur");
//             } else{
//                 for(let i = eded-3 ; i<eded+4 ; i++){
//                     if(i %7 == 0){
//                         console.log(i);
//                     }
//                 }
//             }
// }

// emeliyyat(8);

emeliyyat = (eded) => {
    if (eded % 7 == 0) {
        console.log("eded 7e bolunur");
    } else {
        for (let i = eded - 3; i < eded + 4; i++) {
            if (i % 7 == 0) {
                console.log(i);
            }
        }
    }
}

emeliyyat(11);