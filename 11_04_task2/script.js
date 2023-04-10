//2. 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.
var sum3 = 0;
var sum5 = 0;
var sum8 = 0;
// const emeliyyat = function (eded) {
//     for (let i = 0; i < eded; i++) {
//         if (eded < 50) {
//             if (i % 3 == 0) {
//                 sum3++;

//             }

//         } else if (eded >= 50 && eded < 100) {
//             if (i % 5 == 0) {
//                 sum5++;
//             }
//         }
//         else if (eded >= 100) {
//             if (i % 8 == 0) {
//                 sum8++;
//             }
//         }


//     }

//     console.log("3e bolunen ededlerin sayi : " + sum3);
//     console.log("5e bolunen ededlerin sayi : " + sum5);
//     console.log("8e bolunen ededlerin sayi : " + sum8);
// }


// function emeliyyat(eded){
//     for (let i = 0; i < eded; i++) {
//         if (eded < 50) {
//             if (i % 3 == 0) {
//                 sum3++;

//             }

//         } else if (eded >= 50 && eded < 100) {
//             if (i % 5 == 0) {
//                 sum5++;
//             }
//         }
//         else if (eded >= 100) {
//             if (i % 8 == 0) {
//                 sum8++;
//             }
//         }


//     }

//     console.log("3e bolunen ededlerin sayi : " + sum3);
//     console.log("5e bolunen ededlerin sayi : " + sum5);
//     console.log("8e bolunen ededlerin sayi : " + sum8);
// }


emeliyyat = (eded) =>{
    for (let i = 0; i < eded; i++) {
        if (eded < 50) {
            if (i % 3 == 0) {
                sum3++;

            }

        } else if (eded >= 50 && eded < 100) {
            if (i % 5 == 0) {
                sum5++;
            }
        }
        else if (eded >= 100) {
            if (i % 8 == 0) {
                sum8++;
            }
        }


    }

    console.log("3e bolunen ededlerin sayi : " + sum3);
    console.log("5e bolunen ededlerin sayi : " + sum5);
    console.log("8e bolunen ededlerin sayi : " + sum8);
}

emeliyyat(55);