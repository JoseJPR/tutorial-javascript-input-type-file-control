const extensions = ['pdf', 'jpg', 'png', 'ppt', 'mp4', 'avi'];
const type = ['application/pdf', 'image/jpg', 'image/png', 'application/vnd.ms-powerpoint', 'video/mp4', 'video/avi'];

var error;
function upload (){
    
  const files = document.querySelectorAll('.file');
  error = false;

  for(let i = 0; i < files.length; i ++){
    if(files[i].files[0]){
      console.group();
      console.info('File name: ' + files[i].files[0].name);
      console.info('File type: ' + files[i].files[0].type);
      console.info('File extension: ' + files[i].files[0].name.split('.')[(files[i].files[0].name.split('.').length-1)]);
      if(extensions.indexOf(files[i].files[0].name.split('.')[(files[i].files[0].name.split('.').length-1)]) < 1){
        console.error('🚫 Extension not allowed');
        error = true;
      }else if(type.indexOf(files[i].files[0].type) < 1){
        console.error('🚫 Type not allowed');
        error = true;
      }
      console.groupEnd();
    }
    if(error){
      console.error('❌ Upload of files canceled');
      return;
    }
    console.log('✅ Processing file upload');
    // Call your upload function :)
  }
}

function bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

function getSize(e){
  document.querySelector('#size' + e.id.split('_')[1]).innerHTML = bytesToSize(e.files[0].size);
}