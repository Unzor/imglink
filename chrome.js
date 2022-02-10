var {
    spawn
} = require("child_process");
module.exports = {
    open: function(url) {
        if (!url) {
            spawn("chromium-browser --no-sandbox", {
                shell: true,
                stdio: "inherit"
            });
        } else {
            spawn("chromium-browser --no-sandbox " + url, {
                shell: true,
                stdio: "inherit"
            });
        }
    }
}
