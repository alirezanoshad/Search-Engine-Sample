const textToSerach = "ak-47 muslim allahuAkbar boombastic going to moon";
const targetString =  prompt("Search:");

if(textToSerach.includes(targetString)){
    console.log(`${targetString} Founded!`);
} else {
    console.log(`${targetString} Not Found 404 error!`) ;
}
