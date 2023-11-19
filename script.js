// //your JS code here. If required.
// function enterMetaverse(){
// 	const element = document.getElementById("status");
// 	// element.remove();
// 	const button = document.getElementById("enterBtn");
// 	// const body = document.body;
// 	const newNode = document.createElement("h1");
// 	// newNode.id="status";
// 	newNode.textContent = "Entered Metaverse";
// 	element.innerText="";
// 	// element.innerHtml=newNode
// 	element.insertBefore(newNode)
// 	// alert("Entered")
	
// }



function enterMetaverse() {
           
            let statusParagraph = document.getElementById("status");

           
            if (statusParagraph.textContent === "Enter the Metaverse") {
               
                statusParagraph.textContent = "Entered Metaverse";

               
                let h1Tag = document.createElement("h1");
				h1Tag.id = "status"

                
                h1Tag.textContent = "Entered Metaverse";

               
                statusParagraph.parentNode.replaceChild(h1Tag, statusParagraph);
            } else {
               
                alert("Already entered the Metaverse!");
            }
        }