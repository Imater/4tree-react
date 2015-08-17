'use strict';

var avatarsFound = function(avatars, userId) {
    var found = false;
    avatars.map(function(user) {
        if (user.id && user.id === userId) {
            found = true;
        }
    });
    return found;
};

module.exports = function(req, userId, event, ids, cb) {
    if (!event) {
        return cb(null, null);
    }
    if (typeof event.toJSON === 'function') {
        event = event.toJSON();
    }
    var iAmGoing = false;
    var avatars = [];
    event.going = {
        canEdit: req.user.isAdmin || (userId === event.userId)
    };
    if (event.userGoing) {
        var frendsGoing = event.userGoing.filter(function(user) {
            if (!iAmGoing && userId === userId) {
                iAmGoing = true;
            }
            if (avatars.length < 2 && userId !==
                user.id && user.avatar) {
                avatars.push(user);
            }
            return ids.indexOf(user.id) !== -1;
        });
        var othersGoing = event.userGoing.filter(function(user) {
            if (avatars.length < 2 && userId !==
                user.id && user.avatar && !avatarsFound(avatars, user.id)) {
                avatars.push(user);
            }
            return ids.indexOf(user.id) === -1;
        });
        if (avatars.length < 2) {
            event.userGoing.filter(function(user) {
                if (avatars.length <= 2 && userId ===
                    user.id && user.avatar && !avatarsFound(avatars, user.id)
                ) {
                    avatars.push(user);
                }
                return ids.indexOf(user.id) === -1;
            });
        }

        delete event.userGoing;
        event.going.avatars = avatars;
        event.going.frendsCount = frendsGoing.length;
        event.going.othersCount = othersGoing.length;
        event.going.iAmGoing = iAmGoing;
    }
    var iAmLiked = false;
    if (event.userLike) {
        event.userLike.filter(function(user) {
            if (userId === user.id) {
                iAmLiked = true;
            }
        });
        delete event.userLike;
        event.going.iAmLiked = iAmLiked;
    }
    cb(null, event);
};
