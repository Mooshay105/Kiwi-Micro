const kCameraCameraNoNoIRPrice = "$90";
const kCameraCameraNoIRPrice = "$100";

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
}
if (pageTitle == "Kiwi Micro | kStore") {
	console.log("kStore Page Detected!");
	configPrice.innerHTML = kStoreStorage256gbPrice;
}

function selectProduct(productID) {
	if (productID == "kCameraCameraNoNoIR") {
		kCameraCameraX("NoNoIR");
	} else if (productID == "kCameraCameraNoIR") {
		kCameraCameraX("NoIR");
	} else if (productID == "kStoreStorage256gb") {
		kStoreStorageX(256);
	} else if (productID == "kStoreStorage512gb") {
		kStoreStorageX(512);
	}
}

function kCameraCameraX(storageSize) {
	if (storageSize == "NoNoIR") {
		configPrice.innerHTML = kCameraCameraNoNoIRPrice;
		kCameraCameraNoNoIRObject.classList.add("configButtonActive");
		kCameraCameraNoIRObject.classList.remove("configButtonActive");
		kCameraCameraNoIRObject.classList.add("configButton");
		kCameraCameraNoNoIRObject.classList.remove("configButton");
	} else if (storageSize == "NoIR") {
		configPrice.innerHTML = kCameraCameraNoIRPrice;
		kCameraCameraNoNoIRObject.classList.remove("configButtonActive");
		kCameraCameraNoNoIRObject.classList.add("configButton");
		kCameraCameraNoIRObject.classList.remove("configButton");
		kCameraCameraNoIRObject.classList.add("configButtonActive");
	}
}

function kStoreStorageX(storageSize) {
	if (storageSize == 256) {
		configPrice.innerHTML = kStoreStorage256gbPrice;
		kStoreStorage256gbObject.classList.add("configButtonActive");
		kStoreStorage512gbObject.classList.remove("configButtonActive");
		kStoreStorage512gbObject.classList.add("configButton");
		kStoreStorage256gbObject.classList.remove("configButton");
	} else if (storageSize == 512) {
		configPrice.innerHTML = kStoreStorage512gbPrice;
		kStoreStorage256gbObject.classList.remove("configButtonActive");
		kStoreStorage256gbObject.classList.add("configButton");
		kStoreStorage512gbObject.classList.remove("configButton");
		kStoreStorage512gbObject.classList.add("configButtonActive");
	}
}
