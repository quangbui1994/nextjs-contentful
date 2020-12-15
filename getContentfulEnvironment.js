const contentfulManagement = require('contentful-management')
 
module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: 'CFPAT-p9JVfI55-oGGshr1fPosorGWhKMFSloevEEbhItuu-E'
    });
 
    return contentfulClient
    .getSpace('9avvg8tgfdk2')
    .then(space => space.getEnvironment('master-2020-12-12'))
}