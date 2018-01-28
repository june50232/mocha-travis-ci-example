module.exports = function url(text) {
  const URL_REGEXP = new RegExp(/(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/=]*))/, 'g')
  const index = text.search(URL_REGEXP);
  const url = text.substring(index).split(URL_REGEXP)[1];
  return url
}
