
function validateBookName(book_name){
    return book_name in localStorage? true:false
}

function addToLibrary(){
    let book_name=b_name.value;
    let author_name=a_name.value;
    let amount=price.value;

    let book={
        book_name,author_name,amount
    }



    if(validateBookName(book_name)){
        swal("Failed!","Book Exist","error");

    }

    else{
    localStorage.setItem(book_name,JSON.stringify(book))
    swal("Created!","Book Added","success");
    }
}
function findBook(){
    let book_name=bk_search.value
    if(validateBookName(book_name)){
        let data=JSON.parse(localStorage.getItem(book_name))
        console.log(data);

    }
    else{
        console.log("No Data Found");
    }
}