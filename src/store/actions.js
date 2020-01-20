// import { fetchPosts }   from './fetch';
// import { AsyncStorage } from 'react-native';
//
// // ensure data for rendering given list type
// export function FETCH_LIST_DATA ({ commit, dispatch }, { type }) {
//   commit('FETCHING_LISTS');
//   return fetchPosts(type)
//     .then(posts => {
//       return commit('SET_POSTS', { posts })
//     });
// }
// 
// export function LOGIN ({ commit, state}, {userObj, navigate}) {
//   commit('LOGGING_IN', true)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       commit('LOGIN_SUCCESFULL', {userObj})
//       AsyncStorage.setItem('email', userObj.email)
//       navigate('Home');
//       resolve();
//     }, 1000);
//   });
// }
// 
// export function SET_USER({commit, state}, {userObj}) {
//   return commit('LOGIN_SUCCESFULL', {userObj})
// }
// 
// export function LOGOUT ({ commit, state}, callback) {
//   return new Promise((resolve, reject) => {
//     AsyncStorage.removeItem('email').then(() => {
//       callback();
//       resolve();
//     });
//   });
// }

export const ARTICLE_PUBLISH         = "publishArticle";
export const ARTICLE_DELETE          = "deleteArticle";
export const ARTICLE_EDIT            = "editArticle";
export const ARTICLE_EDIT_ADD_TAG    = "addTagToArticle";
export const ARTICLE_EDIT_REMOVE_TAG = "removeTagFromArticle";
export const ARTICLE_RESET_STATE     = "resetArticleState";
export const CHECK_AUTH              = "checkAuth";
export const COMMENT_CREATE          = "createComment";
export const COMMENT_DESTROY         = "destroyComment";
export const FAVORITE_ADD            = "addFavorite";
export const FAVORITE_REMOVE         = "removeFavorite";
export const FETCH_ARTICLE           = "fetchArticle";
export const FETCH_ARTICLES          = "fetchArticles";
export const FETCH_COMMENTS          = "fetchComments";
export const FETCH_PROFILE           = "fetchProfile";
export const FETCH_PROFILE_FOLLOW    = "fetchProfileFollow";
export const FETCH_PROFILE_UNFOLLOW  = "fetchProfileUnfollow";
export const FETCH_TAGS              = "fetchTags";
export const LOGIN                   = "login";
export const LOGOUT                  = "logout";
export const REGISTER                = "register";
export const UPDATE_USER             = "updateUser";
