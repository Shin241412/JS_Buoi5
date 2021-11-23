// Variables
let form = document.getElementById('form');
let username = document.getElementById('username');
let gender = document.getElementsByName('gender');
let address = document.getElementById('address');
let email = document.getElementById('email');
let password = document.getElementById('password');
let fav = document.getElementsByName('fav');

//Action
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});


// Check Inputs
function checkInputs()
{
    //  Gender checked?
     let genderError = document.getElementById('genderError');
     let gender_checked = false;
     for(let i = 0; i < gender.length; i++)
     {
        if(gender[i].checked)
        {
            gender_checked = true;
        }
     }

    //  Inputs value
     let name_value = username.value;
     let address_value = address.value;
     let email_value = email.value;
     let password_value = password.value;

    //  Favorite checked?
     let favError = document.getElementById('favError');
     let fav_checked = false;
     for(let i = 0; i < fav.length; i++)
     {
         if(fav[i].checked)
         {
             fav_checked = true;
         }
     }

    //  Username
     if(name_value === '')
     {
        setError(username, "Tên không được để trống");
     }
     else if(name_value.length <= 1)
     {
         setError(username, "Tên quá ngắn");
     }
     else if(!validName(name_value))
     {
        setError(username, "Tên không hợp lệ");
     }
     else if(validName(name_value))
     {
        setSuccess(username, "Tên hợp lệ");
     }

    //  Gender
     if(!gender_checked)
     {
         genderError.style.display = "block";
         genderError.style.color = "#fc3567";
         genderError.innerText = "Giới tính không được để trống";
         genderError.className = 'error';
     }
     else if(gender_checked)
     {
        genderError.style.display = "block";
        genderError.style.color = "#2af598";
        genderError.innerText = "Giới tính hợp lệ";
        genderError.className = 'success';
     }

    //  Address
     if(address_value === '')
     {
         setError(address, "Địa chỉ không được để trống");
     }
     else if(address_value.length < 5)
     {
         setError(address, "Địa chỉ không hợp lệ")
     }
     else if(!validAddress(address_value))
     {
        setError(address, "Địa chỉ không hợp lệ");
     }
     else if(validAddress(address_value))
     {
         setSuccess(address, "Địa chỉ hợp lệ");
     }

    //  Email
     if(email_value === '')
     {
         setError(email, "Email không được để trống")
     }
     else if(!validEmail(email_value))
     {
         setError(email, "Email không hợp lệ");
     }
     else if(validEmail(email_value))
     {
         setSuccess(email, "Email hợp lệ");
     }

    //  Password
     if(password_value === '')
     {
         setError(password, "Mật khẩu không được để trống");
     }
     else if(password_value.length < 8)
     {
         setError(password, "Mật khẩu phải bao gồm 8 ký tự");
     }
     else if(!validPassword(password_value))
     {
         setError(password, `Mật khẩu tối đa 8 ký tự, phải chứa chữ hoa, chữ thường, số và ký tự đặc biệt(!@#$%^&*.,)`);
     }
     else if(validPassword(password_value))
     {
         setSuccess(password, "Mật khẩu hợp lệ");
     }

    //  Favorite
    if(!fav_checked)
    {
        favError.style.display = "block";
        favError.style.color = "#fc3567";
        favError.innerText = "Sở thích không được để trống";
        favError.className = 'error';
    }
    else if(fav_checked)
    {
        favError.style.display = "block";
        favError.style.color = "#2af598";
        favError.innerText = "Sở thích hợp lệ";
        favError.className = 'success';
    }

    // Submit form if Success
    isSuccess();
}


// Error
function setError(input, message)
{
    let div = input.parentElement;
    let small = div.querySelector('small');

    small.innerText = message;

    div.className = 'error';
}

// Success
function setSuccess(input, message)
{
    let div = input.parentElement;
    let small = div.querySelector('small');

    small.innerText = message;

    div.className = 'success';
}

// Submit form if Success
function isSuccess()
{
    
    let div_succes = document.getElementsByClassName('success');

    // Progress
    if(div_succes.length == 0)
    {
        progress(0);
    }
    if(div_succes.length == 1)
    {
        progress(17);
    }
    if(div_succes.length == 2)
    {
        progress(34);
    }
    if(div_succes.length == 3)
    {
        progress(51);
    }
    if(div_succes.length == 4)
    {
        progress(68);
    }
    if(div_succes.length == 5)
    {
        progress(85);
    }
    if(div_succes.length == 6)
    {
        progress(100);
    }

    // Submit
    for(let i = 0; i < div_succes.length; i++)
    {
        if
        (
               div_succes[0].classList.contains('success')
            && div_succes[1].classList.contains('success')
            && div_succes[2].classList.contains('success')
            && div_succes[3].classList.contains('success')
            && div_succes[4].classList.contains('success')
            && div_succes[5].classList.contains('success')
        )
        {
            setTimeout(e => {form.submit();}, 1500);
        }
    }
}

// Progress
function progress(value)
{
    let progress = document.getElementById('progress');
    let style = getComputedStyle(progress);
    let width = parseFloat(value);
    progress.style.setProperty('--width', width);
}


// Regex Name
function validName(username)
{
    let regex_name = /^([A-ZAÀÁẢÃẠĂẰẲẴẶÂẦẤẨẪẬĐEÈÉẺẼẸÊỀẾỂỄỆIÌÍỈĨỊOÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢUÙÚỦŨỤƯỪỨỬỮỰYỲÝỶỸỴ]|[a-zaàáảãạăằắẳẵặâầấẩẫậđeèéẻẽẹêềếểễệiìíỉĩịoòóỏõọôồốổỗộơờớởỡợuùúủũụưừứửữựyỳýỷỹỵ]{1,}\s?)+$/;

    return regex_name.test(username);
}

// Regex Address
function validAddress(address)
{
    let regex_address = /^([A-Z0-9AÀÁẢÃẠĂẰẲẴẶÂẦẤẨẪẬĐEÈÉẺẼẸÊỀẾỂỄỆIÌÍỈĨỊOÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢUÙÚỦŨỤƯỪỨỬỮỰYỲÝỶỸỴ]|[a-zaàáảãạăắằẳẵặâầấẩẫậđeèéẻẽẹêềếểễệiìíỉĩịoòóỏõọôồốổỗộơờớởỡợuùúủũụưừứửữựyỳýỷỹỵ]{1,}|\,?\s?)+$/;

    return regex_address.test(address);
}

// Regex Email
function validEmail(email)
{
    let regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex_email.test(email);
}

// Regex Password
function validPassword(password)
{
    let regex_password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*.,])[A-Za-z0-9!@#$%^&*.,]{8,}$/;

    return regex_password.test(password);
}