//your JS code here. If required.
function enterMetaverse(){
	const element = document.getElementById("status");
	element.remove();
	const button = document.getElementById("enterBtn");
	const body = document.body;
	const newNode = document.createElement("h1");
	newNode.id="status";
	newNode.textContent = "Entered Metaverse";
	body.insertBefore(newNode, button)
	// alert("Entered")
	
}