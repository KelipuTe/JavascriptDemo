/**
 * Created by KelipuTe on 2017/11/14.
 */
$(document).ready(function () {

    /*姓名验证*/
    function regName(name) {
        return name === '';
    }

    /*日期验证*/
    function regDate(birthday) {
        var pattern = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        return pattern.test(birthday);
    }

    /*岗位验证*/
    function regJob(job) {
        return job === '0';
    }

    /*薪资验证*/
    function regSalary(salary) {
        var pattern = /^[0-9]+(.[0-9]{2})*$/;
        return pattern.test(salary);
    }

    /*身份证号码验证*/
    function regIdentity(identity) {
        var pattern = /^\d{18}$/;
        return pattern.test(identity);
    }

    /*验证*/
    function regStrat() {
        var success = 1;
        var name = $('#name').val();
        var birthday = $('#birthday').val();
        var job = $('#job').val();
        var salary = $('#salary').val();
        var identity = $('#identity').val();
        var remarks = $('#remarks').val();
        if(regName(name)){
            $('#message-name').removeClass('form-success');
            $('#message-name').addClass('form-error');
            $('.master-body').css({"border":"1px solid red"});
            success = 0;
        }
        if(!regDate(birthday)){
            $('#message-birthday').removeClass('form-success');
            $('#message-birthday').addClass('form-error');
            $('.master-body').css({"border":"1px solid red"});
            success = 0;
        }
        if(regJob(job)){
            $('#message-job').removeClass('form-success');
            $('#message-job').addClass('form-error');
            $('.master-body').css({"border":"1px solid red"});
            success = 0;
        }
        if(!regSalary(salary)){
            $('#message-salary').removeClass('form-success');
            $('#message-salary').addClass('form-error');
            $('.master-body').css({"border":"1px solid red"});
            success = 0;
        }
        if(!regIdentity(identity)){
            $('#message-identity').removeClass('form-success');
            $('#message-identity').addClass('form-error');
            $('.master-body').css({"border":"1px solid red"});
            success = 0;
        }
        return success;
    }

    /*样式归位*/
    function reset() {
        $('.master-body').css({"border":"1px solid green"});
        $('#message-name').removeClass();
        $('#message-name').addClass('form-success');
        $('#message-birthday').removeClass();
        $('#message-birthday').addClass('form-success');
        $('#message-job').removeClass();
        $('#message-job').addClass('form-success');
        $('#message-salary').removeClass();
        $('#message-salary').addClass('form-success');
        $('#message-identity').removeClass();
        $('#message-identity').addClass('form-success');
    }

    /*提交按钮*/
    $('#form-submit').click(function () {
        reset();
        if(regStrat() === 1){
            alert('没问题，可以提交');
            //$('#form-post').submit();
        }

    });
});