$(document).ready(function () {
    if (getCookie('apikey')){
        sessionStorage.setItem('apikey', getCookie('apikey'));
    }
    const page = document.URL.split('/');
    $('#iid').val(sessionStorage.getItem('iid'));
    $('#apikey').val(sessionStorage.getItem('apikey'));

    let iid = ($('#iid').val() == "" || $('#iid').val() == "") ? `{{ instance_id }}` : $('#iid').val();

    $('#apiurl').text(`https://swiftsend.click/api/${iid}/${document.URL.split('/')[4]}`);

    $(document).on('click', '#save', function () {
        nullfield_validation('iid');
        nullfield_validation('apikey');
        if (objFlag.flag_iid == 0 && objFlag.flag_apikey == 0) {
            sessionStorage.setItem('iid', `${$('#iid').val()}`);
            sessionStorage.setItem('apikey', `${$('#apikey').val()}`);

            iid = $('#iid').val();

            $('#apiurl').text(`https://swiftsend.click/api/${iid}/${document.URL.split('/')[4]}`);
            $('#iid, #apikey').removeClass('form-control-success form-control-danger');
        }
        $.ajax({
            url: "/getData",
            method: "POST",
            data: {
                obj: {
                    "table": "instance",
                    "paramstr": `instance_id = '${iid}'`,
                }
            },
            success: function (val) {
                let data = ` - `;
                switch (val.status_code) {
                    case '500': {
                        InternalServerError();
                        break;
                    }

                    case '401':
                    case '404': {
                        data = ` - `;
                        break;
                    }

                    default: {
                        if (val[0].isActive) {
                            data += `<span class="badge text-bg-success fs-13 p-2">Connected</span>`;
                        }
                        else {
                            data += `<span class="badge text-bg-danger fs-13 p-2">Disconnected</span>`;
                        }
                    }
                }
                $('#auth_status').html(data);
            }
        });
    })

    $(document).on('click', '#clear', function () {
        sessionStorage.removeItem('iid');
        sessionStorage.removeItem('apikey');

        $('#iid').val(null);
        $('#apikey').val(null);

        iid = `{{ instance_id }}`;

        $('#apiurl').text(`https://swiftsend.click/api/${iid}/${document.URL.split('/')[4]}`);
        $('#iid, #apikey').removeClass('form-control-success form-control-danger');
    })

    $(document).on("click", ".copy", function () {
        var param = $(this).attr("id").substring(5);
        copy_api(param);
    });
})