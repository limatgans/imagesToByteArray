function longLogo() {
    console.log("Long Logo");
    imageToByteArray("file-logo-l");
}

function shortLogo() {
    console.log("Short Logo");
}

function handleFiles(fileArray) {
    console.log("Handle Files", fileArray);
    const image = fileArray[0];
    

}

function imageToByteArray(elementId = "", ) {
    const imageInput = document.getElementById(elementId);
    console.log("Image Element", imageInput.files[0]);
    const image = imageInput.files[0];
    console.log(image)
}

/*
longLogo() {
    this.alerter.resetAlertMessages()
    var input = document.getElementById('file-logo-l');
    var file = (<HTMLInputElement>input).files[0];
    if (file.size > 5000) {
      this.alerter.error("Image size can only be upto 5 KB")
    }
    else {
      var fr = new FileReader();
      fr.onload = () => {
        var b64Data = (<string>fr.result).split(',');
        this.longFileLink = b64Data[1];
        this.longFileFormat = b64Data[0];
      };
      fr.readAsDataURL(file);
    }
  }
*/