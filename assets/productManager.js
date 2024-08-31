const kCameraCameraNoNoIRPrice = "$100";
const kCameraCameraNoIRPrice = "$110";
const kStoreStorage256gbPrice = "kStore 256GB Coming Soon!";
const kStoreStorage512gbPrice = "kStore 512GB Coming Soon!";
const kCameraCameraNoNoIRObject = document.getElementById("kCameraCameraNoNoIR");
const kCameraCameraNoIRObject = document.getElementById("kCameraCameraNoIR");
const kStoreStorage256gbObject = document.getElementById("kStoreStorage256gb");
const kStoreStorage512gbObject = document.getElementById("kStoreStorage512gb");
const configPrice = document.getElementById("configPrice");
const kCameraProductFlag = document.getElementById("kCamera");
const kStoreProductFlag = document.getElementById("kStore");
const pageTitle = document.title;

if (pageTitle == "Kiwi Micro | kCamera") {
	console.log("kCamera Page Detected!");
	configPrice.innerHTML = kCameraCameraNoNoIRPrice;
	kCameraCameraNoIRObject.addEventListener("click", function () {
		configPrice.innerHTML = kCameraCameraNoIRPrice;
		kCameraCameraNoNoIRObject.classList.remove("configButtonActive");
		kCameraCameraNoNoIRObject.classList.add("configButton");
		kCameraCameraNoIRObject.classList.remove("configButton");
		kCameraCameraNoIRObject.classList.add("configButtonActive");
	});

	kCameraCameraNoNoIRObject.addEventListener("click", function () {
		configPrice.innerHTML = kCameraCameraNoNoIRPrice;
		kCameraCameraNoNoIRObject.classList.add("configButtonActive");
		kCameraCameraNoIRObject.classList.remove("configButtonActive");
		kCameraCameraNoIRObject.classList.add("configButton");
		kCameraCameraNoNoIRObject.classList.remove("configButton");
	});
}
if (pageTitle == "Kiwi Micro | kStore") {
	console.log("kStore Page Detected!");
	configPrice.innerHTML = kStoreStorage256gbPrice;
	kStoreStorage256gbObject.addEventListener("click", function () {
		configPrice.innerHTML = kStoreStorage256gbPrice;
		kStoreStorage256gbObject.classList.add("configButtonActive");
		kStoreStorage512gbObject.classList.remove("configButtonActive");
		kStoreStorage512gbObject.classList.add("configButton");
		kStoreStorage256gbObject.classList.remove("configButton");
	});

	kStoreStorage512gbObject.addEventListener("click", function () {
		configPrice.innerHTML = kStoreStorage512gbPrice;
		kStoreStorage256gbObject.classList.remove("configButtonActive");
		kStoreStorage256gbObject.classList.add("configButton");
		kStoreStorage512gbObject.classList.remove("configButton");
		kStoreStorage512gbObject.classList.add("configButtonActive");
	});
}
