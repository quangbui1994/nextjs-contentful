const contentfulManagement = require('contentful-management')
 
module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: process.env.NEXT_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
    });
 
    return contentfulClient
    .getSpace(process.env.NEXT_CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment('master-2020-12-12'))
}