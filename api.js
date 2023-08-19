const  apiurl  = "http://127.0.0.1:3000/";
// const  apiurl  = "https://virtual.chevroncemcs.com/";
const modalHead=".modal-title";
const modalBody=".modal-body";
const modalFooter=".modal-footer";
const modalBtn="#modalBtn"


  
function exhibitorRegisterApi(email,password,name,sector,description,image,phone,callback){
    var form_data = new FormData();                
    form_data.append("email",email);
    form_data.append("password",password);    
    form_data.append("name",name);
    form_data.append("sector",sector);
    form_data.append("description",description);
    form_data.append("phone",phone);
    form_data.append("image", image);
    
  
    var settings = {
        "url": apiurl+"exhibitor/register",        
        "method":"POST",
        "type":"POST",
        "timeout": 0,
        "contentType": false,
        "cache": false,
        "processData": false,
        "data": form_data,
        beforeSend: function () {            
            $(modalHead).html(`Uploading Logo...`);
            $(modalBody).html(`
                <span id="loadingScreen"></span>
            `);
            $(modalFooter).html(`                          
            `);  
  
            //document.getElementById(modalBtn).click();
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    
                    $(modalBody).html(`
                  ` + Math.floor(percentComplete) + `% complete...
                  `);
                }
            }, false);
            return xhr;
        },
        complete: function () {            
            $(modalHead).html(`Logo Uploaded`);
            $(modalBody).html(`
                  Your information has been uploaded! You may now login
              `);
            $(modalFooter).html(`                
                  <button type="button" id="closebtn" class="btn btn-success text-light" data-bs-dismiss="modal">Continue</button>                  
              `);            
            $(modalBody).append(" completed!")
            
        },
        "success": function (data) {
              
        }
    };
    return new Promise(resolve => {
        $.ajax(settings).done(function (response, status) {          
            return callback(response)
            resolve(response);
        });
    });   
}

function updateLogoApi(email,password,image,callback){
    var form_data = new FormData();                
    form_data.append("email",email);
    form_data.append("password",password);        
    form_data.append("image", image);
    
  
    var settings = {
        "url": apiurl+"updateLogo",        
        "method":"POST",
        "type":"POST",
        "timeout": 0,
        "contentType": false,
        "cache": false,
        "processData": false,
        "data": form_data,
        beforeSend: function () {            
            $(modalHead).html(`Uploading Logo...`);
            $(modalBody).html(`
                <span id="loadingScreen"></span>
            `);
            $(modalFooter).html(`                          
            `);  
  
            //document.getElementById(modalBtn).click();
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    
                    $(modalBody).html(`
                  ` + Math.floor(percentComplete) + `% complete...
                  `);
                }
            }, false);
            return xhr;
        },
        complete: function () {            
            $(modalHead).html(`Logo Uploaded`);
            $(modalBody).html(`
                  Logo updated
              `);
            $(modalFooter).html(`                
                  <button type="button" id="closebtn" class="btn btn-success text-light" data-bs-dismiss="modal">Continue</button>                  
              `);            
            $(modalBody).append(" completed!")
            
        },
        "success": function (data) {
              
        }
    };
    return new Promise(resolve => {
        $.ajax(settings).done(function (response, status) {          
            return callback(response)
            resolve(response);
        });
    });   
}


