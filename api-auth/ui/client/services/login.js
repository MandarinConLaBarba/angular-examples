module.exports = ['apiService', function(apiService) {

    return {

        login : function(username, password) {

            return apiService.postRequest("/auth", {
                username : username,
                password : password
            });

        }
    };

}];
