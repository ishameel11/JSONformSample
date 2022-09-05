$(document).ready(function () {
    // var row;
    var a = [
        {
            "question": "What is your name ?",
            "type": "text",
            "optional": "true",
            "answer": "Isha"
        },
        {
            "question": "Date of Birth?",
            "type": "datepicker",
            "optional": "true",
            "answer": "01-04-1997"
        },
        {
            "question": "Gender",
            "type": "radio",
            "optional": "true",
            "answer": "Female",
            "options": [
                {
                    "label": "Male",
                    "value": "Male"
                },
                {
                    "label": "Female",
                    "value": "Female"
                }
            ]
        },
        {
            "question": "Status",
            "type": "radio",
            "optional": "true",
            "answer": "Unmarried",
            "options": [
                {
                    "label": "married",
                    "value": "Married"
                },
                {
                    "label": "unmarried",
                    "value": "Unmarried"
                }
            ]
        },
        {
            "question": "Nationality",
            "type": "select",
            "optional": "true",
            "id": "1",
            "answer": "India",
            "options": [
                {
                    "label": "India",
                    "value": "India"
                },
                {
                    "label": "America",
                    "value": "america"
                },
                {
                    "label": "Australia",
                    "value": "australia"
                }
            ]
        },
        {
            "question": "Which is your favourite game ?",
            "type": "checkbox",
            "optional": "false",
            "answer": "Dancing",
            "options": [
                {
                    "label": "Dancing",
                    "value": "Dancing"
                },
                {
                    "label": "Cricket",
                    "value": "cricket"
                },
                {
                    "label": "Singing",
                    "value": "singing"
                }
            ]
        },
        {
            "question": "Education",
            "type": "select",
            "optional": "true",
            "id": "2",
            "answer": "'Graduate'",
            "options": [
                {
                    "label": "10th",
                    "value": "10th"
                },
                {
                    "label": "12th",
                    "value": "12th"
                },
                {
                    "label": "Graduate",
                    "value": "Graduate"
                },
                {
                    "label": "Post Graduate",
                    "value": "Post Graduate"
                }
            ]
        },
        {
            "question": "About yourself ?",
            "type": "textarea",
            "optional": "true",
            "answer": "'Hello, my name is Isha Meel.'"
        },
        {
            "type": "matrix",
            "name": "Quality",
            "title": "Please indicate if you agree or disagree",
            "columns": [
                {
                    "value": 1,
                    "text": "Strongly Disagree"
                },
                {
                    "value": 2,
                    "text": "Disagree"
                },
                {
                    "value": 3,
                    "text": "Neutral"
                },
                {
                    "value": 4,
                    "text": "Agree"
                },
                {
                    "value": 5,
                    "text": "Strongly Agree"
                }
            ],
            "rows": [
                {
                    "value": "affordable",
                    "text": "Product is affordable"
                },
                {
                    "value": "does what it claims",
                    "text": "Product does what it claims"
                },
                {
                    "value": "better then others",
                    "text": "Product is better than other products on the market"
                },
                {
                    "value": "easy to use",
                    "text": "Product is easy to use"
                }
            ]
        }
    ]
    $.ajax({
        url: "form.json", success: function (result) {

            var obj = "";
            var radio = ""
            var select = ""
            var box = "";
            var row = "";
            var rowObj = "";
            var colObj = "";
            var col = "";
            var k = 0;
            $(function () {
                $("#datepicker").datepicker({
                    changeMonth: true,
                    changeYear: true,
                    maxDate: -6570,
                    dateFormat: 'dd-mm-yy',
                    showButtonPanel: true
                });
            });
            // alert('gdgdf')
            result.forEach((item, index) => {
                var a = 0;
                if (item.type == "text") {
                    obj += `<div class="col-lg-7">
                        <label for="` + item.type + `">` + item.question + `</label>
                        <input type="` + item.type + `" class=" form-control area" style="width: 234px;"
                        id="` + item.type + `" required="` + item.optional + `" answer="` + item.answer + `"placeholder="Name">
                        <span class="text-danger error" id="namecheck"></span></div>`
                }

                if (item.type == "datepicker") {
                    obj += `<div class="col-lg-7">
                    <label for="` + item.type + `">` + item.question + `</label>
                    <input type="` + item.type + `" class=" form-control area" name="` + item.type + `" placeholder="dd-mm-yy"
                     style="width: 234px;"
                    id="` + item.type + `" required="` + item.optional + `" answer="` + item.answer + `">
                    <span class="text-danger error" id="datecheck"></span></div>`

                }
                if (item.type == "radio") {
                    for (let j = 0; j < item.options.length; j++) {
                        radio += `<input  answer=${item.answer} type="${item.type}" name="${item.question}" class="form-check-input field" id="${item.options[j].label}" value="${item.options[j].value}">
                                <label class="form-check-label" for="${item.options[j].label}">${item.options[j].value}</label>`;
                    }
                    obj += `<div class="col-lg-7"><label for="${item.type}" class="form-label"><h6>${item.question}</h6></label></div>
                        <div class="col-lg-7" style="margin-left: 38px;">${radio}</div>`;
                    radio = ``;
                };

                if (item.type == "select") {
                    for (let j = 0; j < item.options.length; j++) {
                        select += `<option answer="` + item.answer + `" value="` + item.options[j].value + `">
                        ` + item.options[j].label + `</option>`
                    }
                    obj += `<div class="col-lg-7"><label for="` + item.type + `" class="form-label"><h6>` + item.question + `</h6></label></div>
                    <div class="col-7"><select style="width: 233px;
                    margin-left: 13px;"  answer=${item.answer} class="form-select field" 
                    id="${item.id}"> <option selected value="">Select</option>${select}</select></div></div>`;
                    select = ``;
                }

                if (item.type == "checkbox") {
                    for (let j = 0; j < item.options.length; j++) {
                        box += `<input style="margin-left: 51px;" answer="` + item.answer + `"  class="form-check-input field" type="${item.type}" name="${item.question}" value="${item.options[j].value}" id="${item.options[j].value}" ><label class="form-check-label" for="${item.options[j].value}">
                        ${item.options[j].label}
                       </label>`;
                    }
                    obj += `<div class="col-lg-7"><label for="${item.type}" class="form-label"><h6>${item.question}</h6></label></div>
                    <div class="col-6">${box}</div>`
                }

                if (item.type == "textarea") {
                    obj += `<div class="col-lg-7">
                        <label for="` + item.type + `">` + item.question + `</label>
                        <input type="` + item.type + `" class=" form-control area" style="width: 234px;"
                        id="` + item.type + `" required="` + item.optional + `" answer="` + item.answer + `"
                        placeholder="Here....">
                        <span class="text-danger error" id="textcheck"></span></div>`
                }

                if (item.type == "matrix") {
                    row = item.rows.length;
                    col = item.columns.length;
                    for (let j = 0; j < item.rows.length; j++) {
                        for (let j = 0; j < item.columns.length; j++) {
                            colObj += `<input class="form-check-input field" type="radio" name="${k}"  id="${k}${item.columns[j].value}" value="${item.columns[j].value}">
                                         <label for="${k}${item.columns[j].value}" class="form-check-label">
                                        ${item.columns[j].text}
                                        </label>`
                        }
                        rowObj += `<tr><th value="${item.rows[j].value}">${item.rows[j].text}</th><td>${colObj}</td></tr>`
                        $('#table').append(rowObj)
                        colObj = "";
                        k++;
                    }
                }
                $('#divMain').html(obj)
            });
        }
    })
    $('#submit').click(function () {
        var match = 0;
        var name = $('#text').length;
        for (let i = 0; i < name; i++) {
            if ($('#text').val() == '') {
                $('#namecheck').text('please write your name!!')
                alert('fdg')
            } else if ($('#text').attr("answer") == $('#text').val()) {
                $('#namecheck').text('')
                match++;
            }
        };

        var date = $('#datepicker').length;
        for (let j = 0; j < date; j++) {
            if ($('#datepicker').val() == '') {
                $('#datecheck').text('please Fill your DOB!!')
            } else if ($('#datepicker').attr("answer") == $('#datepicker').val()) {
                $('#datecheck').text('')
                match++;
            }
        }
        var gender = $('input[name=Gender]').length;
        for (let i = 0; i < gender; i++) {
            if ($('input[name=Gender]:checked').val() == undefined) {
                $('input[name=Gender]').css({ "border-color": "red", "box-shadow": " 1px 1px 5px red" })
            } else if ($('input[name=Gender]:checked').attr("answer") == $('input[name=Gender]:checked').val()) {
                match += 0.5;
            }
        };
        var status = $('input[name=Status]').length;
        for (let i = 0; i < status; i++) {
            if ($('input[name=Status]:checked').val() == undefined) {
                $('input[name=Status]').css({ "border-color": "red", "box-shadow": " 1px 1px 5px red" })
            } else if ($('input[name=Status]:checked').attr("answer") == $('input[name=Status]:checked').val()) {
                match += 0.5;
            }
        };

        var country = $('select').length;
        for (let i = 1; i <= country; i++) {
            if ($(`#${i}`).val() == '') {
                $(`#${i}`).css({ "color": "red", "box-shadow": " 1px 1px 5px red" })
            } else if ($(`#${i}`).attr('answer') == $(`#${i}`).val()) {
                match++;
            }
        }
        // for (let id = 0; id < $('input[type=checkbox]').length; id++) {
        //     var checked = $("input[@id=" + id + "]:checked").length;
        //     alert(checked);

        //     if (checked == 0) {
        //         error = false;
        //     } else {
        //         error = true;
        //     }
        // }
        var hobby = $('input[type=checkbox]').length;
        for (let i = 0; i < hobby; i++) {
            if ($('input[type="checkbox"]:checked').val() == undefined) {
                $('input[type="checkbox"]').css({ "border-color": "red", "box-shadow": " 1px 1px 5px red" })
            }
        };
        if ($('input[type="checkbox"]').attr('answer') == $('input[type="checkbox"]:checked').val()) {
            match++;
        };

        var name = $('#textarea').length;
        for (let i = 0; i < name; i++) {
            if ($('#textarea').val() == '') {
                $('#textcheck').text('please write here!!')
                alert('fdg')
            } else if ($('#textarea').attr("answer") == $('#text').val()) {
                $('#textcheck').text('')
                match++;
            }
        };

        for (let i = 0; i < row; i++) {
            if ($(`input[name=${i}]:checked`).val() == undefined) {
                $(`input[name=${i}]`).text('Please fill').css({ "color": "red" })
            }
        }
        $('#score').html('Your Score ' + match);
    })
})