function loginExhibitorApi(email,password){
    var settings = {
        "url": apiurl+"exhibitor/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password          
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}
 
function registerUserApi(email,password,lastname,firstname,phone,cai){
    var settings = {
        "url": apiurl+"user/register",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
           lastName:lastname,
           firstName:firstname,
           phone:phone,
           cai:cai
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}
  
function loginUserApi(email,password){
    var settings = {
        "url": apiurl+"user/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password          
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function patchUserApi(email,password,column,value){
    var settings = {
        "url": apiurl+"updateUser",
        "method": "PATCH",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
          column:column,
          value:value
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function patchExhibitorApi(email,password,column,value){
    var settings = {
        "url": apiurl+"updateExhibitor",
        "method": "PATCH",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
          column:column,
          value:value
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function addNotificationEmailApi(email,password,newemail){
    var settings = {
        "url": apiurl+"notificationEmail",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
          newemail:newemail   
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function removeNotificationEmailApi(email,password,index){
    var settings = {
        "url": apiurl+"notificationEmail",
        "method": "DELETE",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
          "index": index
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function createNewProductApi(email,password,name,price,description,image,callback){
    var form_data = new FormData();                
    form_data.append("email",email);
    form_data.append("password",password);    
    form_data.append("name",name);
    form_data.append("price",price);
    form_data.append("description",description);    
    form_data.append("image", image);
    
    var settings = {
        "url": apiurl+"product",        
        "method":"POST",
        "type":"POST",
        "timeout": 0,
        "contentType": false,
        "cache": false,
        "processData": false,
        "data": form_data,
        beforeSend: function () {            
            $(modalHead).html(`Uploading New Product`);
            $(modalBody).html(`
                <span id="loadingScreen"></span>
            `);
            $(modalFooter).html(`                          
            `);
  
            //document.getElementById(modalBtn).click();
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    
                    $(modalBody).html(`
                  ` + Math.floor(percentComplete) + `% complete...
                  `);
                }
            }, false);
            return xhr;
        },
        complete: function () {            
            $(modalHead).html(`New Product Uploaded`);
            $(modalBody).html(`
                  Your product has been uploaded successfully!
              `);
            $(modalFooter).html(`                
                  <button type="button" id="closebtn" class="btn btn-success text-light" data-bs-dismiss="modal">Continue</button>                  
              `);            
            $(modalBody).append(" completed!")
            
        },
        "success": function (data) {
              
        }
    };
    return new Promise(resolve => {
        $.ajax(settings).done(function (response, status) {          
            return callback(response)
            resolve(response);
        });
    });   
}

function deleteProductApi(email,password,id){
    var settings = {
        "url": apiurl+"product",
        "method": "DELETE",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
          "id":id
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function patchProductApi(email,password,id,column,value){
    var settings = {
        "url": apiurl+"product",
        "method": "PATCH",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
          id:id,
          column:column,
          value:value
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function getProductByVendorApi(email){
    var settings = {
        "url": apiurl+"product",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "vendorEmail":email,
          
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function getProductByIdApi(id){
    var settings = {
        "url": apiurl+"product",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          productId:id,          
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}
    

function getProductImagesApi(id){
    var settings = {
        "url": apiurl+"productimages",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "productId":id
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function getCategoriesApi(){
    var settings = {
        "url": apiurl+"categories",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}
    
function addProductImageApi(email,password,id,image,callback){
    var form_data = new FormData();                
    form_data.append("email",email);
    form_data.append("password",password);
    form_data.append("id",id);
    form_data.append("image", image);
    
  
    var settings = {
        "url": apiurl+"productimage",        
        "method":"POST",
        "type":"POST",
        "timeout": 0,
        "contentType": false,
        "cache": false,
        "processData": false,
        "data": form_data,
        beforeSend: function () {            
            $(modalHead).html(`Uploading New Product Image...`);
            $(modalBody).html(`
                <span id="loadingScreen"></span>
            `);
            $(modalFooter).html(`                          
            `);
  
            //document.getElementById(modalBtn).click();
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    
                    $(modalBody).html(`
                  ` + Math.floor(percentComplete) + `% complete...
                  `);
                }
            }, false);
            return xhr;
        },
        complete: function () {            
            $(modalHead).html(`Product Image Uploaded`);
            $(modalBody).html(`
                  Your image has been uploaded successfuly
              `);
            $(modalFooter).html(`                
                  <button type="button" id="closebtn" class="btn btn-success text-light" data-bs-dismiss="modal">Continue</button>                  
              `);            
            $(modalBody).append(" completed!")
            
        },
        "success": function (data) {
              
        }
    };
    return new Promise(resolve => {
        $.ajax(settings).done(function (response, status) {          
            return callback(response)
            resolve(response);
        });
    });   
}

function deleteProductImageApi(email,password,id){
    var settings = {
        "url": apiurl+"productimage",
        "method": "DELETE",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
          id:id
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function indicateInterestApi(email,password,productId){
    var settings = {
        "url": apiurl+"indicateInterest",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password,
          product:productId
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}
    

function uploadUserProofApi(email,password,id,image,callback){
    var form_data = new FormData();                
    form_data.append("email",email);
    form_data.append("password",password);
    form_data.append("id",id);    
    form_data.append("image", image);
    
  
    var settings = {
        "url": apiurl+"userProof",        
        "method":"POST",
        "type":"POST",
        "timeout": 0,
        "contentType": false,
        "cache": false,
        "processData": false,
        "data": form_data,
        beforeSend: function () {            
            $(modalHead).html(`Uploading Proof...`);
            $(modalBody).html(`
                <span id="loadingScreen"></span>
            `);
            $(modalFooter).html(`                          
            `);
  
            //document.getElementById(modalBtn).click();
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    
                    $(modalBody).html(`
                  ` + Math.floor(percentComplete) + `% complete...
                  `);
                }
            }, false);
            return xhr;
        },
        complete: function () {            
            $(modalHead).html(`Proof Uploaded`);
            $(modalBody).html(`
                Your proof has been uploaded successfully
              `);
            $(modalFooter).html(`                
                  <button type="button" id="closebtn" class="btn btn-success text-light" data-bs-dismiss="modal">Continue</button>                  
              `);            
            $(modalBody).append(" completed!")
            
        },
        "success": function (data) {
              
        }
    };
    return new Promise(resolve => {
        $.ajax(settings).done(function (response, status) {          
            return callback(response)
            resolve(response);
        });
    });   
}
    
function uploadExhibitorProofApi(email,password,id,image,callback){
    var form_data = new FormData();                
    form_data.append("email",email);
    form_data.append("password",password);
    form_data.append("id",id);    
    form_data.append("image", image);
    
  
    var settings = {
        "url": apiurl+"exhibitorProof",        
        "method":"POST",
        "type":"POST",
        "timeout": 0,
        "contentType": false,
        "cache": false,
        "processData": false,
        "data": form_data,
        beforeSend: function () {            
            $(modalHead).html(`Uploading Proof...`);
            $(modalBody).html(`
                <span id="loadingScreen"></span>
            `);
            $(modalFooter).html(`                          
            `);
  
            //document.getElementById(modalBtn).click();
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    
                    $(modalBody).html(`
                  ` + Math.floor(percentComplete) + `% complete...
                  `);
                }
            }, false);
            return xhr;
        },
        complete: function () {            
            $(modalHead).html(`Proof Uploaded`);
            $(modalBody).html(`
                Your proof has been uploaded successfully
              `);
            $(modalFooter).html(`                
                  <button type="button" id="closebtn" class="btn btn-success text-light" data-bs-dismiss="modal">Continue</button>                  
              `);            
            $(modalBody).append(" completed!")
            
        },
        "success": function (data) {
              
        }
    };
    return new Promise(resolve => {
        $.ajax(settings).done(function (response, status) {          
            return callback(response)
            resolve(response);
        });
    });   
}

  
function getInterestApi(){
    var settings = {
        "url": apiurl+"interest",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
                   
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function getVendorInterestApi(email){
    var settings = {
        "url": apiurl+"interest",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
           vendor:email
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function getUserInterestApi(email){
    var settings = {
        "url": apiurl+"interest",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
           user:email
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function siteaccessApi(email){
    var settings = {
        "url": apiurl+"siteaccess",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
           email:email
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}


function getUserProductInterestApi(email,productid){
    var settings = {
        "url": apiurl+"interest",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
           user:email,
           product:productid
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}


function getExhibitorsApi(){
    var settings = {
        "url": apiurl+"exhibitor",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {           
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}
    
function getExhibitorApi(query){
    var settings = {
        "url": apiurl+"exhibitor",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
           query:query
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}

function getExhibitorIdApi(id){
    var settings = {
        "url": apiurl+"exhibitor",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
           id:id
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}


  
//API call for getting admin(only for super admin)
function getAdminApi(email,password,pageNum,pageSize,sort,asc){
  var settings = {
      "url": apiurl+"getAdmin",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": {
        "email":email,
        "password":password,
        pageNum:pageNum,
        pageSize:pageSize,
        sort:sort,
        asc:asc
      }
    };
        return new Promise(resolve => {
      $.ajax(settings).done(function (response,status) {
          //console.log(status);
          resolve(response);
        });
  });
}

  //API call for login admin
function loginApi(email,password){
    var settings = {
        "url": apiurl+"login",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "email":email,
          password: password          
        }
      };
          return new Promise(resolve => {
        $.ajax(settings).done(function (response,status) {
            //console.log(status);
            resolve(response);
          });
    });
}


  //API call for creating board of trustee member
  function createBoardMemberApi(email,password,trusteeEmail,name,role,meta,details,image,callback){
    var form_data = new FormData();                
    form_data.append("email",email);
    form_data.append("password",password);
    form_data.append("trusteeEmail",trusteeEmail);
    form_data.append("name",name);
    form_data.append("role",role);
    form_data.append("meta",meta);
    form_data.append("details",details);
    form_data.append("image", image);
    
  
    var settings = {
        "url": apiurl+"board-of-trustees",        
        "method":"POST",
        "type":"POST",
        "timeout": 0,
        "contentType": false,
        "cache": false,
        "processData": false,
        "data": form_data,
        beforeSend: function () {            
            $(modalHead).html(`Uploading New Board Member`);
            $(modalBody).html(`
                <span id="loadingScreen"></span>
            `);
            $(modalFooter).html(`                          
            `);
  
            //document.getElementById(modalBtn).click();
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;
                    
                    $(modalBody).html(`
                  ` + Math.floor(percentComplete) + `% complete...
                  `);
                }
            }, false);
            return xhr;
        },
        complete: function () {            
            $(modalHead).html(`Board member Upload...`);
            $(modalBody).html(`
                  Board member has been uploaded successfully!
              `);
            $(modalFooter).html(`                
                  <button type="button" id="closebtn" class="btn btn-success text-light" data-bs-dismiss="modal">Continue</button>                  
              `);            
            $(modalBody).append(" completed!")
            
        },
        "success": function (data) {
              
        }
    };
    return new Promise(resolve => {
        $.ajax(settings).done(function (response, status) {          
            return callback(response)
            resolve(response);
        });
    });   
  }
    
  