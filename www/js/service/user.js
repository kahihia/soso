angular.module('starter.services')

.service('UserService', function($http, AppConfigService) {
    this.user = {};
    var service = this;

    this.signin = function(params) {
        var url = AppConfigService.api_url + "user/login";
        $http.get(url, { 
            "timeout": 10000,
            "params": { "username": params.username, "passwd": params.passwd } 
        })
        
        .success(function(protocol) {
            if (protocol.return_code === "SUCCESS") {
                if (params.success) {
                    service.user = protocol.data;
                    params.success(protocol.return_code, protocol.return_message, protocol.data);
                }
            }
            else {
                if (params.fail) {
                    params.fail(protocol.return_code, protocol.return_message);
                }
            }
        })
            
        .error(function(protocol) {
            if (params.error) {
                params.error("ERROR", "网络错误");
            }
        });
    };

    this.signup = function(params) {
        var url = AppConfigService.api_url + "user/rigister";
        $http.get(url, { 
            "timeout": 10000,
            "params": { "username": params.username, "passwd": params.passwd, "group": params.group, "code": params.code } 
        })
        
        .success(function(protocol) {
            if (protocol.return_code === "SUCCESS") {
                if (params.success) {
                    service.user = protocol.data;
                    params.success(protocol.return_code, protocol.return_message, protocol.data);
                }
            }
            else {
                if (params.fail) {
                    params.fail(protocol.return_code, protocol.return_message);
                }
            }
        })
            
        .error(function(protocol) {
            if (params.error) {
                params.error("ERROR", "网络错误");
            }
        });
    };

    this.update_bank = function(params) {
        var url = AppConfigService.api_url + "user/updatebank";
        $http.get(url, { 
            "timeout": 10000,
            "params": { "user": params.user, "bank": params.bank, "bank_user": params.bank_user, "bank_brand": params.bank_brand, "bank_card": params.bank_card } 
        })
        
        .success(function(protocol) {
            if (protocol.return_code === "SUCCESS") {
                if (params.success) {
                    service.user = protocol.data;
                    params.success(protocol.return_code, protocol.return_message, protocol.data);
                }
            }
            else {
                if (params.fail) {
                    params.fail(protocol.return_code, protocol.return_message);
                }
            }
        })
            
        .error(function(protocol) {
            if (params.error) {
                params.error("ERROR", "网络错误");
            }
        });
    };

    return this;
});
