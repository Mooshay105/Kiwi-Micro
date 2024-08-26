const kCameraStorage256gbPrice = "kCamera 256GB Coming Soon!";
const kCameraStorage512gbPrice = "kCamera 512GB Coming Soon!";
const kStoreStorage256gbPrice = "kStore 256GB Coming Soon!";
const kStoreStorage512gbPrice = "kStore 512GB Coming Soon!";

const kCameraStorage256gbObject = document.getElementById("kCameraStorage256gb");
const kCameraStorage512gbObject = document.getElementById("kCameraStorage512gb");
const kStoreStorage256gbObject = document.getElementById("kStoreStorage256gb");
const kStoreStorage512gbObject = document.getElementById("kStoreStorage512gb");

const configPrice = document.getElementById("configPrice");
const kCameraProductFlag = document.getElementById("kCamera");
const kStoreProductFlag = document.getElementById("kStore");
const pageTitle = document.title;

if (pageTitle == "Kiwi Micro | kCamera") {
	console.log("kCamera Page Detected!");
	configPrice.innerHTML = kCameraStorage256gbPrice;
}
if (pageTitle == "Kiwi Micro | kStore") {
	console.log("kStore Page Detected!");
	configPrice.innerHTML = kStoreStorage256gbPrice;
}

function selectProduct(productID) {
	if (productID == "kCameraStorage256gb") {
		kCameraStorageX(256);
	} else if (productID == "kCameraStorage512gb") {
		kCameraStorageX(512);
	} else if (productID == "kStoreStorage256gb") {
		kStoreStorageX(256);
	} else if (productID == "kStoreStorage512gb") {
		kStoreStorageX(512);
	}
}

function kCameraStorageX(storageSize) {
	if (storageSize == 256) {
		configPrice.innerHTML = kCameraStorage256gbPrice;
		kCameraStorage256gbObject.classList.add("configButtonActive");
		kCameraStorage512gbObject.classList.remove("configButtonActive");
		kCameraStorage512gbObject.classList.add("configButton");
		kCameraStorage256gbObject.classList.remove("configButton");
	} else if (storageSize == 512) {
		configPrice.innerHTML = kCameraStorage512gbPrice;
		kCameraStorage256gbObject.classList.remove("configButtonActive");
		kCameraStorage256gbObject.classList.add("configButton");
		kCameraStorage512gbObject.classList.remove("configButton");
		kCameraStorage512gbObject.classList.add("configButtonActive");
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
