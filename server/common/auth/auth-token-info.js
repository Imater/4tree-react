/**
 * @api {post} api/oauth/token Get tokens by password
 * @apiName authByPassword
 * @apiGroup Auth
 * @apiPermission Everyone
 * @apiParam {String} grant_type Need to be 'password'
 * @apiParam {String} client_id App id. Need to be '777'
 * @apiParam {String} client_secret App secret. Need to be 'kickcitysecret'
 * @apiParam {String} username Registered user email. Need to be 'test@test.ru'
 * @apiParam {String} password Registered user sha1(salt + pass + salt). Need to be 'ab164f0c91d174ec2a078d7f4984a943c3c0c57d' for password 'test'
 *
 * @apiSuccess {String} token_type Usually = 'bearer'
 * @apiSuccess {String} access_token Access token for usage in params (?access_token=...)
 * @apiSuccess {Number} expires_in Seconds to expire access_token from now. Usually = 3600
 * @apiSuccess {String} refresh_token Refresh token for usage to get access_token by refresh_token
 *
 * @apiError 400 JSON has information about error
 */

/**
 * @api {post} api/oauth/token Get tokens by social
 * @apiName authBySocial
 * @apiGroup Auth
 * @apiPermission Everyone
 * @apiParam {String} grant_type Need to be 'urn:custom:social'
 * @apiParam {String} client_id App id. Need to be '777'
 * @apiParam {String} client_secret App secret. Need to be 'kickcitysecret'
 * @apiParam {Enum} social_type Need to be 'vk' or 'facebook'
 * @apiParam {String} social_id Id from social network
 *
 * @apiSuccess {String} token_type Usually = 'bearer'
 * @apiSuccess {String} access_token Access token for usage in params (?access_token=...)
 * @apiSuccess {Number} expires_in Seconds to expire access_token from now. Usually = 3600
 * @apiSuccess {String} refresh_token Refresh token for usage to get access_token by refresh_token
 *
 * @apiError 400 JSON has information about error
 */

/**
 * @api {post} api/oauth/token Get tokens by refresh_token
 * @apiName authByRefreshToken
 * @apiGroup Auth
 * @apiDescription Params need to be send in type 'application/x-www-form-urlencoded'.
 * Old refresh_token will be deleted. Need to replace by this new refresh_token
 * @apiPermission Everyone
 * @apiParam {String} grant_type Need to be 'refresh_token'
 * @apiParam {String} client_id App id. Need to be '777'
 * @apiParam {String} client_secret App secret. Need to be 'kickcitysecret'
 * @apiParam {String} refresh_token Refresh token recieved by password or by this request
 *
 * @apiSuccess {String} token_type Usually = 'bearer'
 * @apiSuccess {String} access_token Access token for usage in params (?access_token=...)
 * @apiSuccess {Number} expires_in Seconds to expire access_token from now. Usually = 3600
 * @apiSuccess {String} refresh_token Refresh token for usage to get access_token by refresh_token
 *
 * @apiError 400 JSON has information about error
 */

/**
 * @api {get} api/secret-area?access_token= Secret sample area for test
 * @apiName getInfoByToken
 * @apiGroup Auth
 * @apiDescription test if access_token works
 * @apiPermission User
 * @apiParam {String} access_token Access_token recieved by password or by refresh_token
 *
 * @apiSuccess {Bool} secretArea Allways true if access_token valid
 *
 * @apiError 400 JSON has information about error
 */
