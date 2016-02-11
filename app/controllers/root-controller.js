/**
 * Created by kbarbounakis on 2/10/16.
 */
/**
 * @private
 */
var web = require("most-web"), util = require("util");
/**
 * @constructor
 * @augments {HttpBaseController}
 */
function RootController() {
    //
}
util.inherits(RootController, web.controllers.HttpBaseController);

/**
 * FOR DEMO PURPOSES ONLY
 * Simulates user authentication for this demo application. This method will be called during /index.html request
 * @param {Function} callback
 * @returns {*}
 * @private
 */
function demo_(callback) {
    var self = this, context = self.context,
    //get demo user names from app.json configuration
        userNames = context.application.config.settings.general.demoUsers;
    //check if user is anonymous or a login parameter is passed (for demo purposes)
    if ((context.user.name === "anonymous") || context.params.login) {
        context.application.setAuthCookie(context, context.params.login || userNames[0]);
        return callback(null, self.redirect("/"));
    }
    else {
        //get demo users
        context.model("User")
            .where("name").in(userNames)
            .silent().cache(true).all().then(function(demoUsers) {
            //get current user
            context.model("User").where("name").equal(context.user.name).silent().first().then(function(user) {
                //extend context user (with all extra properties)
                util._extend(context.user, user);
                //set demo users
                return callback(null, self.view( { demoUsers:demoUsers } ));
            }).catch(function(err) {
                return callback(null, self.view({ demoUsers:[] }));
            });
        }).catch(function(err) {
            return callback(null, self.view({ demoUsers:[] }));
        });
    }
}

RootController.prototype.index = function (callback) {
    return demo_.call(this, callback);
};

if (typeof module !== 'undefined') module.exports = RootController;
