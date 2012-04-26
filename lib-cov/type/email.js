/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['type/email.js']) {
  _$jscoverage['type/email.js'] = [];
  _$jscoverage['type/email.js'][1] = 0;
  _$jscoverage['type/email.js'][2] = 0;
  _$jscoverage['type/email.js'][3] = 0;
  _$jscoverage['type/email.js'][4] = 0;
  _$jscoverage['type/email.js'][5] = 0;
  _$jscoverage['type/email.js'][14] = 0;
  _$jscoverage['type/email.js'][15] = 0;
  _$jscoverage['type/email.js'][19] = 0;
  _$jscoverage['type/email.js'][20] = 0;
  _$jscoverage['type/email.js'][22] = 0;
  _$jscoverage['type/email.js'][23] = 0;
  _$jscoverage['type/email.js'][27] = 0;
  _$jscoverage['type/email.js'][28] = 0;
  _$jscoverage['type/email.js'][30] = 0;
  _$jscoverage['type/email.js'][31] = 0;
  _$jscoverage['type/email.js'][34] = 0;
  _$jscoverage['type/email.js'][37] = 0;
  _$jscoverage['type/email.js'][40] = 0;
  _$jscoverage['type/email.js'][42] = 0;
  _$jscoverage['type/email.js'][45] = 0;
}
_$jscoverage['type/email.js'][1]++;
var Utils = require("../utils");
_$jscoverage['type/email.js'][2]++;
var TypeFactory = require("./base").TypeFactory;
_$jscoverage['type/email.js'][3]++;
var CondenseError = require("./base").CondenseError;
_$jscoverage['type/email.js'][4]++;
var Validator = require("validator");
_$jscoverage['type/email.js'][5]++;
var EmailType;
_$jscoverage['type/email.js'][14]++;
EmailType = (function () {
  _$jscoverage['type/email.js'][15]++;
  var defaults = {};
  _$jscoverage['type/email.js'][19]++;
  EmailType = (function (n) {
  _$jscoverage['type/email.js'][20]++;
  var o = new String(n);
  _$jscoverage['type/email.js'][22]++;
  o.validate = (function (options) {
  _$jscoverage['type/email.js'][23]++;
  options = Utils.merge(Utils.clone(defaults), options);
  _$jscoverage['type/email.js'][27]++;
  var email = this.toString();
  _$jscoverage['type/email.js'][28]++;
  var check = Validator.check(email);
  _$jscoverage['type/email.js'][30]++;
  if (options.required === true && email == "") {
    _$jscoverage['type/email.js'][31]++;
    return "This Email is required and cannot be blank";
  }
  _$jscoverage['type/email.js'][34]++;
  return CondenseError(check.isEmail, check);
});
  _$jscoverage['type/email.js'][37]++;
  return o;
});
  _$jscoverage['type/email.js'][40]++;
  EmailType.__name = "Email";
  _$jscoverage['type/email.js'][42]++;
  return EmailType;
})();
_$jscoverage['type/email.js'][45]++;
module.exports = EmailType;
_$jscoverage['type/email.js'].source = ["var Utils = require(\"../utils\");","var TypeFactory = require(\"./base\").TypeFactory;","var CondenseError = require(\"./base\").CondenseError","var Validator = require('validator');","var EmailType;","","/*"," *"," * Usage:"," *   var EmailType = Types.get(\"Email\");"," *   var x = EmailType(100);"," *"," */","EmailType = (function(){","  var defaults = {","    // required: true,","  }","  ","  EmailType = function(n){","    var o = new String(n);","    ","    o.validate = function(options){","      options = Utils.merge(Utils.clone(defaults), options);","      ","      // TODO: validate options obj","      ","      var email = this.toString();","      var check = Validator.check(email);","      ","      if (options.required === true &amp;&amp; email == \"\"){","        return \"This Email is required and cannot be blank\";","      }","      ","      return CondenseError(check.isEmail, check);","    }","    ","    return o;","  }","  ","  EmailType.__name = \"Email\";","  ","  return EmailType;","})();","","module.exports = EmailType;"];
