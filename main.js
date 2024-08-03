// Following line got basic text content of website
const textToSerach = "ak-47 muslim allahuAkbar boombastic going to moon";
// Following line made it user to write down the text to search(search engine)
const targetString =  prompt("Search:");
//ifs and elses of if following searched phrase is availabe or not and how to respond to it
if(textToSerach.includes(targetString)){
    console.log(`${targetString} Founded!`);
} else {
    console.log(`${targetString} Not Found 404 error!`) ;
}
