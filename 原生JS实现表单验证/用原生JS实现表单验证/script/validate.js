/**
 * 创建一个表单验证区域
 * @param {object} option 配置对象
 */
function createFormValidateArea(option) {

    regInputEvent();
    regSubmitEvent();

    /**
     * 注册input事件
     */
    function regInputEvent() {
        for (var field in option.validateRules) { //循环对象的所有属性
            //得到对应的文本框
            var inp = option.formDom.querySelector(`input[name="${field}"]`);
            (function (field) {
                inp.oninput = function () {
                    validateField(field);
                }
            }(field)); //用立即执行函数解决作用域的问题
        }
    }

    /**
     * 注册提交事件
     */
    function regSubmitEvent() {
        option.formDom.onsubmit = function () {
            return validate(); //返回验证结果，返回false时将阻止表单提交
        }
    }

    /**
     * 得到表单中所有需要验证的数据
     */
    function getFormData() {
        var obj = {};
        for (var prop in option.validateRules) {
            var inp = option.formDom.querySelector(`input[name="${prop}"]`);
            obj[prop] = inp.value;
        }
        return obj;
    }

    /**
     * 验证整个表单，如果全部成功，则返回true，如果有失败，则返回false
     */
    function validate() {
        var success = true;
        for (var field in option.validateRules) { //循环所有字段
            var result = validateField(field); //验证一个字段
            if (result) {
                //有错误消息
                success = false;
            }
        }
        return success;
    }

    /**
     * 设置错误样式
     * @param {*} field 表单字段名
     * @param {*} message 错误消息，如果是undefined，则表示没有错误
     */
    function setErrorClass(field, message) {
        var div = option.formDom.querySelector(`[data-field="${field}"]`);
        var divError = div.querySelector("[data-error]");
        if (message) {
            divError.innerText = message;
            div.classList.add(option.errorClass);
        }
        else {
            divError.innerText = "";
            div.classList.remove(option.errorClass);
        }
    }

    /**
     * 根据配置、指定的表单字段，验证该字段，如果通过，返回undefined，如果错误，返回错误消息
     * @param {*} field 
     */
    function validateField(field) {
        var validateRules = option.validateRules[field]; //拿到该字段的规则数组
        for (var i = 0; i < validateRules.length; i++) {
            var r = validateRules[i];
            var result = validateFieldByRule(field, r);
            if (result) {
                //该规则未通过
                setErrorClass(field, result);
                return result;//返回错误消息
            }
        }
        setErrorClass(field);
    }

    /**
     * 根据一条规则对象，和表单项名称，验证该规则是否通过，
     * 如果通过，返回undefined，如果没有通过，返回错误消息
     * @param {*} field 
     * @param {*} validateRule 
     */
    function validateFieldByRule(field, validateRule) {
        //得到当前表单的数据
        var formData = getFormData();
        var val = formData[field]; //取出要验证的值
        if (validateRule.rule === "required") {
            //非空验证
            if (!val) {
                return validateRule.message;
            }
        }
        else if (validateRule.rule instanceof RegExp) {
            //正则验证
            if (!validateRule.rule.test(val)) {
                return validateRule.message;
            }
        }
        else if (typeof validateRule.rule === "function") {
            //自定义验证
            return validateRule.rule(val, formData);
        }
    }
}