
function copytoboard(elementId){
    const text =document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(()=>{
        const toast = document.getElementById("toast");

        toast.classList.add("show");

        setTimeout(()=>{
            toast.classList.remove("show");
        }, 2500);
    }).catch(err=>{
        console.error("Failed to copy ", err);
    })
}
