const kCameraStorage16gbPrice = "kCamera 16GB Coming Soon!";
const kCameraStorage32gbPrice = "kCamera 32GB Coming Soon!";

const kStoreStorage256gbPrice = "kStore 256GB Coming Soon!";
const kStoreStorage512gbPrice = "kStore 512GB Coming Soon!";

const kCameraStorage16gbObject = document.getElementById("kCameraStorage16gb");
const kCameraStorage32gbObject = document.getElementById("kCameraStorage32gb");

const kStoreStorage256gbObject = document.getElementById("kStoreStorage256gb");
const kStoreStorage512gbObject = document.getElementById("kStoreStorage512gb");

const configPrice = document.getElementById("configPrice");
const kCameraProductFlag = document.getElementById("kCamera");
const kStoreProductFlag = document.getElementById("kStore");
const pageTitle = document.title;

if (pageTitle == "Kiwi Micro | kCamera") {
	console.log("kCamera Page Detected!");
	configPrice.innerHTML = kCameraStorage16gbPrice;
}
if (pageTitle == "Kiwi Micro | kStore") {
	console.log("kStore Page Detected!");
	configPrice.innerHTML = kStoreStorage256gbPrice;
}

function selectProduct(productID) {
	if (productID == "kCameraStorage16gb") {
		kCameraStorageX(16);
	} else if (productID == "kCameraStorage32gb") {
		kCameraStorageX(32);
	} else if (productID == "kStoreStorage256gb") {
		kStoreStorageX(256);
	} else if (productID == "kStoreStorage512gb") {
		kStoreStorageX(512);
	}
}

function kCameraStorageX(storageSize) {
	if (storageSize == 16) {
		configPrice.innerHTML = kCameraStorage16gbPrice;
		kCameraStorage16gbObject.classList.add("configButtonActive");
		kCameraStorage32gbObject.classList.remove("configButtonActive");
		kCameraStorage32gbObject.classList.add("configButton");
		kCameraStorage16gbObject.classList.remove("configButton");
	} else if (storageSize == 32) {
		configPrice.innerHTML = kCameraStorage32gbPrice;
		kCameraStorage16gbObject.classList.remove("configButtonActive");
		kCameraStorage16gbObject.classList.add("configButton");
		kCameraStorage32gbObject.classList.remove("configButton");
		kCameraStorage32gbObject.classList.add("configButtonActive");
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
